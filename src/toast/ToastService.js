class ToastService {
  static listeners = [];

  static subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter((l) => l !== listener);
    };
  }

  static show(type, message, options = {}) {
    this.listeners.forEach((listener) => listener(type, message, options));
  }

  static success(message, options) {
    this.show("success", message, options);
  }

  static error(message, options) {
    this.show("danger", message, options);
  }

  static info(message, options) {
    this.show("info", message, options);
  }

  static warning(message, options) {
    this.show("warning", message, options);
  }
}

export default ToastService;
