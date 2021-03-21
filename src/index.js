/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

// @flow strict-local

import RelayFlowGenerator from "relay-compiler/lib/language/javascript/RelayFlowGenerator";
import formatGeneratedModule from "./formatGeneratedModule";
import { find } from "relay-compiler/lib/language/javascript/FindGraphQLTags";

import type { PluginInterface } from "relay-compiler/language/RelayLanguagePluginInterface";

module.exports = (): PluginInterface => ({
    inputExtensions: ["js", "jsx"],
    outputExtension: "js",
    typeGenerator: RelayFlowGenerator,
    formatModule: formatGeneratedModule,
    findGraphQLTags: find,
});
