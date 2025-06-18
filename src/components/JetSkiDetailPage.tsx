import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Info,
  DollarSign,
  Check,
  ThumbsUp,
  Clock,
  Calendar,
  Shield,
  Wrench,
  Phone,
  MessageCircle,
  Heart,
  Share,
  ArrowLeft,
  FileText,
} from "lucide-react";

// This would typically come from an API or database
// For demo purposes, we're using a static mock
const jetSkiInventory = [
  {
    id: 1,
    year: 2024,
    brand: "Sea-Doo",
    model: "RXP-X 325 RS",
    images: [
      "https://ugc.same-assets.com/lHHf38NbMyB97XZlTWr1-4S8uNWKajkR.jpeg",
      "https://ugc.same-assets.com/TFTS6WI-HPxXrvDgmpsLezpfxTG7zH3O.png",
      "https://ugc.same-assets.com/KHz6vI9-XMPZBh3leUzn4mh0WFoCP3mk.jpeg",
    ],
    hours: 12,
    price: 18999,
    type: "Performance",
    engine: "1630 ACE - 325 HP",
    seating: "1-2 Passengers",
    features: [
      "Supercharged Engine",
      "Racing Performance",
      "Professional Grade",
      "GPS Navigation",
      "Bluetooth Connectivity",
      "Adjustable Ergonomics",
      "Launch Control System",
      "Advanced Race-Inspired Design",
      "Digital Display",
      "Intelligent Throttle Control",
    ],
    description:
      "The ultimate high-performance watercraft designed for racing and thrill-seekers. The RXP-X is the most precise and powerful watercraft on the water, offering a professional-grade racing experience like no other.",
    condition: "Like New",
    location: "Toronto Showroom",
    specifications: {
      length: '130.6" / 331.6 cm',
      width: '49.2" / 125 cm',
      weight: "850 lbs / 386 kg",
      fuel: "18.5 gal / 70 L",
      storage: "40.6 gal / 153.7 L",
      acceleration: "0-60 mph: 3.6 seconds",
      topSpeed: "73 mph / 117 km/h",
      hullType: "T3-R Hull",
      passengers: 2,
    },
    warranty: "2-year limited warranty",
    financing: {
      startingAt: "$299/month",
      downPayment: "$3,800",
      term: "60 months",
    },
    stockNumber: "SD-24-0112",
    vin: "YDV12345678901234",
    related: [2, 3, 6],
  },
  {
    id: 2,
    year: 2023,
    brand: "Yamaha",
    model: "FX Cruiser HO",
    images: [
      "https://ugc.same-assets.com/_RC3RLZV-TgbHvp5HbNXTfUs55VggWnS.png",
      "https://ugc.same-assets.com/Z6FTFYHi-FbzoWyPP-CgmqbZGwTB4ukg.png",
      "https://ugc.same-assets.com/D3OY8EuvQiL3AKd8l0OYW32GFKba0z8L.png",
    ],
    hours: 45,
    price: 15299,
    type: "Touring",
    engine: "1812cc High Output Marine Engine",
    seating: "1-3 Passengers",
    features: [
      "Luxury Touring",
      "Extended Range",
      "Comfort Package",
      "Storage Capacity",
      "GPS Navigation",
      "Cruise Assist",
      "No Wake Mode",
      "Reboarding Step",
      "Watertight Storage",
      "Dual Mirrors",
    ],
    description:
      "Perfect for long-distance touring with comfort and luxury features. The FX Cruiser HO combines performance and comfort, making it ideal for day-long adventures on the water with family and friends.",
    condition: "Excellent",
    location: "Mississauga Showroom",
    specifications: {
      length: '140.9" / 358 cm',
      width: '50" / 127 cm',
      weight: "836 lbs / 379 kg",
      fuel: "18.5 gal / 70 L",
      storage: "44.0 gal / 166.5 L",
      acceleration: "0-60 mph: 5.3 seconds",
      topSpeed: "65 mph / 105 km/h",
      hullType: "NanoXcel2 Hull",
      passengers: 3,
    },
    warranty: "1-year limited warranty",
    financing: {
      startingAt: "$249/month",
      downPayment: "$3,060",
      term: "60 months",
    },
    stockNumber: "YAM-23-0087",
    vin: "YAM56789012345678",
    related: [1, 5],
  },
  {
    id: 3,
    year: 2024,
    brand: "Kawasaki",
    model: "Ultra 310X",
    images: [
      "https://ugc.same-assets.com/Z6FTFYHi-FbzoWyPP-CgmqbZGwTB4ukg.png",
      "https://ugc.same-assets.com/lHHf38NbMyB97XZlTWr1-4S8uNWKajkR.jpeg",
      "https://ugc.same-assets.com/D3OY8EuvQiL3AKd8l0OYW32GFKba0z8L.png",
    ],
    hours: 8,
    price: 17599,
    type: "Performance",
    engine: "1498cc Supercharged",
    seating: "1-3 Passengers",
    features: [
      "310HP Supercharged",
      "Electronic Steering",
      "Launch Control",
      "Trim System",
      "Race-Inspired Seat",
      "Smart Learning Operation",
      "Jetsound Audio System",
      "Fuel Economy Assistance",
      "Multi-Function Display",
      "Deep-V Hull Design",
    ],
    description:
      "Powerful supercharged performance with advanced handling technology. The Ultra 310X delivers exceptional power and precision for those who demand the best in performance watercraft.",
    condition: "New",
    location: "Toronto Showroom",
    specifications: {
      length: '132.7" / 337 cm',
      width: '47" / 119 cm',
      weight: "928 lbs / 421 kg",
      fuel: "20.6 gal / 78 L",
      storage: "56 gal / 212 L",
      acceleration: "0-60 mph: 3.2 seconds",
      topSpeed: "69 mph / 111 km/h",
      hullType: "Deep-V Hull",
      passengers: 3,
    },
    warranty: "3-year limited warranty",
    financing: {
      startingAt: "$279/month",
      downPayment: "$3,520",
      term: "60 months",
    },
    stockNumber: "KAW-24-0042",
    vin: "KAW12309876543210",
    related: [1, 5, 6],
  },
  {
    id: 4,
    year: 2023,
    brand: "Sea-Doo",
    model: "Spark 3UP",
    images: [
      "https://ugc.same-assets.com/TFTS6WI-HPxXrvDgmpsLezpfxTG7zH3O.png",
      "https://ugc.same-assets.com/_RC3RLZV-TgbHvp5HbNXTfUs55VggWnS.png",
      "https://ugc.same-assets.com/KHz6vI9-XMPZBh3leUzn4mh0WFoCP3mk.jpeg",
    ],
    hours: 67,
    price: 8999,
    type: "Recreation",
    engine: "900 ACE",
    seating: "2-3 Passengers",
    features: [
      "Lightweight Design",
      "Fuel Efficient",
      "Easy Handling",
      "Tow Sports",
      "Polytec Material",
      "Portable BRP Audio",
      "Reboarding Step",
      "iBR (Intelligent Brake & Reverse)",
      "Variable Trim System",
      "RF D.E.S.S. Key",
    ],
    description:
      "Fun and affordable entry-level jet ski perfect for families. The Spark is playful, lightweight, and easy to handle, making it the perfect choice for newcomers to the sport.",
    condition: "Good",
    location: "Oakville Showroom",
    specifications: {
      length: '120" / 305 cm',
      width: '46" / 118 cm',
      weight: "463 lbs / 210 kg",
      fuel: "7.9 gal / 30 L",
      storage: "1.6 gal / 6 L",
      acceleration: "0-60 mph: 7.9 seconds",
      topSpeed: "50 mph / 80 km/h",
      hullType: "Polytec Material",
      passengers: 3,
    },
    warranty: "1-year limited warranty",
    financing: {
      startingAt: "$149/month",
      downPayment: "$1,800",
      term: "60 months",
    },
    stockNumber: "SD-23-0076",
    vin: "YDV98765432109876",
    related: [5, 6],
  },
  {
    id: 5,
    year: 2024,
    brand: "Yamaha",
    model: "VX Deluxe",
    images: [
      "https://ugc.same-assets.com/D3OY8EuvQiL3AKd8l0OYW32GFKba0z8L.png",
      "https://ugc.same-assets.com/Z6FTFYHi-FbzoWyPP-CgmqbZGwTB4ukg.png",
      "https://ugc.same-assets.com/_RC3RLZV-TgbHvp5HbNXTfUs55VggWnS.png",
    ],
    hours: 23,
    price: 12499,
    type: "Recreation",
    engine: "1049cc 3-Cylinder",
    seating: "1-3 Passengers",
    features: [
      "Reverse & Neutral",
      "Cruise Control",
      "Security System",
      "Storage Capacity",
      "RiDE Technology",
      "Reboarding Step",
      "Two-Tone Deck Mats",
      "Low RPM Mode",
      "Dual Mirrors",
      "Watertight Storage",
    ],
    description:
      "Reliable recreation watercraft with premium features and comfort. The VX Deluxe offers a perfect balance of performance and value, with features typically found on more expensive models.",
    condition: "Excellent",
    location: "Toronto Showroom",
    specifications: {
      length: '131.9" / 335 cm',
      width: '48.4" / 123 cm',
      weight: "767 lbs / 348 kg",
      fuel: "18.5 gal / 70 L",
      storage: "28.4 gal / 107.6 L",
      acceleration: "0-60 mph: 6.8 seconds",
      topSpeed: "55 mph / 88 km/h",
      hullType: "SMC Hull",
      passengers: 3,
    },
    warranty: "2-year limited warranty",
    financing: {
      startingAt: "$209/month",
      downPayment: "$2,500",
      term: "60 months",
    },
    stockNumber: "YAM-24-0054",
    vin: "YAM54321098765432",
    related: [4, 6],
  },
  {
    id: 6,
    year: 2023,
    brand: "Kawasaki",
    model: "STX 160",
    images: [
      "https://ugc.same-assets.com/KHz6vI9-XMPZBh3leUzn4mh0WFoCP3mk.jpeg",
      "https://ugc.same-assets.com/TFTS6WI-HPxXrvDgmpsLezpfxTG7zH3O.png",
      "https://ugc.same-assets.com/lHHf38NbMyB97XZlTWr1-4S8uNWKajkR.jpeg",
    ],
    hours: 89,
    price: 10299,
    type: "Recreation",
    engine: "1498cc 4-Stroke",
    seating: "1-3 Passengers",
    features: [
      "160HP Engine",
      "Smart Steering",
      "Dual Mirrors",
      "Tow Sports",
      "Spacious Storage",
      "Ergonomic Riding Position",
      "Large Swim Platform",
      "Anti-theft Protection",
      "Digital Display",
      "Automatic Bilge System",
    ],
    description:
      "Versatile recreation jet ski with great performance and value. The STX 160 delivers reliable performance and comfort at an attractive price point, making it a favorite for recreational riders.",
    condition: "Good",
    location: "Mississauga Showroom",
    specifications: {
      length: '124.4" / 315.9 cm',
      width: '46.5" / 118.1 cm',
      weight: "767 lbs / 348 kg",
      fuel: "16.4 gal / 62 L",
      storage: "35 gal / 132.5 L",
      acceleration: "0-60 mph: 6.2 seconds",
      topSpeed: "58 mph / 93 km/h",
      hullType: "V-Hull Design",
      passengers: 3,
    },
    warranty: "1-year limited warranty",
    financing: {
      startingAt: "$179/month",
      downPayment: "$2,060",
      term: "60 months",
    },
    stockNumber: "KAW-23-0131",
    vin: "KAW23456789012345",
    related: [4, 5],
  },
];

const JetSkiDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const jetSkiId = parseInt(id || "1");

  const jetSki =
    jetSkiInventory.find((ski) => ski.id === jetSkiId) || jetSkiInventory[0];
  const relatedJetSkis = jetSki.related
    .map((relId) => jetSkiInventory.find((ski) => ski.id === relId))
    .filter(Boolean);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [tabView, setTabView] = useState("specs"); // specs, features, financing

  const nextImage = () => {
    setActiveImageIndex((activeImageIndex + 1) % jetSki.images.length);
  };

  const prevImage = () => {
    setActiveImageIndex(
      (activeImageIndex - 1 + jetSki.images.length) % jetSki.images.length,
    );
  };

  const formatCurrency = (amount: number) => {
    return amount.toLocaleString("en-US", {
      style: "currency",
      currency: "CAD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-6">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <Link
                  to="/"
                  className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600"
                >
                  Home
                </Link>
              </li>
              <li>
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <Link
                    to="/inventory"
                    className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2"
                  >
                    Inventory
                  </Link>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <svg
                    className="w-3 h-3 text-gray-400 mx-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">
                    {jetSki.year} {jetSki.brand} {jetSki.model}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
        </div>

        {/* Back to Inventory Button */}
        <div className="mb-8">
          <Link
            to="/inventory"
            className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Inventory
          </Link>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Images */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg overflow-hidden shadow-md mb-6">
              {/* Main Image */}
              <div className="relative aspect-video">
                <img
                  src={jetSki.images[activeImageIndex]}
                  alt={`${jetSki.year} ${jetSki.brand} ${jetSki.model}`}
                  className="w-full h-full object-cover"
                />

                {/* Image Navigation */}
                <div className="absolute inset-0 flex items-center justify-between px-4">
                  <button
                    onClick={prevImage}
                    className="bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition-all"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="bg-black bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition-all"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </button>
                </div>

                {/* Image Counter */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white text-sm px-3 py-1 rounded-full">
                  {activeImageIndex + 1} / {jetSki.images.length}
                </div>

                {/* Condition Badge */}
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${
                      jetSki.condition === "New"
                        ? "bg-green-600"
                        : jetSki.condition === "Like New"
                          ? "bg-blue-600"
                          : jetSki.condition === "Excellent"
                            ? "bg-yellow-600"
                            : "bg-gray-600"
                    }`}
                  >
                    {jetSki.condition}
                  </span>
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="flex p-2 space-x-2">
                {jetSki.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`flex-1 h-20 rounded-md overflow-hidden border-2 transition-all ${
                      index === activeImageIndex
                        ? "border-blue-600"
                        : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Tabs Navigation */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="flex border-b">
                <button
                  onClick={() => setTabView("specs")}
                  className={`flex-1 py-4 text-center font-medium ${
                    tabView === "specs"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Specifications
                </button>
                <button
                  onClick={() => setTabView("features")}
                  className={`flex-1 py-4 text-center font-medium ${
                    tabView === "features"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Features
                </button>
                <button
                  onClick={() => setTabView("financing")}
                  className={`flex-1 py-4 text-center font-medium ${
                    tabView === "financing"
                      ? "text-blue-600 border-b-2 border-blue-600"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  Financing
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-6">
                {tabView === "specs" && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-900">
                      <Info className="h-5 w-5 mr-2 text-blue-600" />
                      Technical Specifications
                    </h3>
                    <div className="grid md:grid-cols-2 gap-x-6 gap-y-3">
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Engine:</span>
                        <span className="font-medium text-gray-900">
                          {jetSki.engine}
                        </span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Length:</span>
                        <span className="font-medium text-gray-900">
                          {jetSki.specifications.length}
                        </span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Width:</span>
                        <span className="font-medium text-gray-900">
                          {jetSki.specifications.width}
                        </span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Weight:</span>
                        <span className="font-medium text-gray-900">
                          {jetSki.specifications.weight}
                        </span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Fuel Capacity:</span>
                        <span className="font-medium text-gray-900">
                          {jetSki.specifications.fuel}
                        </span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Storage Capacity:</span>
                        <span className="font-medium text-gray-900">
                          {jetSki.specifications.storage}
                        </span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Acceleration:</span>
                        <span className="font-medium text-gray-900">
                          {jetSki.specifications.acceleration}
                        </span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Top Speed:</span>
                        <span className="font-medium text-gray-900">
                          {jetSki.specifications.topSpeed}
                        </span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Hull Type:</span>
                        <span className="font-medium text-gray-900">
                          {jetSki.specifications.hullType}
                        </span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Seating Capacity:</span>
                        <span className="font-medium text-gray-900">
                          {jetSki.specifications.passengers} passengers
                        </span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Hours:</span>
                        <span className="font-medium text-gray-900">
                          {jetSki.hours} hrs
                        </span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-gray-600">Warranty:</span>
                        <span className="font-medium text-gray-900">
                          {jetSki.warranty}
                        </span>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="mt-6">
                      <div className="flex items-center space-x-4 text-sm">
                        <span className="flex items-center text-gray-600">
                          <Calendar className="h-4 w-4 mr-1" />
                          Year:{" "}
                          <span className="font-medium text-gray-900 ml-1">
                            {jetSki.year}
                          </span>
                        </span>
                        <span className="flex items-center text-gray-600">
                          <FileText className="h-4 w-4 mr-1" />
                          Stock #:{" "}
                          <span className="font-medium text-gray-900 ml-1">
                            {jetSki.stockNumber}
                          </span>
                        </span>
                        <span className="flex items-center text-gray-600">
                          <Info className="h-4 w-4 mr-1" />
                          VIN:{" "}
                          <span className="font-medium text-gray-900 ml-1">
                            {jetSki.vin}
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {tabView === "features" && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-900">
                      <Check className="h-5 w-5 mr-2 text-blue-600" />
                      Key Features & Highlights
                    </h3>
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      {jetSki.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className="flex-shrink-0 h-5 w-5 text-green-600">
                            <Check className="h-5 w-5" />
                          </div>
                          <p className="ml-2 text-gray-700">{feature}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6 bg-gray-50 p-4 rounded-md">
                      <h4 className="font-medium text-gray-900 mb-2">
                        Description
                      </h4>
                      <p className="text-gray-700">{jetSki.description}</p>
                    </div>
                  </div>
                )}

                {tabView === "financing" && (
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-900">
                      <DollarSign className="h-5 w-5 mr-2 text-blue-600" />
                      Financing Options
                    </h3>

                    <div className="bg-blue-50 p-4 rounded-md mb-6 border border-blue-100">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-gray-700">Starting at:</span>
                        <span className="text-2xl font-bold text-blue-600">
                          {jetSki.financing.startingAt}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600">Down Payment:</p>
                          <p className="font-medium">
                            {jetSki.financing.downPayment}
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600">Term:</p>
                          <p className="font-medium">{jetSki.financing.term}</p>
                        </div>
                      </div>
                      <p className="text-xs text-gray-500 mt-4">
                        *Estimated payment with approved credit. Actual rates
                        may vary based on credit approval and terms.
                      </p>
                    </div>

                    <div className="mt-6">
                      <Link
                        to="/financing/apply"
                        className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md font-medium transition-colors"
                      >
                        Apply for Financing
                      </Link>
                      <p className="text-sm text-gray-600 mt-2">
                        Get pre-approved in minutes with our simple application
                        process.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Details & Actions */}
          <div className="lg:col-span-1">
            {/* Main Details Card */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h1 className="text-2xl font-bold text-gray-900 mb-2">
                  {jetSki.year} {jetSki.brand} {jetSki.model}
                </h1>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{jetSki.hours} hours</span>
                  <span className="mx-2">•</span>
                  <span>{jetSki.type}</span>
                </div>

                <div className="mb-6">
                  <div className="text-3xl font-bold text-green-600 mb-1">
                    {formatCurrency(jetSki.price)}
                  </div>
                  <div className="text-sm text-gray-600">
                    + taxes & licensing fees
                  </div>
                </div>

                <div className="border-t border-b py-4 my-4 grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Brand</p>
                    <p className="font-medium">{jetSki.brand}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Model</p>
                    <p className="font-medium">{jetSki.model}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Engine</p>
                    <p className="font-medium">{jetSki.engine}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Seating</p>
                    <p className="font-medium">{jetSki.seating}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-700">{jetSki.description}</p>
                </div>

                <div className="flex flex-col space-y-3">
                  <Link
                    to="/contact?item=jetski&id=${jetSki.id}"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-semibold transition-colors flex items-center justify-center"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Contact About This Jet Ski
                  </Link>
                  <Link
                    to="/financing/apply"
                    className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-md font-semibold transition-colors flex items-center justify-center"
                  >
                    <DollarSign className="h-5 w-5 mr-2" />
                    Finance This Jet Ski
                  </Link>
                  <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-md font-semibold transition-colors flex items-center justify-center">
                    <Heart className="h-5 w-5 mr-2" />
                    Save to Favorites
                  </button>
                  <button className="w-full border border-gray-300 hover:bg-gray-50 text-gray-700 py-3 px-4 rounded-md font-semibold transition-colors flex items-center justify-center">
                    <Share className="h-5 w-5 mr-2" />
                    Share Listing
                  </button>
                </div>
              </div>
            </div>

            {/* Location Information */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-900">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  Available At
                </h3>
                <p className="font-medium text-gray-900 mb-1">
                  {jetSki.location}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {jetSki.location === "Toronto Showroom"
                    ? "1234 Waterfront Dr, Toronto ON, M5V 3A8"
                    : jetSki.location === "Mississauga Showroom"
                      ? "5678 Lakeshore Rd, Mississauga ON, L5B 2T4"
                      : "9012 Marine Dr, Oakville ON, L6H 3M2"}
                </p>
                <a
                  href={`tel:${
                    jetSki.location === "Toronto Showroom"
                      ? "4165552782"
                      : jetSki.location === "Mississauga Showroom"
                        ? "9055552782"
                        : "9055557378"
                  }`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  {jetSki.location === "Toronto Showroom"
                    ? "(416) 555-AQUA"
                    : jetSki.location === "Mississauga Showroom"
                      ? "(905) 555-AQUA"
                      : "(905) 555-SERV"}
                </a>
              </div>
            </div>

            {/* Warranty Information */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center text-gray-900">
                  <Shield className="h-5 w-5 mr-2 text-blue-600" />
                  Warranty & Service
                </h3>
                <p className="text-gray-700 mb-4">
                  This jet ski comes with {jetSki.warranty}. Extended warranty
                  options are available.
                </p>
                <div className="flex items-center">
                  <Link
                    to="/service"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <Wrench className="h-4 w-4 mr-2" />
                    View Service Plans
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Jet Skis */}
        {relatedJetSkis.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              You May Also Like
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedJetSkis.map((related) => (
                <div
                  key={related?.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative">
                    <img
                      src={related?.images[0]}
                      alt={`${related?.year} ${related?.brand} ${related?.model}`}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                      <h3 className="text-white font-bold">
                        {related?.year} {related?.brand} {related?.model}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-blue-600 font-semibold">
                        {related?.type}
                      </span>
                      <span className="text-sm text-gray-600">
                        {related?.hours} hrs
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-green-600">
                        {formatCurrency(related?.price || 0)}
                      </span>
                      <Link
                        to={`/inventory/${related?.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default JetSkiDetailPage;
