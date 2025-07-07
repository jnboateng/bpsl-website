import React, { useState, useEffect } from "react";
import {
  ChevronDown,
  ChevronUp,
  Phone,
  MapPin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { getBranches } from "../Api";
import { toast } from "react-toastify";

const MapUpdater = ({ position, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (position) {
      map.setView(position, zoom);
    }
  }, [position, zoom, map]);
  return null;
};

const BranchDirectory = () => {
  const [branches, setBranches] = useState({});
  const [loading, setLoading] = useState(true);
  const [regions, setRegions] = useState([]);
  const [selectedRegion, setSelectedRegion] = useState("");
  const [expandedBranchId, setExpandedBranchId] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedBranchId, setSelectedBranchId] = useState(null);
  const branchesPerPage = 5;

  useEffect(() => {
    const fetchBranches = async () => {
      try {
        setLoading(true);
        const response = await getBranches();
        
        const transformedBranches = {};
        const regionsWithBranches = [];
        
        for (const region in response.data.regions) {
          const regionBranches = response.data.regions[region].map(branch => ({
            ...branch,
            gps: branch.gps ? { 
              lat: parseFloat(branch.gps.lat),
              lng: parseFloat(branch.gps.lng)
            } : null,
            id: branch.id || `${region}-${branch.location.replace(/\s+/g, '-').toLowerCase()}`
          }));
          
          if (regionBranches.length > 0) {
            transformedBranches[region] = regionBranches;
            regionsWithBranches.push(region);
          }
        }

        setBranches(transformedBranches);
        setRegions(regionsWithBranches);
        setSelectedRegion(regionsWithBranches[0] || "");
      } catch (error) {
        toast.error('Failed to fetch branches');
        console.error("Error fetching branches:", error);
        setBranches({});
        setRegions([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBranches();
  }, []);

  const regionBranches = branches[selectedRegion] || [];
  const paginatedBranches = regionBranches.slice(
    currentPage * branchesPerPage,
    (currentPage + 1) * branchesPerPage
  );

  // Find the currently selected branch object
  const selectedBranch = regionBranches.find(b => b.id === selectedBranchId) || 
                       (paginatedBranches[0]?.gps ? paginatedBranches[0] : null);

  const handleBranchClick = (branch) => {
    setSelectedBranchId(branch.id);
    setExpandedBranchId(prev => prev === branch.id ? null : branch.id);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setExpandedBranchId(null);
    // Reset selection when changing pages
    setSelectedBranchId(null);
  };

  const defaultPosition = [5.55867, -0.20118];
  const mapPosition = selectedBranch?.gps
    ? [selectedBranch.gps.lat, selectedBranch.gps.lng]
    : defaultPosition;
  const mapZoom = selectedBranch?.gps ? 15 : 13;

  const markerIcon = new L.Icon({
    iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple"></div>
      </div>
    );
  }

  if (regions.length === 0) {
    return (
      <div className="text-center py-8 text-gray-500">
        No branch data available
      </div>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 w-full z-50">
      <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-lg p-4">
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700">Regions:</label>
          <select
            value={selectedRegion}
            onChange={(e) => {
              setSelectedRegion(e.target.value);
              setExpandedBranchId(null);
              setCurrentPage(0);
              setSelectedBranchId(null);
            }}
            className="mt-1 z-50 block p-4 w-full rounded-md border-gray-300 shadow-sm"
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                {region}
              </option>
            ))}
          </select>
        </div>

        {paginatedBranches.map((branch) => {
          const isSelected = selectedBranchId === branch.id;
          const isExpanded = expandedBranchId === branch.id;
          
          return (
            <div key={branch.id} className={`border-b ${isSelected ? 'bg-purple-50' : ''}`}>
              <button
                onClick={() => handleBranchClick(branch)}
                className={`flex justify-between items-center w-full text-left py-2 px-2 rounded-md`}
              >
                <span className={`font-semibold ${isSelected ? 'text-purple-700' : 'text-gray-700'}`}>
                  {branch.location}
                </span>
                {isExpanded ? (
                  <ChevronUp className={isSelected ? 'text-purple-700' : 'text-gray-700'} />
                ) : (
                  <ChevronDown className={isSelected ? 'text-purple-700' : 'text-gray-700'} />
                )}
              </button>

              {isExpanded && (
                <div className="mt-2 ml-4 text-sm text-gray-700 space-y-1">
                  <div className="flex items-center gap-2">
                    <Phone size={16} className="text-purple-100" />
                    <span>{branch.phone || "0506335358"}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin size={16} className="text-purple-100" />
                    <span>{branch.area}</span>
                  </div>
                </div>
              )}
            </div>
          );
        })}

        <div className="flex justify-between items-center mt-4">
          <button
            disabled={currentPage === 0}
            onClick={() => handlePageChange(currentPage - 1)}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronLeft className="text-purple-100" />
          </button>
          <span className="text-sm text-gray-600">
            Page {currentPage + 1} of {Math.ceil(regionBranches.length / branchesPerPage)}
          </span>
          <button
            disabled={(currentPage + 1) * branchesPerPage >= regionBranches.length}
            onClick={() => handlePageChange(currentPage + 1)}
            className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-50"
          >
            <ChevronRight className="text-purple-100" />
          </button>
        </div>
      </div>

      <div className="w-full lg:w-2/3 h-[300px] min-h-[300px] sm:min-h-[400px] md:min-h-[500px]">
        <MapContainer
          center={mapPosition}
          zoom={mapZoom}
          className="h-full w-full rounded-xl shadow-lg"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <MapUpdater position={mapPosition} zoom={mapZoom} />

          {selectedBranch?.gps && (
            <Marker
              position={[selectedBranch.gps.lat, selectedBranch.gps.lng]}
              icon={markerIcon}
            >
              <Popup>
                <div className="p-2 w-[200px] rounded-lg shadow-md z-50 bg-white text-sm">
                  <div className="font-semibold text-gray-800 leading-tight">
                    {selectedBranch.name || selectedBranch.location}
                  </div>
                  <div className="text-xs text-gray-600 mt-1">
                    {selectedBranch.location}
                  </div>
                  <div className="flex items-center gap-1 mt-2 text-gray-600 text-xs">
                    <MapPin className="text-blue-600 w-4 h-4" />
                    <span>{selectedBranch.area}</span>
                  </div>
                  <div className="mt-1 text-xs">
                    {isBranchOpen() ? (
                      <span className="text-green-600 font-semibold">Open</span>
                    ) : (
                      <span className="text-red-600 font-semibold">Closed</span>
                    )}
                    <span className="text-gray-500"> · Opens 8am Mon</span>
                  </div>
                </div>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </div>
  );
};

const openingHours = {
  openHour: 8,
  closeHour: 17,
  openDays: [1, 2, 3, 4, 5], // Monday to Friday
};

const isBranchOpen = () => {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();
  return (
    openingHours.openDays.includes(day) &&
    hour >= openingHours.openHour &&
    hour < openingHours.closeHour
  );
};

export default BranchDirectory;