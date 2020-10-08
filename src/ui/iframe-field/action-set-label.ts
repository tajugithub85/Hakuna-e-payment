import encodeEntities from "../../internal/lib/encode-entities";
import paymentFieldId from "../../internal/lib/payment-field-id";

export default (text: string) => {
  const el = document.getElementById(paymentFieldId);
  if (!el) {
    return;
  }

  el.setAttribute("aria-label", encodeEntities(text));
  document.querySelectorAll("main")
    .forEach((e) => e.setAttribute("aria-label", encodeEntities(text)));
  document.querySelectorAll(`#${paymentFieldId}-label`)
    .forEach((e) => e.textContent = encodeEntities(text));
};
