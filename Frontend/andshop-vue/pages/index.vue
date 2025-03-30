 <template>
  <div class="home-page">
    <!-- Banner Area -->
    <section id="banner_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="banner_text_one">
              <h1
                class="flipInX"
                style="animation-duration: 3s; animation-delay: 0.3s"
              >
                Live For
                <span
                  class="flipInX"
                  style="animation-duration: 2s; animation-delay: 0.5s"
                  >Fashion</span
                >
              </h1>
              <h3>Save Up To 50%</h3>
              <nuxt-link to="/shop/shop-3" class="theme-btn-one bg-black btn_md"
                >Satın Al</nuxt-link
              >
            </div>
          </div>
          <div class="col-lg-6">
            <div class="hero_img">
              <img
                :src="require('@/assets/img/common/man.png')"
                alt="img"
                class="slideInRight"
                style="animation-duration: 3s; animation-delay: 0.3s"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product variation -->
    <section id="product_variation_one" class="pt-100">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="product_variation_one_boxed img-zoom-hover">
              <img :src="require('@/assets/img/offer/woman.png')" alt="img" />
              <div class="product_var_one_text">
                <h4 class="color_one">GİYİM</h4>
                <h2>YENİ</h2>
                <h4>Koleksiyon</h4>
                <nuxt-link
                  to="/shop/shop-2"
                  class="theme-btn-one bg-black btn_sm"
                  >Satın Al</nuxt-link
                >
              </div>
            </div>
            <div class="product_variation_one_boxed img-zoom-hover">
              <img :src="require('@/assets/img/offer/woman1.png')" alt="img" />
              <div class="product_var_one_text">
                <h4 class="color_one">Yaz</h4>
                <h2>GÜNCEL</h2>
                <h4>Koleksiyon</h4>
                <nuxt-link to="/shop" class="theme-btn-one bg-black btn_sm"
                  >Satın Al</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="product_variation_one_boxed img-zoom-hover">
              <img :src="require('@/assets/img/offer/bag.png')" alt="img" />
              <div class="product_var_one_text_center">
                <h2 class="color_one">10% İNDİRİM</h2>
                <h4>SEÇİLİ ÜRÜNLER</h4>
                <nuxt-link
                  to="/shop/shop-3"
                  class="theme-btn-one bg-black btn_sm"
                  >Satın Al</nuxt-link
                >
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="product_variation_one_boxed img-zoom-hover">
              <img :src="require('@/assets/img/offer/woman4.png')" alt="img" />
              <div class="product_var_one_text">
                <h2>YENİ</h2>
                <h4 class="color_one">YAZ FIRSATLARI</h4>
                <nuxt-link
                  to="/shop/shop-2"
                  class="theme-btn-one bg-black btn_sm"
                  >Satın Alanlar</nuxt-link
                >
              </div>
            </div>
            <div class="product_variation_one_boxed img-zoom-hover">
              <img :src="require('@/assets/img/offer/kids.png')" alt="img" />
              <div class="product_var_one_text">
                <h2>ÇOCUK</h2>
                <h4 class="color_one">KOLEKSİYON</h4>
                <nuxt-link to="/shop" class="theme-btn-one bg-black btn_sm"
                  >Satın Al</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hot Product Area -->
    <section id="hot_Product_area" class="ptb-100">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="center_heading">
              <h2>YENİ ÜRÜNLER</h2>
              <p>Herkesin BT Shop tan Alışveriş Yaptığını Görün</p>
            </div>
          </div>
        </div>

        <div v-if="isLoading" class="text-center">
          <div class="spinner-border text-primary" role="status">
            <span class="sr-only">Yükleniyor...</span>
          </div>
          <p class="mt-2">Kategoriler yükleniyor...</p>
        </div>

        <div v-else-if="hasError" class="text-center text-danger">
          <p>Kategoriler yüklenirken bir hata oluştu. Lütfen sayfayı yenileyin.</p>
        </div>

        <b-tabs v-else class="hot-product-area-tabs">
          <b-tab
            :title="category"
            v-for="(category, index) in apiCategories"
            :key="index"
            class="row"
          >
            <div
              class="col-lg-3 col-md-4 col-sm-6 col-12"
              v-for="(product, productIndex) in getApiProductsByCategory(category)"
              :key="productIndex"
            >
              <ProductBox1
                :product="product"
                :index="productIndex"
                @showalert="alert"
                @alertseconds="alert"
              />
            </div>
          </b-tab>
        </b-tabs>
      </div>
    </section>



    <!-- Add to cart Alert / Notification  -->
    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="success"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="alert"
    >
      <p class="font-weight-normal">Successfully added to your list</p>
    </b-alert>
    <!-- Add to cart Alert / Notification  -->

    <!-- Add to wishlist / wishlist Notification  -->
    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="success"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="alert"
    >
      <p class="font-weight-normal">Successfully added to your list</p>
    </b-alert>
    <!-- Add to wishlist / wishlist Notification  -->

    <!-- Add to Compare / Compare Notification  -->
    <b-alert
      :show="dismissCountDown"
      dismissible
      fade
      variant="success"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="alert"
    >
      <p class="font-weight-normal">Successfully added to your list</p>
    </b-alert>
    <!-- Add to Compare / Compare Notification  -->
  </div>
</template>

<script>
import { mapState } from "vuex";
import ProductBox1 from "~/components/product-box/ProductBox1";
import Timer from "../components/widgets/Timer";
import InstagramArea from "../components/instagram/InstagramArea";
import BlogItem1 from "~/components/blog/BlogItem1";

export default {
  name: "Home",
  components: {
    ProductBox1,
    Timer,
    InstagramArea,
    BlogItem1,
  },

  data() {
    return {
      title: "Home",
      products: [],
      category: [],
      cartproduct: {},
      compareproduct: {},
      dismissCountDown: 0,

      // Todays Slider options
      swiperOption: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 30,
        loop: false,
        mousewheel: false,
        keyboard: {
          enabled: false,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints: {
          1024: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
        },
        autoplay: false,
      },
    };
  },
  computed: {
    ...mapState({
      productslist: (state) => state.products.productslist,
    }),
    // API data related computed properties
    apiProducts() {
      return this.$store.getters['products/getApiProducts'];
    },
    apiCategories() {
      return this.$store.getters['products/getApiCategories'];
    },
    isLoading() {
      return this.$store.getters['products/isLoading'];
    },
    hasError() {
      return this.$store.getters['products/hasError'];
    }
  },

  mounted() {
    // For scroll page top for every Route
    window.scrollTo(0, 0);
    
    // Fetch products from API
    this.$store.dispatch('products/fetchProducts');
    
    // Still process static products for other parts of the app if needed
    this.productsArray();
  },

  methods: {
    productsArray: function () {
      this.productslist.map((item) => {
        if (item.type === "fashion") {
          this.products.push(item);
          item.collection.map((i) => {
            const index = this.category.indexOf(i);
            if (index === -1) this.category.push(i);
          });
        }
      });
    },
    
    // Get products by category from API
    getApiProductsByCategory(category) {
      return this.$store.getters['products/getApiProductsByCategory'](category);
    },
    
    // Product added Alert / notification
    alert(item) {
      this.dismissCountDown = item;
    },

    // Page head() Title, description for SEO
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: "description",
            name: "description",
            content: "Home page - AndShop Ecommerce Vue js, Nuxt js Template ",
          },
        ],
      };
    }
  }
};
</script>