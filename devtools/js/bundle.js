/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/DevTools/.fable/fable-library.3.0.5/Array.js":
/*!**********************************************************!*\
  !*** ./src/DevTools/.fable/fable-library.3.0.5/Array.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "append": () => /* binding */ append,
/* harmony export */   "filter": () => /* binding */ filter,
/* harmony export */   "fill": () => /* binding */ fill,
/* harmony export */   "getSubArray": () => /* binding */ getSubArray,
/* harmony export */   "last": () => /* binding */ last,
/* harmony export */   "tryLast": () => /* binding */ tryLast,
/* harmony export */   "mapIndexed": () => /* binding */ mapIndexed,
/* harmony export */   "map": () => /* binding */ map,
/* harmony export */   "mapIndexed2": () => /* binding */ mapIndexed2,
/* harmony export */   "map2": () => /* binding */ map2,
/* harmony export */   "mapIndexed3": () => /* binding */ mapIndexed3,
/* harmony export */   "map3": () => /* binding */ map3,
/* harmony export */   "mapFold": () => /* binding */ mapFold,
/* harmony export */   "mapFoldBack": () => /* binding */ mapFoldBack,
/* harmony export */   "indexed": () => /* binding */ indexed,
/* harmony export */   "truncate": () => /* binding */ truncate,
/* harmony export */   "concat": () => /* binding */ concat,
/* harmony export */   "collect": () => /* binding */ collect,
/* harmony export */   "countBy": () => /* binding */ countBy,
/* harmony export */   "distinctBy": () => /* binding */ distinctBy,
/* harmony export */   "distinct": () => /* binding */ distinct,
/* harmony export */   "where": () => /* binding */ where,
/* harmony export */   "contains": () => /* binding */ contains,
/* harmony export */   "except": () => /* binding */ except,
/* harmony export */   "groupBy": () => /* binding */ groupBy,
/* harmony export */   "empty": () => /* binding */ empty,
/* harmony export */   "singleton": () => /* binding */ singleton,
/* harmony export */   "initialize": () => /* binding */ initialize,
/* harmony export */   "pairwise": () => /* binding */ pairwise,
/* harmony export */   "replicate": () => /* binding */ replicate,
/* harmony export */   "copy": () => /* binding */ copy,
/* harmony export */   "reverse": () => /* binding */ reverse,
/* harmony export */   "scan": () => /* binding */ scan,
/* harmony export */   "scanBack": () => /* binding */ scanBack,
/* harmony export */   "skip": () => /* binding */ skip,
/* harmony export */   "skipWhile": () => /* binding */ skipWhile,
/* harmony export */   "take": () => /* binding */ take,
/* harmony export */   "takeWhile": () => /* binding */ takeWhile,
/* harmony export */   "addInPlace": () => /* binding */ addInPlace,
/* harmony export */   "addRangeInPlace": () => /* binding */ addRangeInPlace,
/* harmony export */   "removeInPlace": () => /* binding */ removeInPlace,
/* harmony export */   "removeAllInPlace": () => /* binding */ removeAllInPlace,
/* harmony export */   "copyTo": () => /* binding */ copyTo,
/* harmony export */   "indexOf": () => /* binding */ indexOf,
/* harmony export */   "partition": () => /* binding */ partition,
/* harmony export */   "find": () => /* binding */ find,
/* harmony export */   "tryFind": () => /* binding */ tryFind,
/* harmony export */   "findIndex": () => /* binding */ findIndex,
/* harmony export */   "tryFindIndex": () => /* binding */ tryFindIndex,
/* harmony export */   "pick": () => /* binding */ pick,
/* harmony export */   "tryPick": () => /* binding */ tryPick,
/* harmony export */   "findBack": () => /* binding */ findBack,
/* harmony export */   "tryFindBack": () => /* binding */ tryFindBack,
/* harmony export */   "findLastIndex": () => /* binding */ findLastIndex,
/* harmony export */   "findIndexBack": () => /* binding */ findIndexBack,
/* harmony export */   "tryFindIndexBack": () => /* binding */ tryFindIndexBack,
/* harmony export */   "choose": () => /* binding */ choose,
/* harmony export */   "foldIndexed": () => /* binding */ foldIndexed,
/* harmony export */   "fold": () => /* binding */ fold,
/* harmony export */   "iterate": () => /* binding */ iterate,
/* harmony export */   "iterateIndexed": () => /* binding */ iterateIndexed,
/* harmony export */   "iterate2": () => /* binding */ iterate2,
/* harmony export */   "iterateIndexed2": () => /* binding */ iterateIndexed2,
/* harmony export */   "isEmpty": () => /* binding */ isEmpty,
/* harmony export */   "forAll": () => /* binding */ forAll,
/* harmony export */   "permute": () => /* binding */ permute,
/* harmony export */   "setSlice": () => /* binding */ setSlice,
/* harmony export */   "sortInPlaceBy": () => /* binding */ sortInPlaceBy,
/* harmony export */   "sortInPlace": () => /* binding */ sortInPlace,
/* harmony export */   "sort": () => /* binding */ sort,
/* harmony export */   "sortBy": () => /* binding */ sortBy,
/* harmony export */   "sortDescending": () => /* binding */ sortDescending,
/* harmony export */   "sortByDescending": () => /* binding */ sortByDescending,
/* harmony export */   "sortWith": () => /* binding */ sortWith,
/* harmony export */   "unfold": () => /* binding */ unfold,
/* harmony export */   "unzip": () => /* binding */ unzip,
/* harmony export */   "unzip3": () => /* binding */ unzip3,
/* harmony export */   "zip": () => /* binding */ zip,
/* harmony export */   "zip3": () => /* binding */ zip3,
/* harmony export */   "chunkBySize": () => /* binding */ chunkBySize,
/* harmony export */   "splitAt": () => /* binding */ splitAt,
/* harmony export */   "compareWith": () => /* binding */ compareWith,
/* harmony export */   "equalsWith": () => /* binding */ equalsWith,
/* harmony export */   "exactlyOne": () => /* binding */ exactlyOne,
/* harmony export */   "head": () => /* binding */ head,
/* harmony export */   "tryHead": () => /* binding */ tryHead,
/* harmony export */   "tail": () => /* binding */ tail,
/* harmony export */   "item": () => /* binding */ item,
/* harmony export */   "tryItem": () => /* binding */ tryItem,
/* harmony export */   "foldBackIndexed": () => /* binding */ foldBackIndexed,
/* harmony export */   "foldBack": () => /* binding */ foldBack,
/* harmony export */   "foldIndexed2": () => /* binding */ foldIndexed2,
/* harmony export */   "fold2": () => /* binding */ fold2,
/* harmony export */   "foldBackIndexed2": () => /* binding */ foldBackIndexed2,
/* harmony export */   "foldBack2": () => /* binding */ foldBack2,
/* harmony export */   "reduce": () => /* binding */ reduce,
/* harmony export */   "reduceBack": () => /* binding */ reduceBack,
/* harmony export */   "forAll2": () => /* binding */ forAll2,
/* harmony export */   "existsOffset": () => /* binding */ existsOffset,
/* harmony export */   "exists": () => /* binding */ exists,
/* harmony export */   "existsOffset2": () => /* binding */ existsOffset2,
/* harmony export */   "exists2": () => /* binding */ exists2,
/* harmony export */   "sum": () => /* binding */ sum,
/* harmony export */   "sumBy": () => /* binding */ sumBy,
/* harmony export */   "maxBy": () => /* binding */ maxBy,
/* harmony export */   "max": () => /* binding */ max,
/* harmony export */   "minBy": () => /* binding */ minBy,
/* harmony export */   "min": () => /* binding */ min,
/* harmony export */   "average": () => /* binding */ average,
/* harmony export */   "averageBy": () => /* binding */ averageBy,
/* harmony export */   "windowed": () => /* binding */ windowed,
/* harmony export */   "splitInto": () => /* binding */ splitInto,
/* harmony export */   "transpose": () => /* binding */ transpose
/* harmony export */ });
/* harmony import */ var _Option_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Option.js */ "./src/DevTools/.fable/fable-library.3.0.5/Option.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util.js */ "./src/DevTools/.fable/fable-library.3.0.5/Util.js");
/* harmony import */ var _MutableMap_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MutableMap.js */ "./src/DevTools/.fable/fable-library.3.0.5/MutableMap.js");
/* harmony import */ var _MapUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapUtil.js */ "./src/DevTools/.fable/fable-library.3.0.5/MapUtil.js");
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Types.js */ "./src/DevTools/.fable/fable-library.3.0.5/Types.js");
/* harmony import */ var _MutableSet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MutableSet.js */ "./src/DevTools/.fable/fable-library.3.0.5/MutableSet.js");
/* harmony import */ var _Seq_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Seq.js */ "./src/DevTools/.fable/fable-library.3.0.5/Seq.js");








function indexNotFound() {
    throw (new Error("An index satisfying the predicate was not found in the collection."));
}

function differentLengths() {
    throw (new Error("Arrays had different lengths"));
}

function append(array1, array2, cons) {
    const len1 = array1.length | 0;
    const len2 = array2.length | 0;
    const newArray = new (cons || Array)((len1 + len2));
    for (let i = 0; i <= (len1 - 1); i++) {
        newArray[i] = array1[i];
    }
    for (let i_1 = 0; i_1 <= (len2 - 1); i_1++) {
        newArray[i_1 + len1] = array2[i_1];
    }
    return newArray;
}

function filter(predicate, array) {
    return array.filter(predicate);
}

function fill(target, targetIndex, count, value) {
    const start = targetIndex | 0;
    return target.fill(value, start, (start + count));
}

function getSubArray(array, start, count) {
    const start_1 = start | 0;
    return array.slice(start_1, (start_1 + count));
}

function last(array) {
    if (array.length === 0) {
        throw (new Error("The input array was empty\\nParameter name: array"));
    }
    return array[array.length - 1];
}

function tryLast(array) {
    if (array.length === 0) {
        return void 0;
    }
    else {
        return (0,_Option_js__WEBPACK_IMPORTED_MODULE_0__.some)(array[array.length - 1]);
    }
}

function mapIndexed(f, source, cons) {
    const len = source.length | 0;
    const target = new (cons || Array)(len);
    for (let i = 0; i <= (len - 1); i++) {
        target[i] = f(i, source[i]);
    }
    return target;
}

function map(f, source, cons) {
    const len = source.length | 0;
    const target = new (cons || Array)(len);
    for (let i = 0; i <= (len - 1); i++) {
        target[i] = f(source[i]);
    }
    return target;
}

function mapIndexed2(f, source1, source2, cons) {
    if (source1.length !== source2.length) {
        throw (new Error("Arrays had different lengths"));
    }
    const result = new (cons || Array)(source1.length);
    for (let i = 0; i <= (source1.length - 1); i++) {
        result[i] = f(i, source1[i], source2[i]);
    }
    return result;
}

function map2(f, source1, source2, cons) {
    if (source1.length !== source2.length) {
        throw (new Error("Arrays had different lengths"));
    }
    const result = new (cons || Array)(source1.length);
    for (let i = 0; i <= (source1.length - 1); i++) {
        result[i] = f(source1[i], source2[i]);
    }
    return result;
}

function mapIndexed3(f, source1, source2, source3, cons) {
    if ((source1.length !== source2.length) ? true : (source2.length !== source3.length)) {
        throw (new Error("Arrays had different lengths"));
    }
    const result = new (cons || Array)(source1.length);
    for (let i = 0; i <= (source1.length - 1); i++) {
        result[i] = f(i, source1[i], source2[i], source3[i]);
    }
    return result;
}

function map3(f, source1, source2, source3, cons) {
    if ((source1.length !== source2.length) ? true : (source2.length !== source3.length)) {
        throw (new Error("Arrays had different lengths"));
    }
    const result = new (cons || Array)(source1.length);
    for (let i = 0; i <= (source1.length - 1); i++) {
        result[i] = f(source1[i], source2[i], source3[i]);
    }
    return result;
}

function mapFold(mapping, state, array, cons) {
    const matchValue = array.length | 0;
    if (matchValue === 0) {
        return [[], state];
    }
    else {
        let acc = state;
        const res = new (cons || Array)(matchValue);
        for (let i = 0; i <= (array.length - 1); i++) {
            const patternInput = mapping(acc, array[i]);
            res[i] = patternInput[0];
            acc = patternInput[1];
        }
        return [res, acc];
    }
}

function mapFoldBack(mapping, array, state, cons) {
    const matchValue = array.length | 0;
    if (matchValue === 0) {
        return [[], state];
    }
    else {
        let acc = state;
        const res = new (cons || Array)(matchValue);
        for (let i = array.length - 1; i >= 0; i--) {
            const patternInput = mapping(array[i], acc);
            res[i] = patternInput[0];
            acc = patternInput[1];
        }
        return [res, acc];
    }
}

function indexed(source) {
    const len = source.length | 0;
    const target = new Array(len);
    for (let i = 0; i <= (len - 1); i++) {
        target[i] = [i, source[i]];
    }
    return target;
}

function truncate(count, array) {
    const count_1 = (0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.max)(_Util_js__WEBPACK_IMPORTED_MODULE_1__.comparePrimitives, 0, count) | 0;
    const start = 0;
    return array.slice(start, (start + count_1));
}

function concat(arrays, cons) {
    const arrays_1 = Array.isArray(arrays) ? arrays : (Array.from(arrays));
    const matchValue = arrays_1.length | 0;
    switch (matchValue) {
        case 0: {
            return new (cons || Array)(0);
        }
        case 1: {
            return arrays_1[0];
        }
        default: {
            let totalIdx = 0;
            let totalLength = 0;
            for (let idx = 0; idx <= (arrays_1.length - 1); idx++) {
                const arr_1 = arrays_1[idx];
                totalLength = (totalLength + arr_1.length);
            }
            const result = new (cons || Array)(totalLength);
            for (let idx_1 = 0; idx_1 <= (arrays_1.length - 1); idx_1++) {
                const arr_2 = arrays_1[idx_1];
                for (let j = 0; j <= (arr_2.length - 1); j++) {
                    result[totalIdx] = arr_2[j];
                    totalIdx = (totalIdx + 1);
                }
            }
            return result;
        }
    }
}

function collect(mapping, array, cons) {
    return concat(map(mapping, array, null), cons);
}

function countBy(projection, array, eq) {
    const dict = new _MutableMap_js__WEBPACK_IMPORTED_MODULE_2__.Dictionary([], eq);
    const keys = [];
    for (let idx = 0; idx <= (array.length - 1); idx++) {
        const key = projection(array[idx]);
        let matchValue;
        let outArg = 0;
        matchValue = [(0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_3__.tryGetValue)(dict, key, new _Types_js__WEBPACK_IMPORTED_MODULE_4__.FSharpRef(() => outArg, (v) => {
            outArg = v;
        })), outArg];
        if (matchValue[0]) {
            dict.set(key, matchValue[1] + 1);
        }
        else {
            dict.set(key, 1);
            const value_1 = keys.push(key);
            void value_1;
        }
    }
    return map((key_1) => [key_1, (0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_3__.getItemFromDict)(dict, key_1)], keys, null);
}

function distinctBy(projection, array, eq) {
    const hashSet = new _MutableSet_js__WEBPACK_IMPORTED_MODULE_5__.HashSet([], eq);
    return filter((arg) => (0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_3__.addToSet)(projection(arg), hashSet), array);
}

function distinct(array, eq) {
    return distinctBy((x) => x, array, eq);
}

function where(predicate, array) {
    return array.filter(predicate);
}

function contains(value, array, eq) {
    const loop = (i_mut) => {
        loop:
        while (true) {
            const i = i_mut;
            if (i >= array.length) {
                return false;
            }
            else if (eq.Equals(value, array[i])) {
                return true;
            }
            else {
                i_mut = (i + 1);
                continue loop;
            }
            break;
        }
    };
    return loop(0);
}

function except(itemsToExclude, array, eq) {
    if (array.length === 0) {
        return array;
    }
    else {
        const cached = new _MutableSet_js__WEBPACK_IMPORTED_MODULE_5__.HashSet(itemsToExclude, eq);
        return array.filter(((arg00) => (0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_3__.addToSet)(arg00, cached)));
    }
}

function groupBy(projection, array, eq) {
    const dict = new _MutableMap_js__WEBPACK_IMPORTED_MODULE_2__.Dictionary([], eq);
    const keys = [];
    for (let idx = 0; idx <= (array.length - 1); idx++) {
        const v = array[idx];
        const key = projection(v);
        let matchValue;
        let outArg = null;
        matchValue = [(0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_3__.tryGetValue)(dict, key, new _Types_js__WEBPACK_IMPORTED_MODULE_4__.FSharpRef(() => outArg, (v_1) => {
            outArg = v_1;
        })), outArg];
        if (matchValue[0]) {
            void (matchValue[1].push(v));
        }
        else {
            (0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_3__.addToDict)(dict, key, [v]);
            const value = keys.push(key);
            void value;
        }
    }
    return map((key_1) => [key_1, Array.from((0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_3__.getItemFromDict)(dict, key_1))], keys, null);
}

function empty(cons) {
    return new (cons || Array)(0);
}

function singleton(value, cons) {
    const ar = new (cons || Array)(1);
    ar[0] = value;
    return ar;
}

function initialize(count, initializer, cons) {
    if (count < 0) {
        throw (new Error("The input must be non-negative\\nParameter name: count"));
    }
    const result = new (cons || Array)(count);
    for (let i = 0; i <= (count - 1); i++) {
        result[i] = initializer(i);
    }
    return result;
}

function pairwise(array) {
    if (array.length < 2) {
        return [];
    }
    else {
        const count = (array.length - 1) | 0;
        const result = new Array(count);
        for (let i = 0; i <= (count - 1); i++) {
            result[i] = [array[i], array[i + 1]];
        }
        return result;
    }
}

function replicate(count, initial, cons) {
    if (count < 0) {
        throw (new Error("The input must be non-negative\\nParameter name: count"));
    }
    const result = new (cons || Array)(count);
    for (let i = 0; i <= (result.length - 1); i++) {
        result[i] = initial;
    }
    return result;
}

function copy(array) {
    return array.slice();
}

function reverse(array) {
    const array_2 = array.slice();
    return array_2.reverse();
}

function scan(folder, state, array, cons) {
    const res = new (cons || Array)((array.length + 1));
    res[0] = state;
    for (let i = 0; i <= (array.length - 1); i++) {
        res[i + 1] = folder(res[i], array[i]);
    }
    return res;
}

function scanBack(folder, array, state, cons) {
    const res = new (cons || Array)((array.length + 1));
    res[array.length] = state;
    for (let i = array.length - 1; i >= 0; i--) {
        res[i] = folder(array[i], res[i + 1]);
    }
    return res;
}

function skip(count, array, cons) {
    if (count > array.length) {
        throw (new Error("count is greater than array length\\nParameter name: count"));
    }
    if (count === array.length) {
        return new (cons || Array)(0);
    }
    else {
        const count_1 = ((count < 0) ? 0 : count) | 0;
        return array.slice(count_1);
    }
}

function skipWhile(predicate, array, cons) {
    let count = 0;
    while ((count < array.length) ? predicate(array[count]) : false) {
        count = (count + 1);
    }
    if (count === array.length) {
        return new (cons || Array)(0);
    }
    else {
        const count_1 = count | 0;
        return array.slice(count_1);
    }
}

function take(count, array, cons) {
    if (count < 0) {
        throw (new Error("The input must be non-negative\\nParameter name: count"));
    }
    if (count > array.length) {
        throw (new Error("count is greater than array length\\nParameter name: count"));
    }
    if (count === 0) {
        return new (cons || Array)(0);
    }
    else {
        const start = 0;
        return array.slice(start, (start + count));
    }
}

function takeWhile(predicate, array, cons) {
    let count = 0;
    while ((count < array.length) ? predicate(array[count]) : false) {
        count = (count + 1);
    }
    if (count === 0) {
        return new (cons || Array)(0);
    }
    else {
        const start = 0;
        const count_1 = count | 0;
        return array.slice(start, (start + count_1));
    }
}

function addInPlace(x, array) {
    const value = array.push(x);
    void value;
}

function addRangeInPlace(range, array) {
    (0,_Seq_js__WEBPACK_IMPORTED_MODULE_6__.iterate)((x) => {
        const value = array.push(x);
        void value;
    }, range);
}

function removeInPlace(item_1, array) {
    const i = array.indexOf(item_1, 0);
    if (i > -1) {
        const value = array.splice(i, 1);
        void value;
        return true;
    }
    else {
        return false;
    }
}

function removeAllInPlace(predicate, array) {
    const countRemoveAll = (count) => {
        const i = array.findIndex(predicate);
        if (i > -1) {
            const value = array.splice(i, 1);
            void value;
            return (countRemoveAll(count) + 1) | 0;
        }
        else {
            return count | 0;
        }
    };
    return countRemoveAll(0) | 0;
}

function copyTo(source, sourceIndex, target, targetIndex, count) {
    const diff = (targetIndex - sourceIndex) | 0;
    for (let i = sourceIndex; i <= ((sourceIndex + count) - 1); i++) {
        target[i + diff] = source[i];
    }
}

function indexOf(array, item_1, start, count) {
    const start_1 = (0,_Option_js__WEBPACK_IMPORTED_MODULE_0__.defaultArg)(start, 0) | 0;
    const i = array.indexOf(item_1, start_1);
    if ((count != null) ? (i >= (start_1 + (0,_Option_js__WEBPACK_IMPORTED_MODULE_0__.value)(count))) : false) {
        return -1;
    }
    else {
        return i | 0;
    }
}

function partition(f, source, cons) {
    const len = source.length | 0;
    const res1 = new (cons || Array)(len);
    const res2 = new (cons || Array)(len);
    let iTrue = 0;
    let iFalse = 0;
    for (let i = 0; i <= (len - 1); i++) {
        if (f(source[i])) {
            res1[iTrue] = source[i];
            iTrue = (iTrue + 1);
        }
        else {
            res2[iFalse] = source[i];
            iFalse = (iFalse + 1);
        }
    }
    return [truncate(iTrue, res1), truncate(iFalse, res2)];
}

function find(predicate, array) {
    const matchValue = array.find(predicate);
    if (matchValue == null) {
        return indexNotFound();
    }
    else {
        return (0,_Option_js__WEBPACK_IMPORTED_MODULE_0__.value)(matchValue);
    }
}

function tryFind(predicate, array) {
    return array.find(predicate);
}

function findIndex(predicate, array) {
    const matchValue = array.findIndex(predicate);
    if (matchValue > -1) {
        return matchValue | 0;
    }
    else {
        return indexNotFound() | 0;
    }
}

function tryFindIndex(predicate, array) {
    const matchValue = array.findIndex(predicate);
    if (matchValue > -1) {
        return matchValue;
    }
    else {
        return void 0;
    }
}

function pick(chooser, array) {
    const loop = (i_mut) => {
        loop:
        while (true) {
            const i = i_mut;
            if (i >= array.length) {
                return indexNotFound();
            }
            else {
                const matchValue = chooser(array[i]);
                if (matchValue != null) {
                    return (0,_Option_js__WEBPACK_IMPORTED_MODULE_0__.value)(matchValue);
                }
                else {
                    i_mut = (i + 1);
                    continue loop;
                }
            }
            break;
        }
    };
    return loop(0);
}

function tryPick(chooser, array) {
    const loop = (i_mut) => {
        loop:
        while (true) {
            const i = i_mut;
            if (i >= array.length) {
                return void 0;
            }
            else {
                const matchValue = chooser(array[i]);
                if (matchValue == null) {
                    i_mut = (i + 1);
                    continue loop;
                }
                else {
                    return matchValue;
                }
            }
            break;
        }
    };
    return loop(0);
}

function findBack(predicate, array) {
    const loop = (i_mut) => {
        loop:
        while (true) {
            const i = i_mut;
            if (i < 0) {
                return indexNotFound();
            }
            else if (predicate(array[i])) {
                return array[i];
            }
            else {
                i_mut = (i - 1);
                continue loop;
            }
            break;
        }
    };
    return loop(array.length - 1);
}

function tryFindBack(predicate, array) {
    const loop = (i_mut) => {
        loop:
        while (true) {
            const i = i_mut;
            if (i < 0) {
                return void 0;
            }
            else if (predicate(array[i])) {
                return (0,_Option_js__WEBPACK_IMPORTED_MODULE_0__.some)(array[i]);
            }
            else {
                i_mut = (i - 1);
                continue loop;
            }
            break;
        }
    };
    return loop(array.length - 1);
}

function findLastIndex(predicate, array) {
    const loop = (i_mut) => {
        loop:
        while (true) {
            const i = i_mut;
            if (i < 0) {
                return -1;
            }
            else if (predicate(array[i])) {
                return i | 0;
            }
            else {
                i_mut = (i - 1);
                continue loop;
            }
            break;
        }
    };
    return loop(array.length - 1) | 0;
}

function findIndexBack(predicate, array) {
    const loop = (i_mut) => {
        loop:
        while (true) {
            const i = i_mut;
            if (i < 0) {
                return indexNotFound() | 0;
            }
            else if (predicate(array[i])) {
                return i | 0;
            }
            else {
                i_mut = (i - 1);
                continue loop;
            }
            break;
        }
    };
    return loop(array.length - 1) | 0;
}

function tryFindIndexBack(predicate, array) {
    const loop = (i_mut) => {
        loop:
        while (true) {
            const i = i_mut;
            if (i < 0) {
                return void 0;
            }
            else if (predicate(array[i])) {
                return i;
            }
            else {
                i_mut = (i - 1);
                continue loop;
            }
            break;
        }
    };
    return loop(array.length - 1);
}

function choose(chooser, array, cons) {
    return map((x_1) => (0,_Option_js__WEBPACK_IMPORTED_MODULE_0__.value)(chooser(x_1)), array.filter(((x) => (chooser(x) != null))), cons);
}

function foldIndexed(folder, state, array) {
    return array.reduce(((delegateArg0, delegateArg1, delegateArg2) => folder(delegateArg2, delegateArg0, delegateArg1)), state);
}

function fold(folder, state, array) {
    return array.reduce((folder), state);
}

function iterate(action, array) {
    for (let i = 0; i <= (array.length - 1); i++) {
        action(array[i]);
    }
}

function iterateIndexed(action, array) {
    for (let i = 0; i <= (array.length - 1); i++) {
        action(i, array[i]);
    }
}

function iterate2(action, array1, array2) {
    if (array1.length !== array2.length) {
        differentLengths();
    }
    for (let i = 0; i <= (array1.length - 1); i++) {
        action(array1[i], array2[i]);
    }
}

function iterateIndexed2(action, array1, array2) {
    if (array1.length !== array2.length) {
        differentLengths();
    }
    for (let i = 0; i <= (array1.length - 1); i++) {
        action(i, array1[i], array2[i]);
    }
}

function isEmpty(array) {
    return array.length === 0;
}

function forAll(predicate, array) {
    return array.every(predicate);
}

function permute(f, array) {
    const size = array.length | 0;
    const res = array.slice();
    const checkFlags = new Array(size);
    iterateIndexed((i, x) => {
        const j = f(i) | 0;
        if ((j < 0) ? true : (j >= size)) {
            throw (new Error("Not a valid permutation"));
        }
        res[j] = x;
        checkFlags[j] = 1;
    }, array);
    if (!(checkFlags.every(((y) => (1 === y))))) {
        throw (new Error("Not a valid permutation"));
    }
    return res;
}

function setSlice(target, lower, upper, source) {
    const lower_1 = (0,_Option_js__WEBPACK_IMPORTED_MODULE_0__.defaultArg)(lower, 0) | 0;
    const upper_1 = (0,_Option_js__WEBPACK_IMPORTED_MODULE_0__.defaultArg)(upper, 0) | 0;
    const length = (((upper_1 > 0) ? upper_1 : (target.length - 1)) - lower_1) | 0;
    for (let i = 0; i <= length; i++) {
        target[i + lower_1] = source[i];
    }
}

function sortInPlaceBy(projection, xs, comparer) {
    xs.sort(((x, y) => comparer.Compare(projection(x), projection(y))));
}

function sortInPlace(xs, comparer) {
    xs.sort(((x, y) => comparer.Compare(x, y)));
}

function sort(xs, comparer) {
    const xs_1 = xs.slice();
    xs_1.sort(((x, y) => comparer.Compare(x, y)));
    return xs_1;
}

function sortBy(projection, xs, comparer) {
    const xs_1 = xs.slice();
    xs_1.sort(((x, y) => comparer.Compare(projection(x), projection(y))));
    return xs_1;
}

function sortDescending(xs, comparer) {
    const xs_1 = xs.slice();
    xs_1.sort(((x, y) => (comparer.Compare(x, y) * -1)));
    return xs_1;
}

function sortByDescending(projection, xs, comparer) {
    const xs_1 = xs.slice();
    xs_1.sort(((x, y) => (comparer.Compare(projection(x), projection(y)) * -1)));
    return xs_1;
}

function sortWith(comparer, xs) {
    const comparer_1 = comparer;
    const xs_1 = xs.slice();
    xs_1.sort(comparer_1);
    return xs_1;
}

function unfold(generator, state) {
    const res = [];
    const loop = (state_1_mut) => {
        loop:
        while (true) {
            const state_1 = state_1_mut;
            const matchValue = generator(state_1);
            if (matchValue != null) {
                const x = matchValue[0];
                const s = matchValue[1];
                const value = res.push(x);
                void value;
                state_1_mut = s;
                continue loop;
            }
            break;
        }
    };
    loop(state);
    return res;
}

function unzip(array) {
    const len = array.length | 0;
    const res1 = new Array(len);
    const res2 = new Array(len);
    iterateIndexed((i, tupledArg) => {
        res1[i] = tupledArg[0];
        res2[i] = tupledArg[1];
    }, array);
    return [res1, res2];
}

function unzip3(array) {
    const len = array.length | 0;
    const res1 = new Array(len);
    const res2 = new Array(len);
    const res3 = new Array(len);
    iterateIndexed((i, tupledArg) => {
        res1[i] = tupledArg[0];
        res2[i] = tupledArg[1];
        res3[i] = tupledArg[2];
    }, array);
    return [res1, res2, res3];
}

function zip(array1, array2) {
    if (array1.length !== array2.length) {
        differentLengths();
    }
    const result = new Array(array1.length);
    for (let i = 0; i <= (array1.length - 1); i++) {
        result[i] = [array1[i], array2[i]];
    }
    return result;
}

function zip3(array1, array2, array3) {
    if ((array1.length !== array2.length) ? true : (array2.length !== array3.length)) {
        differentLengths();
    }
    const result = new Array(array1.length);
    for (let i = 0; i <= (array1.length - 1); i++) {
        result[i] = [array1[i], array2[i], array3[i]];
    }
    return result;
}

function chunkBySize(chunkSize, array) {
    if (chunkSize < 1) {
        throw (new Error("The input must be positive.\\nParameter name: size"));
    }
    if (array.length === 0) {
        return [[]];
    }
    else {
        const result = [];
        for (let x = 0; x <= ((~(~Math.ceil(array.length / chunkSize))) - 1); x++) {
            let slice;
            const start_1 = (x * chunkSize) | 0;
            slice = (array.slice(start_1, (start_1 + chunkSize)));
            const value = result.push(slice);
            void value;
        }
        return result;
    }
}

function splitAt(index, array) {
    let start;
    if (index < 0) {
        throw (new Error("The input must be non-negative\\nParameter name: index"));
    }
    if (index > array.length) {
        throw (new Error("The input sequence has an insufficient number of elements.\\nParameter name: index"));
    }
    return [(start = 0, array.slice(start, (start + index))), array.slice(index)];
}

function compareWith(comparer, array1, array2) {
    if (array1 == null) {
        if (array2 == null) {
            return 0;
        }
        else {
            return -1;
        }
    }
    else if (array2 == null) {
        return 1;
    }
    else {
        let i = 0;
        let result = 0;
        const length1 = array1.length | 0;
        const length2 = array2.length | 0;
        if (length1 > length2) {
            return 1;
        }
        else if (length1 < length2) {
            return -1;
        }
        else {
            while ((i < length1) ? (result === 0) : false) {
                result = comparer(array1[i], array2[i]);
                i = (i + 1);
            }
            return result | 0;
        }
    }
}

function equalsWith(comparer, array1, array2) {
    return compareWith(_Util_js__WEBPACK_IMPORTED_MODULE_1__.compare, array1, array2) === 0;
}

function exactlyOne(array) {
    if (array.length === 1) {
        return array[0];
    }
    else if (array.length === 0) {
        throw (new Error("The input sequence was empty\\nParameter name: array"));
    }
    else {
        throw (new Error("Input array too long\\nParameter name: array"));
    }
}

function head(array) {
    if (array.length === 0) {
        throw (new Error("The input array was empty\\nParameter name: array"));
    }
    else {
        return array[0];
    }
}

function tryHead(array) {
    if (array.length === 0) {
        return void 0;
    }
    else {
        return (0,_Option_js__WEBPACK_IMPORTED_MODULE_0__.some)(array[0]);
    }
}

function tail(array) {
    if (array.length === 0) {
        throw (new Error("Not enough elements\\nParameter name: array"));
    }
    return array.slice(1);
}

function item(index, array) {
    return array[index];
}

function tryItem(index, array) {
    if ((index < 0) ? true : (index >= array.length)) {
        return void 0;
    }
    else {
        return (0,_Option_js__WEBPACK_IMPORTED_MODULE_0__.some)(array[index]);
    }
}

function foldBackIndexed(folder, array, state) {
    return array.reduceRight(((delegateArg0, delegateArg1, delegateArg2) => folder(delegateArg2, delegateArg1, delegateArg0)), state);
}

function foldBack(folder, array, state) {
    return array.reduceRight(((delegateArg0, delegateArg1) => folder(delegateArg1, delegateArg0)), state);
}

function foldIndexed2(folder, state, array1, array2) {
    let acc = state;
    if (array1.length !== array2.length) {
        throw (new Error("Arrays have different lengths"));
    }
    for (let i = 0; i <= (array1.length - 1); i++) {
        acc = folder(i, acc, array1[i], array2[i]);
    }
    return acc;
}

function fold2(folder, state, array1, array2) {
    return foldIndexed2((_arg1, acc, x, y) => folder(acc, x, y), state, array1, array2);
}

function foldBackIndexed2(folder, array1, array2, state) {
    let acc = state;
    if (array1.length !== array2.length) {
        differentLengths();
    }
    const size = array1.length | 0;
    for (let i = 1; i <= size; i++) {
        acc = folder(i - 1, array1[size - i], array2[size - i], acc);
    }
    return acc;
}

function foldBack2(f, array1, array2, state) {
    return foldBackIndexed2((_arg1, x, y, acc) => f(x, y, acc), array1, array2, state);
}

function reduce(reduction, array) {
    if (array.length === 0) {
        throw (new Error("The input array was empty"));
    }
    const reduction_1 = reduction;
    return array.reduce(reduction_1);
}

function reduceBack(reduction, array) {
    if (array.length === 0) {
        throw (new Error("The input array was empty"));
    }
    const reduction_1 = reduction;
    return array.reduceRight(reduction_1);
}

function forAll2(predicate, array1, array2) {
    return fold2((acc, x, y) => (acc ? predicate(x, y) : false), true, array1, array2);
}

function existsOffset(predicate_mut, array_mut, index_mut) {
    existsOffset:
    while (true) {
        const predicate = predicate_mut, array = array_mut, index = index_mut;
        if (index === array.length) {
            return false;
        }
        else if (predicate(array[index])) {
            return true;
        }
        else {
            predicate_mut = predicate;
            array_mut = array;
            index_mut = (index + 1);
            continue existsOffset;
        }
        break;
    }
}

function exists(predicate, array) {
    return existsOffset(predicate, array, 0);
}

function existsOffset2(predicate_mut, array1_mut, array2_mut, index_mut) {
    existsOffset2:
    while (true) {
        const predicate = predicate_mut, array1 = array1_mut, array2 = array2_mut, index = index_mut;
        if (index === array1.length) {
            return false;
        }
        else if (predicate(array1[index], array2[index])) {
            return true;
        }
        else {
            predicate_mut = predicate;
            array1_mut = array1;
            array2_mut = array2;
            index_mut = (index + 1);
            continue existsOffset2;
        }
        break;
    }
}

function exists2(predicate, array1, array2) {
    if (array1.length !== array2.length) {
        differentLengths();
    }
    return existsOffset2(predicate, array1, array2, 0);
}

function sum(array, adder) {
    let acc = adder.GetZero();
    for (let i = 0; i <= (array.length - 1); i++) {
        acc = adder.Add(acc, array[i]);
    }
    return acc;
}

function sumBy(projection, array, adder) {
    let acc = adder.GetZero();
    for (let i = 0; i <= (array.length - 1); i++) {
        acc = adder.Add(acc, projection(array[i]));
    }
    return acc;
}

function maxBy(projection, xs, comparer) {
    return reduce((x, y) => ((comparer.Compare(projection(y), projection(x)) > 0) ? y : x), xs);
}

function max(xs, comparer) {
    return reduce((x, y) => ((comparer.Compare(y, x) > 0) ? y : x), xs);
}

function minBy(projection, xs, comparer) {
    return reduce((x, y) => ((comparer.Compare(projection(y), projection(x)) > 0) ? x : y), xs);
}

function min(xs, comparer) {
    return reduce((x, y) => ((comparer.Compare(y, x) > 0) ? x : y), xs);
}

function average(array, averager) {
    if (array.length === 0) {
        throw (new Error("The input array was empty\\nParameter name: array"));
    }
    let total = averager.GetZero();
    for (let i = 0; i <= (array.length - 1); i++) {
        total = averager.Add(total, array[i]);
    }
    return averager.DivideByInt(total, array.length);
}

function averageBy(projection, array, averager) {
    if (array.length === 0) {
        throw (new Error("The input array was empty\\nParameter name: array"));
    }
    let total = averager.GetZero();
    for (let i = 0; i <= (array.length - 1); i++) {
        total = averager.Add(total, projection(array[i]));
    }
    return averager.DivideByInt(total, array.length);
}

function windowed(windowSize, source) {
    if (windowSize <= 0) {
        throw (new Error("windowSize must be positive"));
    }
    let res;
    const len = (0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.max)(_Util_js__WEBPACK_IMPORTED_MODULE_1__.comparePrimitives, 0, source.length - windowSize) | 0;
    res = (new Array(len));
    for (let i = windowSize; i <= source.length; i++) {
        res[i - windowSize] = source.slice(i - windowSize, (i - 1) + 1);
    }
    return res;
}

function splitInto(chunks, array) {
    if (chunks < 1) {
        throw (new Error("The input must be positive.\\nParameter name: chunks"));
    }
    if (array.length === 0) {
        return [[]];
    }
    else {
        const result = [];
        const chunks_1 = (0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.min)(_Util_js__WEBPACK_IMPORTED_MODULE_1__.comparePrimitives, chunks, array.length) | 0;
        const minChunkSize = (~(~(array.length / chunks_1))) | 0;
        const chunksWithExtraItem = (array.length % chunks_1) | 0;
        for (let i = 0; i <= (chunks_1 - 1); i++) {
            const chunkSize = ((i < chunksWithExtraItem) ? (minChunkSize + 1) : minChunkSize) | 0;
            let slice;
            const start_1 = ((i * minChunkSize) + (0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.min)(_Util_js__WEBPACK_IMPORTED_MODULE_1__.comparePrimitives, chunksWithExtraItem, i)) | 0;
            slice = (array.slice(start_1, (start_1 + chunkSize)));
            const value = result.push(slice);
            void value;
        }
        return result;
    }
}

function transpose(arrays, cons) {
    const arrays_1 = Array.isArray(arrays) ? arrays : (Array.from(arrays));
    const len = arrays_1.length | 0;
    if (len === 0) {
        return new Array(0);
    }
    else {
        const lenInner = arrays_1[0].length | 0;
        if (!forAll((a) => (a.length === lenInner), arrays_1)) {
            differentLengths();
        }
        const result = new Array(lenInner);
        for (let i = 0; i <= (lenInner - 1); i++) {
            result[i] = (new (cons || Array)(len));
            for (let j = 0; j <= (len - 1); j++) {
                result[i][j] = arrays_1[j][i];
            }
        }
        return result;
    }
}



/***/ }),

/***/ "./src/DevTools/.fable/fable-library.3.0.5/Date.js":
/*!*********************************************************!*\
  !*** ./src/DevTools/.fable/fable-library.3.0.5/Date.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "offsetRegex": () => /* binding */ offsetRegex,
/* harmony export */   "dateOffsetToString": () => /* binding */ dateOffsetToString,
/* harmony export */   "dateToHalfUTCString": () => /* binding */ dateToHalfUTCString,
/* harmony export */   "toString": () => /* binding */ toString,
/* harmony export */   "DateTime": () => /* binding */ DateTime,
/* harmony export */   "fromTicks": () => /* binding */ fromTicks,
/* harmony export */   "fromDateTimeOffset": () => /* binding */ fromDateTimeOffset,
/* harmony export */   "getTicks": () => /* binding */ getTicks,
/* harmony export */   "minValue": () => /* binding */ minValue,
/* harmony export */   "maxValue": () => /* binding */ maxValue,
/* harmony export */   "parseRaw": () => /* binding */ parseRaw,
/* harmony export */   "parse": () => /* binding */ parse,
/* harmony export */   "tryParse": () => /* binding */ tryParse,
/* harmony export */   "create": () => /* binding */ create,
/* harmony export */   "now": () => /* binding */ now,
/* harmony export */   "utcNow": () => /* binding */ utcNow,
/* harmony export */   "today": () => /* binding */ today,
/* harmony export */   "isLeapYear": () => /* binding */ isLeapYear,
/* harmony export */   "daysInMonth": () => /* binding */ daysInMonth,
/* harmony export */   "toUniversalTime": () => /* binding */ toUniversalTime,
/* harmony export */   "toLocalTime": () => /* binding */ toLocalTime,
/* harmony export */   "specifyKind": () => /* binding */ specifyKind,
/* harmony export */   "timeOfDay": () => /* binding */ timeOfDay,
/* harmony export */   "date": () => /* binding */ date,
/* harmony export */   "day": () => /* binding */ day,
/* harmony export */   "hour": () => /* binding */ hour,
/* harmony export */   "millisecond": () => /* binding */ millisecond,
/* harmony export */   "minute": () => /* binding */ minute,
/* harmony export */   "month": () => /* binding */ month,
/* harmony export */   "second": () => /* binding */ second,
/* harmony export */   "year": () => /* binding */ year,
/* harmony export */   "dayOfWeek": () => /* binding */ dayOfWeek,
/* harmony export */   "dayOfYear": () => /* binding */ dayOfYear,
/* harmony export */   "add": () => /* binding */ add,
/* harmony export */   "addDays": () => /* binding */ addDays,
/* harmony export */   "addHours": () => /* binding */ addHours,
/* harmony export */   "addMinutes": () => /* binding */ addMinutes,
/* harmony export */   "addSeconds": () => /* binding */ addSeconds,
/* harmony export */   "addMilliseconds": () => /* binding */ addMilliseconds,
/* harmony export */   "addYears": () => /* binding */ addYears,
/* harmony export */   "addMonths": () => /* binding */ addMonths,
/* harmony export */   "subtract": () => /* binding */ subtract,
/* harmony export */   "toLongDateString": () => /* binding */ toLongDateString,
/* harmony export */   "toShortDateString": () => /* binding */ toShortDateString,
/* harmony export */   "toLongTimeString": () => /* binding */ toLongTimeString,
/* harmony export */   "toShortTimeString": () => /* binding */ toShortTimeString,
/* harmony export */   "equals": () => /* binding */ equals,
/* harmony export */   "compare": () => /* binding */ compare,
/* harmony export */   "compareTo": () => /* binding */ compareTo,
/* harmony export */   "op_Addition": () => /* binding */ op_Addition,
/* harmony export */   "op_Subtraction": () => /* binding */ op_Subtraction,
/* harmony export */   "isDaylightSavingTime": () => /* binding */ isDaylightSavingTime,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Long_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Long.js */ "./src/DevTools/.fable/fable-library.3.0.5/Long.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util.js */ "./src/DevTools/.fable/fable-library.3.0.5/Util.js");
/**
 * DateTimeOffset functions.
 *
 * Note: Date instances are always DateObjects in local
 * timezone (because JS dates are all kinds of messed up).
 * A local date returns UTC epoc when `.getTime()` is called.
 *
 * Basically; invariant: date.getTime() always return UTC time.
 */


const offsetRegex = /(?:Z|[+-](\d+):?([0-5]?\d)?)\s*$/;
function dateOffsetToString(offset) {
    const isMinus = offset < 0;
    offset = Math.abs(offset);
    const hours = ~~(offset / 3600000);
    const minutes = (offset % 3600000) / 60000;
    return (isMinus ? "-" : "+") +
        (0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.padWithZeros)(hours, 2) + ":" +
        (0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.padWithZeros)(minutes, 2);
}
function dateToHalfUTCString(date, half) {
    const str = date.toISOString();
    return half === "first"
        ? str.substring(0, str.indexOf("T"))
        : str.substring(str.indexOf("T") + 1, str.length - 1);
}
function dateToISOString(d, utc) {
    if (utc) {
        return d.toISOString();
    }
    else {
        // JS Date is always local
        const printOffset = d.kind == null ? true : d.kind === 2 /* Local */;
        return (0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.padWithZeros)(d.getFullYear(), 4) + "-" +
            (0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.padWithZeros)(d.getMonth() + 1, 2) + "-" +
            (0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.padWithZeros)(d.getDate(), 2) + "T" +
            (0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.padWithZeros)(d.getHours(), 2) + ":" +
            (0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.padWithZeros)(d.getMinutes(), 2) + ":" +
            (0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.padWithZeros)(d.getSeconds(), 2) + "." +
            (0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.padWithZeros)(d.getMilliseconds(), 3) +
            (printOffset ? dateOffsetToString(d.getTimezoneOffset() * -60000) : "");
    }
}
function dateToISOStringWithOffset(dateWithOffset, offset) {
    const str = dateWithOffset.toISOString();
    return str.substring(0, str.length - 1) + dateOffsetToString(offset);
}
function dateToStringWithCustomFormat(date, format, utc) {
    return format.replace(/(\w)\1*/g, (match) => {
        let rep = Number.NaN;
        switch (match.substring(0, 1)) {
            case "y":
                const y = utc ? date.getUTCFullYear() : date.getFullYear();
                rep = match.length < 4 ? y % 100 : y;
                break;
            case "M":
                rep = (utc ? date.getUTCMonth() : date.getMonth()) + 1;
                break;
            case "d":
                rep = utc ? date.getUTCDate() : date.getDate();
                break;
            case "H":
                rep = utc ? date.getUTCHours() : date.getHours();
                break;
            case "h":
                const h = utc ? date.getUTCHours() : date.getHours();
                rep = h > 12 ? h % 12 : h;
                break;
            case "m":
                rep = utc ? date.getUTCMinutes() : date.getMinutes();
                break;
            case "s":
                rep = utc ? date.getUTCSeconds() : date.getSeconds();
                break;
            case "f":
                rep = utc ? date.getUTCMilliseconds() : date.getMilliseconds();
                break;
        }
        if (Number.isNaN(rep)) {
            return match;
        }
        else {
            return (rep < 10 && match.length > 1) ? "0" + rep : "" + rep;
        }
    });
}
function dateToStringWithOffset(date, format) {
    var _a, _b, _c;
    const d = new Date(date.getTime() + ((_a = date.offset) !== null && _a !== void 0 ? _a : 0));
    if (typeof format !== "string") {
        return d.toISOString().replace(/\.\d+/, "").replace(/[A-Z]|\.\d+/g, " ") + dateOffsetToString(((_b = date.offset) !== null && _b !== void 0 ? _b : 0));
    }
    else if (format.length === 1) {
        switch (format) {
            case "D":
            case "d": return dateToHalfUTCString(d, "first");
            case "T":
            case "t": return dateToHalfUTCString(d, "second");
            case "O":
            case "o": return dateToISOStringWithOffset(d, ((_c = date.offset) !== null && _c !== void 0 ? _c : 0));
            default: throw new Error("Unrecognized Date print format");
        }
    }
    else {
        return dateToStringWithCustomFormat(d, format, true);
    }
}
function dateToStringWithKind(date, format) {
    const utc = date.kind === 1 /* UTC */;
    if (typeof format !== "string") {
        return utc ? date.toUTCString() : date.toLocaleString();
    }
    else if (format.length === 1) {
        switch (format) {
            case "D":
            case "d":
                return utc ? dateToHalfUTCString(date, "first") : date.toLocaleDateString();
            case "T":
            case "t":
                return utc ? dateToHalfUTCString(date, "second") : date.toLocaleTimeString();
            case "O":
            case "o":
                return dateToISOString(date, utc);
            default:
                throw new Error("Unrecognized Date print format");
        }
    }
    else {
        return dateToStringWithCustomFormat(date, format, utc);
    }
}
function toString(date, format, _provider) {
    return date.offset != null
        ? dateToStringWithOffset(date, format)
        : dateToStringWithKind(date, format);
}
function DateTime(value, kind) {
    const d = new Date(value);
    d.kind = (kind == null ? 0 /* Unspecified */ : kind) | 0;
    return d;
}
function fromTicks(ticks, kind) {
    ticks = (0,_Long_js__WEBPACK_IMPORTED_MODULE_0__.fromValue)(ticks);
    kind = kind != null ? kind : 0 /* Unspecified */;
    let date = DateTime((0,_Long_js__WEBPACK_IMPORTED_MODULE_0__.ticksToUnixEpochMilliseconds)(ticks), kind);
    // Ticks are local to offset (in this case, either UTC or Local/Unknown).
    // If kind is anything but UTC, that means that the tick number was not
    // in utc, thus getTime() cannot return UTC, and needs to be shifted.
    if (kind !== 1 /* UTC */) {
        date = DateTime(date.getTime() - (0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.dateOffset)(date), kind);
    }
    return date;
}
function fromDateTimeOffset(date, kind) {
    var _a;
    switch (kind) {
        case 1 /* UTC */: return DateTime(date.getTime(), 1 /* UTC */);
        case 2 /* Local */: return DateTime(date.getTime(), 2 /* Local */);
        default:
            const d = DateTime(date.getTime() + ((_a = date.offset) !== null && _a !== void 0 ? _a : 0), kind);
            return DateTime(d.getTime() - (0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.dateOffset)(d), kind);
    }
}
function getTicks(date) {
    return (0,_Long_js__WEBPACK_IMPORTED_MODULE_0__.unixEpochMillisecondsToTicks)(date.getTime(), (0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.dateOffset)(date));
}
function minValue() {
    // This is "0001-01-01T00:00:00.000Z", actual JS min value is -8640000000000000
    return DateTime(-62135596800000, 0 /* Unspecified */);
}
function maxValue() {
    // This is "9999-12-31T23:59:59.999Z", actual JS max value is 8640000000000000
    return DateTime(253402300799999, 0 /* Unspecified */);
}
function parseRaw(input) {
    if (input === null) {
        throw new Error("Value cannot be null when parsing DateTime");
    }
    if (input.trim() === "") {
        throw new Error("An empty string is not recognized as a valid DateTime");
    }
    let date = new Date(input);
    if (isNaN(date.getTime())) {
        // Try to check strings JS Date cannot parse (see #1045, #1422)
        // tslint:disable-next-line:max-line-length
        const m = /^\s*(\d+[^\w\s:]\d+[^\w\s:]\d+)?\s*(\d+:\d+(?::\d+(?:\.\d+)?)?)?\s*([AaPp][Mm])?\s*([+-]\d+(?::\d+)?)?\s*$/.exec(input);
        if (m != null) {
            let baseDate;
            let timeInSeconds = 0;
            if (m[2] != null) {
                const timeParts = m[2].split(":");
                timeInSeconds =
                    parseInt(timeParts[0], 10) * 3600 +
                        parseInt(timeParts[1] || "0", 10) * 60 +
                        parseFloat(timeParts[2] || "0");
                if (m[3] != null && m[3].toUpperCase() === "PM") {
                    timeInSeconds += 720;
                }
            }
            if (m[4] != null) { // There's an offset, parse as UTC
                if (m[1] != null) {
                    baseDate = new Date(m[1] + " UTC");
                }
                else {
                    const d = new Date();
                    baseDate = new Date(d.getUTCFullYear() + "/" + (d.getUTCMonth() + 1) + "/" + d.getUTCDate());
                }
                const offsetParts = m[4].substr(1).split(":");
                let offsetInMinutes = parseInt(offsetParts[0], 10) * 60 + parseInt(offsetParts[1] || "0", 10);
                if (m[4][0] === "+") {
                    offsetInMinutes *= -1;
                }
                timeInSeconds += offsetInMinutes * 60;
            }
            else {
                if (m[1] != null) {
                    baseDate = new Date(m[1]);
                }
                else {
                    const d = new Date();
                    baseDate = new Date(d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate());
                }
            }
            date = new Date(baseDate.getTime() + timeInSeconds * 1000);
            // correct for daylight savings time
            date = new Date(date.getTime() + (date.getTimezoneOffset() - baseDate.getTimezoneOffset()) * 60000);
        }
        else {
            throw new Error("The string is not a valid Date.");
        }
    }
    return date;
}
function parse(str, detectUTC = false) {
    const date = parseRaw(str);
    const offset = offsetRegex.exec(str);
    // .NET always parses DateTime as Local if there's offset info (even "Z")
    // Newtonsoft.Json uses UTC if the offset is "Z"
    const kind = offset != null
        ? (detectUTC && offset[0] === "Z" ? 1 /* UTC */ : 2 /* Local */)
        : 0 /* Unspecified */;
    return DateTime(date.getTime(), kind);
}
function tryParse(v, defValue) {
    try {
        defValue.contents = parse(v);
        return true;
    }
    catch (_err) {
        return false;
    }
}
function create(year, month, day, h = 0, m = 0, s = 0, ms = 0, kind) {
    const dateValue = kind === 1 /* UTC */
        ? Date.UTC(year, month - 1, day, h, m, s, ms)
        : new Date(year, month - 1, day, h, m, s, ms).getTime();
    if (isNaN(dateValue)) {
        throw new Error("The parameters describe an unrepresentable Date.");
    }
    const date = DateTime(dateValue, kind);
    if (year <= 99) {
        date.setFullYear(year, month - 1, day);
    }
    return date;
}
function now() {
    return DateTime(Date.now(), 2 /* Local */);
}
function utcNow() {
    return DateTime(Date.now(), 1 /* UTC */);
}
function today() {
    return date(now());
}
function isLeapYear(year) {
    return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0;
}
function daysInMonth(year, month) {
    return month === 2
        ? (isLeapYear(year) ? 29 : 28)
        : (month >= 8 ? (month % 2 === 0 ? 31 : 30) : (month % 2 === 0 ? 30 : 31));
}
function toUniversalTime(date) {
    return date.kind === 1 /* UTC */ ? date : DateTime(date.getTime(), 1 /* UTC */);
}
function toLocalTime(date) {
    return date.kind === 2 /* Local */ ? date : DateTime(date.getTime(), 2 /* Local */);
}
function specifyKind(d, kind) {
    return create(year(d), month(d), day(d), hour(d), minute(d), second(d), millisecond(d), kind);
}
function timeOfDay(d) {
    return hour(d) * 3600000
        + minute(d) * 60000
        + second(d) * 1000
        + millisecond(d);
}
function date(d) {
    return create(year(d), month(d), day(d), 0, 0, 0, 0, d.kind);
}
function day(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCDate() : d.getDate();
}
function hour(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCHours() : d.getHours();
}
function millisecond(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCMilliseconds() : d.getMilliseconds();
}
function minute(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCMinutes() : d.getMinutes();
}
function month(d) {
    return (d.kind === 1 /* UTC */ ? d.getUTCMonth() : d.getMonth()) + 1;
}
function second(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCSeconds() : d.getSeconds();
}
function year(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCFullYear() : d.getFullYear();
}
function dayOfWeek(d) {
    return d.kind === 1 /* UTC */ ? d.getUTCDay() : d.getDay();
}
function dayOfYear(d) {
    const _year = year(d);
    const _month = month(d);
    let _day = day(d);
    for (let i = 1; i < _month; i++) {
        _day += daysInMonth(_year, i);
    }
    return _day;
}
function add(d, ts) {
    const newDate = DateTime(d.getTime() + ts, d.kind);
    if (d.kind === 2 /* Local */) {
        const oldTzOffset = d.getTimezoneOffset();
        const newTzOffset = newDate.getTimezoneOffset();
        return oldTzOffset !== newTzOffset
            ? DateTime(newDate.getTime() + (newTzOffset - oldTzOffset) * 60000, d.kind)
            : newDate;
    }
    else {
        return newDate;
    }
}
function addDays(d, v) {
    return add(d, v * 86400000);
}
function addHours(d, v) {
    return add(d, v * 3600000);
}
function addMinutes(d, v) {
    return add(d, v * 60000);
}
function addSeconds(d, v) {
    return add(d, v * 1000);
}
function addMilliseconds(d, v) {
    return add(d, v);
}
function addYears(d, v) {
    const newMonth = month(d);
    const newYear = year(d) + v;
    const _daysInMonth = daysInMonth(newYear, newMonth);
    const newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind);
}
function addMonths(d, v) {
    let newMonth = month(d) + v;
    let newMonth_ = 0;
    let yearOffset = 0;
    if (newMonth > 12) {
        newMonth_ = newMonth % 12;
        yearOffset = Math.floor(newMonth / 12);
        newMonth = newMonth_;
    }
    else if (newMonth < 1) {
        newMonth_ = 12 + newMonth % 12;
        yearOffset = Math.floor(newMonth / 12) + (newMonth_ === 12 ? -1 : 0);
        newMonth = newMonth_;
    }
    const newYear = year(d) + yearOffset;
    const _daysInMonth = daysInMonth(newYear, newMonth);
    const newDay = Math.min(_daysInMonth, day(d));
    return create(newYear, newMonth, newDay, hour(d), minute(d), second(d), millisecond(d), d.kind);
}
function subtract(d, that) {
    return typeof that === "number"
        ? add(d, -that)
        : d.getTime() - that.getTime();
}
function toLongDateString(d) {
    return d.toDateString();
}
function toShortDateString(d) {
    return d.toLocaleDateString();
}
function toLongTimeString(d) {
    return d.toLocaleTimeString();
}
function toShortTimeString(d) {
    return d.toLocaleTimeString().replace(/:\d\d(?!:)/, "");
}
function equals(d1, d2) {
    return d1.getTime() === d2.getTime();
}
const compare = _Util_js__WEBPACK_IMPORTED_MODULE_1__.compareDates;
const compareTo = _Util_js__WEBPACK_IMPORTED_MODULE_1__.compareDates;
function op_Addition(x, y) {
    return add(x, y);
}
function op_Subtraction(x, y) {
    return subtract(x, y);
}
function isDaylightSavingTime(x) {
    const jan = new Date(x.getFullYear(), 0, 1);
    const jul = new Date(x.getFullYear(), 6, 1);
    return isDST(jan.getTimezoneOffset(), jul.getTimezoneOffset(), x.getTimezoneOffset());
}
function isDST(janOffset, julOffset, tOffset) {
    return Math.min(janOffset, julOffset) === tOffset;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DateTime);


/***/ }),

/***/ "./src/DevTools/.fable/fable-library.3.0.5/Decimal.js":
/*!************************************************************!*\
  !*** ./src/DevTools/.fable/fable-library.3.0.5/Decimal.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "get_Zero": () => /* binding */ get_Zero,
/* harmony export */   "get_One": () => /* binding */ get_One,
/* harmony export */   "get_MinusOne": () => /* binding */ get_MinusOne,
/* harmony export */   "get_MaxValue": () => /* binding */ get_MaxValue,
/* harmony export */   "get_MinValue": () => /* binding */ get_MinValue,
/* harmony export */   "compare": () => /* binding */ compare,
/* harmony export */   "equals": () => /* binding */ equals,
/* harmony export */   "abs": () => /* binding */ abs,
/* harmony export */   "round": () => /* binding */ round,
/* harmony export */   "truncate": () => /* binding */ truncate,
/* harmony export */   "ceiling": () => /* binding */ ceiling,
/* harmony export */   "floor": () => /* binding */ floor,
/* harmony export */   "pow": () => /* binding */ pow,
/* harmony export */   "sqrt": () => /* binding */ sqrt,
/* harmony export */   "op_Addition": () => /* binding */ op_Addition,
/* harmony export */   "op_Subtraction": () => /* binding */ op_Subtraction,
/* harmony export */   "op_Multiply": () => /* binding */ op_Multiply,
/* harmony export */   "op_Division": () => /* binding */ op_Division,
/* harmony export */   "op_Modulus": () => /* binding */ op_Modulus,
/* harmony export */   "op_UnaryNegation": () => /* binding */ op_UnaryNegation,
/* harmony export */   "add": () => /* binding */ add,
/* harmony export */   "subtract": () => /* binding */ subtract,
/* harmony export */   "multiply": () => /* binding */ multiply,
/* harmony export */   "divide": () => /* binding */ divide,
/* harmony export */   "remainder": () => /* binding */ remainder,
/* harmony export */   "negate": () => /* binding */ negate,
/* harmony export */   "toString": () => /* binding */ toString,
/* harmony export */   "tryParse": () => /* binding */ tryParse,
/* harmony export */   "parse": () => /* binding */ parse,
/* harmony export */   "toNumber": () => /* binding */ toNumber,
/* harmony export */   "fromIntArray": () => /* binding */ fromIntArray,
/* harmony export */   "fromInts": () => /* binding */ fromInts,
/* harmony export */   "fromParts": () => /* binding */ fromParts,
/* harmony export */   "getBits": () => /* binding */ getBits,
/* harmony export */   "makeRangeStepFunction": () => /* binding */ makeRangeStepFunction
/* harmony export */ });
/* harmony import */ var _lib_big_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/big.js */ "./src/DevTools/.fable/fable-library.3.0.5/lib/big.js");
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Types.js */ "./src/DevTools/.fable/fable-library.3.0.5/Types.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_big_js__WEBPACK_IMPORTED_MODULE_0__.default);
const get_Zero = new _lib_big_js__WEBPACK_IMPORTED_MODULE_0__.default(0);
const get_One = new _lib_big_js__WEBPACK_IMPORTED_MODULE_0__.default(1);
const get_MinusOne = new _lib_big_js__WEBPACK_IMPORTED_MODULE_0__.default(-1);
const get_MaxValue = new _lib_big_js__WEBPACK_IMPORTED_MODULE_0__.default("79228162514264337593543950335");
const get_MinValue = new _lib_big_js__WEBPACK_IMPORTED_MODULE_0__.default("-79228162514264337593543950335");
function compare(x, y) {
    return x.cmp(y);
}
function equals(x, y) {
    return !x.cmp(y);
}
function abs(x) {
    return x.abs();
}
function round(x, digits = 0) {
    return x.round(digits, 2 /* ROUND_HALF_EVEN */);
}
function truncate(x) {
    return x.round(0, 0 /* ROUND_DOWN */);
}
function ceiling(x) {
    return x.round(0, x.cmp(0) >= 0 ? 3 /* ROUND_UP */ : 0 /* ROUND_DOWN */);
}
function floor(x) {
    return x.round(0, x.cmp(0) >= 0 ? 0 /* ROUND_DOWN */ : 3 /* ROUND_UP */);
}
function pow(x, n) {
    return x.pow(n);
}
function sqrt(x) {
    return x.sqrt();
}
function op_Addition(x, y) {
    return x.add(y);
}
function op_Subtraction(x, y) {
    return x.sub(y);
}
function op_Multiply(x, y) {
    return x.mul(y);
}
function op_Division(x, y) {
    return x.div(y);
}
function op_Modulus(x, y) {
    return x.mod(y);
}
function op_UnaryNegation(x) {
    const x2 = new _lib_big_js__WEBPACK_IMPORTED_MODULE_0__.default(x);
    x2.s = -x2.s || 0;
    return x2;
}
const add = op_Addition;
const subtract = op_Subtraction;
const multiply = op_Multiply;
const divide = op_Division;
const remainder = op_Modulus;
const negate = op_UnaryNegation;
function toString(x) {
    return x.toString();
}
function tryParse(str, defValue) {
    try {
        defValue.contents = new _lib_big_js__WEBPACK_IMPORTED_MODULE_0__.default(str.trim());
        return true;
    }
    catch (_a) {
        return false;
    }
}
function parse(str) {
    const defValue = new _Types_js__WEBPACK_IMPORTED_MODULE_1__.FSharpRef(get_Zero);
    if (tryParse(str, defValue)) {
        return defValue.contents;
    }
    else {
        throw new Error("Input string was not in a correct format.");
    }
}
function toNumber(x) {
    return +x;
}
function decimalToHex(dec, bitSize) {
    const hex = new Uint8Array(bitSize / 4 | 0);
    let hexCount = 1;
    for (let d = 0; d < dec.length; d++) {
        let value = dec[d];
        for (let i = 0; i < hexCount; i++) {
            const digit = hex[i] * 10 + value | 0;
            hex[i] = digit & 0xF;
            value = digit >> 4;
        }
        if (value !== 0) {
            hex[hexCount++] = value;
        }
    }
    return hex.slice(0, hexCount); // digits in reverse order
}
function hexToDecimal(hex, bitSize) {
    const dec = new Uint8Array(bitSize * 301 / 1000 + 1 | 0);
    let decCount = 1;
    for (let d = hex.length - 1; d >= 0; d--) {
        let carry = hex[d];
        for (let i = 0; i < decCount; i++) {
            const val = dec[i] * 16 + carry | 0;
            dec[i] = (val % 10) | 0;
            carry = (val / 10) | 0;
        }
        while (carry > 0) {
            dec[decCount++] = (carry % 10) | 0;
            carry = (carry / 10) | 0;
        }
    }
    return dec.slice(0, decCount); // digits in reverse order
}
function setInt32Bits(hexDigits, bits, offset) {
    for (let i = 0; i < 8; i++) {
        hexDigits[offset + i] = (bits >> (i * 4)) & 0xF;
    }
}
function getInt32Bits(hexDigits, offset) {
    let bits = 0;
    for (let i = 0; i < 8; i++) {
        bits = bits | (hexDigits[offset + i] << (i * 4));
    }
    return bits;
}
function fromIntArray(bits) {
    return fromInts(bits[0], bits[1], bits[2], bits[3]);
}
function fromInts(low, mid, high, signExp) {
    const isNegative = signExp < 0;
    const scale = (signExp >> 16) & 0x7F;
    return fromParts(low, mid, high, isNegative, scale);
}
function fromParts(low, mid, high, isNegative, scale) {
    const bitSize = 96;
    const hexDigits = new Uint8Array(bitSize / 4);
    setInt32Bits(hexDigits, low, 0);
    setInt32Bits(hexDigits, mid, 8);
    setInt32Bits(hexDigits, high, 16);
    const decDigits = hexToDecimal(hexDigits, bitSize);
    scale = scale & 0x7F;
    const big = new _lib_big_js__WEBPACK_IMPORTED_MODULE_0__.default(0);
    big.c = Array.from(decDigits.reverse());
    big.e = decDigits.length - scale - 1;
    big.s = isNegative ? -1 : 1;
    const d = new _lib_big_js__WEBPACK_IMPORTED_MODULE_0__.default(big);
    return d;
}
function getBits(d) {
    const bitSize = 96;
    const decDigits = Uint8Array.from(d.c);
    const hexDigits = decimalToHex(decDigits, bitSize);
    const low = getInt32Bits(hexDigits, 0);
    const mid = getInt32Bits(hexDigits, 8);
    const high = getInt32Bits(hexDigits, 16);
    const decStr = d.toString();
    const dotPos = decStr.indexOf(".");
    const scale = dotPos < 0 ? 0 : decStr.length - dotPos - 1;
    const signExp = ((scale & 0x7F) << 16) | (d.s < 0 ? 0x80000000 : 0);
    return [low, mid, high, signExp];
}
function makeRangeStepFunction(step, last) {
    const stepComparedWithZero = step.cmp(get_Zero);
    if (stepComparedWithZero === 0) {
        throw new Error("The step of a range cannot be zero");
    }
    const stepGreaterThanZero = stepComparedWithZero > 0;
    return (x) => {
        const comparedWithLast = x.cmp(last);
        if ((stepGreaterThanZero && comparedWithLast <= 0)
            || (!stepGreaterThanZero && comparedWithLast >= 0)) {
            return [x, op_Addition(x, step)];
        }
        else {
            return undefined;
        }
    };
}


/***/ }),

/***/ "./src/DevTools/.fable/fable-library.3.0.5/Int32.js":
/*!**********************************************************!*\
  !*** ./src/DevTools/.fable/fable-library.3.0.5/Int32.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NumberStyles": () => /* binding */ NumberStyles,
/* harmony export */   "isValid": () => /* binding */ isValid,
/* harmony export */   "parse": () => /* binding */ parse,
/* harmony export */   "tryParse": () => /* binding */ tryParse,
/* harmony export */   "op_UnaryNegation_Int8": () => /* binding */ op_UnaryNegation_Int8,
/* harmony export */   "op_UnaryNegation_Int16": () => /* binding */ op_UnaryNegation_Int16,
/* harmony export */   "op_UnaryNegation_Int32": () => /* binding */ op_UnaryNegation_Int32
/* harmony export */ });
// export type decimal = Decimal;
var NumberStyles;
(function (NumberStyles) {
    // None = 0x00000000,
    // AllowLeadingWhite = 0x00000001,
    // AllowTrailingWhite = 0x00000002,
    // AllowLeadingSign = 0x00000004,
    // AllowTrailingSign = 0x00000008,
    // AllowParentheses = 0x00000010,
    // AllowDecimalPoint = 0x00000020,
    // AllowThousands = 0x00000040,
    // AllowExponent = 0x00000080,
    // AllowCurrencySymbol = 0x00000100,
    NumberStyles[NumberStyles["AllowHexSpecifier"] = 512] = "AllowHexSpecifier";
    // Integer = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign,
    // HexNumber = AllowLeadingWhite | AllowTrailingWhite | AllowHexSpecifier,
    // Number = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign |
    //          AllowTrailingSign | AllowDecimalPoint | AllowThousands,
    // Float = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign |
    //         AllowDecimalPoint | AllowExponent,
    // Currency = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign | AllowTrailingSign |
    //            AllowParentheses | AllowDecimalPoint | AllowThousands | AllowCurrencySymbol,
    // Any = AllowLeadingWhite | AllowTrailingWhite | AllowLeadingSign | AllowTrailingSign |
    //       AllowParentheses | AllowDecimalPoint | AllowThousands | AllowCurrencySymbol | AllowExponent,
})(NumberStyles || (NumberStyles = {}));
function validResponse(regexMatch, radix) {
    const [/*all*/ , sign, prefix, digits] = regexMatch;
    return {
        sign: sign || "",
        prefix: prefix || "",
        digits,
        radix,
    };
}
function getRange(unsigned, bitsize) {
    switch (bitsize) {
        case 8: return unsigned ? [0, 255] : [-128, 127];
        case 16: return unsigned ? [0, 65535] : [-32768, 32767];
        case 32: return unsigned ? [0, 4294967295] : [-2147483648, 2147483647];
        default: throw new Error("Invalid bit size.");
    }
}
function getInvalidDigits(radix) {
    switch (radix) {
        case 2: return /[^0-1]/;
        case 8: return /[^0-7]/;
        case 10: return /[^0-9]/;
        case 16: return /[^0-9a-fA-F]/;
        default:
            throw new Error("Invalid Base.");
    }
}
function getRadix(prefix, style) {
    if (style & NumberStyles.AllowHexSpecifier) {
        return 16;
    }
    else {
        switch (prefix) {
            case "0b":
            case "0B": return 2;
            case "0o":
            case "0O": return 8;
            case "0x":
            case "0X": return 16;
            default: return 10;
        }
    }
}
function isValid(str, style, radix) {
    const integerRegex = /^\s*([\+\-])?(0[xXoObB])?([0-9a-fA-F]+)\s*$/;
    const res = integerRegex.exec(str.replace(/_/g, ""));
    if (res != null) {
        const [/*all*/ , /*sign*/ , prefix, digits] = res;
        radix = radix || getRadix(prefix, style);
        const invalidDigits = getInvalidDigits(radix);
        if (!invalidDigits.test(digits)) {
            return validResponse(res, radix);
        }
    }
    return null;
}
function parse(str, style, unsigned, bitsize, radix) {
    const res = isValid(str, style, radix);
    if (res != null) {
        let v = Number.parseInt(res.sign + res.digits, res.radix);
        if (!Number.isNaN(v)) {
            const [umin, umax] = getRange(true, bitsize);
            if (!unsigned && res.radix !== 10 && v >= umin && v <= umax) {
                v = v << (32 - bitsize) >> (32 - bitsize);
            }
            const [min, max] = getRange(unsigned, bitsize);
            if (v >= min && v <= max) {
                return v;
            }
        }
    }
    throw new Error("Input string was not in a correct format.");
}
function tryParse(str, style, unsigned, bitsize, defValue) {
    try {
        defValue.contents = parse(str, style, unsigned, bitsize);
        return true;
    }
    catch (_a) {
        return false;
    }
}
function op_UnaryNegation_Int8(x) {
    return x === -128 ? x : -x;
}
function op_UnaryNegation_Int16(x) {
    return x === -32768 ? x : -x;
}
function op_UnaryNegation_Int32(x) {
    return x === -2147483648 ? x : -x;
}


/***/ }),

/***/ "./src/DevTools/.fable/fable-library.3.0.5/List.js":
/*!*********************************************************!*\
  !*** ./src/DevTools/.fable/fable-library.3.0.5/List.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "empty": () => /* binding */ empty,
/* harmony export */   "singleton": () => /* binding */ singleton,
/* harmony export */   "cons": () => /* binding */ cons,
/* harmony export */   "head": () => /* binding */ head,
/* harmony export */   "tryHead": () => /* binding */ tryHead,
/* harmony export */   "tail": () => /* binding */ tail,
/* harmony export */   "last": () => /* binding */ last,
/* harmony export */   "tryLast": () => /* binding */ tryLast,
/* harmony export */   "compareWith": () => /* binding */ compareWith,
/* harmony export */   "foldIndexedAux": () => /* binding */ foldIndexedAux,
/* harmony export */   "foldIndexed": () => /* binding */ foldIndexed,
/* harmony export */   "fold": () => /* binding */ fold,
/* harmony export */   "reverse": () => /* binding */ reverse,
/* harmony export */   "foldBack": () => /* binding */ foldBack,
/* harmony export */   "toSeq": () => /* binding */ toSeq,
/* harmony export */   "ofSeq": () => /* binding */ ofSeq,
/* harmony export */   "concat": () => /* binding */ concat,
/* harmony export */   "foldIndexed2Aux": () => /* binding */ foldIndexed2Aux,
/* harmony export */   "foldIndexed2": () => /* binding */ foldIndexed2,
/* harmony export */   "fold2": () => /* binding */ fold2,
/* harmony export */   "foldBack2": () => /* binding */ foldBack2,
/* harmony export */   "unfold": () => /* binding */ unfold,
/* harmony export */   "foldIndexed3Aux": () => /* binding */ foldIndexed3Aux,
/* harmony export */   "foldIndexed3": () => /* binding */ foldIndexed3,
/* harmony export */   "fold3": () => /* binding */ fold3,
/* harmony export */   "scan": () => /* binding */ scan,
/* harmony export */   "scanBack": () => /* binding */ scanBack,
/* harmony export */   "length": () => /* binding */ length,
/* harmony export */   "append": () => /* binding */ append,
/* harmony export */   "collect": () => /* binding */ collect,
/* harmony export */   "map": () => /* binding */ map,
/* harmony export */   "mapIndexed": () => /* binding */ mapIndexed,
/* harmony export */   "indexed": () => /* binding */ indexed,
/* harmony export */   "map2": () => /* binding */ map2,
/* harmony export */   "mapIndexed2": () => /* binding */ mapIndexed2,
/* harmony export */   "map3": () => /* binding */ map3,
/* harmony export */   "mapIndexed3": () => /* binding */ mapIndexed3,
/* harmony export */   "mapFold": () => /* binding */ mapFold,
/* harmony export */   "mapFoldBack": () => /* binding */ mapFoldBack,
/* harmony export */   "iterate": () => /* binding */ iterate,
/* harmony export */   "iterate2": () => /* binding */ iterate2,
/* harmony export */   "iterateIndexed": () => /* binding */ iterateIndexed,
/* harmony export */   "iterateIndexed2": () => /* binding */ iterateIndexed2,
/* harmony export */   "ofArrayWithTail": () => /* binding */ ofArrayWithTail,
/* harmony export */   "ofArray": () => /* binding */ ofArray,
/* harmony export */   "isEmpty": () => /* binding */ isEmpty,
/* harmony export */   "tryPickIndexedAux": () => /* binding */ tryPickIndexedAux,
/* harmony export */   "tryPickIndexed": () => /* binding */ tryPickIndexed,
/* harmony export */   "tryPick": () => /* binding */ tryPick,
/* harmony export */   "pick": () => /* binding */ pick,
/* harmony export */   "tryFindIndexed": () => /* binding */ tryFindIndexed,
/* harmony export */   "tryFind": () => /* binding */ tryFind,
/* harmony export */   "findIndexed": () => /* binding */ findIndexed,
/* harmony export */   "find": () => /* binding */ find,
/* harmony export */   "findBack": () => /* binding */ findBack,
/* harmony export */   "tryFindBack": () => /* binding */ tryFindBack,
/* harmony export */   "tryFindIndex": () => /* binding */ tryFindIndex,
/* harmony export */   "tryFindIndexBack": () => /* binding */ tryFindIndexBack,
/* harmony export */   "findIndex": () => /* binding */ findIndex,
/* harmony export */   "findIndexBack": () => /* binding */ findIndexBack,
/* harmony export */   "item": () => /* binding */ item,
/* harmony export */   "tryItem": () => /* binding */ tryItem,
/* harmony export */   "filter": () => /* binding */ filter,
/* harmony export */   "partition": () => /* binding */ partition,
/* harmony export */   "choose": () => /* binding */ choose,
/* harmony export */   "contains": () => /* binding */ contains,
/* harmony export */   "except": () => /* binding */ except,
/* harmony export */   "initialize": () => /* binding */ initialize,
/* harmony export */   "replicate": () => /* binding */ replicate,
/* harmony export */   "reduce": () => /* binding */ reduce,
/* harmony export */   "reduceBack": () => /* binding */ reduceBack,
/* harmony export */   "forAll": () => /* binding */ forAll,
/* harmony export */   "forAll2": () => /* binding */ forAll2,
/* harmony export */   "exists": () => /* binding */ exists,
/* harmony export */   "exists2": () => /* binding */ exists2,
/* harmony export */   "unzip": () => /* binding */ unzip,
/* harmony export */   "unzip3": () => /* binding */ unzip3,
/* harmony export */   "zip": () => /* binding */ zip,
/* harmony export */   "zip3": () => /* binding */ zip3,
/* harmony export */   "sort": () => /* binding */ sort,
/* harmony export */   "sortBy": () => /* binding */ sortBy,
/* harmony export */   "sortDescending": () => /* binding */ sortDescending,
/* harmony export */   "sortByDescending": () => /* binding */ sortByDescending,
/* harmony export */   "sortWith": () => /* binding */ sortWith,
/* harmony export */   "sum": () => /* binding */ sum,
/* harmony export */   "sumBy": () => /* binding */ sumBy,
/* harmony export */   "maxBy": () => /* binding */ maxBy,
/* harmony export */   "max": () => /* binding */ max,
/* harmony export */   "minBy": () => /* binding */ minBy,
/* harmony export */   "min": () => /* binding */ min,
/* harmony export */   "average": () => /* binding */ average,
/* harmony export */   "averageBy": () => /* binding */ averageBy,
/* harmony export */   "permute": () => /* binding */ permute,
/* harmony export */   "chunkBySize": () => /* binding */ chunkBySize,
/* harmony export */   "skip": () => /* binding */ skip,
/* harmony export */   "skipWhile": () => /* binding */ skipWhile,
/* harmony export */   "takeSplitAux": () => /* binding */ takeSplitAux,
/* harmony export */   "take": () => /* binding */ take,
/* harmony export */   "takeWhile": () => /* binding */ takeWhile,
/* harmony export */   "truncate": () => /* binding */ truncate,
/* harmony export */   "splitAt": () => /* binding */ splitAt,
/* harmony export */   "outOfRange": () => /* binding */ outOfRange,
/* harmony export */   "getSlice": () => /* binding */ getSlice,
/* harmony export */   "distinctBy": () => /* binding */ distinctBy,
/* harmony export */   "distinct": () => /* binding */ distinct,
/* harmony export */   "exactlyOne": () => /* binding */ exactlyOne,
/* harmony export */   "groupBy": () => /* binding */ groupBy,
/* harmony export */   "countBy": () => /* binding */ countBy,
/* harmony export */   "where": () => /* binding */ where,
/* harmony export */   "pairwise": () => /* binding */ pairwise,
/* harmony export */   "windowed": () => /* binding */ windowed,
/* harmony export */   "splitInto": () => /* binding */ splitInto,
/* harmony export */   "transpose": () => /* binding */ transpose
/* harmony export */ });
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types.js */ "./src/DevTools/.fable/fable-library.3.0.5/Types.js");
/* harmony import */ var _Option_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Option.js */ "./src/DevTools/.fable/fable-library.3.0.5/Option.js");
/* harmony import */ var _Seq_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Seq.js */ "./src/DevTools/.fable/fable-library.3.0.5/Seq.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util.js */ "./src/DevTools/.fable/fable-library.3.0.5/Util.js");
/* harmony import */ var _Array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Array.js */ "./src/DevTools/.fable/fable-library.3.0.5/Array.js");
/* harmony import */ var _MutableSet_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MutableSet.js */ "./src/DevTools/.fable/fable-library.3.0.5/MutableSet.js");
/* harmony import */ var _MapUtil_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./MapUtil.js */ "./src/DevTools/.fable/fable-library.3.0.5/MapUtil.js");
/* harmony import */ var _MutableMap_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./MutableMap.js */ "./src/DevTools/.fable/fable-library.3.0.5/MutableMap.js");










function empty() {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List();
}

function singleton(x) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(x, empty());
}

function cons(x, xs) {
    return new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(x, xs);
}

function head(_arg1) {
    if (_arg1.tail != null) {
        return _arg1.head;
    }
    else {
        throw (new Error("List was empty"));
    }
}

function tryHead(_arg1) {
    if (_arg1.tail != null) {
        return (0,_Option_js__WEBPACK_IMPORTED_MODULE_1__.some)(_arg1.head);
    }
    else {
        return void 0;
    }
}

function tail(_arg1) {
    if (_arg1.tail != null) {
        return _arg1.tail;
    }
    else {
        throw (new Error("List was empty"));
    }
}

function last(_arg1_mut) {
    last:
    while (true) {
        const _arg1 = _arg1_mut;
        if (_arg1.tail != null) {
            if (_arg1.tail.tail == null) {
                return _arg1.head;
            }
            else {
                _arg1_mut = _arg1.tail;
                continue last;
            }
        }
        else {
            throw (new Error("List was empty"));
        }
        break;
    }
}

function tryLast(_arg1_mut) {
    tryLast:
    while (true) {
        const _arg1 = _arg1_mut;
        if (_arg1.tail != null) {
            if (_arg1.tail.tail == null) {
                return (0,_Option_js__WEBPACK_IMPORTED_MODULE_1__.some)(_arg1.head);
            }
            else {
                _arg1_mut = _arg1.tail;
                continue tryLast;
            }
        }
        else {
            return void 0;
        }
        break;
    }
}

function compareWith(comparer, xs, ys) {
    if (xs === ys) {
        return 0;
    }
    else {
        const loop = (xs_1_mut, ys_1_mut) => {
            loop:
            while (true) {
                const xs_1 = xs_1_mut, ys_1 = ys_1_mut;
                const matchValue = [xs_1, ys_1];
                if (matchValue[0].tail != null) {
                    if (matchValue[1].tail != null) {
                        const matchValue_1 = comparer(matchValue[0].head, matchValue[1].head) | 0;
                        if (matchValue_1 === 0) {
                            xs_1_mut = matchValue[0].tail;
                            ys_1_mut = matchValue[1].tail;
                            continue loop;
                        }
                        else {
                            return matchValue_1 | 0;
                        }
                    }
                    else {
                        return 1;
                    }
                }
                else if (matchValue[1].tail == null) {
                    return 0;
                }
                else {
                    return -1;
                }
                break;
            }
        };
        return loop(xs, ys) | 0;
    }
}

function foldIndexedAux(f_mut, i_mut, acc_mut, _arg1_mut) {
    foldIndexedAux:
    while (true) {
        const f = f_mut, i = i_mut, acc = acc_mut, _arg1 = _arg1_mut;
        if (_arg1.tail != null) {
            f_mut = f;
            i_mut = (i + 1);
            acc_mut = f(i, acc, _arg1.head);
            _arg1_mut = _arg1.tail;
            continue foldIndexedAux;
        }
        else {
            return acc;
        }
        break;
    }
}

function foldIndexed(f, state, xs) {
    return foldIndexedAux(f, 0, state, xs);
}

function fold(f_mut, state_mut, xs_mut) {
    fold:
    while (true) {
        const f = f_mut, state = state_mut, xs = xs_mut;
        if (xs.tail != null) {
            f_mut = f;
            state_mut = f(state, xs.head);
            xs_mut = xs.tail;
            continue fold;
        }
        else {
            return state;
        }
        break;
    }
}

function reverse(xs) {
    return fold((acc, x) => (new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(x, acc)), new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), xs);
}

function foldBack(f, xs, state) {
    return fold((acc, x) => f(x, acc), state, reverse(xs));
}

function toSeq(xs) {
    return (0,_Seq_js__WEBPACK_IMPORTED_MODULE_2__.map)((x) => x, xs);
}

function ofSeq(xs) {
    return reverse((0,_Seq_js__WEBPACK_IMPORTED_MODULE_2__.fold)((acc, x) => (new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(x, acc)), new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), xs));
}

function concat(lists) {
    return reverse((0,_Seq_js__WEBPACK_IMPORTED_MODULE_2__.fold)((state, xs) => fold((acc, x) => (new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(x, acc)), state, xs), new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), lists));
}

function foldIndexed2Aux(f_mut, i_mut, acc_mut, bs_mut, cs_mut) {
    foldIndexed2Aux:
    while (true) {
        const f = f_mut, i = i_mut, acc = acc_mut, bs = bs_mut, cs = cs_mut;
        const matchValue = [bs, cs];
        let pattern_matching_result, x, xs, y, ys;
        if (matchValue[0].tail != null) {
            if (matchValue[1].tail != null) {
                pattern_matching_result = 1;
                x = matchValue[0].head;
                xs = matchValue[0].tail;
                y = matchValue[1].head;
                ys = matchValue[1].tail;
            }
            else {
                pattern_matching_result = 2;
            }
        }
        else if (matchValue[1].tail == null) {
            pattern_matching_result = 0;
        }
        else {
            pattern_matching_result = 2;
        }
        switch (pattern_matching_result) {
            case 0: {
                return acc;
            }
            case 1: {
                f_mut = f;
                i_mut = (i + 1);
                acc_mut = f(i, acc, x, y);
                bs_mut = xs;
                cs_mut = ys;
                continue foldIndexed2Aux;
            }
            case 2: {
                throw (new Error("Lists had different lengths"));
            }
        }
        break;
    }
}

function foldIndexed2(f, state, xs, ys) {
    return foldIndexed2Aux(f, 0, state, xs, ys);
}

function fold2(f, state, xs, ys) {
    return (0,_Seq_js__WEBPACK_IMPORTED_MODULE_2__.fold2)(f, state, xs, ys);
}

function foldBack2(f, xs, ys, state) {
    return (0,_Seq_js__WEBPACK_IMPORTED_MODULE_2__.foldBack2)(f, xs, ys, state);
}

function unfold(f, state) {
    const unfoldInner = (acc_mut, state_1_mut) => {
        unfoldInner:
        while (true) {
            const acc = acc_mut, state_1 = state_1_mut;
            const matchValue = f(state_1);
            if (matchValue != null) {
                acc_mut = (new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(matchValue[0], acc));
                state_1_mut = matchValue[1];
                continue unfoldInner;
            }
            else {
                return reverse(acc);
            }
            break;
        }
    };
    return unfoldInner(new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), state);
}

function foldIndexed3Aux(f_mut, i_mut, acc_mut, bs_mut, cs_mut, ds_mut) {
    foldIndexed3Aux:
    while (true) {
        const f = f_mut, i = i_mut, acc = acc_mut, bs = bs_mut, cs = cs_mut, ds = ds_mut;
        const matchValue = [bs, cs, ds];
        let pattern_matching_result, x, xs, y, ys, z, zs;
        if (matchValue[0].tail != null) {
            if (matchValue[1].tail != null) {
                if (matchValue[2].tail != null) {
                    pattern_matching_result = 1;
                    x = matchValue[0].head;
                    xs = matchValue[0].tail;
                    y = matchValue[1].head;
                    ys = matchValue[1].tail;
                    z = matchValue[2].head;
                    zs = matchValue[2].tail;
                }
                else {
                    pattern_matching_result = 2;
                }
            }
            else {
                pattern_matching_result = 2;
            }
        }
        else if (matchValue[1].tail == null) {
            if (matchValue[2].tail == null) {
                pattern_matching_result = 0;
            }
            else {
                pattern_matching_result = 2;
            }
        }
        else {
            pattern_matching_result = 2;
        }
        switch (pattern_matching_result) {
            case 0: {
                return acc;
            }
            case 1: {
                f_mut = f;
                i_mut = (i + 1);
                acc_mut = f(i, acc, x, y, z);
                bs_mut = xs;
                cs_mut = ys;
                ds_mut = zs;
                continue foldIndexed3Aux;
            }
            case 2: {
                throw (new Error("Lists had different lengths"));
            }
        }
        break;
    }
}

function foldIndexed3(f, seed, xs, ys, zs) {
    return foldIndexed3Aux(f, 0, seed, xs, ys, zs);
}

function fold3(f, state, xs, ys, zs) {
    return foldIndexed3((_arg1, acc, x, y, z) => f(acc, x, y, z), state, xs, ys, zs);
}

function scan(f, state, xs) {
    return ofSeq((0,_Seq_js__WEBPACK_IMPORTED_MODULE_2__.scan)(f, state, xs));
}

function scanBack(f, xs, state) {
    return ofSeq((0,_Seq_js__WEBPACK_IMPORTED_MODULE_2__.scanBack)(f, xs, state));
}

function length(xs) {
    return fold((acc, _arg1) => (acc + 1), 0, xs);
}

function append(xs, ys) {
    return fold((acc, x) => (new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(x, acc)), ys, reverse(xs));
}

function collect(f, xs) {
    return ofSeq((0,_Seq_js__WEBPACK_IMPORTED_MODULE_2__.collect)(f, xs));
}

function map(f, xs) {
    return reverse(fold((acc, x) => (new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(f(x), acc)), new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), xs));
}

function mapIndexed(f, xs) {
    return reverse(foldIndexed((i, acc, x) => (new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(f(i, x), acc)), new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), xs));
}

function indexed(xs) {
    return mapIndexed((i, x) => [i, x], xs);
}

function map2(f, xs, ys) {
    return reverse(fold2((acc, x, y) => (new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(f(x, y), acc)), new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), xs, ys));
}

function mapIndexed2(f, xs, ys) {
    return reverse(foldIndexed2((i, acc, x, y) => (new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(f(i, x, y), acc)), new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), xs, ys));
}

function map3(f, xs, ys, zs) {
    return reverse(fold3((acc, x, y, z) => (new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(f(x, y, z), acc)), new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), xs, ys, zs));
}

function mapIndexed3(f, xs, ys, zs) {
    return reverse(foldIndexed3((i, acc, x, y, z) => (new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(f(i, x, y, z), acc)), new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), xs, ys, zs));
}

function mapFold(f, s, xs) {
    const patternInput_1 = fold((tupledArg, x) => {
        const patternInput = f(tupledArg[1], x);
        return [new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(patternInput[0], tupledArg[0]), patternInput[1]];
    }, [new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), s], xs);
    return [reverse(patternInput_1[0]), patternInput_1[1]];
}

function mapFoldBack(f, xs, s) {
    return mapFold((s_1, v) => f(v, s_1), s, reverse(xs));
}

function iterate(f, xs) {
    fold((unitVar0, x) => {
        f(x);
    }, void 0, xs);
}

function iterate2(f, xs, ys) {
    fold2((unitVar0, x, y) => {
        f(x, y);
    }, void 0, xs, ys);
}

function iterateIndexed(f, xs) {
    foldIndexed((i, unitVar1, x) => {
        f(i, x);
    }, void 0, xs);
}

function iterateIndexed2(f, xs, ys) {
    foldIndexed2((i, unitVar1, x, y) => {
        f(i, x, y);
    }, void 0, xs, ys);
}

function ofArrayWithTail(xs, tail_1) {
    let res = tail_1;
    for (let i = (0,_Util_js__WEBPACK_IMPORTED_MODULE_3__.count)(xs) - 1; i >= 0; i--) {
        res = (new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(xs[i], res));
    }
    return res;
}

function ofArray(xs) {
    return ofArrayWithTail(xs, new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List());
}

function isEmpty(_arg1) {
    if (_arg1.tail == null) {
        return true;
    }
    else {
        return false;
    }
}

function tryPickIndexedAux(f_mut, i_mut, _arg1_mut) {
    tryPickIndexedAux:
    while (true) {
        const f = f_mut, i = i_mut, _arg1 = _arg1_mut;
        if (_arg1.tail != null) {
            const result = f(i, _arg1.head);
            if (result == null) {
                f_mut = f;
                i_mut = (i + 1);
                _arg1_mut = _arg1.tail;
                continue tryPickIndexedAux;
            }
            else {
                return result;
            }
        }
        else {
            return void 0;
        }
        break;
    }
}

function tryPickIndexed(f, xs) {
    return tryPickIndexedAux(f, 0, xs);
}

function tryPick(f, xs) {
    return tryPickIndexed((_arg1, x) => f(x), xs);
}

function pick(f, xs) {
    const matchValue = tryPick(f, xs);
    if (matchValue != null) {
        return (0,_Option_js__WEBPACK_IMPORTED_MODULE_1__.value)(matchValue);
    }
    else {
        throw (new Error("List did not contain any matching elements"));
    }
}

function tryFindIndexed(f, xs) {
    return tryPickIndexed((i, x) => (f(i, x) ? (0,_Option_js__WEBPACK_IMPORTED_MODULE_1__.some)(x) : (void 0)), xs);
}

function tryFind(f, xs) {
    return tryPickIndexed((_arg1, x) => (f(x) ? (0,_Option_js__WEBPACK_IMPORTED_MODULE_1__.some)(x) : (void 0)), xs);
}

function findIndexed(f, xs) {
    const matchValue = tryFindIndexed(f, xs);
    if (matchValue != null) {
        return (0,_Option_js__WEBPACK_IMPORTED_MODULE_1__.value)(matchValue);
    }
    else {
        throw (new Error("List did not contain any matching elements"));
    }
}

function find(f, xs) {
    return findIndexed((_arg1, x) => f(x), xs);
}

function findBack(f, xs) {
    return find(f, reverse(xs));
}

function tryFindBack(f, xs) {
    return tryFind(f, reverse(xs));
}

function tryFindIndex(f, xs) {
    return tryPickIndexed((i, x) => (f(x) ? i : (void 0)), xs);
}

function tryFindIndexBack(f, xs) {
    return (0,_Array_js__WEBPACK_IMPORTED_MODULE_4__.tryFindIndexBack)(f, Array.from(xs));
}

function findIndex(f, xs) {
    const matchValue = tryFindIndex(f, xs);
    if (matchValue != null) {
        return matchValue | 0;
    }
    else {
        throw (new Error("List did not contain any matching elements"));
    }
}

function findIndexBack(f, xs) {
    return (0,_Array_js__WEBPACK_IMPORTED_MODULE_4__.findIndexBack)(f, Array.from(xs));
}

function item(n, xs) {
    return findIndexed((i, _arg1) => (n === i), xs);
}

function tryItem(n, xs) {
    return tryFindIndexed((i, _arg1) => (n === i), xs);
}

function filter(f, xs) {
    return reverse(fold((acc, x) => (f(x) ? (new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(x, acc)) : acc), new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), xs));
}

function partition(f, xs) {
    return fold((0,_Util_js__WEBPACK_IMPORTED_MODULE_3__.uncurry)(2, (tupledArg) => {
        const lacc = tupledArg[0];
        const racc = tupledArg[1];
        return (x) => (f(x) ? [new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(x, lacc), racc] : [lacc, new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(x, racc)]);
    }), [new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List()], reverse(xs));
}

function choose(f, xs) {
    return reverse(fold((acc, x) => {
        const matchValue = f(x);
        return (matchValue == null) ? acc : (new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List((0,_Option_js__WEBPACK_IMPORTED_MODULE_1__.value)(matchValue), acc));
    }, new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), xs));
}

function contains(value, list, eq) {
    const loop = (xs_mut) => {
        loop:
        while (true) {
            const xs = xs_mut;
            if (xs.tail != null) {
                if (eq.Equals(value, xs.head)) {
                    return true;
                }
                else {
                    xs_mut = xs.tail;
                    continue loop;
                }
            }
            else {
                return false;
            }
            break;
        }
    };
    return loop(list);
}

function except(itemsToExclude, array, eq) {
    if (isEmpty(array)) {
        return array;
    }
    else {
        const cached = new _MutableSet_js__WEBPACK_IMPORTED_MODULE_5__.HashSet(itemsToExclude, eq);
        return filter((arg00) => (0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_6__.addToSet)(arg00, cached), array);
    }
}

function initialize(n, f) {
    let xs = new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List();
    for (let i = 0; i <= (n - 1); i++) {
        xs = (new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(f(i), xs));
    }
    return reverse(xs);
}

function replicate(n, x) {
    return initialize(n, (_arg1) => x);
}

function reduce(f, _arg1) {
    if (_arg1.tail != null) {
        return fold(f, _arg1.head, _arg1.tail);
    }
    else {
        throw (new Error("List was empty"));
    }
}

function reduceBack(f, _arg1) {
    if (_arg1.tail != null) {
        return foldBack(f, _arg1.tail, _arg1.head);
    }
    else {
        throw (new Error("List was empty"));
    }
}

function forAll(f, xs) {
    return fold((acc, x) => (acc ? f(x) : false), true, xs);
}

function forAll2(f, xs, ys) {
    return fold2((acc, x, y) => (acc ? f(x, y) : false), true, xs, ys);
}

function exists(f_mut, _arg1_mut) {
    exists:
    while (true) {
        const f = f_mut, _arg1 = _arg1_mut;
        if (_arg1.tail != null) {
            if (f(_arg1.head)) {
                return true;
            }
            else {
                f_mut = f;
                _arg1_mut = _arg1.tail;
                continue exists;
            }
        }
        else {
            return false;
        }
        break;
    }
}

function exists2(f_mut, bs_mut, cs_mut) {
    exists2:
    while (true) {
        const f = f_mut, bs = bs_mut, cs = cs_mut;
        const matchValue = [bs, cs];
        let pattern_matching_result, x, xs, y, ys;
        if (matchValue[0].tail != null) {
            if (matchValue[1].tail != null) {
                pattern_matching_result = 1;
                x = matchValue[0].head;
                xs = matchValue[0].tail;
                y = matchValue[1].head;
                ys = matchValue[1].tail;
            }
            else {
                pattern_matching_result = 2;
            }
        }
        else if (matchValue[1].tail == null) {
            pattern_matching_result = 0;
        }
        else {
            pattern_matching_result = 2;
        }
        switch (pattern_matching_result) {
            case 0: {
                return false;
            }
            case 1: {
                if (f(x, y)) {
                    return true;
                }
                else {
                    f_mut = f;
                    bs_mut = xs;
                    cs_mut = ys;
                    continue exists2;
                }
            }
            case 2: {
                throw (new Error("Lists had different lengths"));
            }
        }
        break;
    }
}

function unzip(xs) {
    return foldBack((tupledArg, tupledArg_1) => [new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(tupledArg[0], tupledArg_1[0]), new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(tupledArg[1], tupledArg_1[1])], xs, [new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List()]);
}

function unzip3(xs) {
    return foldBack((tupledArg, tupledArg_1) => [new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(tupledArg[0], tupledArg_1[0]), new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(tupledArg[1], tupledArg_1[1]), new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(tupledArg[2], tupledArg_1[2])], xs, [new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List()]);
}

function zip(xs, ys) {
    return map2((x, y) => [x, y], xs, ys);
}

function zip3(xs, ys, zs) {
    return map3((x, y, z) => [x, y, z], xs, ys, zs);
}

function sort(xs, comparer) {
    let xs_1;
    return ofArray((xs_1 = Array.from(xs), (xs_1.sort(((x, y) => comparer.Compare(x, y))), xs_1)));
}

function sortBy(projection, xs, comparer) {
    let xs_1;
    return ofArray((xs_1 = Array.from(xs), (xs_1.sort(((x, y) => comparer.Compare(projection(x), projection(y)))), xs_1)));
}

function sortDescending(xs, comparer) {
    let xs_1;
    return ofArray((xs_1 = Array.from(xs), (xs_1.sort(((x, y) => (comparer.Compare(x, y) * -1))), xs_1)));
}

function sortByDescending(projection, xs, comparer) {
    let xs_1;
    return ofArray((xs_1 = Array.from(xs), (xs_1.sort(((x, y) => (comparer.Compare(projection(x), projection(y)) * -1))), xs_1)));
}

function sortWith(comparer, xs) {
    let comparer_1, xs_1;
    return ofArray((comparer_1 = comparer, (xs_1 = Array.from(xs), (xs_1.sort(comparer_1), xs_1))));
}

function sum(xs, adder) {
    return fold((acc, x) => adder.Add(acc, x), adder.GetZero(), xs);
}

function sumBy(f, xs, adder) {
    return fold((acc, x) => adder.Add(acc, f(x)), adder.GetZero(), xs);
}

function maxBy(projection, xs, comparer) {
    return reduce((x, y) => ((comparer.Compare(projection(y), projection(x)) > 0) ? y : x), xs);
}

function max(li, comparer) {
    return reduce((x, y) => ((comparer.Compare(y, x) > 0) ? y : x), li);
}

function minBy(projection, xs, comparer) {
    return reduce((x, y) => ((comparer.Compare(projection(y), projection(x)) > 0) ? x : y), xs);
}

function min(xs, comparer) {
    return reduce((x, y) => ((comparer.Compare(y, x) > 0) ? x : y), xs);
}

function average(xs, averager) {
    return averager.DivideByInt(fold((acc, x) => averager.Add(acc, x), averager.GetZero(), xs), length(xs));
}

function averageBy(f, xs, averager) {
    return averager.DivideByInt(fold((acc, x) => averager.Add(acc, f(x)), averager.GetZero(), xs), length(xs));
}

function permute(f, xs) {
    return ofArray((0,_Array_js__WEBPACK_IMPORTED_MODULE_4__.permute)(f, Array.from(xs)));
}

function chunkBySize(chunkSize, xs) {
    return map(ofArray, ofArray((0,_Array_js__WEBPACK_IMPORTED_MODULE_4__.chunkBySize)(chunkSize, Array.from(xs))));
}

function skip(i, xs) {
    const skipInner = (i_1_mut, xs_1_mut) => {
        skipInner:
        while (true) {
            const i_1 = i_1_mut, xs_1 = xs_1_mut;
            const matchValue = [i_1, xs_1];
            if (matchValue[0] === 0) {
                return xs_1;
            }
            else if (matchValue[1].tail != null) {
                i_1_mut = (i_1 - 1);
                xs_1_mut = matchValue[1].tail;
                continue skipInner;
            }
            else {
                throw (new Error("The input sequence has an insufficient number of elements."));
            }
            break;
        }
    };
    const matchValue_1 = [i, xs];
    if (matchValue_1[0] < 0) {
        throw (new Error("The input must be non-negative."));
    }
    else {
        let pattern_matching_result, i_4, xs_4;
        if (matchValue_1[0] === 0) {
            pattern_matching_result = 0;
        }
        else if (matchValue_1[0] === 1) {
            if (matchValue_1[1].tail != null) {
                pattern_matching_result = 1;
            }
            else {
                pattern_matching_result = 2;
                i_4 = matchValue_1[0];
                xs_4 = matchValue_1[1];
            }
        }
        else {
            pattern_matching_result = 2;
            i_4 = matchValue_1[0];
            xs_4 = matchValue_1[1];
        }
        switch (pattern_matching_result) {
            case 0: {
                return xs;
            }
            case 1: {
                return matchValue_1[1].tail;
            }
            case 2: {
                return skipInner(i_4, xs_4);
            }
        }
    }
}

function skipWhile(predicate_mut, xs_mut) {
    skipWhile:
    while (true) {
        const predicate = predicate_mut, xs = xs_mut;
        let pattern_matching_result, h_1, t_1;
        if (xs.tail != null) {
            if (predicate(xs.head)) {
                pattern_matching_result = 0;
                h_1 = xs.head;
                t_1 = xs.tail;
            }
            else {
                pattern_matching_result = 1;
            }
        }
        else {
            pattern_matching_result = 1;
        }
        switch (pattern_matching_result) {
            case 0: {
                predicate_mut = predicate;
                xs_mut = t_1;
                continue skipWhile;
            }
            case 1: {
                return xs;
            }
        }
        break;
    }
}

function takeSplitAux(error_mut, i_mut, acc_mut, xs_mut) {
    takeSplitAux:
    while (true) {
        const error = error_mut, i = i_mut, acc = acc_mut, xs = xs_mut;
        const matchValue = [i, xs];
        if (matchValue[0] === 0) {
            return [reverse(acc), xs];
        }
        else if (matchValue[1].tail != null) {
            error_mut = error;
            i_mut = (i - 1);
            acc_mut = (new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(matchValue[1].head, acc));
            xs_mut = matchValue[1].tail;
            continue takeSplitAux;
        }
        else if (error) {
            throw (new Error("The input sequence has an insufficient number of elements."));
        }
        else {
            return [reverse(acc), xs];
        }
        break;
    }
}

function take(i, xs) {
    const matchValue = [i, xs];
    if (matchValue[0] < 0) {
        throw (new Error("The input must be non-negative."));
    }
    else {
        let pattern_matching_result, i_3, xs_1;
        if (matchValue[0] === 0) {
            pattern_matching_result = 0;
        }
        else if (matchValue[0] === 1) {
            if (matchValue[1].tail != null) {
                pattern_matching_result = 1;
            }
            else {
                pattern_matching_result = 2;
                i_3 = matchValue[0];
                xs_1 = matchValue[1];
            }
        }
        else {
            pattern_matching_result = 2;
            i_3 = matchValue[0];
            xs_1 = matchValue[1];
        }
        switch (pattern_matching_result) {
            case 0: {
                return new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List();
            }
            case 1: {
                return new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(matchValue[1].head, new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List());
            }
            case 2: {
                return takeSplitAux(true, i_3, new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), xs_1)[0];
            }
        }
    }
}

function takeWhile(predicate, xs) {
    if (xs.tail != null) {
        if (xs.tail.tail == null) {
            if (predicate(xs.head)) {
                return xs;
            }
            else {
                return xs.tail;
            }
        }
        else if (!predicate(xs.head)) {
            return new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List();
        }
        else {
            return new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(xs.head, takeWhile(predicate, xs.tail));
        }
    }
    else {
        return xs;
    }
}

function truncate(i, xs) {
    const matchValue = [i, xs];
    if (matchValue[0] < 0) {
        throw (new Error("The input must be non-negative."));
    }
    else {
        let pattern_matching_result, i_3, xs_1;
        if (matchValue[0] === 0) {
            pattern_matching_result = 0;
        }
        else if (matchValue[0] === 1) {
            if (matchValue[1].tail != null) {
                pattern_matching_result = 1;
            }
            else {
                pattern_matching_result = 2;
                i_3 = matchValue[0];
                xs_1 = matchValue[1];
            }
        }
        else {
            pattern_matching_result = 2;
            i_3 = matchValue[0];
            xs_1 = matchValue[1];
        }
        switch (pattern_matching_result) {
            case 0: {
                return new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List();
            }
            case 1: {
                return new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(matchValue[1].head, new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List());
            }
            case 2: {
                return takeSplitAux(false, i_3, new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), xs_1)[0];
            }
        }
    }
}

function splitAt(i, xs) {
    const matchValue = [i, xs];
    if (matchValue[0] < 0) {
        throw (new Error("The input must be non-negative."));
    }
    else {
        let pattern_matching_result, i_3, xs_2;
        if (matchValue[0] === 0) {
            pattern_matching_result = 0;
        }
        else if (matchValue[0] === 1) {
            if (matchValue[1].tail != null) {
                pattern_matching_result = 1;
            }
            else {
                pattern_matching_result = 2;
                i_3 = matchValue[0];
                xs_2 = matchValue[1];
            }
        }
        else {
            pattern_matching_result = 2;
            i_3 = matchValue[0];
            xs_2 = matchValue[1];
        }
        switch (pattern_matching_result) {
            case 0: {
                return [new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), xs];
            }
            case 1: {
                return [new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(matchValue[1].head, new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List()), matchValue[1].tail];
            }
            case 2: {
                return takeSplitAux(true, i_3, new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), xs_2);
            }
        }
    }
}

function outOfRange() {
    throw (new Error("Index out of range"));
}

function getSlice(lower, upper, xs) {
    const lower_1 = (0,_Option_js__WEBPACK_IMPORTED_MODULE_1__.defaultArg)(lower, 0) | 0;
    const hasUpper = upper != null;
    if (lower_1 < 0) {
        return outOfRange();
    }
    else if (hasUpper ? ((0,_Option_js__WEBPACK_IMPORTED_MODULE_1__.value)(upper) < lower_1) : false) {
        return new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List();
    }
    else {
        let lastIndex = -1;
        const res = foldIndexed((i, acc, x) => {
            lastIndex = i;
            if ((lower_1 <= i) ? ((!hasUpper) ? true : (i <= (0,_Option_js__WEBPACK_IMPORTED_MODULE_1__.value)(upper))) : false) {
                return new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(x, acc);
            }
            else {
                return acc;
            }
        }, new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(), xs);
        if ((lower_1 > (lastIndex + 1)) ? true : (hasUpper ? ((0,_Option_js__WEBPACK_IMPORTED_MODULE_1__.value)(upper) > lastIndex) : false)) {
            outOfRange();
        }
        return reverse(res);
    }
}

function distinctBy(projection, xs, eq) {
    const hashSet = new _MutableSet_js__WEBPACK_IMPORTED_MODULE_5__.HashSet([], eq);
    return filter((arg) => (0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_6__.addToSet)(projection(arg), hashSet), xs);
}

function distinct(xs, eq) {
    return distinctBy((x) => x, xs, eq);
}

function exactlyOne(xs) {
    if (xs.tail != null) {
        if (xs.tail.tail != null) {
            throw (new Error("Input list too long\\nParameter name: list"));
        }
        else {
            return xs.head;
        }
    }
    else {
        throw (new Error("The input sequence was empty\\nParameter name: list"));
    }
}

function groupBy(projection, xs, eq) {
    const dict = new _MutableMap_js__WEBPACK_IMPORTED_MODULE_7__.Dictionary([], eq);
    let keys = new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List();
    iterate((v) => {
        const key = projection(v);
        let matchValue;
        let outArg = null;
        matchValue = [(0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_6__.tryGetValue)(dict, key, new _Types_js__WEBPACK_IMPORTED_MODULE_0__.FSharpRef(() => outArg, (v_1) => {
            outArg = v_1;
        })), outArg];
        if (matchValue[0]) {
            dict.set(key, new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(v, matchValue[1]));
        }
        else {
            (0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_6__.addToDict)(dict, key, new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(v, new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List()));
            keys = (new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(key, keys));
        }
    }, xs);
    let result = new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List();
    iterate((key_1) => {
        result = (new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List([key_1, reverse((0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_6__.getItemFromDict)(dict, key_1))], result));
    }, keys);
    return result;
}

function countBy(projection, xs, eq) {
    const dict = new _MutableMap_js__WEBPACK_IMPORTED_MODULE_7__.Dictionary([], eq);
    let keys = new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List();
    iterate((v) => {
        const key = projection(v);
        let matchValue;
        let outArg = 0;
        matchValue = [(0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_6__.tryGetValue)(dict, key, new _Types_js__WEBPACK_IMPORTED_MODULE_0__.FSharpRef(() => outArg, (v_1) => {
            outArg = v_1;
        })), outArg];
        if (matchValue[0]) {
            dict.set(key, matchValue[1] + 1);
        }
        else {
            dict.set(key, 1);
            keys = (new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(key, keys));
        }
    }, xs);
    let result = new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List();
    iterate((key_1) => {
        result = (new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List([key_1, (0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_6__.getItemFromDict)(dict, key_1)], result));
    }, keys);
    return result;
}

function where(predicate, source) {
    return filter(predicate, source);
}

function pairwise(source) {
    return ofSeq((0,_Seq_js__WEBPACK_IMPORTED_MODULE_2__.pairwise)(source));
}

function windowed(windowSize, source) {
    if (windowSize <= 0) {
        throw (new Error("windowSize must be positive"));
    }
    let res = new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List();
    for (let i = length(source); i >= windowSize; i--) {
        res = (new _Types_js__WEBPACK_IMPORTED_MODULE_0__.List(getSlice(i - windowSize, i - 1, source), res));
    }
    return res;
}

function splitInto(chunks, source) {
    return map(ofArray, ofArray((0,_Array_js__WEBPACK_IMPORTED_MODULE_4__.splitInto)(chunks, Array.from(source))));
}

function transpose(lists) {
    return ofSeq((0,_Seq_js__WEBPACK_IMPORTED_MODULE_2__.map)(ofSeq, (0,_Seq_js__WEBPACK_IMPORTED_MODULE_2__.transpose)(lists)));
}



/***/ }),

/***/ "./src/DevTools/.fable/fable-library.3.0.5/Long.js":
/*!*********************************************************!*\
  !*** ./src/DevTools/.fable/fable-library.3.0.5/Long.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "get_Zero": () => /* binding */ get_Zero,
/* harmony export */   "get_One": () => /* binding */ get_One,
/* harmony export */   "op_Addition": () => /* binding */ op_Addition,
/* harmony export */   "op_Subtraction": () => /* binding */ op_Subtraction,
/* harmony export */   "op_Multiply": () => /* binding */ op_Multiply,
/* harmony export */   "op_Division": () => /* binding */ op_Division,
/* harmony export */   "op_Modulus": () => /* binding */ op_Modulus,
/* harmony export */   "op_UnaryNegation": () => /* binding */ op_UnaryNegation,
/* harmony export */   "op_LeftShift": () => /* binding */ op_LeftShift,
/* harmony export */   "op_RightShift": () => /* binding */ op_RightShift,
/* harmony export */   "op_RightShiftUnsigned": () => /* binding */ op_RightShiftUnsigned,
/* harmony export */   "op_BitwiseAnd": () => /* binding */ op_BitwiseAnd,
/* harmony export */   "op_BitwiseOr": () => /* binding */ op_BitwiseOr,
/* harmony export */   "op_ExclusiveOr": () => /* binding */ op_ExclusiveOr,
/* harmony export */   "op_LogicalNot": () => /* binding */ op_LogicalNot,
/* harmony export */   "op_LessThan": () => /* binding */ op_LessThan,
/* harmony export */   "op_LessThanOrEqual": () => /* binding */ op_LessThanOrEqual,
/* harmony export */   "op_GreaterThan": () => /* binding */ op_GreaterThan,
/* harmony export */   "op_GreaterThanOrEqual": () => /* binding */ op_GreaterThanOrEqual,
/* harmony export */   "op_Equality": () => /* binding */ op_Equality,
/* harmony export */   "op_Inequality": () => /* binding */ op_Inequality,
/* harmony export */   "equals": () => /* binding */ equals,
/* harmony export */   "compare": () => /* binding */ compare,
/* harmony export */   "fromInt": () => /* binding */ fromInt,
/* harmony export */   "fromBits": () => /* binding */ fromBits,
/* harmony export */   "fromBytes": () => /* binding */ fromBytes,
/* harmony export */   "fromNumber": () => /* binding */ fromNumber,
/* harmony export */   "fromString": () => /* binding */ fromString,
/* harmony export */   "fromValue": () => /* binding */ fromValue,
/* harmony export */   "toInt": () => /* binding */ toInt,
/* harmony export */   "toBytes": () => /* binding */ toBytes,
/* harmony export */   "toNumber": () => /* binding */ toNumber,
/* harmony export */   "toString": () => /* binding */ toString,
/* harmony export */   "getLowBits": () => /* binding */ getLowBits,
/* harmony export */   "getHighBits": () => /* binding */ getHighBits,
/* harmony export */   "getLowBitsUnsigned": () => /* binding */ getLowBitsUnsigned,
/* harmony export */   "getHighBitsUnsigned": () => /* binding */ getHighBitsUnsigned,
/* harmony export */   "abs": () => /* binding */ abs,
/* harmony export */   "fromInteger": () => /* binding */ fromInteger,
/* harmony export */   "parse": () => /* binding */ parse,
/* harmony export */   "tryParse": () => /* binding */ tryParse,
/* harmony export */   "unixEpochMillisecondsToTicks": () => /* binding */ unixEpochMillisecondsToTicks,
/* harmony export */   "ticksToUnixEpochMilliseconds": () => /* binding */ ticksToUnixEpochMilliseconds,
/* harmony export */   "makeRangeStepFunction": () => /* binding */ makeRangeStepFunction
/* harmony export */ });
/* harmony import */ var _Int32_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Int32.js */ "./src/DevTools/.fable/fable-library.3.0.5/Int32.js");
/* harmony import */ var _lib_long_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/long.js */ "./src/DevTools/.fable/fable-library.3.0.5/lib/long.js");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_lib_long_js__WEBPACK_IMPORTED_MODULE_1__.Long);
const get_Zero = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.ZERO;
const get_One = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.ONE;
const op_Addition = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.add;
const op_Subtraction = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.subtract;
const op_Multiply = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.multiply;
const op_Division = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.divide;
const op_Modulus = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.modulo;
const op_UnaryNegation = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.negate;
const op_LeftShift = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.shiftLeft;
const op_RightShift = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.shiftRight;
const op_RightShiftUnsigned = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.shiftRightUnsigned;
const op_BitwiseAnd = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.and;
const op_BitwiseOr = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.or;
const op_ExclusiveOr = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.xor;
const op_LogicalNot = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.not;
const op_LessThan = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.lessThan;
const op_LessThanOrEqual = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.lessThanOrEqual;
const op_GreaterThan = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.greaterThan;
const op_GreaterThanOrEqual = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.greaterThanOrEqual;
const op_Equality = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.equals;
const op_Inequality = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.notEquals;
const equals = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.equals;
const compare = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.compare;
const fromInt = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.fromInt;
const fromBits = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.fromBits;
const fromBytes = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.fromBytes;
const fromNumber = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.fromNumber;
const fromString = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.fromString;
const fromValue = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.fromValue;
const toInt = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.toInt;
const toBytes = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.toBytes;
const toNumber = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.toNumber;
const toString = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.toString;
const getLowBits = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.getLowBits;
const getHighBits = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.getHighBits;
const getLowBitsUnsigned = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.getLowBitsUnsigned;
const getHighBitsUnsigned = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.getHighBitsUnsigned;
function getMaxValue(unsigned, radix, isNegative) {
    switch (radix) {
        case 2: return unsigned ?
            "1111111111111111111111111111111111111111111111111111111111111111" :
            (isNegative ? "1000000000000000000000000000000000000000000000000000000000000000"
                : "111111111111111111111111111111111111111111111111111111111111111");
        case 8: return unsigned ?
            "1777777777777777777777" :
            (isNegative ? "1000000000000000000000" : "777777777777777777777");
        case 10: return unsigned ?
            "18446744073709551615" :
            (isNegative ? "9223372036854775808" : "9223372036854775807");
        case 16: return unsigned ?
            "FFFFFFFFFFFFFFFF" :
            (isNegative ? "8000000000000000" : "7FFFFFFFFFFFFFFF");
        default: throw new Error("Invalid radix.");
    }
}
function abs(x) {
    if (!x.unsigned && _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.isNegative(x)) {
        return op_UnaryNegation(x);
    }
    else {
        return x;
    }
}
function fromInteger(value, unsigned, kind) {
    let x = value;
    let xh = 0;
    switch (kind) {
        case 0:
            x = value << 24 >> 24;
            xh = x;
            break;
        case 4:
            x = value << 24 >>> 24;
            break;
        case 1:
            x = value << 16 >> 16;
            xh = x;
            break;
        case 5:
            x = value << 16 >>> 16;
            break;
        case 2:
            x = value >> 0;
            xh = x;
            break;
        case 6:
            x = value >>> 0;
            break;
    }
    return _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.fromBits(x, xh >> 31, unsigned);
}
function parse(str, style, unsigned, _bitsize, radix) {
    const res = (0,_Int32_js__WEBPACK_IMPORTED_MODULE_0__.isValid)(str, style, radix);
    if (res != null) {
        const lessOrEqual = (x, y) => {
            const len = Math.max(x.length, y.length);
            return x.padStart(len, "0") <= y.padStart(len, "0");
        };
        const isNegative = res.sign === "-";
        const maxValue = getMaxValue(unsigned || res.radix !== 10, res.radix, isNegative);
        if (lessOrEqual(res.digits.toUpperCase(), maxValue)) {
            str = isNegative ? res.sign + res.digits : res.digits;
            return _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.fromString(str, unsigned, res.radix);
        }
    }
    throw new Error("Input string was not in a correct format.");
}
function tryParse(str, style, unsigned, bitsize, defValue) {
    try {
        defValue.contents = parse(str, style, unsigned, bitsize);
        return true;
    }
    catch (_a) {
        return false;
    }
}
function unixEpochMillisecondsToTicks(ms, offset) {
    return op_Multiply(op_Addition(op_Addition(_lib_long_js__WEBPACK_IMPORTED_MODULE_1__.fromNumber(ms), 62135596800000), offset), 10000);
}
function ticksToUnixEpochMilliseconds(ticks) {
    return _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.toNumber(op_Subtraction(op_Division(ticks, 10000), 62135596800000));
}
function makeRangeStepFunction(step, last, unsigned) {
    const stepComparedWithZero = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.compare(step, unsigned ? _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.UZERO : _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.ZERO);
    if (stepComparedWithZero === 0) {
        throw new Error("The step of a range cannot be zero");
    }
    const stepGreaterThanZero = stepComparedWithZero > 0;
    return (x) => {
        const comparedWithLast = _lib_long_js__WEBPACK_IMPORTED_MODULE_1__.compare(x, last);
        if ((stepGreaterThanZero && comparedWithLast <= 0)
            || (!stepGreaterThanZero && comparedWithLast >= 0)) {
            return [x, op_Addition(x, step)];
        }
        else {
            return undefined;
        }
    };
}


/***/ }),

/***/ "./src/DevTools/.fable/fable-library.3.0.5/MapUtil.js":
/*!************************************************************!*\
  !*** ./src/DevTools/.fable/fable-library.3.0.5/MapUtil.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keyValueList": () => /* binding */ keyValueList,
/* harmony export */   "containsValue": () => /* binding */ containsValue,
/* harmony export */   "tryGetValue": () => /* binding */ tryGetValue,
/* harmony export */   "addToSet": () => /* binding */ addToSet,
/* harmony export */   "addToDict": () => /* binding */ addToDict,
/* harmony export */   "getItemFromDict": () => /* binding */ getItemFromDict
/* harmony export */ });
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util.js */ "./src/DevTools/.fable/fable-library.3.0.5/Util.js");
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Types.js */ "./src/DevTools/.fable/fable-library.3.0.5/Types.js");


const CaseRules = {
    None: 0,
    LowerFirst: 1,
    SnakeCase: 2,
    SnakeCaseAllCaps: 3,
    KebabCase: 4,
};
function dashify(str, separator) {
    return str.replace(/[a-z]?[A-Z]/g, (m) => m.length === 1
        ? m.toLowerCase()
        : m.charAt(0) + separator + m.charAt(1).toLowerCase());
}
function changeCase(str, caseRule) {
    switch (caseRule) {
        case CaseRules.LowerFirst:
            return str.charAt(0).toLowerCase() + str.slice(1);
        case CaseRules.SnakeCase:
            return dashify(str, "_");
        case CaseRules.SnakeCaseAllCaps:
            return dashify(str, "_").toUpperCase();
        case CaseRules.KebabCase:
            return dashify(str, "-");
        case CaseRules.None:
        default:
            return str;
    }
}
function keyValueList(fields, caseRule = CaseRules.None) {
    const obj = {};
    const definedCaseRule = caseRule;
    function fail(kvPair) {
        throw new Error("Cannot infer key and value of " + String(kvPair));
    }
    function assign(key, caseRule, value) {
        key = changeCase(key, caseRule);
        obj[key] = value;
    }
    for (let kvPair of fields) {
        let caseRule = CaseRules.None;
        if (kvPair == null) {
            fail(kvPair);
        }
        // Deflate unions and use the defined case rule
        if (kvPair instanceof _Types_js__WEBPACK_IMPORTED_MODULE_1__.Union) {
            const name = kvPair.cases()[kvPair.tag];
            kvPair = kvPair.fields.length === 0 ? name : [name].concat(kvPair.fields);
            caseRule = definedCaseRule;
        }
        if (Array.isArray(kvPair)) {
            switch (kvPair.length) {
                case 0:
                    fail(kvPair);
                    break;
                case 1:
                    assign(kvPair[0], caseRule, true);
                    break;
                case 2:
                    const value = kvPair[1];
                    assign(kvPair[0], caseRule, value);
                    break;
                default:
                    assign(kvPair[0], caseRule, kvPair.slice(1));
            }
        }
        else if (typeof kvPair === "string") {
            assign(kvPair, caseRule, true);
        }
        else {
            fail(kvPair);
        }
    }
    return obj;
}
// TODO: Move these methods to Map and Set modules
function containsValue(v, map) {
    for (const kv of map) {
        if ((0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.equals)(v, kv[1])) {
            return true;
        }
    }
    return false;
}
function tryGetValue(map, key, defaultValue) {
    if (map.has(key)) {
        defaultValue.contents = map.get(key);
        return true;
    }
    return false;
}
function addToSet(v, set) {
    if (set.has(v)) {
        return false;
    }
    set.add(v);
    return true;
}
function addToDict(dict, k, v) {
    if (dict.has(k)) {
        throw new Error("An item with the same key has already been added. Key: " + k);
    }
    dict.set(k, v);
}
function getItemFromDict(map, key) {
    if (map.has(key)) {
        return map.get(key);
    }
    else {
        throw new Error(`The given key '${key}' was not present in the dictionary.`);
    }
}


/***/ }),

/***/ "./src/DevTools/.fable/fable-library.3.0.5/MutableMap.js":
/*!***************************************************************!*\
  !*** ./src/DevTools/.fable/fable-library.3.0.5/MutableMap.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dictionary": () => /* binding */ Dictionary,
/* harmony export */   "Dictionary$reflection": () => /* binding */ Dictionary$reflection,
/* harmony export */   "Dictionary_$ctor_6623D9B3": () => /* binding */ Dictionary_$ctor_6623D9B3,
/* harmony export */   "Dictionary__TryFind_2B595": () => /* binding */ Dictionary__TryFind_2B595,
/* harmony export */   "Dictionary__get_Comparer": () => /* binding */ Dictionary__get_Comparer,
/* harmony export */   "Dictionary__Clear": () => /* binding */ Dictionary__Clear,
/* harmony export */   "Dictionary__get_Count": () => /* binding */ Dictionary__get_Count,
/* harmony export */   "Dictionary__get_Item_2B595": () => /* binding */ Dictionary__get_Item_2B595,
/* harmony export */   "Dictionary__set_Item_5BDDA1": () => /* binding */ Dictionary__set_Item_5BDDA1,
/* harmony export */   "Dictionary__Add_5BDDA1": () => /* binding */ Dictionary__Add_5BDDA1,
/* harmony export */   "Dictionary__ContainsKey_2B595": () => /* binding */ Dictionary__ContainsKey_2B595,
/* harmony export */   "Dictionary__Remove_2B595": () => /* binding */ Dictionary__Remove_2B595
/* harmony export */ });
/* harmony import */ var _Seq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Seq.js */ "./src/DevTools/.fable/fable-library.3.0.5/Seq.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util.js */ "./src/DevTools/.fable/fable-library.3.0.5/Util.js");
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Types.js */ "./src/DevTools/.fable/fable-library.3.0.5/Types.js");
/* harmony import */ var _Reflection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Reflection.js */ "./src/DevTools/.fable/fable-library.3.0.5/Reflection.js");
/* harmony import */ var _MapUtil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MapUtil.js */ "./src/DevTools/.fable/fable-library.3.0.5/MapUtil.js");
/* harmony import */ var _String_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./String.js */ "./src/DevTools/.fable/fable-library.3.0.5/String.js");







class Dictionary {
    constructor(pairs, comparer) {
        const this$ = new _Types_js__WEBPACK_IMPORTED_MODULE_2__.FSharpRef(null);
        this.comparer = comparer;
        this$.contents = this;
        this.hashMap = (new Map([]));
        this["init@8-1"] = 1;
        const enumerator = (0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.getEnumerator)(pairs);
        try {
            while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                const pair = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
                Dictionary__Add_5BDDA1(this$.contents, pair[0], pair[1]);
            }
        }
        finally {
            enumerator.Dispose();
        }
    }
    get [Symbol.toStringTag]() {
        return "Dictionary";
    }
    ["System.Collections.IEnumerable.GetEnumerator"]() {
        const this$ = this;
        return (0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.getEnumerator)(this$);
    }
    GetEnumerator() {
        const this$ = this;
        return (0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.getEnumerator)((0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.concat)(this$.hashMap.values()));
    }
    [Symbol.iterator]() {
        return (0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.toIterator)(this.GetEnumerator());
    }
    ["System.Collections.Generic.ICollection`1.Add2B595"](item) {
        const this$ = this;
        Dictionary__Add_5BDDA1(this$, item[0], item[1]);
    }
    ["System.Collections.Generic.ICollection`1.Clear"]() {
        const this$ = this;
        Dictionary__Clear(this$);
    }
    ["System.Collections.Generic.ICollection`1.Contains2B595"](item) {
        const this$ = this;
        const matchValue = Dictionary__TryFind_2B595(this$, item[0]);
        let pattern_matching_result;
        if (matchValue != null) {
            if ((0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.equals)(matchValue[1], item[1])) {
                pattern_matching_result = 0;
            }
            else {
                pattern_matching_result = 1;
            }
        }
        else {
            pattern_matching_result = 1;
        }
        switch (pattern_matching_result) {
            case 0: {
                return true;
            }
            case 1: {
                return false;
            }
        }
    }
    ["System.Collections.Generic.ICollection`1.CopyToZ2E171D71"](array, arrayIndex) {
        const this$ = this;
        (0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.iterateIndexed)((i, e) => {
            array[arrayIndex + i] = e;
        }, this$);
    }
    ["System.Collections.Generic.ICollection`1.get_Count"]() {
        const this$ = this;
        return Dictionary__get_Count(this$) | 0;
    }
    ["System.Collections.Generic.ICollection`1.get_IsReadOnly"]() {
        return false;
    }
    ["System.Collections.Generic.ICollection`1.Remove2B595"](item) {
        const this$ = this;
        const matchValue = Dictionary__TryFind_2B595(this$, item[0]);
        if (matchValue != null) {
            if ((0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.equals)(matchValue[1], item[1])) {
                const value = Dictionary__Remove_2B595(this$, item[0]);
                void value;
            }
            return true;
        }
        else {
            return false;
        }
    }
    get size() {
        const this$ = this;
        return Dictionary__get_Count(this$) | 0;
    }
    clear() {
        const this$ = this;
        Dictionary__Clear(this$);
    }
    delete(k) {
        const this$ = this;
        return Dictionary__Remove_2B595(this$, k);
    }
    entries() {
        const this$ = this;
        return (0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.map)((p) => [p[0], p[1]], this$);
    }
    get(k) {
        const this$ = this;
        return Dictionary__get_Item_2B595(this$, k);
    }
    has(k) {
        const this$ = this;
        return Dictionary__ContainsKey_2B595(this$, k);
    }
    keys() {
        const this$ = this;
        return (0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.map)((p) => p[0], this$);
    }
    set(k, v) {
        const this$ = this;
        Dictionary__set_Item_5BDDA1(this$, k, v);
        return this$;
    }
    values() {
        const this$ = this;
        return (0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.map)((p) => p[1], this$);
    }
    forEach(f, thisArg) {
        const this$ = this;
        (0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.iterate)((p) => {
            f(p[1], p[0], this$);
        }, this$);
    }
}

function Dictionary$reflection(gen0, gen1) {
    return (0,_Reflection_js__WEBPACK_IMPORTED_MODULE_3__.class_type)("Fable.Collections.Dictionary", [gen0, gen1], Dictionary);
}

function Dictionary_$ctor_6623D9B3(pairs, comparer) {
    return new Dictionary(pairs, comparer);
}

function Dictionary__TryFindIndex_2B595(this$, k) {
    const h = this$.comparer.GetHashCode(k) | 0;
    let matchValue;
    let outArg = null;
    matchValue = [(0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_4__.tryGetValue)(this$.hashMap, h, new _Types_js__WEBPACK_IMPORTED_MODULE_2__.FSharpRef(() => outArg, (v) => {
        outArg = v;
    })), outArg];
    if (matchValue[0]) {
        return [true, h, matchValue[1].findIndex((pair) => this$.comparer.Equals(k, pair[0]))];
    }
    else {
        return [false, h, -1];
    }
}

function Dictionary__TryFind_2B595(this$, k) {
    const matchValue = Dictionary__TryFindIndex_2B595(this$, k);
    let pattern_matching_result;
    if (matchValue[0]) {
        if (matchValue[2] > -1) {
            pattern_matching_result = 0;
        }
        else {
            pattern_matching_result = 1;
        }
    }
    else {
        pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
        case 0: {
            return (0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_4__.getItemFromDict)(this$.hashMap, matchValue[1])[matchValue[2]];
        }
        case 1: {
            return void 0;
        }
    }
}

function Dictionary__get_Comparer(this$) {
    return this$.comparer;
}

function Dictionary__Clear(this$) {
    this$.hashMap.clear();
}

function Dictionary__get_Count(this$) {
    return (0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.sumBy)((pairs) => pairs.length, this$.hashMap.values(), {
        GetZero: () => 0,
        Add: (x, y) => (x + y),
    });
}

function Dictionary__get_Item_2B595(this$, k) {
    const matchValue = Dictionary__TryFind_2B595(this$, k);
    if (matchValue != null) {
        return matchValue[1];
    }
    else {
        throw (new Error("The item was not found in collection"));
    }
}

function Dictionary__set_Item_5BDDA1(this$, k, v) {
    const matchValue = Dictionary__TryFindIndex_2B595(this$, k);
    let pattern_matching_result;
    if (matchValue[0]) {
        if (matchValue[2] > -1) {
            pattern_matching_result = 0;
        }
        else {
            pattern_matching_result = 1;
        }
    }
    else {
        pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
        case 0: {
            (0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_4__.getItemFromDict)(this$.hashMap, matchValue[1])[matchValue[2]] = [k, v];
            break;
        }
        case 1: {
            if (matchValue[0]) {
                const value = void ((0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_4__.getItemFromDict)(this$.hashMap, matchValue[1]).push([k, v]));
                void undefined;
            }
            else {
                this$.hashMap.set(matchValue[1], [[k, v]]);
            }
            break;
        }
    }
}

function Dictionary__Add_5BDDA1(this$, k, v) {
    const matchValue = Dictionary__TryFindIndex_2B595(this$, k);
    let pattern_matching_result;
    if (matchValue[0]) {
        if (matchValue[2] > -1) {
            pattern_matching_result = 0;
        }
        else {
            pattern_matching_result = 1;
        }
    }
    else {
        pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
        case 0: {
            const msg = (0,_String_js__WEBPACK_IMPORTED_MODULE_5__.format)("An item with the same key has already been added. Key: {0}", k);
            throw (new Error(msg));
            break;
        }
        case 1: {
            if (matchValue[0]) {
                const value = void ((0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_4__.getItemFromDict)(this$.hashMap, matchValue[1]).push([k, v]));
                void undefined;
            }
            else {
                this$.hashMap.set(matchValue[1], [[k, v]]);
            }
            break;
        }
    }
}

function Dictionary__ContainsKey_2B595(this$, k) {
    const matchValue = Dictionary__TryFindIndex_2B595(this$, k);
    let pattern_matching_result;
    if (matchValue[0]) {
        if (matchValue[2] > -1) {
            pattern_matching_result = 0;
        }
        else {
            pattern_matching_result = 1;
        }
    }
    else {
        pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
        case 0: {
            return true;
        }
        case 1: {
            return false;
        }
    }
}

function Dictionary__Remove_2B595(this$, k) {
    const matchValue = Dictionary__TryFindIndex_2B595(this$, k);
    let pattern_matching_result;
    if (matchValue[0]) {
        if (matchValue[2] > -1) {
            pattern_matching_result = 0;
        }
        else {
            pattern_matching_result = 1;
        }
    }
    else {
        pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
        case 0: {
            (0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_4__.getItemFromDict)(this$.hashMap, matchValue[1]).splice(matchValue[2], 1);
            return true;
        }
        case 1: {
            return false;
        }
    }
}



/***/ }),

/***/ "./src/DevTools/.fable/fable-library.3.0.5/MutableSet.js":
/*!***************************************************************!*\
  !*** ./src/DevTools/.fable/fable-library.3.0.5/MutableSet.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HashSet": () => /* binding */ HashSet,
/* harmony export */   "HashSet$reflection": () => /* binding */ HashSet$reflection,
/* harmony export */   "HashSet_$ctor_Z6150332D": () => /* binding */ HashSet_$ctor_Z6150332D,
/* harmony export */   "HashSet__get_Comparer": () => /* binding */ HashSet__get_Comparer,
/* harmony export */   "HashSet__Clear": () => /* binding */ HashSet__Clear,
/* harmony export */   "HashSet__get_Count": () => /* binding */ HashSet__get_Count,
/* harmony export */   "HashSet__Add_2B595": () => /* binding */ HashSet__Add_2B595,
/* harmony export */   "HashSet__Contains_2B595": () => /* binding */ HashSet__Contains_2B595,
/* harmony export */   "HashSet__Remove_2B595": () => /* binding */ HashSet__Remove_2B595
/* harmony export */ });
/* harmony import */ var _Seq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Seq.js */ "./src/DevTools/.fable/fable-library.3.0.5/Seq.js");
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Types.js */ "./src/DevTools/.fable/fable-library.3.0.5/Types.js");
/* harmony import */ var _Reflection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Reflection.js */ "./src/DevTools/.fable/fable-library.3.0.5/Reflection.js");
/* harmony import */ var _MapUtil_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MapUtil.js */ "./src/DevTools/.fable/fable-library.3.0.5/MapUtil.js");
/* harmony import */ var _Option_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Option.js */ "./src/DevTools/.fable/fable-library.3.0.5/Option.js");






class HashSet {
    constructor(items, comparer) {
        const this$ = new _Types_js__WEBPACK_IMPORTED_MODULE_1__.FSharpRef(null);
        this.comparer = comparer;
        this$.contents = this;
        this.hashMap = (new Map([]));
        this["init@8-2"] = 1;
        const enumerator = (0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.getEnumerator)(items);
        try {
            while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                const value = HashSet__Add_2B595(this$.contents, enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]());
                void value;
            }
        }
        finally {
            enumerator.Dispose();
        }
    }
    get [Symbol.toStringTag]() {
        return "HashSet";
    }
    ["System.Collections.IEnumerable.GetEnumerator"]() {
        const this$ = this;
        return (0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.getEnumerator)(this$);
    }
    GetEnumerator() {
        const this$ = this;
        return (0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.getEnumerator)((0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.concat)(this$.hashMap.values()));
    }
    [Symbol.iterator]() {
        return (0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.toIterator)(this.GetEnumerator());
    }
    ["System.Collections.Generic.ICollection`1.Add2B595"](item) {
        const this$ = this;
        const value = HashSet__Add_2B595(this$, item);
        void value;
    }
    ["System.Collections.Generic.ICollection`1.Clear"]() {
        const this$ = this;
        HashSet__Clear(this$);
    }
    ["System.Collections.Generic.ICollection`1.Contains2B595"](item) {
        const this$ = this;
        return HashSet__Contains_2B595(this$, item);
    }
    ["System.Collections.Generic.ICollection`1.CopyToZ2E171D71"](array, arrayIndex) {
        const this$ = this;
        (0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.iterateIndexed)((i, e) => {
            array[arrayIndex + i] = e;
        }, this$);
    }
    ["System.Collections.Generic.ICollection`1.get_Count"]() {
        const this$ = this;
        return HashSet__get_Count(this$) | 0;
    }
    ["System.Collections.Generic.ICollection`1.get_IsReadOnly"]() {
        return false;
    }
    ["System.Collections.Generic.ICollection`1.Remove2B595"](item) {
        const this$ = this;
        return HashSet__Remove_2B595(this$, item);
    }
    get size() {
        const this$ = this;
        return HashSet__get_Count(this$) | 0;
    }
    add(k) {
        const this$ = this;
        const value = HashSet__Add_2B595(this$, k);
        void value;
        return this$;
    }
    clear() {
        const this$ = this;
        HashSet__Clear(this$);
    }
    delete(k) {
        const this$ = this;
        return HashSet__Remove_2B595(this$, k);
    }
    has(k) {
        const this$ = this;
        return HashSet__Contains_2B595(this$, k);
    }
    keys() {
        const this$ = this;
        return (0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.map)((x) => x, this$);
    }
    values() {
        const this$ = this;
        return (0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.map)((x) => x, this$);
    }
    entries() {
        const this$ = this;
        return (0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.map)((v) => [v, v], this$);
    }
    forEach(f, thisArg) {
        const this$ = this;
        (0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.iterate)((x) => {
            f(x, x, this$);
        }, this$);
    }
}

function HashSet$reflection(gen0) {
    return (0,_Reflection_js__WEBPACK_IMPORTED_MODULE_2__.class_type)("Fable.Collections.HashSet", [gen0], HashSet);
}

function HashSet_$ctor_Z6150332D(items, comparer) {
    return new HashSet(items, comparer);
}

function HashSet__TryFindIndex_2B595(this$, k) {
    const h = this$.comparer.GetHashCode(k) | 0;
    let matchValue;
    let outArg = null;
    matchValue = [(0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_3__.tryGetValue)(this$.hashMap, h, new _Types_js__WEBPACK_IMPORTED_MODULE_1__.FSharpRef(() => outArg, (v) => {
        outArg = v;
    })), outArg];
    if (matchValue[0]) {
        return [true, h, matchValue[1].findIndex((v_1) => this$.comparer.Equals(k, v_1))];
    }
    else {
        return [false, h, -1];
    }
}

function HashSet__TryFind_2B595(this$, k) {
    const matchValue = HashSet__TryFindIndex_2B595(this$, k);
    let pattern_matching_result;
    if (matchValue[0]) {
        if (matchValue[2] > -1) {
            pattern_matching_result = 0;
        }
        else {
            pattern_matching_result = 1;
        }
    }
    else {
        pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
        case 0: {
            return (0,_Option_js__WEBPACK_IMPORTED_MODULE_4__.some)((0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_3__.getItemFromDict)(this$.hashMap, matchValue[1])[matchValue[2]]);
        }
        case 1: {
            return void 0;
        }
    }
}

function HashSet__get_Comparer(this$) {
    return this$.comparer;
}

function HashSet__Clear(this$) {
    this$.hashMap.clear();
}

function HashSet__get_Count(this$) {
    return (0,_Seq_js__WEBPACK_IMPORTED_MODULE_0__.sumBy)((pairs) => pairs.length, this$.hashMap.values(), {
        GetZero: () => 0,
        Add: (x, y) => (x + y),
    });
}

function HashSet__Add_2B595(this$, k) {
    const matchValue = HashSet__TryFindIndex_2B595(this$, k);
    let pattern_matching_result;
    if (matchValue[0]) {
        if (matchValue[2] > -1) {
            pattern_matching_result = 0;
        }
        else {
            pattern_matching_result = 1;
        }
    }
    else {
        pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
        case 0: {
            return false;
        }
        case 1: {
            if (matchValue[0]) {
                const value = void ((0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_3__.getItemFromDict)(this$.hashMap, matchValue[1]).push(k));
                void undefined;
                return true;
            }
            else {
                this$.hashMap.set(matchValue[1], [k]);
                return true;
            }
        }
    }
}

function HashSet__Contains_2B595(this$, k) {
    const matchValue = HashSet__TryFindIndex_2B595(this$, k);
    let pattern_matching_result;
    if (matchValue[0]) {
        if (matchValue[2] > -1) {
            pattern_matching_result = 0;
        }
        else {
            pattern_matching_result = 1;
        }
    }
    else {
        pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
        case 0: {
            return true;
        }
        case 1: {
            return false;
        }
    }
}

function HashSet__Remove_2B595(this$, k) {
    const matchValue = HashSet__TryFindIndex_2B595(this$, k);
    let pattern_matching_result;
    if (matchValue[0]) {
        if (matchValue[2] > -1) {
            pattern_matching_result = 0;
        }
        else {
            pattern_matching_result = 1;
        }
    }
    else {
        pattern_matching_result = 1;
    }
    switch (pattern_matching_result) {
        case 0: {
            (0,_MapUtil_js__WEBPACK_IMPORTED_MODULE_3__.getItemFromDict)(this$.hashMap, matchValue[1]).splice(matchValue[2], 1);
            return true;
        }
        case 1: {
            return false;
        }
    }
}



/***/ }),

/***/ "./src/DevTools/.fable/fable-library.3.0.5/Option.js":
/*!***********************************************************!*\
  !*** ./src/DevTools/.fable/fable-library.3.0.5/Option.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Some": () => /* binding */ Some,
/* harmony export */   "some": () => /* binding */ some,
/* harmony export */   "value": () => /* binding */ value,
/* harmony export */   "ofNullable": () => /* binding */ ofNullable,
/* harmony export */   "toNullable": () => /* binding */ toNullable,
/* harmony export */   "flatten": () => /* binding */ flatten,
/* harmony export */   "toArray": () => /* binding */ toArray,
/* harmony export */   "defaultArg": () => /* binding */ defaultArg,
/* harmony export */   "defaultArgWith": () => /* binding */ defaultArgWith,
/* harmony export */   "filter": () => /* binding */ filter,
/* harmony export */   "map": () => /* binding */ map,
/* harmony export */   "map2": () => /* binding */ map2,
/* harmony export */   "map3": () => /* binding */ map3,
/* harmony export */   "bind": () => /* binding */ bind,
/* harmony export */   "tryOp": () => /* binding */ tryOp
/* harmony export */ });
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util.js */ "./src/DevTools/.fable/fable-library.3.0.5/Util.js");

// Using a class here for better compatibility with TS files importing Some
class Some {
    constructor(value) {
        this.value = value;
    }
    toJSON() {
        return this.value;
    }
    // Don't add "Some" for consistency with erased options
    toString() {
        return String(this.value);
    }
    GetHashCode() {
        return (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.structuralHash)(this.value);
    }
    Equals(other) {
        if (other == null) {
            return false;
        }
        else {
            return (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.equals)(this.value, other instanceof Some ? other.value : other);
        }
    }
    CompareTo(other) {
        if (other == null) {
            return 1;
        }
        else {
            return (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.compare)(this.value, other instanceof Some ? other.value : other);
        }
    }
}
function some(x) {
    return x == null || x instanceof Some ? new Some(x) : x;
}
function value(x) {
    if (x == null) {
        throw new Error("Option has no value");
    }
    else {
        return x instanceof Some ? x.value : x;
    }
}
function ofNullable(x) {
    // This will fail with unit probably, an alternative would be:
    // return x === null ? undefined : (x === undefined ? new Some(x) : x);
    return x == null ? undefined : x;
}
function toNullable(x) {
    return x == null ? null : value(x);
}
function flatten(x) {
    return x == null ? undefined : value(x);
}
function toArray(opt) {
    return (opt == null) ? [] : [value(opt)];
}
function defaultArg(opt, defaultValue) {
    return (opt != null) ? value(opt) : defaultValue;
}
function defaultArgWith(opt, defThunk) {
    return (opt != null) ? value(opt) : defThunk();
}
function filter(predicate, opt) {
    return (opt != null) ? (predicate(value(opt)) ? opt : undefined) : opt;
}
function map(mapping, opt) {
    return (opt != null) ? some(mapping(value(opt))) : undefined;
}
function map2(mapping, opt1, opt2) {
    return (opt1 != null && opt2 != null) ? mapping(value(opt1), value(opt2)) : undefined;
}
function map3(mapping, opt1, opt2, opt3) {
    return (opt1 != null && opt2 != null && opt3 != null) ? mapping(value(opt1), value(opt2), value(opt3)) : undefined;
}
function bind(binder, opt) {
    return opt != null ? binder(value(opt)) : undefined;
}
function tryOp(op, arg) {
    try {
        return some(op(arg));
    }
    catch (_a) {
        return undefined;
    }
}


/***/ }),

/***/ "./src/DevTools/.fable/fable-library.3.0.5/Reflection.js":
/*!***************************************************************!*\
  !*** ./src/DevTools/.fable/fable-library.3.0.5/Reflection.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CaseInfo": () => /* binding */ CaseInfo,
/* harmony export */   "TypeInfo": () => /* binding */ TypeInfo,
/* harmony export */   "getGenerics": () => /* binding */ getGenerics,
/* harmony export */   "getHashCode": () => /* binding */ getHashCode,
/* harmony export */   "equals": () => /* binding */ equals,
/* harmony export */   "class_type": () => /* binding */ class_type,
/* harmony export */   "record_type": () => /* binding */ record_type,
/* harmony export */   "anonRecord_type": () => /* binding */ anonRecord_type,
/* harmony export */   "union_type": () => /* binding */ union_type,
/* harmony export */   "tuple_type": () => /* binding */ tuple_type,
/* harmony export */   "delegate_type": () => /* binding */ delegate_type,
/* harmony export */   "lambda_type": () => /* binding */ lambda_type,
/* harmony export */   "option_type": () => /* binding */ option_type,
/* harmony export */   "list_type": () => /* binding */ list_type,
/* harmony export */   "array_type": () => /* binding */ array_type,
/* harmony export */   "enum_type": () => /* binding */ enum_type,
/* harmony export */   "obj_type": () => /* binding */ obj_type,
/* harmony export */   "unit_type": () => /* binding */ unit_type,
/* harmony export */   "char_type": () => /* binding */ char_type,
/* harmony export */   "string_type": () => /* binding */ string_type,
/* harmony export */   "bool_type": () => /* binding */ bool_type,
/* harmony export */   "int8_type": () => /* binding */ int8_type,
/* harmony export */   "uint8_type": () => /* binding */ uint8_type,
/* harmony export */   "int16_type": () => /* binding */ int16_type,
/* harmony export */   "uint16_type": () => /* binding */ uint16_type,
/* harmony export */   "int32_type": () => /* binding */ int32_type,
/* harmony export */   "uint32_type": () => /* binding */ uint32_type,
/* harmony export */   "float32_type": () => /* binding */ float32_type,
/* harmony export */   "float64_type": () => /* binding */ float64_type,
/* harmony export */   "decimal_type": () => /* binding */ decimal_type,
/* harmony export */   "name": () => /* binding */ name,
/* harmony export */   "fullName": () => /* binding */ fullName,
/* harmony export */   "namespace": () => /* binding */ namespace,
/* harmony export */   "isArray": () => /* binding */ isArray,
/* harmony export */   "getElementType": () => /* binding */ getElementType,
/* harmony export */   "isGenericType": () => /* binding */ isGenericType,
/* harmony export */   "isEnum": () => /* binding */ isEnum,
/* harmony export */   "isSubclassOf": () => /* binding */ isSubclassOf,
/* harmony export */   "getGenericTypeDefinition": () => /* binding */ getGenericTypeDefinition,
/* harmony export */   "getEnumUnderlyingType": () => /* binding */ getEnumUnderlyingType,
/* harmony export */   "getEnumValues": () => /* binding */ getEnumValues,
/* harmony export */   "getEnumNames": () => /* binding */ getEnumNames,
/* harmony export */   "parseEnum": () => /* binding */ parseEnum,
/* harmony export */   "tryParseEnum": () => /* binding */ tryParseEnum,
/* harmony export */   "getEnumName": () => /* binding */ getEnumName,
/* harmony export */   "isEnumDefined": () => /* binding */ isEnumDefined,
/* harmony export */   "getUnionCases": () => /* binding */ getUnionCases,
/* harmony export */   "getRecordElements": () => /* binding */ getRecordElements,
/* harmony export */   "getTupleElements": () => /* binding */ getTupleElements,
/* harmony export */   "getFunctionElements": () => /* binding */ getFunctionElements,
/* harmony export */   "isUnion": () => /* binding */ isUnion,
/* harmony export */   "isRecord": () => /* binding */ isRecord,
/* harmony export */   "isTuple": () => /* binding */ isTuple,
/* harmony export */   "isFunction": () => /* binding */ isFunction,
/* harmony export */   "getUnionFields": () => /* binding */ getUnionFields,
/* harmony export */   "getUnionCaseFields": () => /* binding */ getUnionCaseFields,
/* harmony export */   "getRecordFields": () => /* binding */ getRecordFields,
/* harmony export */   "getRecordField": () => /* binding */ getRecordField,
/* harmony export */   "getTupleFields": () => /* binding */ getTupleFields,
/* harmony export */   "getTupleField": () => /* binding */ getTupleField,
/* harmony export */   "makeUnion": () => /* binding */ makeUnion,
/* harmony export */   "makeRecord": () => /* binding */ makeRecord,
/* harmony export */   "makeTuple": () => /* binding */ makeTuple,
/* harmony export */   "makeGenericType": () => /* binding */ makeGenericType,
/* harmony export */   "createInstance": () => /* binding */ createInstance,
/* harmony export */   "getValue": () => /* binding */ getValue,
/* harmony export */   "getCaseTag": () => /* binding */ getCaseTag,
/* harmony export */   "getCaseName": () => /* binding */ getCaseName,
/* harmony export */   "getCaseFields": () => /* binding */ getCaseFields
/* harmony export */ });
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Types.js */ "./src/DevTools/.fable/fable-library.3.0.5/Types.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Util.js */ "./src/DevTools/.fable/fable-library.3.0.5/Util.js");


class CaseInfo {
    constructor(declaringType, tag, name, fields) {
        this.declaringType = declaringType;
        this.tag = tag;
        this.name = name;
        this.fields = fields;
    }
}
class TypeInfo {
    constructor(fullname, generics, construct, parent, fields, cases, enumCases) {
        this.fullname = fullname;
        this.generics = generics;
        this.construct = construct;
        this.parent = parent;
        this.fields = fields;
        this.cases = cases;
        this.enumCases = enumCases;
    }
    toString() {
        return fullName(this);
    }
    GetHashCode() {
        return getHashCode(this);
    }
    Equals(other) {
        return equals(this, other);
    }
}
function getGenerics(t) {
    return t.generics != null ? t.generics : [];
}
function getHashCode(t) {
    const fullnameHash = (0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.stringHash)(t.fullname);
    const genHashes = getGenerics(t).map(getHashCode);
    return (0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.combineHashCodes)([fullnameHash, ...genHashes]);
}
function equals(t1, t2) {
    if (t1.fullname === "") { // Anonymous records
        return t2.fullname === ""
            && (0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.equalArraysWith)(getRecordElements(t1), getRecordElements(t2), ([k1, v1], [k2, v2]) => k1 === k2 && equals(v1, v2));
    }
    else {
        return t1.fullname === t2.fullname
            && (0,_Util_js__WEBPACK_IMPORTED_MODULE_1__.equalArraysWith)(getGenerics(t1), getGenerics(t2), equals);
    }
}
function class_type(fullname, generics, construct, parent) {
    return new TypeInfo(fullname, generics, construct, parent);
}
function record_type(fullname, generics, construct, fields) {
    return new TypeInfo(fullname, generics, construct, undefined, fields);
}
function anonRecord_type(...fields) {
    return new TypeInfo("", undefined, undefined, undefined, () => fields);
}
function union_type(fullname, generics, construct, cases) {
    const t = new TypeInfo(fullname, generics, construct, undefined, undefined, () => {
        const caseNames = construct.prototype.cases();
        return cases().map((fields, i) => new CaseInfo(t, i, caseNames[i], fields));
    });
    return t;
}
function tuple_type(...generics) {
    return new TypeInfo("System.Tuple`" + generics.length, generics);
}
function delegate_type(...generics) {
    return new TypeInfo("System.Func`" + generics.length, generics);
}
function lambda_type(argType, returnType) {
    return new TypeInfo("Microsoft.FSharp.Core.FSharpFunc`2", [argType, returnType]);
}
function option_type(generic) {
    return new TypeInfo("Microsoft.FSharp.Core.FSharpOption`1", [generic]);
}
function list_type(generic) {
    return new TypeInfo("Microsoft.FSharp.Collections.FSharpList`1", [generic]);
}
function array_type(generic) {
    return new TypeInfo(generic.fullname + "[]", [generic]);
}
function enum_type(fullname, underlyingType, enumCases) {
    return new TypeInfo(fullname, [underlyingType], undefined, undefined, undefined, undefined, enumCases);
}
const obj_type = new TypeInfo("System.Object");
const unit_type = new TypeInfo("Microsoft.FSharp.Core.Unit");
const char_type = new TypeInfo("System.Char");
const string_type = new TypeInfo("System.String");
const bool_type = new TypeInfo("System.Boolean");
const int8_type = new TypeInfo("System.SByte");
const uint8_type = new TypeInfo("System.Byte");
const int16_type = new TypeInfo("System.Int16");
const uint16_type = new TypeInfo("System.UInt16");
const int32_type = new TypeInfo("System.Int32");
const uint32_type = new TypeInfo("System.UInt32");
const float32_type = new TypeInfo("System.Single");
const float64_type = new TypeInfo("System.Double");
const decimal_type = new TypeInfo("System.Decimal");
function name(info) {
    if (Array.isArray(info)) {
        return info[0];
    }
    else if (info instanceof CaseInfo) {
        return info.name;
    }
    else {
        const i = info.fullname.lastIndexOf(".");
        return i === -1 ? info.fullname : info.fullname.substr(i + 1);
    }
}
function fullName(t) {
    const gen = t.generics != null && !isArray(t) ? t.generics : [];
    if (gen.length > 0) {
        return t.fullname + "[" + gen.map((x) => fullName(x)).join(",") + "]";
    }
    else {
        return t.fullname;
    }
}
function namespace(t) {
    const i = t.fullname.lastIndexOf(".");
    return i === -1 ? "" : t.fullname.substr(0, i);
}
function isArray(t) {
    return t.fullname.endsWith("[]");
}
function getElementType(t) {
    var _a;
    return isArray(t) ? (_a = t.generics) === null || _a === void 0 ? void 0 : _a[0] : undefined;
}
function isGenericType(t) {
    return t.generics != null && t.generics.length > 0;
}
function isEnum(t) {
    return t.enumCases != null && t.enumCases.length > 0;
}
function isSubclassOf(t1, t2) {
    var _a, _b;
    return (_b = (_a = t1.parent) === null || _a === void 0 ? void 0 : _a.Equals(t2)) !== null && _b !== void 0 ? _b : false;
}
/**
 * This doesn't replace types for fields (records) or cases (unions)
 * but it should be enough for type comparison purposes
 */
function getGenericTypeDefinition(t) {
    return t.generics == null ? t : new TypeInfo(t.fullname, t.generics.map(() => obj_type));
}
function getEnumUnderlyingType(t) {
    var _a;
    return (_a = t.generics) === null || _a === void 0 ? void 0 : _a[0];
}
function getEnumValues(t) {
    if (isEnum(t) && t.enumCases != null) {
        return t.enumCases.map((kv) => kv[1]);
    }
    else {
        throw new Error(`${t.fullname} is not an enum type`);
    }
}
function getEnumNames(t) {
    if (isEnum(t) && t.enumCases != null) {
        return t.enumCases.map((kv) => kv[0]);
    }
    else {
        throw new Error(`${t.fullname} is not an enum type`);
    }
}
function getEnumCase(t, v) {
    if (t.enumCases != null) {
        if (typeof v === "string") {
            for (const kv of t.enumCases) {
                if (kv[0] === v) {
                    return kv;
                }
            }
            throw new Error(`'${v}' was not found in ${t.fullname}`);
        }
        else {
            for (const kv of t.enumCases) {
                if (kv[1] === v) {
                    return kv;
                }
            }
            // .NET returns the number even if it doesn't match any of the cases
            return ["", v];
        }
    }
    else {
        throw new Error(`${t.fullname} is not an enum type`);
    }
}
function parseEnum(t, str) {
    // TODO: better int parsing here, parseInt ceils floats: "4.8" -> 4
    const value = parseInt(str, 10);
    return getEnumCase(t, isNaN(value) ? str : value)[1];
}
function tryParseEnum(t, str, defValue) {
    try {
        defValue.contents = parseEnum(t, str);
        return true;
    }
    catch (_a) {
        return false;
    }
}
function getEnumName(t, v) {
    return getEnumCase(t, v)[0];
}
function isEnumDefined(t, v) {
    try {
        const kv = getEnumCase(t, v);
        return kv[0] != null && kv[0] !== "";
    }
    catch (_a) {
        // supress error
    }
    return false;
}
// FSharpType
function getUnionCases(t) {
    if (t.cases != null) {
        return t.cases();
    }
    else {
        throw new Error(`${t.fullname} is not an F# union type`);
    }
}
function getRecordElements(t) {
    if (t.fields != null) {
        return t.fields();
    }
    else {
        throw new Error(`${t.fullname} is not an F# record type`);
    }
}
function getTupleElements(t) {
    if (isTuple(t) && t.generics != null) {
        return t.generics;
    }
    else {
        throw new Error(`${t.fullname} is not a tuple type`);
    }
}
function getFunctionElements(t) {
    if (isFunction(t) && t.generics != null) {
        const gen = t.generics;
        return [gen[0], gen[1]];
    }
    else {
        throw new Error(`${t.fullname} is not an F# function type`);
    }
}
function isUnion(t) {
    return t instanceof TypeInfo ? t.cases != null : t instanceof _Types_js__WEBPACK_IMPORTED_MODULE_0__.Union;
}
function isRecord(t) {
    return t instanceof TypeInfo ? t.fields != null : t instanceof _Types_js__WEBPACK_IMPORTED_MODULE_0__.Record;
}
function isTuple(t) {
    return t.fullname.startsWith("System.Tuple") && !isArray(t);
}
// In .NET this is false for delegates
function isFunction(t) {
    return t.fullname === "Microsoft.FSharp.Core.FSharpFunc`2";
}
// FSharpValue
function getUnionFields(v, t) {
    const cases = getUnionCases(t);
    const case_ = cases[v.tag];
    if (case_ == null) {
        throw new Error(`Cannot find case ${v.name} in union type`);
    }
    return [case_, v.fields];
}
function getUnionCaseFields(uci) {
    return uci.fields == null ? [] : uci.fields;
}
// This is used as replacement of `FSharpValue.GetRecordFields`
// For `FSharpTypes.GetRecordFields` see `getRecordElements`
// Object.keys returns keys in the order they were added to the object
function getRecordFields(v) {
    return Object.keys(v).map((k) => v[k]);
}
function getRecordField(v, field) {
    return v[field[0]];
}
function getTupleFields(v) {
    return v;
}
function getTupleField(v, i) {
    return v[i];
}
function makeUnion(uci, values) {
    const expectedLength = (uci.fields || []).length;
    if (values.length !== expectedLength) {
        throw new Error(`Expected an array of length ${expectedLength} but got ${values.length}`);
    }
    return uci.declaringType.construct != null
        ? new uci.declaringType.construct(uci.tag, ...values)
        : {};
}
function makeRecord(t, values) {
    const fields = getRecordElements(t);
    if (fields.length !== values.length) {
        throw new Error(`Expected an array of length ${fields.length} but got ${values.length}`);
    }
    return t.construct != null
        ? new t.construct(...values)
        : fields.reduce((obj, [key, _t], i) => {
            obj[key] = values[i];
            return obj;
        }, {});
}
function makeTuple(values, _t) {
    return values;
}
function makeGenericType(t, generics) {
    return new TypeInfo(t.fullname, generics, t.construct, t.parent, t.fields, t.cases);
}
function createInstance(t, consArgs) {
    // TODO: Check if consArgs length is same as t.construct?
    // (Arg types can still be different)
    if (typeof t.construct === "function") {
        return new t.construct(...(consArgs !== null && consArgs !== void 0 ? consArgs : []));
    }
    else {
        throw new Error(`Cannot access constructor of ${t.fullname}`);
    }
}
function getValue(propertyInfo, v) {
    return v[propertyInfo[0]];
}
// Fable.Core.Reflection
function assertUnion(x) {
    if (!(x instanceof _Types_js__WEBPACK_IMPORTED_MODULE_0__.Union)) {
        throw new Error(`Value is not an F# union type`);
    }
}
function getCaseTag(x) {
    assertUnion(x);
    return x.tag;
}
function getCaseName(x) {
    assertUnion(x);
    return x.cases()[x.tag];
}
function getCaseFields(x) {
    assertUnion(x);
    return x.fields;
}


/***/ }),

/***/ "./src/DevTools/.fable/fable-library.3.0.5/RegExp.js":
/*!***********************************************************!*\
  !*** ./src/DevTools/.fable/fable-library.3.0.5/RegExp.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "create": () => /* binding */ create,
/* harmony export */   "escape": () => /* binding */ escape,
/* harmony export */   "unescape": () => /* binding */ unescape,
/* harmony export */   "isMatch": () => /* binding */ isMatch,
/* harmony export */   "match": () => /* binding */ match,
/* harmony export */   "matches": () => /* binding */ matches,
/* harmony export */   "options": () => /* binding */ options,
/* harmony export */   "replace": () => /* binding */ replace,
/* harmony export */   "split": () => /* binding */ split
/* harmony export */ });
function create(pattern, options = 0) {
    // Supported RegexOptions
    // * IgnoreCase:  0x0001
    // * Multiline:   0x0002
    // * Singleline:  0x0010
    // * ECMAScript:  0x0100 (ignored)
    if ((options & ~(1 ^ 2 ^ 16 ^ 256)) !== 0) {
        throw new Error("RegexOptions only supports: IgnoreCase, Multiline, Singleline and ECMAScript");
    }
    let flags = "g";
    flags += options & 1 ? "i" : ""; // 0x0001 RegexOptions.IgnoreCase
    flags += options & 2 ? "m" : "";
    flags += options & 16 ? "s" : "";
    return new RegExp(pattern, flags);
}
// From http://stackoverflow.com/questions/3446170/escape-string-for-use-in-javascript-regex
function escape(str) {
    return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
}
function unescape(str) {
    return str.replace(/\\([\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|])/g, "$1");
}
function isMatch(str, pattern, options = 0) {
    let reg;
    reg = str instanceof RegExp
        ? (reg = str, str = pattern, reg.lastIndex = options, reg)
        : reg = create(pattern, options);
    return reg.test(str);
}
function match(str, pattern, options = 0) {
    let reg;
    reg = str instanceof RegExp
        ? (reg = str, str = pattern, reg.lastIndex = options, reg)
        : reg = create(pattern, options);
    return reg.exec(str);
}
function matches(str, pattern, options = 0) {
    let reg;
    reg = str instanceof RegExp
        ? (reg = str, str = pattern, reg.lastIndex = options, reg)
        : reg = create(pattern, options);
    if (!reg.global) {
        throw new Error("Non-global RegExp"); // Prevent infinite loop
    }
    let m = reg.exec(str);
    const matches = [];
    while (m !== null) {
        matches.push(m);
        m = reg.exec(str);
    }
    return matches;
}
function options(reg) {
    let options = 256; // ECMAScript
    options |= reg.ignoreCase ? 1 : 0;
    options |= reg.multiline ? 2 : 0;
    return options;
}
function replace(reg, input, replacement, limit, offset = 0) {
    function replacer() {
        let res = arguments[0];
        if (limit) {
            limit--;
            const match = [];
            const len = arguments.length;
            for (let i = 0; i < len - 2; i++) {
                match.push(arguments[i]);
            }
            match.index = arguments[len - 2];
            match.input = arguments[len - 1];
            res = replacement(match);
        }
        return res;
    }
    if (typeof reg === "string") {
        const tmp = reg;
        reg = create(input, limit !== null && limit !== void 0 ? limit : 0);
        input = tmp;
        limit = undefined;
    }
    if (typeof replacement === "function") {
        limit = limit == null ? -1 : limit;
        return input.substring(0, offset) + input.substring(offset).replace(reg, replacer);
    }
    else {
        // $0 doesn't work with JS regex, see #1155
        replacement = replacement.replace(/\$0/g, (_s) => "$&");
        if (limit != null) {
            let m;
            const sub1 = input.substring(offset);
            const _matches = matches(reg, sub1);
            const sub2 = matches.length > limit ? (m = _matches[limit - 1], sub1.substring(0, m.index + m[0].length)) : sub1;
            return input.substring(0, offset) + sub2.replace(reg, replacement)
                + input.substring(offset + sub2.length);
        }
        else {
            return input.replace(reg, replacement);
        }
    }
}
function split(reg, input, limit, offset = 0) {
    if (typeof reg === "string") {
        const tmp = reg;
        reg = create(input, limit !== null && limit !== void 0 ? limit : 0);
        input = tmp;
        limit = undefined;
    }
    input = input.substring(offset);
    return input.split(reg, limit);
}


/***/ }),

/***/ "./src/DevTools/.fable/fable-library.3.0.5/Seq.js":
/*!********************************************************!*\
  !*** ./src/DevTools/.fable/fable-library.3.0.5/Seq.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Enumerator": () => /* binding */ Enumerator,
/* harmony export */   "getEnumerator": () => /* binding */ getEnumerator,
/* harmony export */   "toIterator": () => /* binding */ toIterator,
/* harmony export */   "ofArray": () => /* binding */ ofArray,
/* harmony export */   "allPairs": () => /* binding */ allPairs,
/* harmony export */   "append": () => /* binding */ append,
/* harmony export */   "average": () => /* binding */ average,
/* harmony export */   "averageBy": () => /* binding */ averageBy,
/* harmony export */   "concat": () => /* binding */ concat,
/* harmony export */   "collect": () => /* binding */ collect,
/* harmony export */   "choose": () => /* binding */ choose,
/* harmony export */   "compareWith": () => /* binding */ compareWith,
/* harmony export */   "delay": () => /* binding */ delay,
/* harmony export */   "empty": () => /* binding */ empty,
/* harmony export */   "singleton": () => /* binding */ singleton,
/* harmony export */   "enumerateFromFunctions": () => /* binding */ enumerateFromFunctions,
/* harmony export */   "enumerateWhile": () => /* binding */ enumerateWhile,
/* harmony export */   "enumerateThenFinally": () => /* binding */ enumerateThenFinally,
/* harmony export */   "enumerateUsing": () => /* binding */ enumerateUsing,
/* harmony export */   "exactlyOne": () => /* binding */ exactlyOne,
/* harmony export */   "except": () => /* binding */ except,
/* harmony export */   "exists": () => /* binding */ exists,
/* harmony export */   "exists2": () => /* binding */ exists2,
/* harmony export */   "forAll": () => /* binding */ forAll,
/* harmony export */   "forAll2": () => /* binding */ forAll2,
/* harmony export */   "contains": () => /* binding */ contains,
/* harmony export */   "filter": () => /* binding */ filter,
/* harmony export */   "where": () => /* binding */ where,
/* harmony export */   "fold": () => /* binding */ fold,
/* harmony export */   "foldBack": () => /* binding */ foldBack,
/* harmony export */   "fold2": () => /* binding */ fold2,
/* harmony export */   "foldBack2": () => /* binding */ foldBack2,
/* harmony export */   "tryHead": () => /* binding */ tryHead,
/* harmony export */   "head": () => /* binding */ head,
/* harmony export */   "initialize": () => /* binding */ initialize,
/* harmony export */   "initializeInfinite": () => /* binding */ initializeInfinite,
/* harmony export */   "tryItem": () => /* binding */ tryItem,
/* harmony export */   "item": () => /* binding */ item,
/* harmony export */   "iterate": () => /* binding */ iterate,
/* harmony export */   "iterate2": () => /* binding */ iterate2,
/* harmony export */   "iterateIndexed": () => /* binding */ iterateIndexed,
/* harmony export */   "iterateIndexed2": () => /* binding */ iterateIndexed2,
/* harmony export */   "isEmpty": () => /* binding */ isEmpty,
/* harmony export */   "tryLast": () => /* binding */ tryLast,
/* harmony export */   "last": () => /* binding */ last,
/* harmony export */   "length": () => /* binding */ length,
/* harmony export */   "map": () => /* binding */ map,
/* harmony export */   "mapIndexed": () => /* binding */ mapIndexed,
/* harmony export */   "indexed": () => /* binding */ indexed,
/* harmony export */   "map2": () => /* binding */ map2,
/* harmony export */   "mapIndexed2": () => /* binding */ mapIndexed2,
/* harmony export */   "map3": () => /* binding */ map3,
/* harmony export */   "mapFold": () => /* binding */ mapFold,
/* harmony export */   "mapFoldBack": () => /* binding */ mapFoldBack,
/* harmony export */   "max": () => /* binding */ max,
/* harmony export */   "maxBy": () => /* binding */ maxBy,
/* harmony export */   "min": () => /* binding */ min,
/* harmony export */   "minBy": () => /* binding */ minBy,
/* harmony export */   "pairwise": () => /* binding */ pairwise,
/* harmony export */   "rangeChar": () => /* binding */ rangeChar,
/* harmony export */   "rangeLong": () => /* binding */ rangeLong,
/* harmony export */   "rangeDecimal": () => /* binding */ rangeDecimal,
/* harmony export */   "rangeNumber": () => /* binding */ rangeNumber,
/* harmony export */   "readOnly": () => /* binding */ readOnly,
/* harmony export */   "reduce": () => /* binding */ reduce,
/* harmony export */   "reduceBack": () => /* binding */ reduceBack,
/* harmony export */   "replicate": () => /* binding */ replicate,
/* harmony export */   "reverse": () => /* binding */ reverse,
/* harmony export */   "scan": () => /* binding */ scan,
/* harmony export */   "scanBack": () => /* binding */ scanBack,
/* harmony export */   "skip": () => /* binding */ skip,
/* harmony export */   "skipWhile": () => /* binding */ skipWhile,
/* harmony export */   "sortWith": () => /* binding */ sortWith,
/* harmony export */   "sum": () => /* binding */ sum,
/* harmony export */   "sumBy": () => /* binding */ sumBy,
/* harmony export */   "tail": () => /* binding */ tail,
/* harmony export */   "take": () => /* binding */ take,
/* harmony export */   "truncate": () => /* binding */ truncate,
/* harmony export */   "takeWhile": () => /* binding */ takeWhile,
/* harmony export */   "tryFind": () => /* binding */ tryFind,
/* harmony export */   "find": () => /* binding */ find,
/* harmony export */   "tryFindBack": () => /* binding */ tryFindBack,
/* harmony export */   "findBack": () => /* binding */ findBack,
/* harmony export */   "tryFindIndex": () => /* binding */ tryFindIndex,
/* harmony export */   "findIndex": () => /* binding */ findIndex,
/* harmony export */   "tryFindIndexBack": () => /* binding */ tryFindIndexBack,
/* harmony export */   "findIndexBack": () => /* binding */ findIndexBack,
/* harmony export */   "tryPick": () => /* binding */ tryPick,
/* harmony export */   "pick": () => /* binding */ pick,
/* harmony export */   "unfold": () => /* binding */ unfold,
/* harmony export */   "zip": () => /* binding */ zip,
/* harmony export */   "zip3": () => /* binding */ zip3,
/* harmony export */   "windowed": () => /* binding */ windowed,
/* harmony export */   "transpose": () => /* binding */ transpose
/* harmony export */ });
/* harmony import */ var _Decimal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Decimal.js */ "./src/DevTools/.fable/fable-library.3.0.5/Decimal.js");
/* harmony import */ var _Long_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Long.js */ "./src/DevTools/.fable/fable-library.3.0.5/Long.js");
/* harmony import */ var _Option_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Option.js */ "./src/DevTools/.fable/fable-library.3.0.5/Option.js");
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Util.js */ "./src/DevTools/.fable/fable-library.3.0.5/Util.js");




class Enumerator {
    constructor(iter) {
        this.iter = iter;
    }
    ["System.Collections.Generic.IEnumerator`1.get_Current"]() {
        return this.current;
    }
    ["System.Collections.IEnumerator.get_Current"]() {
        return this.current;
    }
    ["System.Collections.IEnumerator.MoveNext"]() {
        const cur = this.iter.next();
        this.current = cur.value;
        return !cur.done;
    }
    ["System.Collections.IEnumerator.Reset"]() {
        throw new Error("JS iterators cannot be reset");
    }
    Dispose() {
        return;
    }
}
function getEnumerator(o) {
    return typeof o.GetEnumerator === "function"
        ? o.GetEnumerator()
        : new Enumerator(o[Symbol.iterator]());
}
function toIterator(en) {
    return {
        [Symbol.iterator]() { return this; },
        next() {
            const hasNext = en["System.Collections.IEnumerator.MoveNext"]();
            const current = hasNext ? en["System.Collections.IEnumerator.get_Current"]() : undefined;
            return { done: !hasNext, value: current };
        },
    };
}
// export function toIterable<T>(en: IEnumerable<T>): Iterable<T> {
//   return {
//     [Symbol.iterator]() {
//       return toIterator(en.GetEnumerator());
//     },
//   };
// }
function __failIfNone(res) {
    if (res == null) {
        throw new Error("Seq did not contain any matching element");
    }
    return (0,_Option_js__WEBPACK_IMPORTED_MODULE_2__.value)(res);
}
class Seq {
    constructor(f) {
        this.f = f;
    }
    [Symbol.iterator]() { return new Seq(this.f); }
    next() {
        var _a;
        this.iter = (_a = this.iter) !== null && _a !== void 0 ? _a : this.f();
        return this.iter.next();
    }
    toString() {
        return "seq [" + Array.from(this).join("; ") + "]";
    }
}
function makeSeq(f) {
    return new Seq(f);
}
function isArrayOrBufferView(xs) {
    return Array.isArray(xs) || ArrayBuffer.isView(xs);
}
function ofArray(xs) {
    if (Array.isArray(xs)) {
        return delay(() => xs);
    }
    else {
        return delay(() => unfold((i) => i != null && i < xs.length ? [xs[i], i + 1] : undefined, 0));
    }
}
function allPairs(xs, ys) {
    let firstEl = true;
    const ysCache = [];
    return collect((x) => {
        if (firstEl) {
            firstEl = false;
            return map((y) => {
                ysCache.push(y);
                return [x, y];
            }, ys);
        }
        else {
            return ysCache.map((y) => [x, y]);
            // return map(function (i) {
            //     return [x, ysCache[i]];
            // }, rangeNumber(0, 1, ysCache.length - 1));
        }
    }, xs);
}
function append(xs, ys) {
    return delay(() => {
        let firstDone = false;
        const i = xs[Symbol.iterator]();
        let iters = [i, undefined];
        return unfold(() => {
            var _a, _b;
            let cur;
            if (!firstDone) {
                cur = (_a = iters[0]) === null || _a === void 0 ? void 0 : _a.next();
                if (cur != null && !cur.done) {
                    return [cur.value, iters];
                }
                else {
                    firstDone = true;
                    iters = [undefined, ys[Symbol.iterator]()];
                }
            }
            cur = (_b = iters[1]) === null || _b === void 0 ? void 0 : _b.next();
            return cur != null && !cur.done ? [cur.value, iters] : undefined;
        }, iters);
    });
}
function average(xs, averager) {
    let count = 0;
    const total = fold((acc, x) => {
        count++;
        return averager.Add(acc, x);
    }, averager.GetZero(), xs);
    return averager.DivideByInt(total, count);
}
function averageBy(f, xs, averager) {
    let count = 0;
    const total = fold((acc, x) => {
        count++;
        return averager.Add(acc, f(x));
    }, averager.GetZero(), xs);
    return averager.DivideByInt(total, count);
}
function concat(xs) {
    return delay(() => {
        const iter = xs[Symbol.iterator]();
        let output;
        return unfold((innerIter) => {
            let hasFinished = false;
            while (!hasFinished) {
                if (innerIter == null) {
                    const cur = iter.next();
                    if (!cur.done) {
                        innerIter = cur.value[Symbol.iterator]();
                    }
                    else {
                        hasFinished = true;
                    }
                }
                else {
                    const cur = innerIter.next();
                    if (!cur.done) {
                        output = cur.value;
                        hasFinished = true;
                    }
                    else {
                        innerIter = undefined;
                    }
                }
            }
            return innerIter != null ? [output, innerIter] : undefined;
        }, undefined);
    });
}
function collect(f, xs) {
    return concat(map(f, xs));
}
function choose(f, xs) {
    return delay(() => unfold((iter) => {
        let cur = iter.next();
        while (!cur.done) {
            const y = f(cur.value);
            if (y != null) {
                return [(0,_Option_js__WEBPACK_IMPORTED_MODULE_2__.value)(y), iter];
            }
            cur = iter.next();
        }
        return undefined;
    }, xs[Symbol.iterator]()));
}
function compareWith(f, xs, ys) {
    if (xs === ys) {
        return 0;
    }
    let cur1;
    let cur2;
    let c = 0;
    for (const iter1 = xs[Symbol.iterator](), iter2 = ys[Symbol.iterator]();;) {
        cur1 = iter1.next();
        cur2 = iter2.next();
        if (cur1.done || cur2.done) {
            break;
        }
        c = f(cur1.value, cur2.value);
        if (c !== 0) {
            break;
        }
    }
    return (c !== 0) ? c : (cur1.done && !cur2.done) ? -1 : (!cur1.done && cur2.done) ? 1 : 0;
}
function delay(f) {
    return makeSeq(() => f()[Symbol.iterator]());
}
function empty() {
    return delay(() => []);
}
function singleton(y) {
    return delay(() => [y]);
}
function enumerateFromFunctions(factory, moveNext, current) {
    return delay(() => unfold((e) => moveNext(e) ? [current(e), e] : undefined, factory()));
}
function enumerateWhile(cond, xs) {
    return concat(unfold(() => cond() ? [xs, true] : undefined, undefined));
}
function enumerateThenFinally(xs, finalFn) {
    return delay(() => {
        let iter;
        try {
            iter = xs[Symbol.iterator]();
        }
        catch (err) {
            try {
                return empty();
            }
            finally {
                finalFn();
            }
        }
        return unfold((it) => {
            try {
                const cur = it.next();
                return !cur.done ? [cur.value, it] : undefined;
            }
            catch (err) {
                return undefined;
            }
            finally {
                finalFn();
            }
        }, iter);
    });
}
function enumerateUsing(disp, work) {
    let isDisposed = false;
    const disposeOnce = () => {
        if (!isDisposed) {
            isDisposed = true;
            disp.Dispose();
        }
    };
    try {
        return enumerateThenFinally(work(disp), disposeOnce);
    }
    catch (err) {
        return void 0;
    }
    finally {
        disposeOnce();
    }
}
function exactlyOne(xs) {
    const iter = xs[Symbol.iterator]();
    const fst = iter.next();
    if (fst.done) {
        throw new Error("Seq was empty");
    }
    const snd = iter.next();
    if (!snd.done) {
        throw new Error("Seq had multiple items");
    }
    return fst.value;
}
function except(itemsToExclude, source) {
    const exclusionItems = Array.from(itemsToExclude);
    const testIsNotInExclusionItems = (element) => !exclusionItems.some((excludedItem) => (0,_Util_js__WEBPACK_IMPORTED_MODULE_3__.equals)(excludedItem, element));
    return filter(testIsNotInExclusionItems, source);
}
function exists(f, xs) {
    let cur;
    for (const iter = xs[Symbol.iterator]();;) {
        cur = iter.next();
        if (cur.done) {
            break;
        }
        if (f(cur.value)) {
            return true;
        }
    }
    return false;
}
function exists2(f, xs, ys) {
    let cur1;
    let cur2;
    for (const iter1 = xs[Symbol.iterator](), iter2 = ys[Symbol.iterator]();;) {
        cur1 = iter1.next();
        cur2 = iter2.next();
        if (cur1.done || cur2.done) {
            break;
        }
        if (f(cur1.value, cur2.value)) {
            return true;
        }
    }
    return false;
}
function forAll(f, xs) {
    return !exists((x) => !f(x), xs);
}
function forAll2(f, xs, ys) {
    return !exists2((x, y) => !f(x, y), xs, ys);
}
function contains(i, xs) {
    return exists((x) => (0,_Util_js__WEBPACK_IMPORTED_MODULE_3__.equals)(x, i), xs);
}
function filter(f, xs) {
    return delay(() => unfold((iter) => {
        let cur = iter.next();
        while (!cur.done) {
            if (f(cur.value)) {
                return [cur.value, iter];
            }
            cur = iter.next();
        }
        return undefined;
    }, xs[Symbol.iterator]()));
}
function where(f, xs) {
    return filter(f, xs);
}
function fold(f, acc, xs) {
    if (isArrayOrBufferView(xs)) {
        return xs.reduce(f, acc);
    }
    else {
        let cur;
        for (let i = 0, iter = xs[Symbol.iterator]();; i++) {
            cur = iter.next();
            if (cur.done) {
                break;
            }
            acc = f(acc, cur.value, i);
        }
        return acc;
    }
}
function foldBack(f, xs, acc) {
    const arr = isArrayOrBufferView(xs) ? xs : Array.from(xs);
    for (let i = arr.length - 1; i >= 0; i--) {
        acc = f(arr[i], acc, i);
    }
    return acc;
}
function fold2(f, acc, xs, ys) {
    const iter1 = xs[Symbol.iterator]();
    const iter2 = ys[Symbol.iterator]();
    let cur1;
    let cur2;
    for (let i = 0;; i++) {
        cur1 = iter1.next();
        cur2 = iter2.next();
        if (cur1.done || cur2.done) {
            break;
        }
        acc = f(acc, cur1.value, cur2.value, i);
    }
    return acc;
}
function foldBack2(f, xs, ys, acc) {
    const ar1 = isArrayOrBufferView(xs) ? xs : Array.from(xs);
    const ar2 = isArrayOrBufferView(ys) ? ys : Array.from(ys);
    for (let i = ar1.length - 1; i >= 0; i--) {
        acc = f(ar1[i], ar2[i], acc, i);
    }
    return acc;
}
function tryHead(xs) {
    const iter = xs[Symbol.iterator]();
    const cur = iter.next();
    return cur.done ? undefined : (0,_Option_js__WEBPACK_IMPORTED_MODULE_2__.some)(cur.value);
}
function head(xs) {
    return __failIfNone(tryHead(xs));
}
function initialize(n, f) {
    return delay(() => unfold((i) => i < n ? [f(i), i + 1] : undefined, 0));
}
function initializeInfinite(f) {
    return delay(() => unfold((i) => [f(i), i + 1], 0));
}
function tryItem(i, xs) {
    if (i < 0) {
        return undefined;
    }
    if (isArrayOrBufferView(xs)) {
        return i < xs.length ? (0,_Option_js__WEBPACK_IMPORTED_MODULE_2__.some)(xs[i]) : undefined;
    }
    for (let j = 0, iter = xs[Symbol.iterator]();; j++) {
        const cur = iter.next();
        if (cur.done) {
            break;
        }
        if (j === i) {
            return (0,_Option_js__WEBPACK_IMPORTED_MODULE_2__.some)(cur.value);
        }
    }
    return undefined;
}
function item(i, xs) {
    return __failIfNone(tryItem(i, xs));
}
function iterate(f, xs) {
    fold((_, x) => (f(x), undefined), undefined, xs);
}
function iterate2(f, xs, ys) {
    fold2((_, x, y) => (f(x, y), undefined), undefined, xs, ys);
}
function iterateIndexed(f, xs) {
    fold((_, x, i) => (f(i !== null && i !== void 0 ? i : 0, x), undefined), undefined, xs);
}
function iterateIndexed2(f, xs, ys) {
    fold2((_, x, y, i) => (f(i !== null && i !== void 0 ? i : 0, x, y), undefined), undefined, xs, ys);
}
function isEmpty(xs) {
    const i = xs[Symbol.iterator]();
    return i.next().done;
}
function tryLast(xs) {
    return isEmpty(xs) ? undefined : (0,_Option_js__WEBPACK_IMPORTED_MODULE_2__.some)(reduce((_, x) => x, xs));
}
function last(xs) {
    return __failIfNone(tryLast(xs));
}
function length(xs) {
    return isArrayOrBufferView(xs)
        ? xs.length
        : fold((acc, _x) => acc + 1, 0, xs);
}
function map(f, xs) {
    return delay(() => unfold((iter) => {
        const cur = iter.next();
        return !cur.done ? [f(cur.value), iter] : undefined;
    }, xs[Symbol.iterator]()));
}
function mapIndexed(f, xs) {
    return delay(() => {
        let i = 0;
        return unfold((iter) => {
            const cur = iter.next();
            return !cur.done ? [f(i++, cur.value), iter] : undefined;
        }, xs[Symbol.iterator]());
    });
}
function indexed(xs) {
    return mapIndexed((i, x) => [i, x], xs);
}
function map2(f, xs, ys) {
    return delay(() => {
        const iter1 = xs[Symbol.iterator]();
        const iter2 = ys[Symbol.iterator]();
        return unfold(() => {
            const cur1 = iter1.next();
            const cur2 = iter2.next();
            return !cur1.done && !cur2.done ? [f(cur1.value, cur2.value), undefined] : undefined;
        }, undefined);
    });
}
function mapIndexed2(f, xs, ys) {
    return delay(() => {
        let i = 0;
        const iter1 = xs[Symbol.iterator]();
        const iter2 = ys[Symbol.iterator]();
        return unfold(() => {
            const cur1 = iter1.next();
            const cur2 = iter2.next();
            return !cur1.done && !cur2.done ? [f(i++, cur1.value, cur2.value), undefined] : undefined;
        }, undefined);
    });
}
function map3(f, xs, ys, zs) {
    return delay(() => {
        const iter1 = xs[Symbol.iterator]();
        const iter2 = ys[Symbol.iterator]();
        const iter3 = zs[Symbol.iterator]();
        return unfold(() => {
            const cur1 = iter1.next();
            const cur2 = iter2.next();
            const cur3 = iter3.next();
            return !cur1.done && !cur2.done && !cur3.done ? [f(cur1.value, cur2.value, cur3.value), undefined] : undefined;
        }, undefined);
    });
}
function mapFold(f, acc, xs, transform) {
    const result = [];
    let r;
    let cur;
    for (let i = 0, iter = xs[Symbol.iterator]();; i++) {
        cur = iter.next();
        if (cur.done) {
            break;
        }
        [r, acc] = f(acc, cur.value);
        result.push(r);
    }
    return transform !== void 0 ? [transform(result), acc] : [result, acc];
}
function mapFoldBack(f, xs, acc, transform) {
    const arr = isArrayOrBufferView(xs) ? xs : Array.from(xs);
    const result = [];
    let r;
    for (let i = arr.length - 1; i >= 0; i--) {
        [r, acc] = f(arr[i], acc);
        result.push(r);
    }
    return transform !== void 0 ? [transform(result), acc] : [result, acc];
}
function max(xs, comparer) {
    const compareFn = comparer != null ? comparer.Compare : _Util_js__WEBPACK_IMPORTED_MODULE_3__.compare;
    return reduce((acc, x) => compareFn(acc, x) === 1 ? acc : x, xs);
}
function maxBy(f, xs, comparer) {
    const compareFn = comparer != null ? comparer.Compare : _Util_js__WEBPACK_IMPORTED_MODULE_3__.compare;
    return reduce((acc, x) => compareFn(f(acc), f(x)) === 1 ? acc : x, xs);
}
function min(xs, comparer) {
    const compareFn = comparer != null ? comparer.Compare : _Util_js__WEBPACK_IMPORTED_MODULE_3__.compare;
    return reduce((acc, x) => compareFn(acc, x) === -1 ? acc : x, xs);
}
function minBy(f, xs, comparer) {
    const compareFn = comparer != null ? comparer.Compare : _Util_js__WEBPACK_IMPORTED_MODULE_3__.compare;
    return reduce((acc, x) => compareFn(f(acc), f(x)) === -1 ? acc : x, xs);
}
function pairwise(xs) {
    return delay(() => {
        const iter = xs[Symbol.iterator]();
        const cur = iter.next();
        if (cur.done) {
            return empty();
        }
        const hd = cur.value;
        const tl = tail(xs);
        const ys = scan(([_, last], next) => [last, next], [hd, hd], tl);
        return skip(1, ys);
    });
}
function rangeChar(first, last) {
    const firstNum = first.charCodeAt(0);
    const lastNum = last.charCodeAt(0);
    return delay(() => unfold((x) => x <= lastNum ? [String.fromCharCode(x), x + 1] : undefined, firstNum));
}
function rangeLong(first, step, last, unsigned) {
    const stepFn = (0,_Long_js__WEBPACK_IMPORTED_MODULE_1__.makeRangeStepFunction)(step, last, unsigned);
    return delay(() => unfold(stepFn, first));
}
function rangeDecimal(first, step, last) {
    const stepFn = (0,_Decimal_js__WEBPACK_IMPORTED_MODULE_0__.makeRangeStepFunction)(step, last);
    return delay(() => unfold(stepFn, first));
}
function rangeNumber(first, step, last) {
    if (step === 0) {
        throw new Error("Step cannot be 0");
    }
    return delay(() => unfold((x) => step > 0 && x <= last || step < 0 && x >= last ? [x, x + step] : undefined, first));
}
function readOnly(xs) {
    return map((x) => x, xs);
}
function reduce(f, xs) {
    if (isArrayOrBufferView(xs)) {
        return xs.reduce(f);
    }
    const iter = xs[Symbol.iterator]();
    let cur = iter.next();
    if (cur.done) {
        throw new Error("Seq was empty");
    }
    let acc = cur.value;
    while (true) {
        cur = iter.next();
        if (cur.done) {
            break;
        }
        acc = f(acc, cur.value);
    }
    return acc;
}
function reduceBack(f, xs) {
    const ar = isArrayOrBufferView(xs) ? xs : Array.from(xs);
    if (ar.length === 0) {
        throw new Error("Seq was empty");
    }
    let acc = ar[ar.length - 1];
    for (let i = ar.length - 2; i >= 0; i--) {
        acc = f(ar[i], acc, i);
    }
    return acc;
}
function replicate(n, x) {
    return initialize(n, () => x);
}
function reverse(xs) {
    const ar = isArrayOrBufferView(xs) ? xs.slice(0) : Array.from(xs);
    return ofArray(ar.reverse());
}
function scan(f, seed, xs) {
    return delay(() => {
        const iter = xs[Symbol.iterator]();
        return unfold((acc) => {
            if (acc == null) {
                return [seed, seed];
            }
            const cur = iter.next();
            if (!cur.done) {
                acc = f(acc, cur.value);
                return [acc, acc];
            }
            return undefined;
        }, undefined);
    });
}
function scanBack(f, xs, seed) {
    return reverse(scan((acc, x) => f(x, acc), seed, reverse(xs)));
}
function skip(n, xs) {
    return makeSeq(() => {
        const iter = xs[Symbol.iterator]();
        for (let i = 1; i <= n; i++) {
            if (iter.next().done) {
                throw new Error("Seq has not enough elements");
            }
        }
        return iter;
    });
}
function skipWhile(f, xs) {
    return delay(() => {
        let hasPassed = false;
        return filter((x) => hasPassed || (hasPassed = !f(x)), xs);
    });
}
function sortWith(f, xs) {
    const ys = Array.from(xs);
    return ofArray(ys.sort(f));
}
function sum(xs, adder) {
    return fold((acc, x) => adder.Add(acc, x), adder.GetZero(), xs);
}
function sumBy(f, xs, adder) {
    return fold((acc, x) => adder.Add(acc, f(x)), adder.GetZero(), xs);
}
function tail(xs) {
    return skip(1, xs);
}
function take(n, xs, truncate = false) {
    return delay(() => {
        const iter = xs[Symbol.iterator]();
        return unfold((i) => {
            if (i < n) {
                const cur = iter.next();
                if (!cur.done) {
                    return [cur.value, i + 1];
                }
                if (!truncate) {
                    throw new Error("Seq has not enough elements");
                }
            }
            return undefined;
        }, 0);
    });
}
function truncate(n, xs) {
    return take(n, xs, true);
}
function takeWhile(f, xs) {
    return delay(() => {
        const iter = xs[Symbol.iterator]();
        return unfold(() => {
            const cur = iter.next();
            if (!cur.done && f(cur.value)) {
                return [cur.value, undefined];
            }
            return undefined;
        }, 0);
    });
}
function tryFind(f, xs, defaultValue) {
    for (let i = 0, iter = xs[Symbol.iterator]();; i++) {
        const cur = iter.next();
        if (cur.done) {
            break;
        }
        if (f(cur.value, i)) {
            return (0,_Option_js__WEBPACK_IMPORTED_MODULE_2__.some)(cur.value);
        }
    }
    return defaultValue === void 0 ? undefined : (0,_Option_js__WEBPACK_IMPORTED_MODULE_2__.some)(defaultValue);
}
function find(f, xs) {
    return __failIfNone(tryFind(f, xs));
}
function tryFindBack(f, xs, defaultValue) {
    const arr = isArrayOrBufferView(xs) ? xs.slice(0) : Array.from(xs);
    return tryFind(f, arr.reverse(), defaultValue);
}
function findBack(f, xs) {
    return __failIfNone(tryFindBack(f, xs));
}
function tryFindIndex(f, xs) {
    for (let i = 0, iter = xs[Symbol.iterator]();; i++) {
        const cur = iter.next();
        if (cur.done) {
            break;
        }
        if (f(cur.value, i)) {
            return i;
        }
    }
    return undefined;
}
function findIndex(f, xs) {
    return __failIfNone(tryFindIndex(f, xs));
}
function tryFindIndexBack(f, xs) {
    const arr = isArrayOrBufferView(xs) ? xs.slice(0) : Array.from(xs);
    for (let i = arr.length - 1; i >= 0; i--) {
        if (f(arr[i], i)) {
            return i;
        }
    }
    return undefined;
}
function findIndexBack(f, xs) {
    return __failIfNone(tryFindIndexBack(f, xs));
}
function tryPick(f, xs) {
    for (let i = 0, iter = xs[Symbol.iterator]();; i++) {
        const cur = iter.next();
        if (cur.done) {
            break;
        }
        const y = f(cur.value, i);
        if (y != null) {
            return y;
        }
    }
    return undefined;
}
function pick(f, xs) {
    return __failIfNone(tryPick(f, xs));
}
function unfold(f, fst) {
    return makeSeq(() => {
        // Capture a copy of the first value in the closure
        // so the sequence is restarted every time, see #1230
        let acc = fst;
        const iter = {
            next() {
                const res = f(acc);
                if (res != null) {
                    const v = (0,_Option_js__WEBPACK_IMPORTED_MODULE_2__.value)(res);
                    if (v != null) {
                        acc = v[1];
                        return { done: false, value: v[0] };
                    }
                }
                return { done: true, value: undefined };
            },
        };
        return iter;
    });
}
function zip(xs, ys) {
    return map2((x, y) => [x, y], xs, ys);
}
function zip3(xs, ys, zs) {
    return map3((x, y, z) => [x, y, z], xs, ys, zs);
}
function windowed(windowSize, source) {
    if (windowSize <= 0) {
        throw new Error("windowSize must be positive");
    }
    return makeSeq(() => {
        let window = [];
        const iter = source[Symbol.iterator]();
        const iter2 = {
            next() {
                let cur;
                while (window.length < windowSize) {
                    if ((cur = iter.next()).done) {
                        return { done: true, value: undefined };
                    }
                    window.push(cur.value);
                }
                const value = window;
                window = window.slice(1);
                return { done: false, value };
            },
        };
        return iter2;
    });
}
function transpose(source) {
    return makeSeq(() => {
        const iters = Array.from(source, (x) => x[Symbol.iterator]());
        const iter = {
            next() {
                if (iters.length === 0) {
                    return { done: true, value: undefined }; // empty sequence
                }
                const results = Array.from(iters, (iter) => iter.next());
                if (results[0].done) {
                    if (!results.every((x) => x.done)) {
                        throw new Error("Sequences have different lengths");
                    }
                    return { done: true, value: undefined };
                }
                else {
                    if (!results.every((x) => !x.done)) {
                        throw new Error("Sequences have different lengths");
                    }
                    const values = results.map((x) => x.value);
                    return { done: false, value: values };
                }
            },
        };
        return iter;
    });
}


/***/ }),

/***/ "./src/DevTools/.fable/fable-library.3.0.5/String.js":
/*!***********************************************************!*\
  !*** ./src/DevTools/.fable/fable-library.3.0.5/String.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compare": () => /* binding */ compare,
/* harmony export */   "compareOrdinal": () => /* binding */ compareOrdinal,
/* harmony export */   "compareTo": () => /* binding */ compareTo,
/* harmony export */   "startsWith": () => /* binding */ startsWith,
/* harmony export */   "indexOfAny": () => /* binding */ indexOfAny,
/* harmony export */   "printf": () => /* binding */ printf,
/* harmony export */   "interpolate": () => /* binding */ interpolate,
/* harmony export */   "toConsole": () => /* binding */ toConsole,
/* harmony export */   "toConsoleError": () => /* binding */ toConsoleError,
/* harmony export */   "toText": () => /* binding */ toText,
/* harmony export */   "toFail": () => /* binding */ toFail,
/* harmony export */   "fsFormat": () => /* binding */ fsFormat,
/* harmony export */   "format": () => /* binding */ format,
/* harmony export */   "endsWith": () => /* binding */ endsWith,
/* harmony export */   "initialize": () => /* binding */ initialize,
/* harmony export */   "insert": () => /* binding */ insert,
/* harmony export */   "isNullOrEmpty": () => /* binding */ isNullOrEmpty,
/* harmony export */   "isNullOrWhiteSpace": () => /* binding */ isNullOrWhiteSpace,
/* harmony export */   "concat": () => /* binding */ concat,
/* harmony export */   "join": () => /* binding */ join,
/* harmony export */   "joinWithIndices": () => /* binding */ joinWithIndices,
/* harmony export */   "toBase64String": () => /* binding */ toBase64String,
/* harmony export */   "fromBase64String": () => /* binding */ fromBase64String,
/* harmony export */   "padLeft": () => /* binding */ padLeft,
/* harmony export */   "padRight": () => /* binding */ padRight,
/* harmony export */   "remove": () => /* binding */ remove,
/* harmony export */   "replace": () => /* binding */ replace,
/* harmony export */   "replicate": () => /* binding */ replicate,
/* harmony export */   "getCharAtIndex": () => /* binding */ getCharAtIndex,
/* harmony export */   "split": () => /* binding */ split,
/* harmony export */   "trim": () => /* binding */ trim,
/* harmony export */   "trimStart": () => /* binding */ trimStart,
/* harmony export */   "trimEnd": () => /* binding */ trimEnd,
/* harmony export */   "filter": () => /* binding */ filter,
/* harmony export */   "substring": () => /* binding */ substring
/* harmony export */ });
/* harmony import */ var _Date_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Date.js */ "./src/DevTools/.fable/fable-library.3.0.5/Date.js");
/* harmony import */ var _Decimal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Decimal.js */ "./src/DevTools/.fable/fable-library.3.0.5/Decimal.js");
/* harmony import */ var _Long_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Long.js */ "./src/DevTools/.fable/fable-library.3.0.5/Long.js");
/* harmony import */ var _RegExp_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./RegExp.js */ "./src/DevTools/.fable/fable-library.3.0.5/RegExp.js");
/* harmony import */ var _Types_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Types.js */ "./src/DevTools/.fable/fable-library.3.0.5/Types.js");





const fsFormatRegExp = /(^|[^%])%([0+\- ]*)(\d+)?(?:\.(\d+))?(\w)/;
const interpolateRegExp = /(?:(^|[^%])%([0+\- ]*)(\d+)?(?:\.(\d+))?(\w))?%P\(\)/g;
const formatRegExp = /\{(\d+)(,-?\d+)?(?:\:([a-zA-Z])(\d{0,2})|\:(.+?))?\}/g;
// These are used for formatting and only take longs and decimals into account (no bigint)
function isNumeric(x) {
    return typeof x === "number" || x instanceof _Long_js__WEBPACK_IMPORTED_MODULE_2__.default || x instanceof _Decimal_js__WEBPACK_IMPORTED_MODULE_1__.default;
}
function isLessThan(x, y) {
    if (x instanceof _Long_js__WEBPACK_IMPORTED_MODULE_2__.default) {
        return _Long_js__WEBPACK_IMPORTED_MODULE_2__.compare(x, y) < 0;
    }
    else if (x instanceof _Decimal_js__WEBPACK_IMPORTED_MODULE_1__.default) {
        return x.cmp(y) < 0;
    }
    else {
        return x < y;
    }
}
function multiply(x, y) {
    if (x instanceof _Long_js__WEBPACK_IMPORTED_MODULE_2__.default) {
        return _Long_js__WEBPACK_IMPORTED_MODULE_2__.op_Multiply(x, y);
    }
    else if (x instanceof _Decimal_js__WEBPACK_IMPORTED_MODULE_1__.default) {
        return x.mul(y);
    }
    else {
        return x * y;
    }
}
function toFixed(x, dp) {
    if (x instanceof _Long_js__WEBPACK_IMPORTED_MODULE_2__.default) {
        return String(x) + (0).toFixed(dp).substr(1);
    }
    else {
        return x.toFixed(dp);
    }
}
function toPrecision(x, sd) {
    if (x instanceof _Long_js__WEBPACK_IMPORTED_MODULE_2__.default) {
        return String(x) + (0).toPrecision(sd).substr(1);
    }
    else {
        return x.toPrecision(sd);
    }
}
function toExponential(x, dp) {
    if (x instanceof _Long_js__WEBPACK_IMPORTED_MODULE_2__.default) {
        return String(x) + (0).toExponential(dp).substr(1);
    }
    else {
        return x.toExponential(dp);
    }
}
function cmp(x, y, ic) {
    function isIgnoreCase(i) {
        return i === true ||
            i === 1 /* CurrentCultureIgnoreCase */ ||
            i === 3 /* InvariantCultureIgnoreCase */ ||
            i === 5 /* OrdinalIgnoreCase */;
    }
    function isOrdinal(i) {
        return i === 4 /* Ordinal */ ||
            i === 5 /* OrdinalIgnoreCase */;
    }
    if (x == null) {
        return y == null ? 0 : -1;
    }
    if (y == null) {
        return 1;
    } // everything is bigger than null
    if (isOrdinal(ic)) {
        if (isIgnoreCase(ic)) {
            x = x.toLowerCase();
            y = y.toLowerCase();
        }
        return (x === y) ? 0 : (x < y ? -1 : 1);
    }
    else {
        if (isIgnoreCase(ic)) {
            x = x.toLocaleLowerCase();
            y = y.toLocaleLowerCase();
        }
        return x.localeCompare(y);
    }
}
function compare(...args) {
    switch (args.length) {
        case 2: return cmp(args[0], args[1], false);
        case 3: return cmp(args[0], args[1], args[2]);
        case 4: return cmp(args[0], args[1], args[2] === true);
        case 5: return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), false);
        case 6: return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5]);
        case 7: return cmp(args[0].substr(args[1], args[4]), args[2].substr(args[3], args[4]), args[5] === true);
        default: throw new Error("String.compare: Unsupported number of parameters");
    }
}
function compareOrdinal(x, y) {
    return cmp(x, y, 4 /* Ordinal */);
}
function compareTo(x, y) {
    return cmp(x, y, 0 /* CurrentCulture */);
}
function startsWith(str, pattern, ic) {
    if (str.length >= pattern.length) {
        return cmp(str.substr(0, pattern.length), pattern, ic) === 0;
    }
    return false;
}
function indexOfAny(str, anyOf, ...args) {
    if (str == null || str === "") {
        return -1;
    }
    const startIndex = (args.length > 0) ? args[0] : 0;
    if (startIndex < 0) {
        throw new Error("Start index cannot be negative");
    }
    const length = (args.length > 1) ? args[1] : str.length - startIndex;
    if (length < 0) {
        throw new Error("Length cannot be negative");
    }
    if (length > str.length - startIndex) {
        throw new Error("Invalid startIndex and length");
    }
    str = str.substr(startIndex, length);
    for (const c of anyOf) {
        const index = str.indexOf(c);
        if (index > -1) {
            return index + startIndex;
        }
    }
    return -1;
}
function toHex(x) {
    if (x instanceof _Long_js__WEBPACK_IMPORTED_MODULE_2__.default) {
        return _Long_js__WEBPACK_IMPORTED_MODULE_2__.toString(x.unsigned ? x : _Long_js__WEBPACK_IMPORTED_MODULE_2__.fromBytes(_Long_js__WEBPACK_IMPORTED_MODULE_2__.toBytes(x), true), 16);
    }
    else {
        return (Number(x) >>> 0).toString(16);
    }
}
function printf(input) {
    return {
        input,
        cont: fsFormat(input),
    };
}
function interpolate(input, values) {
    let i = 0;
    return input.replace(interpolateRegExp, (_, prefix, flags, padLength, precision, format) => {
        return formatReplacement(values[i++], prefix, flags, padLength, precision, format);
    });
}
function continuePrint(cont, arg) {
    return typeof arg === "string" ? cont(arg) : arg.cont(cont);
}
function toConsole(arg) {
    // Don't remove the lambda here, see #1357
    return continuePrint((x) => console.log(x), arg);
}
function toConsoleError(arg) {
    return continuePrint((x) => console.error(x), arg);
}
function toText(arg) {
    return continuePrint((x) => x, arg);
}
function toFail(arg) {
    return continuePrint((x) => {
        throw new Error(x);
    }, arg);
}
function formatReplacement(rep, prefix, flags, padLength, precision, format) {
    let sign = "";
    flags = flags || "";
    format = format || "";
    if (isNumeric(rep)) {
        if (format.toLowerCase() !== "x") {
            if (isLessThan(rep, 0)) {
                rep = multiply(rep, -1);
                sign = "-";
            }
            else {
                if (flags.indexOf(" ") >= 0) {
                    sign = " ";
                }
                else if (flags.indexOf("+") >= 0) {
                    sign = "+";
                }
            }
        }
        precision = precision == null ? null : parseInt(precision, 10);
        switch (format) {
            case "f":
            case "F":
                precision = precision != null ? precision : 6;
                rep = toFixed(rep, precision);
                break;
            case "g":
            case "G":
                rep = precision != null ? toPrecision(rep, precision) : toPrecision(rep);
                break;
            case "e":
            case "E":
                rep = precision != null ? toExponential(rep, precision) : toExponential(rep);
                break;
            case "x":
                rep = toHex(rep);
                break;
            case "X":
                rep = toHex(rep).toUpperCase();
                break;
            default: // AOid
                rep = String(rep);
                break;
        }
    }
    else if (rep instanceof Date) {
        rep = (0,_Date_js__WEBPACK_IMPORTED_MODULE_0__.toString)(rep);
    }
    else {
        rep = (0,_Types_js__WEBPACK_IMPORTED_MODULE_4__.toString)(rep);
    }
    padLength = parseInt(padLength, 10);
    if (!isNaN(padLength)) {
        const zeroFlag = flags.indexOf("0") >= 0; // Use '0' for left padding
        const minusFlag = flags.indexOf("-") >= 0; // Right padding
        const ch = minusFlag || !zeroFlag ? " " : "0";
        if (ch === "0") {
            rep = padLeft(rep, padLength - sign.length, ch, minusFlag);
            rep = sign + rep;
        }
        else {
            rep = padLeft(sign + rep, padLength, ch, minusFlag);
        }
    }
    else {
        rep = sign + rep;
    }
    return prefix ? prefix + rep : rep;
}
function formatOnce(str2, rep) {
    return str2.replace(fsFormatRegExp, (_, prefix, flags, padLength, precision, format) => {
        const once = formatReplacement(rep, prefix, flags, padLength, precision, format);
        return once.replace(/%/g, "%%");
    });
}
function createPrinter(str, cont) {
    return (...args) => {
        // Make a copy as the function may be used several times
        let strCopy = str;
        for (const arg of args) {
            strCopy = formatOnce(strCopy, arg);
        }
        return fsFormatRegExp.test(strCopy)
            ? createPrinter(strCopy, cont)
            : cont(strCopy.replace(/%%/g, "%"));
    };
}
function fsFormat(str) {
    return (cont) => {
        return fsFormatRegExp.test(str)
            ? createPrinter(str, cont)
            : cont(str);
    };
}
function format(str, ...args) {
    if (typeof str === "object" && args.length > 0) {
        // Called with culture info
        str = args[0];
        args.shift();
    }
    return str.replace(formatRegExp, (_, idx, padLength, format, precision, pattern) => {
        let rep = args[idx];
        if (isNumeric(rep)) {
            precision = precision == null ? null : parseInt(precision, 10);
            switch (format) {
                case "f":
                case "F":
                    precision = precision != null ? precision : 2;
                    rep = toFixed(rep, precision);
                    break;
                case "g":
                case "G":
                    rep = precision != null ? toPrecision(rep, precision) : toPrecision(rep);
                    break;
                case "e":
                case "E":
                    rep = precision != null ? toExponential(rep, precision) : toExponential(rep);
                    break;
                case "p":
                case "P":
                    precision = precision != null ? precision : 2;
                    rep = toFixed(multiply(rep, 100), precision) + " %";
                    break;
                case "d":
                case "D":
                    rep = precision != null ? padLeft(String(rep), precision, "0") : String(rep);
                    break;
                case "x":
                case "X":
                    rep = precision != null ? padLeft(toHex(rep), precision, "0") : toHex(rep);
                    if (format === "X") {
                        rep = rep.toUpperCase();
                    }
                    break;
                default:
                    if (pattern) {
                        let sign = "";
                        rep = pattern.replace(/(0+)(\.0+)?/, (_, intPart, decimalPart) => {
                            if (isLessThan(rep, 0)) {
                                rep = multiply(rep, -1);
                                sign = "-";
                            }
                            rep = toFixed(rep, decimalPart != null ? decimalPart.length - 1 : 0);
                            return padLeft(rep, (intPart || "").length - sign.length + (decimalPart != null ? decimalPart.length : 0), "0");
                        });
                        rep = sign + rep;
                    }
            }
        }
        else if (rep instanceof Date) {
            rep = (0,_Date_js__WEBPACK_IMPORTED_MODULE_0__.toString)(rep, pattern || format);
        }
        else {
            rep = (0,_Types_js__WEBPACK_IMPORTED_MODULE_4__.toString)(rep);
        }
        padLength = parseInt((padLength || " ").substring(1), 10);
        if (!isNaN(padLength)) {
            rep = padLeft(String(rep), Math.abs(padLength), " ", padLength < 0);
        }
        return rep;
    });
}
function endsWith(str, search) {
    const idx = str.lastIndexOf(search);
    return idx >= 0 && idx === str.length - search.length;
}
function initialize(n, f) {
    if (n < 0) {
        throw new Error("String length must be non-negative");
    }
    const xs = new Array(n);
    for (let i = 0; i < n; i++) {
        xs[i] = f(i);
    }
    return xs.join("");
}
function insert(str, startIndex, value) {
    if (startIndex < 0 || startIndex > str.length) {
        throw new Error("startIndex is negative or greater than the length of this instance.");
    }
    return str.substring(0, startIndex) + value + str.substring(startIndex);
}
function isNullOrEmpty(str) {
    return typeof str !== "string" || str.length === 0;
}
function isNullOrWhiteSpace(str) {
    return typeof str !== "string" || /^\s*$/.test(str);
}
function concat(...xs) {
    return xs.map((x) => String(x)).join("");
}
function join(delimiter, xs) {
    if (Array.isArray(xs)) {
        return xs.join(delimiter);
    }
    else {
        return Array.from(xs).join(delimiter);
    }
}
function joinWithIndices(delimiter, xs, startIndex, count) {
    const endIndexPlusOne = startIndex + count;
    if (endIndexPlusOne > xs.length) {
        throw new Error("Index and count must refer to a location within the buffer.");
    }
    return xs.slice(startIndex, endIndexPlusOne).join(delimiter);
}
function notSupported(name) {
    throw new Error("The environment doesn't support '" + name + "', please use a polyfill.");
}
function toBase64String(inArray) {
    let str = "";
    for (let i = 0; i < inArray.length; i++) {
        str += String.fromCharCode(inArray[i]);
    }
    return typeof btoa === "function" ? btoa(str) : notSupported("btoa");
}
function fromBase64String(b64Encoded) {
    const binary = typeof atob === "function" ? atob(b64Encoded) : notSupported("atob");
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}
function padLeft(str, len, ch, isRight) {
    ch = ch || " ";
    len = len - str.length;
    for (let i = 0; i < len; i++) {
        str = isRight ? str + ch : ch + str;
    }
    return str;
}
function padRight(str, len, ch) {
    return padLeft(str, len, ch, true);
}
function remove(str, startIndex, count) {
    if (startIndex >= str.length) {
        throw new Error("startIndex must be less than length of string");
    }
    if (typeof count === "number" && (startIndex + count) > str.length) {
        throw new Error("Index and count must refer to a location within the string.");
    }
    return str.slice(0, startIndex) + (typeof count === "number" ? str.substr(startIndex + count) : "");
}
function replace(str, search, replace) {
    return str.replace(new RegExp((0,_RegExp_js__WEBPACK_IMPORTED_MODULE_3__.escape)(search), "g"), replace);
}
function replicate(n, x) {
    return initialize(n, () => x);
}
function getCharAtIndex(input, index) {
    if (index < 0 || index >= input.length) {
        throw new Error("Index was outside the bounds of the array.");
    }
    return input[index];
}
function split(str, splitters, count, removeEmpty) {
    count = typeof count === "number" ? count : undefined;
    removeEmpty = typeof removeEmpty === "number" ? removeEmpty : undefined;
    if (count && count < 0) {
        throw new Error("Count cannot be less than zero");
    }
    if (count === 0) {
        return [];
    }
    if (!Array.isArray(splitters)) {
        if (removeEmpty === 0) {
            return str.split(splitters, count);
        }
        const len = arguments.length;
        splitters = Array(len - 1);
        for (let key = 1; key < len; key++) {
            splitters[key - 1] = arguments[key];
        }
    }
    splitters = splitters.map((x) => (0,_RegExp_js__WEBPACK_IMPORTED_MODULE_3__.escape)(x));
    splitters = splitters.length > 0 ? splitters : [" "];
    let i = 0;
    const splits = [];
    const reg = new RegExp(splitters.join("|"), "g");
    while (count == null || count > 1) {
        const m = reg.exec(str);
        if (m === null) {
            break;
        }
        if (!removeEmpty || (m.index - i) > 0) {
            count = count != null ? count - 1 : count;
            splits.push(str.substring(i, m.index));
        }
        i = reg.lastIndex;
    }
    if (!removeEmpty || (str.length - i) > 0) {
        splits.push(str.substring(i));
    }
    return splits;
}
function trim(str, ...chars) {
    if (chars.length === 0) {
        return str.trim();
    }
    const pattern = "[" + (0,_RegExp_js__WEBPACK_IMPORTED_MODULE_3__.escape)(chars.join("")) + "]+";
    return str.replace(new RegExp("^" + pattern), "").replace(new RegExp(pattern + "$"), "");
}
function trimStart(str, ...chars) {
    return chars.length === 0
        ? str.trimStart()
        : str.replace(new RegExp("^[" + (0,_RegExp_js__WEBPACK_IMPORTED_MODULE_3__.escape)(chars.join("")) + "]+"), "");
}
function trimEnd(str, ...chars) {
    return chars.length === 0
        ? str.trimEnd()
        : str.replace(new RegExp("[" + (0,_RegExp_js__WEBPACK_IMPORTED_MODULE_3__.escape)(chars.join("")) + "]+$"), "");
}
function filter(pred, x) {
    return x.split("").filter((c) => pred(c)).join("");
}
function substring(str, startIndex, length) {
    if ((startIndex + (length || 0) > str.length)) {
        throw new Error("Invalid startIndex and/or length");
    }
    return length != null ? str.substr(startIndex, length) : str.substr(startIndex);
}


/***/ }),

/***/ "./src/DevTools/.fable/fable-library.3.0.5/Types.js":
/*!**********************************************************!*\
  !*** ./src/DevTools/.fable/fable-library.3.0.5/Types.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "seqToString": () => /* binding */ seqToString,
/* harmony export */   "toString": () => /* binding */ toString,
/* harmony export */   "List": () => /* binding */ List,
/* harmony export */   "Union": () => /* binding */ Union,
/* harmony export */   "Record": () => /* binding */ Record,
/* harmony export */   "FSharpRef": () => /* binding */ FSharpRef,
/* harmony export */   "Exception": () => /* binding */ Exception,
/* harmony export */   "isException": () => /* binding */ isException,
/* harmony export */   "FSharpException": () => /* binding */ FSharpException,
/* harmony export */   "MatchFailureException": () => /* binding */ MatchFailureException,
/* harmony export */   "Attribute": () => /* binding */ Attribute
/* harmony export */ });
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Util.js */ "./src/DevTools/.fable/fable-library.3.0.5/Util.js");

function seqToString(self) {
    let count = 0;
    let str = "[";
    for (const x of self) {
        if (count === 0) {
            str += toString(x);
        }
        else if (count === 100) {
            str += "; ...";
            break;
        }
        else {
            str += "; " + toString(x);
        }
        count++;
    }
    return str + "]";
}
function toString(x, callStack = 0) {
    if (x != null && typeof x === "object") {
        if (typeof x.toString === "function") {
            return x.toString();
        }
        else if (Symbol.iterator in x) {
            return seqToString(x);
        }
        else { // TODO: Date?
            const cons = Object.getPrototypeOf(x).constructor;
            return cons === Object && callStack < 10
                // Same format as recordToString
                ? "{ " + Object.entries(x).map(([k, v]) => k + " = " + toString(v, callStack + 1)).join("\n  ") + " }"
                : cons.name;
        }
    }
    return String(x);
}
function compareList(self, other) {
    if (self === other) {
        return 0;
    }
    else {
        if (other == null) {
            return -1;
        }
        while (self.tail != null) {
            if (other.tail == null) {
                return 1;
            }
            const res = (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.compare)(self.head, other.head);
            if (res !== 0) {
                return res;
            }
            self = self.tail;
            other = other.tail;
        }
        return other.tail == null ? 0 : -1;
    }
}
class List {
    constructor(head, tail) {
        this.head = head;
        this.tail = tail;
    }
    [Symbol.iterator]() {
        let cur = this;
        return {
            next: () => {
                const value = cur === null || cur === void 0 ? void 0 : cur.head;
                const done = (cur === null || cur === void 0 ? void 0 : cur.tail) == null;
                cur = cur === null || cur === void 0 ? void 0 : cur.tail;
                return { done, value };
            },
        };
    }
    toJSON() { return Array.from(this); }
    toString() { return seqToString(this); }
    GetHashCode() { return (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.combineHashCodes)(Array.from(this).map(_Util_js__WEBPACK_IMPORTED_MODULE_0__.structuralHash)); }
    Equals(other) { return compareList(this, other) === 0; }
    CompareTo(other) { return compareList(this, other); }
}
class Union {
    get name() {
        return this.cases()[this.tag];
    }
    toJSON() {
        return this.fields.length === 0 ? this.name : [this.name].concat(this.fields);
    }
    toString() {
        if (this.fields.length === 0) {
            return this.name;
        }
        else {
            let fields = "";
            let withParens = true;
            if (this.fields.length === 1) {
                const field = toString(this.fields[0]);
                withParens = field.indexOf(" ") >= 0;
                fields = field;
            }
            else {
                fields = this.fields.map((x) => toString(x)).join(", ");
            }
            return this.name + (withParens ? " (" : " ") + fields + (withParens ? ")" : "");
        }
    }
    GetHashCode() {
        const hashes = this.fields.map((x) => (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.structuralHash)(x));
        hashes.splice(0, 0, (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.numberHash)(this.tag));
        return (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.combineHashCodes)(hashes);
    }
    Equals(other) {
        if (this === other) {
            return true;
        }
        else if (!(0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.sameConstructor)(this, other)) {
            return false;
        }
        else if (this.tag === other.tag) {
            return (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.equalArrays)(this.fields, other.fields);
        }
        else {
            return false;
        }
    }
    CompareTo(other) {
        if (this === other) {
            return 0;
        }
        else if (!(0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.sameConstructor)(this, other)) {
            return -1;
        }
        else if (this.tag === other.tag) {
            return (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.compareArrays)(this.fields, other.fields);
        }
        else {
            return this.tag < other.tag ? -1 : 1;
        }
    }
}
function recordToJSON(self) {
    const o = {};
    const keys = Object.keys(self);
    for (let i = 0; i < keys.length; i++) {
        o[keys[i]] = self[keys[i]];
    }
    return o;
}
function recordToString(self) {
    return "{ " + Object.entries(self).map(([k, v]) => k + " = " + toString(v)).join("\n  ") + " }";
}
function recordGetHashCode(self) {
    const hashes = Object.values(self).map((v) => (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.structuralHash)(v));
    return (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.combineHashCodes)(hashes);
}
function recordEquals(self, other) {
    if (self === other) {
        return true;
    }
    else if (!(0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.sameConstructor)(self, other)) {
        return false;
    }
    else {
        const thisNames = Object.keys(self);
        for (let i = 0; i < thisNames.length; i++) {
            if (!(0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.equals)(self[thisNames[i]], other[thisNames[i]])) {
                return false;
            }
        }
        return true;
    }
}
function recordCompareTo(self, other) {
    if (self === other) {
        return 0;
    }
    else if (!(0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.sameConstructor)(self, other)) {
        return -1;
    }
    else {
        const thisNames = Object.keys(self);
        for (let i = 0; i < thisNames.length; i++) {
            const result = (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.compare)(self[thisNames[i]], other[thisNames[i]]);
            if (result !== 0) {
                return result;
            }
        }
        return 0;
    }
}
class Record {
    toJSON() { return recordToJSON(this); }
    toString() { return recordToString(this); }
    GetHashCode() { return recordGetHashCode(this); }
    Equals(other) { return recordEquals(this, other); }
    CompareTo(other) { return recordCompareTo(this, other); }
}
class FSharpRef {
    constructor(contentsOrGetter, setter) {
        if (typeof setter === "function") {
            this.getter = contentsOrGetter;
            this.setter = setter;
        }
        else {
            this.getter = () => contentsOrGetter;
            this.setter = (v) => { contentsOrGetter = v; };
        }
    }
    get contents() {
        return this.getter();
    }
    set contents(v) {
        this.setter(v);
    }
}
// EXCEPTIONS
// Exception is intentionally not derived from Error, for performance reasons (see #2160)
class Exception {
    constructor(message) {
        this.message = message;
    }
}
function isException(x) {
    return x instanceof Exception || x instanceof Error;
}
class FSharpException extends Exception {
    toJSON() { return recordToJSON(this); }
    toString() { return recordToString(this); }
    GetHashCode() { return recordGetHashCode(this); }
    Equals(other) { return recordEquals(this, other); }
    CompareTo(other) { return recordCompareTo(this, other); }
}
class MatchFailureException extends FSharpException {
    constructor(arg1, arg2, arg3) {
        super();
        this.arg1 = arg1;
        this.arg2 = arg2 | 0;
        this.arg3 = arg3 | 0;
        this.message = "The match cases were incomplete";
    }
}
class Attribute {
}


/***/ }),

/***/ "./src/DevTools/.fable/fable-library.3.0.5/Util.js":
/*!*********************************************************!*\
  !*** ./src/DevTools/.fable/fable-library.3.0.5/Util.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isIterable": () => /* binding */ isIterable,
/* harmony export */   "isArrayLike": () => /* binding */ isArrayLike,
/* harmony export */   "isDisposable": () => /* binding */ isDisposable,
/* harmony export */   "sameConstructor": () => /* binding */ sameConstructor,
/* harmony export */   "Comparer": () => /* binding */ Comparer,
/* harmony export */   "comparerFromEqualityComparer": () => /* binding */ comparerFromEqualityComparer,
/* harmony export */   "assertEqual": () => /* binding */ assertEqual,
/* harmony export */   "assertNotEqual": () => /* binding */ assertNotEqual,
/* harmony export */   "Lazy": () => /* binding */ Lazy,
/* harmony export */   "lazyFromValue": () => /* binding */ lazyFromValue,
/* harmony export */   "padWithZeros": () => /* binding */ padWithZeros,
/* harmony export */   "padLeftAndRightWithZeros": () => /* binding */ padLeftAndRightWithZeros,
/* harmony export */   "dateOffset": () => /* binding */ dateOffset,
/* harmony export */   "int16ToString": () => /* binding */ int16ToString,
/* harmony export */   "int32ToString": () => /* binding */ int32ToString,
/* harmony export */   "ObjectRef": () => /* binding */ ObjectRef,
/* harmony export */   "stringHash": () => /* binding */ stringHash,
/* harmony export */   "numberHash": () => /* binding */ numberHash,
/* harmony export */   "combineHashCodes": () => /* binding */ combineHashCodes,
/* harmony export */   "physicalHash": () => /* binding */ physicalHash,
/* harmony export */   "identityHash": () => /* binding */ identityHash,
/* harmony export */   "dateHash": () => /* binding */ dateHash,
/* harmony export */   "arrayHash": () => /* binding */ arrayHash,
/* harmony export */   "structuralHash": () => /* binding */ structuralHash,
/* harmony export */   "fastStructuralHash": () => /* binding */ fastStructuralHash,
/* harmony export */   "safeHash": () => /* binding */ safeHash,
/* harmony export */   "equalArraysWith": () => /* binding */ equalArraysWith,
/* harmony export */   "equalArrays": () => /* binding */ equalArrays,
/* harmony export */   "equals": () => /* binding */ equals,
/* harmony export */   "compareDates": () => /* binding */ compareDates,
/* harmony export */   "comparePrimitives": () => /* binding */ comparePrimitives,
/* harmony export */   "compareArraysWith": () => /* binding */ compareArraysWith,
/* harmony export */   "compareArrays": () => /* binding */ compareArrays,
/* harmony export */   "compare": () => /* binding */ compare,
/* harmony export */   "min": () => /* binding */ min,
/* harmony export */   "max": () => /* binding */ max,
/* harmony export */   "clamp": () => /* binding */ clamp,
/* harmony export */   "createAtom": () => /* binding */ createAtom,
/* harmony export */   "createObj": () => /* binding */ createObj,
/* harmony export */   "jsOptions": () => /* binding */ jsOptions,
/* harmony export */   "round": () => /* binding */ round,
/* harmony export */   "sign": () => /* binding */ sign,
/* harmony export */   "randomNext": () => /* binding */ randomNext,
/* harmony export */   "randomBytes": () => /* binding */ randomBytes,
/* harmony export */   "unescapeDataString": () => /* binding */ unescapeDataString,
/* harmony export */   "escapeDataString": () => /* binding */ escapeDataString,
/* harmony export */   "escapeUriString": () => /* binding */ escapeUriString,
/* harmony export */   "count": () => /* binding */ count,
/* harmony export */   "clear": () => /* binding */ clear,
/* harmony export */   "uncurry": () => /* binding */ uncurry,
/* harmony export */   "curry": () => /* binding */ curry,
/* harmony export */   "partialApply": () => /* binding */ partialApply,
/* harmony export */   "mapCurriedArgs": () => /* binding */ mapCurriedArgs
/* harmony export */ });
// tslint:disable:ban-types
function isIterable(x) {
    return x != null && typeof x === "object" && Symbol.iterator in x;
}
function isArrayLike(x) {
    return Array.isArray(x) || ArrayBuffer.isView(x);
}
function isComparer(x) {
    return typeof x.Compare === "function";
}
function isComparable(x) {
    return typeof x.CompareTo === "function";
}
function isEquatable(x) {
    return typeof x.Equals === "function";
}
function isHashable(x) {
    return typeof x.GetHashCode === "function";
}
function isDisposable(x) {
    return x != null && typeof x.Dispose === "function";
}
function sameConstructor(x, y) {
    return Object.getPrototypeOf(x).constructor === Object.getPrototypeOf(y).constructor;
}
class Comparer {
    constructor(f) {
        this.Compare = f || compare;
    }
}
function comparerFromEqualityComparer(comparer) {
    // Sometimes IEqualityComparer also implements IComparer
    if (isComparer(comparer)) {
        return new Comparer(comparer.Compare);
    }
    else {
        return new Comparer((x, y) => {
            const xhash = comparer.GetHashCode(x);
            const yhash = comparer.GetHashCode(y);
            if (xhash === yhash) {
                return comparer.Equals(x, y) ? 0 : -1;
            }
            else {
                return xhash < yhash ? -1 : 1;
            }
        });
    }
}
function assertEqual(actual, expected, msg) {
    if (!equals(actual, expected)) {
        throw Object.assign(new Error(msg || `Expected: ${expected} - Actual: ${actual}`), {
            actual,
            expected,
        });
    }
}
function assertNotEqual(actual, expected, msg) {
    if (equals(actual, expected)) {
        throw Object.assign(new Error(msg || `Expected: ${expected} - Actual: ${actual}`), {
            actual,
            expected,
        });
    }
}
class Lazy {
    constructor(factory) {
        this.factory = factory;
        this.isValueCreated = false;
    }
    get Value() {
        if (!this.isValueCreated) {
            this.createdValue = this.factory();
            this.isValueCreated = true;
        }
        return this.createdValue;
    }
    get IsValueCreated() {
        return this.isValueCreated;
    }
}
function lazyFromValue(v) {
    return new Lazy(() => v);
}
function padWithZeros(i, length) {
    let str = i.toString(10);
    while (str.length < length) {
        str = "0" + str;
    }
    return str;
}
function padLeftAndRightWithZeros(i, lengthLeft, lengthRight) {
    let str = i.toString(10);
    while (str.length < lengthLeft) {
        str = "0" + str;
    }
    while (str.length < lengthRight) {
        str = str + "0";
    }
    return str;
}
function dateOffset(date) {
    const date1 = date;
    return typeof date1.offset === "number"
        ? date1.offset
        : (date.kind === 1 /* UTC */
            ? 0 : date.getTimezoneOffset() * -60000);
}
function int16ToString(i, radix) {
    i = i < 0 && radix != null && radix !== 10 ? 0xFFFF + i + 1 : i;
    return i.toString(radix);
}
function int32ToString(i, radix) {
    i = i < 0 && radix != null && radix !== 10 ? 0xFFFFFFFF + i + 1 : i;
    return i.toString(radix);
}
class ObjectRef {
    static id(o) {
        if (!ObjectRef.idMap.has(o)) {
            ObjectRef.idMap.set(o, ++ObjectRef.count);
        }
        return ObjectRef.idMap.get(o);
    }
}
ObjectRef.idMap = new WeakMap();
ObjectRef.count = 0;
function stringHash(s) {
    let i = 0;
    let h = 5381;
    const len = s.length;
    while (i < len) {
        h = (h * 33) ^ s.charCodeAt(i++);
    }
    return h;
}
function numberHash(x) {
    return x * 2654435761 | 0;
}
// From https://stackoverflow.com/a/37449594
function combineHashCodes(hashes) {
    if (hashes.length === 0) {
        return 0;
    }
    return hashes.reduce((h1, h2) => {
        return ((h1 << 5) + h1) ^ h2;
    });
}
function physicalHash(x) {
    if (x == null) {
        return 0;
    }
    switch (typeof x) {
        case "boolean":
            return x ? 1 : 0;
        case "number":
            return numberHash(x);
        case "string":
            return stringHash(x);
        default:
            return numberHash(ObjectRef.id(x));
    }
}
function identityHash(x) {
    if (x == null) {
        return 0;
    }
    else if (isHashable(x)) {
        return x.GetHashCode();
    }
    else {
        return physicalHash(x);
    }
}
function dateHash(x) {
    return x.getTime();
}
function arrayHash(x) {
    const len = x.length;
    const hashes = new Array(len);
    for (let i = 0; i < len; i++) {
        hashes[i] = structuralHash(x[i]);
    }
    return combineHashCodes(hashes);
}
function structuralHash(x) {
    if (x == null) {
        return 0;
    }
    switch (typeof x) {
        case "boolean":
            return x ? 1 : 0;
        case "number":
            return numberHash(x);
        case "string":
            return stringHash(x);
        default: {
            if (isHashable(x)) {
                return x.GetHashCode();
            }
            else if (isArrayLike(x)) {
                return arrayHash(x);
            }
            else if (x instanceof Date) {
                return dateHash(x);
            }
            else if (Object.getPrototypeOf(x).constructor === Object) {
                // TODO: check call-stack to prevent cyclic objects?
                const hashes = Object.values(x).map((v) => structuralHash(v));
                return combineHashCodes(hashes);
            }
            else {
                // Classes don't implement GetHashCode by default, but must use identity hashing
                return numberHash(ObjectRef.id(x));
                // return stringHash(String(x));
            }
        }
    }
}
// Intended for custom numeric types, like long or decimal
function fastStructuralHash(x) {
    return stringHash(String(x));
}
// Intended for declared types that may or may not implement GetHashCode
function safeHash(x) {
    return x == null ? 0 : isHashable(x) ? x.GetHashCode() : numberHash(ObjectRef.id(x));
}
function equalArraysWith(x, y, eq) {
    if (x == null) {
        return y == null;
    }
    if (y == null) {
        return false;
    }
    if (x.length !== y.length) {
        return false;
    }
    for (let i = 0; i < x.length; i++) {
        if (!eq(x[i], y[i])) {
            return false;
        }
    }
    return true;
}
function equalArrays(x, y) {
    return equalArraysWith(x, y, equals);
}
function equalObjects(x, y) {
    const xKeys = Object.keys(x);
    const yKeys = Object.keys(y);
    if (xKeys.length !== yKeys.length) {
        return false;
    }
    xKeys.sort();
    yKeys.sort();
    for (let i = 0; i < xKeys.length; i++) {
        if (xKeys[i] !== yKeys[i] || !equals(x[xKeys[i]], y[yKeys[i]])) {
            return false;
        }
    }
    return true;
}
function equals(x, y) {
    if (x === y) {
        return true;
    }
    else if (x == null) {
        return y == null;
    }
    else if (y == null) {
        return false;
    }
    else if (typeof x !== "object") {
        return false;
    }
    else if (isEquatable(x)) {
        return x.Equals(y);
    }
    else if (isArrayLike(x)) {
        return isArrayLike(y) && equalArrays(x, y);
    }
    else if (x instanceof Date) {
        return (y instanceof Date) && compareDates(x, y) === 0;
    }
    else {
        return Object.getPrototypeOf(x).constructor === Object && equalObjects(x, y);
    }
}
function compareDates(x, y) {
    let xtime;
    let ytime;
    // DateTimeOffset and DateTime deals with equality differently.
    if ("offset" in x && "offset" in y) {
        xtime = x.getTime();
        ytime = y.getTime();
    }
    else {
        xtime = x.getTime() + dateOffset(x);
        ytime = y.getTime() + dateOffset(y);
    }
    return xtime === ytime ? 0 : (xtime < ytime ? -1 : 1);
}
function comparePrimitives(x, y) {
    return x === y ? 0 : (x < y ? -1 : 1);
}
function compareArraysWith(x, y, comp) {
    if (x == null) {
        return y == null ? 0 : 1;
    }
    if (y == null) {
        return -1;
    }
    if (x.length !== y.length) {
        return x.length < y.length ? -1 : 1;
    }
    for (let i = 0, j = 0; i < x.length; i++) {
        j = comp(x[i], y[i]);
        if (j !== 0) {
            return j;
        }
    }
    return 0;
}
function compareArrays(x, y) {
    return compareArraysWith(x, y, compare);
}
function compareObjects(x, y) {
    const xKeys = Object.keys(x);
    const yKeys = Object.keys(y);
    if (xKeys.length !== yKeys.length) {
        return xKeys.length < yKeys.length ? -1 : 1;
    }
    xKeys.sort();
    yKeys.sort();
    for (let i = 0, j = 0; i < xKeys.length; i++) {
        const key = xKeys[i];
        if (key !== yKeys[i]) {
            return key < yKeys[i] ? -1 : 1;
        }
        else {
            j = compare(x[key], y[key]);
            if (j !== 0) {
                return j;
            }
        }
    }
    return 0;
}
function compare(x, y) {
    if (x === y) {
        return 0;
    }
    else if (x == null) {
        return y == null ? 0 : -1;
    }
    else if (y == null) {
        return 1;
    }
    else if (typeof x !== "object") {
        return x < y ? -1 : 1;
    }
    else if (isComparable(x)) {
        return x.CompareTo(y);
    }
    else if (isArrayLike(x)) {
        return isArrayLike(y) ? compareArrays(x, y) : -1;
    }
    else if (x instanceof Date) {
        return y instanceof Date ? compareDates(x, y) : -1;
    }
    else {
        return Object.getPrototypeOf(x).constructor === Object ? compareObjects(x, y) : -1;
    }
}
function min(comparer, x, y) {
    return comparer(x, y) < 0 ? x : y;
}
function max(comparer, x, y) {
    return comparer(x, y) > 0 ? x : y;
}
function clamp(comparer, value, min, max) {
    return (comparer(value, min) < 0) ? min : (comparer(value, max) > 0) ? max : value;
}
function createAtom(value) {
    let atom = value;
    return (value, isSetter) => {
        if (!isSetter) {
            return atom;
        }
        else {
            atom = value;
            return void 0;
        }
    };
}
function createObj(fields) {
    const obj = {};
    for (const kv of fields) {
        obj[kv[0]] = kv[1];
    }
    return obj;
}
function jsOptions(mutator) {
    const opts = {};
    mutator(opts);
    return opts;
}
function round(value, digits = 0) {
    const m = Math.pow(10, digits);
    const n = +(digits ? value * m : value).toFixed(8);
    const i = Math.floor(n);
    const f = n - i;
    const e = 1e-8;
    const r = (f > 0.5 - e && f < 0.5 + e) ? ((i % 2 === 0) ? i : i + 1) : Math.round(n);
    return digits ? r / m : r;
}
function sign(x) {
    return x > 0 ? 1 : x < 0 ? -1 : 0;
}
function randomNext(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
function randomBytes(buffer) {
    if (buffer == null) {
        throw new Error("Buffer cannot be null");
    }
    for (let i = 0; i < buffer.length; i += 6) {
        // Pick random 48-bit number. Fill buffer in 2 24-bit chunks to avoid bitwise truncation.
        let r = Math.floor(Math.random() * 281474976710656); // Low 24 bits = chunk 1.
        const rhi = Math.floor(r / 16777216); // High 24 bits shifted via division = chunk 2.
        for (let j = 0; j < 6 && i + j < buffer.length; j++) {
            if (j === 3) {
                r = rhi;
            }
            buffer[i + j] = r & 255;
            r >>>= 8;
        }
    }
}
function unescapeDataString(s) {
    // https://stackoverflow.com/a/4458580/524236
    return decodeURIComponent((s).replace(/\+/g, "%20"));
}
function escapeDataString(s) {
    return encodeURIComponent(s).replace(/!/g, "%21")
        .replace(/'/g, "%27")
        .replace(/\(/g, "%28")
        .replace(/\)/g, "%29")
        .replace(/\*/g, "%2A");
}
function escapeUriString(s) {
    return encodeURI(s);
}
// ICollection.Clear and Count members can be called on Arrays
// or Dictionaries so we need a runtime check (see #1120)
function count(col) {
    if (isArrayLike(col)) {
        return col.length;
    }
    else {
        let count = 0;
        for (const _ of col) {
            count++;
        }
        return count;
    }
}
function clear(col) {
    if (isArrayLike(col)) {
        col.splice(0);
    }
    else {
        col.clear();
    }
}
const CURRIED_KEY = "__CURRIED__";
function uncurry(arity, f) {
    // f may be a function option with None value
    if (f == null) {
        return undefined;
    }
    // The function is already uncurried
    if (f.length > 1) {
        // if (CURRIED_KEY in f) { // This doesn't always work
        return f;
    }
    let uncurriedFn;
    switch (arity) {
        case 2:
            uncurriedFn = (a1, a2) => f(a1)(a2);
            break;
        case 3:
            uncurriedFn = (a1, a2, a3) => f(a1)(a2)(a3);
            break;
        case 4:
            uncurriedFn = (a1, a2, a3, a4) => f(a1)(a2)(a3)(a4);
            break;
        case 5:
            uncurriedFn = (a1, a2, a3, a4, a5) => f(a1)(a2)(a3)(a4)(a5);
            break;
        case 6:
            uncurriedFn = (a1, a2, a3, a4, a5, a6) => f(a1)(a2)(a3)(a4)(a5)(a6);
            break;
        case 7:
            uncurriedFn = (a1, a2, a3, a4, a5, a6, a7) => f(a1)(a2)(a3)(a4)(a5)(a6)(a7);
            break;
        case 8:
            uncurriedFn = (a1, a2, a3, a4, a5, a6, a7, a8) => f(a1)(a2)(a3)(a4)(a5)(a6)(a7)(a8);
            break;
        default:
            throw new Error("Uncurrying to more than 8-arity is not supported: " + arity);
    }
    uncurriedFn[CURRIED_KEY] = f;
    return uncurriedFn;
}
function curry(arity, f) {
    if (f == null) {
        return undefined;
    }
    if (CURRIED_KEY in f) {
        return f[CURRIED_KEY];
    }
    switch (arity) {
        case 2:
            return (a1) => (a2) => f(a1, a2);
        case 3:
            return (a1) => (a2) => (a3) => f(a1, a2, a3);
        case 4:
            return (a1) => (a2) => (a3) => (a4) => f(a1, a2, a3, a4);
        case 5:
            return (a1) => (a2) => (a3) => (a4) => (a5) => f(a1, a2, a3, a4, a5);
        case 6:
            return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => f(a1, a2, a3, a4, a5, a6);
        case 7:
            return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => (a7) => f(a1, a2, a3, a4, a5, a6, a7);
        case 8:
            return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => (a7) => (a8) => f(a1, a2, a3, a4, a5, a6, a7, a8);
        default:
            throw new Error("Currying to more than 8-arity is not supported: " + arity);
    }
}
function partialApply(arity, f, args) {
    if (f == null) {
        return undefined;
    }
    else if (CURRIED_KEY in f) {
        f = f[CURRIED_KEY];
        for (let i = 0; i < args.length; i++) {
            f = f(args[i]);
        }
        return f;
    }
    else {
        switch (arity) {
            case 1:
                // Wrap arguments to make sure .concat doesn't destruct arrays. Example
                // [1,2].concat([3,4],5)   --> [1,2,3,4,5]    // fails
                // [1,2].concat([[3,4],5]) --> [1,2,[3,4],5]  // ok
                return (a1) => f.apply(undefined, args.concat([a1]));
            case 2:
                return (a1) => (a2) => f.apply(undefined, args.concat([a1, a2]));
            case 3:
                return (a1) => (a2) => (a3) => f.apply(undefined, args.concat([a1, a2, a3]));
            case 4:
                return (a1) => (a2) => (a3) => (a4) => f.apply(undefined, args.concat([a1, a2, a3, a4]));
            case 5:
                return (a1) => (a2) => (a3) => (a4) => (a5) => f.apply(undefined, args.concat([a1, a2, a3, a4, a5]));
            case 6:
                return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => f.apply(undefined, args.concat([a1, a2, a3, a4, a5, a6]));
            case 7:
                return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => (a7) => f.apply(undefined, args.concat([a1, a2, a3, a4, a5, a6, a7]));
            case 8:
                return (a1) => (a2) => (a3) => (a4) => (a5) => (a6) => (a7) => (a8) => f.apply(undefined, args.concat([a1, a2, a3, a4, a5, a6, a7, a8]));
            default:
                throw new Error("Partially applying to more than 8-arity is not supported: " + arity);
        }
    }
}
function mapCurriedArgs(fn, mappings) {
    function mapArg(fn, arg, mappings, idx) {
        const mapping = mappings[idx];
        if (mapping !== 0) {
            const expectedArity = mapping[0];
            const actualArity = mapping[1];
            if (expectedArity > 1) {
                arg = curry(expectedArity, arg);
            }
            if (actualArity > 1) {
                arg = uncurry(actualArity, arg);
            }
        }
        const res = fn(arg);
        if (idx + 1 === mappings.length) {
            return res;
        }
        else {
            return (arg) => mapArg(res, arg, mappings, idx + 1);
        }
    }
    return (arg) => mapArg(fn, arg, mappings, 0);
}


/***/ }),

/***/ "./src/DevTools/.fable/fable-library.3.0.5/lib/big.js":
/*!************************************************************!*\
  !*** ./src/DevTools/.fable/fable-library.3.0.5/lib/big.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Big": () => /* binding */ Big,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _Util_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Util.js */ "./src/DevTools/.fable/fable-library.3.0.5/Util.js");
// https://github.com/MikeMcl/big.js/blob/01b3ce3a6b0ba7b42442ea48ec4ffc88d1669ec4/big.mjs
/* tslint:disable */

// The shared prototype object.
var P = {
    GetHashCode() { return (0,_Util_js__WEBPACK_IMPORTED_MODULE_0__.combineHashCodes)([this.s, this.e].concat(this.c)); },
    Equals(x) { return !this.cmp(x); },
    CompareTo(x) { return this.cmp(x); },
};
/*
 *  big.js v5.2.2
 *  A small, fast, easy-to-use library for arbitrary-precision decimal arithmetic.
 *  Copyright (c) 2018 Michael Mclaughlin <M8ch88l@gmail.com>
 *  https://github.com/MikeMcl/big.js/LICENCE
 */
/************************************** EDITABLE DEFAULTS *****************************************/
// The default values below must be integers within the stated ranges.
/*
 * The maximum number of decimal places (DP) of the results of operations involving division:
 * div and sqrt, and pow with negative exponents.
 */
var DP = 28, // 0 to MAX_DP
/*
 * The rounding mode (RM) used when rounding to the above decimal places.
 *
 *  0  Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)
 *  1  To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)
 *  2  To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)
 *  3  Away from zero.                                  (ROUND_UP)
 */
RM = 1, // 0, 1, 2 or 3
// The maximum value of DP and Big.DP.
MAX_DP = 1E6, // 0 to 1000000
// The maximum magnitude of the exponent argument to the pow method.
MAX_POWER = 1E6, // 1 to 1000000
/*
 * The negative exponent (NE) at and beneath which toString returns exponential notation.
 * (JavaScript numbers: -7)
 * -1000000 is the minimum recommended exponent value of a Big.
 */
NE = -29, // 0 to -1000000
/*
 * The positive exponent (PE) at and above which toString returns exponential notation.
 * (JavaScript numbers: 21)
 * 1000000 is the maximum recommended exponent value of a Big.
 * (This limit is not enforced or checked.)
 */
PE = 29, // 0 to 1000000
/**************************************************************************************************/
// Error messages.
NAME = '[big.js] ', INVALID = NAME + 'Invalid ', INVALID_DP = INVALID + 'decimal places', INVALID_RM = INVALID + 'rounding mode', DIV_BY_ZERO = NAME + 'Division by zero', UNDEFINED = void 0, NUMERIC = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
/*
 * Create and return a Big constructor.
 *
 */
function _Big_() {
    /*
     * The Big constructor and exported function.
     * Create and return a new instance of a Big number object.
     *
     * n {number|string|Big} A numeric value.
     */
    function Big(n) {
        var x = this;
        // Enable constructor usage without new.
        if (!(x instanceof Big))
            return n === UNDEFINED ? _Big_() : new Big(n);
        // Duplicate.
        if (n instanceof Big) {
            x.s = n.s;
            x.e = n.e;
            x.c = n.c.slice();
            normalize(x);
        }
        else {
            parse(x, n);
        }
        /*
         * Retain a reference to this Big constructor, and shadow Big.prototype.constructor which
         * points to Object.
         */
        x.constructor = Big;
    }
    Big.prototype = P;
    Big.DP = DP;
    Big.RM = RM;
    Big.NE = NE;
    Big.PE = PE;
    Big.version = '5.2.2';
    return Big;
}
function normalize(x) {
    x = round(x, DP, 0);
    if (x.c.length > 1 && !x.c[0]) {
        let i = x.c.findIndex(x => x);
        x.c = x.c.slice(i);
        x.e = x.e - i;
    }
}
/*
 * Parse the number or string value passed to a Big constructor.
 *
 * x {Big} A Big number instance.
 * n {number|string} A numeric value.
 */
function parse(x, n) {
    var e, i, nl;
    // Minus zero?
    if (n === 0 && 1 / n < 0)
        n = '-0';
    else if (!NUMERIC.test(n += ''))
        throw Error(INVALID + 'number');
    // Determine sign.
    x.s = n.charAt(0) == '-' ? (n = n.slice(1), -1) : 1;
    // Decimal point?
    if ((e = n.indexOf('.')) > -1)
        n = n.replace('.', '');
    // Exponential form?
    if ((i = n.search(/e/i)) > 0) {
        // Determine exponent.
        if (e < 0)
            e = i;
        e += +n.slice(i + 1);
        n = n.substring(0, i);
    }
    else if (e < 0) {
        // Integer.
        e = n.length;
    }
    nl = n.length;
    // Determine leading zeros before decimal point.
    for (i = 0; i < e && i < nl && n.charAt(i) == '0';)
        ++i;
    // older version (ignores decimal point).
    // // Determine leading zeros.
    // for (i = 0; i < nl && n.charAt(i) == '0';) ++i;
    if (i == nl) {
        // Zero.
        x.c = [x.e = 0];
    }
    else {
        x.e = e - i - 1;
        x.c = [];
        // Convert string to array of digits without leading zeros
        for (e = 0; i < nl;)
            x.c[e++] = +n.charAt(i++);
        // older version (doesn't keep trailing zeroes).
        // // Determine trailing zeros.
        // for (; nl > 0 && n.charAt(--nl) == '0';);
        // // Convert string to array of digits without leading/trailing zeros.
        // for (e = 0; i <= nl;) x.c[e++] = +n.charAt(i++);
    }
    x = round(x, Big.DP, Big.RM);
    return x;
}
/*
 * Round Big x to a maximum of dp decimal places using rounding mode rm.
 * Called by stringify, P.div, P.round and P.sqrt.
 *
 * x {Big} The Big to round.
 * dp {number} Integer, 0 to MAX_DP inclusive.
 * rm {number} 0, 1, 2 or 3 (DOWN, HALF_UP, HALF_EVEN, UP)
 * [more] {boolean} Whether the result of division was truncated.
 */
function round(x, dp, rm, more) {
    var xc = x.c, i = x.e + dp + 1;
    if (i < xc.length) {
        if (rm === 1) {
            // xc[i] is the digit after the digit that may be rounded up.
            more = xc[i] >= 5;
        }
        else if (rm === 2) {
            more = xc[i] > 5 || xc[i] == 5 &&
                (more || i < 0 || xc[i + 1] !== UNDEFINED || xc[i - 1] & 1);
        }
        else if (rm === 3) {
            more = more || !!xc[0];
        }
        else {
            more = false;
            if (rm !== 0)
                throw Error(INVALID_RM);
        }
        if (i < 1) {
            xc.length = 1;
            if (more) {
                // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                x.e = -dp;
                xc[0] = 1;
            }
            else {
                // Zero.
                xc[0] = x.e = 0;
            }
        }
        else {
            // Remove any digits after the required decimal places.
            xc.length = i--;
            // Round up?
            if (more) {
                // Rounding up may mean the previous digit has to be rounded up.
                for (; ++xc[i] > 9;) {
                    xc[i] = 0;
                    if (!i--) {
                        ++x.e;
                        xc.unshift(1);
                    }
                }
            }
            // Remove trailing zeros.
            for (i = xc.length; !xc[--i];)
                xc.pop();
        }
    }
    else if (rm < 0 || rm > 3 || rm !== ~~rm) {
        throw Error(INVALID_RM);
    }
    return x;
}
/*
 * Return a string representing the value of Big x in normal or exponential notation.
 * Handles P.toExponential, P.toFixed, P.toJSON, P.toPrecision, P.toString and P.valueOf.
 *
 * x {Big}
 * id? {number} Caller id.
 *         1 toExponential
 *         2 toFixed
 *         3 toPrecision
 *         4 valueOf
 * n? {number|undefined} Caller's argument.
 * k? {number|undefined}
 */
function stringify(x, id, n, k) {
    var e, s, Big = x.constructor, z = !x.c[0];
    if (n !== UNDEFINED) {
        if (n !== ~~n || n < (id == 3) || n > MAX_DP) {
            throw Error(id == 3 ? INVALID + 'precision' : INVALID_DP);
        }
        x = new Big(x);
        // The index of the digit that may be rounded up.
        n = k - x.e;
        // Round?
        if (x.c.length > ++k)
            round(x, n, Big.RM);
        // toFixed: recalculate k as x.e may have changed if value rounded up.
        if (id == 2)
            k = x.e + n + 1;
        // Append zeros?
        for (; x.c.length < k;)
            x.c.push(0);
    }
    e = x.e;
    s = x.c.join('');
    n = s.length;
    // Exponential notation?
    if (id != 2 && (id == 1 || id == 3 && k <= e || e <= Big.NE || e >= Big.PE)) {
        s = s.charAt(0) + (n > 1 ? '.' + s.slice(1) : '') + (e < 0 ? 'e' : 'e+') + e;
        // Normal notation.
    }
    else if (e < 0) {
        for (; ++e;)
            s = '0' + s;
        s = '0.' + s;
    }
    else if (e > 0) {
        if (++e > n)
            for (e -= n; e--;)
                s += '0';
        else if (e < n)
            s = s.slice(0, e) + '.' + s.slice(e);
    }
    else if (n > 1) {
        s = s.charAt(0) + '.' + s.slice(1);
    }
    return x.s < 0 && (!z || id == 4) ? '-' + s : s;
}
// Prototype/instance methods
/*
 * Return a new Big whose value is the absolute value of this Big.
 */
P.abs = function () {
    var x = new this.constructor(this);
    x.s = 1;
    return x;
};
/*
 * Return 1 if the value of this Big is greater than the value of Big y,
 *       -1 if the value of this Big is less than the value of Big y, or
 *        0 if they have the same value.
*/
P.cmp = function (y) {
    var isneg, Big = this.constructor, x = new Big(this), y = new Big(y), xc = x.c, yc = y.c, i = x.s, j = y.s, k = x.e, l = y.e;
    // Either zero?
    if (!xc[0] || !yc[0])
        return !xc[0] ? !yc[0] ? 0 : -j : i;
    // Signs differ?
    if (i != j)
        return i;
    isneg = i < 0;
    // Compare exponents.
    if (k != l)
        return k > l ^ isneg ? 1 : -1;
    // Compare digit by digit.
    j = Math.max(xc.length, yc.length);
    for (i = 0; i < j; i++) {
        k = i < xc.length ? xc[i] : 0;
        l = i < yc.length ? yc[i] : 0;
        if (k != l)
            return k > l ^ isneg ? 1 : -1;
    }
    return 0;
    // old version (doesn't compare well trailing zeroes, e.g. 1.0 with 1.00)
    // j = (k = xc.length) < (l = yc.length) ? k : l;
    // // Compare digit by digit.
    // for (i = -1; ++i < j;) {
    //   if (xc[i] != yc[i]) return xc[i] > yc[i] ^ isneg ? 1 : -1;
    // }
    // // Compare lengths.
    // return k == l ? 0 : k > l ^ isneg ? 1 : -1;
};
/*
 * Return a new Big whose value is the value of this Big divided by the value of Big y, rounded,
 * if necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */
P.div = function (y) {
    var Big = this.constructor, x = new Big(this), y = new Big(y), a = x.c, // dividend
    b = y.c, // divisor
    k = x.s == y.s ? 1 : -1, dp = Big.DP;
    if (dp !== ~~dp || dp < 0 || dp > MAX_DP)
        throw Error(INVALID_DP);
    // Divisor is zero?
    if (!b[0])
        throw Error(DIV_BY_ZERO);
    // Dividend is 0? Return +-0.
    if (!a[0])
        return new Big(k * 0);
    var bl, bt, n, cmp, ri, bz = b.slice(), ai = bl = b.length, al = a.length, r = a.slice(0, bl), // remainder
    rl = r.length, q = y, // quotient
    qc = q.c = [], qi = 0, d = dp + (q.e = x.e - y.e) + 1; // number of digits of the result
    q.s = k;
    k = d < 0 ? 0 : d;
    // Create version of divisor with leading zero.
    bz.unshift(0);
    // Add zeros to make remainder as long as divisor.
    for (; rl++ < bl;)
        r.push(0);
    do {
        // n is how many times the divisor goes into current remainder.
        for (n = 0; n < 10; n++) {
            // Compare divisor and remainder.
            if (bl != (rl = r.length)) {
                cmp = bl > rl ? 1 : -1;
            }
            else {
                for (ri = -1, cmp = 0; ++ri < bl;) {
                    if (b[ri] != r[ri]) {
                        cmp = b[ri] > r[ri] ? 1 : -1;
                        break;
                    }
                }
            }
            // If divisor < remainder, subtract divisor from remainder.
            if (cmp < 0) {
                // Remainder can't be more than 1 digit longer than divisor.
                // Equalise lengths using divisor with extra leading zero?
                for (bt = rl == bl ? b : bz; rl;) {
                    if (r[--rl] < bt[rl]) {
                        ri = rl;
                        for (; ri && !r[--ri];)
                            r[ri] = 9;
                        --r[ri];
                        r[rl] += 10;
                    }
                    r[rl] -= bt[rl];
                }
                for (; !r[0];)
                    r.shift();
            }
            else {
                break;
            }
        }
        // Add the digit n to the result array.
        qc[qi++] = cmp ? n : ++n;
        // Update the remainder.
        if (r[0] && cmp)
            r[rl] = a[ai] || 0;
        else
            r = [a[ai]];
    } while ((ai++ < al || r[0] !== UNDEFINED) && k--);
    // Leading zero? Do not remove if result is simply zero (qi == 1).
    if (!qc[0] && qi != 1) {
        // There can't be more than one zero.
        qc.shift();
        q.e--;
    }
    // Round?
    if (qi > d)
        round(q, dp, Big.RM, r[0] !== UNDEFINED);
    return q;
};
/*
 * Return true if the value of this Big is equal to the value of Big y, otherwise return false.
 */
P.eq = function (y) {
    return !this.cmp(y);
};
/*
 * Return true if the value of this Big is greater than the value of Big y, otherwise return
 * false.
 */
P.gt = function (y) {
    return this.cmp(y) > 0;
};
/*
 * Return true if the value of this Big is greater than or equal to the value of Big y, otherwise
 * return false.
 */
P.gte = function (y) {
    return this.cmp(y) > -1;
};
/*
 * Return true if the value of this Big is less than the value of Big y, otherwise return false.
 */
P.lt = function (y) {
    return this.cmp(y) < 0;
};
/*
 * Return true if the value of this Big is less than or equal to the value of Big y, otherwise
 * return false.
 */
P.lte = function (y) {
    return this.cmp(y) < 1;
};
/*
 * Return a new Big whose value is the value of this Big minus the value of Big y.
 */
P.minus = P.sub = function (y) {
    var i, j, t, xlty, Big = this.constructor, x = new Big(this), y = new Big(y), a = x.s, b = y.s;
    // Signs differ?
    if (a != b) {
        y.s = -b;
        return x.plus(y);
    }
    var xc = x.c.slice(), xe = x.e, yc = y.c, ye = y.e;
    // Either zero?
    if (!xc[0] || !yc[0]) {
        // y is non-zero? x is non-zero? Or both are zero.
        return yc[0] ? (y.s = -b, y) : new Big(xc[0] ? x : 0);
    }
    // Determine which is the bigger number. Prepend zeros to equalise exponents.
    if (a = xe - ye) {
        if (xlty = a < 0) {
            a = -a;
            t = xc;
        }
        else {
            ye = xe;
            t = yc;
        }
        t.reverse();
        for (b = a; b--;)
            t.push(0);
        t.reverse();
    }
    else {
        // Exponents equal. Check digit by digit.
        j = ((xlty = xc.length < yc.length) ? xc : yc).length;
        for (a = b = 0; b < j; b++) {
            if (xc[b] != yc[b]) {
                xlty = xc[b] < yc[b];
                break;
            }
        }
    }
    // x < y? Point xc to the array of the bigger number.
    if (xlty) {
        t = xc;
        xc = yc;
        yc = t;
        y.s = -y.s;
    }
    /*
     * Append zeros to xc if shorter. No need to add zeros to yc if shorter as subtraction only
     * needs to start at yc.length.
     */
    if ((b = (j = yc.length) - (i = xc.length)) > 0)
        for (; b--;)
            xc[i++] = 0;
    // Subtract yc from xc.
    for (b = i; j > a;) {
        if (xc[--j] < yc[j]) {
            for (i = j; i && !xc[--i];)
                xc[i] = 9;
            --xc[i];
            xc[j] += 10;
        }
        xc[j] -= yc[j];
    }
    // Remove trailing zeros.
    for (; xc[--b] === 0;)
        xc.pop();
    // Remove leading zeros and adjust exponent accordingly.
    for (; xc[0] === 0;) {
        xc.shift();
        --ye;
    }
    if (!xc[0]) {
        // n - n = +0
        y.s = 1;
        // Result must be zero.
        xc = [ye = 0];
    }
    y.c = xc;
    y.e = ye;
    return y;
};
/*
 * Return a new Big whose value is the value of this Big modulo the value of Big y.
 */
P.mod = function (y) {
    var ygtx, Big = this.constructor, x = new Big(this), y = new Big(y), a = x.s, b = y.s;
    if (!y.c[0])
        throw Error(DIV_BY_ZERO);
    x.s = y.s = 1;
    ygtx = y.cmp(x) == 1;
    x.s = a;
    y.s = b;
    if (ygtx)
        return new Big(x);
    a = Big.DP;
    b = Big.RM;
    Big.DP = Big.RM = 0;
    x = x.div(y);
    Big.DP = a;
    Big.RM = b;
    return this.minus(x.times(y));
};
/*
 * Return a new Big whose value is the value of this Big plus the value of Big y.
 */
P.plus = P.add = function (y) {
    var t, Big = this.constructor, x = new Big(this), y = new Big(y), a = x.s, b = y.s;
    // Signs differ?
    if (a != b) {
        y.s = -b;
        return x.minus(y);
    }
    var xe = x.e, xc = x.c, ye = y.e, yc = y.c;
    // Either zero? y is non-zero? x is non-zero? Or both are zero.
    if (!xc[0] || !yc[0])
        return yc[0] ? y : new Big(xc[0] ? x : a * 0);
    xc = xc.slice();
    // Prepend zeros to equalise exponents.
    // Note: reverse faster than unshifts.
    if (a = xe - ye) {
        if (a > 0) {
            ye = xe;
            t = yc;
        }
        else {
            a = -a;
            t = xc;
        }
        t.reverse();
        for (; a--;)
            t.push(0);
        t.reverse();
    }
    // Point xc to the longer array.
    if (xc.length - yc.length < 0) {
        t = yc;
        yc = xc;
        xc = t;
    }
    a = yc.length;
    // Only start adding at yc.length - 1 as the further digits of xc can be left as they are.
    for (b = 0; a; xc[a] %= 10)
        b = (xc[--a] = xc[a] + yc[a] + b) / 10 | 0;
    // No need to check for zero, as +x + +y != 0 && -x + -y != 0
    if (b) {
        xc.unshift(b);
        ++ye;
    }
    // Remove trailing zeros.
    for (a = xc.length; xc[--a] === 0;)
        xc.pop();
    y.c = xc;
    y.e = ye;
    return y;
};
/*
 * Return a Big whose value is the value of this Big raised to the power n.
 * If n is negative, round to a maximum of Big.DP decimal places using rounding
 * mode Big.RM.
 *
 * n {number} Integer, -MAX_POWER to MAX_POWER inclusive.
 */
P.pow = function (n) {
    var Big = this.constructor, x = new Big(this), y = new Big(1), one = new Big(1), isneg = n < 0;
    if (n !== ~~n || n < -MAX_POWER || n > MAX_POWER)
        throw Error(INVALID + 'exponent');
    if (isneg)
        n = -n;
    for (;;) {
        if (n & 1)
            y = y.times(x);
        n >>= 1;
        if (!n)
            break;
        x = x.times(x);
    }
    return isneg ? one.div(y) : y;
};
/*
 * Return a new Big whose value is the value of this Big rounded using rounding mode rm
 * to a maximum of dp decimal places, or, if dp is negative, to an integer which is a
 * multiple of 10**-dp.
 * If dp is not specified, round to 0 decimal places.
 * If rm is not specified, use Big.RM.
 *
 * dp? {number} Integer, -MAX_DP to MAX_DP inclusive.
 * rm? 0, 1, 2 or 3 (ROUND_DOWN, ROUND_HALF_UP, ROUND_HALF_EVEN, ROUND_UP)
 */
P.round = function (dp, rm) {
    var Big = this.constructor;
    if (dp === UNDEFINED)
        dp = 0;
    else if (dp !== ~~dp || dp < -MAX_DP || dp > MAX_DP)
        throw Error(INVALID_DP);
    return round(new Big(this), dp, rm === UNDEFINED ? Big.RM : rm);
};
/*
 * Return a new Big whose value is the square root of the value of this Big, rounded, if
 * necessary, to a maximum of Big.DP decimal places using rounding mode Big.RM.
 */
P.sqrt = function () {
    var r, c, t, Big = this.constructor, x = new Big(this), s = x.s, e = x.e, half = new Big(0.5);
    // Zero?
    if (!x.c[0])
        return new Big(x);
    // Negative?
    if (s < 0)
        throw Error(NAME + 'No square root');
    // Estimate.
    s = Math.sqrt(x + '');
    // Math.sqrt underflow/overflow?
    // Re-estimate: pass x coefficient to Math.sqrt as integer, then adjust the result exponent.
    if (s === 0 || s === 1 / 0) {
        c = x.c.join('');
        if (!(c.length + e & 1))
            c += '0';
        s = Math.sqrt(c);
        e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
        r = new Big((s == 1 / 0 ? '1e' : (s = s.toExponential()).slice(0, s.indexOf('e') + 1)) + e);
    }
    else {
        r = new Big(s);
    }
    e = r.e + (Big.DP += 4);
    // Newton-Raphson iteration.
    do {
        t = r;
        r = half.times(t.plus(x.div(t)));
    } while (t.c.slice(0, e).join('') !== r.c.slice(0, e).join(''));
    return round(r, Big.DP -= 4, Big.RM);
};
/*
 * Return a new Big whose value is the value of this Big times the value of Big y.
 */
P.times = P.mul = function (y) {
    var c, Big = this.constructor, x = new Big(this), y = new Big(y), xc = x.c, yc = y.c, a = xc.length, b = yc.length, i = x.e, j = y.e;
    // Determine sign of result.
    y.s = x.s == y.s ? 1 : -1;
    // Return signed 0 if either 0.
    if (!xc[0] || !yc[0])
        return new Big(y.s * 0);
    // Initialise exponent of result as x.e + y.e.
    y.e = i + j;
    // If array xc has fewer digits than yc, swap xc and yc, and lengths.
    if (a < b) {
        c = xc;
        xc = yc;
        yc = c;
        j = a;
        a = b;
        b = j;
    }
    // Initialise coefficient array of result with zeros.
    for (c = new Array(j = a + b); j--;)
        c[j] = 0;
    // Multiply.
    // i is initially xc.length.
    for (i = b; i--;) {
        b = 0;
        // a is yc.length.
        for (j = a + i; j > i;) {
            // Current sum of products at this digit position, plus carry.
            b = c[j] + yc[i] * xc[j - i - 1] + b;
            c[j--] = b % 10;
            // carry
            b = b / 10 | 0;
        }
        c[j] = (c[j] + b) % 10;
    }
    // Increment result exponent if there is a final carry, otherwise remove leading zero.
    if (b)
        ++y.e;
    else
        c.shift();
    // Remove trailing zeros.
    for (i = c.length; !c[--i];)
        c.pop();
    y.c = c;
    return y;
};
/*
 * Return a string representing the value of this Big in exponential notation to dp fixed decimal
 * places and rounded using Big.RM.
 *
 * dp? {number} Integer, 0 to MAX_DP inclusive.
 */
P.toExponential = function (dp) {
    return stringify(this, 1, dp, dp);
};
/*
 * Return a string representing the value of this Big in normal notation to dp fixed decimal
 * places and rounded using Big.RM.
 *
 * dp? {number} Integer, 0 to MAX_DP inclusive.
 *
 * (-0).toFixed(0) is '0', but (-0.1).toFixed(0) is '-0'.
 * (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
 */
P.toFixed = function (dp) {
    return stringify(this, 2, dp, this.e + dp);
};
/*
 * Return a string representing the value of this Big rounded to sd significant digits using
 * Big.RM. Use exponential notation if sd is less than the number of digits necessary to represent
 * the integer part of the value in normal notation.
 *
 * sd {number} Integer, 1 to MAX_DP inclusive.
 */
P.toPrecision = function (sd) {
    return stringify(this, 3, sd, sd - 1);
};
/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Omit the sign for negative zero.
 */
P.toString = function () {
    return stringify(this);
};
/*
 * Return a string representing the value of this Big.
 * Return exponential notation if this Big has a positive exponent equal to or greater than
 * Big.PE, or a negative exponent equal to or less than Big.NE.
 * Include the sign for negative zero.
 */
P.valueOf = P.toJSON = function () {
    return stringify(this, 4);
};
// Export
var Big = _Big_();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Big);


/***/ }),

/***/ "./src/DevTools/.fable/fable-library.3.0.5/lib/long.js":
/*!*************************************************************!*\
  !*** ./src/DevTools/.fable/fable-library.3.0.5/lib/long.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__,
/* harmony export */   "Long": () => /* binding */ Long,
/* harmony export */   "isLong": () => /* binding */ isLong,
/* harmony export */   "fromInt": () => /* binding */ fromInt,
/* harmony export */   "fromNumber": () => /* binding */ fromNumber,
/* harmony export */   "fromBits": () => /* binding */ fromBits,
/* harmony export */   "fromString": () => /* binding */ fromString,
/* harmony export */   "fromValue": () => /* binding */ fromValue,
/* harmony export */   "ZERO": () => /* binding */ ZERO,
/* harmony export */   "UZERO": () => /* binding */ UZERO,
/* harmony export */   "ONE": () => /* binding */ ONE,
/* harmony export */   "UONE": () => /* binding */ UONE,
/* harmony export */   "NEG_ONE": () => /* binding */ NEG_ONE,
/* harmony export */   "MAX_VALUE": () => /* binding */ MAX_VALUE,
/* harmony export */   "MAX_UNSIGNED_VALUE": () => /* binding */ MAX_UNSIGNED_VALUE,
/* harmony export */   "MIN_VALUE": () => /* binding */ MIN_VALUE,
/* harmony export */   "toInt": () => /* binding */ toInt,
/* harmony export */   "toNumber": () => /* binding */ toNumber,
/* harmony export */   "toString": () => /* binding */ toString,
/* harmony export */   "getHighBits": () => /* binding */ getHighBits,
/* harmony export */   "getHighBitsUnsigned": () => /* binding */ getHighBitsUnsigned,
/* harmony export */   "getLowBits": () => /* binding */ getLowBits,
/* harmony export */   "getLowBitsUnsigned": () => /* binding */ getLowBitsUnsigned,
/* harmony export */   "getNumBitsAbs": () => /* binding */ getNumBitsAbs,
/* harmony export */   "isZero": () => /* binding */ isZero,
/* harmony export */   "isNegative": () => /* binding */ isNegative,
/* harmony export */   "isPositive": () => /* binding */ isPositive,
/* harmony export */   "isOdd": () => /* binding */ isOdd,
/* harmony export */   "isEven": () => /* binding */ isEven,
/* harmony export */   "equals": () => /* binding */ equals,
/* harmony export */   "notEquals": () => /* binding */ notEquals,
/* harmony export */   "lessThan": () => /* binding */ lessThan,
/* harmony export */   "lessThanOrEqual": () => /* binding */ lessThanOrEqual,
/* harmony export */   "greaterThan": () => /* binding */ greaterThan,
/* harmony export */   "greaterThanOrEqual": () => /* binding */ greaterThanOrEqual,
/* harmony export */   "compare": () => /* binding */ compare,
/* harmony export */   "negate": () => /* binding */ negate,
/* harmony export */   "add": () => /* binding */ add,
/* harmony export */   "subtract": () => /* binding */ subtract,
/* harmony export */   "multiply": () => /* binding */ multiply,
/* harmony export */   "divide": () => /* binding */ divide,
/* harmony export */   "modulo": () => /* binding */ modulo,
/* harmony export */   "not": () => /* binding */ not,
/* harmony export */   "and": () => /* binding */ and,
/* harmony export */   "or": () => /* binding */ or,
/* harmony export */   "xor": () => /* binding */ xor,
/* harmony export */   "shiftLeft": () => /* binding */ shiftLeft,
/* harmony export */   "shiftRight": () => /* binding */ shiftRight,
/* harmony export */   "shiftRightUnsigned": () => /* binding */ shiftRightUnsigned,
/* harmony export */   "rotateLeft": () => /* binding */ rotateLeft,
/* harmony export */   "rotateRight": () => /* binding */ rotateRight,
/* harmony export */   "toSigned": () => /* binding */ toSigned,
/* harmony export */   "toUnsigned": () => /* binding */ toUnsigned,
/* harmony export */   "toBytes": () => /* binding */ toBytes,
/* harmony export */   "toBytesLE": () => /* binding */ toBytesLE,
/* harmony export */   "toBytesBE": () => /* binding */ toBytesBE,
/* harmony export */   "fromBytes": () => /* binding */ fromBytes,
/* harmony export */   "fromBytesLE": () => /* binding */ fromBytesLE,
/* harmony export */   "fromBytesBE": () => /* binding */ fromBytesBE
/* harmony export */ });
// Adapted from: https://github.com/dcodeIO/long.js/blob/master/src/long.js
// Apache License 2.0: https://github.com/dcodeIO/long.js/blob/master/LICENSE
/* tslint:disable */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Long);
/**
 * wasm optimizations, to do native i64 multiplication and divide
 */
var wasm = null;
try {
    wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
        0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11
    ])), {}).exports;
}
catch (e) {
    // no wasm support :(
}
/**
 * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
 *  See the from* functions below for more convenient ways of constructing Longs.
 * @exports Long
 * @class A Long class for representing a 64 bit two's-complement integer value.
 * @param {number} low The low (signed) 32 bits of the long
 * @param {number} high The high (signed) 32 bits of the long
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @constructor
 */
function Long(low, high, unsigned) {
    /**
     * The low 32 bits as a signed value.
     * @type {number}
     */
    this.low = low | 0;
    /**
     * The high 32 bits as a signed value.
     * @type {number}
     */
    this.high = high | 0;
    /**
     * Whether unsigned or not.
     * @type {boolean}
     */
    this.unsigned = !!unsigned;
}
Long.prototype.GetHashCode = function () {
    let h1 = this.unsigned ? 1 : 0;
    h1 = ((h1 << 5) + h1) ^ this.high;
    h1 = ((h1 << 5) + h1) ^ this.low;
    return h1;
};
Long.prototype.Equals = function (x) { return equals(this, x); };
Long.prototype.CompareTo = function (x) { return compare(this, x); };
Long.prototype.toString = function (radix) { return toString(this, radix); };
Long.prototype.toJSON = function () { return toString(this); };
// The internal representation of a long is the two given signed, 32-bit values.
// We use 32-bit pieces because these are the size of integers on which
// Javascript performs bit-operations.  For operations like addition and
// multiplication, we split each number into 16 bit pieces, which can easily be
// multiplied within Javascript's floating-point representation without overflow
// or change in sign.
//
// In the algorithms below, we frequently reduce the negative case to the
// positive case by negating the input(s) and then post-processing the result.
// Note that we must ALWAYS check specially whether those values are MIN_VALUE
// (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
// a positive number, it overflows back into a negative).  Not handling this
// case would often result in infinite recursion.
//
// Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
// methods on which they depend.
/**
 * An indicator used to reliably determine if an object is a Long or not.
 * @type {boolean}
 * @const
 * @private
 */
Long.prototype.__isLong__;
Object.defineProperty(Long.prototype, "__isLong__", { value: true });
/**
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 * @inner
 */
function isLong(obj) {
    return (obj && obj["__isLong__"]) === true;
}
/**
 * Tests if the specified object is a Long.
 * @function
 * @param {*} obj Object
 * @returns {boolean}
 */
// Long.isLong = isLong;
/**
 * A cache of the Long representations of small integer values.
 * @type {!Object}
 * @inner
 */
var INT_CACHE = {};
/**
 * A cache of the Long representations of small unsigned integer values.
 * @type {!Object}
 * @inner
 */
var UINT_CACHE = {};
/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromInt(value, unsigned) {
    var obj, cachedObj, cache;
    if (unsigned) {
        value >>>= 0;
        if (cache = (0 <= value && value < 256)) {
            cachedObj = UINT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
        if (cache)
            UINT_CACHE[value] = obj;
        return obj;
    }
    else {
        value |= 0;
        if (cache = (-128 <= value && value < 128)) {
            cachedObj = INT_CACHE[value];
            if (cachedObj)
                return cachedObj;
        }
        obj = fromBits(value, value < 0 ? -1 : 0, false);
        if (cache)
            INT_CACHE[value] = obj;
        return obj;
    }
}
/**
 * Returns a Long representing the given 32 bit integer value.
 * @function
 * @param {number} value The 32 bit integer in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
// Long.fromInt = fromInt;
/**
 * @param {number} value
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromNumber(value, unsigned) {
    if (isNaN(value))
        return unsigned ? UZERO : ZERO;
    if (unsigned) {
        if (value < 0)
            return UZERO;
        if (value >= TWO_PWR_64_DBL)
            return MAX_UNSIGNED_VALUE;
    }
    else {
        if (value <= -TWO_PWR_63_DBL)
            return MIN_VALUE;
        if (value + 1 >= TWO_PWR_63_DBL)
            return MAX_VALUE;
    }
    if (value < 0)
        return negate(fromNumber(-value, unsigned));
    return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
}
/**
 * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
 * @function
 * @param {number} value The number in question
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
// Long.fromNumber = fromNumber;
/**
 * @param {number} lowBits
 * @param {number} highBits
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromBits(lowBits, highBits, unsigned) {
    return new Long(lowBits, highBits, unsigned);
}
/**
 * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
 *  assumed to use 32 bits.
 * @function
 * @param {number} lowBits The low 32 bits
 * @param {number} highBits The high 32 bits
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long} The corresponding Long value
 */
// Long.fromBits = fromBits;
/**
 * @function
 * @param {number} base
 * @param {number} exponent
 * @returns {number}
 * @inner
 */
var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)
/**
 * @param {string} str
 * @param {(boolean|number)=} unsigned
 * @param {number=} radix
 * @returns {!Long}
 * @inner
 */
function fromString(str, unsigned, radix) {
    if (str.length === 0)
        throw Error('empty string');
    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
        return ZERO;
    if (typeof unsigned === 'number') {
        // For goog.math.long compatibility
        radix = unsigned,
            unsigned = false;
    }
    else {
        unsigned = !!unsigned;
    }
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');
    var p = str.indexOf('-');
    if (p > 0)
        throw Error('interior hyphen');
    else if (p === 0) {
        return negate(fromString(str.substring(1), unsigned, radix));
    }
    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 8));
    var result = ZERO;
    for (var i = 0; i < str.length; i += 8) {
        var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
        if (size < 8) {
            var power = fromNumber(pow_dbl(radix, size));
            result = add(multiply(result, power), fromNumber(value));
        }
        else {
            result = multiply(result, radixToPower);
            result = add(result, fromNumber(value));
        }
    }
    result.unsigned = unsigned;
    return result;
}
/**
 * Returns a Long representation of the given string, written using the specified radix.
 * @function
 * @param {string} str The textual representation of the Long
 * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
 * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
 * @returns {!Long} The corresponding Long value
 */
// Long.fromString = fromString;
/**
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
 * @param {boolean=} unsigned
 * @returns {!Long}
 * @inner
 */
function fromValue(val, unsigned) {
    if (typeof val === 'number')
        return fromNumber(val, unsigned);
    if (typeof val === 'string')
        return fromString(val, unsigned);
    // Throws for non-objects, converts non-instanceof Long:
    return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
}
/**
 * Converts the specified value to a Long using the appropriate from* function for its type.
 * @function
 * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {!Long}
 */
// Long.fromValue = fromValue;
// NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
// no runtime penalty for these.
/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_16_DBL = 1 << 16;
/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_24_DBL = 1 << 24;
/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
/**
 * @type {number}
 * @const
 * @inner
 */
var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
/**
 * @type {!Long}
 * @const
 * @inner
 */
var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
/**
 * @type {!Long}
 * @inner
 */
var ZERO = fromInt(0);
/**
 * Signed zero.
 * @type {!Long}
 */
// Long.ZERO = ZERO;
/**
 * @type {!Long}
 * @inner
 */
var UZERO = fromInt(0, true);
/**
 * Unsigned zero.
 * @type {!Long}
 */
// Long.UZERO = UZERO;
/**
 * @type {!Long}
 * @inner
 */
var ONE = fromInt(1);
/**
 * Signed one.
 * @type {!Long}
 */
// Long.ONE = ONE;
/**
 * @type {!Long}
 * @inner
 */
var UONE = fromInt(1, true);
/**
 * Unsigned one.
 * @type {!Long}
 */
// Long.UONE = UONE;
/**
 * @type {!Long}
 * @inner
 */
var NEG_ONE = fromInt(-1);
/**
 * Signed negative one.
 * @type {!Long}
 */
// Long.NEG_ONE = NEG_ONE;
/**
 * @type {!Long}
 * @inner
 */
var MAX_VALUE = fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0, false);
/**
 * Maximum signed value.
 * @type {!Long}
 */
// Long.MAX_VALUE = MAX_VALUE;
/**
 * @type {!Long}
 * @inner
 */
var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF | 0, 0xFFFFFFFF | 0, true);
/**
 * Maximum unsigned value.
 * @type {!Long}
 */
// Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
/**
 * @type {!Long}
 * @inner
 */
var MIN_VALUE = fromBits(0, 0x80000000 | 0, false);
/**
 * Minimum signed value.
 * @type {!Long}
 */
// Long.MIN_VALUE = MIN_VALUE;
/**
 * @alias Long.prototype
 * @inner
 */
// var LongPrototype = Long.prototype;
/**
 * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
 * @this {!Long}
 * @returns {number}
 */
function toInt($this) {
    return $this.unsigned ? $this.low >>> 0 : $this.low;
}
;
/**
 * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
 * @this {!Long}
 * @returns {number}
 */
function toNumber($this) {
    if ($this.unsigned)
        return (($this.high >>> 0) * TWO_PWR_32_DBL) + ($this.low >>> 0);
    return $this.high * TWO_PWR_32_DBL + ($this.low >>> 0);
}
;
/**
 * Converts the Long to a string written in the specified radix.
 * @this {!Long}
 * @param {number=} radix Radix (2-36), defaults to 10
 * @returns {string}
 * @override
 * @throws {RangeError} If `radix` is out of range
 */
function toString($this, radix) {
    radix = radix || 10;
    if (radix < 2 || 36 < radix)
        throw RangeError('radix');
    if (isZero($this))
        return '0';
    if (isNegative($this)) { // Unsigned Longs are never negative
        if (equals($this, MIN_VALUE)) {
            // We need to change the Long value before it can be negated, so we remove
            // the bottom-most digit in this base and then recurse to do the rest.
            var radixLong = fromNumber(radix), div = divide($this, radixLong), rem1 = subtract(multiply(div, radixLong), $this);
            return toString(div, radix) + toInt(rem1).toString(radix);
        }
        else
            return '-' + toString(negate($this), radix);
    }
    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = fromNumber(pow_dbl(radix, 6), $this.unsigned), rem = $this;
    var result = '';
    while (true) {
        var remDiv = divide(rem, radixToPower), intval = toInt(subtract(rem, multiply(remDiv, radixToPower))) >>> 0, digits = intval.toString(radix);
        rem = remDiv;
        if (isZero(rem))
            return digits + result;
        else {
            while (digits.length < 6)
                digits = '0' + digits;
            result = '' + digits + result;
        }
    }
}
;
/**
 * Gets the high 32 bits as a signed integer.
 * @this {!Long}
 * @returns {number} Signed high bits
 */
function getHighBits($this) {
    return $this.high;
}
;
/**
 * Gets the high 32 bits as an unsigned integer.
 * @this {!Long}
 * @returns {number} Unsigned high bits
 */
function getHighBitsUnsigned($this) {
    return $this.high >>> 0;
}
;
/**
 * Gets the low 32 bits as a signed integer.
 * @this {!Long}
 * @returns {number} Signed low bits
 */
function getLowBits($this) {
    return $this.low;
}
;
/**
 * Gets the low 32 bits as an unsigned integer.
 * @this {!Long}
 * @returns {number} Unsigned low bits
 */
function getLowBitsUnsigned($this) {
    return $this.low >>> 0;
}
;
/**
 * Gets the number of bits needed to represent the absolute value of this Long.
 * @this {!Long}
 * @returns {number}
 */
function getNumBitsAbs($this) {
    if (isNegative($this)) // Unsigned Longs are never negative
        return equals($this, MIN_VALUE) ? 64 : getNumBitsAbs(negate($this));
    var val = $this.high != 0 ? $this.high : $this.low;
    for (var bit = 31; bit > 0; bit--)
        if ((val & (1 << bit)) != 0)
            break;
    return $this.high != 0 ? bit + 33 : bit + 1;
}
;
/**
 * Tests if this Long's value equals zero.
 * @this {!Long}
 * @returns {boolean}
 */
function isZero($this) {
    return $this.high === 0 && $this.low === 0;
}
;
/**
 * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
 * @returns {boolean}
 */
// LongPrototype.eqz = LongPrototype.isZero;
/**
 * Tests if this Long's value is negative.
 * @this {!Long}
 * @returns {boolean}
 */
function isNegative($this) {
    return !$this.unsigned && $this.high < 0;
}
;
/**
 * Tests if this Long's value is positive.
 * @this {!Long}
 * @returns {boolean}
 */
function isPositive($this) {
    return $this.unsigned || $this.high >= 0;
}
;
/**
 * Tests if this Long's value is odd.
 * @this {!Long}
 * @returns {boolean}
 */
function isOdd($this) {
    return ($this.low & 1) === 1;
}
;
/**
 * Tests if this Long's value is even.
 * @this {!Long}
 * @returns {boolean}
 */
function isEven($this) {
    return ($this.low & 1) === 0;
}
;
/**
 * Tests if this Long's value equals the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function equals($this, other) {
    if (!isLong(other))
        other = fromValue(other);
    if ($this.unsigned !== other.unsigned && ($this.high >>> 31) === 1 && (other.high >>> 31) === 1)
        return false;
    return $this.high === other.high && $this.low === other.low;
}
;
/**
 * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.eq = LongPrototype.equals;
/**
 * Tests if this Long's value differs from the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function notEquals($this, other) {
    return !equals($this, /* validates */ other);
}
;
/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.neq = LongPrototype.notEquals;
/**
 * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.ne = LongPrototype.notEquals;
/**
 * Tests if this Long's value is less than the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function lessThan($this, other) {
    return compare($this, /* validates */ other) < 0;
}
;
/**
 * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.lt = LongPrototype.lessThan;
/**
 * Tests if this Long's value is less than or equal the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function lessThanOrEqual($this, other) {
    return compare($this, /* validates */ other) <= 0;
}
;
/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.lte = LongPrototype.lessThanOrEqual;
/**
 * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.le = LongPrototype.lessThanOrEqual;
/**
 * Tests if this Long's value is greater than the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function greaterThan($this, other) {
    return compare($this, /* validates */ other) > 0;
}
;
/**
 * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.gt = LongPrototype.greaterThan;
/**
 * Tests if this Long's value is greater than or equal the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
function greaterThanOrEqual($this, other) {
    return compare($this, /* validates */ other) >= 0;
}
;
/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.gte = LongPrototype.greaterThanOrEqual;
/**
 * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {boolean}
 */
// LongPrototype.ge = LongPrototype.greaterThanOrEqual;
/**
 * Compares this Long's value with the specified's.
 * @this {!Long}
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
function compare($this, other) {
    if (!isLong(other))
        other = fromValue(other);
    if (equals($this, other))
        return 0;
    var thisNeg = isNegative($this), otherNeg = isNegative(other);
    if (thisNeg && !otherNeg)
        return -1;
    if (!thisNeg && otherNeg)
        return 1;
    // At this point the sign bits are the same
    if (!$this.unsigned)
        return isNegative(subtract($this, other)) ? -1 : 1;
    // Both are positive if at least one is unsigned
    return (other.high >>> 0) > ($this.high >>> 0) || (other.high === $this.high && (other.low >>> 0) > ($this.low >>> 0)) ? -1 : 1;
}
;
/**
 * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
 * @function
 * @param {!Long|number|string} other Other value
 * @returns {number} 0 if they are the same, 1 if the this is greater and -1
 *  if the given one is greater
 */
// LongPrototype.comp = LongPrototype.compare;
/**
 * Negates this Long's value.
 * @this {!Long}
 * @returns {!Long} Negated Long
 */
function negate($this) {
    if (!$this.unsigned && equals($this, MIN_VALUE))
        return MIN_VALUE;
    return add(not($this), ONE);
}
;
/**
 * Negates this Long's value. This is an alias of {@link Long#negate}.
 * @function
 * @returns {!Long} Negated Long
 */
// LongPrototype.neg = LongPrototype.negate;
/**
 * Returns the sum of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} addend Addend
 * @returns {!Long} Sum
 */
function add($this, addend) {
    if (!isLong(addend))
        addend = fromValue(addend);
    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
    var a48 = $this.high >>> 16;
    var a32 = $this.high & 0xFFFF;
    var a16 = $this.low >>> 16;
    var a00 = $this.low & 0xFFFF;
    var b48 = addend.high >>> 16;
    var b32 = addend.high & 0xFFFF;
    var b16 = addend.low >>> 16;
    var b00 = addend.low & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, $this.unsigned);
}
;
/**
 * Returns the difference of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
function subtract($this, subtrahend) {
    if (!isLong(subtrahend))
        subtrahend = fromValue(subtrahend);
    return add($this, negate(subtrahend));
}
;
/**
 * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
 * @function
 * @param {!Long|number|string} subtrahend Subtrahend
 * @returns {!Long} Difference
 */
// LongPrototype.sub = LongPrototype.subtract;
/**
 * Returns the product of this and the specified Long.
 * @this {!Long}
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
function multiply($this, multiplier) {
    if (isZero($this))
        return $this.unsigned ? UZERO : ZERO;
    if (!isLong(multiplier))
        multiplier = fromValue(multiplier);
    // use wasm support if present
    if (wasm) {
        var low = wasm.mul($this.low, $this.high, multiplier.low, multiplier.high);
        return fromBits(low, wasm.get_high(), $this.unsigned);
    }
    if (isZero(multiplier))
        return $this.unsigned ? UZERO : ZERO;
    if (equals($this, MIN_VALUE))
        return isOdd(multiplier) ? MIN_VALUE : ZERO;
    if (equals(multiplier, MIN_VALUE))
        return isOdd($this) ? MIN_VALUE : ZERO;
    if (isNegative($this)) {
        if (isNegative(multiplier))
            return multiply(negate($this), negate(multiplier));
        else
            return negate(multiply(negate($this), multiplier));
    }
    else if (isNegative(multiplier))
        return negate(multiply($this, negate(multiplier)));
    // If both longs are small, use float multiplication
    if (lessThan($this, TWO_PWR_24) && lessThan(multiplier, TWO_PWR_24))
        return fromNumber(toNumber($this) * toNumber(multiplier), $this.unsigned);
    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.
    var a48 = $this.high >>> 16;
    var a32 = $this.high & 0xFFFF;
    var a16 = $this.low >>> 16;
    var a00 = $this.low & 0xFFFF;
    var b48 = multiplier.high >>> 16;
    var b32 = multiplier.high & 0xFFFF;
    var b16 = multiplier.low >>> 16;
    var b00 = multiplier.low & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, $this.unsigned);
}
;
/**
 * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
 * @function
 * @param {!Long|number|string} multiplier Multiplier
 * @returns {!Long} Product
 */
// LongPrototype.mul = LongPrototype.multiply;
/**
 * Returns this Long divided by the specified. The result is signed if this Long is signed or
 *  unsigned if this Long is unsigned.
 * @this {!Long}
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
function divide($this, divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);
    if (isZero(divisor))
        throw Error('division by zero');
    // use wasm support if present
    if (wasm) {
        // guard against signed division overflow: the largest
        // negative number / -1 would be 1 larger than the largest
        // positive number, due to two's complement.
        if (!$this.unsigned &&
            $this.high === -0x80000000 &&
            divisor.low === -1 && divisor.high === -1) {
            // be consistent with non-wasm code path
            return $this;
        }
        var low = ($this.unsigned ? wasm.div_u : wasm.div_s)($this.low, $this.high, divisor.low, divisor.high);
        return fromBits(low, wasm.get_high(), $this.unsigned);
    }
    if (isZero($this))
        return $this.unsigned ? UZERO : ZERO;
    var approx, rem, res;
    if (!$this.unsigned) {
        // This section is only relevant for signed longs and is derived from the
        // closure library as a whole.
        if (equals($this, MIN_VALUE)) {
            if (equals(divisor, ONE) || equals(divisor, NEG_ONE))
                return MIN_VALUE; // recall that -MIN_VALUE == MIN_VALUE
            else if (equals(divisor, MIN_VALUE))
                return ONE;
            else {
                // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                var halfThis = shiftRight($this, 1);
                approx = shiftLeft(divide(halfThis, divisor), 1);
                if (equals(approx, ZERO)) {
                    return isNegative(divisor) ? ONE : NEG_ONE;
                }
                else {
                    rem = subtract($this, multiply(divisor, approx));
                    res = add(approx, divide(rem, divisor));
                    return res;
                }
            }
        }
        else if (equals(divisor, MIN_VALUE))
            return $this.unsigned ? UZERO : ZERO;
        if (isNegative($this)) {
            if (isNegative(divisor))
                return divide(negate($this), negate(divisor));
            return negate(divide(negate($this), divisor));
        }
        else if (isNegative(divisor))
            return negate(divide($this, negate(divisor)));
        res = ZERO;
    }
    else {
        // The algorithm below has not been made for unsigned longs. It's therefore
        // required to take special care of the MSB prior to running it.
        if (!divisor.unsigned)
            divisor = toUnsigned(divisor);
        if (greaterThan(divisor, $this))
            return UZERO;
        if (greaterThan(divisor, shiftRightUnsigned($this, 1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
            return UONE;
        res = UZERO;
    }
    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    rem = $this;
    while (greaterThanOrEqual(rem, divisor)) {
        // Approximate the result of division. This may be a little greater or
        // smaller than the actual value.
        approx = Math.max(1, Math.floor(toNumber(rem) / toNumber(divisor)));
        // We will tweak the approximate result by changing it in the 48-th digit or
        // the smallest non-fractional digit, whichever is larger.
        var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48), 
        // Decrease the approximation until it is smaller than the remainder.  Note
        // that if it is too large, the product overflows and is negative.
        approxRes = fromNumber(approx), approxRem = multiply(approxRes, divisor);
        while (isNegative(approxRem) || greaterThan(approxRem, rem)) {
            approx -= delta;
            approxRes = fromNumber(approx, $this.unsigned);
            approxRem = multiply(approxRes, divisor);
        }
        // We know the answer can't be zero... and actually, zero would cause
        // infinite recursion since we would make no progress.
        if (isZero(approxRes))
            approxRes = ONE;
        res = add(res, approxRes);
        rem = subtract(rem, approxRem);
    }
    return res;
}
;
/**
 * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Quotient
 */
// LongPrototype.div = LongPrototype.divide;
/**
 * Returns this Long modulo the specified.
 * @this {!Long}
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
function modulo($this, divisor) {
    if (!isLong(divisor))
        divisor = fromValue(divisor);
    // use wasm support if present
    if (wasm) {
        var low = ($this.unsigned ? wasm.rem_u : wasm.rem_s)($this.low, $this.high, divisor.low, divisor.high);
        return fromBits(low, wasm.get_high(), $this.unsigned);
    }
    return subtract($this, multiply(divide($this, divisor), divisor));
}
;
/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
// LongPrototype.mod = LongPrototype.modulo;
/**
 * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
 * @function
 * @param {!Long|number|string} divisor Divisor
 * @returns {!Long} Remainder
 */
// LongPrototype.rem = LongPrototype.modulo;
/**
 * Returns the bitwise NOT of this Long.
 * @this {!Long}
 * @returns {!Long}
 */
function not($this) {
    return fromBits(~$this.low, ~$this.high, $this.unsigned);
}
;
/**
 * Returns the bitwise AND of this Long and the specified.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
function and($this, other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits($this.low & other.low, $this.high & other.high, $this.unsigned);
}
;
/**
 * Returns the bitwise OR of this Long and the specified.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
function or($this, other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits($this.low | other.low, $this.high | other.high, $this.unsigned);
}
;
/**
 * Returns the bitwise XOR of this Long and the given one.
 * @this {!Long}
 * @param {!Long|number|string} other Other Long
 * @returns {!Long}
 */
function xor($this, other) {
    if (!isLong(other))
        other = fromValue(other);
    return fromBits($this.low ^ other.low, $this.high ^ other.high, $this.unsigned);
}
;
/**
 * Returns this Long with bits shifted to the left by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
function shiftLeft($this, numBits) {
    if (isLong(numBits))
        numBits = toInt(numBits);
    if ((numBits &= 63) === 0)
        return $this;
    else if (numBits < 32)
        return fromBits($this.low << numBits, ($this.high << numBits) | ($this.low >>> (32 - numBits)), $this.unsigned);
    else
        return fromBits(0, $this.low << (numBits - 32), $this.unsigned);
}
;
/**
 * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
// LongPrototype.shl = LongPrototype.shiftLeft;
/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
function shiftRight($this, numBits) {
    if (isLong(numBits))
        numBits = toInt(numBits);
    if ((numBits &= 63) === 0)
        return $this;
    else if (numBits < 32)
        return fromBits(($this.low >>> numBits) | ($this.high << (32 - numBits)), $this.high >> numBits, $this.unsigned);
    else
        return fromBits($this.high >> (numBits - 32), $this.high >= 0 ? 0 : -1, $this.unsigned);
}
;
/**
 * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
// LongPrototype.shr = LongPrototype.shiftRight;
/**
 * Returns this Long with bits logically shifted to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
function shiftRightUnsigned($this, numBits) {
    if (isLong(numBits))
        numBits = toInt(numBits);
    numBits &= 63;
    if (numBits === 0)
        return $this;
    else {
        var high = $this.high;
        if (numBits < 32) {
            var low = $this.low;
            return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, $this.unsigned);
        }
        else if (numBits === 32)
            return fromBits(high, 0, $this.unsigned);
        else
            return fromBits(high >>> (numBits - 32), 0, $this.unsigned);
    }
}
;
/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
// LongPrototype.shru = LongPrototype.shiftRightUnsigned;
/**
 * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Shifted Long
 */
// LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
/**
 * Returns this Long with bits rotated to the left by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
const rotateLeft = function rotateLeft(numBits) {
    var b;
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    if (numBits === 32)
        return fromBits(this.high, this.low, this.unsigned);
    if (numBits < 32) {
        b = (32 - numBits);
        return fromBits(((this.low << numBits) | (this.high >>> b)), ((this.high << numBits) | (this.low >>> b)), this.unsigned);
    }
    numBits -= 32;
    b = (32 - numBits);
    return fromBits(((this.high << numBits) | (this.low >>> b)), ((this.low << numBits) | (this.high >>> b)), this.unsigned);
};
/**
 * Returns this Long with bits rotated to the left by the given amount. This is an alias of {@link Long#rotateLeft}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
// LongPrototype.rotl = LongPrototype.rotateLeft;
/**
 * Returns this Long with bits rotated to the right by the given amount.
 * @this {!Long}
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
const rotateRight = function rotateRight(numBits) {
    var b;
    if (isLong(numBits))
        numBits = numBits.toInt();
    if ((numBits &= 63) === 0)
        return this;
    if (numBits === 32)
        return fromBits(this.high, this.low, this.unsigned);
    if (numBits < 32) {
        b = (32 - numBits);
        return fromBits(((this.high << b) | (this.low >>> numBits)), ((this.low << b) | (this.high >>> numBits)), this.unsigned);
    }
    numBits -= 32;
    b = (32 - numBits);
    return fromBits(((this.low << b) | (this.high >>> numBits)), ((this.high << b) | (this.low >>> numBits)), this.unsigned);
};
/**
 * Returns this Long with bits rotated to the right by the given amount. This is an alias of {@link Long#rotateRight}.
 * @function
 * @param {number|!Long} numBits Number of bits
 * @returns {!Long} Rotated Long
 */
// LongPrototype.rotr = LongPrototype.rotateRight;
/**
 * Converts this Long to signed.
 * @this {!Long}
 * @returns {!Long} Signed long
 */
function toSigned($this) {
    if (!$this.unsigned)
        return $this;
    return fromBits($this.low, $this.high, false);
}
;
/**
 * Converts this Long to unsigned.
 * @this {!Long}
 * @returns {!Long} Unsigned long
 */
function toUnsigned($this) {
    if ($this.unsigned)
        return $this;
    return fromBits($this.low, $this.high, true);
}
;
/**
 * Converts this Long to its byte representation.
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @this {!Long}
 * @returns {!Array.<number>} Byte representation
 */
function toBytes($this, le) {
    return le ? toBytesLE($this) : toBytesBE($this);
}
;
/**
 * Converts this Long to its little endian byte representation.
 * @this {!Long}
 * @returns {!Array.<number>} Little endian byte representation
 */
function toBytesLE($this) {
    var hi = $this.high, lo = $this.low;
    return [
        lo & 0xff,
        lo >>> 8 & 0xff,
        lo >>> 16 & 0xff,
        lo >>> 24,
        hi & 0xff,
        hi >>> 8 & 0xff,
        hi >>> 16 & 0xff,
        hi >>> 24
    ];
}
;
/**
 * Converts this Long to its big endian byte representation.
 * @this {!Long}
 * @returns {!Array.<number>} Big endian byte representation
 */
function toBytesBE($this) {
    var hi = $this.high, lo = $this.low;
    return [
        hi >>> 24,
        hi >>> 16 & 0xff,
        hi >>> 8 & 0xff,
        hi & 0xff,
        lo >>> 24,
        lo >>> 16 & 0xff,
        lo >>> 8 & 0xff,
        lo & 0xff
    ];
}
;
/**
 * Creates a Long from its byte representation.
 * @param {!Array.<number>} bytes Byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @param {boolean=} le Whether little or big endian, defaults to big endian
 * @returns {Long} The corresponding Long value
 */
function fromBytes(bytes, unsigned, le) {
    return le ? fromBytesLE(bytes, unsigned) : fromBytesBE(bytes, unsigned);
}
;
/**
 * Creates a Long from its little endian byte representation.
 * @param {!Array.<number>} bytes Little endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
function fromBytesLE(bytes, unsigned) {
    return new Long(bytes[0] |
        bytes[1] << 8 |
        bytes[2] << 16 |
        bytes[3] << 24, bytes[4] |
        bytes[5] << 8 |
        bytes[6] << 16 |
        bytes[7] << 24, unsigned);
}
;
/**
 * Creates a Long from its big endian byte representation.
 * @param {!Array.<number>} bytes Big endian byte representation
 * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
 * @returns {Long} The corresponding Long value
 */
function fromBytesBE(bytes, unsigned) {
    return new Long(bytes[4] << 24 |
        bytes[5] << 16 |
        bytes[6] << 8 |
        bytes[7], bytes[0] << 24 |
        bytes[1] << 16 |
        bytes[2] << 8 |
        bytes[3], unsigned);
}
;


/***/ }),

/***/ "./src/DevTools/MainPanel.fs.js":
/*!**************************************!*\
  !*** ./src/DevTools/MainPanel.fs.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Message": () => /* binding */ Message,
/* harmony export */   "Message$reflection": () => /* binding */ Message$reflection,
/* harmony export */   "panel": () => /* binding */ panel,
/* harmony export */   "styleSheet": () => /* binding */ styleSheet,
/* harmony export */   "contentRun": () => /* binding */ contentRun,
/* harmony export */   "buildStoresTable": () => /* binding */ buildStoresTable,
/* harmony export */   "viewStores": () => /* binding */ viewStores,
/* harmony export */   "dispatch": () => /* binding */ dispatch,
/* harmony export */   "view": () => /* binding */ view,
/* harmony export */   "initialisePanel": () => /* binding */ initialisePanel,
/* harmony export */   "unInitialisePanel": () => /* binding */ unInitialisePanel,
/* harmony export */   "init": () => /* binding */ init
/* harmony export */ });
/* harmony import */ var _fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./.fable/fable-library.3.0.5/Types.js */ "./src/DevTools/.fable/fable-library.3.0.5/Types.js");
/* harmony import */ var _fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./.fable/fable-library.3.0.5/Reflection.js */ "./src/DevTools/.fable/fable-library.3.0.5/Reflection.js");
/* harmony import */ var _fable_fable_library_3_0_5_Util_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./.fable/fable-library.3.0.5/Util.js */ "./src/DevTools/.fable/fable-library.3.0.5/Util.js");
/* harmony import */ var _Fable_Sveltish_Styling_fs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Fable.Sveltish/Styling.fs.js */ "./src/Fable.Sveltish/Styling.fs.js");
/* harmony import */ var _Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Fable.Sveltish/Attr.fs.js */ "./src/Fable.Sveltish/Attr.fs.js");
/* harmony import */ var _fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./.fable/fable-library.3.0.5/List.js */ "./src/DevTools/.fable/fable-library.3.0.5/List.js");
/* harmony import */ var _fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./.fable/fable-library.3.0.5/String.js */ "./src/DevTools/.fable/fable-library.3.0.5/String.js");
/* harmony import */ var _fable_fable_library_3_0_5_Option_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./.fable/fable-library.3.0.5/Option.js */ "./src/DevTools/.fable/fable-library.3.0.5/Option.js");
/* harmony import */ var _Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Fable.Sveltish/Html.fs.js */ "./src/Fable.Sveltish/Html.fs.js");
/* harmony import */ var _Fable_Sveltish_DOM_fs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Fable.Sveltish/DOM.fs.js */ "./src/Fable.Sveltish/DOM.fs.js");
/* harmony import */ var _fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./.fable/fable-library.3.0.5/Seq.js */ "./src/DevTools/.fable/fable-library.3.0.5/Seq.js");
/* harmony import */ var _inject_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inject.js */ "./src/DevTools/inject.js");













class Message extends _fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_0__.Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["ViewStores"];
    }
}

function Message$reflection() {
    return (0,_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_1__.union_type)("Sveltish.Devtools.Message", [], Message, () => [[]]);
}

const panel = (0,_fable_fable_library_3_0_5_Util_js__WEBPACK_IMPORTED_MODULE_2__.createAtom)(null);

const styleSheet = (0,_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.ofArray)([(0,_Fable_Sveltish_Styling_fs_js__WEBPACK_IMPORTED_MODULE_3__.rule)(".sv-container", (0,_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.ofArray)([(0,_Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__.padding)("12px"), (0,_Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__.minHeight)("100vh")])), (0,_Fable_Sveltish_Styling_fs_js__WEBPACK_IMPORTED_MODULE_3__.rule)(".sv-main", (0,_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.ofArray)([(0,_Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__.background)("white"), (0,_Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__.minHeight)("100vh")])), (0,_Fable_Sveltish_Styling_fs_js__WEBPACK_IMPORTED_MODULE_3__.rule)(".sv-sidebar", (0,_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.ofArray)([(0,_Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__.background)("#eeeeee"), (0,_Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__.borderRight)("1pt solid #cccccc")])), (0,_Fable_Sveltish_Styling_fs_js__WEBPACK_IMPORTED_MODULE_3__.rule)("#sv-title", (0,_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.singleton)((0,_Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__.marginBottom)("4px"))), (0,_Fable_Sveltish_Styling_fs_js__WEBPACK_IMPORTED_MODULE_3__.rule)(".sv-menu li", (0,_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.ofArray)([(0,_Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__.fontSize)("90%"), (0,_Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__.cursor)("pointer")])), (0,_Fable_Sveltish_Styling_fs_js__WEBPACK_IMPORTED_MODULE_3__.rule)(".sv-menu li:hover", (0,_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.singleton)((0,_Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__.textDecoration)("underline"))), (0,_Fable_Sveltish_Styling_fs_js__WEBPACK_IMPORTED_MODULE_3__.rule)(".sv-menu li.active", (0,_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.singleton)((0,_Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__.fontWeight)("bold")))]);

function contentRun(fn, arg, success, failure) {
    console.log((0,_fable_fable_library_3_0_5_Option_js__WEBPACK_IMPORTED_MODULE_7__.some)((0,_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_6__.toText)((0,_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_6__.interpolate)(" (%P())(%P())", [fn, arg]))));
    chrome.devtools.inspectedWindow.eval((0,_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_6__.toText)((0,_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_6__.interpolate)("(%P())(%P())", [fn, arg])),{},((result) => {
        if (result === undefined) {
            failure("Unknown error");
        }
        else {
            success(result);
        }
    }));
}

function buildStoresTable(idVals) {
    let clo1_8, clo1_3, clo1_2, clo1, clo1_1, clo1_7;
    let element;
    const clo1_9 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.div)([(clo1_8 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.table)([(clo1_3 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.thead)([(clo1_2 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.tr)([(clo1 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.th)([(ctx) => (0,_Fable_Sveltish_DOM_fs_js__WEBPACK_IMPORTED_MODULE_9__.text)("Id", ctx)]), clo1), (clo1_1 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.th)([(ctx_1) => (0,_Fable_Sveltish_DOM_fs_js__WEBPACK_IMPORTED_MODULE_9__.text)("Val", ctx_1)]), clo1_1)]), clo1_2)]), clo1_3), (clo1_7 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.tbody)((0,_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.ofSeq)((0,_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_10__.delay)(() => (0,_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_10__.map)((item) => {
        let clo1_5, value_2, clo1_6, value_3;
        const clo1_4 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.tr)([(clo1_5 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.td)([(value_2 = (0,_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_0__.toString)(item.Id), (ctx_2) => (0,_Fable_Sveltish_DOM_fs_js__WEBPACK_IMPORTED_MODULE_9__.text)(value_2, ctx_2))]), clo1_5), (clo1_6 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.td)([(value_3 = JSON.stringify(item.Val), (ctx_3) => (0,_Fable_Sveltish_DOM_fs_js__WEBPACK_IMPORTED_MODULE_9__.text)(value_3, ctx_3))]), clo1_6)]);
        return clo1_4;
    }, idVals)))), clo1_7)]), clo1_8)]);
    element = (clo1_9);
    return (ctx_4) => (0,_Fable_Sveltish_Styling_fs_js__WEBPACK_IMPORTED_MODULE_3__.withStyle)(styleSheet, element, ctx_4);
}

function viewStores(doc) {
    console.log((0,_fable_fable_library_3_0_5_Option_js__WEBPACK_IMPORTED_MODULE_7__.some)("Show stores"));
    contentRun(_inject_js__WEBPACK_IMPORTED_MODULE_11__.injectedGetStores, void 0, (result) => {
        (0,_Fable_Sveltish_DOM_fs_js__WEBPACK_IMPORTED_MODULE_9__.mountElementOnDocument)(doc, "sv-view", buildStoresTable(result.Data));
        console.dir((0,_fable_fable_library_3_0_5_Option_js__WEBPACK_IMPORTED_MODULE_7__.some)(result));
    }, (error) => {
        console.dir((0,_fable_fable_library_3_0_5_Option_js__WEBPACK_IMPORTED_MODULE_7__.some)(error));
    });
}

function dispatch(doc, msg) {
    viewStores(doc);
}

function view(dispatch_1) {
    let clo1_10, clo1_7, clo1, clo1_6, clo1_1, clo1_2, clo1_3, clo1_4, clo1_5, clo1_9, clo1_8;
    let element;
    const clo1_11 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.div)([(0,_Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__.class$0027)()("sv-container"), (clo1_10 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.div)([(0,_Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__.class$0027)()("columns"), (clo1_7 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.div)([(0,_Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__.class$0027)()("sv-sidebar column is-one-fifth"), (clo1 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.h4)([(0,_Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__.id$0027)("sv-title"), (0,_Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__.class$0027)()("title is-5"), (ctx) => (0,_Fable_Sveltish_DOM_fs_js__WEBPACK_IMPORTED_MODULE_9__.text)("Sveltish", ctx)]), clo1), (clo1_6 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.ul)([(0,_Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__.class$0027)()("sv-menu"), (clo1_1 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.li)([(0,_Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__.id$0027)("stores"), (0,_Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__.onClick)((_arg1) => {
        dispatch_1(new Message(0));
    }, (0,_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.empty)()), (ctx_1) => (0,_Fable_Sveltish_DOM_fs_js__WEBPACK_IMPORTED_MODULE_9__.text)("Stores", ctx_1)]), clo1_1), (clo1_2 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.li)([(ctx_2) => (0,_Fable_Sveltish_DOM_fs_js__WEBPACK_IMPORTED_MODULE_9__.text)("Styles", ctx_2)]), clo1_2), (clo1_3 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.li)([(ctx_3) => (0,_Fable_Sveltish_DOM_fs_js__WEBPACK_IMPORTED_MODULE_9__.text)("Maps", ctx_3)]), clo1_3), (clo1_4 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.li)([(ctx_4) => (0,_Fable_Sveltish_DOM_fs_js__WEBPACK_IMPORTED_MODULE_9__.text)("Element Bindings", ctx_4)]), clo1_4), (clo1_5 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.li)([(ctx_5) => (0,_Fable_Sveltish_DOM_fs_js__WEBPACK_IMPORTED_MODULE_9__.text)("Attribute Bindings", ctx_5)]), clo1_5)]), clo1_6)]), clo1_7), (clo1_9 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.div)([(0,_Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__.class$0027)()("sv-main column is-four-fifths"), (clo1_8 = (0,_Fable_Sveltish_Html_fs_js__WEBPACK_IMPORTED_MODULE_8__.div)([(0,_Fable_Sveltish_Attr_fs_js__WEBPACK_IMPORTED_MODULE_4__.id$0027)("sv-view")]), clo1_8)]), clo1_9)]), clo1_10)]);
    element = (clo1_11);
    return (ctx_6) => (0,_Fable_Sveltish_Styling_fs_js__WEBPACK_IMPORTED_MODULE_3__.withStyle)(styleSheet, element, ctx_6);
}

function initialisePanel(win) {
    let doc;
    (0,_Fable_Sveltish_DOM_fs_js__WEBPACK_IMPORTED_MODULE_9__.mountElementOnDocument)(win.document, "sveltish-app", view((doc = win.document, (msg) => {
        dispatch(doc, msg);
    })));
}

function unInitialisePanel(win) {
}

function init(p) {
    panel(p, true);
    panel().onShown.addListener((win) => {
        initialisePanel(win);
    });
    panel().onHidden.addListener((win_1) => {
        unInitialisePanel(win_1);
    });
}

chrome.devtools.panels.create("Sveltish Fable","/icon.png","/html/panel.html",((p) => {
    init(p);
}));



/***/ }),

/***/ "./src/DevTools/inject.js":
/*!********************************!*\
  !*** ./src/DevTools/inject.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "injectedGetStores": () => /* binding */ injectedGetStores
/* harmony export */ });
// This code runs in the context of the inspected window

function injectedGetStores() {
    let stores = document.body.__sveltish_global.stores;
    return {
        Data: Array.from(stores).map( i => { return { Id: i, Val: window.sv_get_store(i).Get } } )
    }
}



/***/ }),

/***/ "./src/Fable.Sveltish/Attr.fs.js":
/*!***************************************!*\
  !*** ./src/Fable.Sveltish/Attr.fs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accept": () => /* binding */ accept,
/* harmony export */   "name": () => /* binding */ name,
/* harmony export */   "className": () => /* binding */ className,
/* harmony export */   "placeholder": () => /* binding */ placeholder,
/* harmony export */   "target": () => /* binding */ target,
/* harmony export */   "href": () => /* binding */ href,
/* harmony export */   "src": () => /* binding */ src,
/* harmony export */   "alt": () => /* binding */ alt,
/* harmony export */   "disabled": () => /* binding */ disabled,
/* harmony export */   "min": () => /* binding */ min,
/* harmony export */   "max": () => /* binding */ max,
/* harmony export */   "value": () => /* binding */ value,
/* harmony export */   "style": () => /* binding */ style,
/* harmony export */   "multiple": () => /* binding */ multiple,
/* harmony export */   "rows": () => /* binding */ rows,
/* harmony export */   "cols": () => /* binding */ cols,
/* harmony export */   "readonly": () => /* binding */ readonly,
/* harmony export */   "autofocus": () => /* binding */ autofocus,
/* harmony export */   "id$0027": () => /* binding */ id$0027,
/* harmony export */   "type$0027": () => /* binding */ type$0027,
/* harmony export */   "for$0027": () => /* binding */ for$0027,
/* harmony export */   "class$0027": () => /* binding */ class$0027,
/* harmony export */   "unclass": () => /* binding */ unclass,
/* harmony export */   "unclass$0027": () => /* binding */ unclass$0027,
/* harmony export */   "EventModifier": () => /* binding */ EventModifier,
/* harmony export */   "EventModifier$reflection": () => /* binding */ EventModifier$reflection,
/* harmony export */   "on": () => /* binding */ on,
/* harmony export */   "onKeyboard": () => /* binding */ onKeyboard,
/* harmony export */   "onMouse": () => /* binding */ onMouse,
/* harmony export */   "onClick": () => /* binding */ onClick,
/* harmony export */   "onShow": () => /* binding */ onShow,
/* harmony export */   "onHide": () => /* binding */ onHide,
/* harmony export */   "onKeyDown": () => /* binding */ onKeyDown,
/* harmony export */   "onMouseMove": () => /* binding */ onMouseMove,
/* harmony export */   "cssAttr": () => /* binding */ cssAttr,
/* harmony export */   "all": () => /* binding */ all,
/* harmony export */   "margin": () => /* binding */ margin,
/* harmony export */   "marginTop": () => /* binding */ marginTop,
/* harmony export */   "marginLeft": () => /* binding */ marginLeft,
/* harmony export */   "marginBottom": () => /* binding */ marginBottom,
/* harmony export */   "marginRight": () => /* binding */ marginRight,
/* harmony export */   "backgroundColor": () => /* binding */ backgroundColor,
/* harmony export */   "borderColor": () => /* binding */ borderColor,
/* harmony export */   "borderWidth": () => /* binding */ borderWidth,
/* harmony export */   "color": () => /* binding */ color,
/* harmony export */   "cursor": () => /* binding */ cursor,
/* harmony export */   "justifyContent": () => /* binding */ justifyContent,
/* harmony export */   "paddingBottom": () => /* binding */ paddingBottom,
/* harmony export */   "paddingLeft": () => /* binding */ paddingLeft,
/* harmony export */   "paddingRight": () => /* binding */ paddingRight,
/* harmony export */   "paddingTop": () => /* binding */ paddingTop,
/* harmony export */   "textAlign": () => /* binding */ textAlign,
/* harmony export */   "whiteSpace": () => /* binding */ whiteSpace,
/* harmony export */   "alignItems": () => /* binding */ alignItems,
/* harmony export */   "border": () => /* binding */ border,
/* harmony export */   "background": () => /* binding */ background,
/* harmony export */   "borderRadius": () => /* binding */ borderRadius,
/* harmony export */   "boxShadow": () => /* binding */ boxShadow,
/* harmony export */   "zIndex": () => /* binding */ zIndex,
/* harmony export */   "display": () => /* binding */ display,
/* harmony export */   "fontSize": () => /* binding */ fontSize,
/* harmony export */   "fontFamily": () => /* binding */ fontFamily,
/* harmony export */   "minHeight": () => /* binding */ minHeight,
/* harmony export */   "maxHeight": () => /* binding */ maxHeight,
/* harmony export */   "width": () => /* binding */ width,
/* harmony export */   "minWidth": () => /* binding */ minWidth,
/* harmony export */   "maxWidth": () => /* binding */ maxWidth,
/* harmony export */   "height": () => /* binding */ height,
/* harmony export */   "lineHeight": () => /* binding */ lineHeight,
/* harmony export */   "position": () => /* binding */ position,
/* harmony export */   "verticalAlign": () => /* binding */ verticalAlign,
/* harmony export */   "fontWeight": () => /* binding */ fontWeight,
/* harmony export */   "float$0027": () => /* binding */ float$0027,
/* harmony export */   "padding": () => /* binding */ padding,
/* harmony export */   "boxSizing": () => /* binding */ boxSizing,
/* harmony export */   "userSelect": () => /* binding */ userSelect,
/* harmony export */   "top": () => /* binding */ top,
/* harmony export */   "left": () => /* binding */ left,
/* harmony export */   "opacity": () => /* binding */ opacity,
/* harmony export */   "transition": () => /* binding */ transition,
/* harmony export */   "resize": () => /* binding */ resize,
/* harmony export */   "overflow": () => /* binding */ overflow,
/* harmony export */   "textDecoration": () => /* binding */ textDecoration,
/* harmony export */   "borderSpacing": () => /* binding */ borderSpacing,
/* harmony export */   "borderBottom": () => /* binding */ borderBottom,
/* harmony export */   "borderRight": () => /* binding */ borderRight,
/* harmony export */   "borderLeft": () => /* binding */ borderLeft,
/* harmony export */   "borderTop": () => /* binding */ borderTop,
/* harmony export */   "flex": () => /* binding */ flex,
/* harmony export */   "flexDirection": () => /* binding */ flexDirection,
/* harmony export */   "addClass": () => /* binding */ addClass,
/* harmony export */   "useGlobal": () => /* binding */ useGlobal
/* harmony export */ });
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/String.js */ "./src/DevTools/.fable/fable-library.3.0.5/String.js");
/* harmony import */ var _DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM.fs.js */ "./src/Fable.Sveltish/DOM.fs.js");
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/Types.js */ "./src/DevTools/.fable/fable-library.3.0.5/Types.js");
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/Reflection.js */ "./src/DevTools/.fable/fable-library.3.0.5/Reflection.js");
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/Seq.js */ "./src/DevTools/.fable/fable-library.3.0.5/Seq.js");






function accept(n) {
    const arg = ["accept", n];
    return (ctx) => {
        let arg40, arg30;
        const name_1 = arg[0];
        const value_1 = arg[1];
        const ctx_1 = ctx;
        const parent = ctx_1.Parent;
        try {
            const e = ctx_1.Parent;
            if (name_1 === "class") {
                e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else if (name_1 === "class-") {
                e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else {
                ctx_1.SetAttribute(e, name_1, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1));
            }
            if (name_1 === "value") {
                e["__value"] = value_1;
            }
            const matchValue = ctx_1.StyleSheet;
            if (matchValue == null) {
            }
            else {
                (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_1)(parent)(arg30)(arg40)))));
        }
        return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
    };
}

function name(n) {
    const arg = ["name", n];
    return (ctx) => {
        let arg40, arg30;
        const name_1 = arg[0];
        const value_1 = arg[1];
        const ctx_1 = ctx;
        const parent = ctx_1.Parent;
        try {
            const e = ctx_1.Parent;
            if (name_1 === "class") {
                e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else if (name_1 === "class-") {
                e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else {
                ctx_1.SetAttribute(e, name_1, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1));
            }
            if (name_1 === "value") {
                e["__value"] = value_1;
            }
            const matchValue = ctx_1.StyleSheet;
            if (matchValue == null) {
            }
            else {
                (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_1)(parent)(arg30)(arg40)))));
        }
        return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
    };
}

function className(n) {
    const arg = ["class", n];
    return (ctx) => {
        let arg40, arg30;
        const name_1 = arg[0];
        const value_1 = arg[1];
        const ctx_1 = ctx;
        const parent = ctx_1.Parent;
        try {
            const e = ctx_1.Parent;
            if (name_1 === "class") {
                e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else if (name_1 === "class-") {
                e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else {
                ctx_1.SetAttribute(e, name_1, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1));
            }
            if (name_1 === "value") {
                e["__value"] = value_1;
            }
            const matchValue = ctx_1.StyleSheet;
            if (matchValue == null) {
            }
            else {
                (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_1)(parent)(arg30)(arg40)))));
        }
        return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
    };
}

function placeholder(n) {
    const arg = ["placeholder", n];
    return (ctx) => {
        let arg40, arg30;
        const name_1 = arg[0];
        const value_1 = arg[1];
        const ctx_1 = ctx;
        const parent = ctx_1.Parent;
        try {
            const e = ctx_1.Parent;
            if (name_1 === "class") {
                e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else if (name_1 === "class-") {
                e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else {
                ctx_1.SetAttribute(e, name_1, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1));
            }
            if (name_1 === "value") {
                e["__value"] = value_1;
            }
            const matchValue = ctx_1.StyleSheet;
            if (matchValue == null) {
            }
            else {
                (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_1)(parent)(arg30)(arg40)))));
        }
        return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
    };
}

function target(n) {
    const arg = ["target", n];
    return (ctx) => {
        let arg40, arg30;
        const name_1 = arg[0];
        const value_1 = arg[1];
        const ctx_1 = ctx;
        const parent = ctx_1.Parent;
        try {
            const e = ctx_1.Parent;
            if (name_1 === "class") {
                e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else if (name_1 === "class-") {
                e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else {
                ctx_1.SetAttribute(e, name_1, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1));
            }
            if (name_1 === "value") {
                e["__value"] = value_1;
            }
            const matchValue = ctx_1.StyleSheet;
            if (matchValue == null) {
            }
            else {
                (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_1)(parent)(arg30)(arg40)))));
        }
        return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
    };
}

function href(n) {
    const arg = ["href", n];
    return (ctx) => {
        let arg40, arg30;
        const name_1 = arg[0];
        const value_1 = arg[1];
        const ctx_1 = ctx;
        const parent = ctx_1.Parent;
        try {
            const e = ctx_1.Parent;
            if (name_1 === "class") {
                e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else if (name_1 === "class-") {
                e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else {
                ctx_1.SetAttribute(e, name_1, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1));
            }
            if (name_1 === "value") {
                e["__value"] = value_1;
            }
            const matchValue = ctx_1.StyleSheet;
            if (matchValue == null) {
            }
            else {
                (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_1)(parent)(arg30)(arg40)))));
        }
        return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
    };
}

function src(n) {
    const arg = ["src", n];
    return (ctx) => {
        let arg40, arg30;
        const name_1 = arg[0];
        const value_1 = arg[1];
        const ctx_1 = ctx;
        const parent = ctx_1.Parent;
        try {
            const e = ctx_1.Parent;
            if (name_1 === "class") {
                e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else if (name_1 === "class-") {
                e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else {
                ctx_1.SetAttribute(e, name_1, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1));
            }
            if (name_1 === "value") {
                e["__value"] = value_1;
            }
            const matchValue = ctx_1.StyleSheet;
            if (matchValue == null) {
            }
            else {
                (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_1)(parent)(arg30)(arg40)))));
        }
        return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
    };
}

function alt(n) {
    const arg = ["alt", n];
    return (ctx) => {
        let arg40, arg30;
        const name_1 = arg[0];
        const value_1 = arg[1];
        const ctx_1 = ctx;
        const parent = ctx_1.Parent;
        try {
            const e = ctx_1.Parent;
            if (name_1 === "class") {
                e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else if (name_1 === "class-") {
                e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else {
                ctx_1.SetAttribute(e, name_1, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1));
            }
            if (name_1 === "value") {
                e["__value"] = value_1;
            }
            const matchValue = ctx_1.StyleSheet;
            if (matchValue == null) {
            }
            else {
                (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_1)(parent)(arg30)(arg40)))));
        }
        return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
    };
}

function disabled(n) {
    const arg = ["disabled", n];
    return (ctx) => {
        let arg40, arg30;
        const name_1 = arg[0];
        const value_1 = arg[1];
        const ctx_1 = ctx;
        const parent = ctx_1.Parent;
        try {
            const e = ctx_1.Parent;
            if (name_1 === "class") {
                e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else if (name_1 === "class-") {
                e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else {
                ctx_1.SetAttribute(e, name_1, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1));
            }
            if (name_1 === "value") {
                e["__value"] = value_1;
            }
            const matchValue = ctx_1.StyleSheet;
            if (matchValue == null) {
            }
            else {
                (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_1)(parent)(arg30)(arg40)))));
        }
        return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
    };
}

function min(n) {
    const arg = ["min", n];
    return (ctx) => {
        let arg40, arg30;
        const name_1 = arg[0];
        const value_1 = arg[1];
        const ctx_1 = ctx;
        const parent = ctx_1.Parent;
        try {
            const e = ctx_1.Parent;
            if (name_1 === "class") {
                e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else if (name_1 === "class-") {
                e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else {
                ctx_1.SetAttribute(e, name_1, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1));
            }
            if (name_1 === "value") {
                e["__value"] = value_1;
            }
            const matchValue = ctx_1.StyleSheet;
            if (matchValue == null) {
            }
            else {
                (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_1)(parent)(arg30)(arg40)))));
        }
        return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
    };
}

function max(n) {
    const arg = ["max", n];
    return (ctx) => {
        let arg40, arg30;
        const name_1 = arg[0];
        const value_1 = arg[1];
        const ctx_1 = ctx;
        const parent = ctx_1.Parent;
        try {
            const e = ctx_1.Parent;
            if (name_1 === "class") {
                e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else if (name_1 === "class-") {
                e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else {
                ctx_1.SetAttribute(e, name_1, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1));
            }
            if (name_1 === "value") {
                e["__value"] = value_1;
            }
            const matchValue = ctx_1.StyleSheet;
            if (matchValue == null) {
            }
            else {
                (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_1)(parent)(arg30)(arg40)))));
        }
        return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
    };
}

function value(n) {
    const arg = ["value", n];
    return (ctx) => {
        let arg40, arg30;
        const name_1 = arg[0];
        const value_1 = arg[1];
        const ctx_1 = ctx;
        const parent = ctx_1.Parent;
        try {
            const e = ctx_1.Parent;
            if (name_1 === "class") {
                e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else if (name_1 === "class-") {
                e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else {
                ctx_1.SetAttribute(e, name_1, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1));
            }
            if (name_1 === "value") {
                e["__value"] = value_1;
            }
            const matchValue = ctx_1.StyleSheet;
            if (matchValue == null) {
            }
            else {
                (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_1)(parent)(arg30)(arg40)))));
        }
        return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
    };
}

function style(n) {
    const arg = ["style", n];
    return (ctx) => {
        let arg40, arg30;
        const name_1 = arg[0];
        const value_1 = arg[1];
        const ctx_1 = ctx;
        const parent = ctx_1.Parent;
        try {
            const e = ctx_1.Parent;
            if (name_1 === "class") {
                e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else if (name_1 === "class-") {
                e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else {
                ctx_1.SetAttribute(e, name_1, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1));
            }
            if (name_1 === "value") {
                e["__value"] = value_1;
            }
            const matchValue = ctx_1.StyleSheet;
            if (matchValue == null) {
            }
            else {
                (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_1)(parent)(arg30)(arg40)))));
        }
        return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
    };
}

const multiple = (() => {
    const arg = ["multiple", ""];
    return (ctx) => {
        let arg40, arg30;
        const name_1 = arg[0];
        const value_1 = arg[1];
        const ctx_1 = ctx;
        const parent = ctx_1.Parent;
        try {
            const e = ctx_1.Parent;
            if (name_1 === "class") {
                e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else if (name_1 === "class-") {
                e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else {
                ctx_1.SetAttribute(e, name_1, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1));
            }
            if (name_1 === "value") {
                e["__value"] = value_1;
            }
            const matchValue = ctx_1.StyleSheet;
            if (matchValue == null) {
            }
            else {
                (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_1)(parent)(arg30)(arg40)))));
        }
        return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
    };
})();

function rows(n) {
    const arg = ["rows", n];
    return (ctx) => {
        let arg40, arg30;
        const name_1 = arg[0];
        const value_1 = arg[1];
        const ctx_1 = ctx;
        const parent = ctx_1.Parent;
        try {
            const e = ctx_1.Parent;
            if (name_1 === "class") {
                e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else if (name_1 === "class-") {
                e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else {
                ctx_1.SetAttribute(e, name_1, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1));
            }
            if (name_1 === "value") {
                e["__value"] = value_1;
            }
            const matchValue = ctx_1.StyleSheet;
            if (matchValue == null) {
            }
            else {
                (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_1)(parent)(arg30)(arg40)))));
        }
        return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
    };
}

function cols(n) {
    const arg = ["cols", n];
    return (ctx) => {
        let arg40, arg30;
        const name_1 = arg[0];
        const value_1 = arg[1];
        const ctx_1 = ctx;
        const parent = ctx_1.Parent;
        try {
            const e = ctx_1.Parent;
            if (name_1 === "class") {
                e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else if (name_1 === "class-") {
                e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else {
                ctx_1.SetAttribute(e, name_1, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1));
            }
            if (name_1 === "value") {
                e["__value"] = value_1;
            }
            const matchValue = ctx_1.StyleSheet;
            if (matchValue == null) {
            }
            else {
                (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_1)(parent)(arg30)(arg40)))));
        }
        return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
    };
}

const readonly = (ctx) => {
    let arg40, arg30;
    const name_2 = "readonly";
    const value_2 = "true";
    const ctx_1 = ctx;
    const parent = ctx_1.Parent;
    try {
        const e = ctx_1.Parent;
        if (name_2 === "class") {
            e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_2)));
        }
        else if (name_2 === "class-") {
            e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_2)));
        }
        else {
            ctx_1.SetAttribute(e, name_2, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_2));
        }
        if (name_2 === "value") {
            e["__value"] = value_2;
        }
        const matchValue = ctx_1.StyleSheet;
        if (matchValue == null) {
        }
        else {
            (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
        }
    }
    catch (matchValue_1) {
        throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_2)(parent)(arg30)(arg40)))));
    }
    return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
};

function autofocus(ctx) {
    const e = ctx.Parent;
    const value_1 = (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.raf)((_arg1) => {
        e.focus();
        e.setSelectionRange(99999, 99999);
    });
    void value_1;
    return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
}

function id$0027(n) {
    const arg = ["id", n];
    return (ctx) => {
        let arg40, arg30;
        const name_1 = arg[0];
        const value_1 = arg[1];
        const ctx_1 = ctx;
        const parent = ctx_1.Parent;
        try {
            const e = ctx_1.Parent;
            if (name_1 === "class") {
                e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else if (name_1 === "class-") {
                e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else {
                ctx_1.SetAttribute(e, name_1, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1));
            }
            if (name_1 === "value") {
                e["__value"] = value_1;
            }
            const matchValue = ctx_1.StyleSheet;
            if (matchValue == null) {
            }
            else {
                (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_1)(parent)(arg30)(arg40)))));
        }
        return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
    };
}

function type$0027(n) {
    const arg = ["type", n];
    return (ctx) => {
        let arg40, arg30;
        const name_1 = arg[0];
        const value_1 = arg[1];
        const ctx_1 = ctx;
        const parent = ctx_1.Parent;
        try {
            const e = ctx_1.Parent;
            if (name_1 === "class") {
                e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else if (name_1 === "class-") {
                e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else {
                ctx_1.SetAttribute(e, name_1, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1));
            }
            if (name_1 === "value") {
                e["__value"] = value_1;
            }
            const matchValue = ctx_1.StyleSheet;
            if (matchValue == null) {
            }
            else {
                (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_1)(parent)(arg30)(arg40)))));
        }
        return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
    };
}

function for$0027(n) {
    const arg = ["for", n];
    return (ctx) => {
        let arg40, arg30;
        const name_1 = arg[0];
        const value_1 = arg[1];
        const ctx_1 = ctx;
        const parent = ctx_1.Parent;
        try {
            const e = ctx_1.Parent;
            if (name_1 === "class") {
                e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else if (name_1 === "class-") {
                e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else {
                ctx_1.SetAttribute(e, name_1, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1));
            }
            if (name_1 === "value") {
                e["__value"] = value_1;
            }
            const matchValue = ctx_1.StyleSheet;
            if (matchValue == null) {
            }
            else {
                (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_1)(parent)(arg30)(arg40)))));
        }
        return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
    };
}

function class$0027() {
    return className;
}

function unclass(n) {
    const arg = ["class-", n];
    return (ctx) => {
        let arg40, arg30;
        const name_1 = arg[0];
        const value_1 = arg[1];
        const ctx_1 = ctx;
        const parent = ctx_1.Parent;
        try {
            const e = ctx_1.Parent;
            if (name_1 === "class") {
                e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else if (name_1 === "class-") {
                e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else {
                ctx_1.SetAttribute(e, name_1, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1));
            }
            if (name_1 === "value") {
                e["__value"] = value_1;
            }
            const matchValue = ctx_1.StyleSheet;
            if (matchValue == null) {
            }
            else {
                (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_1)(parent)(arg30)(arg40)))));
        }
        return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
    };
}

function unclass$0027(n) {
    const arg = ["class-", n];
    return (ctx) => {
        let arg40, arg30;
        const name_1 = arg[0];
        const value_1 = arg[1];
        const ctx_1 = ctx;
        const parent = ctx_1.Parent;
        try {
            const e = ctx_1.Parent;
            if (name_1 === "class") {
                e.classList.add(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else if (name_1 === "class-") {
                e.classList.remove(...(0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.splitBySpace)((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1)));
            }
            else {
                ctx_1.SetAttribute(e, name_1, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(value_1));
            }
            if (name_1 === "value") {
                e["__value"] = value_1;
            }
            const matchValue = ctx_1.StyleSheet;
            if (matchValue == null) {
            }
            else {
                (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.applyCustomRules)(e, matchValue);
            }
        }
        catch (matchValue_1) {
            throw (new Error((arg40 = parent.tagName, (arg30 = parent.nodeType, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_0__.printf)("Cannot set attribute %s on a %A %f %s"))(name_1)(parent)(arg30)(arg40)))));
        }
        return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
    };
}

class EventModifier extends _DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Once", "PreventDefault", "StopPropagation", "StopImmediatePropagation"];
    }
}

function EventModifier$reflection() {
    return (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_3__.union_type)("Sveltish.Attr.EventModifier", [], EventModifier, () => [[], [], [], []]);
}

function on(event, fn, options, ctx) {
    const el = ctx.Parent;
    const h = (e) => {
        const enumerator = (0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_4__.getEnumerator)(options);
        try {
            while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
                const opt = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
                switch (opt.tag) {
                    case 1: {
                        e.preventDefault();
                        break;
                    }
                    case 2: {
                        e.stopPropagation();
                        break;
                    }
                    case 3: {
                        e.stopImmediatePropagation();
                        break;
                    }
                    default: {
                        el.removeEventListener(event, h);
                    }
                }
            }
        }
        finally {
            enumerator.Dispose();
        }
        fn(e);
    };
    el.addEventListener(event, h);
    return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.unitResult)();
}

function onKeyboard(event, fn, options) {
    return (ctx) => on(event, (arg10) => {
        fn(arg10);
    }, options, ctx);
}

function onMouse(event, fn, options) {
    return (ctx) => on(event, (arg10) => {
        fn(arg10);
    }, options, ctx);
}

function onClick(fn, options) {
    return (ctx) => on("click", fn, options, ctx);
}

function onShow(fn, options) {
    return (ctx) => on(_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.Event_Show, fn, options, ctx);
}

function onHide(fn, options) {
    return (ctx) => on(_DOM_fs_js__WEBPACK_IMPORTED_MODULE_1__.Event_Hide, fn, options, ctx);
}

function onKeyDown(fn, options) {
    return onKeyboard("keydown", fn, options);
}

function onMouseMove(fn, options) {
    return onMouse("mousemove", fn, options);
}

function cssAttr() {
    return (x) => x;
}

function all(n) {
    return cssAttr()(["all", n]);
}

function margin(n) {
    return cssAttr()(["margin", n]);
}

function marginTop(n) {
    return cssAttr()(["margin-top", n]);
}

function marginLeft(n) {
    return cssAttr()(["margin-left", n]);
}

function marginBottom(n) {
    return cssAttr()(["margin-bottom", n]);
}

function marginRight(n) {
    return cssAttr()(["margin-right", n]);
}

function backgroundColor(n) {
    return cssAttr()(["background-color", n]);
}

function borderColor(n) {
    return cssAttr()(["border-color", n]);
}

function borderWidth(n) {
    return cssAttr()(["border-width", n]);
}

function color(n) {
    return cssAttr()(["color", n]);
}

function cursor(n) {
    return cssAttr()(["cursor", n]);
}

function justifyContent(n) {
    return cssAttr()(["justify-content", n]);
}

function paddingBottom(n) {
    return cssAttr()(["padding-bottom", n]);
}

function paddingLeft(n) {
    return cssAttr()(["padding-left", n]);
}

function paddingRight(n) {
    return cssAttr()(["padding-right", n]);
}

function paddingTop(n) {
    return cssAttr()(["padding-top", n]);
}

function textAlign(n) {
    return cssAttr()(["text-align", n]);
}

function whiteSpace(n) {
    return cssAttr()(["white-space", n]);
}

function alignItems(n) {
    return cssAttr()(["align-items", n]);
}

function border(n) {
    return cssAttr()(["border", n]);
}

function background(n) {
    return cssAttr()(["background", n]);
}

function borderRadius(n) {
    return cssAttr()(["border-radius", n]);
}

function boxShadow(n) {
    return cssAttr()(["box-shadow", n]);
}

function zIndex(n) {
    return cssAttr()(["z-index", n]);
}

function display(n) {
    return cssAttr()(["display", n]);
}

function fontSize(n) {
    return cssAttr()(["font-size", n]);
}

function fontFamily(n) {
    return cssAttr()(["font-family", n]);
}

function minHeight(n) {
    return cssAttr()(["min-height", n]);
}

function maxHeight(n) {
    return cssAttr()(["max-height", n]);
}

function width(n) {
    return cssAttr()(["width", n]);
}

function minWidth(n) {
    return cssAttr()(["min-width", n]);
}

function maxWidth(n) {
    return cssAttr()(["max-width", n]);
}

function height(n) {
    return cssAttr()(["height", n]);
}

function lineHeight(n) {
    return cssAttr()(["line-height", n]);
}

function position(n) {
    return cssAttr()(["position", n]);
}

function verticalAlign(n) {
    return cssAttr()(["vertical-align", n]);
}

function fontWeight(n) {
    return cssAttr()(["font-height", n]);
}

function float$0027(n) {
    return cssAttr()(["float", n]);
}

function padding(n) {
    return cssAttr()(["padding", n]);
}

function boxSizing(n) {
    return cssAttr()(["box-sizing", n]);
}

function userSelect(n) {
    return cssAttr()(["user-select", n]);
}

function top(n) {
    return cssAttr()(["top", n]);
}

function left(n) {
    return cssAttr()(["left", n]);
}

function opacity(n) {
    return cssAttr()(["opacity", n]);
}

function transition(n) {
    return cssAttr()(["transition", n]);
}

function resize(n) {
    return cssAttr()(["resize", n]);
}

function overflow(n) {
    return cssAttr()(["overflow", n]);
}

function textDecoration(n) {
    return cssAttr()(["text-decoration", n]);
}

function borderSpacing(n) {
    return cssAttr()(["border-spacing", n]);
}

function borderBottom(n) {
    return cssAttr()(["border-bottom", n]);
}

function borderRight(n) {
    return cssAttr()(["border-right", n]);
}

function borderLeft(n) {
    return cssAttr()(["border-left", n]);
}

function borderTop(n) {
    return cssAttr()(["border-top", n]);
}

function flex(n) {
    return cssAttr()(["flex", n]);
}

function flexDirection(n) {
    return cssAttr()(["flex-direction", n]);
}

function addClass(n) {
    return cssAttr()(["sveltish-add-class", n]);
}

const useGlobal = cssAttr()(["sveltish-use-global", ""]);



/***/ }),

/***/ "./src/Fable.Sveltish/DOM.fs.js":
/*!**************************************!*\
  !*** ./src/Fable.Sveltish/DOM.fs.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log": () => /* binding */ log,
/* harmony export */   "domId": () => /* binding */ domId,
/* harmony export */   "isTextNode": () => /* binding */ isTextNode,
/* harmony export */   "isElementNode": () => /* binding */ isElementNode,
/* harmony export */   "documentOf": () => /* binding */ documentOf,
/* harmony export */   "SvIdKey": () => /* binding */ SvIdKey,
/* harmony export */   "setSvId": () => /* binding */ setSvId,
/* harmony export */   "svId": () => /* binding */ svId,
/* harmony export */   "hasSvId": () => /* binding */ hasSvId,
/* harmony export */   "nodeStr": () => /* binding */ nodeStr,
/* harmony export */   "Event_ElementReady": () => /* binding */ Event_ElementReady,
/* harmony export */   "Event_Show": () => /* binding */ Event_Show,
/* harmony export */   "Event_Hide": () => /* binding */ Event_Hide,
/* harmony export */   "Event_Updated": () => /* binding */ Event_Updated,
/* harmony export */   "Event_NewStore": () => /* binding */ Event_NewStore,
/* harmony export */   "Event_DisposeStore": () => /* binding */ Event_DisposeStore,
/* harmony export */   "Event_notifyEvent": () => /* binding */ Event_notifyEvent,
/* harmony export */   "Event_notifyUpdated": () => /* binding */ Event_notifyUpdated,
/* harmony export */   "listen": () => /* binding */ listen,
/* harmony export */   "raf": () => /* binding */ raf,
/* harmony export */   "once": () => /* binding */ once,
/* harmony export */   "CssSelector": () => /* binding */ CssSelector,
/* harmony export */   "CssSelector$reflection": () => /* binding */ CssSelector$reflection,
/* harmony export */   "CssSelector__Match_4C3D2741": () => /* binding */ CssSelector__Match_4C3D2741,
/* harmony export */   "StyleRule": () => /* binding */ StyleRule,
/* harmony export */   "StyleRule$reflection": () => /* binding */ StyleRule$reflection,
/* harmony export */   "NamedStyleSheet": () => /* binding */ NamedStyleSheet,
/* harmony export */   "NamedStyleSheet$reflection": () => /* binding */ NamedStyleSheet$reflection,
/* harmony export */   "BuildContext": () => /* binding */ BuildContext,
/* harmony export */   "BuildContext$reflection": () => /* binding */ BuildContext$reflection,
/* harmony export */   "BuildContext__get_Document": () => /* binding */ BuildContext__get_Document,
/* harmony export */   "makeContext": () => /* binding */ makeContext,
/* harmony export */   "withStyleSheet": () => /* binding */ withStyleSheet,
/* harmony export */   "withParent": () => /* binding */ withParent,
/* harmony export */   "withReplace": () => /* binding */ withReplace,
/* harmony export */   "NodeRef": () => /* binding */ NodeRef,
/* harmony export */   "NodeRef$reflection": () => /* binding */ NodeRef$reflection,
/* harmony export */   "NodeRef__get_Node": () => /* binding */ NodeRef__get_Node,
/* harmony export */   "NodeRef__Remove": () => /* binding */ NodeRef__Remove,
/* harmony export */   "NodeRef__Append_171AE942": () => /* binding */ NodeRef__Append_171AE942,
/* harmony export */   "NodeRef__Replace_Z129D0740": () => /* binding */ NodeRef__Replace_Z129D0740,
/* harmony export */   "BuildResult": () => /* binding */ BuildResult,
/* harmony export */   "BuildResult$reflection": () => /* binding */ BuildResult$reflection,
/* harmony export */   "nodeResult": () => /* binding */ nodeResult,
/* harmony export */   "fragmentResult": () => /* binding */ fragmentResult,
/* harmony export */   "unitResult": () => /* binding */ unitResult,
/* harmony export */   "bindResult": () => /* binding */ bindResult,
/* harmony export */   "errorNode": () => /* binding */ errorNode,
/* harmony export */   "expectSolitary": () => /* binding */ expectSolitary,
/* harmony export */   "collectFragment": () => /* binding */ collectFragment,
/* harmony export */   "buildSolitary": () => /* binding */ buildSolitary,
/* harmony export */   "appendAttribute": () => /* binding */ appendAttribute,
/* harmony export */   "parseSelector": () => /* binding */ parseSelector,
/* harmony export */   "ruleMatchEl": () => /* binding */ ruleMatchEl,
/* harmony export */   "rootStyle": () => /* binding */ rootStyle,
/* harmony export */   "rootStyleName": () => /* binding */ rootStyleName,
/* harmony export */   "getSveltishClasses": () => /* binding */ getSveltishClasses,
/* harmony export */   "applyCustomRules": () => /* binding */ applyCustomRules,
/* harmony export */   "appendReplaceChild": () => /* binding */ appendReplaceChild,
/* harmony export */   "el": () => /* binding */ el,
/* harmony export */   "findSvIdElement": () => /* binding */ findSvIdElement,
/* harmony export */   "splitBySpace": () => /* binding */ splitBySpace,
/* harmony export */   "textNode": () => /* binding */ textNode,
/* harmony export */   "text": () => /* binding */ text,
/* harmony export */   "idSelector": () => /* binding */ idSelector,
/* harmony export */   "classSelector": () => /* binding */ classSelector,
/* harmony export */   "findElement": () => /* binding */ findElement,
/* harmony export */   "visitChildren": () => /* binding */ visitChildren,
/* harmony export */   "findNode": () => /* binding */ findNode,
/* harmony export */   "visitElementChildren": () => /* binding */ visitElementChildren,
/* harmony export */   "findNodeWithSvId": () => /* binding */ findNodeWithSvId,
/* harmony export */   "html": () => /* binding */ html,
/* harmony export */   "mountElementOnDocument": () => /* binding */ mountElementOnDocument,
/* harmony export */   "mountElement": () => /* binding */ mountElement,
/* harmony export */   "children": () => /* binding */ children,
/* harmony export */   "descendants": () => /* binding */ descendants,
/* harmony export */   "clearWithDispose": () => /* binding */ clearWithDispose,
/* harmony export */   "clear": () => /* binding */ clear,
/* harmony export */   "exclusive": () => /* binding */ exclusive,
/* harmony export */   "hookContext": () => /* binding */ hookContext,
/* harmony export */   "hookParent": () => /* binding */ hookParent,
/* harmony export */   "addTransform": () => /* binding */ addTransform,
/* harmony export */   "fixPosition": () => /* binding */ fixPosition,
/* harmony export */   "asEl": () => /* binding */ asEl,
/* harmony export */   "clientRect": () => /* binding */ clientRect,
/* harmony export */   "removeNode": () => /* binding */ removeNode,
/* harmony export */   "fragment": () => /* binding */ fragment,
/* harmony export */   "isCrossOrigin": () => /* binding */ isCrossOrigin,
/* harmony export */   "ResizeObserver": () => /* binding */ ResizeObserver,
/* harmony export */   "ResizeObserver$reflection": () => /* binding */ ResizeObserver$reflection,
/* harmony export */   "ResizeObserver_$ctor_4C3D2741": () => /* binding */ ResizeObserver_$ctor_4C3D2741,
/* harmony export */   "ResizeObserver__Subscribe_3A5B6456": () => /* binding */ ResizeObserver__Subscribe_3A5B6456,
/* harmony export */   "ResizeObserver__Dispose": () => /* binding */ ResizeObserver__Dispose,
/* harmony export */   "NodeKey_Disposables": () => /* binding */ NodeKey_Disposables,
/* harmony export */   "NodeKey_ResizeObserver": () => /* binding */ NodeKey_ResizeObserver,
/* harmony export */   "NodeKey_get": () => /* binding */ NodeKey_get,
/* harmony export */   "NodeKey_getCreate": () => /* binding */ NodeKey_getCreate,
/* harmony export */   "registerUnsubscribe": () => /* binding */ registerUnsubscribe,
/* harmony export */   "registerDisposable": () => /* binding */ registerDisposable,
/* harmony export */   "hasDisposables": () => /* binding */ hasDisposables,
/* harmony export */   "getResizer": () => /* binding */ getResizer,
/* harmony export */   "updateCustom": () => /* binding */ updateCustom
/* harmony export */ });
/* harmony import */ var _Logging_fs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logging.fs.js */ "./src/Fable.Sveltish/Logging.fs.js");
/* harmony import */ var _Helpers_fs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helpers.fs.js */ "./src/Fable.Sveltish/Helpers.fs.js");
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/Types.js */ "./src/DevTools/.fable/fable-library.3.0.5/Types.js");
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/String.js */ "./src/DevTools/.fable/fable-library.3.0.5/String.js");
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/Reflection.js */ "./src/DevTools/.fable/fable-library.3.0.5/Reflection.js");
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/List.js */ "./src/DevTools/.fable/fable-library.3.0.5/List.js");
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_Array_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/Array.js */ "./src/DevTools/.fable/fable-library.3.0.5/Array.js");
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/Seq.js */ "./src/DevTools/.fable/fable-library.3.0.5/Seq.js");
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_Option_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/Option.js */ "./src/DevTools/.fable/fable-library.3.0.5/Option.js");
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_Util_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/Util.js */ "./src/DevTools/.fable/fable-library.3.0.5/Util.js");
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_Int32_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/Int32.js */ "./src/DevTools/.fable/fable-library.3.0.5/Int32.js");












const log = (message) => {
    (0,_Logging_fs_js__WEBPACK_IMPORTED_MODULE_0__.log)("dom", message);
};

const domId = (0,_Helpers_fs_js__WEBPACK_IMPORTED_MODULE_1__.makeIdGenerator)();

function isTextNode(n) {
    return n.nodeType === 3;
}

function isElementNode(n) {
    return n.nodeType === 1;
}

function documentOf(n) {
    return n.ownerDocument;
}

const SvIdKey = "_svid";

function setSvId(n, id) {
    n[SvIdKey] = id;
    if (isElementNode(n)) {
        n.setAttribute(SvIdKey, (0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(id));
    }
}

function svId(n) {
    return n[SvIdKey];
}

function hasSvId(n) {
    return n.hasOwnProperty(SvIdKey);
}

function nodeStr(node) {
    const matchValue = node.nodeType;
    switch (matchValue) {
        case 1: {
            return (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.interpolate)("\u003c%P()\u003e#%P() \"%P()\"", [node.tagName.toLocaleLowerCase(), svId(node), node.textContent]));
        }
        case 3: {
            return (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.interpolate)("\"%P()\"#%P()", [node.textContent, svId(node)]));
        }
        default: {
            return (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.interpolate)("?\u0027%P()\u0027#%P()", [node.textContent, svId(node)]));
        }
    }
}

const Event_ElementReady = "sveltish-element-ready";

const Event_Show = "sveltish-show";

const Event_Hide = "sveltish-hide";

const Event_Updated = "sveltish-updated";

const Event_NewStore = "sveltish-new-store";

const Event_DisposeStore = "sveltish-dispose-store";

function Event_notifyEvent(doc, name, data) {
    const value = doc.dispatchEvent(new CustomEvent(name, data));
    void value;
}

function Event_notifyUpdated(doc) {
    log("notify document");
    Event_notifyEvent(doc, Event_Updated, {});
}

function listen(event, e, fn) {
    e.addEventListener(event, fn);
    return () => {
        const value = e.removeEventListener(event, fn);
        void undefined;
    };
}

function raf(f) {
    return window.requestAnimationFrame(f);
}

function once(event, target, fn) {
    const inner = (e) => {
        target.removeEventListener(event, inner);
        fn(e);
    };
    return listen(event, target, inner);
}

class CssSelector extends _DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Tag", "Cls", "Id", "All", "Any", "Attr", "NotImplemented"];
    }
}

function CssSelector$reflection() {
    return (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.union_type)("Sveltish.DOM.CssSelector", [], CssSelector, () => [[["Item", _DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.string_type]], [["Item", _DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.string_type]], [["Item", _DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.string_type]], [["Item", (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.list_type)(CssSelector$reflection())]], [["Item", (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.list_type)(CssSelector$reflection())]], [["Item1", CssSelector$reflection()], ["Item2", _DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.string_type], ["Item3", _DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.string_type]], []]);
}

function CssSelector__Match_4C3D2741(this$, el_1) {
    switch (this$.tag) {
        case 0: {
            return el_1.tagName === this$.fields[0];
        }
        case 1: {
            return el_1.classList.contains(this$.fields[0]);
        }
        case 2: {
            return el_1.id === this$.fields[0];
        }
        case 5: {
            if (CssSelector__Match_4C3D2741(this$.fields[0], el_1)) {
                return el_1.getAttribute(this$.fields[1]) === this$.fields[2];
            }
            else {
                return false;
            }
        }
        case 3: {
            return (0,_DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.fold)((a, r) => {
                if (a) {
                    return CssSelector__Match_4C3D2741(r, el_1);
                }
                else {
                    return false;
                }
            }, true, this$.fields[0]);
        }
        case 4: {
            return (0,_DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.fold)((a_1, r_1) => {
                if (a_1) {
                    return true;
                }
                else {
                    return CssSelector__Match_4C3D2741(r_1, el_1);
                }
            }, false, this$.fields[0]);
        }
        default: {
            return false;
        }
    }
}

class StyleRule extends _DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.Record {
    constructor(SelectorSpec, Selector, Style) {
        super();
        this.SelectorSpec = SelectorSpec;
        this.Selector = Selector;
        this.Style = Style;
    }
}

function StyleRule$reflection() {
    return (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.record_type)("Sveltish.DOM.StyleRule", [], StyleRule, () => [["SelectorSpec", _DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.string_type], ["Selector", CssSelector$reflection()], ["Style", (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.list_type)((0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.tuple_type)(_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.string_type, _DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.obj_type))]]);
}

class NamedStyleSheet extends _DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.Record {
    constructor(Name, StyleSheet, Parent) {
        super();
        this.Name = Name;
        this.StyleSheet = StyleSheet;
        this.Parent = Parent;
    }
}

function NamedStyleSheet$reflection() {
    return (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.record_type)("Sveltish.DOM.NamedStyleSheet", [], NamedStyleSheet, () => [["Name", _DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.string_type], ["StyleSheet", (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.list_type)(StyleRule$reflection())], ["Parent", (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.option_type)(NamedStyleSheet$reflection())]]);
}

class BuildContext extends _DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.Record {
    constructor(Parent, Replace, MakeName, StyleSheet, AppendChild, ReplaceChild, SetAttribute) {
        super();
        this.Parent = Parent;
        this.Replace = Replace;
        this.MakeName = MakeName;
        this.StyleSheet = StyleSheet;
        this.AppendChild = AppendChild;
        this.ReplaceChild = ReplaceChild;
        this.SetAttribute = SetAttribute;
    }
}

function BuildContext$reflection() {
    return (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.record_type)("Sveltish.DOM.BuildContext", [], BuildContext, () => [["Parent", (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.class_type)("Browser.Types.Node")], ["Replace", (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.option_type)((0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.class_type)("Browser.Types.Node"))], ["MakeName", (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.lambda_type)(_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.string_type, _DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.string_type)], ["StyleSheet", (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.option_type)(NamedStyleSheet$reflection())], ["AppendChild", (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.lambda_type)((0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.class_type)("Browser.Types.Node"), (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.lambda_type)((0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.class_type)("Browser.Types.Node"), (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.class_type)("Browser.Types.Node")))], ["ReplaceChild", (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.lambda_type)((0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.class_type)("Browser.Types.Node"), (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.lambda_type)((0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.class_type)("Browser.Types.Node"), (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.lambda_type)((0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.class_type)("Browser.Types.Node"), (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.class_type)("Browser.Types.Node"))))], ["SetAttribute", (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.lambda_type)((0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.class_type)("Browser.Types.Element"), (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.lambda_type)(_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.string_type, (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.lambda_type)(_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.string_type, _DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.unit_type)))]]);
}

function BuildContext__get_Document(this$) {
    return documentOf(this$.Parent);
}

function makeContext(parent) {
    const gen = (0,_Helpers_fs_js__WEBPACK_IMPORTED_MODULE_1__.makeIdGenerator)();
    return new BuildContext(parent, void 0, (baseName) => {
        const arg20 = gen() | 0;
        return (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.printf)("%s-%d"))(baseName)(arg20);
    }, void 0, (parent_1, child) => parent_1.appendChild(child), (parent_2, newChild, oldChild) => parent_2.replaceChild(newChild, oldChild), (parent_3, name, value) => {
        parent_3.setAttribute(name, value);
    });
}

function withStyleSheet(sheet, ctx) {
    return new BuildContext(ctx.Parent, ctx.Replace, ctx.MakeName, sheet, ctx.AppendChild, ctx.ReplaceChild, ctx.SetAttribute);
}

function withParent(parent, ctx) {
    return new BuildContext(parent, void 0, ctx.MakeName, ctx.StyleSheet, ctx.AppendChild, ctx.ReplaceChild, ctx.SetAttribute);
}

function withReplace(toReplace, ctx) {
    return new BuildContext(ctx.Parent, (toReplace == null) ? (void 0) : toReplace, ctx.MakeName, ctx.StyleSheet, ctx.AppendChild, ctx.ReplaceChild, ctx.SetAttribute);
}

class NodeRef extends _DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["RealNode", "VirtualNode"];
    }
}

function NodeRef$reflection() {
    return (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.union_type)("Sveltish.DOM.NodeRef", [], NodeRef, () => [[["Item", (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.class_type)("Browser.Types.Node")]], [["Item", (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.class_type)("Sveltish.DOM.INode")]]]);
}

function NodeRef__get_Node(this$) {
    if (this$.tag === 1) {
        return this$.fields[0].Node;
    }
    else {
        return this$.fields[0];
    }
}

function NodeRef__Remove(this$) {
    if (this$.tag === 1) {
        this$.fields[0].Remove();
    }
    else {
        const n = this$.fields[0];
        const value = n.parentNode.removeChild(n);
        void value;
    }
}

function NodeRef__Append_171AE942(this$, parent) {
    if (this$.tag === 1) {
        this$.fields[0].Append(parent);
    }
    else {
        const value = parent.appendChild(this$.fields[0]);
        void value;
    }
}

function NodeRef__Replace_Z129D0740(this$, parent, newChild) {
    if (this$.tag === 1) {
        this$.fields[0].Replace(parent, newChild);
    }
    else {
        const value = parent.replaceChild(this$.fields[0], newChild);
        void value;
    }
}

class BuildResult extends _DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["Unit", "Solitary", "Fragment", "Binding"];
    }
}

function BuildResult$reflection() {
    return (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.union_type)("Sveltish.DOM.BuildResult", [], BuildResult, () => [[], [["Item", (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.class_type)("Browser.Types.Node")]], [["Item", (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.list_type)((0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.class_type)("Browser.Types.Node"))]], [["Item", NodeRef$reflection()]]]);
}

function nodeResult(node) {
    return new BuildResult(1, node);
}

function fragmentResult(nodes) {
    return new BuildResult(2, nodes);
}

function unitResult() {
    return new BuildResult(0);
}

function bindResult(r) {
    return new BuildResult(3, r);
}

function errorNode(parent, message) {
    const doc = documentOf(parent);
    const d = doc.createElement("div");
    const value = d.appendChild(doc.createTextNode((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.interpolate)("sveltish-error: %P()", [message]))));
    void value;
    const value_1 = parent.appendChild(d);
    void value_1;
    d.setAttribute("style", "color: red; padding: 4px; font-size: 10px;");
    return d;
}

function expectSolitary(f, ctx) {
    const matchValue = f(ctx);
    switch (matchValue.tag) {
        case 3: {
            return NodeRef__get_Node(matchValue.fields[0]);
        }
        case 0: {
            return errorNode(ctx.Parent, "Expected single node, none found");
        }
        case 2: {
            const tmpDiv = BuildContext__get_Document(ctx).createElement("div");
            const value = tmpDiv.appendChild(errorNode(tmpDiv, "\u0027fragment\u0027 not allowed as root for \u0027each\u0027 blocks"));
            void value;
            const value_1 = ctx.Parent.appendChild(tmpDiv);
            void value_1;
            (0,_DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.iterate)((arg) => {
                const value_2 = tmpDiv.appendChild(arg);
                void value_2;
            }, matchValue.fields[0]);
            return tmpDiv;
        }
        default: {
            return matchValue.fields[0];
        }
    }
}

function collectFragment(result) {
    switch (result.tag) {
        case 3: {
            return (0,_DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.singleton)(NodeRef__get_Node(result.fields[0]));
        }
        case 0: {
            return (0,_DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.empty)();
        }
        case 2: {
            return result.fields[0];
        }
        default: {
            return (0,_DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.singleton)(result.fields[0]);
        }
    }
}

function buildSolitary(f, ctx) {
    return expectSolitary(f, ctx);
}

function appendAttribute(e, attrName, attrValue) {
    if (attrValue !== "") {
        const currentValue = e.getAttribute(attrName);
        e.setAttribute(attrName, ((currentValue == null) ? true : (currentValue === "")) ? attrValue : (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.printf)("%s %s"))(currentValue)(attrValue));
    }
}

function parseSelector(source) {
    const parseSingle = (token) => {
        if (token.indexOf(".") === 0) {
            return new CssSelector(1, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.substring)(token, 1));
        }
        else if (token.indexOf("#") === 0) {
            return new CssSelector(2, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.substring)(token, 1));
        }
        else if (((token.indexOf(":") >= 0) ? true : (token.indexOf("\u003e") >= 0)) ? true : (token.indexOf("[") >= 0)) {
            return new CssSelector(6);
        }
        else {
            return new CssSelector(0, token.toLocaleUpperCase());
        }
    };
    const parseAttr = (token_1) => {
        if ((token_1.indexOf("[") >= 0) ? (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.endsWith)(token_1, "]") : false) {
            const i = token_1.indexOf("[") | 0;
            const single = parseSingle((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.substring)(token_1, 0, i).trim());
            const attrTokens = (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.split)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.substring)(token_1, i + 1, (token_1.length - i) - 2), ["="], 2);
            if (attrTokens.length === 2) {
                return new CssSelector(5, single, attrTokens[0].trim(), (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.trim)(attrTokens[1].trim(), "\u0027", "\""));
            }
            else {
                return new CssSelector(6);
            }
        }
        else {
            return parseSingle(token_1);
        }
    };
    const parseAll = (token_2) => {
        const spacedItems = (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.split)(token_2, [" "], null, 1);
        if (spacedItems.length === 1) {
            return parseAttr(spacedItems[0]);
        }
        else {
            return new CssSelector(4, (0,_DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.ofArray)((0,_DevTools_fable_fable_library_3_0_5_Array_js__WEBPACK_IMPORTED_MODULE_6__.map)(parseAttr, spacedItems)));
        }
    };
    const items = source.split(",");
    if (items.length === 1) {
        return parseAll(items[0]);
    }
    else {
        return new CssSelector(3, (0,_DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.ofArray)((0,_DevTools_fable_fable_library_3_0_5_Array_js__WEBPACK_IMPORTED_MODULE_6__.map)(parseAll, items)));
    }
}

function ruleMatchEl(el_1, rule) {
    return CssSelector__Match_4C3D2741(rule.Selector, el_1);
}

function rootStyle(sheet_mut) {
    rootStyle:
    while (true) {
        const sheet = sheet_mut;
        const matchValue = sheet.Parent;
        if (matchValue != null) {
            sheet_mut = matchValue;
            continue rootStyle;
        }
        else {
            return sheet;
        }
        break;
    }
}

function rootStyleName(sheet) {
    return rootStyle(sheet).Name;
}

function getSveltishClasses(e) {
    return (0,_DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.filter)((cls) => (cls.indexOf("sveltish") === 0), (0,_DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.map)((i) => (e.classList[i]), (0,_DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.ofSeq)((0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_7__.rangeNumber)(0, 1, e.classList.length - 1))));
}

function applyCustomRules(e, namedSheet) {
    let copyOfStruct, copyOfStruct_1;
    const enumerator = (0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_7__.getEnumerator)((0,_DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.filter)((rule) => ruleMatchEl(e, rule), namedSheet.StyleSheet));
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const enumerator_1 = (0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_7__.getEnumerator)((0,_DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.filter)((tupledArg) => (tupledArg[0].indexOf("sveltish") === 0), enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]().Style));
            try {
                while (enumerator_1["System.Collections.IEnumerator.MoveNext"]()) {
                    const custom = enumerator_1["System.Collections.Generic.IEnumerator`1.get_Current"]();
                    if (custom[0] === "sveltish-use-global") {
                        const root = rootStyle(namedSheet);
                        if (root.Name !== namedSheet.Name) {
                            (copyOfStruct = e, copyOfStruct.classList).add(root.Name);
                            applyCustomRules(e, root);
                        }
                    }
                    else if (custom[0] === "sveltish-use-parent") {
                    }
                    else if (custom[0] === "sveltish-add-class") {
                        (copyOfStruct_1 = e, copyOfStruct_1.classList).add((0,_DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.toString)(custom[1]));
                    }
                    else {
                        log((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.interpolate)("Unimplemented: %P()", [custom[0]])));
                    }
                }
            }
            finally {
                enumerator_1.Dispose();
            }
        }
    }
    finally {
        enumerator.Dispose();
    }
}

function appendReplaceChild(node, ctx) {
    const matchValue = ctx.Replace;
    if (matchValue != null) {
        const existing = matchValue;
        if (!ctx.Parent.isSameNode(existing.parentNode)) {
            const value_1 = ctx.AppendChild(ctx.Parent, node);
            void value_1;
        }
        else {
            const value_2 = ctx.ReplaceChild(ctx.Parent, node, existing);
            void value_2;
        }
        setSvId(node, svId(existing));
    }
    else {
        const value = ctx.AppendChild(ctx.Parent, node);
        void value;
    }
    return node;
}

function el(tag, xs, ctx) {
    const e = BuildContext__get_Document(ctx).createElement(tag);
    setSvId(e, domId());
    const enumerator = (0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_7__.getEnumerator)(xs);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const value = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]()(withParent(e, ctx));
            void value;
        }
    }
    finally {
        enumerator.Dispose();
    }
    const matchValue = ctx.StyleSheet;
    if (matchValue == null) {
    }
    else {
        const namedSheet = matchValue;
        e.classList.add(namedSheet.Name);
        applyCustomRules(e, namedSheet);
    }
    const value_1 = appendReplaceChild(e, ctx);
    void value_1;
    const value_2 = e.dispatchEvent(new CustomEvent(Event_ElementReady, {}));
    void value_2;
    return nodeResult(e);
}

function findSvIdElement(doc, id) {
    return doc.querySelector((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.interpolate)("[_svid=\u0027%P()\u0027]", [id])));
}

function splitBySpace(s) {
    return (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.split)(s, [" "], null, 1);
}

function textNode(doc, value) {
    const n = doc.createTextNode(value);
    setSvId(n, domId());
    return n;
}

function text(value, ctx) {
    return nodeResult(appendReplaceChild(textNode(BuildContext__get_Document(ctx), value), ctx));
}

const idSelector = (() => {
    const clo1 = (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.printf)("#%s"));
    return clo1;
})();

const classSelector = (() => {
    const clo1 = (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.printf)(".%s"));
    return clo1;
})();

function findElement(doc, selector) {
    return doc.querySelector(selector);
}

function visitChildren(parent, f) {
    let child = parent.firstChild;
    while (!(child == null)) {
        if (f(child)) {
            visitChildren(child, f);
            child = child.nextSibling;
        }
        else {
            child = null;
        }
    }
}

function findNode(parent, f) {
    let child = parent.firstChild;
    let result = void 0;
    while (!(child == null)) {
        result = f(child);
        if (result == null) {
            result = findNode(child, f);
        }
        if (result != null) {
            const x = (0,_DevTools_fable_fable_library_3_0_5_Option_js__WEBPACK_IMPORTED_MODULE_8__.value)(result);
            child = null;
        }
        else {
            child = child.nextSibling;
        }
    }
    return result;
}

function visitElementChildren(parent, f) {
    visitChildren(parent, (child) => {
        if (child.nodeType === 1) {
            f(child);
        }
        return true;
    });
}

function findNodeWithSvId(doc, id) {
    return findNode(doc.body, (n) => {
        if ((0,_DevTools_fable_fable_library_3_0_5_Util_js__WEBPACK_IMPORTED_MODULE_9__.equals)(svId(n), id)) {
            return (0,_DevTools_fable_fable_library_3_0_5_Option_js__WEBPACK_IMPORTED_MODULE_8__.some)(n);
        }
        else {
            return void 0;
        }
    });
}

function html(text_1, ctx) {
    const el_1 = ctx.Parent;
    el_1.innerHTML = text_1;
    const matchValue = ctx.StyleSheet;
    if (matchValue != null) {
        const ns = matchValue;
        visitElementChildren(el_1, (ch) => {
            ch.classList.add(ns.Name);
            applyCustomRules(ch, ns);
        });
    }
    return nodeResult(el_1);
}

function mountElementOnDocument(doc, id, app) {
    const value = app(makeContext(doc.querySelector((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.interpolate)("#%P()", [id])))));
    void value;
}

function mountElement(id, app) {
    mountElementOnDocument(document, id, app);
}

function children(node) {
    const visit = (child) => (0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_7__.delay)(() => ((!(child == null)) ? (0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_7__.append)((0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_7__.singleton)(child), (0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_7__.delay)(() => visit(child.nextSibling))) : (0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_7__.empty)()));
    return visit(node.firstChild);
}

function descendants(node) {
    return (0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_7__.delay)(() => (0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_7__.collect)((child) => (0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_7__.append)((0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_7__.singleton)(child), (0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_7__.delay)(() => descendants(child))), children(node)));
}

function clearWithDispose(node, dispose) {
    (0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_7__.iterate)((arg) => {
        dispose(node.removeChild(arg));
    }, children(node));
}

function clear(node) {
    clearWithDispose(node, (value) => {
        void value;
    });
}

function exclusive(f, ctx) {
    clear(ctx.Parent);
    return f(ctx);
}

function hookContext(hook, ctx) {
    hook(ctx);
    return unitResult();
}

function hookParent(hook, ctx) {
    hook(ctx.Parent);
    return unitResult();
}

function addTransform(node, a) {
    const b = node.getBoundingClientRect();
    if ((a.left !== b.left) ? true : (a.top !== b.top)) {
        const s = window.getComputedStyle(node);
        const transform = (s.transform === "none") ? "" : s.transform;
        const arg30 = a.top - b.top;
        const arg20 = a.left - b.left;
        (node.style).transform = (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.printf)("%s translate(%fpx, %fpx)"))(transform)(arg20)(arg30);
        log((node.style).transform);
    }
}

function fixPosition(node) {
    const s = window.getComputedStyle(node);
    if ((s.position !== "absolute") ? (s.position !== "fixed") : false) {
        const width = s.width;
        const height = s.height;
        const a = node.getBoundingClientRect();
        (node.style).position = "absolute";
        (node.style).width = width;
        (node.style).height = height;
        addTransform(node, a);
    }
}

function asEl(node) {
    return node;
}

function clientRect(el_1) {
    return asEl(el_1).getBoundingClientRect();
}

function removeNode(node) {
    let arg10, copyOfStruct, copyOfStruct_1;
    log((arg10 = (copyOfStruct = node, copyOfStruct.textContent), (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.printf)("removing node %A"))(arg10)));
    const value = (copyOfStruct_1 = node, copyOfStruct_1.parentNode).removeChild(node);
    void value;
}

function fragment(elements, ctx) {
    return fragmentResult((0,_DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.ofSeq)((0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_7__.collect)((e) => collectFragment(e(ctx)), elements)));
}

const isCrossOrigin = false;

class ResizeSubscriber extends _DevTools_fable_fable_library_3_0_5_Types_js__WEBPACK_IMPORTED_MODULE_2__.Record {
    constructor(Callback, Id) {
        super();
        this.Callback = Callback;
        this.Id = (Id | 0);
    }
}

function ResizeSubscriber$reflection() {
    return (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.record_type)("Sveltish.DOM.ResizeSubscriber", [], ResizeSubscriber, () => [["Callback", (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.lambda_type)(_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.unit_type, _DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.unit_type)], ["Id", _DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.int32_type]]);
}

class ResizeObserver {
    constructor(el_1) {
        this.iframe = null;
        this.subId = 0;
        this.unsubscribe = null;
        this.subscribers = (0,_DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.empty)();
        const computedStyle = window.getComputedStyle(el_1);
        const zIndex = ((() => {
            try {
                return (0,_DevTools_fable_fable_library_3_0_5_Int32_js__WEBPACK_IMPORTED_MODULE_10__.parse)(computedStyle.zIndex, 511, false, 32) | 0;
            }
            catch (matchValue) {
                return 0;
            }
        })() - 1) | 0;
        if (computedStyle.position === "static") {
            (el_1.style).position = "relative";
        }
        this.iframe = documentOf(el_1).createElement("iframe");
        this.iframe.setAttribute("style", (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.printf)("%sz-index: %i;"))("display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none;")(zIndex));
        this.iframe.setAttribute("aria-hidden", "true");
        this.iframe.setAttribute("tabindex", "-1");
        if (isCrossOrigin) {
            this.iframe.setAttribute("src", "data:text/html,\u003cscript\u003eonresize=function(){parent.postMessage(0,\u0027*\u0027)}\u003c/script\u003e");
            const clo3 = listen("message", window, (e) => {
                if ((e["source"]) === this.iframe.contentWindow) {
                    ResizeObserver__notify_1505(this, e);
                }
            });
            this.unsubscribe = (() => {
                clo3();
            });
        }
        else {
            this.iframe.setAttribute("src", "about:blank");
            this.iframe.onload = ((e_1) => {
                const clo3_1 = listen("resize", this.iframe.contentWindow, (_arg1) => {
                    ResizeObserver__notify_1505(this, _arg1);
                });
                this.unsubscribe = (() => {
                    clo3_1();
                });
            });
        }
        const value = el_1.appendChild(this.iframe);
        void value;
    }
    Dispose() {
        const this$ = this;
        ResizeObserver__Dispose(this$);
    }
}

function ResizeObserver$reflection() {
    return (0,_DevTools_fable_fable_library_3_0_5_Reflection_js__WEBPACK_IMPORTED_MODULE_4__.class_type)("Sveltish.DOM.ResizeObserver", void 0, ResizeObserver);
}

function ResizeObserver_$ctor_4C3D2741(el_1) {
    return new ResizeObserver(el_1);
}

function ResizeObserver__Subscribe_3A5B6456(_, callback) {
    const sub = new ResizeSubscriber(callback, _.subId);
    _.subId = (_.subId + 1);
    _.subscribers = (0,_DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.cons)(sub, _.subscribers);
    return (0,_Helpers_fs_js__WEBPACK_IMPORTED_MODULE_1__.disposable)(() => {
        _.subscribers = (0,_DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.filter)((s) => (s.Id !== sub.Id), _.subscribers);
    });
}

function ResizeObserver__Dispose(_) {
    try {
        _.unsubscribe();
    }
    catch (matchValue) {
    }
    if (!(_.iframe == null)) {
        removeNode(_.iframe);
    }
}

function ResizeObserver__notify_1505(this$, _arg1) {
    (0,_DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.iterate)((sub) => {
        sub.Callback();
    }, this$.subscribers);
}

const NodeKey_Disposables = "__sveltish_disposables";

const NodeKey_ResizeObserver = "__sveltish_resizeObserver";

function NodeKey_get(node, key) {
    const v = node[key];
    if (v == null) {
        return void 0;
    }
    else {
        return (0,_DevTools_fable_fable_library_3_0_5_Option_js__WEBPACK_IMPORTED_MODULE_8__.some)(v);
    }
}

function NodeKey_getCreate(node, key, cons) {
    const matchValue = NodeKey_get(node, key);
    if (matchValue == null) {
        const newVal = cons();
        node[key] = newVal;
        return newVal;
    }
    else {
        return (0,_DevTools_fable_fable_library_3_0_5_Option_js__WEBPACK_IMPORTED_MODULE_8__.value)(matchValue);
    }
}

function registerUnsubscribe(node, d) {
    const disposables = NodeKey_getCreate(node, NodeKey_Disposables, _DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.empty);
    node[NodeKey_Disposables] = (0,_DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_5__.cons)(d, disposables);
}

function registerDisposable(node, d) {
    registerUnsubscribe(node, () => {
        d.Dispose();
    });
}

function hasDisposables(node) {
    return node.hasOwnProperty(NodeKey_Disposables);
}

function getResizer(el_1) {
    return NodeKey_getCreate(el_1, NodeKey_ResizeObserver, () => ResizeObserver_$ctor_4C3D2741(el_1));
}

function updateCustom(el_1, name, property, value) {
    const r = NodeKey_getCreate(el_1, name, () => ({}));
    r[property] = value;
    el_1[name] = r;
}



/***/ }),

/***/ "./src/Fable.Sveltish/Helpers.fs.js":
/*!******************************************!*\
  !*** ./src/Fable.Sveltish/Helpers.fs.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fastNotEquals": () => /* binding */ fastNotEquals,
/* harmony export */   "fileListToSeq": () => /* binding */ fileListToSeq,
/* harmony export */   "disposable": () => /* binding */ disposable,
/* harmony export */   "unsubify": () => /* binding */ unsubify,
/* harmony export */   "makeIdGeneratorFrom": () => /* binding */ makeIdGeneratorFrom,
/* harmony export */   "makeIdGenerator": () => /* binding */ makeIdGenerator
/* harmony export */ });
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/Seq.js */ "./src/DevTools/.fable/fable-library.3.0.5/Seq.js");
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/List.js */ "./src/DevTools/.fable/fable-library.3.0.5/List.js");



function fastNotEquals(x, y) {
    return !(x === y);
}

function fileListToSeq(files) {
    if (!(files == null)) {
        return (0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_0__.delay)(() => (0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_0__.map)((i) => (files[i]), (0,_DevTools_fable_fable_library_3_0_5_List_js__WEBPACK_IMPORTED_MODULE_1__.ofSeq)((0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_0__.rangeNumber)(0, 1, files.length - 1))));
    }
    else {
        return (0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_0__.empty)();
    }
}

function disposable(f) {
    return {
        Dispose() {
            f();
        },
    };
}

function unsubify(d, unitVar0) {
    d.Dispose();
}

function makeIdGeneratorFrom(start) {
    let id = start | 0;
    return () => {
        const r = id | 0;
        id = (id + 1);
        return r | 0;
    };
}

function makeIdGenerator() {
    return makeIdGeneratorFrom(0);
}



/***/ }),

/***/ "./src/Fable.Sveltish/Html.fs.js":
/*!***************************************!*\
  !*** ./src/Fable.Sveltish/Html.fs.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "div": () => /* binding */ div,
/* harmony export */   "textarea": () => /* binding */ textarea,
/* harmony export */   "h1": () => /* binding */ h1,
/* harmony export */   "h2": () => /* binding */ h2,
/* harmony export */   "h3": () => /* binding */ h3,
/* harmony export */   "h4": () => /* binding */ h4,
/* harmony export */   "h5": () => /* binding */ h5,
/* harmony export */   "hr": () => /* binding */ hr,
/* harmony export */   "pre": () => /* binding */ pre,
/* harmony export */   "code": () => /* binding */ code,
/* harmony export */   "p": () => /* binding */ p,
/* harmony export */   "span": () => /* binding */ span,
/* harmony export */   "button": () => /* binding */ button,
/* harmony export */   "input": () => /* binding */ input,
/* harmony export */   "label": () => /* binding */ label,
/* harmony export */   "a": () => /* binding */ a,
/* harmony export */   "ul": () => /* binding */ ul,
/* harmony export */   "li": () => /* binding */ li,
/* harmony export */   "img": () => /* binding */ img,
/* harmony export */   "option": () => /* binding */ option,
/* harmony export */   "select": () => /* binding */ select,
/* harmony export */   "form": () => /* binding */ form,
/* harmony export */   "table": () => /* binding */ table,
/* harmony export */   "tbody": () => /* binding */ tbody,
/* harmony export */   "thead": () => /* binding */ thead,
/* harmony export */   "tr": () => /* binding */ tr,
/* harmony export */   "th": () => /* binding */ th,
/* harmony export */   "td": () => /* binding */ td,
/* harmony export */   "app": () => /* binding */ app
/* harmony export */ });
/* harmony import */ var _DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.fs.js */ "./src/Fable.Sveltish/DOM.fs.js");


function div(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("div", xs, ctx);
}

function textarea(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("textarea", xs, ctx);
}

function h1(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("h1", xs, ctx);
}

function h2(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("h2", xs, ctx);
}

function h3(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("h3", xs, ctx);
}

function h4(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("h4", xs, ctx);
}

function h5(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("h5", xs, ctx);
}

function hr(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("hr", xs, ctx);
}

function pre(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("pre", xs, ctx);
}

function code(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("code", xs, ctx);
}

function p(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("p", xs, ctx);
}

function span(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("span", xs, ctx);
}

function button(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("button", xs, ctx);
}

function input(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("input", xs, ctx);
}

function label(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("label", xs, ctx);
}

function a(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("a", xs, ctx);
}

function ul(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("ul", xs, ctx);
}

function li(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("li", xs, ctx);
}

function img(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("img", xs, ctx);
}

function option(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("option", xs, ctx);
}

function select(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("select", xs, ctx);
}

function form(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("form", xs, ctx);
}

function table(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("table", xs, ctx);
}

function tbody(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("tbody", xs, ctx);
}

function thead(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("thead", xs, ctx);
}

function tr(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("tr", xs, ctx);
}

function th(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("th", xs, ctx);
}

function td(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.el)("td", xs, ctx);
}

function app(xs) {
    return (ctx) => (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_0__.fragment)(xs, ctx);
}



/***/ }),

/***/ "./src/Fable.Sveltish/Logging.fs.js":
/*!******************************************!*\
  !*** ./src/Fable.Sveltish/Logging.fs.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "enabled": () => /* binding */ enabled,
/* harmony export */   "loggingEnabled": () => /* binding */ loggingEnabled,
/* harmony export */   "init": () => /* binding */ init,
/* harmony export */   "log": () => /* binding */ log,
/* harmony export */   "warning": () => /* binding */ warning,
/* harmony export */   "error": () => /* binding */ error
/* harmony export */ });
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_MapUtil_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/MapUtil.js */ "./src/DevTools/.fable/fable-library.3.0.5/MapUtil.js");
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_Long_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/Long.js */ "./src/DevTools/.fable/fable-library.3.0.5/Long.js");
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_Date_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/Date.js */ "./src/DevTools/.fable/fable-library.3.0.5/Date.js");
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/String.js */ "./src/DevTools/.fable/fable-library.3.0.5/String.js");
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_Option_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/Option.js */ "./src/DevTools/.fable/fable-library.3.0.5/Option.js");






const enabled = new Map([]);

const loggingEnabled = true;

const init = (enabled.set("store", loggingEnabled ? false : false), (enabled.set("trans", loggingEnabled ? true : false), (enabled.set("dom", loggingEnabled ? true : false), (enabled.set("style", loggingEnabled ? false : false), enabled.set("bind", loggingEnabled ? true : false)))));

function log(source, message) {
    let arg10, copyOfStruct;
    if ((!enabled.has(source)) ? true : (0,_DevTools_fable_fable_library_3_0_5_MapUtil_js__WEBPACK_IMPORTED_MODULE_0__.getItemFromDict)(enabled, source)) {
        console.log((0,_DevTools_fable_fable_library_3_0_5_Option_js__WEBPACK_IMPORTED_MODULE_4__.some)((arg10 = (((0,_DevTools_fable_fable_library_3_0_5_Long_js__WEBPACK_IMPORTED_MODULE_1__.toNumber)((copyOfStruct = (0,_DevTools_fable_fable_library_3_0_5_Date_js__WEBPACK_IMPORTED_MODULE_2__.now)(), (0,_DevTools_fable_fable_library_3_0_5_Date_js__WEBPACK_IMPORTED_MODULE_2__.getTicks)(copyOfStruct))) / 10000000) % 60), (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.printf)("%0.3f: %s: %s"))(arg10)(source)(message))));
    }
}

function warning(message) {
    console.log((0,_DevTools_fable_fable_library_3_0_5_Option_js__WEBPACK_IMPORTED_MODULE_4__.some)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.printf)("warning: %s"))(message)));
}

function error(message) {
    console.log((0,_DevTools_fable_fable_library_3_0_5_Option_js__WEBPACK_IMPORTED_MODULE_4__.some)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_3__.printf)("error: %s"))(message)));
}



/***/ }),

/***/ "./src/Fable.Sveltish/Styling.fs.js":
/*!******************************************!*\
  !*** ./src/Fable.Sveltish/Styling.fs.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "log": () => /* binding */ log,
/* harmony export */   "findElement": () => /* binding */ findElement,
/* harmony export */   "parseStyleAttr": () => /* binding */ parseStyleAttr,
/* harmony export */   "emitStyleAttr": () => /* binding */ emitStyleAttr,
/* harmony export */   "filterStyleAttr": () => /* binding */ filterStyleAttr,
/* harmony export */   "getStyleAttr": () => /* binding */ getStyleAttr,
/* harmony export */   "addStyleAttr": () => /* binding */ addStyleAttr,
/* harmony export */   "removeStyleAttr": () => /* binding */ removeStyleAttr,
/* harmony export */   "newStyleElement": () => /* binding */ newStyleElement,
/* harmony export */   "splitMapJoin": () => /* binding */ splitMapJoin,
/* harmony export */   "isPseudo": () => /* binding */ isPseudo,
/* harmony export */   "isGlobal": () => /* binding */ isGlobal,
/* harmony export */   "specifySelector": () => /* binding */ specifySelector,
/* harmony export */   "addStyleSheet": () => /* binding */ addStyleSheet,
/* harmony export */   "headStylesheet": () => /* binding */ headStylesheet,
/* harmony export */   "headScript": () => /* binding */ headScript,
/* harmony export */   "headEmbedScript": () => /* binding */ headEmbedScript,
/* harmony export */   "headTitle": () => /* binding */ headTitle,
/* harmony export */   "withStyle": () => /* binding */ withStyle,
/* harmony export */   "rule": () => /* binding */ rule,
/* harmony export */   "showEl": () => /* binding */ showEl
/* harmony export */ });
/* harmony import */ var _Logging_fs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logging.fs.js */ "./src/Fable.Sveltish/Logging.fs.js");
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_Array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/Array.js */ "./src/DevTools/.fable/fable-library.3.0.5/Array.js");
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/String.js */ "./src/DevTools/.fable/fable-library.3.0.5/String.js");
/* harmony import */ var _DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DevTools/.fable/fable-library.3.0.5/Seq.js */ "./src/DevTools/.fable/fable-library.3.0.5/Seq.js");
/* harmony import */ var _DOM_fs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./DOM.fs.js */ "./src/Fable.Sveltish/DOM.fs.js");






function log(s) {
    (0,_Logging_fs_js__WEBPACK_IMPORTED_MODULE_0__.log)("style", s);
}

function findElement(doc, selector) {
    return doc.querySelector(selector);
}

function parseStyleAttr(style) {
    return (0,_DevTools_fable_fable_library_3_0_5_Array_js__WEBPACK_IMPORTED_MODULE_1__.collect)((entry) => (0,_DevTools_fable_fable_library_3_0_5_Array_js__WEBPACK_IMPORTED_MODULE_1__.map)((pair) => [pair[0].trim(), pair[1].trim()], (0,_DevTools_fable_fable_library_3_0_5_Array_js__WEBPACK_IMPORTED_MODULE_1__.chunkBySize)(2, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_2__.split)(entry, [":"], 2))), (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_2__.split)(style, [";"], null, 1));
}

function emitStyleAttr(keyValues) {
    return (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_2__.join)("", (0,_DevTools_fable_fable_library_3_0_5_Array_js__WEBPACK_IMPORTED_MODULE_1__.map)((tupledArg) => (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_2__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_2__.printf)("%s:%s;"))(tupledArg[0])(tupledArg[1]), keyValues));
}

function filterStyleAttr(name, style) {
    return emitStyleAttr(parseStyleAttr(style).filter((tupledArg) => (tupledArg[0] !== name)));
}

function getStyleAttr(el) {
    const matchValue = el.getAttribute("style");
    if (matchValue === null) {
        return "";
    }
    else {
        return matchValue;
    }
}

function addStyleAttr(el, name, value) {
    const style_1 = filterStyleAttr(name, getStyleAttr(el));
    el.setAttribute("style", (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_2__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_2__.printf)("%s%s:%s;"))(style_1)(name)(value));
}

function removeStyleAttr(el, name) {
    let arg30, arg20;
    log((arg30 = filterStyleAttr(name, getStyleAttr(el)), (arg20 = getStyleAttr(el), (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_2__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_2__.printf)("filter by %s: %A -\u003e %A"))(name)(arg20)(arg30))));
    el.setAttribute("style", filterStyleAttr(name, getStyleAttr(el)));
}

function newStyleElement(doc) {
    const head = findElement(doc, "head");
    const style = doc.createElement("style");
    const value = head.appendChild(style);
    void value;
    return style;
}

function splitMapJoin(delim, f, s) {
    return (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_2__.join)(delim, (0,_DevTools_fable_fable_library_3_0_5_Array_js__WEBPACK_IMPORTED_MODULE_1__.map)(f, (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_2__.split)(s, [delim], null, 1)));
}

function isPseudo(s) {
    if ((((((s === "hover") ? true : (s === "active")) ? true : (s === "visited")) ? true : (s === "link")) ? true : (s === "before")) ? true : (s === "after")) {
        return true;
    }
    else {
        return s === "checked";
    }
}

function isGlobal(s) {
    if (s === "body") {
        return true;
    }
    else {
        return s === "html";
    }
}

function specifySelector(styleName, selectors) {
    return splitMapJoin(",", (s_2) => splitMapJoin(" ", (s_1) => splitMapJoin(":", (s) => {
        if (isPseudo(s) ? true : isGlobal(s)) {
            return s;
        }
        else {
            return (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_2__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_2__.printf)("%s.%s"))(s)(styleName);
        }
    }, s_1), s_2), selectors);
}

function addStyleSheet(doc, styleName, styleSheet) {
    const style = newStyleElement(doc);
    const enumerator = (0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_3__.getEnumerator)(styleSheet);
    try {
        while (enumerator["System.Collections.IEnumerator.MoveNext"]()) {
            const rule_1 = enumerator["System.Collections.Generic.IEnumerator`1.get_Current"]();
            const styleText = (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_2__.join)("", (0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_3__.map)((tupledArg_1) => (0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_2__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_2__.interpolate)("%P(): %P();", [tupledArg_1[0], tupledArg_1[1]])), (0,_DevTools_fable_fable_library_3_0_5_Seq_js__WEBPACK_IMPORTED_MODULE_3__.filter)((arg) => (!(arg[0].indexOf("sveltish") === 0)), rule_1.Style)));
            const value_1 = style.appendChild(doc.createTextNode((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_2__.join)("", [specifySelector(styleName, rule_1.SelectorSpec), " {", styleText, "}"])));
            void value_1;
        }
    }
    finally {
        enumerator.Dispose();
    }
}

function headStylesheet(url, ctx) {
    const doc = (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_4__.BuildContext__get_Document)(ctx);
    const head = findElement(doc, "head");
    const styleEl = doc.createElement("link");
    const value = head.appendChild(styleEl);
    void value;
    styleEl.setAttribute("rel", "stylesheet");
    const value_1 = styleEl.setAttribute("href", url);
    void undefined;
    return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_4__.unitResult)();
}

function headScript(url, ctx) {
    const doc = (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_4__.BuildContext__get_Document)(ctx);
    const head = findElement(doc, "head");
    const el = doc.createElement("script");
    const value = head.appendChild(el);
    void value;
    const value_1 = el.setAttribute("src", url);
    void undefined;
    return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_4__.unitResult)();
}

function headEmbedScript(source, ctx) {
    const doc = (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_4__.BuildContext__get_Document)(ctx);
    const head = findElement(doc, "head");
    const el = doc.createElement("script");
    const value = head.appendChild(el);
    void value;
    const value_1 = el.appendChild(doc.createTextNode(source));
    void value_1;
    return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_4__.unitResult)();
}

function headTitle(title, ctx) {
    const doc = (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_4__.BuildContext__get_Document)(ctx);
    const head = findElement(doc, "head");
    const existingTitle = findElement(doc, "head\u003etitle");
    if (!(existingTitle == null)) {
        const value = head.removeChild(existingTitle);
        void value;
    }
    const titleEl = doc.createElement("title");
    const value_1 = titleEl.appendChild(doc.createTextNode(title));
    void value_1;
    const value_2 = head.appendChild(titleEl);
    void value_2;
    return (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_4__.unitResult)();
}

function withStyle(styleSheet, element, ctx) {
    const name = ctx.MakeName("sveltish");
    addStyleSheet((0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_4__.BuildContext__get_Document)(ctx), name, styleSheet);
    return element((0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_4__.withStyleSheet)(new _DOM_fs_js__WEBPACK_IMPORTED_MODULE_4__.NamedStyleSheet(name, styleSheet, ctx.StyleSheet), ctx));
}

function rule(selector, style) {
    const result = new _DOM_fs_js__WEBPACK_IMPORTED_MODULE_4__.StyleRule(selector, (0,_DOM_fs_js__WEBPACK_IMPORTED_MODULE_4__.parseSelector)(selector), style);
    log((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_2__.toText)((0,_DevTools_fable_fable_library_3_0_5_String_js__WEBPACK_IMPORTED_MODULE_2__.interpolate)("%s%P() -\u003e %A%P()", [selector, result.Selector])));
    return result;
}

function showEl(el, isVisible) {
    if (isVisible) {
        removeStyleAttr(el, "display");
    }
    else {
        addStyleAttr(el, "display", "none");
    }
    const value = el.dispatchEvent(new CustomEvent((isVisible ? _DOM_fs_js__WEBPACK_IMPORTED_MODULE_4__.Event_Show : _DOM_fs_js__WEBPACK_IMPORTED_MODULE_4__.Event_Hide), {}));
    void value;
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/DevTools/MainPanel.fs.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;