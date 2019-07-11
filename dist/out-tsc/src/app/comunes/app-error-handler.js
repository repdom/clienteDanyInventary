import swal from 'sweetalert2';
var AppErrorHandler = /** @class */ (function () {
    function AppErrorHandler() {
    }
    AppErrorHandler.prototype.handleError = function (message) {
        console.log(message);
        swal.fire({
            type: 'error',
            title: 'Oops...',
            text: message,
        });
    };
    return AppErrorHandler;
}());
export { AppErrorHandler };
//# sourceMappingURL=app-error-handler.js.map