import React, { useState, useEffect, useRef } from "react";
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
import { branches } from "../Pages/Locator";

// This component handles map view updates when selected branch changes
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
  const regions = Object.keys(branches);
  const [selectedRegion, setSelectedRegion] = useState(regions[0]);
  const [expandedBranch, setExpandedBranch] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedBranch, setSelectedBranch] = useState(null);
  const branchesPerPage = 7;

  const regionBranches = branches[selectedRegion] || [];
  const paginatedBranches = regionBranches.slice(
    currentPage * branchesPerPage,
    (currentPage + 1) * branchesPerPage
  );

  // Auto-select the first branch with GPS when region or page changes
  useEffect(() => {
    const firstBranchWithGPS = paginatedBranches.find((branch) => branch.gps);
    setSelectedBranch(firstBranchWithGPS || null);
  }, [selectedRegion, currentPage, paginatedBranches]);

  const toggleBranch = (branchLocation) => {
    setExpandedBranch((prev) =>
      prev === branchLocation ? null : branchLocation
    );
    const selected = regionBranches.find((b) => b.location === branchLocation);
    if (selected?.gps) setSelectedBranch(selected);
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setExpandedBranch(null);
  };

  const defaultPosition = [5.55867, -0.20118]; // Default to Head Office position

  // Determine current map position based on selected branch
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

  return (
    <div className="flex flex-col lg:flex-row gap-4 p-4 w-full z-50">
      <div className="w-full lg:w-1/3 bg-white rounded-xl shadow-lg p-4">
        <div className="mb-4">
          <label className="text-sm font-medium text-gray-700">Regions:</label>
          <select
            value={selectedRegion}
            onChange={(e) => {
              setSelectedRegion(e.target.value);
              setExpandedBranch(null);
              setCurrentPage(0);
            }}
            className="mt-1 z-50 block p-4 w-full rounded-md border-gray-300 shadow-sm "
          >
            {regions.map((region) => (
              <option key={region} value={region}>
                <span className="mx-4">{region}</span>
              </option>
            ))}
          </select>
        </div>

        {paginatedBranches.map((branch, index) => (
          <div key={index} className="border-b py-2">
            <button
              onClick={() => toggleBranch(branch.location)}
              className={`flex justify-between items-center w-full text-left py-2 px-2 rounded-md ${
                selectedBranch?.location === branch.location ? "" : ""
              }`}
            >
              <span
                className={`font-semibold ${
                  selectedBranch?.location === branch.location
                    ? "text-purple-700"
                    : "text-gray-700"
                }`}
              >
                {branch.location}
              </span>
              {expandedBranch === branch.location ? (
                <ChevronUp
                  className={
                    selectedBranch?.location === branch.location
                      ? "text-purple-700"
                      : "text-gray-700"
                  }
                />
              ) : (
                <ChevronDown
                  className={
                    selectedBranch?.location === branch.location
                      ? "text-purple-700"
                      : "text-gray-700"
                  }
                />
              )}
            </button>

            {expandedBranch === branch.location && (
              <div className="mt-2 ml-4 text-sm text-gray-700 space-y-1">
                <div className="flex items-center gap-2">
                  <Phone size={16} className="text-purple-600" />
                  <span>0506335358</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} className="text-purple-600" />
                  <span>{branch.area}</span>
                </div>
              </div>
            )}
          </div>
        ))}

        <div className="flex justify-between items-center mt-4">
          <button
            disabled={currentPage === 0}
            onClick={() => handlePageChange(currentPage - 1)}
            className="text-purple-600 disabled:opacity-50"
          >
            <ChevronLeft />
          </button>
          <button
            disabled={
              (currentPage + 1) * branchesPerPage >= regionBranches.length
            }
            onClick={() => handlePageChange(currentPage + 1)}
            className="text-purple-600 disabled:opacity-50"
          >
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="w-full lg:w-2/3 h-[500px]">
        <MapContainer
          center={mapPosition}
          zoom={mapZoom}
          className="h-full w-full rounded-xl shadow-lg"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* This component updates map view when selectedBranch changes */}
          <MapUpdater position={mapPosition} zoom={mapZoom} />

          {selectedBranch?.gps && (
            <Marker
              position={[selectedBranch.gps.lat, selectedBranch.gps.lng]}
              icon={markerIcon}
            >
              <Popup>
                <div className="p-2 w-[200px] rounded-lg shadow-md z-50 bg-white text-sm">
                  <div className="font-semibold text-gray-800 leading-tight">
                    {selectedBranch.name || "Best Point Savings & Loans"}
                    <br />
                    <span className="text-xs text-gray-600">
                      {selectedBranch.location}
                    </span>
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
  openDays: [1, 2, 3, 4, 5],
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
