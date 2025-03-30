<template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="common_banner_text">
              <h2>Shop</h2>
              <b-breadcrumb
                :items="breadcrumbItems"
                class="bg-transparent"
              ></b-breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Product Single Area -->
    <section id="product_single_one" class="ptb-100">
      <div class="container">
        <div class="row area_boxed">
          <div class="col-lg-4">
            <div class="product_single_one_img">
              <div v-swiper:mySwiper="swiperOption" ref="mySwiper">
                <div class="swiper-wrapper">
                  <div
                    class="swiper-slide"
                    v-for="(product, index) in getDetail.images"
                    :key="index"
                  >
                    <inner-image-zoom
                      :src="getImageUrl(product.src)"
                      :id="product.image_id"
                      :zoomSrc="getImageUrl(product.src)"
                      moveType="drag"
                      className="product-image-zoom"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="product_details_right_one">
              <div class="modal_product_content_one">
                <h3 class="text-capitalize">{{ getDetail.title }}</h3>
                <h4 v-if="getDetail.discount">
                  ${{ discountedPrice(getDetail) }}
                  <del>${{ getDetail.price }}</del>
                </h4>
                <h4 v-else>${{ getDetail.price }}</h4>
                <p>{{ getDetail.description }}</p>
                <div class="customs_selects">
                  <select name="product" class="customs_sel_box">
                    <option value="size">Size</option>
                    <option value="xl">XL</option>
                    <option value="small">S</option>
                    <option value="medium">M</option>
                    <option value="large">L</option>
                  </select>
                </div>
                <div class="variable-single-item">
                  <span>Color</span>

                  <ul class="color-variant d-flex">
                    <li
                      v-bind:class="{ active: activeColor == variant }"
                      v-for="(variant, variantIndex) in Color(
                        getDetail.variants
                      )"
                      :key="variantIndex"
                    >
                      <a
                        :class="[variant]"
                        v-bind:style="{ 'background-color': variant }"
                        @click="
                          sizeVariant(
                            getDetail.variants[variantIndex].image_id,
                            variantIndex,
                            variant
                          )
                        "
                      ></a>
                    </li>
                  </ul>
                </div>
                <form id="product_count_form_two">
                  <div class="product_count_one">
                    <b-form-spinbutton
                      id="sb-inline"
                      min="1"
                      max="100"
                      v-model="quantity"
                      inline
                      class="border-0"
                    ></b-form-spinbutton>
                  </div>
                </form>
                <div class="links_Product_areas">
                  <ul>
                    <li>
                      <button
                        @click="addToWishlist(getDetail)"
                        class="action wishlist bg-transparent"
                        title="Wishlist"
                      >
                        <i class="far fa-heart mr-1"></i>Add To Wishlist
                      </button>
                    </li>
                    <li>
                      <button
                        @click="addToCompare(getDetail)"
                        class="action compare bg-transparent"
                        title="Compare"
                      >
                        <i class="fas fa-exchange-alt mr-1"></i>Add To Compare
                      </button>
                    </li>
                  </ul>
                  <button
                    @click="addToCart()"
                    class="theme-btn-one btn-black-overlay btn_sm"
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

   

    <!-- Instagram Arae -->
    <InstagramArea />
  </div>
</template>

<script>
import ProductBox1 from "~/components/product-box/ProductBox1";
import InstagramArea from "~/components/instagram/InstagramArea";
import RelatedProducts from "~/components/widgets/RelatedProducts";

export default {
  name: "product-single",
  components: {
    ProductBox1,
    InstagramArea,
    RelatedProducts,
  },
  data() {
    return {
      activeColor: "",
      selectedSize: "",
      qty: "",
      size: [],
      productType: "",
      productId: "",
      // Breadcrumb Items Data
      breadcrumbItems: [
        {
          text: "Home",
          to: "/",
        },
        {
          text: "Product Single",
          to: "/product",
        },
      ],
      // Product Quantity Increment/ Decrement Data
      quantity: 1,
      cartProduct: {},
      compareProduct: {},
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 20,
        freeMode: true,
      },
    };
  },

  computed: {
    getDetail: function () {
      return this.$store.getters["products/getApiProductById"](
        this.$route.params.id
      );
    },
    swiper() {
      return this.$refs.mySwiper.swiper;
    },
  },

  mounted() {
    // For displaying default color and size on pageload
    this.uniqColor = this.getDetail.variants[0].color;
    this.sizeVariant(this.getDetail.variants[0].image_id);
    // Active default color
    this.activeColor = this.uniqColor;
    this.changeSizeVariant(this.getDetail.variants[0].size);
    //this.relatedProducts();

    // For scroll page top for every Route
    window.scrollTo(0, 0);
  },

  methods: {
    getImageUrl(path) {
      return require("@/assets/img/product-image/" + path);
    },
    discountedPrice(product) {
      const price = product.price - (product.price * product.discount) / 100;
      return price;
    },
    // add to cart
     addToCart: function() {
  // API'den gelen ürün verisi 
     const productToAdd = {
    ...this.getDetail,           // API'den gelen bütün veriler
    quantity: this.quantity,     // Seçilen miktar
    selectedColor: this.activeColor,  // Seçilen renk
    selectedSize: this.selectedSize   // Seçilen beden
  };
  
  this.$store.dispatch("cart/addToCart", productToAdd);
},
    // add to wishlist
    addToWishlist: function (product) {
      this.$store.dispatch("products/addToWishlist", product);
    },
    // add to compare
    addToCompare: function (product) {
      this.$store.dispatch("products/addToCompare", product);
    },
    // Related Product Display
    relatedProducts() {
      this.productType = this.getDetail.type;
      this.productId = this.getDetail.id;
    },

    // Display Unique color
    Color(variants) {
      const uniqColor = [];
      for (let i = 0; i < Object.keys(variants).length; i++) {
        if (uniqColor.indexOf(variants[i].color) === -1) {
          uniqColor.push(variants[i].color);
        }
      }
      return uniqColor;
    },
    // Change Size Variant
    changeSizeVariant(variant) {
      this.selectedSize = variant;
    },
    slideTo(id) {
      this.swiper.slideTo(id, 1000, false);
    },
    sizeVariant(id, slideId, color) {
      this.swiper.slideTo(slideId, 1000, false);
      this.size = [];
      this.activeColor = color;
      this.getDetail.variants.filter((item) => {
        if (id === item.image_id) {
          this.size.push(item.size);
        }
      });
    },
  },

  // Page head() Title, description for SEO
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Shop page - AndShop Ecommerce Vue js, Nuxt js Template",
        },
      ],
    };
  },
};
</script> 