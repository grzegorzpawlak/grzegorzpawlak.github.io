class CustomImage extends HTMLElement {
  static observedAttributes = ["src"];

  constructor() {
    super();
  }

  connectedCallback() {
    const src = this.getAttribute("src");
    if (src == null) {
      console.error("src attribute is required");
      return;
    }
    const alt = src.split("/")[1].split(".")[0];
    let desc = this.getAttribute("desc");
    if (desc == null) {
      desc = "";
    }
    this.innerHTML = `<div class="col mb-5">
                <div class="card h-100">
                    <!-- Product image-->
                    <img class="card-img-top" src="${src}" alt="${alt}"    />
                    <!-- Product details-->
                    <div class="card-body p-4">
                        <div class="text-center">
                            <!-- Product name-->
                            <h5 class="fw-bolder">${desc}</h5>
                            <!-- Product price-->
                        </div>
                    </div>
                    <!-- Product actions-->
                    <div class="visually-hidden card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                    </div>
                </div>
            </div>`;
  }
}

customElements.define('custom-image', CustomImage);