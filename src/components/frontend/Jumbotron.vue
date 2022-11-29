<template>
  <div class="jumbotron d-flex justify-content-center align-items-end">
    <div class="container-fluid">
      <div class="row justify-content-center align-items-end">
        <div class="col-md-8">
          <slot name="content">
              <div class="text-center">
                <h1 class="display-3 fw-bold text-white">Custom jumbotron</h1>
                  <p class="fs-4 text-white">Using a series of utilities, you can create this jumbotron, just like the
                    one in previous
                    versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                <button class="btn btn-primary btn-lg" type="button">搶購去</button>
              </div>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.jumbotron {
  background-image: url(@/assets/images/jumbotron.jpg);
  background-position: center center;
  background-size: cover;
  height: 50vh;
}


</style>
