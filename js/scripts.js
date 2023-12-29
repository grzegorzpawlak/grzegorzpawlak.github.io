/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

class NavigationBar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const index = this.getAttribute("active");
    let home_active = "";
    let order_active = "";
    if (index == "1") {
      order_active = "active";
    }
    else {
      home_active = "active";
    }

    this.innerHTML = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="?dc=default#">Modelinowy kubeczek</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span
                class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li class="nav-item"><a class="nav-link ${home_active}" aria-current="page" href="?dc=default#">Kubki</a></li>
                <li class="nav-item"><a class="nav-link ${order_active}" href="?dc=order#">Zamówienia i wysyłka</a></li>
            </ul>
            <form class="visually-hidden d-flex">
                <button class="btn btn-outline-dark" type="submit">
                    <i class="bi-cart-fill me-1"></i>
                    Cart
                    <span class="badge bg-dark text-white ms-1 rounded-pill">0</span>
                </button>
            </form>
        </div>
    </div>
</nav>`;
  }
}

customElements.define('navigation-bar', NavigationBar);