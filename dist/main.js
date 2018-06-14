/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/arch/index.js":
/*!************************************!*\
  !*** ./node_modules/arch/index.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var cp = __webpack_require__(/*! child_process */ \"child_process\")\nvar fs = __webpack_require__(/*! fs */ \"fs\")\nvar path = __webpack_require__(/*! path */ \"path\")\n\n/**\n * Returns the operating system's CPU architecture. This is different than\n * `process.arch` or `os.arch()` which returns the architecture the Node.js (or\n * Electron) binary was compiled for.\n */\nmodule.exports = function arch () {\n  /**\n   * The running binary is 64-bit, so the OS is clearly 64-bit.\n   */\n  if (process.arch === 'x64') {\n    return 'x64'\n  }\n\n  /**\n   * All recent versions of Mac OS are 64-bit.\n   */\n  if (process.platform === 'darwin') {\n    return 'x64'\n  }\n\n  /**\n   * On Windows, the most reliable way to detect a 64-bit OS from within a 32-bit\n   * app is based on the presence of a WOW64 file: %SystemRoot%\\SysNative.\n   * See: https://twitter.com/feross/status/776949077208510464\n   */\n  if (process.platform === 'win32') {\n    var useEnv = false\n    try {\n      useEnv = !!(process.env.SYSTEMROOT && fs.statSync(process.env.SYSTEMROOT))\n    } catch (err) {}\n\n    var sysRoot = useEnv ? process.env.SYSTEMROOT : 'C:\\\\Windows'\n\n    // If %SystemRoot%\\SysNative exists, we are in a WOW64 FS Redirected application.\n    var isWOW64 = false\n    try {\n      isWOW64 = !!fs.statSync(path.join(sysRoot, 'sysnative'))\n    } catch (err) {}\n\n    return isWOW64 ? 'x64' : 'x86'\n  }\n\n  /**\n   * On Linux, use the `getconf` command to get the architecture.\n   */\n  if (process.platform === 'linux') {\n    var output = cp.execSync('getconf LONG_BIT', {encoding: 'utf8'})\n    return output === '64\\n' ? 'x64' : 'x86'\n  }\n\n  /**\n   * If none of the above, assume the architecture is 32-bit.\n   */\n  return 'x86'\n}\n\n\n//# sourceURL=webpack:///./node_modules/arch/index.js?");

/***/ }),

/***/ "./node_modules/clipboardy/index.js":
/*!******************************************!*\
  !*** ./node_modules/clipboardy/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst termux = __webpack_require__(/*! ./lib/termux.js */ \"./node_modules/clipboardy/lib/termux.js\");\nconst linux = __webpack_require__(/*! ./lib/linux.js */ \"./node_modules/clipboardy/lib/linux.js\");\nconst macos = __webpack_require__(/*! ./lib/macos.js */ \"./node_modules/clipboardy/lib/macos.js\");\nconst windows = __webpack_require__(/*! ./lib/windows.js */ \"./node_modules/clipboardy/lib/windows.js\");\n\nfunction platform() {\n\tswitch (process.platform) {\n\t\tcase 'darwin':\n\t\t\treturn macos;\n\t\tcase 'win32':\n\t\t\treturn windows;\n\t\tcase 'android':\n\t\t\tif (process.env.PREFIX !== '/data/data/com.termux/files/usr') {\n\t\t\t\tthrow new Error('You need to install Termux for this module to work on Android: https://termux.com');\n\t\t\t}\n\t\t\treturn termux;\n\t\tdefault:\n\t\t\treturn linux;\n\t}\n}\n\nexports.write = input => {\n\tif (typeof input !== 'string') {\n\t\treturn Promise.reject(new TypeError(`Expected a string, got ${typeof input}`));\n\t}\n\n\treturn platform().copy({input}).then(() => {});\n};\n\nexports.read = () => platform().paste({stripEof: false});\n\nexports.writeSync = input => {\n\tif (typeof input !== 'string') {\n\t\tthrow new TypeError(`Expected a string, got ${typeof input}`);\n\t}\n\n\tplatform().copySync({input});\n};\n\nexports.readSync = () => platform().pasteSync({stripEof: false}).stdout;\n\n\n//# sourceURL=webpack:///./node_modules/clipboardy/index.js?");

/***/ }),

/***/ "./node_modules/clipboardy/lib/linux.js":
/*!**********************************************!*\
  !*** ./node_modules/clipboardy/lib/linux.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\nconst path = __webpack_require__(/*! path */ \"path\");\nconst execa = __webpack_require__(/*! execa */ \"./node_modules/clipboardy/node_modules/execa/index.js\");\n\nconst handler = err => {\n\tif (err.code === 'ENOENT') {\n\t\tthrow new Error('Couldn\\'t find the required `xsel` binary. On Debian/Ubuntu you can install it with: sudo apt install xsel');\n\t}\n\n\tthrow err;\n};\n\nconst xsel = path.join(__dirname, '../fallbacks/linux/xsel');\n\nmodule.exports = {\n\tcopy: opts => {\n\t\treturn execa(xsel, ['--clipboard', '--input'], opts)\n\t\t\t.catch(() => execa('xsel', ['--clipboard', '--input'], opts))\n\t\t\t.catch(handler);\n\t},\n\tpaste: opts => {\n\t\treturn execa.stdout(xsel, ['--clipboard', '--output'], opts)\n\t\t\t.catch(() => execa.stdout('xsel', ['--clipboard', '--output'], opts))\n\t\t\t.catch(handler);\n\t},\n\tcopySync: opts => {\n\t\ttry {\n\t\t\treturn execa.sync(xsel, ['--clipboard', '--input'], opts);\n\t\t} catch (err) {\n\t\t\ttry {\n\t\t\t\treturn execa.sync('xsel', ['--clipboard', '--input'], opts);\n\t\t\t} catch (err) {\n\t\t\t\thandler(err);\n\t\t\t}\n\t\t}\n\t},\n\tpasteSync: opts => {\n\t\ttry {\n\t\t\treturn execa.sync(xsel, ['--clipboard', '--output'], opts);\n\t\t} catch (err) {\n\t\t\ttry {\n\t\t\t\treturn execa.sync('xsel', ['--clipboard', '--output'], opts);\n\t\t\t} catch (err) {\n\t\t\t\thandler(err);\n\t\t\t}\n\t\t}\n\t}\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./node_modules/clipboardy/lib/linux.js?");

/***/ }),

/***/ "./node_modules/clipboardy/lib/macos.js":
/*!**********************************************!*\
  !*** ./node_modules/clipboardy/lib/macos.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst execa = __webpack_require__(/*! execa */ \"./node_modules/clipboardy/node_modules/execa/index.js\");\n\nconst env = Object.assign({}, process.env, {LC_CTYPE: 'UTF-8'});\n\nmodule.exports = {\n\tcopy: opts => execa('pbcopy', Object.assign({}, opts, {env})),\n\tpaste: opts => execa.stdout('pbpaste', Object.assign({}, opts, {env})),\n\tcopySync: opts => execa.sync('pbcopy', Object.assign({}, opts, {env})),\n\tpasteSync: opts => execa.sync('pbpaste', Object.assign({}, opts, {env}))\n};\n\n\n//# sourceURL=webpack:///./node_modules/clipboardy/lib/macos.js?");

/***/ }),

/***/ "./node_modules/clipboardy/lib/termux.js":
/*!***********************************************!*\
  !*** ./node_modules/clipboardy/lib/termux.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst execa = __webpack_require__(/*! execa */ \"./node_modules/clipboardy/node_modules/execa/index.js\");\n\nconst handler = err => {\n\tif (err.code === 'ENOENT') {\n\t\tthrow new Error('Couldn\\'t find the termux-api scripts. You can install them with: apt install termux-api');\n\t}\n\n\tthrow err;\n};\n\nmodule.exports = {\n\tcopy: opts => execa('termux-clipboard-set', opts).catch(handler),\n\tpaste: opts => execa.stdout('termux-clipboard-get', opts).catch(handler),\n\tcopySync: opts => {\n\t\ttry {\n\t\t\treturn execa.sync('termux-clipboard-set', opts);\n\t\t} catch (err) {\n\t\t\thandler(err);\n\t\t}\n\t},\n\tpasteSync: opts => {\n\t\ttry {\n\t\t\treturn execa.sync('termux-clipboard-get', opts);\n\t\t} catch (err) {\n\t\t\thandler(err);\n\t\t}\n\t}\n};\n\n\n//# sourceURL=webpack:///./node_modules/clipboardy/lib/termux.js?");

/***/ }),

/***/ "./node_modules/clipboardy/lib/windows.js":
/*!************************************************!*\
  !*** ./node_modules/clipboardy/lib/windows.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\nconst path = __webpack_require__(/*! path */ \"path\");\nconst execa = __webpack_require__(/*! execa */ \"./node_modules/clipboardy/node_modules/execa/index.js\");\nconst arch = __webpack_require__(/*! arch */ \"./node_modules/arch/index.js\");\n\n// Binaries from: https://github.com/sindresorhus/win-clipboard\nconst winBinPath = arch() === 'x64' ?\n\tpath.join(__dirname, '../fallbacks/windows/clipboard_x86_64.exe') :\n\tpath.join(__dirname, '../fallbacks/windows/clipboard_i686.exe');\n\nmodule.exports = {\n\tcopy: opts => execa(winBinPath, ['--copy'], opts),\n\tpaste: opts => execa.stdout(winBinPath, ['--paste'], opts),\n\tcopySync: opts => execa.sync(winBinPath, ['--copy'], opts),\n\tpasteSync: opts => execa.sync(winBinPath, ['--paste'], opts)\n};\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./node_modules/clipboardy/lib/windows.js?");

/***/ }),

/***/ "./node_modules/clipboardy/node_modules/cross-spawn/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/clipboardy/node_modules/cross-spawn/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar cp = __webpack_require__(/*! child_process */ \"child_process\");\nvar parse = __webpack_require__(/*! ./lib/parse */ \"./node_modules/clipboardy/node_modules/cross-spawn/lib/parse.js\");\nvar enoent = __webpack_require__(/*! ./lib/enoent */ \"./node_modules/clipboardy/node_modules/cross-spawn/lib/enoent.js\");\n\nvar cpSpawnSync = cp.spawnSync;\n\nfunction spawn(command, args, options) {\n    var parsed;\n    var spawned;\n\n    // Parse the arguments\n    parsed = parse(command, args, options);\n\n    // Spawn the child process\n    spawned = cp.spawn(parsed.command, parsed.args, parsed.options);\n\n    // Hook into child process \"exit\" event to emit an error if the command\n    // does not exists, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16\n    enoent.hookChildProcess(spawned, parsed);\n\n    return spawned;\n}\n\nfunction spawnSync(command, args, options) {\n    var parsed;\n    var result;\n\n    if (!cpSpawnSync) {\n        try {\n            cpSpawnSync = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module 'spawn-sync'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));  // eslint-disable-line global-require\n        } catch (ex) {\n            throw new Error(\n                'In order to use spawnSync on node 0.10 or older, you must ' +\n                'install spawn-sync:\\n\\n' +\n                '  npm install spawn-sync --save'\n            );\n        }\n    }\n\n    // Parse the arguments\n    parsed = parse(command, args, options);\n\n    // Spawn the child process\n    result = cpSpawnSync(parsed.command, parsed.args, parsed.options);\n\n    // Analyze if the command does not exists, see: https://github.com/IndigoUnited/node-cross-spawn/issues/16\n    result.error = result.error || enoent.verifyENOENTSync(result.status, parsed);\n\n    return result;\n}\n\nmodule.exports = spawn;\nmodule.exports.spawn = spawn;\nmodule.exports.sync = spawnSync;\n\nmodule.exports._parse = parse;\nmodule.exports._enoent = enoent;\n\n\n//# sourceURL=webpack:///./node_modules/clipboardy/node_modules/cross-spawn/index.js?");

/***/ }),

/***/ "./node_modules/clipboardy/node_modules/cross-spawn/lib/enoent.js":
/*!************************************************************************!*\
  !*** ./node_modules/clipboardy/node_modules/cross-spawn/lib/enoent.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isWin = process.platform === 'win32';\nvar resolveCommand = __webpack_require__(/*! ./util/resolveCommand */ \"./node_modules/clipboardy/node_modules/cross-spawn/lib/util/resolveCommand.js\");\n\nvar isNode10 = process.version.indexOf('v0.10.') === 0;\n\nfunction notFoundError(command, syscall) {\n    var err;\n\n    err = new Error(syscall + ' ' + command + ' ENOENT');\n    err.code = err.errno = 'ENOENT';\n    err.syscall = syscall + ' ' + command;\n\n    return err;\n}\n\nfunction hookChildProcess(cp, parsed) {\n    var originalEmit;\n\n    if (!isWin) {\n        return;\n    }\n\n    originalEmit = cp.emit;\n    cp.emit = function (name, arg1) {\n        var err;\n\n        // If emitting \"exit\" event and exit code is 1, we need to check if\n        // the command exists and emit an \"error\" instead\n        // See: https://github.com/IndigoUnited/node-cross-spawn/issues/16\n        if (name === 'exit') {\n            err = verifyENOENT(arg1, parsed, 'spawn');\n\n            if (err) {\n                return originalEmit.call(cp, 'error', err);\n            }\n        }\n\n        return originalEmit.apply(cp, arguments);\n    };\n}\n\nfunction verifyENOENT(status, parsed) {\n    if (isWin && status === 1 && !parsed.file) {\n        return notFoundError(parsed.original, 'spawn');\n    }\n\n    return null;\n}\n\nfunction verifyENOENTSync(status, parsed) {\n    if (isWin && status === 1 && !parsed.file) {\n        return notFoundError(parsed.original, 'spawnSync');\n    }\n\n    // If we are in node 10, then we are using spawn-sync; if it exited\n    // with -1 it probably means that the command does not exist\n    if (isNode10 && status === -1) {\n        parsed.file = isWin ? parsed.file : resolveCommand(parsed.original);\n\n        if (!parsed.file) {\n            return notFoundError(parsed.original, 'spawnSync');\n        }\n    }\n\n    return null;\n}\n\nmodule.exports.hookChildProcess = hookChildProcess;\nmodule.exports.verifyENOENT = verifyENOENT;\nmodule.exports.verifyENOENTSync = verifyENOENTSync;\nmodule.exports.notFoundError = notFoundError;\n\n\n//# sourceURL=webpack:///./node_modules/clipboardy/node_modules/cross-spawn/lib/enoent.js?");

/***/ }),

/***/ "./node_modules/clipboardy/node_modules/cross-spawn/lib/parse.js":
/*!***********************************************************************!*\
  !*** ./node_modules/clipboardy/node_modules/cross-spawn/lib/parse.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar resolveCommand = __webpack_require__(/*! ./util/resolveCommand */ \"./node_modules/clipboardy/node_modules/cross-spawn/lib/util/resolveCommand.js\");\nvar hasEmptyArgumentBug = __webpack_require__(/*! ./util/hasEmptyArgumentBug */ \"./node_modules/clipboardy/node_modules/cross-spawn/lib/util/hasEmptyArgumentBug.js\");\nvar escapeArgument = __webpack_require__(/*! ./util/escapeArgument */ \"./node_modules/clipboardy/node_modules/cross-spawn/lib/util/escapeArgument.js\");\nvar escapeCommand = __webpack_require__(/*! ./util/escapeCommand */ \"./node_modules/clipboardy/node_modules/cross-spawn/lib/util/escapeCommand.js\");\nvar readShebang = __webpack_require__(/*! ./util/readShebang */ \"./node_modules/clipboardy/node_modules/cross-spawn/lib/util/readShebang.js\");\n\nvar isWin = process.platform === 'win32';\nvar skipShellRegExp = /\\.(?:com|exe)$/i;\n\n// Supported in Node >= 6 and >= 4.8\nvar supportsShellOption = parseInt(process.version.substr(1).split('.')[0], 10) >= 6 ||\n parseInt(process.version.substr(1).split('.')[0], 10) === 4 && parseInt(process.version.substr(1).split('.')[1], 10) >= 8;\n\nfunction parseNonShell(parsed) {\n    var shebang;\n    var needsShell;\n    var applyQuotes;\n\n    if (!isWin) {\n        return parsed;\n    }\n\n    // Detect & add support for shebangs\n    parsed.file = resolveCommand(parsed.command);\n    parsed.file = parsed.file || resolveCommand(parsed.command, true);\n    shebang = parsed.file && readShebang(parsed.file);\n\n    if (shebang) {\n        parsed.args.unshift(parsed.file);\n        parsed.command = shebang;\n        needsShell = hasEmptyArgumentBug || !skipShellRegExp.test(resolveCommand(shebang) || resolveCommand(shebang, true));\n    } else {\n        needsShell = hasEmptyArgumentBug || !skipShellRegExp.test(parsed.file);\n    }\n\n    // If a shell is required, use cmd.exe and take care of escaping everything correctly\n    if (needsShell) {\n        // Escape command & arguments\n        applyQuotes = (parsed.command !== 'echo');  // Do not quote arguments for the special \"echo\" command\n        parsed.command = escapeCommand(parsed.command);\n        parsed.args = parsed.args.map(function (arg) {\n            return escapeArgument(arg, applyQuotes);\n        });\n\n        // Make use of cmd.exe\n        parsed.args = ['/d', '/s', '/c', '\"' + parsed.command + (parsed.args.length ? ' ' + parsed.args.join(' ') : '') + '\"'];\n        parsed.command = process.env.comspec || 'cmd.exe';\n        parsed.options.windowsVerbatimArguments = true;  // Tell node's spawn that the arguments are already escaped\n    }\n\n    return parsed;\n}\n\nfunction parseShell(parsed) {\n    var shellCommand;\n\n    // If node supports the shell option, there's no need to mimic its behavior\n    if (supportsShellOption) {\n        return parsed;\n    }\n\n    // Mimic node shell option, see: https://github.com/nodejs/node/blob/b9f6a2dc059a1062776133f3d4fd848c4da7d150/lib/child_process.js#L335\n    shellCommand = [parsed.command].concat(parsed.args).join(' ');\n\n    if (isWin) {\n        parsed.command = typeof parsed.options.shell === 'string' ? parsed.options.shell : process.env.comspec || 'cmd.exe';\n        parsed.args = ['/d', '/s', '/c', '\"' + shellCommand + '\"'];\n        parsed.options.windowsVerbatimArguments = true;  // Tell node's spawn that the arguments are already escaped\n    } else {\n        if (typeof parsed.options.shell === 'string') {\n            parsed.command = parsed.options.shell;\n        } else if (process.platform === 'android') {\n            parsed.command = '/system/bin/sh';\n        } else {\n            parsed.command = '/bin/sh';\n        }\n\n        parsed.args = ['-c', shellCommand];\n    }\n\n    return parsed;\n}\n\n// ------------------------------------------------\n\nfunction parse(command, args, options) {\n    var parsed;\n\n    // Normalize arguments, similar to nodejs\n    if (args && !Array.isArray(args)) {\n        options = args;\n        args = null;\n    }\n\n    args = args ? args.slice(0) : [];  // Clone array to avoid changing the original\n    options = options || {};\n\n    // Build our parsed object\n    parsed = {\n        command: command,\n        args: args,\n        options: options,\n        file: undefined,\n        original: command,\n    };\n\n    // Delegate further parsing to shell or non-shell\n    return options.shell ? parseShell(parsed) : parseNonShell(parsed);\n}\n\nmodule.exports = parse;\n\n\n//# sourceURL=webpack:///./node_modules/clipboardy/node_modules/cross-spawn/lib/parse.js?");

/***/ }),

/***/ "./node_modules/clipboardy/node_modules/cross-spawn/lib/util/escapeArgument.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/clipboardy/node_modules/cross-spawn/lib/util/escapeArgument.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction escapeArgument(arg, quote) {\n    // Convert to string\n    arg = '' + arg;\n\n    // If we are not going to quote the argument,\n    // escape shell metacharacters, including double and single quotes:\n    if (!quote) {\n        arg = arg.replace(/([()%!^<>&|;,\"'\\s])/g, '^$1');\n    } else {\n        // Sequence of backslashes followed by a double quote:\n        // double up all the backslashes and escape the double quote\n        arg = arg.replace(/(\\\\*)\"/g, '$1$1\\\\\"');\n\n        // Sequence of backslashes followed by the end of the string\n        // (which will become a double quote later):\n        // double up all the backslashes\n        arg = arg.replace(/(\\\\*)$/, '$1$1');\n\n        // All other backslashes occur literally\n\n        // Quote the whole thing:\n        arg = '\"' + arg + '\"';\n    }\n\n    return arg;\n}\n\nmodule.exports = escapeArgument;\n\n\n//# sourceURL=webpack:///./node_modules/clipboardy/node_modules/cross-spawn/lib/util/escapeArgument.js?");

/***/ }),

/***/ "./node_modules/clipboardy/node_modules/cross-spawn/lib/util/escapeCommand.js":
/*!************************************************************************************!*\
  !*** ./node_modules/clipboardy/node_modules/cross-spawn/lib/util/escapeCommand.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar escapeArgument = __webpack_require__(/*! ./escapeArgument */ \"./node_modules/clipboardy/node_modules/cross-spawn/lib/util/escapeArgument.js\");\n\nfunction escapeCommand(command) {\n    // Do not escape if this command is not dangerous..\n    // We do this so that commands like \"echo\" or \"ifconfig\" work\n    // Quoting them, will make them unaccessible\n    return /^[a-z0-9_-]+$/i.test(command) ? command : escapeArgument(command, true);\n}\n\nmodule.exports = escapeCommand;\n\n\n//# sourceURL=webpack:///./node_modules/clipboardy/node_modules/cross-spawn/lib/util/escapeCommand.js?");

/***/ }),

/***/ "./node_modules/clipboardy/node_modules/cross-spawn/lib/util/hasEmptyArgumentBug.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/clipboardy/node_modules/cross-spawn/lib/util/hasEmptyArgumentBug.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n// See: https://github.com/IndigoUnited/node-cross-spawn/pull/34#issuecomment-221623455\nfunction hasEmptyArgumentBug() {\n    var nodeVer;\n\n    if (process.platform !== 'win32') {\n        return false;\n    }\n\n    nodeVer = process.version.substr(1).split('.').map(function (num) {\n        return parseInt(num, 10);\n    });\n\n    return (nodeVer[0] === 0 && nodeVer[1] < 12);\n}\n\nmodule.exports = hasEmptyArgumentBug();\n\n\n//# sourceURL=webpack:///./node_modules/clipboardy/node_modules/cross-spawn/lib/util/hasEmptyArgumentBug.js?");

/***/ }),

/***/ "./node_modules/clipboardy/node_modules/cross-spawn/lib/util/readShebang.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/clipboardy/node_modules/cross-spawn/lib/util/readShebang.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\nvar LRU = __webpack_require__(/*! lru-cache */ \"./node_modules/lru-cache/index.js\");\nvar shebangCommand = __webpack_require__(/*! shebang-command */ \"./node_modules/shebang-command/index.js\");\n\nvar shebangCache = new LRU({ max: 50, maxAge: 30 * 1000 });  // Cache just for 30sec\n\nfunction readShebang(command) {\n    var buffer;\n    var fd;\n    var shebang;\n\n    // Check if it is in the cache first\n    if (shebangCache.has(command)) {\n        return shebangCache.get(command);\n    }\n\n    // Read the first 150 bytes from the file\n    buffer = new Buffer(150);\n\n    try {\n        fd = fs.openSync(command, 'r');\n        fs.readSync(fd, buffer, 0, 150, 0);\n        fs.closeSync(fd);\n    } catch (e) { /* empty */ }\n\n    // Attempt to extract shebang (null is returned if not a shebang)\n    shebang = shebangCommand(buffer.toString());\n\n    // Store the shebang in the cache\n    shebangCache.set(command, shebang);\n\n    return shebang;\n}\n\nmodule.exports = readShebang;\n\n\n//# sourceURL=webpack:///./node_modules/clipboardy/node_modules/cross-spawn/lib/util/readShebang.js?");

/***/ }),

/***/ "./node_modules/clipboardy/node_modules/cross-spawn/lib/util/resolveCommand.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/clipboardy/node_modules/cross-spawn/lib/util/resolveCommand.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar which = __webpack_require__(/*! which */ \"./node_modules/which/which.js\");\nvar LRU = __webpack_require__(/*! lru-cache */ \"./node_modules/lru-cache/index.js\");\n\nvar commandCache = new LRU({ max: 50, maxAge: 30 * 1000 });  // Cache just for 30sec\n\nfunction resolveCommand(command, noExtension) {\n    var resolved;\n\n    noExtension = !!noExtension;\n    resolved = commandCache.get(command + '!' + noExtension);\n\n    // Check if its resolved in the cache\n    if (commandCache.has(command)) {\n        return commandCache.get(command);\n    }\n\n    try {\n        resolved = !noExtension ?\n            which.sync(command) :\n            which.sync(command, { pathExt: path.delimiter + (process.env.PATHEXT || '') });\n    } catch (e) { /* empty */ }\n\n    commandCache.set(command + '!' + noExtension, resolved);\n\n    return resolved;\n}\n\nmodule.exports = resolveCommand;\n\n\n//# sourceURL=webpack:///./node_modules/clipboardy/node_modules/cross-spawn/lib/util/resolveCommand.js?");

/***/ }),

/***/ "./node_modules/clipboardy/node_modules/execa/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/clipboardy/node_modules/execa/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst childProcess = __webpack_require__(/*! child_process */ \"child_process\");\nconst util = __webpack_require__(/*! util */ \"util\");\nconst crossSpawn = __webpack_require__(/*! cross-spawn */ \"./node_modules/clipboardy/node_modules/cross-spawn/index.js\");\nconst stripEof = __webpack_require__(/*! strip-eof */ \"./node_modules/strip-eof/index.js\");\nconst npmRunPath = __webpack_require__(/*! npm-run-path */ \"./node_modules/npm-run-path/index.js\");\nconst isStream = __webpack_require__(/*! is-stream */ \"./node_modules/is-stream/index.js\");\nconst _getStream = __webpack_require__(/*! get-stream */ \"./node_modules/get-stream/index.js\");\nconst pFinally = __webpack_require__(/*! p-finally */ \"./node_modules/p-finally/index.js\");\nconst onExit = __webpack_require__(/*! signal-exit */ \"./node_modules/signal-exit/index.js\");\nconst errname = __webpack_require__(/*! ./lib/errname */ \"./node_modules/clipboardy/node_modules/execa/lib/errname.js\");\nconst stdio = __webpack_require__(/*! ./lib/stdio */ \"./node_modules/clipboardy/node_modules/execa/lib/stdio.js\");\n\nconst TEN_MEGABYTES = 1000 * 1000 * 10;\n\nfunction handleArgs(cmd, args, opts) {\n\tlet parsed;\n\n\topts = Object.assign({\n\t\textendEnv: true,\n\t\tenv: {}\n\t}, opts);\n\n\tif (opts.extendEnv) {\n\t\topts.env = Object.assign({}, process.env, opts.env);\n\t}\n\n\tif (opts.__winShell === true) {\n\t\tdelete opts.__winShell;\n\t\tparsed = {\n\t\t\tcommand: cmd,\n\t\t\targs,\n\t\t\toptions: opts,\n\t\t\tfile: cmd,\n\t\t\toriginal: cmd\n\t\t};\n\t} else {\n\t\tparsed = crossSpawn._parse(cmd, args, opts);\n\t}\n\n\topts = Object.assign({\n\t\tmaxBuffer: TEN_MEGABYTES,\n\t\tstripEof: true,\n\t\tpreferLocal: true,\n\t\tlocalDir: parsed.options.cwd || process.cwd(),\n\t\tencoding: 'utf8',\n\t\treject: true,\n\t\tcleanup: true\n\t}, parsed.options);\n\n\topts.stdio = stdio(opts);\n\n\tif (opts.preferLocal) {\n\t\topts.env = npmRunPath.env(Object.assign({}, opts, {cwd: opts.localDir}));\n\t}\n\n\treturn {\n\t\tcmd: parsed.command,\n\t\targs: parsed.args,\n\t\topts,\n\t\tparsed\n\t};\n}\n\nfunction handleInput(spawned, opts) {\n\tconst input = opts.input;\n\n\tif (input === null || input === undefined) {\n\t\treturn;\n\t}\n\n\tif (isStream(input)) {\n\t\tinput.pipe(spawned.stdin);\n\t} else {\n\t\tspawned.stdin.end(input);\n\t}\n}\n\nfunction handleOutput(opts, val) {\n\tif (val && opts.stripEof) {\n\t\tval = stripEof(val);\n\t}\n\n\treturn val;\n}\n\nfunction handleShell(fn, cmd, opts) {\n\tlet file = '/bin/sh';\n\tlet args = ['-c', cmd];\n\n\topts = Object.assign({}, opts);\n\n\tif (process.platform === 'win32') {\n\t\topts.__winShell = true;\n\t\tfile = process.env.comspec || 'cmd.exe';\n\t\targs = ['/s', '/c', `\"${cmd}\"`];\n\t\topts.windowsVerbatimArguments = true;\n\t}\n\n\tif (opts.shell) {\n\t\tfile = opts.shell;\n\t\tdelete opts.shell;\n\t}\n\n\treturn fn(file, args, opts);\n}\n\nfunction getStream(process, stream, encoding, maxBuffer) {\n\tif (!process[stream]) {\n\t\treturn null;\n\t}\n\n\tlet ret;\n\n\tif (encoding) {\n\t\tret = _getStream(process[stream], {\n\t\t\tencoding,\n\t\t\tmaxBuffer\n\t\t});\n\t} else {\n\t\tret = _getStream.buffer(process[stream], {maxBuffer});\n\t}\n\n\treturn ret.catch(err => {\n\t\terr.stream = stream;\n\t\terr.message = `${stream} ${err.message}`;\n\t\tthrow err;\n\t});\n}\n\nmodule.exports = (cmd, args, opts) => {\n\tlet joinedCmd = cmd;\n\n\tif (Array.isArray(args) && args.length > 0) {\n\t\tjoinedCmd += ' ' + args.join(' ');\n\t}\n\n\tconst parsed = handleArgs(cmd, args, opts);\n\tconst encoding = parsed.opts.encoding;\n\tconst maxBuffer = parsed.opts.maxBuffer;\n\n\tlet spawned;\n\ttry {\n\t\tspawned = childProcess.spawn(parsed.cmd, parsed.args, parsed.opts);\n\t} catch (err) {\n\t\treturn Promise.reject(err);\n\t}\n\n\tlet removeExitHandler;\n\tif (parsed.opts.cleanup) {\n\t\tremoveExitHandler = onExit(() => {\n\t\t\tspawned.kill();\n\t\t});\n\t}\n\n\tlet timeoutId = null;\n\tlet timedOut = false;\n\n\tconst cleanupTimeout = () => {\n\t\tif (timeoutId) {\n\t\t\tclearTimeout(timeoutId);\n\t\t\ttimeoutId = null;\n\t\t}\n\t};\n\n\tif (parsed.opts.timeout > 0) {\n\t\ttimeoutId = setTimeout(() => {\n\t\t\ttimeoutId = null;\n\t\t\ttimedOut = true;\n\t\t\tspawned.kill(parsed.opts.killSignal);\n\t\t}, parsed.opts.timeout);\n\t}\n\n\tconst processDone = new Promise(resolve => {\n\t\tspawned.on('exit', (code, signal) => {\n\t\t\tcleanupTimeout();\n\t\t\tresolve({code, signal});\n\t\t});\n\n\t\tspawned.on('error', err => {\n\t\t\tcleanupTimeout();\n\t\t\tresolve({err});\n\t\t});\n\n\t\tif (spawned.stdin) {\n\t\t\tspawned.stdin.on('error', err => {\n\t\t\t\tcleanupTimeout();\n\t\t\t\tresolve({err});\n\t\t\t});\n\t\t}\n\t});\n\n\tfunction destroy() {\n\t\tif (spawned.stdout) {\n\t\t\tspawned.stdout.destroy();\n\t\t}\n\n\t\tif (spawned.stderr) {\n\t\t\tspawned.stderr.destroy();\n\t\t}\n\t}\n\n\tconst handlePromise = () => pFinally(Promise.all([\n\t\tprocessDone,\n\t\tgetStream(spawned, 'stdout', encoding, maxBuffer),\n\t\tgetStream(spawned, 'stderr', encoding, maxBuffer)\n\t]).then(arr => {\n\t\tconst result = arr[0];\n\t\tconst stdout = arr[1];\n\t\tconst stderr = arr[2];\n\n\t\tlet err = result.err;\n\t\tconst code = result.code;\n\t\tconst signal = result.signal;\n\n\t\tif (removeExitHandler) {\n\t\t\tremoveExitHandler();\n\t\t}\n\n\t\tif (err || code !== 0 || signal !== null) {\n\t\t\tif (!err) {\n\t\t\t\tlet output = '';\n\n\t\t\t\tif (Array.isArray(parsed.opts.stdio)) {\n\t\t\t\t\tif (parsed.opts.stdio[2] !== 'inherit') {\n\t\t\t\t\t\toutput += output.length > 0 ? stderr : `\\n${stderr}`;\n\t\t\t\t\t}\n\n\t\t\t\t\tif (parsed.opts.stdio[1] !== 'inherit') {\n\t\t\t\t\t\toutput += `\\n${stdout}`;\n\t\t\t\t\t}\n\t\t\t\t} else if (parsed.opts.stdio !== 'inherit') {\n\t\t\t\t\toutput = `\\n${stderr}${stdout}`;\n\t\t\t\t}\n\n\t\t\t\terr = new Error(`Command failed: ${joinedCmd}${output}`);\n\t\t\t\terr.code = code < 0 ? errname(code) : code;\n\t\t\t}\n\n\t\t\t// TODO: missing some timeout logic for killed\n\t\t\t// https://github.com/nodejs/node/blob/master/lib/child_process.js#L203\n\t\t\t// err.killed = spawned.killed || killed;\n\t\t\terr.killed = err.killed || spawned.killed;\n\n\t\t\terr.stdout = stdout;\n\t\t\terr.stderr = stderr;\n\t\t\terr.failed = true;\n\t\t\terr.signal = signal || null;\n\t\t\terr.cmd = joinedCmd;\n\t\t\terr.timedOut = timedOut;\n\n\t\t\tif (!parsed.opts.reject) {\n\t\t\t\treturn err;\n\t\t\t}\n\n\t\t\tthrow err;\n\t\t}\n\n\t\treturn {\n\t\t\tstdout: handleOutput(parsed.opts, stdout),\n\t\t\tstderr: handleOutput(parsed.opts, stderr),\n\t\t\tcode: 0,\n\t\t\tfailed: false,\n\t\t\tkilled: false,\n\t\t\tsignal: null,\n\t\t\tcmd: joinedCmd,\n\t\t\ttimedOut: false\n\t\t};\n\t}), destroy);\n\n\tcrossSpawn._enoent.hookChildProcess(spawned, parsed.parsed);\n\n\thandleInput(spawned, parsed.opts);\n\n\tspawned.then = (onfulfilled, onrejected) => handlePromise().then(onfulfilled, onrejected);\n\tspawned.catch = onrejected => handlePromise().catch(onrejected);\n\n\treturn spawned;\n};\n\nmodule.exports.stdout = function () {\n\t// TODO: set `stderr: 'ignore'` when that option is implemented\n\treturn module.exports.apply(null, arguments).then(x => x.stdout);\n};\n\nmodule.exports.stderr = function () {\n\t// TODO: set `stdout: 'ignore'` when that option is implemented\n\treturn module.exports.apply(null, arguments).then(x => x.stderr);\n};\n\nmodule.exports.shell = (cmd, opts) => handleShell(module.exports, cmd, opts);\n\nmodule.exports.sync = (cmd, args, opts) => {\n\tconst parsed = handleArgs(cmd, args, opts);\n\n\tif (isStream(parsed.opts.input)) {\n\t\tthrow new TypeError('The `input` option cannot be a stream in sync mode');\n\t}\n\n\tconst result = childProcess.spawnSync(parsed.cmd, parsed.args, parsed.opts);\n\n\tif (result.error || result.status !== 0) {\n\t\tthrow (result.error || new Error(result.stderr === '' ? result.stdout : result.stderr));\n\t}\n\n\tresult.stdout = handleOutput(parsed.opts, result.stdout);\n\tresult.stderr = handleOutput(parsed.opts, result.stderr);\n\n\treturn result;\n};\n\nmodule.exports.shellSync = (cmd, opts) => handleShell(module.exports.sync, cmd, opts);\n\nmodule.exports.spawn = util.deprecate(module.exports, 'execa.spawn() is deprecated. Use execa() instead.');\n\n\n//# sourceURL=webpack:///./node_modules/clipboardy/node_modules/execa/index.js?");

/***/ }),

/***/ "./node_modules/clipboardy/node_modules/execa/lib/errname.js":
/*!*******************************************************************!*\
  !*** ./node_modules/clipboardy/node_modules/execa/lib/errname.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// The Node team wants to deprecate `process.bind(...)`.\n//   https://github.com/nodejs/node/pull/2768\n//\n// However, we need the 'uv' binding for errname support.\n// This is a defensive wrapper around it so `execa` will not fail entirely if it stops working someday.\n//\n// If this ever stops working. See: https://github.com/sindresorhus/execa/issues/31#issuecomment-215939939 for another possible solution.\nlet uv;\n\ntry {\n\tuv = process.binding('uv');\n\n\tif (typeof uv.errname !== 'function') {\n\t\tthrow new TypeError('uv.errname is not a function');\n\t}\n} catch (err) {\n\tconsole.error('execa/lib/errname: unable to establish process.binding(\\'uv\\')', err);\n\tuv = null;\n}\n\nfunction errname(uv, code) {\n\tif (uv) {\n\t\treturn uv.errname(code);\n\t}\n\n\tif (!(code < 0)) {\n\t\tthrow new Error('err >= 0');\n\t}\n\n\treturn `Unknown system error ${code}`;\n}\n\nmodule.exports = code => errname(uv, code);\n\n// Used for testing the fallback behavior\nmodule.exports.__test__ = errname;\n\n\n//# sourceURL=webpack:///./node_modules/clipboardy/node_modules/execa/lib/errname.js?");

/***/ }),

/***/ "./node_modules/clipboardy/node_modules/execa/lib/stdio.js":
/*!*****************************************************************!*\
  !*** ./node_modules/clipboardy/node_modules/execa/lib/stdio.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst alias = ['stdin', 'stdout', 'stderr'];\n\nconst hasAlias = opts => alias.some(x => Boolean(opts[x]));\n\nmodule.exports = opts => {\n\tif (!opts) {\n\t\treturn null;\n\t}\n\n\tif (opts.stdio && hasAlias(opts)) {\n\t\tthrow new Error(`It's not possible to provide \\`stdio\\` in combination with one of ${alias.map(x => `\\`${x}\\``).join(', ')}`);\n\t}\n\n\tif (typeof opts.stdio === 'string') {\n\t\treturn opts.stdio;\n\t}\n\n\tconst stdio = opts.stdio || [];\n\n\tif (!Array.isArray(stdio)) {\n\t\tthrow new TypeError(`Expected \\`stdio\\` to be of type \\`string\\` or \\`Array\\`, got \\`${typeof stdio}\\``);\n\t}\n\n\tconst result = [];\n\tconst len = Math.max(stdio.length, alias.length);\n\n\tfor (let i = 0; i < len; i++) {\n\t\tlet value = null;\n\n\t\tif (stdio[i] !== undefined) {\n\t\t\tvalue = stdio[i];\n\t\t} else if (opts[alias[i]] !== undefined) {\n\t\t\tvalue = opts[alias[i]];\n\t\t}\n\n\t\tresult[i] = value;\n\t}\n\n\treturn result;\n};\n\n\n//# sourceURL=webpack:///./node_modules/clipboardy/node_modules/execa/lib/stdio.js?");

/***/ }),

/***/ "./node_modules/get-stream/buffer-stream.js":
/*!**************************************************!*\
  !*** ./node_modules/get-stream/buffer-stream.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst PassThrough = __webpack_require__(/*! stream */ \"stream\").PassThrough;\n\nmodule.exports = opts => {\n\topts = Object.assign({}, opts);\n\n\tconst array = opts.array;\n\tlet encoding = opts.encoding;\n\tconst buffer = encoding === 'buffer';\n\tlet objectMode = false;\n\n\tif (array) {\n\t\tobjectMode = !(encoding || buffer);\n\t} else {\n\t\tencoding = encoding || 'utf8';\n\t}\n\n\tif (buffer) {\n\t\tencoding = null;\n\t}\n\n\tlet len = 0;\n\tconst ret = [];\n\tconst stream = new PassThrough({objectMode});\n\n\tif (encoding) {\n\t\tstream.setEncoding(encoding);\n\t}\n\n\tstream.on('data', chunk => {\n\t\tret.push(chunk);\n\n\t\tif (objectMode) {\n\t\t\tlen = ret.length;\n\t\t} else {\n\t\t\tlen += chunk.length;\n\t\t}\n\t});\n\n\tstream.getBufferedValue = () => {\n\t\tif (array) {\n\t\t\treturn ret;\n\t\t}\n\n\t\treturn buffer ? Buffer.concat(ret, len) : ret.join('');\n\t};\n\n\tstream.getBufferedLength = () => len;\n\n\treturn stream;\n};\n\n\n//# sourceURL=webpack:///./node_modules/get-stream/buffer-stream.js?");

/***/ }),

/***/ "./node_modules/get-stream/index.js":
/*!******************************************!*\
  !*** ./node_modules/get-stream/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst bufferStream = __webpack_require__(/*! ./buffer-stream */ \"./node_modules/get-stream/buffer-stream.js\");\n\nfunction getStream(inputStream, opts) {\n\tif (!inputStream) {\n\t\treturn Promise.reject(new Error('Expected a stream'));\n\t}\n\n\topts = Object.assign({maxBuffer: Infinity}, opts);\n\n\tconst maxBuffer = opts.maxBuffer;\n\tlet stream;\n\tlet clean;\n\n\tconst p = new Promise((resolve, reject) => {\n\t\tconst error = err => {\n\t\t\tif (err) { // null check\n\t\t\t\terr.bufferedData = stream.getBufferedValue();\n\t\t\t}\n\n\t\t\treject(err);\n\t\t};\n\n\t\tstream = bufferStream(opts);\n\t\tinputStream.once('error', error);\n\t\tinputStream.pipe(stream);\n\n\t\tstream.on('data', () => {\n\t\t\tif (stream.getBufferedLength() > maxBuffer) {\n\t\t\t\treject(new Error('maxBuffer exceeded'));\n\t\t\t}\n\t\t});\n\t\tstream.once('error', error);\n\t\tstream.on('end', resolve);\n\n\t\tclean = () => {\n\t\t\t// some streams doesn't implement the `stream.Readable` interface correctly\n\t\t\tif (inputStream.unpipe) {\n\t\t\t\tinputStream.unpipe(stream);\n\t\t\t}\n\t\t};\n\t});\n\n\tp.then(clean, clean);\n\n\treturn p.then(() => stream.getBufferedValue());\n}\n\nmodule.exports = getStream;\nmodule.exports.buffer = (stream, opts) => getStream(stream, Object.assign({}, opts, {encoding: 'buffer'}));\nmodule.exports.array = (stream, opts) => getStream(stream, Object.assign({}, opts, {array: true}));\n\n\n//# sourceURL=webpack:///./node_modules/get-stream/index.js?");

/***/ }),

/***/ "./node_modules/is-stream/index.js":
/*!*****************************************!*\
  !*** ./node_modules/is-stream/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isStream = module.exports = function (stream) {\n\treturn stream !== null && typeof stream === 'object' && typeof stream.pipe === 'function';\n};\n\nisStream.writable = function (stream) {\n\treturn isStream(stream) && stream.writable !== false && typeof stream._write === 'function' && typeof stream._writableState === 'object';\n};\n\nisStream.readable = function (stream) {\n\treturn isStream(stream) && stream.readable !== false && typeof stream._read === 'function' && typeof stream._readableState === 'object';\n};\n\nisStream.duplex = function (stream) {\n\treturn isStream.writable(stream) && isStream.readable(stream);\n};\n\nisStream.transform = function (stream) {\n\treturn isStream.duplex(stream) && typeof stream._transform === 'function' && typeof stream._transformState === 'object';\n};\n\n\n//# sourceURL=webpack:///./node_modules/is-stream/index.js?");

/***/ }),

/***/ "./node_modules/isexe/index.js":
/*!*************************************!*\
  !*** ./node_modules/isexe/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var fs = __webpack_require__(/*! fs */ \"fs\")\nvar core\nif (process.platform === 'win32' || global.TESTING_WINDOWS) {\n  core = __webpack_require__(/*! ./windows.js */ \"./node_modules/isexe/windows.js\")\n} else {\n  core = __webpack_require__(/*! ./mode.js */ \"./node_modules/isexe/mode.js\")\n}\n\nmodule.exports = isexe\nisexe.sync = sync\n\nfunction isexe (path, options, cb) {\n  if (typeof options === 'function') {\n    cb = options\n    options = {}\n  }\n\n  if (!cb) {\n    if (typeof Promise !== 'function') {\n      throw new TypeError('callback not provided')\n    }\n\n    return new Promise(function (resolve, reject) {\n      isexe(path, options || {}, function (er, is) {\n        if (er) {\n          reject(er)\n        } else {\n          resolve(is)\n        }\n      })\n    })\n  }\n\n  core(path, options || {}, function (er, is) {\n    // ignore EACCES because that just means we aren't allowed to run it\n    if (er) {\n      if (er.code === 'EACCES' || options && options.ignoreErrors) {\n        er = null\n        is = false\n      }\n    }\n    cb(er, is)\n  })\n}\n\nfunction sync (path, options) {\n  // my kingdom for a filtered catch\n  try {\n    return core.sync(path, options || {})\n  } catch (er) {\n    if (options && options.ignoreErrors || er.code === 'EACCES') {\n      return false\n    } else {\n      throw er\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/isexe/index.js?");

/***/ }),

/***/ "./node_modules/isexe/mode.js":
/*!************************************!*\
  !*** ./node_modules/isexe/mode.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = isexe\nisexe.sync = sync\n\nvar fs = __webpack_require__(/*! fs */ \"fs\")\n\nfunction isexe (path, options, cb) {\n  fs.stat(path, function (er, stat) {\n    cb(er, er ? false : checkStat(stat, options))\n  })\n}\n\nfunction sync (path, options) {\n  return checkStat(fs.statSync(path), options)\n}\n\nfunction checkStat (stat, options) {\n  return stat.isFile() && checkMode(stat, options)\n}\n\nfunction checkMode (stat, options) {\n  var mod = stat.mode\n  var uid = stat.uid\n  var gid = stat.gid\n\n  var myUid = options.uid !== undefined ?\n    options.uid : process.getuid && process.getuid()\n  var myGid = options.gid !== undefined ?\n    options.gid : process.getgid && process.getgid()\n\n  var u = parseInt('100', 8)\n  var g = parseInt('010', 8)\n  var o = parseInt('001', 8)\n  var ug = u | g\n\n  var ret = (mod & o) ||\n    (mod & g) && gid === myGid ||\n    (mod & u) && uid === myUid ||\n    (mod & ug) && myUid === 0\n\n  return ret\n}\n\n\n//# sourceURL=webpack:///./node_modules/isexe/mode.js?");

/***/ }),

/***/ "./node_modules/isexe/windows.js":
/*!***************************************!*\
  !*** ./node_modules/isexe/windows.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = isexe\nisexe.sync = sync\n\nvar fs = __webpack_require__(/*! fs */ \"fs\")\n\nfunction checkPathExt (path, options) {\n  var pathext = options.pathExt !== undefined ?\n    options.pathExt : process.env.PATHEXT\n\n  if (!pathext) {\n    return true\n  }\n\n  pathext = pathext.split(';')\n  if (pathext.indexOf('') !== -1) {\n    return true\n  }\n  for (var i = 0; i < pathext.length; i++) {\n    var p = pathext[i].toLowerCase()\n    if (p && path.substr(-p.length).toLowerCase() === p) {\n      return true\n    }\n  }\n  return false\n}\n\nfunction checkStat (stat, path, options) {\n  if (!stat.isSymbolicLink() && !stat.isFile()) {\n    return false\n  }\n  return checkPathExt(path, options)\n}\n\nfunction isexe (path, options, cb) {\n  fs.stat(path, function (er, stat) {\n    cb(er, er ? false : checkStat(stat, path, options))\n  })\n}\n\nfunction sync (path, options) {\n  return checkStat(fs.statSync(path), path, options)\n}\n\n\n//# sourceURL=webpack:///./node_modules/isexe/windows.js?");

/***/ }),

/***/ "./node_modules/lru-cache/index.js":
/*!*****************************************!*\
  !*** ./node_modules/lru-cache/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = LRUCache\n\n// This will be a proper iterable 'Map' in engines that support it,\n// or a fakey-fake PseudoMap in older versions.\nvar Map = __webpack_require__(/*! pseudomap */ \"./node_modules/pseudomap/map.js\")\nvar util = __webpack_require__(/*! util */ \"util\")\n\n// A linked list to keep track of recently-used-ness\nvar Yallist = __webpack_require__(/*! yallist */ \"./node_modules/yallist/yallist.js\")\n\n// use symbols if possible, otherwise just _props\nvar hasSymbol = typeof Symbol === 'function'\nvar makeSymbol\nif (hasSymbol) {\n  makeSymbol = function (key) {\n    return Symbol.for(key)\n  }\n} else {\n  makeSymbol = function (key) {\n    return '_' + key\n  }\n}\n\nvar MAX = makeSymbol('max')\nvar LENGTH = makeSymbol('length')\nvar LENGTH_CALCULATOR = makeSymbol('lengthCalculator')\nvar ALLOW_STALE = makeSymbol('allowStale')\nvar MAX_AGE = makeSymbol('maxAge')\nvar DISPOSE = makeSymbol('dispose')\nvar NO_DISPOSE_ON_SET = makeSymbol('noDisposeOnSet')\nvar LRU_LIST = makeSymbol('lruList')\nvar CACHE = makeSymbol('cache')\n\nfunction naiveLength () { return 1 }\n\n// lruList is a yallist where the head is the youngest\n// item, and the tail is the oldest.  the list contains the Hit\n// objects as the entries.\n// Each Hit object has a reference to its Yallist.Node.  This\n// never changes.\n//\n// cache is a Map (or PseudoMap) that matches the keys to\n// the Yallist.Node object.\nfunction LRUCache (options) {\n  if (!(this instanceof LRUCache)) {\n    return new LRUCache(options)\n  }\n\n  if (typeof options === 'number') {\n    options = { max: options }\n  }\n\n  if (!options) {\n    options = {}\n  }\n\n  var max = this[MAX] = options.max\n  // Kind of weird to have a default max of Infinity, but oh well.\n  if (!max ||\n      !(typeof max === 'number') ||\n      max <= 0) {\n    this[MAX] = Infinity\n  }\n\n  var lc = options.length || naiveLength\n  if (typeof lc !== 'function') {\n    lc = naiveLength\n  }\n  this[LENGTH_CALCULATOR] = lc\n\n  this[ALLOW_STALE] = options.stale || false\n  this[MAX_AGE] = options.maxAge || 0\n  this[DISPOSE] = options.dispose\n  this[NO_DISPOSE_ON_SET] = options.noDisposeOnSet || false\n  this.reset()\n}\n\n// resize the cache when the max changes.\nObject.defineProperty(LRUCache.prototype, 'max', {\n  set: function (mL) {\n    if (!mL || !(typeof mL === 'number') || mL <= 0) {\n      mL = Infinity\n    }\n    this[MAX] = mL\n    trim(this)\n  },\n  get: function () {\n    return this[MAX]\n  },\n  enumerable: true\n})\n\nObject.defineProperty(LRUCache.prototype, 'allowStale', {\n  set: function (allowStale) {\n    this[ALLOW_STALE] = !!allowStale\n  },\n  get: function () {\n    return this[ALLOW_STALE]\n  },\n  enumerable: true\n})\n\nObject.defineProperty(LRUCache.prototype, 'maxAge', {\n  set: function (mA) {\n    if (!mA || !(typeof mA === 'number') || mA < 0) {\n      mA = 0\n    }\n    this[MAX_AGE] = mA\n    trim(this)\n  },\n  get: function () {\n    return this[MAX_AGE]\n  },\n  enumerable: true\n})\n\n// resize the cache when the lengthCalculator changes.\nObject.defineProperty(LRUCache.prototype, 'lengthCalculator', {\n  set: function (lC) {\n    if (typeof lC !== 'function') {\n      lC = naiveLength\n    }\n    if (lC !== this[LENGTH_CALCULATOR]) {\n      this[LENGTH_CALCULATOR] = lC\n      this[LENGTH] = 0\n      this[LRU_LIST].forEach(function (hit) {\n        hit.length = this[LENGTH_CALCULATOR](hit.value, hit.key)\n        this[LENGTH] += hit.length\n      }, this)\n    }\n    trim(this)\n  },\n  get: function () { return this[LENGTH_CALCULATOR] },\n  enumerable: true\n})\n\nObject.defineProperty(LRUCache.prototype, 'length', {\n  get: function () { return this[LENGTH] },\n  enumerable: true\n})\n\nObject.defineProperty(LRUCache.prototype, 'itemCount', {\n  get: function () { return this[LRU_LIST].length },\n  enumerable: true\n})\n\nLRUCache.prototype.rforEach = function (fn, thisp) {\n  thisp = thisp || this\n  for (var walker = this[LRU_LIST].tail; walker !== null;) {\n    var prev = walker.prev\n    forEachStep(this, fn, walker, thisp)\n    walker = prev\n  }\n}\n\nfunction forEachStep (self, fn, node, thisp) {\n  var hit = node.value\n  if (isStale(self, hit)) {\n    del(self, node)\n    if (!self[ALLOW_STALE]) {\n      hit = undefined\n    }\n  }\n  if (hit) {\n    fn.call(thisp, hit.value, hit.key, self)\n  }\n}\n\nLRUCache.prototype.forEach = function (fn, thisp) {\n  thisp = thisp || this\n  for (var walker = this[LRU_LIST].head; walker !== null;) {\n    var next = walker.next\n    forEachStep(this, fn, walker, thisp)\n    walker = next\n  }\n}\n\nLRUCache.prototype.keys = function () {\n  return this[LRU_LIST].toArray().map(function (k) {\n    return k.key\n  }, this)\n}\n\nLRUCache.prototype.values = function () {\n  return this[LRU_LIST].toArray().map(function (k) {\n    return k.value\n  }, this)\n}\n\nLRUCache.prototype.reset = function () {\n  if (this[DISPOSE] &&\n      this[LRU_LIST] &&\n      this[LRU_LIST].length) {\n    this[LRU_LIST].forEach(function (hit) {\n      this[DISPOSE](hit.key, hit.value)\n    }, this)\n  }\n\n  this[CACHE] = new Map() // hash of items by key\n  this[LRU_LIST] = new Yallist() // list of items in order of use recency\n  this[LENGTH] = 0 // length of items in the list\n}\n\nLRUCache.prototype.dump = function () {\n  return this[LRU_LIST].map(function (hit) {\n    if (!isStale(this, hit)) {\n      return {\n        k: hit.key,\n        v: hit.value,\n        e: hit.now + (hit.maxAge || 0)\n      }\n    }\n  }, this).toArray().filter(function (h) {\n    return h\n  })\n}\n\nLRUCache.prototype.dumpLru = function () {\n  return this[LRU_LIST]\n}\n\nLRUCache.prototype.inspect = function (n, opts) {\n  var str = 'LRUCache {'\n  var extras = false\n\n  var as = this[ALLOW_STALE]\n  if (as) {\n    str += '\\n  allowStale: true'\n    extras = true\n  }\n\n  var max = this[MAX]\n  if (max && max !== Infinity) {\n    if (extras) {\n      str += ','\n    }\n    str += '\\n  max: ' + util.inspect(max, opts)\n    extras = true\n  }\n\n  var maxAge = this[MAX_AGE]\n  if (maxAge) {\n    if (extras) {\n      str += ','\n    }\n    str += '\\n  maxAge: ' + util.inspect(maxAge, opts)\n    extras = true\n  }\n\n  var lc = this[LENGTH_CALCULATOR]\n  if (lc && lc !== naiveLength) {\n    if (extras) {\n      str += ','\n    }\n    str += '\\n  length: ' + util.inspect(this[LENGTH], opts)\n    extras = true\n  }\n\n  var didFirst = false\n  this[LRU_LIST].forEach(function (item) {\n    if (didFirst) {\n      str += ',\\n  '\n    } else {\n      if (extras) {\n        str += ',\\n'\n      }\n      didFirst = true\n      str += '\\n  '\n    }\n    var key = util.inspect(item.key).split('\\n').join('\\n  ')\n    var val = { value: item.value }\n    if (item.maxAge !== maxAge) {\n      val.maxAge = item.maxAge\n    }\n    if (lc !== naiveLength) {\n      val.length = item.length\n    }\n    if (isStale(this, item)) {\n      val.stale = true\n    }\n\n    val = util.inspect(val, opts).split('\\n').join('\\n  ')\n    str += key + ' => ' + val\n  })\n\n  if (didFirst || extras) {\n    str += '\\n'\n  }\n  str += '}'\n\n  return str\n}\n\nLRUCache.prototype.set = function (key, value, maxAge) {\n  maxAge = maxAge || this[MAX_AGE]\n\n  var now = maxAge ? Date.now() : 0\n  var len = this[LENGTH_CALCULATOR](value, key)\n\n  if (this[CACHE].has(key)) {\n    if (len > this[MAX]) {\n      del(this, this[CACHE].get(key))\n      return false\n    }\n\n    var node = this[CACHE].get(key)\n    var item = node.value\n\n    // dispose of the old one before overwriting\n    // split out into 2 ifs for better coverage tracking\n    if (this[DISPOSE]) {\n      if (!this[NO_DISPOSE_ON_SET]) {\n        this[DISPOSE](key, item.value)\n      }\n    }\n\n    item.now = now\n    item.maxAge = maxAge\n    item.value = value\n    this[LENGTH] += len - item.length\n    item.length = len\n    this.get(key)\n    trim(this)\n    return true\n  }\n\n  var hit = new Entry(key, value, len, now, maxAge)\n\n  // oversized objects fall out of cache automatically.\n  if (hit.length > this[MAX]) {\n    if (this[DISPOSE]) {\n      this[DISPOSE](key, value)\n    }\n    return false\n  }\n\n  this[LENGTH] += hit.length\n  this[LRU_LIST].unshift(hit)\n  this[CACHE].set(key, this[LRU_LIST].head)\n  trim(this)\n  return true\n}\n\nLRUCache.prototype.has = function (key) {\n  if (!this[CACHE].has(key)) return false\n  var hit = this[CACHE].get(key).value\n  if (isStale(this, hit)) {\n    return false\n  }\n  return true\n}\n\nLRUCache.prototype.get = function (key) {\n  return get(this, key, true)\n}\n\nLRUCache.prototype.peek = function (key) {\n  return get(this, key, false)\n}\n\nLRUCache.prototype.pop = function () {\n  var node = this[LRU_LIST].tail\n  if (!node) return null\n  del(this, node)\n  return node.value\n}\n\nLRUCache.prototype.del = function (key) {\n  del(this, this[CACHE].get(key))\n}\n\nLRUCache.prototype.load = function (arr) {\n  // reset the cache\n  this.reset()\n\n  var now = Date.now()\n  // A previous serialized cache has the most recent items first\n  for (var l = arr.length - 1; l >= 0; l--) {\n    var hit = arr[l]\n    var expiresAt = hit.e || 0\n    if (expiresAt === 0) {\n      // the item was created without expiration in a non aged cache\n      this.set(hit.k, hit.v)\n    } else {\n      var maxAge = expiresAt - now\n      // dont add already expired items\n      if (maxAge > 0) {\n        this.set(hit.k, hit.v, maxAge)\n      }\n    }\n  }\n}\n\nLRUCache.prototype.prune = function () {\n  var self = this\n  this[CACHE].forEach(function (value, key) {\n    get(self, key, false)\n  })\n}\n\nfunction get (self, key, doUse) {\n  var node = self[CACHE].get(key)\n  if (node) {\n    var hit = node.value\n    if (isStale(self, hit)) {\n      del(self, node)\n      if (!self[ALLOW_STALE]) hit = undefined\n    } else {\n      if (doUse) {\n        self[LRU_LIST].unshiftNode(node)\n      }\n    }\n    if (hit) hit = hit.value\n  }\n  return hit\n}\n\nfunction isStale (self, hit) {\n  if (!hit || (!hit.maxAge && !self[MAX_AGE])) {\n    return false\n  }\n  var stale = false\n  var diff = Date.now() - hit.now\n  if (hit.maxAge) {\n    stale = diff > hit.maxAge\n  } else {\n    stale = self[MAX_AGE] && (diff > self[MAX_AGE])\n  }\n  return stale\n}\n\nfunction trim (self) {\n  if (self[LENGTH] > self[MAX]) {\n    for (var walker = self[LRU_LIST].tail;\n         self[LENGTH] > self[MAX] && walker !== null;) {\n      // We know that we're about to delete this one, and also\n      // what the next least recently used key will be, so just\n      // go ahead and set it now.\n      var prev = walker.prev\n      del(self, walker)\n      walker = prev\n    }\n  }\n}\n\nfunction del (self, node) {\n  if (node) {\n    var hit = node.value\n    if (self[DISPOSE]) {\n      self[DISPOSE](hit.key, hit.value)\n    }\n    self[LENGTH] -= hit.length\n    self[CACHE].delete(hit.key)\n    self[LRU_LIST].removeNode(node)\n  }\n}\n\n// classy, since V8 prefers predictable objects.\nfunction Entry (key, value, length, now, maxAge) {\n  this.key = key\n  this.value = value\n  this.length = length\n  this.now = now\n  this.maxAge = maxAge || 0\n}\n\n\n//# sourceURL=webpack:///./node_modules/lru-cache/index.js?");

/***/ }),

/***/ "./node_modules/nexusdk/dist/src/index.js":
/*!************************************************!*\
  !*** ./node_modules/nexusdk/dist/src/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse {}\n})(global, function() {\nreturn /******/ (function(modules) { // webpackBootstrap\n/******/ \t// The module cache\n/******/ \tvar installedModules = {};\n/******/\n/******/ \t// object to store loaded and loading wasm modules\n/******/ \tvar installedWasmModules = {};\n/******/\n/******/ \t// The require function\n/******/ \tfunction __webpack_require__(moduleId) {\n/******/\n/******/ \t\t// Check if module is in cache\n/******/ \t\tif(installedModules[moduleId]) {\n/******/ \t\t\treturn installedModules[moduleId].exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = installedModules[moduleId] = {\n/******/ \t\t\ti: moduleId,\n/******/ \t\t\tl: false,\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/\n/******/ \t\t// Execute the module function\n/******/ \t\tmodules[moduleId].call(module.exports, module, module.exports, __webpack_require__);\n/******/\n/******/ \t\t// Flag the module as loaded\n/******/ \t\tmodule.l = true;\n/******/\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/\n/******/\n/******/ \t// expose the modules object (__webpack_modules__)\n/******/ \t__webpack_require__.m = modules;\n/******/\n/******/ \t// expose the module cache\n/******/ \t__webpack_require__.c = installedModules;\n/******/\n/******/ \t// define getter function for harmony exports\n/******/ \t__webpack_require__.d = function(exports, name, getter) {\n/******/ \t\tif(!__webpack_require__.o(exports, name)) {\n/******/ \t\t\tObject.defineProperty(exports, name, {\n/******/ \t\t\t\tconfigurable: false,\n/******/ \t\t\t\tenumerable: true,\n/******/ \t\t\t\tget: getter\n/******/ \t\t\t});\n/******/ \t\t}\n/******/ \t};\n/******/\n/******/ \t// define __esModule on exports\n/******/ \t__webpack_require__.r = function(exports) {\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/\n/******/ \t// getDefaultExport function for compatibility with non-harmony modules\n/******/ \t__webpack_require__.n = function(module) {\n/******/ \t\tvar getter = module && module.__esModule ?\n/******/ \t\t\tfunction getDefault() { return module['default']; } :\n/******/ \t\t\tfunction getModuleExports() { return module; };\n/******/ \t\t__webpack_require__.d(getter, 'a', getter);\n/******/ \t\treturn getter;\n/******/ \t};\n/******/\n/******/ \t// Object.prototype.hasOwnProperty.call\n/******/ \t__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };\n/******/\n/******/ \t// __webpack_public_path__\n/******/ \t__webpack_require__.p = \"\";\n/******/\n/******/ \t// object with all compiled WebAssembly.Modules\n/******/ \t__webpack_require__.w = {};\n/******/\n/******/\n/******/ \t// Load entry module and return exports\n/******/ \treturn __webpack_require__(__webpack_require__.s = \"./src/index.js\");\n/******/ })\n/************************************************************************/\n/******/ ({\n\n/***/ \"./src/index.js\":\n/*!**********************!*\\\n  !*** ./src/index.js ***!\n  \\**********************/\n/*! exports provided: object, Nexusdk, wrapSDKFunction, wrapSDKAction, wrapSDKHook, wrapFunction, wrapAction, wrapHook, default */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"Nexusdk\\\", function() { return Nexusdk; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"wrapSDKFunction\\\", function() { return wrapSDKFunction; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"wrapSDKAction\\\", function() { return wrapSDKAction; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"wrapSDKHook\\\", function() { return wrapSDKHook; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"wrapFunction\\\", function() { return wrapFunction; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"wrapAction\\\", function() { return wrapAction; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"wrapHook\\\", function() { return wrapHook; });\\n/* harmony import */ var _objectUtility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./objectUtility */ \\\"./src/objectUtility.js\\\");\\n/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, \\\"object\\\", function() { return _objectUtility__WEBPACK_IMPORTED_MODULE_0__; });\\n\\n\\n\\nconst env = {};\\n\\nconst IPC = 1;\\nconst SOCKET = 2;\\n\\nclass Nexusdk {\\n  constructor({ id, name } = {}) {\\n    this.errors = [];\\n    this.onInternalMessage = this.onInternalMessage.bind(this);\\n    this.onReceiveMessage = this.onReceiveMessage.bind(this);\\n    this.sendMessage = this.sendMessage.bind(this);\\n    if (typeof global.process !== 'undefined') {\\n      this.communicationType = IPC;\\n      global.process.on('message', this.onReceiveMessage);\\n    }\\n    this.hook = { id, name };\\n    this.callbacks = { internal: this.onInternalMessage };\\n  }\\n\\n  onInternalMessage(message) {\\n    const { name, data } = message;\\n    if (name === 'meta') {\\n      this.meta = data;\\n    } else if (name === 'set_hook') {\\n      this.hook = data;\\n    }\\n  }\\n\\n  sendData(message) {\\n    if (this.communicationType === IPC) {\\n      global.process.send({ meta: this.meta, hook: this.hook, time: new Date().toISOString(), message });\\n    }\\n  }\\n\\n  sendMessage(type, data, caller) {\\n    return this.sendData({ type, data, caller });\\n  }\\n\\n  onReceiveMessage(message) {\\n    const { type, data } = message;\\n\\n    const callback = this.callbacks[type];\\n    if (callback) {\\n      callback(data, { type });\\n    }\\n  }\\n\\n  on(messageName, callback) {\\n    if (messageName === 'internal') {\\n      console.error('The internal callback is reserved');\\n    }\\n    this.callbacks[messageName] = callback;\\n  }\\n};\\n\\nfunction getPlainError(err) {\\n  let result = {};\\n  const keys = Object.getOwnPropertyNames(err);\\n  for (let keydex = 0; keydex < keys.length; keydex += 1) {\\n    const key = keys[keydex];\\n    result[key] = err[key];\\n  }\\n  return result;\\n}\\n\\nfunction wrapSDKFunction(sdk, func, onFinish, caller) {\\n  return (...args) => {\\n    try {\\n      const result = func(...args);\\n      if (result instanceof Promise) {\\n        result.then(result => {\\n          sdk.sendMessage('result', result, caller);\\n          onFinish && onFinish(0);\\n        }).catch(err => {\\n          sdk.sendMessage('error', getPlainError(err), caller);\\n          onFinish && onFinish(1);\\n        });\\n      } else {\\n        sdk.sendMessage('result', result, caller);\\n        onFinish && onFinish(0);\\n      }\\n    } catch (err) {\\n      sdk.sendMessage('error', getPlainError(err), caller);\\n      onFinish && onFinish(1);\\n    }\\n  }\\n}\\n\\nfunction wrapSDKAction(sdk, actionFunction, options = { requiredConfiguration: {}, exitOnComplete: false }) {\\n  function exit(code) {\\n    sdk.sendMessage('exit', code);\\n    process.exit(code);\\n  }\\n  sdk.on('start', wrapSDKFunction(sdk, actionFunction, options.exitOnComplete ? exit : null, 'start'));\\n\\n  sdk.on('configuration', () => {\\n    sdk.sendMessage('configuration', requiredConfiguration);\\n  });\\n\\n  sdk.on('exit', () => {\\n    exit(0);\\n  });\\n}\\n\\nfunction wrapSDKHook(sdk, hookFunction, requiredConfiguration, preload, cleanup) {\\n  function exit(code) {\\n    sdk.sendMessage('exit', code);\\n    process.exit(code);\\n  }\\n\\n  const messageCallbacks = {\\n    message: (type, data) => sdk.sendMessage(type, data, 'start'),\\n    trigger: (data) => sdk.sendMessage('trigger', data, 'start'),\\n    stop: () => sdk.sendMessage('stop', null, 'start'),\\n    config: (data) => sdk.sendMessage('config', data, 'start'),\\n  };\\n\\n  sdk.on('start', (properties) => {\\n    let results = null;\\n    try {\\n      results = hookFunction(properties, messageCallbacks);\\n      if (results instanceof Promise) {\\n        results.catch(err => {\\n          sdk.sendMessage('error', getPlainError(err));\\n          exit(1);\\n        });\\n      }\\n    } catch(err) {\\n      sdk.sendMessage('error', getPlainError(err));\\n      exit(1);\\n    }\\n  });\\n\\n  preload && sdk.on('preload', wrapSDKFunction(sdk, preload, null, 'preload'));\\n  cleanup && sdk.on('cleanup', wrapSDKFunction(sdk, cleanup, null, 'cleanup'));\\n\\n  sdk.on('configuration', () => {\\n    sdk.sendMessage('configuration', requiredConfiguration);\\n  });\\n\\n  sdk.on('exit', () => {\\n    exit(0);\\n  });\\n}\\n\\nconst globalSDK = new Nexusdk();\\n\\nfunction wrapFunction(...args) {\\n  return wrapSDKFunction(globalSDK, ...args);\\n}\\nfunction wrapAction(...args) {\\n  return wrapSDKAction(globalSDK, ...args);\\n}\\nfunction wrapHook(...args) {\\n  return wrapSDKHook(globalSDK, ...args);\\n}\\n\\n/* harmony default export */ __webpack_exports__[\\\"default\\\"] = (globalSDK);\\n\\n\\n//# sourceURL=webpack://nexusdk/./src/index.js?\");\n\n/***/ }),\n\n/***/ \"./src/objectUtility.js\":\n/*!******************************!*\\\n  !*** ./src/objectUtility.js ***!\n  \\******************************/\n/*! exports provided: set, has, get, setKey, setWithSubkey, setKeyWithSubkey, getObjectPath, getStringPathForArray, assurePathExists */\n/***/ (function(module, __webpack_exports__, __webpack_require__) {\n\n\"use strict\";\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"set\\\", function() { return set; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"has\\\", function() { return has; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"get\\\", function() { return get; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"setKey\\\", function() { return setKey; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"setWithSubkey\\\", function() { return setWithSubkey; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"setKeyWithSubkey\\\", function() { return setKeyWithSubkey; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"getObjectPath\\\", function() { return getObjectPath; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"getStringPathForArray\\\", function() { return getStringPathForArray; });\\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \\\"assurePathExists\\\", function() { return assurePathExists; });\\n/* eslint no-prototype-builtins: \\\"off\\\" */\\nfunction set(object, path, value) {\\n  let subObject = object;\\n  const keys = getObjectPath(path || '');\\n  for (let keydex = 0; keydex < keys.length; keydex += 1) {\\n    let key = keys[keydex];\\n    if (key !== '') {\\n      if (key[key.length - 1] === ']') {\\n        key = key.substr(0, key.length - 1);\\n        key = parseInt(key, 10);\\n      }\\n      if (keydex !== keys.length - 1) {\\n        if (typeof subObject[key] !== 'object') {\\n          subObject[key] = {};\\n        }\\n        subObject = subObject[key];\\n      } else {\\n        subObject[key] = value;\\n      }\\n    }\\n  }\\n\\n  return object;\\n}\\n\\nfunction has(object, key) {\\n  if (typeof object === 'object') {\\n    return (object.hasOwnProperty(key));\\n  }\\n  return false;\\n}\\n\\nfunction get(object, path, defaultValue = undefined) {\\n  let subObject = object;\\n  const keys = getObjectPath(path || '');\\n  for (let keydex = 0; keydex < keys.length; keydex += 1) {\\n    let key = keys[keydex];\\n    if (key !== '') {\\n      if (key[key.length - 1] === ']') {\\n        key = key.substr(0, key.length - 1);\\n        key = parseInt(key, 10);\\n      }\\n\\n      if (!has(subObject, key)) return defaultValue;\\n\\n      subObject = subObject[key];\\n    }\\n  }\\n\\n  return subObject;\\n}\\n\\nfunction setKey(object, path, key, value) {\\n  if (path === null || path === undefined || path === '') {\\n    path = key;\\n  } else {\\n    path += `.${key}`;\\n  }\\n  return set(object, path, value);\\n}\\n\\nfunction setWithSubkey(object, path, subkey, value) {\\n  let subObject = object;\\n  (path || '').split('.').forEach((key, dex, ray) => {\\n    if (key !== '' && dex !== ray.length - 1) {\\n      if (subObject[subkey] === undefined) {\\n        subObject[subkey] = { [key]: {  } };\\n      }\\n      subObject = subObject[subkey][key];\\n    } else {\\n      if (subObject[subkey] === undefined) {\\n        subObject[subkey] = { [key]: {  } };\\n      }\\n      subObject[subkey][key] = value;\\n    }\\n  });\\n\\n  return object;\\n}\\n\\nfunction setKeyWithSubkey(object, path, subkey, key, value) {\\n  if (path === null || path === undefined || path === '') {\\n    path = key;\\n  } else {\\n    path += `.${key}`;\\n  }\\n  return setWithSubkey(object, path, subkey, value);\\n}\\n\\nfunction getObjectPath(path) {\\n  if (path instanceof Array) return path;\\n  let inBrackets = false;\\n  let partBegin = 0;\\n  let split = false;\\n  let exitBrackets = false;\\n  const pathlen = path.length;\\n  const parts = [];\\n\\n  for(let dex = 0; dex < pathlen + 1; dex += 1) {\\n    const char = path[dex];\\n    if (inBrackets && !exitBrackets) {\\n      if (char === ']') {\\n        exitBrackets = true;\\n      }\\n    } else if (char === '.') {\\n      split = true;\\n    } else if (char === '[') {\\n      split = true;\\n      inBrackets = true;\\n    }\\n\\n    if (split || dex === pathlen) {\\n      let nextPart = path.substr(partBegin, dex - partBegin - (exitBrackets ? 1 : 0))\\n      if (inBrackets) {\\n        const parsed = parseInt(nextPart, 10);\\n        if (!isNaN(parsed)) {\\n          nextPart = parsed;\\n        }\\n      }\\n      parts.push(nextPart);\\n      partBegin = dex + 1;\\n      split = false;\\n      if (exitBrackets) inBrackets = false;\\n      exitBrackets = false;\\n    }\\n  }\\n  return parts;\\n}\\n\\nfunction getStringPathForArray(arrayPath) {\\n  return arrayPath.reduce((result, item, dex) => {\\n    if (toString.call(item) === '[object Number]') {\\n      return `${result}[${item}]`;\\n    }\\n    return result + (dex > 0 ? '.': '') + item;\\n  }, '');\\n}\\n\\nfunction assurePathExists(object, path, defaultValue = {}) {\\n  const arrayPath = getObjectPath(path);\\n  let currentObject = object;\\n  for (let arraydex = 0; arraydex < arrayPath.length; arraydex += 1) {\\n    const key = arrayPath[arraydex];\\n    if (!has(currentObject, key)) { // TODO: Address problems where key exists already and is not an array or object\\n      const nextKey = ((arraydex === arrayPath.length - 1) ? null : arrayPath[arraydex + 1]);\\n      if (nextKey === null) {\\n        currentObject[key] = defaultValue;\\n      } else if (toString.call(nextKey) === '[object Number]') {\\n        currentObject[key] = [];\\n      } else {\\n        currentObject[key] = {};\\n      }\\n    }\\n    currentObject = currentObject[key];\\n  }\\n  return currentObject;\\n}\\n\\n\\n//# sourceURL=webpack://nexusdk/./src/objectUtility.js?\");\n\n/***/ })\n\n/******/ });\n});\n\n//# sourceURL=webpack:///./node_modules/nexusdk/dist/src/index.js?");

/***/ }),

/***/ "./node_modules/npm-run-path/index.js":
/*!********************************************!*\
  !*** ./node_modules/npm-run-path/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nconst path = __webpack_require__(/*! path */ \"path\");\nconst pathKey = __webpack_require__(/*! path-key */ \"./node_modules/path-key/index.js\");\n\nmodule.exports = opts => {\n\topts = Object.assign({\n\t\tcwd: process.cwd(),\n\t\tpath: process.env[pathKey()]\n\t}, opts);\n\n\tlet prev;\n\tlet pth = path.resolve(opts.cwd);\n\tconst ret = [];\n\n\twhile (prev !== pth) {\n\t\tret.push(path.join(pth, 'node_modules/.bin'));\n\t\tprev = pth;\n\t\tpth = path.resolve(pth, '..');\n\t}\n\n\t// ensure the running `node` binary is used\n\tret.push(path.dirname(process.execPath));\n\n\treturn ret.concat(opts.path).join(path.delimiter);\n};\n\nmodule.exports.env = opts => {\n\topts = Object.assign({\n\t\tenv: process.env\n\t}, opts);\n\n\tconst env = Object.assign({}, opts.env);\n\tconst path = pathKey({env});\n\n\topts.path = env[path];\n\tenv[path] = module.exports(opts);\n\n\treturn env;\n};\n\n\n//# sourceURL=webpack:///./node_modules/npm-run-path/index.js?");

/***/ }),

/***/ "./node_modules/p-finally/index.js":
/*!*****************************************!*\
  !*** ./node_modules/p-finally/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = (promise, onFinally) => {\n\tonFinally = onFinally || (() => {});\n\n\treturn promise.then(\n\t\tval => new Promise(resolve => {\n\t\t\tresolve(onFinally());\n\t\t}).then(() => val),\n\t\terr => new Promise(resolve => {\n\t\t\tresolve(onFinally());\n\t\t}).then(() => {\n\t\t\tthrow err;\n\t\t})\n\t);\n};\n\n\n//# sourceURL=webpack:///./node_modules/p-finally/index.js?");

/***/ }),

/***/ "./node_modules/path-key/index.js":
/*!****************************************!*\
  !*** ./node_modules/path-key/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = opts => {\n\topts = opts || {};\n\n\tconst env = opts.env || process.env;\n\tconst platform = opts.platform || process.platform;\n\n\tif (platform !== 'win32') {\n\t\treturn 'PATH';\n\t}\n\n\treturn Object.keys(env).find(x => x.toUpperCase() === 'PATH') || 'Path';\n};\n\n\n//# sourceURL=webpack:///./node_modules/path-key/index.js?");

/***/ }),

/***/ "./node_modules/pseudomap/map.js":
/*!***************************************!*\
  !*** ./node_modules/pseudomap/map.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("if (process.env.npm_package_name === 'pseudomap' &&\n    process.env.npm_lifecycle_script === 'test')\n  process.env.TEST_PSEUDOMAP = 'true'\n\nif (typeof Map === 'function' && !process.env.TEST_PSEUDOMAP) {\n  module.exports = Map\n} else {\n  module.exports = __webpack_require__(/*! ./pseudomap */ \"./node_modules/pseudomap/pseudomap.js\")\n}\n\n\n//# sourceURL=webpack:///./node_modules/pseudomap/map.js?");

/***/ }),

/***/ "./node_modules/pseudomap/pseudomap.js":
/*!*********************************************!*\
  !*** ./node_modules/pseudomap/pseudomap.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var hasOwnProperty = Object.prototype.hasOwnProperty\n\nmodule.exports = PseudoMap\n\nfunction PseudoMap (set) {\n  if (!(this instanceof PseudoMap)) // whyyyyyyy\n    throw new TypeError(\"Constructor PseudoMap requires 'new'\")\n\n  this.clear()\n\n  if (set) {\n    if ((set instanceof PseudoMap) ||\n        (typeof Map === 'function' && set instanceof Map))\n      set.forEach(function (value, key) {\n        this.set(key, value)\n      }, this)\n    else if (Array.isArray(set))\n      set.forEach(function (kv) {\n        this.set(kv[0], kv[1])\n      }, this)\n    else\n      throw new TypeError('invalid argument')\n  }\n}\n\nPseudoMap.prototype.forEach = function (fn, thisp) {\n  thisp = thisp || this\n  Object.keys(this._data).forEach(function (k) {\n    if (k !== 'size')\n      fn.call(thisp, this._data[k].value, this._data[k].key)\n  }, this)\n}\n\nPseudoMap.prototype.has = function (k) {\n  return !!find(this._data, k)\n}\n\nPseudoMap.prototype.get = function (k) {\n  var res = find(this._data, k)\n  return res && res.value\n}\n\nPseudoMap.prototype.set = function (k, v) {\n  set(this._data, k, v)\n}\n\nPseudoMap.prototype.delete = function (k) {\n  var res = find(this._data, k)\n  if (res) {\n    delete this._data[res._index]\n    this._data.size--\n  }\n}\n\nPseudoMap.prototype.clear = function () {\n  var data = Object.create(null)\n  data.size = 0\n\n  Object.defineProperty(this, '_data', {\n    value: data,\n    enumerable: false,\n    configurable: true,\n    writable: false\n  })\n}\n\nObject.defineProperty(PseudoMap.prototype, 'size', {\n  get: function () {\n    return this._data.size\n  },\n  set: function (n) {},\n  enumerable: true,\n  configurable: true\n})\n\nPseudoMap.prototype.values =\nPseudoMap.prototype.keys =\nPseudoMap.prototype.entries = function () {\n  throw new Error('iterators are not implemented in this version')\n}\n\n// Either identical, or both NaN\nfunction same (a, b) {\n  return a === b || a !== a && b !== b\n}\n\nfunction Entry (k, v, i) {\n  this.key = k\n  this.value = v\n  this._index = i\n}\n\nfunction find (data, k) {\n  for (var i = 0, s = '_' + k, key = s;\n       hasOwnProperty.call(data, key);\n       key = s + i++) {\n    if (same(data[key].key, k))\n      return data[key]\n  }\n}\n\nfunction set (data, k, v) {\n  for (var i = 0, s = '_' + k, key = s;\n       hasOwnProperty.call(data, key);\n       key = s + i++) {\n    if (same(data[key].key, k)) {\n      data[key].value = v\n      return\n    }\n  }\n  data.size++\n  data[key] = new Entry(k, v, key)\n}\n\n\n//# sourceURL=webpack:///./node_modules/pseudomap/pseudomap.js?");

/***/ }),

/***/ "./node_modules/shebang-command/index.js":
/*!***********************************************!*\
  !*** ./node_modules/shebang-command/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar shebangRegex = __webpack_require__(/*! shebang-regex */ \"./node_modules/shebang-regex/index.js\");\n\nmodule.exports = function (str) {\n\tvar match = str.match(shebangRegex);\n\n\tif (!match) {\n\t\treturn null;\n\t}\n\n\tvar arr = match[0].replace(/#! ?/, '').split(' ');\n\tvar bin = arr[0].split('/').pop();\n\tvar arg = arr[1];\n\n\treturn (bin === 'env' ?\n\t\targ :\n\t\tbin + (arg ? ' ' + arg : '')\n\t);\n};\n\n\n//# sourceURL=webpack:///./node_modules/shebang-command/index.js?");

/***/ }),

/***/ "./node_modules/shebang-regex/index.js":
/*!*********************************************!*\
  !*** ./node_modules/shebang-regex/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = /^#!.*/;\n\n\n//# sourceURL=webpack:///./node_modules/shebang-regex/index.js?");

/***/ }),

/***/ "./node_modules/signal-exit/index.js":
/*!*******************************************!*\
  !*** ./node_modules/signal-exit/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Note: since nyc uses this module to output coverage, any lines\n// that are in the direct sync flow of nyc's outputCoverage are\n// ignored, since we can never get coverage for them.\nvar assert = __webpack_require__(/*! assert */ \"assert\")\nvar signals = __webpack_require__(/*! ./signals.js */ \"./node_modules/signal-exit/signals.js\")\n\nvar EE = __webpack_require__(/*! events */ \"events\")\n/* istanbul ignore if */\nif (typeof EE !== 'function') {\n  EE = EE.EventEmitter\n}\n\nvar emitter\nif (process.__signal_exit_emitter__) {\n  emitter = process.__signal_exit_emitter__\n} else {\n  emitter = process.__signal_exit_emitter__ = new EE()\n  emitter.count = 0\n  emitter.emitted = {}\n}\n\n// Because this emitter is a global, we have to check to see if a\n// previous version of this library failed to enable infinite listeners.\n// I know what you're about to say.  But literally everything about\n// signal-exit is a compromise with evil.  Get used to it.\nif (!emitter.infinite) {\n  emitter.setMaxListeners(Infinity)\n  emitter.infinite = true\n}\n\nmodule.exports = function (cb, opts) {\n  assert.equal(typeof cb, 'function', 'a callback must be provided for exit handler')\n\n  if (loaded === false) {\n    load()\n  }\n\n  var ev = 'exit'\n  if (opts && opts.alwaysLast) {\n    ev = 'afterexit'\n  }\n\n  var remove = function () {\n    emitter.removeListener(ev, cb)\n    if (emitter.listeners('exit').length === 0 &&\n        emitter.listeners('afterexit').length === 0) {\n      unload()\n    }\n  }\n  emitter.on(ev, cb)\n\n  return remove\n}\n\nmodule.exports.unload = unload\nfunction unload () {\n  if (!loaded) {\n    return\n  }\n  loaded = false\n\n  signals.forEach(function (sig) {\n    try {\n      process.removeListener(sig, sigListeners[sig])\n    } catch (er) {}\n  })\n  process.emit = originalProcessEmit\n  process.reallyExit = originalProcessReallyExit\n  emitter.count -= 1\n}\n\nfunction emit (event, code, signal) {\n  if (emitter.emitted[event]) {\n    return\n  }\n  emitter.emitted[event] = true\n  emitter.emit(event, code, signal)\n}\n\n// { <signal>: <listener fn>, ... }\nvar sigListeners = {}\nsignals.forEach(function (sig) {\n  sigListeners[sig] = function listener () {\n    // If there are no other listeners, an exit is coming!\n    // Simplest way: remove us and then re-send the signal.\n    // We know that this will kill the process, so we can\n    // safely emit now.\n    var listeners = process.listeners(sig)\n    if (listeners.length === emitter.count) {\n      unload()\n      emit('exit', null, sig)\n      /* istanbul ignore next */\n      emit('afterexit', null, sig)\n      /* istanbul ignore next */\n      process.kill(process.pid, sig)\n    }\n  }\n})\n\nmodule.exports.signals = function () {\n  return signals\n}\n\nmodule.exports.load = load\n\nvar loaded = false\n\nfunction load () {\n  if (loaded) {\n    return\n  }\n  loaded = true\n\n  // This is the number of onSignalExit's that are in play.\n  // It's important so that we can count the correct number of\n  // listeners on signals, and don't wait for the other one to\n  // handle it instead of us.\n  emitter.count += 1\n\n  signals = signals.filter(function (sig) {\n    try {\n      process.on(sig, sigListeners[sig])\n      return true\n    } catch (er) {\n      return false\n    }\n  })\n\n  process.emit = processEmit\n  process.reallyExit = processReallyExit\n}\n\nvar originalProcessReallyExit = process.reallyExit\nfunction processReallyExit (code) {\n  process.exitCode = code || 0\n  emit('exit', process.exitCode, null)\n  /* istanbul ignore next */\n  emit('afterexit', process.exitCode, null)\n  /* istanbul ignore next */\n  originalProcessReallyExit.call(process, process.exitCode)\n}\n\nvar originalProcessEmit = process.emit\nfunction processEmit (ev, arg) {\n  if (ev === 'exit') {\n    if (arg !== undefined) {\n      process.exitCode = arg\n    }\n    var ret = originalProcessEmit.apply(this, arguments)\n    emit('exit', process.exitCode, null)\n    /* istanbul ignore next */\n    emit('afterexit', process.exitCode, null)\n    return ret\n  } else {\n    return originalProcessEmit.apply(this, arguments)\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/signal-exit/index.js?");

/***/ }),

/***/ "./node_modules/signal-exit/signals.js":
/*!*********************************************!*\
  !*** ./node_modules/signal-exit/signals.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// This is not the set of all possible signals.\n//\n// It IS, however, the set of all signals that trigger\n// an exit on either Linux or BSD systems.  Linux is a\n// superset of the signal names supported on BSD, and\n// the unknown signals just fail to register, so we can\n// catch that easily enough.\n//\n// Don't bother with SIGKILL.  It's uncatchable, which\n// means that we can't fire any callbacks anyway.\n//\n// If a user does happen to register a handler on a non-\n// fatal signal like SIGWINCH or something, and then\n// exit, it'll end up firing `process.emit('exit')`, so\n// the handler will be fired anyway.\n//\n// SIGBUS, SIGFPE, SIGSEGV and SIGILL, when not raised\n// artificially, inherently leave the process in a\n// state from which it is not safe to try and enter JS\n// listeners.\nmodule.exports = [\n  'SIGABRT',\n  'SIGALRM',\n  'SIGHUP',\n  'SIGINT',\n  'SIGTERM'\n]\n\nif (process.platform !== 'win32') {\n  module.exports.push(\n    'SIGVTALRM',\n    'SIGXCPU',\n    'SIGXFSZ',\n    'SIGUSR2',\n    'SIGTRAP',\n    'SIGSYS',\n    'SIGQUIT',\n    'SIGIOT'\n    // should detect profiler and enable/disable accordingly.\n    // see #21\n    // 'SIGPROF'\n  )\n}\n\nif (process.platform === 'linux') {\n  module.exports.push(\n    'SIGIO',\n    'SIGPOLL',\n    'SIGPWR',\n    'SIGSTKFLT',\n    'SIGUNUSED'\n  )\n}\n\n\n//# sourceURL=webpack:///./node_modules/signal-exit/signals.js?");

/***/ }),

/***/ "./node_modules/strip-eof/index.js":
/*!*****************************************!*\
  !*** ./node_modules/strip-eof/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nmodule.exports = function (x) {\n\tvar lf = typeof x === 'string' ? '\\n' : '\\n'.charCodeAt();\n\tvar cr = typeof x === 'string' ? '\\r' : '\\r'.charCodeAt();\n\n\tif (x[x.length - 1] === lf) {\n\t\tx = x.slice(0, x.length - 1);\n\t}\n\n\tif (x[x.length - 1] === cr) {\n\t\tx = x.slice(0, x.length - 1);\n\t}\n\n\treturn x;\n};\n\n\n//# sourceURL=webpack:///./node_modules/strip-eof/index.js?");

/***/ }),

/***/ "./node_modules/which/which.js":
/*!*************************************!*\
  !*** ./node_modules/which/which.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = which\nwhich.sync = whichSync\n\nvar isWindows = process.platform === 'win32' ||\n    process.env.OSTYPE === 'cygwin' ||\n    process.env.OSTYPE === 'msys'\n\nvar path = __webpack_require__(/*! path */ \"path\")\nvar COLON = isWindows ? ';' : ':'\nvar isexe = __webpack_require__(/*! isexe */ \"./node_modules/isexe/index.js\")\n\nfunction getNotFoundError (cmd) {\n  var er = new Error('not found: ' + cmd)\n  er.code = 'ENOENT'\n\n  return er\n}\n\nfunction getPathInfo (cmd, opt) {\n  var colon = opt.colon || COLON\n  var pathEnv = opt.path || process.env.PATH || ''\n  var pathExt = ['']\n\n  pathEnv = pathEnv.split(colon)\n\n  var pathExtExe = ''\n  if (isWindows) {\n    pathEnv.unshift(process.cwd())\n    pathExtExe = (opt.pathExt || process.env.PATHEXT || '.EXE;.CMD;.BAT;.COM')\n    pathExt = pathExtExe.split(colon)\n\n\n    // Always test the cmd itself first.  isexe will check to make sure\n    // it's found in the pathExt set.\n    if (cmd.indexOf('.') !== -1 && pathExt[0] !== '')\n      pathExt.unshift('')\n  }\n\n  // If it has a slash, then we don't bother searching the pathenv.\n  // just check the file itself, and that's it.\n  if (cmd.match(/\\//) || isWindows && cmd.match(/\\\\/))\n    pathEnv = ['']\n\n  return {\n    env: pathEnv,\n    ext: pathExt,\n    extExe: pathExtExe\n  }\n}\n\nfunction which (cmd, opt, cb) {\n  if (typeof opt === 'function') {\n    cb = opt\n    opt = {}\n  }\n\n  var info = getPathInfo(cmd, opt)\n  var pathEnv = info.env\n  var pathExt = info.ext\n  var pathExtExe = info.extExe\n  var found = []\n\n  ;(function F (i, l) {\n    if (i === l) {\n      if (opt.all && found.length)\n        return cb(null, found)\n      else\n        return cb(getNotFoundError(cmd))\n    }\n\n    var pathPart = pathEnv[i]\n    if (pathPart.charAt(0) === '\"' && pathPart.slice(-1) === '\"')\n      pathPart = pathPart.slice(1, -1)\n\n    var p = path.join(pathPart, cmd)\n    if (!pathPart && (/^\\.[\\\\\\/]/).test(cmd)) {\n      p = cmd.slice(0, 2) + p\n    }\n    ;(function E (ii, ll) {\n      if (ii === ll) return F(i + 1, l)\n      var ext = pathExt[ii]\n      isexe(p + ext, { pathExt: pathExtExe }, function (er, is) {\n        if (!er && is) {\n          if (opt.all)\n            found.push(p + ext)\n          else\n            return cb(null, p + ext)\n        }\n        return E(ii + 1, ll)\n      })\n    })(0, pathExt.length)\n  })(0, pathEnv.length)\n}\n\nfunction whichSync (cmd, opt) {\n  opt = opt || {}\n\n  var info = getPathInfo(cmd, opt)\n  var pathEnv = info.env\n  var pathExt = info.ext\n  var pathExtExe = info.extExe\n  var found = []\n\n  for (var i = 0, l = pathEnv.length; i < l; i ++) {\n    var pathPart = pathEnv[i]\n    if (pathPart.charAt(0) === '\"' && pathPart.slice(-1) === '\"')\n      pathPart = pathPart.slice(1, -1)\n\n    var p = path.join(pathPart, cmd)\n    if (!pathPart && /^\\.[\\\\\\/]/.test(cmd)) {\n      p = cmd.slice(0, 2) + p\n    }\n    for (var j = 0, ll = pathExt.length; j < ll; j ++) {\n      var cur = p + pathExt[j]\n      var is\n      try {\n        is = isexe.sync(cur, { pathExt: pathExtExe })\n        if (is) {\n          if (opt.all)\n            found.push(cur)\n          else\n            return cur\n        }\n      } catch (ex) {}\n    }\n  }\n\n  if (opt.all && found.length)\n    return found\n\n  if (opt.nothrow)\n    return null\n\n  throw getNotFoundError(cmd)\n}\n\n\n//# sourceURL=webpack:///./node_modules/which/which.js?");

/***/ }),

/***/ "./node_modules/yallist/yallist.js":
/*!*****************************************!*\
  !*** ./node_modules/yallist/yallist.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = Yallist\n\nYallist.Node = Node\nYallist.create = Yallist\n\nfunction Yallist (list) {\n  var self = this\n  if (!(self instanceof Yallist)) {\n    self = new Yallist()\n  }\n\n  self.tail = null\n  self.head = null\n  self.length = 0\n\n  if (list && typeof list.forEach === 'function') {\n    list.forEach(function (item) {\n      self.push(item)\n    })\n  } else if (arguments.length > 0) {\n    for (var i = 0, l = arguments.length; i < l; i++) {\n      self.push(arguments[i])\n    }\n  }\n\n  return self\n}\n\nYallist.prototype.removeNode = function (node) {\n  if (node.list !== this) {\n    throw new Error('removing node which does not belong to this list')\n  }\n\n  var next = node.next\n  var prev = node.prev\n\n  if (next) {\n    next.prev = prev\n  }\n\n  if (prev) {\n    prev.next = next\n  }\n\n  if (node === this.head) {\n    this.head = next\n  }\n  if (node === this.tail) {\n    this.tail = prev\n  }\n\n  node.list.length--\n  node.next = null\n  node.prev = null\n  node.list = null\n}\n\nYallist.prototype.unshiftNode = function (node) {\n  if (node === this.head) {\n    return\n  }\n\n  if (node.list) {\n    node.list.removeNode(node)\n  }\n\n  var head = this.head\n  node.list = this\n  node.next = head\n  if (head) {\n    head.prev = node\n  }\n\n  this.head = node\n  if (!this.tail) {\n    this.tail = node\n  }\n  this.length++\n}\n\nYallist.prototype.pushNode = function (node) {\n  if (node === this.tail) {\n    return\n  }\n\n  if (node.list) {\n    node.list.removeNode(node)\n  }\n\n  var tail = this.tail\n  node.list = this\n  node.prev = tail\n  if (tail) {\n    tail.next = node\n  }\n\n  this.tail = node\n  if (!this.head) {\n    this.head = node\n  }\n  this.length++\n}\n\nYallist.prototype.push = function () {\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    push(this, arguments[i])\n  }\n  return this.length\n}\n\nYallist.prototype.unshift = function () {\n  for (var i = 0, l = arguments.length; i < l; i++) {\n    unshift(this, arguments[i])\n  }\n  return this.length\n}\n\nYallist.prototype.pop = function () {\n  if (!this.tail) {\n    return undefined\n  }\n\n  var res = this.tail.value\n  this.tail = this.tail.prev\n  if (this.tail) {\n    this.tail.next = null\n  } else {\n    this.head = null\n  }\n  this.length--\n  return res\n}\n\nYallist.prototype.shift = function () {\n  if (!this.head) {\n    return undefined\n  }\n\n  var res = this.head.value\n  this.head = this.head.next\n  if (this.head) {\n    this.head.prev = null\n  } else {\n    this.tail = null\n  }\n  this.length--\n  return res\n}\n\nYallist.prototype.forEach = function (fn, thisp) {\n  thisp = thisp || this\n  for (var walker = this.head, i = 0; walker !== null; i++) {\n    fn.call(thisp, walker.value, i, this)\n    walker = walker.next\n  }\n}\n\nYallist.prototype.forEachReverse = function (fn, thisp) {\n  thisp = thisp || this\n  for (var walker = this.tail, i = this.length - 1; walker !== null; i--) {\n    fn.call(thisp, walker.value, i, this)\n    walker = walker.prev\n  }\n}\n\nYallist.prototype.get = function (n) {\n  for (var i = 0, walker = this.head; walker !== null && i < n; i++) {\n    // abort out of the list early if we hit a cycle\n    walker = walker.next\n  }\n  if (i === n && walker !== null) {\n    return walker.value\n  }\n}\n\nYallist.prototype.getReverse = function (n) {\n  for (var i = 0, walker = this.tail; walker !== null && i < n; i++) {\n    // abort out of the list early if we hit a cycle\n    walker = walker.prev\n  }\n  if (i === n && walker !== null) {\n    return walker.value\n  }\n}\n\nYallist.prototype.map = function (fn, thisp) {\n  thisp = thisp || this\n  var res = new Yallist()\n  for (var walker = this.head; walker !== null;) {\n    res.push(fn.call(thisp, walker.value, this))\n    walker = walker.next\n  }\n  return res\n}\n\nYallist.prototype.mapReverse = function (fn, thisp) {\n  thisp = thisp || this\n  var res = new Yallist()\n  for (var walker = this.tail; walker !== null;) {\n    res.push(fn.call(thisp, walker.value, this))\n    walker = walker.prev\n  }\n  return res\n}\n\nYallist.prototype.reduce = function (fn, initial) {\n  var acc\n  var walker = this.head\n  if (arguments.length > 1) {\n    acc = initial\n  } else if (this.head) {\n    walker = this.head.next\n    acc = this.head.value\n  } else {\n    throw new TypeError('Reduce of empty list with no initial value')\n  }\n\n  for (var i = 0; walker !== null; i++) {\n    acc = fn(acc, walker.value, i)\n    walker = walker.next\n  }\n\n  return acc\n}\n\nYallist.prototype.reduceReverse = function (fn, initial) {\n  var acc\n  var walker = this.tail\n  if (arguments.length > 1) {\n    acc = initial\n  } else if (this.tail) {\n    walker = this.tail.prev\n    acc = this.tail.value\n  } else {\n    throw new TypeError('Reduce of empty list with no initial value')\n  }\n\n  for (var i = this.length - 1; walker !== null; i--) {\n    acc = fn(acc, walker.value, i)\n    walker = walker.prev\n  }\n\n  return acc\n}\n\nYallist.prototype.toArray = function () {\n  var arr = new Array(this.length)\n  for (var i = 0, walker = this.head; walker !== null; i++) {\n    arr[i] = walker.value\n    walker = walker.next\n  }\n  return arr\n}\n\nYallist.prototype.toArrayReverse = function () {\n  var arr = new Array(this.length)\n  for (var i = 0, walker = this.tail; walker !== null; i++) {\n    arr[i] = walker.value\n    walker = walker.prev\n  }\n  return arr\n}\n\nYallist.prototype.slice = function (from, to) {\n  to = to || this.length\n  if (to < 0) {\n    to += this.length\n  }\n  from = from || 0\n  if (from < 0) {\n    from += this.length\n  }\n  var ret = new Yallist()\n  if (to < from || to < 0) {\n    return ret\n  }\n  if (from < 0) {\n    from = 0\n  }\n  if (to > this.length) {\n    to = this.length\n  }\n  for (var i = 0, walker = this.head; walker !== null && i < from; i++) {\n    walker = walker.next\n  }\n  for (; walker !== null && i < to; i++, walker = walker.next) {\n    ret.push(walker.value)\n  }\n  return ret\n}\n\nYallist.prototype.sliceReverse = function (from, to) {\n  to = to || this.length\n  if (to < 0) {\n    to += this.length\n  }\n  from = from || 0\n  if (from < 0) {\n    from += this.length\n  }\n  var ret = new Yallist()\n  if (to < from || to < 0) {\n    return ret\n  }\n  if (from < 0) {\n    from = 0\n  }\n  if (to > this.length) {\n    to = this.length\n  }\n  for (var i = this.length, walker = this.tail; walker !== null && i > to; i--) {\n    walker = walker.prev\n  }\n  for (; walker !== null && i > from; i--, walker = walker.prev) {\n    ret.push(walker.value)\n  }\n  return ret\n}\n\nYallist.prototype.reverse = function () {\n  var head = this.head\n  var tail = this.tail\n  for (var walker = head; walker !== null; walker = walker.prev) {\n    var p = walker.prev\n    walker.prev = walker.next\n    walker.next = p\n  }\n  this.head = tail\n  this.tail = head\n  return this\n}\n\nfunction push (self, item) {\n  self.tail = new Node(item, self.tail, null, self)\n  if (!self.head) {\n    self.head = self.tail\n  }\n  self.length++\n}\n\nfunction unshift (self, item) {\n  self.head = new Node(item, null, self.head, self)\n  if (!self.tail) {\n    self.tail = self.head\n  }\n  self.length++\n}\n\nfunction Node (value, prev, next, list) {\n  if (!(this instanceof Node)) {\n    return new Node(value, prev, next, list)\n  }\n\n  this.list = list\n  this.value = value\n\n  if (prev) {\n    prev.next = this\n    this.prev = prev\n  } else {\n    this.prev = null\n  }\n\n  if (next) {\n    next.prev = this\n    this.next = next\n  } else {\n    this.next = null\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/yallist/yallist.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var nexusdk__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nexusdk */ \"./node_modules/nexusdk/dist/src/index.js\");\n/* harmony import */ var nexusdk__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nexusdk__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clipboardy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clipboardy */ \"./node_modules/clipboardy/index.js\");\n/* harmony import */ var clipboardy__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clipboardy__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Object(nexusdk__WEBPACK_IMPORTED_MODULE_0__[\"wrapHook\"])((properties, messages) => {\n  const { trigger } = messages;\n  const { interval } = properties;\n\n  let running = 0;\n  let clipboardData = null;\n\n  setInterval(() => {\n    if (running === 0) {\n      running += 1;\n      const tempData = clipboardy__WEBPACK_IMPORTED_MODULE_1___default.a.readSync();\n      if (clipboardData !== null && tempData !== clipboardData) {\n        trigger({ interval, data: tempData });\n      }\n        clipboardData = tempData;\n      running -= 1;\n    }\n  }, interval);\n}));\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"assert\");\n\n//# sourceURL=webpack:///external_%22assert%22?");

/***/ }),

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"child_process\");\n\n//# sourceURL=webpack:///external_%22child_process%22?");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"events\");\n\n//# sourceURL=webpack:///external_%22events%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stream\");\n\n//# sourceURL=webpack:///external_%22stream%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ })

/******/ });