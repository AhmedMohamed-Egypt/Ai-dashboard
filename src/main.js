  const box = document.querySelector(".wizard-home-page__sphere");

  // أول ما يخلص fadeInDownBig
  box.addEventListener("animationend", () => {
    box.classList.remove("fadeDownSmooth");
    box.classList.add("subtleBounce");
  });

/*
  const template = document.createElement("template");
template.innerHTML = `
  <iframe frameborder="0" 
    width="1280" 
    height="900">
  </iframe>
`;

class PdfViewer extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "open" });
    shadowRoot.appendChild(template.content.cloneNode(true));
  }
  get observedAttributes() {
    return ["src"];
  }
  connectedCallback() {
    this.updateIframeSrc();
  }
  attributeChangedCallback(name) {
    if (["src", "viewerPath"].includes(name)) {
      this.updateIframeSrc();
    }
  }
  updateIframeSrc() {
    this.shadowRoot
      .querySelector("iframe")
      .setAttribute(
        "src",
        `https://mozilla.github.io/pdf.js/web/viewer.html?file=${
          this.getAttribute("src") || ""
        }`
      );
  }
}
window.customElements.define("pdf-viewer", PdfViewer);
const iframe = document.querySelector("pdf-viewer").shadowRoot.querySelector("iframe");

function enablePdfSelectionTools(iframe) {
  iframe.addEventListener("load", () => {
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    if (!doc) return;

    // create floating button
    const btn = doc.createElement("button");
    btn.textContent = "Action";
    btn.style.position = "absolute";
    btn.style.display = "none";
    btn.style.padding = "4px 8px";
    btn.style.fontSize = "12px";
    btn.style.border = "none";
    btn.style.borderRadius = "4px";
    btn.style.background = "#2563eb";
    btn.style.color = "white";
    btn.style.cursor = "pointer";
    btn.style.zIndex = "9999";
    doc.body.appendChild(btn);

    // show button near selection
    doc.addEventListener("mouseup", () => {
      const sel = doc.getSelection();
      if (!sel || sel.isCollapsed) {
        btn.style.display = "none";
        return;
      }

      const range = sel.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      if (!rect) return;

      btn.style.left = rect.right + 5 + "px";
      btn.style.top = rect.top + window.scrollY - 25 + "px";
      btn.style.display = "block";
    });

    // optional: style selected text on button click
    btn.addEventListener("click", () => {
      const sel = doc.getSelection();
      if (!sel || sel.isCollapsed) return;

      const range = sel.getRangeAt(0);
      const span = doc.createElement("span");
      span.style.backgroundColor = "yellow";
      span.style.borderRadius = "2px";
      span.textContent = sel.toString();

      range.deleteContents();
      range.insertNode(span);
      sel.removeAllRanges();
      btn.style.display = "none";
    });
  });
}

enablePdfSelectionTools(iframe);
*/