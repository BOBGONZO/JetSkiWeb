import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Filter, Eye, Heart, ArrowUpDown } from "lucide-react";

const InventoryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [priceRange, setPriceRange] = useState("all");
  const [sortBy, setSortBy] = useState("price-low");
  const [favorites, setFavorites] = useState<number[]>(() => {
    return JSON.parse(localStorage.getItem("favorites") || "[]");
  });

  const jetSkiInventory = [
    {
      id: 1,
      year: 2024,
      brand: "Sea-Doo",
      model: "RXP-X 325 RS",
      image:
        "https://ugc.same-assets.com/lHHf38NbMyB97XZlTWr1-4S8uNWKajkR.jpeg",
      hours: 12,
      price: 18999,
      type: "Performance",
      engine: "1630 ACE - 325 HP",
      seating: "1-2 Passengers",
      features: [
        "Supercharged Engine",
        "Racing Performance",
        "Professional Grade",
        "GPS",
        "Bluetooth",
      ],
      description:
        "The ultimate high-performance watercraft designed for racing and thrill-seekers.",
      condition: "Like New",
      location: "Toronto Showroom",
    },
    {
      id: 2,
      year: 2023,
      brand: "Yamaha",
      model: "FX Cruiser HO",
      image: "https://ugc.same-assets.com/_RC3RLZV-TgbHvp5HbNXTfUs55VggWnS.png",
      hours: 45,
      price: 15299,
      type: "Touring",
      engine: "1812cc High Output Marine Engine",
      seating: "1-3 Passengers",
      features: [
        "Luxury Touring",
        "Extended Range",
        "Comfort Package",
        "Storage",
        "GPS",
      ],
      description:
        "Perfect for long-distance touring with comfort and luxury features.",
      condition: "Excellent",
      location: "Mississauga Showroom",
    },
    {
      id: 3,
      year: 2024,
      brand: "Kawasaki",
      model: "Ultra 310X",
      image: "https://ugc.same-assets.com/Z6FTFYHi-FbzoWyPP-CgmqbZGwTB4ukg.png",
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
      ],
      description:
        "Powerful supercharged performance with advanced handling technology.",
      condition: "New",
      location: "Toronto Showroom",
    },
    {
      id: 4,
      year: 2023,
      brand: "Sea-Doo",
      model: "Spark 3UP",
      image: "https://ugc.same-assets.com/TFTS6WI-HPxXrvDgmpsLezpfxTG7zH3O.png",
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
      ],
      description:
        "Fun and affordable entry-level jet ski perfect for families.",
      condition: "Good",
      location: "Oakville Showroom",
    },
    {
      id: 5,
      year: 2024,
      brand: "Yamaha",
      model: "VX Deluxe",
      image: "https://ugc.same-assets.com/D3OY8EuvQiL3AKd8l0OYW32GFKba0z8L.png",
      hours: 23,
      price: 12499,
      type: "Recreation",
      engine: "1049cc 3-Cylinder",
      seating: "1-3 Passengers",
      features: [
        "Reverse & Neutral",
        "Cruise Control",
        "Security System",
        "Storage",
      ],
      description:
        "Reliable recreation watercraft with premium features and comfort.",
      condition: "Excellent",
      location: "Toronto Showroom",
    },
    {
      id: 6,
      year: 2023,
      brand: "Kawasaki",
      model: "STX 160",
      image:
        "https://ugc.same-assets.com/KHz6vI9-XMPZBh3leUzn4mh0WFoCP3mk.jpeg",
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
      ],
      description:
        "Versatile recreation jet ski with great performance and value.",
      condition: "Good",
      location: "Mississauga Showroom",
    },
  ];

  const brands = ["all", "Sea-Doo", "Yamaha", "Kawasaki"];
  const types = ["all", "Performance", "Touring", "Recreation", "Personal"];
  const priceRanges = [
    { label: "All Prices", value: "all" },
    { label: "Under $10k", value: "under-10k" },
    { label: "$10k - $15k", value: "10k-15k" },
    { label: "$15k - $20k", value: "15k-20k" },
    { label: "Over $20k", value: "over-20k" },
  ];

  const sortOptions = [
    { label: "Price: Low to High", value: "price-low" },
    { label: "Price: High to Low", value: "price-high" },
    { label: "Year: Newest", value: "year-new" },
    { label: "Year: Oldest", value: "year-old" },
    { label: "Hours: Lowest", value: "hours-low" },
  ];

  const toggleFavorite = (id: number) => {
    let favs = [...favorites];
    if (favs.includes(id)) {
      favs = favs.filter((fid) => fid !== id);
    } else {
      favs.push(id);
    }
    setFavorites(favs);
    localStorage.setItem("favorites", JSON.stringify(favs));
  };

  // Filter and sort logic
  const filteredAndSortedInventory = jetSkiInventory
    .filter((jetski) => {
      const matchesSearch =
        jetski.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        jetski.brand.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesBrand =
        selectedBrand === "all" || jetski.brand === selectedBrand;
      const matchesType =
        selectedType === "all" || jetski.type === selectedType;

      let matchesPrice = true;
      if (priceRange === "under-10k") matchesPrice = jetski.price < 10000;
      else if (priceRange === "10k-15k")
        matchesPrice = jetski.price >= 10000 && jetski.price < 15000;
      else if (priceRange === "15k-20k")
        matchesPrice = jetski.price >= 15000 && jetski.price < 20000;
      else if (priceRange === "over-20k") matchesPrice = jetski.price >= 20000;

      return matchesSearch && matchesBrand && matchesType && matchesPrice;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "year-new":
          return b.year - a.year;
        case "year-old":
          return a.year - b.year;
        case "hours-low":
          return a.hours - b.hours;
        default:
          return 0;
      }
    });

  return (
    <section id="inventory" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Jet Ski Inventory
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our extensive collection of premium jet skis. From
            high-performance racing models to family-friendly recreation
            watercraft, find your perfect ride on the water.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
            {/* Search */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search by model or brand..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            {/* Brand Filter */}
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              {brands.map((brand) => (
                <option key={brand} value={brand}>
                  {brand === "all" ? "All Brands" : brand}
                </option>
              ))}
            </select>

            {/* Type Filter */}
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              {types.map((type) => (
                <option key={type} value={type}>
                  {type === "all" ? "All Types" : type}
                </option>
              ))}
            </select>

            {/* Price Filter */}
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              {priceRanges.map((range) => (
                <option key={range.value} value={range.value}>
                  {range.label}
                </option>
              ))}
            </select>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredAndSortedInventory.length} of{" "}
            {jetSkiInventory.length} jet skis
          </p>
        </div>

        {/* Inventory Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAndSortedInventory.map((jetski) => (
            <div
              key={jetski.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={jetski.image}
                  alt={`${jetski.year} ${jetski.brand} ${jetski.model}`}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold text-white ${jetski.condition === "New"
                        ? "bg-green-600"
                        : jetski.condition === "Like New"
                          ? "bg-blue-600"
                          : jetski.condition === "Excellent"
                            ? "bg-yellow-600"
                            : "bg-gray-600"
                      }`}
                  >
                    {jetski.condition}
                  </span>
                </div>
                <button onClick={() => toggleFavorite(jetski.id)} className={`absolute top-4 right-4 p-2 bg-white bg-opacity-90 rounded-full hover:bg-opacity-100 transition-all ${favorites.includes(jetski.id) ? 'text-red-500' : ''}`} aria-label="Save to Favorites">
                  <Heart className={`h-5 w-5 ${favorites.includes(jetski.id) ? 'fill-red-500' : 'text-gray-600'}`} />
                </button>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-2">
                  <span className="text-sm text-blue-600 font-semibold">
                    {jetski.type}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {jetski.year} {jetski.brand} {jetski.model}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  {jetski.description}
                </p>

                {/* Specs */}
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                  <div>
                    <span className="text-gray-500">Engine:</span>
                    <p className="font-semibold">{jetski.engine}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Hours:</span>
                    <p className="font-semibold">{jetski.hours} hrs</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Seating:</span>
                    <p className="font-semibold">{jetski.seating}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Location:</span>
                    <p className="font-semibold">{jetski.location}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {jetski.features.slice(0, 3).map((feature, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                    {jetski.features.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{jetski.features.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Price and Actions */}
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-2xl font-bold text-green-600">
                      ${jetski.price.toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-500">+ taxes & fees</p>
                  </div>
                  <Link
                    to={`/inventory/${jetski.id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors flex items-center"
                  >
                    <Eye className="h-4 w-4 mr-2" />
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredAndSortedInventory.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No jet skis found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search criteria or filters.
            </p>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-16 bg-blue-600 rounded-lg p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h3>
          <p className="text-blue-100 mb-6">
            We get new inventory weekly and can help you find the perfect jet
            ski for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact?department=sales"
              className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Our Sales Team
            </Link>
            <Link
              to="/contact?action=alerts"
              className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Set Up Alerts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InventoryPage;
