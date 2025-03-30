 <template>
  <div>
    <!-- Banner Area -->
    <section id="common_banner_one">
        <div class="container ">
            <div class="row">
                <div class="col-lg-12">
                    <div class="common_banner_text">
                        <h2>{{this.title}}</h2>
                        <b-breadcrumb :items="breadcrumbItems" class="bg-transparent"></b-breadcrumb>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Login-Area -->
    <section id="login_area" class="ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3 col-md-12 col-sm-12 col-12">
                    <div class="account_form">
                        <h3>Login</h3>
                        <form @submit.prevent="handleSubmit">
                            <div class="default-form-box">
                                <label>Username or email <span>*</span></label>
                                <input type="text" v-model="user.username" id="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && $v.user.username.$error }" />
                                <div v-if="submitted && !$v.user.username.required" class="invalid-feedback">Username or Email is required</div>
                            </div>

                            <div class="default-form-box">
                                <label for="password">Password</label>
                                <input type="password" v-model="user.password" id="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && $v.user.password.$error }" />
                                <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                                    <span v-if="!$v.user.password.required">Password is required</span>
                                    <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
                                </div>
                            </div>
                                
                            <div class="login_submit">
                                <button type="button" @click="loginWithIdentityServer" class="theme-btn-one btn-black-overlay btn_md w-100">
                                    Login
                                </button>
                            </div>
                            
                            <div class="remember_area">
                                <label class="checkbox-default">
                                    <input type="checkbox" v-model="user.rememberMe">
                                    <span>Remember me</span>
                                </label>
                            </div>

                            <nuxt-link to="/register" class="d-block mt-3">Create Your Account?</nuxt-link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>

  </div>
</template>

<script>
import { required, minLength } from "vuelidate/lib/validators";
import authService from "@/services/auth"; // Identity Server 

export default {
    name: 'Login',
    data() {
        return {
            title: 'Login',

            // Breadcrumb Items Data
            breadcrumbItems: [
                {
                    text: 'Home',
                    to: '/'
                },
                {
                    text: 'Login'
                }
            ],
            // Form Validation
            user: {
                username: "",
                email: "",
                password: "",
                rememberMe: false
            },
            submitted: false,
            loading: false,
            error: null
        }
    },
    validations: {
        user: {
            username: { required },
            password: { required, minLength: minLength(6) },
        }
    },
    mounted() {  
        // For scroll page top for every Route 
        window.scrollTo(0, 0);
        
        // Kullanıcının zaten oturum açmış olup olmadığını kontrol edin
        authService.isAuthenticated().then(isAuthenticated => {
            if (isAuthenticated) {
                this.$router.push('/');
            }
        });
    },
    methods: {
        // Normal form login işlevi
        handleSubmit(e) {
            this.submitted = true;
            this.loading = true;
            this.error = null;

            // Form doğrulamasını kontrol edin
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.loading = false;
                return;
            }
            
            // Identity Server ile giriş yapalım
            this.loginWithIdentityServer();
        },
        
        // Identity Server ile login işlevi
        loginWithIdentityServer() {
            this.loading = true;
            
            // Identity Server'a yönlendirme
            authService.login()
                .catch(error => {
                    this.loading = false;
                    this.error = "Identity Server login failed. Please try again.";
                    console.error("Identity Server login error:", error);
                });
        }
    },

    // Page head() Title, description for SEO 
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Login page - AndShop Ecommerce Vue js, Nuxt js Template'
          }
        ]
      }
    }
}
</script>