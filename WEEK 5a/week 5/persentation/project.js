
      // Cart functionality
      let cart = [];
      const cartIcon = document.getElementById('cartIcon');
      const cartCount = document.getElementById('cartCount');
      const overlay = document.getElementById('overlay');
      const addToCartButtons = document.querySelectorAll('.add-to-cart');
      const categoryButtons = document.querySelectorAll('.category-btn');
      const productsGrid = document.getElementById('productsGrid');
      const newsletterEmail = document.getElementById('newsletterEmail');
      const subscribeBtn = document.getElementById('subscribeBtn');

      

      // Add to cart functionality
      addToCartButtons.forEach(button => {
          button.addEventListener('click', (e) => {
              const productId = e.target.getAttribute('data-id');
              const productName = e.target.getAttribute('data-name');
              const productPrice = parseFloat(e.target.getAttribute('data-price'));
              const productImage = e.target.getAttribute('data-image');


      // Category filter functionality
      categoryButtons.forEach(button => {
          button.addEventListener('click', () => {
              // Remove active class from all buttons
              categoryButtons.forEach(btn => btn.classList.remove('active'));
              // Add active class to clicked button
              button.classList.add('active');

              const category = button.getAttribute('data-category');
              filterProducts(category);
          });
      });

      // Filter products by category
      function filterProducts(category) {
          const products = document.querySelectorAll('.product-card');

          products.forEach(product => {
              if (category === 'all' || product.getAttribute('data-category') === category) {
                  product.style.display = 'block';
              } else {
                  product.style.display = 'none';
              }
          });
      }

      // Newsletter subscription
      subscribeBtn.addEventListener('click', () => {
          const email = newsletterEmail.value;

          if (email && email.includes('@')) {
              alert('Thank you for subscribing to our newsletter!');
              newsletterEmail.value = '';
          } else {
              alert('Please enter a valid email address.');
          }
      });

      // Enter key for newsletter
      newsletterEmail.addEventListener('keypress', (e) => {
          if (e.key === 'Enter') {
              subscribeBtn.click();
          }
      });