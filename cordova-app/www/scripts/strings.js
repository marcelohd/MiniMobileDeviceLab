/**
Copyright 2013 Google Inc. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
**/
define([], function () {
    'use strict';

    var exports = {};

    exports.welcome_title = "Welcome to Your<br />Device Lab";
    exports.welcome_msgs = ['Sign in to register this device to your lab'];
    exports.sign_in = "Sign In";
    exports.select_account_title = 'Please Select Your Account';
    exports.home_title = "Device Lab";
    exports.home_msgs = ["There isn't much you can do with this...",
    "But if you send a URL from your device lab site, we'll be ready and waiting to handle it for you"];
    exports.log_out = "Log Out";

    return exports;
});