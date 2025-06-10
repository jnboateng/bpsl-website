import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";
import Modal from "./Modal";
const categories = [ "Articles", "Gallery", "Blog"];
  export const articles = [
    {
      id: 1,
      category: "Articles",
      title: "10 things you need to know about Best Point",
      subTitle: "10 things you need to know about Best Point",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=200&q=80",
      image: "https://images.unsplash.com/photo-1617957741491-3c4a0b017063?auto=format&fit=crop&w=200&q=80",
      excerpt: "Open a savings account with an opening balance of GHS 5.00 ......",
      story: "Best Point has become a household name when it comes to secure and accessible savings options. Over the past decade, it has introduced innovative products designed to serve everyone from students to entrepreneurs. One of the most notable features is their seamless digital platform, which allows customers to manage funds on the go. Community outreach programs and financial literacy campaigns have strengthened public trust. Customers frequently cite personalized service and low entry requirements as key reasons for choosing Best Point.",
      quote: {
        person: "Ama K. Asante",
        quote: "Best Point helped me start saving with just 5 cedis. That small step changed my life.",
      },
    },
    {
      id: 2,
      category: "Articles",
      title: "Investment tips in 2025",
      subTitle: "Investment tips in 2025",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=200&q=80",
      image: "https://images.unsplash.com/photo-1592496001020-86dfea842d33?auto=format&fit=crop&w=200&q=80",
      excerpt: "Open a savings plus account with GHS 10.00 opening balance ......",
      story: "2025 is shaping up to be a dynamic year for investors in Ghana and beyond. With the global economy stabilizing, experts recommend diversifying into digital assets, green bonds, and local real estate. The emergence of sustainable funds has also opened new opportunities for value-aligned investing. For beginners, starting with mutual funds and index-linked products remains a safe bet. More financial institutions are offering robo-advisors to guide clients. It's no longer about just saving — it's about strategic growth.",
      quote: {
        person: "Kofi Owusu",
        quote: "Start small, be consistent, and always think long-term when investing.",
      },
    },
    {
      id: 3,
      category: "Articles",
      title: "How to land your dream job in banking",
      subTitle: "How to land your dream job in banking",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=200&q=80",
      image: "https://images.unsplash.com/photo-1587825140708-ec5d5ef136a4?auto=format&fit=crop&w=200&q=80",
      excerpt: "Insights from top HR managers and what they look for in CVs.",
      story: "Landing a job in banking takes more than a great GPA. Recruiters are looking for candidates who show initiative, have strong communication skills, and understand the industry. Internships play a huge role, especially when paired with relevant coursework and certifications. Candidates who tailor their applications and research the bank's values stand out. Networking also helps — attending conferences or reaching out to employees on LinkedIn can lead to interviews. Remember, confidence and preparation go hand in hand.",
      quote: {
        person: "Sarah Nartey",
        quote: "Banking is about trust — show up with integrity and a hunger to learn.",
      },
    },
    {
      id: 4,
      category: "Gallery",
      title: "Moments from the 2024 Annual Conference",
      subTitle: "Moments from the 2024 Annual Conference",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=200&q=80",
      images: [
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1540317580384-e5d500436cd9?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=400&q=80"
      ],
      excerpt: "A visual recap of inspiring moments and great memories.",
      story: "The 2024 Annual Conference brought together over 500 industry professionals for three days of insight, collaboration, and celebration. Keynote speakers addressed themes around digital transformation, customer engagement, and sustainable finance. Breakout sessions gave attendees space to workshop real-world challenges and share solutions. The conference closed with an awards night honoring staff and community leaders. From vibrant performances to deep discussions, the event captured the spirit of innovation and unity that drives Best Point's success.",
      quote: {
        person: "Michael Tetteh",
        quote: "The energy was contagious — I left inspired and ready to innovate.",
      },
    },
    {
      id: 5,
      category: "Blog",
      title: "Why financial literacy starts early",
      subTitle: "Why financial literacy starts early",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=200&q=80",
      image: "https://images.unsplash.com/photo-1603980942324-d42b3ff2fc0b?auto=format&fit=crop&w=200&q=80",
      excerpt: "Learn how teaching kids about savings changes everything long-term.",
      story: "Teaching financial literacy from a young age gives children a critical life advantage. It helps them understand the value of money, budgeting, and the power of saving over time. Programs in schools and homes that use games and real-life scenarios make money concepts relatable. Kids who learn early tend to develop healthier attitudes towards debt and spending. Financial independence begins with knowledge, and the earlier it's planted, the deeper the roots. The future of smart banking starts at home.",
      quote: {
        person: "Elorm Mensah",
        quote: "If I had learned to save at 10, I'd have made far fewer mistakes at 20.",
      },
    },
    {
      id: 6,
      category: "Articles",
      title: "Best Point wins Community Impact Award",
      subTitle: "Best Point wins Community Impact Award",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=200&q=80",
      image: "https://images.unsplash.com/photo-1515165562835-c7d61f4e25f1?auto=format&fit=crop&w=200&q=80",
      excerpt: "Recognized for excellence in financial inclusion across Ghana.",
      story: "Winning the Community Impact Award wasn't just about numbers — it was about stories. Best Point has invested heavily in underserved areas, offering mobile banking, microloans, and education workshops. Thousands of individuals have accessed formal banking services for the first time. This award is a testament to the staff, volunteers, and partners who believe in a more inclusive financial future. Every transaction and training session represents progress and empowerment in action.",
      quote: {
        person: "Nana Ama Baah",
        quote: "It's more than banking — it's believing in people and their potential.",
      },
    },
    {
      id: 7,
      category: "Articles",
      title: "Understanding mobile money trends in 2025",
      subTitle: "Understanding mobile money trends in 2025",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=200&q=80",
      image: "https://images.unsplash.com/photo-1616077166985-e376dfd0137e?auto=format&fit=crop&w=200&q=80",
      excerpt: "MoMo transactions are evolving — here's what to expect next.",
      story: "Mobile money has transformed how people send, save, and spend money in Ghana. In 2025, we're seeing new trends like instant loans, investment options, and biometric security features integrated into MoMo platforms. The shift towards QR payments and contactless options is also growing. Financial service providers are using AI to personalize offers, making mobile wallets more intelligent. As infrastructure improves, even rural areas are catching up. The next five years will redefine the mobile financial landscape.",
      quote: {
        person: "Yaw Boadu",
        quote: "Mobile money is no longer a convenience — it's a lifestyle.",
      },
    },
    {
      id: 8,
      category: "Gallery",
      title: "Staff team-building retreat highlights",
      subTitle: "Staff team-building retreat highlights",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=200&q=80",
      images: [
        "https://images.unsplash.com/photo-1621341441220-50f3a84baddd?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1527525443983-6e60c75fff46?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=400&q=80",
        "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?auto=format&fit=crop&w=400&q=80"
      ],
      excerpt: "From kayaking to bonfires — check out moments from the adventure!",
      story: "This year's team-building retreat was more than just a break from work — it was a chance to reconnect and recharge. From morning hikes to kayaking challenges, staff pushed limits and built bonds. The bonfire storytelling sessions and laughter-filled dinners reminded everyone that behind every desk is a real human with dreams and talents. Events like these boost morale, foster trust, and fuel creative collaboration. Strong teams make strong institutions — and that starts with shared memories.",
      quote: {
        person: "Linda Quartey",
        quote: "I've never felt more connected to my team — we're a family now.",
      },
    },
    {
      id: 9,
      category: "Articles",
      title: "The Journey of Building Financial Confidence",
      subTitle: "The Journey of Building Financial Confidence",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=200&q=80",
      image: "https://images.unsplash.com/photo-1565372918677-9c03b6ddf53b?auto=format&fit=crop&w=200&q=80",
      excerpt: "A deep dive into how everyday people can build lasting financial confidence from scratch.",
      story: `Building financial confidence is a journey — not a one-time decision. For many, it starts with a small step: opening a savings account, attending a financial literacy session, or even asking a friend about budgeting apps. While these actions may seem simple, they form the foundation of a lifelong mindset.
  
  In communities where money talk is considered taboo, learning to manage personal finances becomes even more critical. People grow up with the burden of making sense of their financial realities without guidance. That's why institutions like Best Point have stepped in to bridge the gap — by offering tools and education for anyone, no matter their income level.
  
  One of the most powerful tools in developing financial confidence is knowledge. Understanding how compound interest works, the risks of impulse buying, and how to plan for emergencies are game-changers. But knowledge alone isn't enough. The second part of the equation is experience. Trying and failing — then trying again — is how financial skills become habits.
  
  Consider someone who earns a modest salary but decides to track every cedi spent for a month. At first, it feels tedious. But patterns begin to emerge: small, repeated expenses on fast food or transport suddenly become visible. That visibility gives power — the power to change. Financial confidence is not about having a lot of money; it's about knowing how to make the most of what you have.
  
  Community support plays a vital role as well. In savings groups, accountability helps members stay on track. Group targets foster collective discipline, while storytelling allows members to learn from each other's mistakes and triumphs. When you hear how someone paid off a loan early or saved for their child's education, it fuels your belief that you can do it too.
  
  Technology has also transformed how people manage their finances. From mobile wallets to budgeting apps, it's easier than ever to access your account, transfer funds, or save automatically. But with ease also comes temptation — fast access to credit and spending features can derail a budget just as quickly as it enables it. That's why digital literacy goes hand-in-hand with financial confidence.
  
  Cultural beliefs and financial behavior are closely linked too. In some homes, saving is encouraged. In others, spending is equated with success. Changing one's relationship with money often involves unlearning and reframing those inherited ideas. It's a process — one that takes honesty and introspection.
  
  Workshops, mentoring programs, and employer-sponsored sessions are helping to shift the narrative. The earlier people start learning about money, the more equipped they are to face real-life decisions like choosing insurance, managing debt, or starting a business. Financial confidence becomes a form of freedom — it allows people to plan for the future rather than fear it.
  
  In the end, confidence is built through small wins. Paying off a bill on time. Saying no to an unnecessary purchase. Sticking to a budget for a week, then a month. These moments add up, and over time, they become a story of empowerment and control.
  
  Your financial journey may not look like anyone else's, and that's okay. What matters is moving forward, one decision at a time. With the right knowledge, community, and mindset, anyone can build a solid financial foundation and thrive.`,
      quote: {
        person: "Esi Boaduwaa",
        quote: "Financial confidence isn't about perfection — it's about progress and control over your choices.",
      },
    },
    {
      id: 10,
      category: "Articles",
      title: "How Small Habits Shape Your Financial Future",
      subTitle: "How Small Habits Shape Your Financial Future",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=200&q=80",
      image: "https://images.unsplash.com/photo-1508387023050-70df0f4deaab?auto=format&fit=crop&w=200&q=80",
      excerpt: "It's not the big decisions, but the daily ones that define your money story.",
      story: `Most people think financial success comes from one big breakthrough — landing a high-paying job, winning the lottery, or investing in the next big stock. But the truth is, your future is shaped by the tiny, often overlooked habits you build each day.
  
  Consider how you spend the first 30 minutes of your morning. Do you check your account balance, review yesterday's expenses, or plan for the day ahead? These micro-moments matter. They set the tone for mindful decisions and help you stay grounded in your financial goals.
  
  Habits like tracking spending, reviewing receipts, or meal-prepping can feel small, but they create massive long-term benefits. Saving GHS 10 per day may seem insignificant — until you look back at the GHS 3,600 you saved in a year. Those are the kind of wins that change everything.
  
  The most successful savers often follow a pattern: automate savings, limit impulse purchases, and reflect weekly. You don't have to be perfect — just consistent. It's the consistency that rewires your behavior and transforms your mindset.
  
  Another powerful habit is talking about money. Whether it's with a partner, mentor, or friend, discussing your financial goals out loud builds clarity and accountability. It can even reduce anxiety by bringing your plans into focus.
  
  Small changes add up — always. They may not make headlines, but they will make your future brighter. So start small. Stay steady. And watch your future unfold, one habit at a time.`,
      quote: {
        person: "Kwabena Dapaah",
        quote: "Big goals are reached by doing small things every day — that's how wealth is built.",
      },
    },
    {
      id: 11,
      category: "Blog",
      title: "Why Emergency Funds Are Non-Negotiable",
      subTitle: "Why Emergency Funds Are Non-Negotiable",
      img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=200&q=80",
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=200&q=80",
      excerpt: "Life is unpredictable — your savings shouldn't be.",
      story: `No one plans to have a car break down, lose a job, or face a sudden medical bill. Yet these things happen — often without warning. That's why emergency funds are essential for financial stability.
  
  An emergency fund is not just a savings account — it's a safety net, a buffer between you and the unknown. Experts recommend starting with at least one month's worth of expenses and slowly building toward three to six months.
  
  The peace of mind that comes from knowing you can handle life's curveballs is priceless. It prevents panic, reduces debt reliance, and allows you to make smarter long-term decisions instead of reacting out of desperation.
  
  It's okay to start small. Even GHS 50 per month adds up over time. The key is consistency — make your emergency fund a non-negotiable part of your budget, like rent or groceries.
  
  Life is uncertain. But your financial reaction to it doesn't have to be. Plan now so you don't panic later.`,
      quote: {
        person: "Naana Bruce",
        quote: "My emergency fund gave me breathing room when I lost my job — it kept me calm and focused.",
      },
    },
  
];

export default function Articles() {
  const [selectedCategory, setSelectedCategory] = useState("Articles");
  const [activeMobileCategory, setActiveMobileCategory] = useState("Articles");
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const filteredArticles =
    selectedCategory === "Articles"
      ? articles.filter((article) => article.category == "Articles") : articles;

  const getArticlesByCategory = (cat) =>
    cat === "Articles"
    ? articles.filter((article) => article.category === cat) : articles;

  const openGalleryModal = (galleryItem, index = 0) => {
    setSelectedGallery(galleryItem);
    setSelectedImageIndex(index);
  };

  const closeGalleryModal = () => {
    setSelectedGallery(null);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    setSelectedImageIndex((prev) =>
      prev < selectedGallery.images.length - 1 ? prev + 1 : 0
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prev) =>
      prev > 0 ? prev - 1 : selectedGallery.images.length - 1
    );
  };

   const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextImage();
    }
  
    if (touchStart - touchEnd < -50) {
      prevImage();
    }
  };

  return (
    <div id="articles" className="min-h-screen mt-16">
      <div className="flex gap-x-4 lg:gap-x-12 items-center justify-start ">
        <div className="bg-purple h-8 w-12 mb-2" />
        <h1 className="text-xl md:text-4xl font-semibold text-gray-800  leading-tight">
          Welcome to Our <br />
          <span className="text-gray-800  font-bold md:text-center">
            Stories, Articles & Gallery
          </span>
        </h1>
      </div>

      {/* Mobile View */}
      <div className="block md:hidden px-4 pb-10">
        <h2 className="text-gray-800  text-lg md:text-xl font-bold mb-4">Browse By:</h2>

        {/* Horizontal Category List */}
        <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() =>
                setActiveMobileCategory(
                  activeMobileCategory === cat ? null : cat
                )
              }
              className={`px-4 py-2 rounded-full whitespace-nowrap border transition-all text-sm font-medium ${
                activeMobileCategory === cat
                  ? "bg-purple-100 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Horizontal Articles List for Selected Category */}
        {activeMobileCategory && (
          <div className="mt-6 overflow-x-auto scrollbar-hide">
            <div className="flex space-x-6">
              {getArticlesByCategory(activeMobileCategory).map((article) => (
                <div
                  key={article.id}
                  className="w-72 flex-shrink-0 rounded-xl bg-white shadow-md p-4"
                >
                  {/* Gallery items show thumbnails */}
                  {article.category === "Gallery" ? (
                    <>
                      <div className="grid grid-cols-2 gap-2 mb-3">
                        {article.images.slice(0, 4).map((img, idx) => (
                          <div
                            key={idx}
                            className="cursor-pointer relative"
                            onClick={() => openGalleryModal(article, idx)}
                          >
                            <img
                              src={img}
                              alt={`${article.title} ${idx + 1}`}
                              className="w-full h-24 object-cover rounded-md"
                            />
                            {idx === 3 && article.images.length > 4 && (
                              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
                                <span className="text-white font-bold text-xs">
                                  +{article.images.length - 4}
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => openGalleryModal(article)}
                        className="text-xs text-purple-600 font-semibold mb-2"
                      >
                        View all images
                      </button>
                    </>
                  ) : (
                    <img
                      src={article.image || article.images?.[0]}
                      alt={article.title}
                      className="w-full h-48 object-cover rounded-md mb-3"
                    />
                  )}
                  
                  <span className="bg-purple text-white text-xs font-medium px-3 py-1 rounded-md mb-2 inline-block">
                    {article.category}
                  </span>
                  <h3 className="text-base text-gray-800  font-semibold mb-1">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-3 line-clamp-2">
                    {article.excerpt}
                  </p>
                  {article.category === "Gallery" ? (
                    <button
                      onClick={() => openGalleryModal(article)}
                      className="bg-gradient-to-r from-purple-800 to-purple-600 text-white text-xs font-semibold px-3 py-2 rounded-md w-full"
                    >
                      View Gallery
                    </button>
                  ) : (
                    <Link
                      to={`/stories/${article.id}`}
                      className="bg-gradient-to-r from-purple-800 to-purple-600 text-white text-xs font-semibold px-3 py-2 rounded-md inline-block"
                    >
                      Read More
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Desktop View */}
      <div className="hidden md:flex flex-col md:flex-row px-20 py-12 gap-10">
        <aside className="md:w-1/4">
          <h2 className="text-gray-800  text-2xl font-bold mb-6">
            Browse By:
          </h2>
          <ul className="space-y-4">
            {categories.map((cat) => (
              <li
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`cursor-pointer ${
                  selectedCategory === cat
                    ? "text-gray-800  font-semibold"
                    : "text-black"
                }`}
              >
                {cat}
              </li>
            ))}
          </ul>
        </aside>
        <main className="flex-1 space-y-6 overflow-y-scroll h-[calc(100vh-200px)] pr-4">
          {selectedCategory === "Gallery" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
              {filteredArticles
                .filter((article) => article.category === "Gallery")
                .map((article) => (
                  <div
                    key={article.id}
                    className="rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white"
                  >
                    <div className="p-4">
                      <h3 className="text-lg font-semibold text-purple-800 mb-4">
                        {article.title}
                      </h3>
                      <div className="grid grid-cols-2 gap-2 mb-4">
                        {article.images.slice(0, 4).map((img, idx) => (
                          <div
                            key={idx}
                            className="cursor-pointer relative group"
                            onClick={() => openGalleryModal(article, idx)}
                          >
                            <img
                              src={img}
                              alt={`${article.title} ${idx + 1}`}
                              className="w-full h-32 object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                            />
                            {idx === 3 && article.images.length > 4 && (
                              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-md">
                                <span className="text-white font-bold">
                                  +{article.images.length - 4}
                                </span>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                      <p className="text-sm font-extralight mb-2">
                        {article.excerpt}
                      </p>
                      <button
                        onClick={() => openGalleryModal(article)}
                        className="text-sm text-purple-600 font-semibold hover:underline"
                      >
                        View all images →
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-24">
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  className="rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative group">
                    <img
                      src={article.image || article.images?.[0]}
                      alt={article.title}
                      className="w-full h-64 object-cover shadow-md rounded-t-3xl transition-transform duration-300 transform group-hover:scale-105"
                    />
                    <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs font-semibold px-2 py-1 rounded">
                      {article.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-purple-800 mb-1">
                      {article.title}
                    </h3>
                    <p className="text-sm font-extralight mb-2">
                      {article.excerpt}
                    </p>
                    <Link
                      to={`/stories/${article.id}`}
                      className="text-sm text-purple-600 font-semibold hover:underline"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Gallery Modal */}
      {selectedGallery && (
        <Modal onClose={closeGalleryModal}>
          <div 
           onTouchStart={handleTouchStart}
           onTouchMove={handleTouchMove}
           onTouchEnd={handleTouchEnd}
          className="relative w-full max-w-6xl max-h-[90vh] bg-white rounded-lg overflow-y-scroll">
            <button
              onClick={closeGalleryModal}
              className="absolute top-4 right-4 z-50 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <div className="relative h-[40vh] md:h-[80vh]">
              <img
                src={selectedGallery.images[selectedImageIndex]}
                alt={`${selectedGallery.title} ${selectedImageIndex + 1}`}
                className="w-full h-full object-contain"
              />

              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-800"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            <div className="p-4 bg-gray-50">
              <h3 className="text-xl font-semibold text-purple-800 mb-2">
                {selectedGallery.title}
              </h3>
              <p className="text-gray-600 mb-4">{selectedGallery.excerpt}</p>

              <div className="flex overflow-x-auto space-x-2 py-2">
                {selectedGallery.images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className={`w-20 h-20 object-cover rounded-md cursor-pointer ${
                      selectedImageIndex === idx ? "ring-2 ring-purple-600" : ""
                    }`}
                    onClick={() => setSelectedImageIndex(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}