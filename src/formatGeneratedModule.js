/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

// @flow strict

import type { FormatModule } from "relay-compiler";

const formatGeneratedModule: FormatModule = ({
    documentType,
    docText,
    concreteText,
    typeText,
    hash,
    sourceHash,
}) => {
    const documentTypeImport = documentType
        ? `import type { ${documentType} } from 'relay-runtime';`
        : "";
    const docTextComment =
        docText != null ? `\n/*\n${docText.trim()}\n*/\n` : "";
    const hashText = hash != null ? `\n * ${hash}` : "";
    return `/**
 * ${"@"}flow${hashText}
 */

/* eslint-disable */

'use strict';

${documentTypeImport}
${typeText || ""}

${docTextComment}
const node: ${documentType || "empty"} = ${concreteText};
// prettier-ignore
(node: any).hash = '${sourceHash}';
module.exports = node;
`;
};

module.exports = formatGeneratedModule;
