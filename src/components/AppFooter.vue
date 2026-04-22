<script>
export default {
  name: "AppFooter",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
<template>
  <footer class="footer">
    <div class="container py-4">
      <div class="row align-items-center gy-3">
        <!-- Logo + copyright -->
        <div
          class="col-12 col-md-4 d-flex align-items-center justify-content-center flex-column"
        >
          <img
            src="../assets/images/loghi/Logo_Completo.svg"
            alt="Logo"
            class="w-50"
          />
          <p class="footer-copy mt-1">
            © {{ currentYear }} BnB. Tutti i diritti riservati.
          </p>
        </div>

        <!-- Link utili -->
        <div class="col-12 col-md-4 text-center">
          <ul
            class="footer-links list-unstyled d-flex justify-content-center gap-3 mb-0"
          >
            <li>
              <RouterLink :to="{ name: 'home' }">Home</RouterLink>
            </li>
            <li>
              <RouterLink :to="{ name: 'all_apartments' }"
                >Appartamenti</RouterLink
              >
            </li>
          </ul>
        </div>

        <!-- Social -->
        <div class="col-12 col-md-4 text-center text-md-end">
          <div
            class="footer-social d-flex justify-content-center justify-content-md-end gap-3"
          >
            <a href="#" aria-label="Facebook" target="_blank">
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="#" aria-label="Instagram" target="_blank">
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="#" aria-label="Twitter" target="_blank">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss">
@use "../styles/partial/variables" as *;

.footer {
  background-color: $clBlack;
  color: #fff;
  border-top: 3px solid $clRed;

  .footer-logo {
    font-size: 1.3rem;
    font-weight: 700;
    color: #fff;
  }

  .footer-copy {
    font-size: 0.8rem;
    color: rgba(255, 255, 255, 0.5);
    margin: 0;
  }

  .footer-links {
    a {
      color: rgba(255, 255, 255, 0.7);
      text-decoration: none;
      font-size: 0.9rem;
      transition: color 0.2s;

      &:hover {
        color: #fff;
      }
    }
  }

  .footer-social {
    a {
      color: rgba(255, 255, 255, 0.7);
      font-size: 1.2rem;
      transition:
        color 0.2s,
        transform 0.2s;

      &:hover {
        color: #fff;
        transform: translateY(-2px);
      }
    }
  }
}
</style>
