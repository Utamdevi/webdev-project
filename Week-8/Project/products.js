// products.js - Enhanced with all button functionality

// Enhanced Product data
const products = [
  {
    id: 1,
    name: "UltraBook Pro Laptop",
    description:
      "Thin and lightweight laptop with 16GB RAM, 512GB SSD, and Intel i7 processor.",
    price: 1299.99,
    originalPrice: 1499.99,
    category: "laptops",
    rating: 4.5,
    reviews: 128,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    inStock: true,
    specs: [
      "16GB RAM",
      "512GB SSD",
      "Intel i7",
      '15.6" Display',
      "8GB Graphics",
    ],
    tags: ["laptop", "ultrabook", "portable", "business", "premium"],
    features: [
      "Backlit Keyboard",
      "Fingerprint Reader",
      "Thunderbolt 4",
      "WiFi 6",
    ],
    isNew: true,
    discount: 13,
    stockCount: 15,
    brand: "TechZone",
  },
  {
    id: 2,
    name: "SmartPhone X Pro",
    description:
      "Flagship smartphone with 6.7-inch display, triple camera, and 5G connectivity.",
    price: 999.99,
    originalPrice: 1099.99,
    category: "smartphones",
    rating: 4.7,
    reviews: 256,
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    inStock: true,
    specs: ['6.7" Display', "Triple Camera", "5G", "128GB Storage", "8GB RAM"],
    tags: ["smartphone", "5g", "camera", "flagship", "android"],
    features: [
      "Face ID",
      "Wireless Charging",
      "IP68 Waterproof",
      "Stereo Speakers",
    ],
    isNew: true,
    discount: 9,
    stockCount: 25,
    brand: "MobileTech",
  },
  {
    id: 3,
    name: "TabMax Pro Tablet",
    description:
      "High-performance tablet with 11-inch display, stylus support, and all-day battery.",
    price: 749.99,
    originalPrice: 799.99,
    category: "tablets",
    rating: 4.3,
    reviews: 89,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    inStock: true,
    specs: [
      '11" Display',
      "Stylus Support",
      "All-day Battery",
      "256GB",
      "8GB RAM",
    ],
    tags: ["tablet", "stylus", "portable", "entertainment", "productivity"],
    features: [
      "Pencil Pro",
      "Magic Keyboard",
      "ProMotion Display",
      "FaceTime HD",
    ],
    isNew: false,
    discount: 6,
    stockCount: 18,
    brand: "TabMaster",
  },
  {
    id: 4,
    name: "NoiseCancel Pro Headphones",
    description:
      "Wireless headphones with active noise cancellation and 30-hour battery life.",
    price: 299.99,
    originalPrice: 349.99,
    category: "headphones",
    rating: 4.8,
    reviews: 312,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    inStock: false,
    specs: [
      "Noise Cancelling",
      "30-hour Battery",
      "Wireless",
      "Foldable",
      "40mm Drivers",
    ],
    tags: ["headphones", "wireless", "noise-cancelling", "audio", "music"],
    features: [
      "Transparency Mode",
      "Spatial Audio",
      "Quick Charge",
      "Voice Assistant",
    ],
    isNew: false,
    discount: 14,
    stockCount: 0,
    brand: "AudioPro",
  },
  {
    id: 5,
    name: "SmartWatch Elite",
    description:
      "Advanced smartwatch with health monitoring, GPS, and waterproof design.",
    price: 399.99,
    originalPrice: 449.99,
    category: "smartwatches",
    rating: 4.4,
    reviews: 167,
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    inStock: true,
    specs: [
      "Health Monitoring",
      "GPS",
      "Waterproof",
      "7-day Battery",
      "AMOLED",
    ],
    tags: ["smartwatch", "fitness", "wearable", "health", "sports"],
    features: ["ECG App", "Blood Oxygen", "Sleep Tracking", "Fall Detection"],
    isNew: true,
    discount: 11,
    stockCount: 22,
    brand: "WatchTech",
  },
  {
    id: 6,
    name: "Wireless Charging Pad",
    description:
      "Fast wireless charging pad compatible with all Qi-enabled devices.",
    price: 49.99,
    originalPrice: 59.99,
    category: "accessories",
    rating: 4.2,
    reviews: 78,
    image:
      "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    inStock: true,
    specs: [
      "Qi Compatible",
      "Fast Charging",
      "LED Indicator",
      "Non-slip",
      "15W",
    ],
    tags: ["charger", "wireless", "accessory", "charging", "phone"],
    features: [
      "Multi-Device",
      "Overheat Protection",
      "Foreign Object Detection",
      "Compact",
    ],
    isNew: false,
    discount: 17,
    stockCount: 45,
    brand: "ChargeMate",
  },
  {
    id: 7,
    name: "Gaming Laptop Extreme",
    description:
      "High-performance gaming laptop with RTX 4070, 32GB RAM, and 1TB NVMe SSD.",
    price: 1999.99,
    originalPrice: 2199.99,
    category: "laptops",
    rating: 4.9,
    reviews: 94,
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    inStock: true,
    specs: ["RTX 4070", "32GB RAM", "1TB SSD", '17" 144Hz', "Intel i9"],
    tags: ["gaming", "laptop", "performance", "rtx", "gamer"],
    features: [
      "RGB Keyboard",
      "Vapor Chamber Cooling",
      "Dolby Atmos",
      "Thunderbolt 4",
    ],
    isNew: true,
    discount: 9,
    stockCount: 8,
    brand: "GameMaster",
  },
  {
    id: 8,
    name: "Compact Phone 12",
    description:
      "Compact smartphone with powerful camera and long-lasting battery.",
    price: 699.99,
    originalPrice: 799.99,
    category: "smartphones",
    rating: 4.0,
    reviews: 56,
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    inStock: true,
    specs: [
      "Compact Design",
      "48MP Camera",
      "Long Battery",
      "128GB",
      "6GB RAM",
    ],
    tags: ["smartphone", "compact", "camera", "budget", "android"],
    features: ["Night Mode", "Portrait Mode", "Fast Charging", "Stereo Sound"],
    isNew: false,
    discount: 12,
    stockCount: 30,
    brand: "CompactTech",
  },
  {
    id: 9,
    name: "Wireless Earbuds Pro",
    description:
      "True wireless earbuds with noise cancellation and charging case.",
    price: 199.99,
    originalPrice: 249.99,
    category: "headphones",
    rating: 4.6,
    reviews: 203,
    image:
      "https://images.unsplash.com/photo-1590658165737-15a047b8b5e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    inStock: true,
    specs: [
      "True Wireless",
      "Noise Cancelling",
      "24-hour Battery",
      "Charging Case",
      "IPX4",
    ],
    tags: ["earbuds", "wireless", "noise-cancelling", "audio", "portable"],
    features: [
      "Transparency Mode",
      "Spatial Audio",
      "Hey Siri",
      "Wireless Charging",
    ],
    isNew: true,
    discount: 20,
    stockCount: 35,
    brand: "SoundBeats",
  },
  {
    id: 10,
    name: "Fitness Tracker Band",
    description:
      "Waterproof fitness tracker with heart rate monitor and sleep tracking.",
    price: 129.99,
    originalPrice: 149.99,
    category: "smartwatches",
    rating: 4.1,
    reviews: 142,
    image:
      "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    inStock: true,
    specs: [
      "Heart Rate Monitor",
      "Sleep Tracking",
      "Waterproof",
      "14-day Battery",
      "OLED",
    ],
    tags: ["fitness", "tracker", "wearable", "health", "sports"],
    features: [
      "24/7 HR",
      "SpO2 Monitor",
      "Stress Tracking",
      "Smart Notifications",
    ],
    isNew: false,
    discount: 13,
    stockCount: 40,
    brand: "FitTrack",
  },
  {
    id: 11,
    name: "Premium Laptop Stand",
    description:
      "Adjustable aluminum laptop stand for ergonomic working positions.",
    price: 89.99,
    originalPrice: 99.99,
    category: "accessories",
    rating: 4.3,
    reviews: 45,
    image:
      "https://images.unsplash.com/photo-1586950012036-b957f2c7cbf3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    inStock: true,
    specs: ["Adjustable", "Aluminum", "Ergonomic", "Portable", "Non-slip"],
    tags: ["stand", "laptop", "ergonomic", "accessory", "workspace"],
    features: [
      "360° Rotation",
      "Height Adjustment",
      "Cable Management",
      "Heat Dissipation",
    ],
    isNew: false,
    discount: 10,
    stockCount: 60,
    brand: "ErgoPro",
  },
  {
    id: 12,
    name: "Tablet Mini",
    description:
      "Compact 8-inch tablet perfect for reading and media consumption.",
    price: 349.99,
    originalPrice: 399.99,
    category: "tablets",
    rating: 3.9,
    reviews: 67,
    image:
      "https://images.unsplash.com/photo-1546054452-c7d3c9c47442?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    inStock: false,
    specs: ['8" Display', "Compact", "Lightweight", "64GB Storage", "4GB RAM"],
    tags: ["tablet", "compact", "media", "reading", "portable"],
    features: [
      "Reading Mode",
      "Eye Comfort",
      "Long Battery",
      "Expandable Storage",
    ],
    isNew: true,
    discount: 12,
    stockCount: 0,
    brand: "MiniTab",
  },
];

// Application State
const state = {
  products: [...products],
  filteredProducts: [...products],
  currentFilter: "all",
  currentSearch: "",
  currentSort: "default",
  currentMaxPrice: 2500,
  showInStockOnly: false,
  showOnSaleOnly: false,
  cart: JSON.parse(localStorage.getItem("techzone_cart")) || [],
  wishlist: JSON.parse(localStorage.getItem("techzone_wishlist")) || [],
  compareList: JSON.parse(localStorage.getItem("techzone_compare")) || [],
  recentlyViewed:
    JSON.parse(localStorage.getItem("techzone_recently_viewed")) || [],
};

// DOM Elements
const elements = {
  productsGrid: document.getElementById("productsGrid"),
  searchInput: document.getElementById("searchInput"),
  clearSearch: document.getElementById("clearSearch"),
  searchButton: document.getElementById("searchButton"),
  categoryFilters: document.getElementById("categoryFilters"),
  productCount: document.getElementById("count"),
  totalCount: document.getElementById("totalCount"),
  searchStatus: document.getElementById("searchStatus"),
  sortSelect: document.getElementById("sortSelect"),
  priceRange: document.getElementById("priceRange"),
  currentPriceMax: document.getElementById("currentPriceMax"),
  inStockOnly: document.getElementById("inStockOnly"),
  onSaleOnly: document.getElementById("onSaleOnly"),
  resetFilters: document.getElementById("resetFilters"),
  loadingSpinner: document.getElementById("loadingSpinner"),
  cartNotification: document.getElementById("cartNotification"),
  cartCount: document.getElementById("cartCount"),
  resultsInfo: document.getElementById("resultsInfo"),
  compareBtn: document.getElementById("compareBtn"),
  comparePanel: document.getElementById("comparePanel"),
  closeCompare: document.getElementById("closeCompare"),
  compareItems: document.getElementById("compareItems"),
  compareCount: document.getElementById("compareCount"),
  clearCompare: document.getElementById("clearCompare"),
};

// Initialize the application
function init() {
  updateCartCount();
  updateCompareCount();
  renderProducts(state.filteredProducts);
  setupEventListeners();
  updateSearchStatus();

  // Check URL parameters for pre-filled search
  const urlParams = new URLSearchParams(window.location.search);
  const searchParam = urlParams.get("search");
  if (searchParam) {
    elements.searchInput.value = decodeURIComponent(searchParam);
    state.currentSearch = decodeURIComponent(searchParam);
    filterProducts();
  }

  // Load recently viewed products
  loadRecentlyViewed();
}

// Render products grid
function renderProducts(productsToRender) {
  elements.productsGrid.innerHTML = "";

  if (productsToRender.length === 0) {
    showNoResults();
    return;
  }

  elements.productCount.textContent = productsToRender.length;
  elements.resultsInfo.style.display = "block";

  showLoading();

  // Simulate loading for better UX
  setTimeout(() => {
    productsToRender.forEach((product) => {
      const productCard = createProductCard(product);
      elements.productsGrid.innerHTML += productCard;
    });

    hideLoading();

    // Add event listeners to dynamic elements
    addProductEventListeners();

    // Add fade-in animation
    document.querySelectorAll(".product-card").forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
      card.classList.add("fade-in");
    });
  }, 300);
}

// Create product card HTML
function createProductCard(product) {
  const isInWishlist = state.wishlist.includes(product.id);
  const isInCompare = state.compareList.includes(product.id);
  const discountBadge =
    product.discount > 0
      ? `<span class="discount-badge">-${product.discount}%</span>`
      : "";
  const newBadge = product.isNew
    ? `<span class="badge bg-info badge-category">NEW</span>`
    : "";
  const stockBadge = product.inStock
    ? `<span class="badge bg-success stock-badge">In Stock (${product.stockCount})</span>`
    : `<span class="badge bg-danger stock-badge">Out of Stock</span>`;
  const originalPrice = product.originalPrice
    ? `<div class="old-price">$${product.originalPrice.toFixed(2)}</div>`
    : "";

  return `
        <div class="col-md-4 col-lg-3 mb-4">
            <div class="card product-card h-100" data-id="${product.id}">
                ${newBadge}
                ${discountBadge}
                ${stockBadge}
                
                <div class="card-actions">
                    <button class="btn btn-sm btn-outline-primary wishlist-btn ${
                      isInWishlist ? "active" : ""
                    }" 
                            data-id="${product.id}" title="${
    isInWishlist ? "Remove from wishlist" : "Add to wishlist"
  }">
                        <i class="fas fa-heart"></i>
                    </button>
                    <button class="btn btn-sm btn-outline-primary compare-btn ${
                      isInCompare ? "active" : ""
                    }" 
                            data-id="${product.id}" title="${
    isInCompare ? "Remove from compare" : "Add to compare"
  }">
                        <i class="fas fa-balance-scale"></i>
                    </button>
                </div>
                
                <img src="${product.image}" class="card-img-top" alt="${
    product.name
  }" loading="lazy">
                
                <div class="card-body">
                    <div class="d-flex justify-content-between align-items-start mb-2">
                        <span class="badge bg-secondary">${product.brand}</span>
                        <span class="badge bg-light text-dark">${
                          product.category
                        }</span>
                    </div>
                    
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text text-muted small">${
                      product.description
                    }</p>
                    
                    <div class="product-specs mb-3">
                        ${product.specs
                          .slice(0, 3)
                          .map(
                            (spec) =>
                              `<div class="spec-item">
                                <i class="fas fa-check text-success me-1"></i>
                                <span class="small">${spec}</span>
                            </div>`
                          )
                          .join("")}
                    </div>
                    
                    <div class="d-flex justify-content-between align-items-center mb-3">
                        <div class="rating">
                            ${generateStarRating(product.rating)}
                            <small class="text-muted">(${
                              product.reviews
                            })</small>
                        </div>
                        <div class="price">
                            ${originalPrice}
                            <div class="price-tag h5 mb-0">$${product.price.toFixed(
                              2
                            )}</div>
                        </div>
                    </div>
                    
                    <div class="d-grid gap-2">
                        <button class="btn btn-success add-to-cart" 
                                data-id="${product.id}" 
                                ${!product.inStock ? "disabled" : ""}>
                            <i class="fas fa-shopping-cart"></i>
                            ${product.inStock ? "Add to Cart" : "Out of Stock"}
                        </button>
                        
                        <div class="btn-group" role="group">
                            <button class="btn btn-outline-primary view-details-btn" data-id="${
                              product.id
                            }">
                                <i class="fas fa-eye"></i> View
                            </button>
                            <button class="btn btn-outline-primary quick-view-btn" data-id="${
                              product.id
                            }">
                                <i class="fas fa-search"></i> Quick View
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Show no results message
function showNoResults() {
  elements.productsGrid.innerHTML = `
        <div class="col-12 text-center py-5">
            <div class="icon-box mb-4">
                <i class="fas fa-search"></i>
            </div>
            <h3 class="text-muted">No products found</h3>
            <p class="text-muted mb-4">Try adjusting your search or filter to find what you're looking for.</p>
            <button class="btn btn-primary" id="clearAllFilters">
                <i class="fas fa-redo"></i> Clear All Filters
            </button>
        </div>
    `;
  elements.productCount.textContent = "0";
  elements.resultsInfo.style.display = "none";
}

// Filter products
function filterProducts() {
  let filtered = [...state.products];

  // Apply category filter
  if (state.currentFilter !== "all") {
    filtered = filtered.filter((p) => p.category === state.currentFilter);
  }

  // Apply search filter
  if (state.currentSearch.trim() !== "") {
    const term = state.currentSearch.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.description.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term) ||
        p.tags.some((tag) => tag.includes(term)) ||
        p.brand.toLowerCase().includes(term)
    );
  }

  // Apply price filter
  filtered = filtered.filter((p) => p.price <= state.currentMaxPrice);

  // Apply stock filter
  if (state.showInStockOnly) {
    filtered = filtered.filter((p) => p.inStock);
  }

  // Apply sale filter
  if (state.showOnSaleOnly) {
    filtered = filtered.filter((p) => p.discount > 0);
  }

  // Apply sorting
  filtered = sortProducts(filtered);

  state.filteredProducts = filtered;
  renderProducts(filtered);
  updateSearchStatus();
}

// Sort products
function sortProducts(productsArray) {
  switch (state.currentSort) {
    case "price-low":
      return [...productsArray].sort((a, b) => a.price - b.price);
    case "price-high":
      return [...productsArray].sort((a, b) => b.price - a.price);
    case "rating":
      return [...productsArray].sort((a, b) => b.rating - a.rating);
    case "name":
      return [...productsArray].sort((a, b) => a.name.localeCompare(b.name));
    case "newest":
      return [...productsArray].sort((a, b) => {
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return 0;
      });
    case "discount":
      return [...productsArray].sort((a, b) => b.discount - a.discount);
    default:
      return productsArray;
  }
}

// Generate star rating HTML
function generateStarRating(rating) {
  let stars = "";
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars += '<i class="fas fa-star"></i>';
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars += '<i class="fas fa-star-half-alt"></i>';
    } else {
      stars += '<i class="far fa-star"></i>';
    }
  }
  return stars;
}

// Update search status
function updateSearchStatus() {
  const filters = [];

  if (state.currentSearch) filters.push(`Search: "${state.currentSearch}"`);
  if (state.currentFilter !== "all")
    filters.push(`Category: ${state.currentFilter}`);
  if (state.currentMaxPrice < 2500)
    filters.push(`Max: $${state.currentMaxPrice}`);
  if (state.showInStockOnly) filters.push("In Stock");
  if (state.showOnSaleOnly) filters.push("On Sale");
  if (state.currentSort !== "default") {
    const sortText = {
      "price-low": "Price: Low to High",
      "price-high": "Price: High to Low",
      rating: "Top Rated",
      name: "Name: A-Z",
      newest: "Newest",
      discount: "Best Discount",
    }[state.currentSort];
    filters.push(`Sorted: ${sortText}`);
  }

  elements.searchStatus.textContent = filters.length
    ? filters.join(" • ")
    : "All products";
}

// Add product event listeners
function addProductEventListeners() {
  // Add to cart
  document.querySelectorAll(".add-to-cart").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      addToCart(id);
    });
  });

  // Wishlist
  document.querySelectorAll(".wishlist-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      toggleWishlist(id);
    });
  });

  // Compare
  document.querySelectorAll(".compare-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      toggleCompare(id);
    });
  });

  // View details
  document.querySelectorAll(".view-details-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      viewProductDetails(id);
    });
  });

  // Quick view
  document.querySelectorAll(".quick-view-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.currentTarget.dataset.id);
      showQuickView(id);
    });
  });
}

// Add to cart function
function addToCart(productId) {
  const product = state.products.find((p) => p.id === productId);
  if (!product || !product.inStock) {
    showNotification("Product is out of stock", "danger");
    return;
  }

  const existingItem = state.cart.find((item) => item.id === productId);

  if (existingItem) {
    if (existingItem.quantity >= product.stockCount) {
      showNotification("Maximum stock reached", "warning");
      return;
    }
    existingItem.quantity += 1;
    showNotification(
      `Updated ${product.name} quantity to ${existingItem.quantity}`,
      "success"
    );
  } else {
    state.cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
      stock: product.stockCount,
    });
    showNotification(`${product.name} added to cart`, "success");
  }

  saveCart();
  updateCartCount();

  // Animate cart icon
  animateCartIcon();
}

// Toggle wishlist
function toggleWishlist(productId) {
  const index = state.wishlist.indexOf(productId);
  const product = state.products.find((p) => p.id === productId);

  if (index === -1) {
    state.wishlist.push(productId);
    showNotification(`${product.name} added to wishlist`, "success");
  } else {
    state.wishlist.splice(index, 1);
    showNotification(`${product.name} removed from wishlist`, "info");
  }

  localStorage.setItem("techzone_wishlist", JSON.stringify(state.wishlist));
  updateWishlistButton(productId);
}

// Toggle compare
function toggleCompare(productId) {
  const index = state.compareList.indexOf(productId);
  const product = state.products.find((p) => p.id === productId);

  if (index === -1) {
    if (state.compareList.length >= 4) {
      showNotification("Maximum 4 products can be compared", "warning");
      return;
    }
    state.compareList.push(productId);
    showNotification(`${product.name} added to compare`, "success");
  } else {
    state.compareList.splice(index, 1);
    showNotification(`${product.name} removed from compare`, "info");
  }

  localStorage.setItem("techzone_compare", JSON.stringify(state.compareList));
  updateCompareButton(productId);
  updateCompareCount();
  updateComparePanel();
}

// View product details
function viewProductDetails(productId) {
  const product = state.products.find((p) => p.id === productId);
  if (!product) return;

  // Add to recently viewed
  addToRecentlyViewed(productId);

  // Show modal with product details
  showProductModal(product);
}

// Quick view
function showQuickView(productId) {
  const product = state.products.find((p) => p.id === productId);
  if (!product) return;

  addToRecentlyViewed(productId);

  // Create and show quick view modal
  const modal = createQuickViewModal(product);
  document.body.insertAdjacentHTML("beforeend", modal);
  const quickViewModal = new bootstrap.Modal(
    document.getElementById("quickViewModal")
  );
  quickViewModal.show();

  // Remove modal from DOM after hiding
  document
    .getElementById("quickViewModal")
    .addEventListener("hidden.bs.modal", function () {
      this.remove();
    });
}

// Create quick view modal
function createQuickViewModal(product) {
  return `
        <div class="modal fade" id="quickViewModal" tabindex="-1">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${product.name}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="${
                                  product.image
                                }" class="img-fluid rounded" alt="${
    product.name
  }">
                                <div class="d-flex gap-2 mt-3">
                                    ${product.tags
                                      .map(
                                        (tag) =>
                                          `<span class="badge bg-light text-dark">${tag}</span>`
                                      )
                                      .join("")}
                                </div>
                            </div>
                            <div class="col-md-6">
                                <h4 class="price-tag">$${product.price.toFixed(
                                  2
                                )}</h4>
                                ${
                                  product.originalPrice
                                    ? `<p class="text-muted"><del>$${product.originalPrice.toFixed(
                                        2
                                      )}</del> 
                                    <span class="text-success">Save ${
                                      product.discount
                                    }%</span></p>`
                                    : ""
                                }
                                
                                <div class="rating mb-3">
                                    ${generateStarRating(product.rating)}
                                    <span class="ms-2">(${
                                      product.reviews
                                    } reviews)</span>
                                </div>
                                
                                <p>${product.description}</p>
                                
                                <div class="mb-4">
                                    <h6>Specifications:</h6>
                                    <ul class="list-unstyled">
                                        ${product.specs
                                          .map(
                                            (spec) =>
                                              `<li><i class="fas fa-check text-success me-2"></i>${spec}</li>`
                                          )
                                          .join("")}
                                    </ul>
                                </div>
                                
                                <div class="d-grid gap-2">
                                    <button class="btn btn-primary btn-lg add-to-cart-modal" 
                                            data-id="${product.id}"
                                            ${
                                              !product.inStock ? "disabled" : ""
                                            }>
                                        <i class="fas fa-shopping-cart"></i>
                                        ${
                                          product.inStock
                                            ? "Add to Cart"
                                            : "Out of Stock"
                                        }
                                    </button>
                                    <button class="btn btn-outline-primary toggle-wishlist-modal" 
                                            data-id="${product.id}">
                                        <i class="fas fa-heart"></i>
                                        ${
                                          state.wishlist.includes(product.id)
                                            ? "Remove from Wishlist"
                                            : "Add to Wishlist"
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Show product modal (detailed view)
function showProductModal(product) {
  // Similar to quick view but more detailed
  const modal = createProductModal(product);
  document.body.insertAdjacentHTML("beforeend", modal);
  const productModal = new bootstrap.Modal(
    document.getElementById("productModal")
  );
  productModal.show();
}

// Update wishlist button state
function updateWishlistButton(productId) {
  const btn = document.querySelector(`.wishlist-btn[data-id="${productId}"]`);
  if (btn) {
    const isInWishlist = state.wishlist.includes(productId);
    btn.classList.toggle("active", isInWishlist);
    btn.innerHTML = `<i class="fas fa-heart"></i>`;
    btn.title = isInWishlist ? "Remove from wishlist" : "Add to wishlist";
  }
}

// Update compare button state
function updateCompareButton(productId) {
  const btn = document.querySelector(`.compare-btn[data-id="${productId}"]`);
  if (btn) {
    const isInCompare = state.compareList.includes(productId);
    btn.classList.toggle("active", isInCompare);
    btn.innerHTML = `<i class="fas fa-balance-scale"></i>`;
    btn.title = isInCompare ? "Remove from compare" : "Add to compare";
  }
}

// Update cart count
function updateCartCount() {
  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  elements.cartCount.textContent = totalItems;
}

// Update compare count
function updateCompareCount() {
  if (elements.compareCount) {
    elements.compareCount.textContent = state.compareList.length;
  }
}

// Show notification
function showNotification(message, type = "success") {
  const alertClass = {
    success: "alert-success",
    danger: "alert-danger",
    warning: "alert-warning",
    info: "alert-info",
  }[type];

  const notification = document.createElement("div");
  notification.className = `alert ${alertClass} alert-dismissible fade show`;
  notification.innerHTML = `
        ${message}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

  const container = document.querySelector(".container");
  container.insertBefore(notification, container.firstChild);

  setTimeout(() => {
    notification.remove();
  }, 3000);
}

// Save cart to localStorage
function saveCart() {
  localStorage.setItem("techzone_cart", JSON.stringify(state.cart));
}

// Animate cart icon
function animateCartIcon() {
  const icon = document.querySelector("#cartLink i");
  icon.style.transform = "scale(1.3)";
  setTimeout(() => {
    icon.style.transform = "scale(1)";
  }, 300);
}

// Add to recently viewed
function addToRecentlyViewed(productId) {
  const index = state.recentlyViewed.indexOf(productId);
  if (index !== -1) {
    state.recentlyViewed.splice(index, 1);
  }
  state.recentlyViewed.unshift(productId);
  state.recentlyViewed = state.recentlyViewed.slice(0, 5); // Keep only 5 items
  localStorage.setItem(
    "techzone_recently_viewed",
    JSON.stringify(state.recentlyViewed)
  );
}

// Load recently viewed
function loadRecentlyViewed() {
  if (state.recentlyViewed.length > 0) {
    // Could display recently viewed products in a separate section
    console.log("Recently viewed:", state.recentlyViewed);
  }
}

// Setup event listeners
function setupEventListeners() {
  // Search input with debounce
  let searchTimeout;
  elements.searchInput.addEventListener("input", (e) => {
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      state.currentSearch = e.target.value;
      filterProducts();
    }, 300);
  });

  // Search button
  elements.searchButton.addEventListener("click", () => {
    state.currentSearch = elements.searchInput.value;
    filterProducts();
  });

  // Clear search
  elements.clearSearch.addEventListener("click", () => {
    elements.searchInput.value = "";
    state.currentSearch = "";
    filterProducts();
    elements.searchInput.focus();
  });

  // Category filters
  elements.categoryFilters.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
      document
        .querySelectorAll(".filter-btn")
        .forEach((btn) => btn.classList.remove("active"));
      e.target.classList.add("active");
      state.currentFilter = e.target.dataset.category;
      filterProducts();
    }
  });

  // Sort select
  elements.sortSelect.addEventListener("change", (e) => {
    state.currentSort = e.target.value;
    filterProducts();
  });

  // Price range
  elements.priceRange.addEventListener("input", (e) => {
    state.currentMaxPrice = parseInt(e.target.value);
    elements.currentPriceMax.textContent = state.currentMaxPrice;
  });

  elements.priceRange.addEventListener("change", () => {
    filterProducts();
  });

  // Stock filter
  elements.inStockOnly.addEventListener("change", (e) => {
    state.showInStockOnly = e.target.checked;
    filterProducts();
  });

  // Sale filter
  elements.onSaleOnly.addEventListener("change", (e) => {
    state.showOnSaleOnly = e.target.checked;
    filterProducts();
  });

  // Reset filters
  elements.resetFilters.addEventListener("click", resetAllFilters);

  // Quick search buttons
  document.querySelectorAll(".quick-search").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      elements.searchInput.value = e.target.dataset.term;
      state.currentSearch = e.target.dataset.term;
      filterProducts();
    });
  });

  // Compare panel
  if (elements.compareBtn) {
    elements.compareBtn.addEventListener("click", () => {
      elements.comparePanel.classList.add("show");
    });
  }

  if (elements.closeCompare) {
    elements.closeCompare.addEventListener("click", () => {
      elements.comparePanel.classList.remove("show");
    });
  }

  if (elements.clearCompare) {
    elements.clearCompare.addEventListener("click", () => {
      state.compareList = [];
      localStorage.setItem("techzone_compare", JSON.stringify([]));
      updateCompareCount();
      updateComparePanel();
      showNotification("Compare list cleared", "info");
    });
  }
}

// Reset all filters
function resetAllFilters() {
  state.currentFilter = "all";
  state.currentSearch = "";
  state.currentSort = "default";
  state.currentMaxPrice = 2500;
  state.showInStockOnly = false;
  state.showOnSaleOnly = false;

  elements.searchInput.value = "";
  elements.sortSelect.value = "default";
  elements.priceRange.value = 2500;
  elements.currentPriceMax.textContent = "2500";
  elements.inStockOnly.checked = false;
  elements.onSaleOnly.checked = false;

  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active");
    if (btn.dataset.category === "all") {
      btn.classList.add("active");
    }
  });

  filterProducts();
}

// Update compare panel
function updateComparePanel() {
  if (!elements.compareItems) return;

  elements.compareItems.innerHTML = "";

  if (state.compareList.length === 0) {
    elements.compareItems.innerHTML = `
            <div class="text-center py-4">
                <i class="fas fa-balance-scale fa-3x text-muted mb-3"></i>
                <p class="text-muted">Add products to compare</p>
            </div>
        `;
    return;
  }

  state.compareList.forEach((productId) => {
    const product = state.products.find((p) => p.id === productId);
    if (product) {
      elements.compareItems.innerHTML += `
                <div class="compare-item">
                    <img src="${product.image}" alt="${
        product.name
      }" class="compare-item-img">
                    <div class="compare-item-info">
                        <h6>${product.name}</h6>
                        <div class="price-tag">$${product.price.toFixed(
                          2
                        )}</div>
                        <button class="btn btn-sm btn-outline-danger remove-compare" data-id="${
                          product.id
                        }">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                </div>
            `;
    }
  });

  // Add remove event listeners
  document.querySelectorAll(".remove-compare").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const productId = parseInt(e.currentTarget.dataset.id);
      toggleCompare(productId);
    });
  });
}

// Show loading
function showLoading() {
  elements.loadingSpinner.style.display = "block";
  elements.productsGrid.style.opacity = "0.5";
}

// Hide loading
function hideLoading() {
  elements.loadingSpinner.style.display = "none";
  elements.productsGrid.style.opacity = "1";
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", init);
