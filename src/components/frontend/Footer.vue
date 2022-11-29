<template>
  <footer>
    <div class="social-group bg-secondary text-white py-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="follow-us mb-4">
              <h3 class="mb-2">Follow us</h3>
              <div class="social">
                <a href="#" class="me-3"
                  ><i class="fa-brands fa-3x fa-square-facebook"></i
                ></a>
                <a href="#" class="me-3"
                  ><i class="fa-brands fa-3x fa-square-twitter"></i
                ></a>
                <a href="#" class="me-3"
                  ><i class="fa-brands fa-3x fa-square-google-plus"></i
                ></a>
                <a href="#" class="me-3"
                  ><i class="fa-brands fa-3x fa-square-youtube"></i
                ></a>
              </div>
            </div>
          </div>
          <div class="col-lg-8">
            <div class="contact-us">
              <h3 class="mb-2">Contact us</h3>
              <div class="row">
                <div class="col-lg-4">
                  <div class="address">
                    <i class="fa-solid me-3 fa-3x fa-location-dot"></i>
                    <div>
                      <h4>Address:</h4>
                      <p>23 New Design Str, Melbourne, Australia</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="phone">
                    <i class="fa-solid me-3 fa-3x fa-phone"></i>
                    <div>
                      <h4>Phone:</h4>
                      <p>1-888-123-456-89</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-4">
                  <div class="mail">
                    <i class="fa-solid me-3 fa-3x fa-envelope"></i>
                    <div>
                      <h4>Email:</h4>
                      <p>infor@plazathemes.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-copyright py-3 text-center bg-dark text-white">
      <span>此網站僅供學術用途，無任何實體商品販售。</span>
    </div>
  </footer>
</template>

<style lang="scss" scoped>

.address,
.phone,
.mail {
  display: flex;
}

.fa-location-dot{
    width: 42px;
    height: 42px;
}
</style>
