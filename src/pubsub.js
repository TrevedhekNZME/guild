/**
 * Listen to a custom event.
 * @param {string} eventName: label that identifies the event type
 * @param {function} listener: takes an event object with an (optional) detail property.
 * @return {function} takes no params, unsubscribes this listener.
 */
const subscribe = (eventName, listener) => {
  window.addEventListener(eventName, listener);
  return () => window.removeEventListener(eventName, listener);
};

/**
 * Broadcast an event to any listeners on window or document.
 * Events are dispatched on document (for older browsers) but can bubble up.
 * @param {string} eventName: label that identifies the event type
 * @param {*} detail (optional) a payload to pass to the listener(s).
 */
const publish = (eventName, detail) => {
  if (typeof CustomEvent === "function") {
    const publication = new CustomEvent(eventName, { detail, bubbles: true });
    window.document.dispatchEvent(publication);
  } else if (typeof Event === "function") {
    const publication = new Event(eventName, { bubbles: true });
    publication.detail = detail;
    window.document.dispatchEvent(publication);
  } else {
    // Support older browsers
    const publication = document.createEvent("Event");
    publication.initEvent(eventName, true, false);
    publication.detail = detail;
    window.document.dispatchEvent(publication);
  }
};

export { publish, subscribe };
