"use strict";
var _a, _b;
{
    const age = 15;
    if (age >= 18) {
        console.log("adult");
    }
    else {
        console.log("not adult");
    }
    const isAdult = age >= 18 ? "adult" : "not adult";
    console.log({ isAdult });
    // nullish coalescing operator
    // we use it for making decision depending on null or undefined value
    const isAuthenticated = "";
    const result1 = isAuthenticated !== null && isAuthenticated !== void 0 ? isAuthenticated : "Guest";
    console.log({ result1 });
    const result2 = isAuthenticated ? "Yes Authenticated" : "Guest";
    console.log({ result2 });
    const user = {
        name: "maruf",
        address: {
            city: "Dinajpur",
            road: "Awesome Road",
            presentAddress: "Dinajpur",
        },
    };
    console.log({ user });
    const permanentAddress = (_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.permanentAddress) !== null && _b !== void 0 ? _b : "No Permanent Address";
}
