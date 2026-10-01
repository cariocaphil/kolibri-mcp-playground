## User

Act as a frontend architect for this React application.

Design and implement a small accessible login feature in src/App.tsx using KoliBri components.

Requirements:
- Username field
- Password field
- Submit action
- Validation feedback
- Accessible labels and error handling
- No new dependencies
- Use KoliBri components that are appropriate and available for this use case

Before implementing:
1. Identify which KoliBri components are available and relevant
2. Explain the proposed component structure and why these components fit
3. Explain accessibility considerations
4. Document any API assumptions or uncertainties about KoliBri
5. Note if any required functionality appears to be unavailable and suggest fallbacks

Then implement the solution. 

---

## Assistant

_Thinking:_

Let me first explore what KoliBri components are available. Check node_modules/@public-ui/react-v19 to see exports.

**Tool: shell**

**Input:**
```json
{
  "command": "ls node_modules/@public-ui/react-v19/dist 2>/dev/null || ls node_modules/@public-ui/react-v19"
}
```

index.cjs
index.d.cts
index.d.mts
index.d.ts
index.mjs


**Tool: shell**

**Input:**
```json
{
  "command": "ls node_modules/@public-ui/components/dist 2>/dev/null | head -50"
}
```

cjs
collection
components
esm
index.cjs.js
index.js
kolibri
loader
types


---

## Assistant

_Thinking:_

Let's inspect the type definitions of @public-ui/react-v19 to see which components are exported.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -oE '^export declare const [A-Za-z0-9_]+' node_modules/@public-ui/react-v19/dist/index.d.ts | head -80; echo '---'; wc -l node_modules/@public-ui/react-v19/dist/index.d.ts"
}
```

---
      70 node_modules/@public-ui/react-v19/dist/index.d.ts


**Tool: shell**

**Input:**
```json
{
  "command": "grep -oE \"'kol-[a-z0-9-]+'\" node_modules/@public-ui/react-v19/dist/index.d.ts | sort -u"
}
```

(no output)

---

## Assistant

_Thinking:_

The index.d.ts is only 70 lines. Let's read it.

**Tool: read**

**Input:**
```json
{
  "path": "/Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/node_modules/@public-ui/react-v19/dist/index.d.ts"
}
```

Read file /Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/node_modules/@public-ui/react-v19/dist/index.d.ts, lines 1-70
1: import * as react from 'react';
2: import { JSX } from '@public-ui/components';
3: 
4: interface StyleReactProps {
5:     class?: string;
6:     className?: string;
7:     style?: {
8:         [key: string]: any;
9:     };
10: }
11: 
12: type TagNameTransformer = (tagName: string) => string;
13: declare const setTagNameTransformer: (_tagNameTransformer: TagNameTransformer) => void;
14: 
15: declare const KolAbbr: react.ForwardRefExoticComponent<JSX.KolAbbr & Omit<react.HTMLAttributes<HTMLKolAbbrElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolAbbrElement>>;
16: declare const KolAccordion: react.ForwardRefExoticComponent<JSX.KolAccordion & Omit<react.HTMLAttributes<HTMLKolAccordionElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolAccordionElement>>;
17: declare const KolAlert: react.ForwardRefExoticComponent<JSX.KolAlert & Omit<react.HTMLAttributes<HTMLKolAlertElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolAlertElement>>;
18: declare const KolAvatar: react.ForwardRefExoticComponent<JSX.KolAvatar & Omit<react.HTMLAttributes<HTMLKolAvatarElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolAvatarElement>>;
19: declare const KolBadge: react.ForwardRefExoticComponent<JSX.KolBadge & Omit<react.HTMLAttributes<HTMLKolBadgeElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolBadgeElement>>;
20: declare const KolBreadcrumb: react.ForwardRefExoticComponent<JSX.KolBreadcrumb & Omit<react.HTMLAttributes<HTMLKolBreadcrumbElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolBreadcrumbElement>>;
21: declare const KolButton: react.ForwardRefExoticComponent<JSX.KolButton & Omit<react.HTMLAttributes<HTMLKolButtonElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolButtonElement>>;
22: declare const KolButtonLink: react.ForwardRefExoticComponent<JSX.KolButtonLink & Omit<react.HTMLAttributes<HTMLKolButtonLinkElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolButtonLinkElement>>;
23: declare const KolCard: react.ForwardRefExoticComponent<JSX.KolCard & Omit<react.HTMLAttributes<HTMLKolCardElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolCardElement>>;
24: declare const KolCombobox: react.ForwardRefExoticComponent<JSX.KolCombobox & Omit<react.HTMLAttributes<HTMLKolComboboxElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolComboboxElement>>;
25: declare const KolDetails: react.ForwardRefExoticComponent<JSX.KolDetails & Omit<react.HTMLAttributes<HTMLKolDetailsElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolDetailsElement>>;
26: declare const KolDialog: react.ForwardRefExoticComponent<JSX.KolDialog & Omit<react.HTMLAttributes<HTMLKolDialogElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolDialogElement>>;
27: declare const KolDrawer: react.ForwardRefExoticComponent<JSX.KolDrawer & Omit<react.HTMLAttributes<HTMLKolDrawerElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolDrawerElement>>;
28: declare const KolForm: react.ForwardRefExoticComponent<JSX.KolForm & Omit<react.HTMLAttributes<HTMLKolFormElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolFormElement>>;
29: declare const KolHeading: react.ForwardRefExoticComponent<JSX.KolHeading & Omit<react.HTMLAttributes<HTMLKolHeadingElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolHeadingElement>>;
30: declare const KolIcon: react.ForwardRefExoticComponent<JSX.KolIcon & Omit<react.HTMLAttributes<HTMLKolIconElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolIconElement>>;
31: declare const KolImage: react.ForwardRefExoticComponent<JSX.KolImage & Omit<react.HTMLAttributes<HTMLKolImageElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolImageElement>>;
32: declare const KolInputCheckbox: react.ForwardRefExoticComponent<JSX.KolInputCheckbox & Omit<react.HTMLAttributes<HTMLKolInputCheckboxElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolInputCheckboxElement>>;
33: declare const KolInputColor: react.ForwardRefExoticComponent<JSX.KolInputColor & Omit<react.HTMLAttributes<HTMLKolInputColorElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolInputColorElement>>;
34: declare const KolInputDate: react.ForwardRefExoticComponent<JSX.KolInputDate & Omit<react.HTMLAttributes<HTMLKolInputDateElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolInputDateElement>>;
35: declare const KolInputEmail: react.ForwardRefExoticComponent<JSX.KolInputEmail & Omit<react.HTMLAttributes<HTMLKolInputEmailElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolInputEmailElement>>;
36: declare const KolInputFile: react.ForwardRefExoticComponent<JSX.KolInputFile & Omit<react.HTMLAttributes<HTMLKolInputFileElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolInputFileElement>>;
37: declare const KolInputNumber: react.ForwardRefExoticComponent<JSX.KolInputNumber & Omit<react.HTMLAttributes<HTMLKolInputNumberElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolInputNumberElement>>;
38: declare const KolInputPassword: react.ForwardRefExoticComponent<JSX.KolInputPassword & Omit<react.HTMLAttributes<HTMLKolInputPasswordElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolInputPasswordElement>>;
39: declare const KolInputRadio: react.ForwardRefExoticComponent<JSX.KolInputRadio & Omit<react.HTMLAttributes<HTMLKolInputRadioElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolInputRadioElement>>;
40: declare const KolInputRange: react.ForwardRefExoticComponent<JSX.KolInputRange & Omit<react.HTMLAttributes<HTMLKolInputRangeElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolInputRangeElement>>;
41: declare const KolInputText: react.ForwardRefExoticComponent<JSX.KolInputText & Omit<react.HTMLAttributes<HTMLKolInputTextElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolInputTextElement>>;
42: declare const KolKolibri: react.ForwardRefExoticComponent<JSX.KolKolibri & Omit<react.HTMLAttributes<HTMLKolKolibriElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolKolibriElement>>;
43: declare const KolLink: react.ForwardRefExoticComponent<JSX.KolLink & Omit<react.HTMLAttributes<HTMLKolLinkElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolLinkElement>>;
44: declare const KolLinkButton: react.ForwardRefExoticComponent<JSX.KolLinkButton & Omit<react.HTMLAttributes<HTMLKolLinkButtonElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolLinkButtonElement>>;
45: declare const KolMeter: react.ForwardRefExoticComponent<JSX.KolMeter & Omit<react.HTMLAttributes<HTMLKolMeterElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolMeterElement>>;
46: declare const KolModal: react.ForwardRefExoticComponent<JSX.KolModal & Omit<react.HTMLAttributes<HTMLKolModalElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolModalElement>>;
47: declare const KolNav: react.ForwardRefExoticComponent<JSX.KolNav & Omit<react.HTMLAttributes<HTMLKolNavElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolNavElement>>;
48: declare const KolPagination: react.ForwardRefExoticComponent<JSX.KolPagination & Omit<react.HTMLAttributes<HTMLKolPaginationElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolPaginationElement>>;
49: declare const KolPopoverButton: react.ForwardRefExoticComponent<JSX.KolPopoverButton & Omit<react.HTMLAttributes<HTMLKolPopoverButtonElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolPopoverButtonElement>>;
50: declare const KolProgress: react.ForwardRefExoticComponent<JSX.KolProgress & Omit<react.HTMLAttributes<HTMLKolProgressElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolProgressElement>>;
51: declare const KolQuote: react.ForwardRefExoticComponent<JSX.KolQuote & Omit<react.HTMLAttributes<HTMLKolQuoteElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolQuoteElement>>;
52: declare const KolSelect: react.ForwardRefExoticComponent<JSX.KolSelect & Omit<react.HTMLAttributes<HTMLKolSelectElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolSelectElement>>;
53: declare const KolSingleSelect: react.ForwardRefExoticComponent<JSX.KolSingleSelect & Omit<react.HTMLAttributes<HTMLKolSingleSelectElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolSingleSelectElement>>;
54: declare const KolSkeleton: react.ForwardRefExoticComponent<JSX.KolSkeleton & Omit<react.HTMLAttributes<HTMLKolSkeletonElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolSkeletonElement>>;
55: declare const KolSkipNav: react.ForwardRefExoticComponent<JSX.KolSkipNav & Omit<react.HTMLAttributes<HTMLKolSkipNavElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolSkipNavElement>>;
56: declare const KolSpin: react.ForwardRefExoticComponent<JSX.KolSpin & Omit<react.HTMLAttributes<HTMLKolSpinElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolSpinElement>>;
57: declare const KolSplitButton: react.ForwardRefExoticComponent<JSX.KolSplitButton & Omit<react.HTMLAttributes<HTMLKolSplitButtonElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolSplitButtonElement>>;
58: declare const KolTableStateful: react.ForwardRefExoticComponent<JSX.KolTableStateful & Omit<react.HTMLAttributes<HTMLKolTableStatefulElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolTableStatefulElement>>;
59: declare const KolTableStateless: react.ForwardRefExoticComponent<JSX.KolTableStateless & Omit<react.HTMLAttributes<HTMLKolTableStatelessElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolTableStatelessElement>>;
60: declare const KolTabs: react.ForwardRefExoticComponent<JSX.KolTabs & Omit<react.HTMLAttributes<HTMLKolTabsElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolTabsElement>>;
61: declare const KolTextarea: react.ForwardRefExoticComponent<JSX.KolTextarea & Omit<react.HTMLAttributes<HTMLKolTextareaElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolTextareaElement>>;
62: declare const KolToolbar: react.ForwardRefExoticComponent<JSX.KolToolbar & Omit<react.HTMLAttributes<HTMLKolToolbarElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolToolbarElement>>;
63: declare const KolTree: react.ForwardRefExoticComponent<JSX.KolTree & Omit<react.HTMLAttributes<HTMLKolTreeElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolTreeElement>>;
64: declare const KolTreeItem: react.ForwardRefExoticComponent<JSX.KolTreeItem & Omit<react.HTMLAttributes<HTMLKolTreeItemElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolTreeItemElement>>;
65: declare const KolVersion: react.ForwardRefExoticComponent<JSX.KolVersion & Omit<react.HTMLAttributes<HTMLKolVersionElement>, "style"> & StyleReactProps & react.RefAttributes<HTMLKolVersionElement>>;
66: 
67: declare function createReactRenderElement(hostElement: HTMLElement): HTMLDivElement;
68: 
69: export { KolAbbr, KolAccordion, KolAlert, KolAvatar, KolBadge, KolBreadcrumb, KolButton, KolButtonLink, KolCard, KolCombobox, KolDetails, KolDialog, KolDrawer, KolForm, KolHeading, KolIcon, KolImage, KolInputCheckbox, KolInputColor, KolInputDate, KolInputEmail, KolInputFile, KolInputNumber, KolInputPassword, KolInputRadio, KolInputRange, KolInputText, KolKolibri, KolLink, KolLinkButton, KolMeter, KolModal, KolNav, KolPagination, KolPopoverButton, KolProgress, KolQuote, KolSelect, KolSingleSelect, KolSkeleton, KolSkipNav, KolSpin, KolSplitButton, KolTableStateful, KolTableStateless, KolTabs, KolTextarea, KolToolbar, KolTree, KolTreeItem, KolVersion, createReactRenderElement, setTagNameTransformer };
70: export type { StyleReactProps };

---

## Assistant

_Thinking:_

Now let's look at the JSX types for the relevant components: KolForm, KolInputText, KolInputPassword, KolButton, KolAlert, KolCard, KolHeading.

**Tool: shell**

**Input:**
```json
{
  "command": "ls node_modules/@public-ui/components/dist/types 2>/dev/null; grep -rn \"KolInputText\" node_modules/@public-ui/components/dist/index.d.ts | head -20"
}
```

components
components.d.ts
core
declare.d.ts
e2e
enums
functional-component-wrappers
functional-components
global
i18n.d.ts
index.d.ts
internal
kolibri.d.ts
locales
schema
stencil-public-runtime.d.ts
utils
grep: node_modules/@public-ui/components/dist/index.d.ts: No such file or directory


---

## Assistant

_Thinking:_

Let's find the JSX types for KolInputText, KolInputPassword, KolForm, KolButton, KolAlert, KolCard.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rln \"KolInputText\" node_modules/@public-ui/components/dist/types/ | head -20"
}
```

node_modules/@public-ui/components/dist/types/core/component-names.d.ts
node_modules/@public-ui/components/dist/types/components/input-text/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/component-list.d.ts
node_modules/@public-ui/components/dist/types/components.d.ts


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"interface KolInputText\\b\\|KolInputText\\b\" node_modules/@public-ui/components/dist/types/components.d.ts | head"
}
```

node_modules/@public-ui/components/dist/types/components.d.ts:2178:    interface KolInputText {
node_modules/@public-ui/components/dist/types/components.d.ts:4572:    interface HTMLKolInputTextElement extends Omit<Components.KolInputText, "focus" | "click">, HTMLStencilElement {
node_modules/@public-ui/components/dist/types/components.d.ts:6870:    interface KolInputText {
node_modules/@public-ui/components/dist/types/components.d.ts:8566:        "kol-input-text": KolInputText;
node_modules/@public-ui/components/dist/types/components.d.ts:8733:            "kol-input-text": LocalJSX.KolInputText & JSXBase.HTMLAttributes<HTMLKolInputTextElement>;


---

## Assistant

_Thinking:_

Let's read the interface definitions for KolInputText, KolInputPassword, KolForm, KolButton, KolAlert, KolCard, KolHeading.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -n \"interface Kol\" node_modules/@public-ui/components/dist/types/components.d.ts | sed -n '1,80p'"
}
```

34:    interface KolAbbr {
44:    interface KolAccordion {
81:    interface KolAlert {
117:    interface KolAlertWc {
156:    interface KolAvatar {
174:    interface KolBadge {
200:    interface KolBreadcrumb {
213:    interface KolButton {
321:    interface KolButtonLink {
421:    interface KolButtonWc {
535:    interface KolCard {
581:    interface KolCardWc {
623:    interface KolClickButton {
633:    interface KolCombobox {
755:    interface KolDetails {
789:    interface KolDialog {
839:    interface KolDialogWc {
886:    interface KolDrawer {
935:    interface KolForm {
954:    interface KolHeading {
972:    interface KolIcon {
985:    interface KolImage {
1014:    interface KolInputCheckbox {
1137:    interface KolInputColor {
1249:    interface KolInputDate {
1394:    interface KolInputEmail {
1546:    interface KolInputFile {
1665:    interface KolInputNumber {
1805:    interface KolInputPassword {
1952:    interface KolInputRadio {
2056:    interface KolInputRange {
2178:    interface KolInputText {
2350:    interface KolKolibri {
2362:    interface KolLink {
2445:    interface KolLinkButton {
2543:    interface KolLinkWc {
2643:    interface KolMeter {
2689:    interface KolModal {
2735:    interface KolNav {
2767:    interface KolPagination {
2819:    interface KolPaginationWc {
2875:    interface KolPopoverButton {
2969:    interface KolPopoverButtonWc {
3070:    interface KolProgress {
3095:    interface KolQuote {
3114:    interface KolSelect {
3230:    interface KolSelectWc {
3353:    interface KolSingleSelect {
3468:    interface KolSkeleton {
3485:    interface KolSkipNav {
3499:    interface KolSpin {
3517:    interface KolSplitButton {
3618:    interface KolTableSettingsWc {
3628:    interface KolTableStateful {
3695:    interface KolTableStateless {
3741:    interface KolTableStatelessWc {
3791:    interface KolTabs {
3835:    interface KolTextarea {
3983:    interface KolToastContainer {
3993:    interface KolToolbar {
4018:    interface KolTooltipWc {
4042:    interface KolTree {
4052:    interface KolTreeItem {
4086:    interface KolTreeItemWc {
4120:    interface KolTreeWc {
4134:    interface KolVersion {
4143:export interface KolSkeletonCustomEvent<T> extends CustomEvent<T> {
5061:    interface KolAbbr {
5071:    interface KolAccordion {
5100:    interface KolAlert {
5136:    interface KolAlertWc {
5175:    interface KolAvatar {
5193:    interface KolBadge {
5215:    interface KolBreadcrumb {
5228:    interface KolButton {
5320:    interface KolButtonLink {
5404:    interface KolButtonWc {
5493:    interface KolCard {
5531:    interface KolCardWc {
5560:    interface KolClickButton {


---

## Assistant

_Thinking:_

Let's read the interfaces for KolInputText (2178), KolInputPassword (1805), KolForm (935), KolButton (213), KolAlert (81), KolCard (535).

**Tool: read**

**Input:**
```json
{
  "path": "/Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/node_modules/@public-ui/components/dist/types/components.d.ts",
  "offset": 2178,
  "limit": 175
}
```

Read file /Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/node_modules/@public-ui/components/dist/types/components.d.ts, lines 2178-2352
2178:     interface KolInputText {
2179:         /**
2180:           * Defines the key combination that can be used to trigger or focus the component's interactive element.
2181:          */
2182:         "_accessKey"?: AccessKeyPropType;
2183:         /**
2184:           * References an external element by ID that provides accessible details for this input.
2185:          */
2186:         "_ariaDetails"?: AriaDetailsPropType;
2187:         /**
2188:           * Defines whether the input can be auto-completed.
2189:           * @default 'off'
2190:          */
2191:         "_autoComplete"?: AutoCompletePropType;
2192:         /**
2193:           * Makes the element not focusable and ignore all events.
2194:           * @TODO : Change type back to `DisabledPropType` after Stencil#4663 has been resolved.
2195:           * @default false
2196:          */
2197:         "_disabled"?: boolean;
2198:         /**
2199:           * Shows a character counter for the input element.
2200:           * @default false
2201:          */
2202:         "_hasCounter"?: boolean;
2203:         /**
2204:           * Hides the caption by default and displays the caption text with a tooltip when the interactive element is focused or the mouse is over it.
2205:           * @TODO : Change type back to `HideLabelPropType` after Stencil#4663 has been resolved.
2206:           * @default false
2207:          */
2208:         "_hideLabel"?: boolean;
2209:         /**
2210:           * Hides the error message but leaves it in the DOM for the input's aria-describedby.
2211:           * @TODO : Change type back to `HideMsgPropType` after Stencil#4663 has been resolved.
2212:           * @default false
2213:          */
2214:         "_hideMsg"?: boolean;
2215:         /**
2216:           * Defines the hint text.
2217:           * @default ''
2218:          */
2219:         "_hint"?: string;
2220:         /**
2221:           * Defines the icon classnames.
2222:          */
2223:         "_icons"?: IconsHorizontalPropType;
2224:         /**
2225:           * Defines the informational popover after the label.
2226:          */
2227:         "_infoPopover"?: FormFieldLabelInfoPopoverProps1;
2228:         /**
2229:           * Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to `false` to enable the expert slot.
2230:          */
2231:         "_label": LabelWithExpertSlotPropType;
2232:         /**
2233:           * Defines the maximum number of input characters.
2234:          */
2235:         "_maxLength"?: number;
2236:         /**
2237:           * Defines the behavior when maxLength is set. 'hard' sets the maxlength attribute, 'soft' shows a character counter without preventing input.
2238:           * @default 'hard'
2239:          */
2240:         "_maxLengthBehavior"?: MaxLengthBehaviorPropType;
2241:         /**
2242:           * Defines the properties for a message rendered as Alert component.
2243:          */
2244:         "_msg"?: Stringified<MsgPropType>;
2245:         /**
2246:           * Defines the technical name of an input field.
2247:          */
2248:         "_name"?: NamePropType;
2249:         /**
2250:           * Gibt die EventCallback-Funktionen für das Input-Event an.
2251:          */
2252:         "_on"?: InputTypeOnDefault;
2253:         /**
2254:           * Defines a validation pattern for the input field.
2255:          */
2256:         "_pattern"?: string;
2257:         /**
2258:           * Defines the placeholder for input field. To be shown when there's no value.
2259:          */
2260:         "_placeholder"?: string;
2261:         /**
2262:           * Makes the input element read only.
2263:           * @TODO : Change type back to `ReadOnlyPropType` after Stencil#4663 has been resolved.
2264:           * @default false
2265:          */
2266:         "_readOnly"?: boolean;
2267:         /**
2268:           * Makes the input element required.
2269:           * @TODO : Change type back to `RequiredPropType` after Stencil#4663 has been resolved.
2270:           * @default false
2271:          */
2272:         "_required"?: boolean;
2273:         /**
2274:           * Adds a visual shortcut hint after the label and instructs the screen reader to read the shortcut aloud.
2275:          */
2276:         "_shortKey"?: ShortKeyPropType;
2277:         /**
2278:           * Allows to add a button with an arbitrary action within the element (_hide-label only).
2279:          */
2280:         "_smartButton"?: Stringified<InternalButtonProps>;
2281:         /**
2282:           * Defines whether the browser should check the spelling and grammar.
2283:          */
2284:         "_spellCheck"?: SpellCheckPropType;
2285:         /**
2286:           * Suggestions to provide for the input.
2287:          */
2288:         "_suggestions"?: SuggestionsPropType;
2289:         /**
2290:           * Selector for synchronizing the value with another input element.
2291:          */
2292:         "_syncValueBySelector"?: SyncValueBySelectorPropType;
2293:         /**
2294:           * Defines where to show the Tooltip preferably: top, right, bottom or left.
2295:           * @default 'top'
2296:          */
2297:         "_tooltipAlign"?: TooltipAlignPropType;
2298:         /**
2299:           * Shows if the input was touched by a user.
2300:           * @TODO : Change type back to `TouchedPropType` after Stencil#4663 has been resolved.
2301:           * @default false
2302:          */
2303:         "_touched"?: boolean;
2304:         /**
2305:           * Defines either the type of the component or of the components interactive element.
2306:           * @default 'text'
2307:          */
2308:         "_type"?: InputTextTypePropType;
2309:         /**
2310:           * Defines the value of the element.
2311:          */
2312:         "_value"?: string;
2313:         /**
2314:           * Defines which variant should be used for presentation.
2315:          */
2316:         "_variant"?: VariantClassNamePropType;
2317:         /**
2318:           * Clicks the primary interactive element inside this component.
2319:          */
2320:         "click": () => Promise<void>;
2321:         /**
2322:           * Sets focus on the internal element.
2323:          */
2324:         "focus": (options?: KolFocusOptions) => Promise<void>;
2325:         /**
2326:           * Returns the current value.
2327:          */
2328:         "getValue": () => Promise<string | undefined>;
2329:         /**
2330:           * Get selection end of internal element.
2331:          */
2332:         "selectionEnd": () => Promise<number | null | undefined>;
2333:         /**
2334:           * Get selection start of internal element.
2335:          */
2336:         "selectionStart": () => Promise<number | null | undefined>;
2337:         /**
2338:           * Add string at position of internal element; just like https://developer.mozilla.org/docs/Web/API/HTMLInputElement/setRangeText
2339:          */
2340:         "setRangeText": (replacement: string, selectionStart?: number, selectionEnd?: number, selectMode?: "select" | "start" | "end" | "preserve") => Promise<void>;
2341:         /**
2342:           * Set selection start and end, and optional in which direction, of internal element; just like https://developer.mozilla.org/docs/Web/API/HTMLInputElement/setSelectionRange
2343:          */
2344:         "setSelectionRange": (selectionStart: number, selectionEnd: number, selectionDirection?: "forward" | "backward" | "none") => Promise<void>;
2345:         /**
2346:           * Set selection start (and end = start) of internal element.
2347:          */
2348:         "setSelectionStart": (selectionStart: number) => Promise<void>;
2349:     }
2350:     interface KolKolibri {
2351:         /**
2352:           * Defines the color of the logo and label.
[Output truncated. Continue reading with offset: 2353]

**Tool: read**

**Input:**
```json
{
  "path": "/Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/node_modules/@public-ui/components/dist/types/components.d.ts",
  "offset": 1805,
  "limit": 150
}
```

Read file /Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/node_modules/@public-ui/components/dist/types/components.d.ts, lines 1805-1954
1805:     interface KolInputPassword {
1806:         /**
1807:           * Defines the key combination that can be used to trigger or focus the component's interactive element.
1808:          */
1809:         "_accessKey"?: string;
1810:         /**
1811:           * References an external element by ID that provides accessible details for this input. Uses ElementInternals.ariaDetailsElements to cross the Shadow DOM boundary. Supported by desktop screen readers (NVDA, JAWS with Chrome/Firefox). Not yet supported by mobile screen readers (TalkBack, VoiceOver iOS).
1812:          */
1813:         "_ariaDetails"?: AriaDetailsPropType;
1814:         /**
1815:           * Defines whether the input can be auto-completed.
1816:           * @default 'off'
1817:          */
1818:         "_autoComplete"?: AutoCompletePropType;
1819:         /**
1820:           * Makes the element not focusable and ignore all events.
1821:           * @TODO : Change type back to `DisabledPropType` after Stencil#4663 has been resolved.
1822:           * @default false
1823:          */
1824:         "_disabled"?: boolean;
1825:         /**
1826:           * Shows a character counter for the input element.
1827:           * @default false
1828:          */
1829:         "_hasCounter"?: boolean;
1830:         /**
1831:           * Hides the caption by default and displays the caption text with a tooltip when the interactive element is focused or the mouse is over it.
1832:           * @TODO : Change type back to `HideLabelPropType` after Stencil#4663 has been resolved.
1833:           * @default false
1834:          */
1835:         "_hideLabel"?: boolean;
1836:         /**
1837:           * Hides the error message but leaves it in the DOM for the input's aria-describedby.
1838:           * @TODO : Change type back to `HideMsgPropType` after Stencil#4663 has been resolved.
1839:           * @default false
1840:          */
1841:         "_hideMsg"?: boolean;
1842:         /**
1843:           * Defines the hint text.
1844:           * @default ''
1845:          */
1846:         "_hint"?: string;
1847:         /**
1848:           * Defines the icon classnames.
1849:          */
1850:         "_icons"?: IconsHorizontalPropType;
1851:         /**
1852:           * Defines the informational popover after the label.
1853:          */
1854:         "_infoPopover"?: FormFieldLabelInfoPopoverProps;
1855:         /**
1856:           * Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to `false` to enable the expert slot.
1857:          */
1858:         "_label": LabelWithExpertSlotPropType;
1859:         /**
1860:           * Defines the maximum number of input characters.
1861:          */
1862:         "_maxLength"?: number;
1863:         /**
1864:           * Defines the behavior when maxLength is set. 'hard' sets the maxlength attribute, 'soft' shows a character counter without preventing input.
1865:           * @default 'hard'
1866:          */
1867:         "_maxLengthBehavior"?: MaxLengthBehaviorPropType;
1868:         /**
1869:           * Defines the properties for a message rendered as Alert component.
1870:          */
1871:         "_msg"?: Stringified<MsgPropType>;
1872:         /**
1873:           * Defines the technical name of an input field.
1874:          */
1875:         "_name"?: NamePropType;
1876:         /**
1877:           * Gibt die EventCallback-Funktionen für das Input-Event an.
1878:          */
1879:         "_on"?: InputTypeOnDefault;
1880:         /**
1881:           * Defines a validation pattern for the input field.
1882:          */
1883:         "_pattern"?: string;
1884:         /**
1885:           * Defines the placeholder for input field. To be shown when there's no value.
1886:          */
1887:         "_placeholder"?: string;
1888:         /**
1889:           * Makes the input element read only.
1890:           * @TODO : Change type back to `ReadOnlyPropType` after Stencil#4663 has been resolved.
1891:           * @default false
1892:          */
1893:         "_readOnly"?: boolean;
1894:         /**
1895:           * Makes the input element required.
1896:           * @TODO : Change type back to `RequiredPropType` after Stencil#4663 has been resolved.
1897:           * @default false
1898:          */
1899:         "_required"?: boolean;
1900:         /**
1901:           * Adds a visual shortcut hint after the label and instructs the screen reader to read the shortcut aloud.
1902:          */
1903:         "_shortKey"?: ShortKeyPropType;
1904:         /**
1905:           * Allows to add a button with an arbitrary action within the element (_hide-label only).
1906:          */
1907:         "_smartButton"?: Stringified<InternalButtonProps>;
1908:         /**
1909:           * Selector for synchronizing the value with another input element.
1910:          */
1911:         "_syncValueBySelector"?: SyncValueBySelectorPropType;
1912:         /**
1913:           * Defines where to show the Tooltip preferably: top, right, bottom or left.
1914:           * @default 'top'
1915:          */
1916:         "_tooltipAlign"?: TooltipAlignPropType;
1917:         /**
1918:           * Shows if the input was touched by a user.
1919:           * @TODO : Change type back to `TouchedPropType` after Stencil#4663 has been resolved.
1920:           * @default false
1921:          */
1922:         "_touched"?: boolean;
1923:         /**
1924:           * Defines the value of the element.
1925:          */
1926:         "_value"?: string;
1927:         /**
1928:           * Defines which variant should be used for presentation.
1929:          */
1930:         "_variant"?: VariantClassNamePropType;
1931:         /**
1932:           * Activates the show password button
1933:           * @default false
1934:          */
1935:         "_visibilityToggle"?: VisibilityTogglePropType;
1936:         /**
1937:           * Clicks the primary interactive element inside this component.
1938:          */
1939:         "click": () => Promise<void>;
1940:         /**
1941:           * Sets focus on the internal element.
1942:          */
1943:         "focus": (options?: KolFocusOptions) => Promise<void>;
1944:         /**
1945:           * Returns the current value.
1946:          */
1947:         "getValue": () => Promise<string | undefined>;
1948:     }
1949:     /**
1950:      * The **InputRadio** input type consists of a collection of radio elements, providing a choice between different values. Only a single value can be selected at a time. Selected radio elements are typically represented by a filled, visually highlighted circle.
1951:      */
1952:     interface KolInputRadio {
1953:         /**
1954:           * References an external element by ID that provides accessible details for this input. Uses ElementInternals.ariaDetailsElements to cross the Shadow DOM boundary. Supported by desktop screen readers (NVDA, JAWS with Chrome/Firefox). Not yet supported by mobile screen readers (TalkBack, VoiceOver iOS).
[Output truncated. Continue reading with offset: 1955]

---

## Assistant

_Thinking:_

Now let's look at KolForm, KolButton, KolAlert, KolCard interfaces. Also check the `_on` event type (InputTypeOnDefault) and MsgPropType.

**Tool: read**

**Input:**
```json
{
  "limit": 45,
  "offset": 935,
  "path": "/Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/node_modules/@public-ui/components/dist/types/components.d.ts"
}
```

Read file /Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/node_modules/@public-ui/components/dist/types/components.d.ts, lines 935-979
935:     interface KolForm {
936:         /**
937:           * A list of error objects that each describe an issue encountered in the form. Each error object contains a message and a selector for identifying the form element related to the error.
938:          */
939:         "_errorList"?: ErrorListPropType[];
940:         /**
941:           * Gibt die EventCallback-Funktionen für die Form-Events an.
942:          */
943:         "_on"?: KoliBriFormCallbacks;
944:         /**
945:           * Defines whether the mandatory-fields-hint should be shown. A string overrides the default text.
946:           * @default true
947:          */
948:         "_requiredText"?: Stringified<boolean>;
949:         /**
950:           * Scrolls to the error list and focuses the first link.
951:          */
952:         "focusErrorList": (options?: KolFocusOptions) => Promise<void>;
953:     }
954:     interface KolHeading {
955:         /**
956:           * Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to `false` to enable the expert slot.
957:          */
958:         "_label": LabelWithExpertSlotPropType;
959:         /**
960:           * Defines which H-level from 1-6 the heading has. 0 specifies no heading and is shown as bold text.
961:           * @default 0
962:          */
963:         "_level"?: HeadingLevel;
964:         /**
965:           * Defines the text of the secondary headline.
966:          */
967:         "_secondaryHeadline"?: string;
968:     }
969:     /**
970:      * The **Icon** component allows icons from included icon fonts to be displayed at any position.
971:      */
972:     interface KolIcon {
973:         /**
974:           * Defines the icon classnames (e.g. `_icons="fa-solid fa-user"`).
975:          */
976:         "_icons": string;
977:         /**
978:           * Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.).
979:          */
[Output truncated. Continue reading with offset: 980]

**Tool: read**

**Input:**
```json
{
  "limit": 110,
  "offset": 213,
  "path": "/Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/node_modules/@public-ui/components/dist/types/components.d.ts"
}
```

Read file /Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/node_modules/@public-ui/components/dist/types/components.d.ts, lines 213-322
213:     interface KolButton {
214:         /**
215:           * Defines the key combination that can be used to trigger or focus the component's interactive element.
216:          */
217:         "_accessKey"?: AccessKeyPropType;
218:         /**
219:           * Defines which elements are controlled by this component. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
220:          */
221:         "_ariaControls"?: string;
222:         /**
223:           * Defines the value for the aria-description attribute.
224:          */
225:         "_ariaDescription"?: AriaDescriptionPropType;
226:         /**
227:           * Defines whether the interactive element of the component expanded something. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
228:          */
229:         "_ariaExpanded"?: boolean;
230:         /**
231:           * Defines whether the interactive element of the component is selected (e.g. role=tab). (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
232:          */
233:         "_ariaSelected"?: boolean;
234:         /**
235:           * Defines the custom class attribute if _variant="custom" is set.
236:          */
237:         "_customClass"?: CustomClassPropType;
238:         /**
239:           * Makes the element not focusable and ignore all events.
240:           * @default false
241:          */
242:         "_disabled"?: boolean;
243:         /**
244:           * Hides the caption by default and displays the caption text with a tooltip when the interactive element is focused or the mouse is over it.
245:           * @TODO : Change type back to `HideLabelPropType` after Stencil#4663 has been resolved.
246:           * @default false
247:          */
248:         "_hideLabel"?: boolean;
249:         /**
250:           * Defines the icon classnames.
251:          */
252:         "_icons"?: IconsPropType;
253:         /**
254:           * Defines whether the component is displayed as a standalone block or inline without enforcing a minimum size of 44px.
255:           * @default false
256:          */
257:         "_inline"?: InlinePropType;
258:         /**
259:           * Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to `false` to enable the expert slot.
260:          */
261:         "_label": LabelWithExpertSlotPropType;
262:         /**
263:           * Defines the technical name of an input field.
264:          */
265:         "_name"?: string;
266:         /**
267:           * Defines the callback functions for button events.
268:          */
269:         "_on"?: ButtonCallbacksPropType<StencilUnknown>;
270:         /**
271:           * Defines the role of the components primary element.
272:           * @deprecated We prefer the semantic role of the HTML element and do not allow for customization. We will remove this prop in the future.
273:          */
274:         "_role"?: AlternativeButtonLinkRolePropType;
275:         /**
276:           * Adds a visual shortcut hint after the label and instructs the screen reader to read the shortcut aloud.
277:          */
278:         "_shortKey"?: ShortKeyPropType;
279:         /**
280:           * Selector for synchronizing the value with another input element.
281:          */
282:         "_syncValueBySelector"?: SyncValueBySelectorPropType;
283:         /**
284:           * Defines where to show the Tooltip preferably: top, right, bottom or left.
285:           * @default 'top'
286:          */
287:         "_tooltipAlign"?: TooltipAlignPropType;
288:         /**
289:           * Defines either the type of the component or of the components interactive element.
290:           * @default 'button'
291:          */
292:         "_type"?: ButtonTypePropType;
293:         /**
294:           * Defines the value of the element.
295:          */
296:         "_value"?: StencilUnknown;
297:         /**
298:           * Defines which variant should be used for presentation.
299:          */
300:         "_variant"?: VariantClassNamePropType;
301:         /**
302:           * Clicks the primary interactive element inside this component.
303:          */
304:         "click": () => Promise<void>;
305:         /**
306:           * Sets focus on the internal element.
307:          */
308:         "focus": (options?: KolFocusOptions) => Promise<void>;
309:         /**
310:           * Returns the current value.
311:          */
312:         "getValue": () => Promise<StencilUnknown>;
313:     }
314:     /**
315:      * The **ButtonLink** component is semantically a button but has the appearance of a link. All relevant properties of the Button component are adopted and extended with the design-defining properties of a link.
316:      * A button can be disabled, therefore the **ButtonLink** also has the `_disabled` property. How this is styled visually is determined by the UX designer.
317:      * Instead of using `_href` as with a regular link, the **ButtonLink**'s behavior is controlled via a click callback using the `_on` property.
318:      * A link has the `target` property which optionally opens the link in a new window/tab. This behavior is not yet implemented.
319:      * Since a link, unlike a button, is not offered in multiple variants (`primary`, `secondary`, etc.), the `_customClass` and `_variant` properties are not available.
320:      */
321:     interface KolButtonLink {
322:         /**
[Output truncated. Continue reading with offset: 323]

---

## Assistant

_Thinking:_

Now let's check the types: InputTypeOnDefault, MsgPropType, ButtonCallbacksPropType, KoliBriFormCallbacks, ErrorListPropType, and KolAlert props. Let's grep in types directory.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"type InputTypeOnDefault\\|type MsgPropType\\|type ButtonCallbacksPropType\\|type KoliBriFormCallbacks\\|type ErrorListPropType\\|type InputTypeOn\\b\\|interface InputTypeOn\\|type ValidationType\\|type MsgType\" node_modules/@public-ui/components/dist/types/ | head -30"
}
```

node_modules/@public-ui/components/dist/types/functional-component-wrappers/_helpers/getRenderStates.d.ts:1:import { type MsgPropType, type Stringified, type TouchedPropType } from '../../schema';
node_modules/@public-ui/components/dist/types/functional-components/FormFieldMsg/FormFieldMsg.d.ts:3:import { type AlertPropType, type IdPropType, type MsgPropType, type Stringified } from '../../schema';
node_modules/@public-ui/components/dist/types/functional-components/FieldControl/FieldControl.d.ts:3:import { type AlignPropType, type LabelAlignPropType, type MsgPropType, type Stringified } from '../../schema';
node_modules/@public-ui/components/dist/types/functional-components/InputContainer/InputContainer.d.ts:3:import { type MsgPropType, type Stringified } from '../../schema';
node_modules/@public-ui/components/dist/types/functional-components/inputs/Input/Input.d.ts:3:import { type MsgPropType, type Stringified } from '../../../schema';
node_modules/@public-ui/components/dist/types/functional-components/inputs/NativeSelect/NativeSelect.d.ts:3:import { type MsgPropType, type Stringified } from '../../../schema';
node_modules/@public-ui/components/dist/types/functional-components/inputs/TextArea/TextArea.d.ts:3:import { type MsgPropType, type Stringified } from '../../../schema';
node_modules/@public-ui/components/dist/types/schema/types/input/types.d.ts:35:export type InputTypeOnDefault = InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus & InputTypeOnInput & InputTypeOnKeyDown;
node_modules/@public-ui/components/dist/types/schema/props/button-callbacks.d.ts:5:export type ButtonCallbacksPropType<T> = {
node_modules/@public-ui/components/dist/types/schema/props/error-list.d.ts:4:export type ErrorListPropType = {
node_modules/@public-ui/components/dist/types/schema/props/msg.d.ts:4:export type MsgPropType = Omit<AlertProps, '_level' | '_on' | '_label' | '_hasCloser' | '_variant'> & {
node_modules/@public-ui/components/dist/types/schema/components/form.d.ts:5:export type KoliBriFormCallbacks = {


**Tool: read**

**Input:**
```json
{
  "limit": 40,
  "offset": 81,
  "path": "/Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/node_modules/@public-ui/components/dist/types/components.d.ts"
}
```

Read file /Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/node_modules/@public-ui/components/dist/types/components.d.ts, lines 81-120
81:     interface KolAlert {
82:         /**
83:           * Defines whether the screen-readers should read out the notification.
84:           * @default false
85:          */
86:         "_alert"?: boolean;
87:         /**
88:           * Defines whether the element can be closed.
89:           * @TODO : Change type back to `HasCloserPropType` after Stencil#4663 has been resolved.
90:           * @default false
91:          */
92:         "_hasCloser"?: boolean;
93:         /**
94:           * Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.).
95:          */
96:         "_label"?: LabelPropType;
97:         /**
98:           * Defines which H-level from 1-6 the heading has. 0 specifies no heading and is shown as bold text.
99:           * @default 0
100:          */
101:         "_level"?: HeadingLevel;
102:         /**
103:           * Gibt die EventCallback-Function für das Schließen des Alerts an.
104:          */
105:         "_on"?: KoliBriAlertEventCallbacks;
106:         /**
107:           * Defines either the type of the component or of the components interactive element.
108:           * @default 'default'
109:          */
110:         "_type"?: AlertTypePropType;
111:         /**
112:           * Defines which variant should be used for presentation.
113:           * @default 'msg'
114:          */
115:         "_variant"?: AlertVariantPropType;
116:     }
117:     interface KolAlertWc {
118:         /**
119:           * Defines whether the screen-readers should read out the notification.
120:           * @default false
[Output truncated. Continue reading with offset: 121]

---

## Assistant

_Thinking:_

Let me look at the schema types: MsgPropType, InputTypeOnDefault, ButtonCallbacksPropType, KoliBriFormCallbacks, ErrorListPropType. Also the main.tsx to see how the app is set up (Kolibri registration — the react wrapper registers components?). Let's read main.tsx and App.css.

**Tool: shell**

**Input:**
```json
{
  "command": "cat node_modules/@public-ui/components/dist/types/schema/props/msg.d.ts node_modules/@public-ui/components/dist/types/schema/props/error-list.d.ts node_modules/@public-ui/components/dist/types/schema/components/form.d.ts node_modules/@public-ui/components/dist/types/schema/props/button-callbacks.d.ts node_modules/@public-ui/components/dist/types/schema/types/input/types.d.ts"
}
```

import type { Generic } from 'adopted-style-sheets';
import type { AlertProps } from '../components';
import type { Stringified } from '../types';
export type MsgPropType = Omit<AlertProps, '_level' | '_on' | '_label' | '_hasCloser' | '_variant'> & {
    _description: string;
};
export type PropMsg = {
    msg: Stringified<MsgPropType>;
};
export declare const validateMsg: (component: Generic.Element.Component, value?: Stringified<MsgPropType>) => void;
export declare function isMsgDefinedAndInputTouched(msg?: Stringified<MsgPropType>, touched?: boolean): boolean;
export declare const checkHasMsg: typeof isMsgDefinedAndInputTouched;
export declare function normalizeMsg(msg?: Stringified<MsgPropType>): MsgPropType | undefined;
export declare function getMsgType(msg?: Stringified<MsgPropType>): MsgPropType['_type'] | 'error';
import type { Generic } from 'adopted-style-sheets';
import type { KolFocusOptions } from '../interfaces';
import type { EventCallback } from '../types';
export type ErrorListPropType = {
    message: string;
    selector: string | EventCallback<Event>;
    options?: KolFocusOptions;
};
export type PropErrorList = {
    errorList: ErrorListPropType[];
};
export declare const validateErrorList: (component: Generic.Element.Component, value?: ErrorListPropType[]) => void;
import type { Generic } from 'adopted-style-sheets';
import type { Callback } from '../enums';
import type { PropErrorList } from '../props';
import type { EventCallback } from '../types';
export type KoliBriFormCallbacks = {
    [Callback.onSubmit]?: EventCallback<Event>;
    [Callback.onReset]?: EventCallback<Event>;
};
type RequiredProps = NonNullable<unknown>;
type OptionalProps = {
    on: KoliBriFormCallbacks;
    requiredText: string | boolean;
} & PropErrorList;
type RequiredStates = RequiredProps;
type OptionalStates = OptionalProps;
export type FormProps = Generic.Element.Members<RequiredProps, OptionalProps>;
export type FormStates = Generic.Element.Members<RequiredStates, OptionalStates>;
export type FormAPI = Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates>;
export {};
import type { Callback } from '../enums';
import type { EventCallback, EventValueOrEventCallback } from '../types/callbacks';
import type { StencilUnknown } from '../types/unknown';
import type { Generic } from 'adopted-style-sheets';
export type ButtonCallbacksPropType<T> = {
    [Callback.onClick]?: EventValueOrEventCallback<MouseEvent, T>;
    [Callback.onMouseDown]?: EventCallback<MouseEvent>;
    [Callback.onFocus]?: EventCallback<FocusEvent>;
    [Callback.onBlur]?: EventCallback<FocusEvent>;
};
export type PropButtonCallbacks<T> = {
    on: ButtonCallbacksPropType<T>;
};
export declare const validateButtonCallbacks: (component: Generic.Element.Component, value?: ButtonCallbacksPropType<StencilUnknown>) => void;
import type { Callback } from '../../enums';
import type { EventCallback, EventValueOrEventCallback } from '../callbacks';
type InputTypeOnBlur = {
    [Callback.onBlur]?: EventCallback<Event>;
};
type InputTypeOnClick = {
    [Callback.onClick]?: EventCallback<Event>;
};
type InputTypeOnChange = {
    [Callback.onChange]?: EventValueOrEventCallback<Event, unknown>;
};
type InputTypeOnFocus = {
    [Callback.onFocus]?: EventCallback<Event>;
};
type InputTypeOnInput = {
    [Callback.onInput]?: EventValueOrEventCallback<Event, unknown>;
};
type InputTypeOnKeyDown = {
    [Callback.onKeyDown]?: EventCallback<KeyboardEvent>;
};
export type Option<T> = {
    disabled?: boolean;
    label: string | number;
    value: T;
};
export type RadioOption<T> = Option<T> & {
    hint?: string;
};
export type Optgroup<T> = {
    disabled?: boolean;
    label: string;
    options: Option<T>[];
};
export type SelectOption<T> = Option<T> | Optgroup<T> | RadioOption<T>;
export type InputTypeOnDefault = InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus & InputTypeOnInput & InputTypeOnKeyDown;
export {};


**Tool: read**

**Input:**
```json
{
  "path": "/Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/src/main.tsx"
}
```

Read file /Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/src/main.tsx, lines 1-18
1: import { StrictMode } from 'react'
2: import { createRoot } from 'react-dom/client'
3: import { register } from '@public-ui/components'
4: import { defineCustomElements } from '@public-ui/components/loader'
5: import { DEFAULT } from '@public-ui/theme-default'
6: 
7: import './index.css'
8: import App from './App.tsx'
9: 
10: register(DEFAULT, defineCustomElements)
11:   .then(() => {
12:     createRoot(document.getElementById('root')!).render(
13:       <StrictMode>
14:         <App />
15:       </StrictMode>,
16:     )
17:   })
18:   .catch(console.error)

---

## Assistant

_Thinking:_

Now I understand the setup. Let me check a few more things:

1. How does the React wrapper handle events — do `_on={{ onClick: ... }}` props work as objects? Yes, they're props on the web component (Stencil).
2. Form component: `KolForm` with `_on={{ onSubmit: ... }}` and `_errorList`.
3. Check `Callback` enum values (onSubmit, onClick, onChange...).

Let me check the Callback enum.

Also check how `_msg` renders and `_touched` behavior: `isMsgDefinedAndInputTouched(msg, touched)` — msg only shown when touched is true. That's important: error messages only show if `_touched` is true. Let me verify.

Also check KolCard props (heading, label?).

Let me check these.

**Tool: shell**

**Input:**
```json
{
  "command": "cat node_modules/@public-ui/components/dist/types/schema/enums.d.ts 2>/dev/null | head -60; ls node_modules/@public-ui/components/dist/types/schema/"
}
```

bem-registry.d.ts
components
enums
i18n-keys.d.ts
index.d.ts
interfaces
props
tag-names.d.ts
types
utils
validators


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"isMsgDefinedAndInputTouched\" node_modules/@public-ui/components/dist/esm/*.js 2>/dev/null | head -5; echo '---'; ls node_modules/@public-ui/components/dist/esm | head"
}
```

node_modules/@public-ui/components/dist/esm/controller-icon-GPaN1UHM.js:9:import { g as getMsgType, i as isMsgDefinedAndInputTouched, I as InputController } from './FormFieldStateWrapper-CANKwnKv.js';
node_modules/@public-ui/components/dist/esm/controller-icon-GPaN1UHM.js:47:        [`kol-input-container--${getMsgType(msg)}`]: isMsgDefinedAndInputTouched(msg, touched),
node_modules/@public-ui/components/dist/esm/FieldControlStateWrapper-CL8sIEsf.js:11:import { K as KolFormFieldLabelFc, b as KolFormFieldHintFc, g as getMsgType, i as isMsgDefinedAndInputTouched } from './FormFieldStateWrapper-CANKwnKv.js';
node_modules/@public-ui/components/dist/esm/FieldControlStateWrapper-CL8sIEsf.js:80:        [`kol-field-control--${getMsgType(msg)}`]: Boolean(isMsgDefinedAndInputTouched(msg, touched)),
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:59:function isMsgDefinedAndInputTouched(msg, touched) {
---
_Uint8Array-kJHDjtoP.js
_Uint8Array-kJHDjtoP.js.map
access-and-short-key-ijzCZfHm.js
access-and-short-key-ijzCZfHm.js.map
Alert-BjiZcCeA.js
Alert-BjiZcCeA.js.map
align-C8fl12z_.js
align-C8fl12z_.js.map
align-floating-elements-CBhVmYjn.js
align-floating-elements-CBhVmYjn.js.map


---

## Assistant

_Thinking:_

Let me check `isMsgDefinedAndInputTouched` implementation and how the msg is rendered (only when touched?).

**Tool: shell**

**Input:**
```json
{
  "command": "sed -n '50,75p' node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js; echo '=== Callback enum ==='; cat node_modules/@public-ui/components/dist/types/schema/enums/*.d.ts 2>/dev/null | head -60; ls node_modules/@public-ui/components/dist/types/schema/enums"
}
```

            }
            if (isObject(value) && value !== null) {
                const desc = value._description;
                return isString(desc, 1);
            }
            return false;
        }, new Set(['MsgPropType', 'string']), value);
    });
};
function isMsgDefinedAndInputTouched(msg, touched) {
    return Boolean(msg) && touched === true;
}
function normalizeMsg(msg) {
    if (typeof msg === 'string') {
        try {
            return parseJson(msg);
        }
        catch (_a) {
            return { _description: msg, _type: 'error' };
        }
    }
    if (msg && typeof msg === 'object' && !('_type' in msg)) {
        return Object.assign(Object.assign({}, msg), { _type: 'error' });
    }
    return msg;
}
=== Callback enum ===
export declare enum Callback {
    onBlur = "onBlur",
    onChange = "onChange",
    onChangeHeaderCells = "onChangeHeaderCells",
    onChangePage = "onChangePage",
    onClick = "onClick",
    onClose = "onClose",
    onDblClick = "onDblClick",
    onFocus = "onFocus",
    onInput = "onInput",
    onKeyDown = "onKeyDown",
    onKeyPress = "onKeyPress",
    onKeyUp = "onKeyUp",
    onMouseDown = "onMouseDown",
    onMouseMove = "onMouseMove",
    onMouseOut = "onMouseOut",
    onMouseOver = "onMouseOver",
    onMouseUp = "onMouseUp",
    onReset = "onReset",
    onSelect = "onSelect",
    onSelectionChange = "onSelectionChange",
    onChangePageSize = "onChangePageSize",
    onSort = "onSort",
    onSubmit = "onSubmit",
    onToggle = "onToggle"
}
export * from './callback';
export * from './keyboard';
export declare enum KeyboardKey {
    ArrowDown = "ArrowDown",
    ArrowLeft = "ArrowLeft",
    ArrowRight = "ArrowRight",
    ArrowUp = "ArrowUp",
    Enter = "Enter",
    Space = " "
}
callback.d.ts
index.d.ts
keyboard.d.ts


---

## Assistant

_Thinking:_

Key finding: `_msg` is only shown when `_touched === true`. So error feedback requires setting `_touched`.

Now let's check how `_on` input callbacks receive values — `EventValueOrEventCallback<Event, unknown>`. Let's check how the input's value is delivered in `onChange`/`onInput`.

Also need to check how KolForm `_on.onSubmit` works — does it wrap a native form? Let's check the Form component implementation. And check KolCard props (label, heading).

Let me check callbacks type and Form implementation.

**Tool: shell**

**Input:**
```json
{
  "command": "cat node_modules/@public-ui/components/dist/types/schema/types/callbacks.d.ts; echo '=== FORM ==='; ls node_modules/@public-ui/components/dist/esm | grep -i form"
}
```

type Callback<T> = (event: T) => void;
export type EventCallback<E extends Event> = Callback<E>;
type EventValueCallback<E extends Event, V> = (event: E, value: V) => void;
export type EventValueOrEventCallback<E extends Event, V> = EventValueCallback<E, V> | EventCallback<E>;
export {};
=== FORM ===
FormFieldStateWrapper-CANKwnKv.js
FormFieldStateWrapper-CANKwnKv.js.map
kol-form.entry.js
kol-form.entry.js.map


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"onSubmit\" node_modules/@public-ui/components/dist/esm/kol-form*.js 2>/dev/null | head; ls node_modules/@public-ui/components/dist/esm | grep -i \"kol-form\\|Form\""
}
```

node_modules/@public-ui/components/dist/esm/kol-form.entry.js:33:        this.onSubmit = (event) => {
node_modules/@public-ui/components/dist/esm/kol-form.entry.js:36:            if (typeof ((_a = this.state._on) === null || _a === void 0 ? void 0 : _a.onSubmit) === 'function') {
node_modules/@public-ui/components/dist/esm/kol-form.entry.js:37:                (_b = this.state._on) === null || _b === void 0 ? void 0 : _b.onSubmit(event);
node_modules/@public-ui/components/dist/esm/kol-form.entry.js:68:        return (h("form", { class: "kol-form", method: "post", onSubmit: this.onSubmit, onReset: this.onReset, noValidate: true }, this.state._requiredText === true ? (h("p", { class: "kol-form__mandatory-fields-hint" }, this.translateFormDescription)) : typeof this.state._requiredText === 'string' && this.state._requiredText.length > 0 ? (h("p", { class: "kol-form__mandatory-fields-hint" }, this.state._requiredText)) : null, h("slot", null)));
FormFieldStateWrapper-CANKwnKv.js
FormFieldStateWrapper-CANKwnKv.js.map
kol-form.entry.js
kol-form.entry.js.map


---

## Assistant

_Thinking:_

KolForm renders a real `<form>` with `noValidate`, and calls `_on.onSubmit`. Good — so a submit button with `_type="submit"` inside KolForm will trigger submit. Let's check KolButton's type prop values (ButtonTypePropType) and how input's `_on` callbacks receive value.

Let me check button type prop and how onChange gets value.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"ButtonTypePropType\\|InputTypePropType\\|AlertVariantPropType\\|VisibilityTogglePropType\\|HeadingLevel\" node_modules/@public-ui/components/dist/types/schema/props/*.d.ts node_modules/@public-ui/components/dist/types/schema/types/*.d.ts 2>/dev/null | grep \"export type\" | head -20"
}
```

node_modules/@public-ui/components/dist/types/schema/props/button-type.d.ts:3:export type ButtonTypePropType = (typeof buttonTypePropTypeOptions)[number];
node_modules/@public-ui/components/dist/types/schema/props/variant-alert.d.ts:3:export type AlertVariantPropType = (typeof alertVariantOptions)[number];
node_modules/@public-ui/components/dist/types/schema/props/visibility-toggle.d.ts:3:export type VisibilityTogglePropType = boolean;


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"onInput\\|onChange\" node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js | head -20"
}
```

node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:109:            onChange: this.onChange.bind(this),
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:112:            onInput: this.onInput.bind(this),
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:210:    onChange(event, value) {
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:217:        if (typeof ((_a = this.component._on) === null || _a === void 0 ? void 0 : _a.onChange) === 'function') {
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:218:            this.component._on.onChange(event, value);
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:222:    onInput(event, shouldSetFormAssociatedValue = true, value) {
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:232:        if (typeof ((_a = this.component._on) === null || _a === void 0 ? void 0 : _a.onInput) === 'function') {
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:233:            this.component._on.onInput(event, value);


---

## Assistant

_Thinking:_

Let's check buttonTypePropTypeOptions and alertVariantOptions values, and also check how _value is set / whether inputs are controlled. Also check `_touched` semantics — msg shown only when touched===true.

Let me check the button type options and alert variant options.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"buttonTypePropTypeOptions\\s*=\" node_modules/@public-ui/components/dist/esm/*.js | head -3; grep -rn \"alertVariantOptions\\s*=\" node_modules/@public-ui/components/dist/esm/*.js | head -3; grep -rn \"msgTypeOptions\\|alertTypeOptions\\s*=\" node_modules/@public-ui/components/dist/esm/*.js | head -3; grep -rn \"variantOptions\\s*=\\|buttonVariant\" node_modules/@public-ui/components/dist/esm/*.js | head -5"
}
```

node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js:68:const buttonTypePropTypeOptions = ['button', 'reset', 'submit'];
node_modules/@public-ui/components/dist/esm/kol-alert-wc.entry.js:32:const alertVariantOptions = ['card', 'msg'];
node_modules/@public-ui/components/dist/esm/kol-alert-wc.entry.js:24:const alertTypeOptions = ['default', 'info', 'success', 'warning', 'error'];
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js:147:        this._variant = (_a = X('buttonVariantDefault', this.host)) !== null && _a !== void 0 ? _a : 'normal';
node_modules/@public-ui/components/dist/esm/kol-input-password.entry.js:93:            return (h(KolIconButtonFc, { componentName: "button", class: "kol-input-password__password-toggle-button kol-input-container__smart-button", "data-testid": "kol-input-password-toggle-button", label: this._passwordVisible ? this.translateHidePassword : this.translateShowPassword, buttonVariant: "ghost", onClick: () => {
node_modules/@public-ui/components/dist/esm/kol-input-text.entry.js:65:                }), "data-testid": "kol-input-text-clear-button", label: this.translateClearSearch, buttonVariant: "ghost", disabled: !canClear, onClick: () => {
node_modules/@public-ui/components/dist/esm/kol-link-button.entry.js:22:        this._variant = (_a = X('buttonVariantDefault', this.host)) !== null && _a !== void 0 ? _a : 'normal';
node_modules/@public-ui/components/dist/esm/kol-toolbar.entry.js:51:                _variant: (_a = X('buttonVariantDefault', this.host)) !== null && _a !== void 0 ? _a : 'normal',


**Tool: shell**

**Input:**
```json
{
  "command": "sed -n '200,245p' node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js"
}
```

        this.validateOn(this.component._on);
        this.validateTabIndex(this.component._tabIndex);
        this.validateVariant(this.component._variant);
        validateAccessAndShortKey(this.component._accessKey, this.component._shortKey);
    }
    emitEvent(type, value) {
        if (this.host) {
            dispatchDomEvent(this.host, type, value);
        }
    }
    onChange(event, value) {
        var _a;
        event.stopPropagation();
        if (typeof value === 'undefined') {
            value = event.target.value;
        }
        this.emitEvent(KolEvent.change, value);
        if (typeof ((_a = this.component._on) === null || _a === void 0 ? void 0 : _a.onChange) === 'function') {
            this.component._on.onChange(event, value);
        }
        this.valueChangeListeners.forEach((listener) => listener(value));
    }
    onInput(event, shouldSetFormAssociatedValue = true, value) {
        var _a;
        event.stopPropagation();
        if (typeof value === 'undefined') {
            value = event.target.value;
        }
        this.emitEvent(KolEvent.input, value);
        if (shouldSetFormAssociatedValue) {
            this.setFormAssociatedValue(value);
        }
        if (typeof ((_a = this.component._on) === null || _a === void 0 ? void 0 : _a.onInput) === 'function') {
            this.component._on.onInput(event, value);
        }
    }
    onClick(event) {
        var _a;
        this.emitEvent(KolEvent.click);
        if (typeof ((_a = this.component._on) === null || _a === void 0 ? void 0 : _a.onClick) === 'function') {
            this.component._on.onClick(event);
        }
    }
    onFocus(event) {
        var _a;
        if (!this.inputHasFocus) {


---

## Assistant

_Thinking:_

Good. Now I understand the API:

- `_on={{ onInput: (event, value) => ... }}` or onChange gives (event, value).
- `_msg={{ _description: '...', _type: 'error' }}` and `_touched: true` controls display.
- `_label` required for inputs.
- `_required`, `_name`, `_autoComplete`.
- KolForm with `_on={{ onSubmit: handler }}` renders a native `<form noValidate>`, so a KolButton `_type="submit"` will trigger it.
- KolAlert with `_alert` for live region announcement, `_type="error"`/`"success"`, `_variant="msg"` or `"card"`.
- KolCard for layout — check props.

Let me check KolCard props quickly, and also check how `_touched` works — msg shows only when touched is true. So I need to set `_touched` after submit attempt.

Also check errorList in KolForm: `{ message, selector }` where selector is a CSS selector or callback — scrolls to error.

Let me check KolCard.

Also need to check: is `_msg` `_description` required plus `_type`? MsgPropType = Omit<AlertProps, '_level'|'_on'|'_label'|'_hasCloser'|'_variant'> & {_description: string}. AlertProps presumably includes `_type`, `_alert`, `_variant`... Let's check AlertProps required fields.

Also check heading/label of KolCard.

**Tool: shell**

**Input:**
```json
{
  "command": "sed -n '535,585p' node_modules/@public-ui/components/dist/types/components.d.ts; echo '=== AlertProps ==='; cat node_modules/@public-ui/components/dist/types/schema/components/alert.d.ts 2>/dev/null"
}
```

    interface KolCard {
        /**
          * Defines whether the element can be closed.
          * @TODO : Change type back to `HasCloserPropType` after Stencil#4663 has been resolved.
          * @default false
         */
        "_hasCloser"?: boolean;
        /**
          * Sets the target URI of the link or citation source.
         */
        "_href"?: HrefPropType;
        /**
          * Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.).
         */
        "_label": LabelPropType;
        /**
          * Defines which H-level from 1-6 the heading has. 0 specifies no heading and is shown as bold text.
          * @default 0
         */
        "_level"?: HeadingLevel;
        /**
          * Defines the event callback functions for the component.
         */
        "_on"?: KoliBriCardEventCallbacks;
        /**
          * Defines where to open the link.
         */
        "_target"?: LinkTargetPropType;
        /**
          * Clicks the primary interactive element inside this component.
         */
        "click": () => Promise<void>;
        /**
          * Sets focus on the internal element.
         */
        "focus": (options?: KolFocusOptions) => Promise<void>;
    }
    /**
     * @example // Single card
     * <kol-card-wc _label="Card Title">Content here</kol-card-wc>
     * // Multiple cards (recommended)
     * <ul>
     *   <li><kol-card-wc _label="Card 1">Content 1</kol-card-wc></li>
     *   <li><kol-card-wc _label="Card 2">Content 2</kol-card-wc></li>
     * </ul>
     */
    interface KolCardWc {
        /**
          * Defines whether the element can be closed.
          * @TODO : Change type back to `HasCloserPropType` after Stencil#4663 has been resolved.
          * @default false
=== AlertProps ===
import type { Generic } from 'adopted-style-sheets';
import type { HeadingLevel, PropAlert, PropAlertType, PropAlertVariant, PropHasCloser, PropLabel } from '../props';
import type { EventCallback } from '../types';
export type KoliBriAlertEventCallbacks = {
    onClose?: EventCallback<Event>;
};
type RequiredAlertProps = NonNullable<unknown>;
type OptionalAlertProps = {
    level: HeadingLevel;
    on: KoliBriAlertEventCallbacks;
} & PropLabel & PropAlert & PropHasCloser & PropAlertType & PropAlertVariant;
type RequiredAlertStates = RequiredAlertProps;
type OptionalAlertStates = OptionalAlertProps;
export type InternalAlertProps = RequiredAlertProps & OptionalAlertProps;
export type AlertProps = Generic.Element.Members<RequiredAlertProps, OptionalAlertProps>;
export type AlertStates = Generic.Element.Members<RequiredAlertStates, OptionalAlertStates>;
export type AlertAPI = Generic.Element.ComponentApi<RequiredAlertProps, OptionalAlertProps, RequiredAlertStates, OptionalAlertStates>;
export {};


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"aria-live\\|role=\\\"alert\\\"\\|_alert\" node_modules/@public-ui/components/dist/esm/Alert-*.js | head -10; echo '=== formfieldmsg ==='; cat node_modules/@public-ui/components/dist/types/functional-components/FormFieldMsg/FormFieldMsg.d.ts"
}
```

=== formfieldmsg ===
import { type FunctionalComponent } from '../../stencil-public-runtime';
import type { JSXBase } from '../../stencil-public-runtime';
import { type AlertPropType, type IdPropType, type MsgPropType, type Stringified } from '../../schema';
type FormFieldMsgProps = JSXBase.HTMLAttributes<HTMLDivElement> & {
    alert?: AlertPropType;
    msg?: Stringified<MsgPropType>;
    id: IdPropType;
};
declare const FormFieldMsgFc: FunctionalComponent<FormFieldMsgProps>;
export default FormFieldMsgFc;


---

## Assistant

_Thinking:_

Let's check how `_msg` and `_touched` interact - the msg is only shown when touched === true. Let's check how alert is rendered (aria-live) and check the input's `_alert` prop.

Let me also check how FormFieldMsg renders alert.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"FormFieldMsgFc\" node_modules/@public-ui/components/dist/esm/*.js | head -3; echo '---'; grep -rn -A15 \"function FormFieldMsgFc\\|const FormFieldMsgFc\" node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js | head -30"
}
```

node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:334:const FormFieldMsgFc = (_a) => {
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:420:        }) })))), counter && !(counter.maxLengthBehavior === 'soft' && typeof counter.maxLength !== 'number') && (h("div", { class: "kol-form-field__counter" }, h("span", { "data-testid": "input-counter", "aria-hidden": "true", class: "kol-form-field__counter", ref: counter.visualRef }), h("span", { "aria-live": "polite", class: "visually-hidden", "data-testid": "input-counter-aria", id: createRelatedUniqueId(id, 'counter'), ref: counter.ariaRef }))), showMsg && !hideMsg && h(FormFieldMsgFc, Object.assign({}, (formFieldMsgProps || {}), { id: id, alert: alert, msg: msg })), showHint && h(KolFormFieldHintFc, Object.assign({}, (formFieldHintProps || {}), { id: id, hint: hint })), anotherChildren, typeof maxLength === 'number' && !counter && (h("span", { id: createRelatedUniqueId(id, 'character-limit-hint'), class: "visually-hidden" }, translate('kol-character-limit-hint', { placeholders: { limit: String(maxLength) } })))));
---
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:334:const FormFieldMsgFc = (_a) => {
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-335-    var _b, _c;
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-336-    var { alert, msg, id, class: classNames } = _a, other = __rest(_a, ["alert", "msg", "id", "class"]);
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-337-    const message = normalizeMsg(msg);
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-338-    return (h(KolAlertFc, Object.assign({ id: createRelatedUniqueId(id, 'msg'), alert: (_b = message === null || message === void 0 ? void 0 : message._alert) !== null && _b !== void 0 ? _b : alert, hasCloser: false, level: 0, type: (_c = message === null || message === void 0 ? void 0 : message._type) !== null && _c !== void 0 ? _c : 'error', variant: "msg", class: clsx('kol-form-field__msg', classNames) }, other), (message === null || message === void 0 ? void 0 : message._description) || undefined));
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-339-};
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-340-
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-341-const formFieldTooltipBehaviorPool = new Map();
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-342-const getFormFieldTooltipBehavior = (id) => {
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-343-    const tooltipBehavior = formFieldTooltipBehaviorPool.get(id);
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-344-    if (tooltipBehavior) {
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-345-        return tooltipBehavior;
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-346-    }
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-347-    const nextTooltipBehavior = new TooltipBehavior(BaseWebComponent.stateLess);
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-348-    nextTooltipBehavior.componentWillLoad({ label: '' });
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-349-    formFieldTooltipBehaviorPool.set(id, nextTooltipBehavior);


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"aria-live\\|role: 'alert'\\|role=\\\"alert\\\"\" node_modules/@public-ui/components/dist/esm/*.js | head -10"
}
```

node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:420:        }) })))), counter && !(counter.maxLengthBehavior === 'soft' && typeof counter.maxLength !== 'number') && (h("div", { class: "kol-form-field__counter" }, h("span", { "data-testid": "input-counter", "aria-hidden": "true", class: "kol-form-field__counter", ref: counter.visualRef }), h("span", { "aria-live": "polite", class: "visually-hidden", "data-testid": "input-counter-aria", id: createRelatedUniqueId(id, 'counter'), ref: counter.ariaRef }))), showMsg && !hideMsg && h(FormFieldMsgFc, Object.assign({}, (formFieldMsgProps || {}), { id: id, alert: alert, msg: msg })), showHint && h(KolFormFieldHintFc, Object.assign({}, (formFieldHintProps || {}), { id: id, hint: hint })), anotherChildren, typeof maxLength === 'number' && !counter && (h("span", { id: createRelatedUniqueId(id, 'character-limit-hint'), class: "visually-hidden" }, translate('kol-character-limit-hint', { placeholders: { limit: String(maxLength) } })))));
node_modules/@public-ui/components/dist/esm/kol-pagination-wc.entry.js:217:        return (h(Host, { class: "kol-pagination" }, h("span", { role: "status", "aria-live": "polite", class: "kol-pagination__entries" }, translate('kol-table-visible-range', {
node_modules/@public-ui/components/dist/esm/kol-progress.entry.js:59:        } }, variant === 'bar' && label && h("div", { class: "kol-progress__bar-label" }, label), createProgressSVG(variant, max, value), variant === 'cycle' && (h("div", { class: "kol-progress__cycle-text" }, label && h("div", { class: "kol-progress__cycle-label" }, label), h("div", { class: "kol-progress__cycle-value" }, `${displayValue} ${unit}`))), variant === 'bar' && (h("div", { class: "kol-progress__bar-value", style: { width: valueColumnWidth } }, displayValue)), variant === 'bar' && h("div", { class: "kol-progress__bar-unit" }, unit)), h("progress", { class: "visually-hidden", "aria-busy": value < max ? 'true' : 'false', max: max, value: value }), h("span", { "aria-live": "polite", "aria-relevant": "removals text", class: "visually-hidden" }, liveValueText)));
node_modules/@public-ui/components/dist/esm/kol-table-stateless-wc.entry.js:637:                return (h("td", { key: `cell-${key}-${this.settingsChangedCounter}`, class: clsx('kol-table__cell kol-table__cell--body', cell.textAlign && `kol-table__cell--align-${cell.textAlign}`, isActionColumn && 'kol-table__cell--actions', fixed && `kol-table__cell--sticky-${fixed}`), "aria-atomic": isNoEntriesHintCell ? 'false' : undefined, "aria-live": isNoEntriesHintCell ? 'polite' : undefined, "aria-relevant": isNoEntriesHintCell ? 'text' : undefined, colSpan: cell.colSpan, rowSpan: cell.rowSpan, style: {


---

## Assistant

_Thinking:_

Let me check KolAlertFc for role=alert / aria-live behavior.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn -B2 -A20 \"const KolAlertFc\" node_modules/@public-ui/components/dist/esm/*.js | head -40"
}
```

node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-61-    }
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-62-};
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js:63:const KolAlertFc = (props, children) => {
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-64-    const { class: classNames = {}, alert = false, hasCloser = false, label, level = 0, type = 'default', variant = 'msg', onAlertTimeout, onCloserClick } = props, other = __rest(props, ["class", "alert", "hasCloser", "label", "level", "type", "variant", "onAlertTimeout", "onCloserClick"]);
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-65-    const translateCloseAlert = translate('kol-close-alert');
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-66-    if (alert) {
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-67-        vibrateOnError();
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-68-        setTimeout(() => {
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-69-            onAlertTimeout === null || onAlertTimeout === void 0 ? void 0 : onAlertTimeout();
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-70-        }, 10000);
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-71-    }
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-72-    const BEM_CLASS_ROOT = alertBem({
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-73-        hasCloser: !!hasCloser,
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-74-        [`type-${type}`]: true,
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-75-        [`variant-${variant}`]: true,
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-76-    });
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-77-    const BEM_CLASS__HEADING = alertBem('heading', {
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-78-        [`h${level}`]: true,
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-79-    });
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-80-    const rootProps = Object.assign({ class: clsx(classNames, BEM_CLASS_ROOT) }, other);
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-81-    return (h("div", Object.assign({ role: alert ? 'alert' : undefined }, rootProps, { "data-testid": "alert" }), h(AlertIcon, { label: label, type: type }), label && (h(KolHeadingFc, { class: BEM_CLASS__HEADING, level: level, id: "heading" }, label)), hasCloser && (h(KolButtonWcTag, { class: BEM_CLASS_ALERT__CLOSER + ' kol-close-button', "data-testid": "alert-close-button", _ariaDescription: (label === null || label === void 0 ? void 0 : label.trim()) || '', _hideLabel: true, _icons: {
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-82-            left: {
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-83-                icon: 'kolicon-cross',


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"_alert\\b\" node_modules/@public-ui/components/dist/esm/Alert-*.js node_modules/@public-ui/components/dist/esm/kol-alert*.js 2>/dev/null | head -20; ls node_modules/@public-ui/components/dist/esm | grep -i alert"
}
```

node_modules/@public-ui/components/dist/esm/kol-alert-wc.entry.js:53:        this._alert = false;
node_modules/@public-ui/components/dist/esm/kol-alert-wc.entry.js:64:        const { _alert, _hasCloser, _label, _level, _type, _variant } = this.state;
node_modules/@public-ui/components/dist/esm/kol-alert-wc.entry.js:66:            alert: _alert,
node_modules/@public-ui/components/dist/esm/kol-alert-wc.entry.js:78:        watchBoolean(this, '_alert', value);
node_modules/@public-ui/components/dist/esm/kol-alert-wc.entry.js:103:        this.validateAlert(this._alert);
node_modules/@public-ui/components/dist/esm/kol-alert-wc.entry.js:113:        "_alert": ["validateAlert"],
node_modules/@public-ui/components/dist/esm/kol-alert.entry.js:13:        this._alert = false;
node_modules/@public-ui/components/dist/esm/kol-alert.entry.js:23:        return (h(KolAlertWcTag, { key: '721b696fb334639b5996187b75774aa357e7131c', _alert: this._alert, _hasCloser: this._hasCloser, _label: this._label, _level: this._level, _on: this._on, _type: this._type, _variant: this._variant }, h("slot", { key: '49b4a02832d1ce95880243eaeb88bab7211f8137' })));
node_modules/@public-ui/components/dist/esm/kol-alert.entry.js:30:export { KolAlert as kol_alert };
Alert-BjiZcCeA.js
Alert-BjiZcCeA.js.map
kol-alert-wc.entry.js
kol-alert-wc.entry.js.map
kol-alert.entry.js
kol-alert.entry.js.map


---

## Assistant

_Thinking:_

Good. Now let me check how `_alert` works — it sets role="alert" and auto-timeout after 10s. Also check the form's error list and how `_errorList` renders.

Let me also check how the KolForm renders error list and how inputs handle `_touched` and `_msg`.

Let me check how the form component renders error list.

**Tool: shell**

**Input:**
```json
{
  "command": "sed -n '1,80p' node_modules/@public-ui/components/dist/esm/kol-form.entry.js"
}
```

/*!
 * KoliBri - The accessible HTML-Standard
 */
import { r as registerInstance, h, H as Host, g as getElement } from './index-C_ZKddLG.js';
import { b as watchValidator, e as watchBoolean, g as watchString } from './common-D-vggmh2.js';
import { t as translate } from './i18n-CvFPh0g5.js';
import { c as KolLinkWcTag } from './component-names-DwvrfFak.js';
import { K as KolAlertFc } from './Alert-BjiZcCeA.js';
import { d as dispatchDomEvent, K as KolEvent } from './events-BhfZTW2e.js';
import './i18n-C73LqPIs.js';
import './tslib.es6-QNbPBOk5.js';
import './clsx-COFh-Vc8.js';
import './bem-registry-3ondDImf.js';
import './component-BjVFpeYY.js';
import './Heading-CNfXfPK2.js';

const validateErrorList = (component, value) => {
    watchValidator(component, 'errorList', (value) => Array.isArray(value) && value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined, new Set(['string', 'function']), value);
};

const defaultStyleCss = "@charset \"UTF-8\";\n/* forward the rem function */\n/*\n* This file defines the layer order for all CSS layers used in KoliBri.\n* The order is important as it determines the cascade priority.\n*\n* Layer order (lowest to highest priority):\n* 1. kol-a11y - Accessibility defaults and requirements\n* 2. kol-global - Global component styles and resets\n* 3. kol-component - Component-specific styles\n* 4. kol-theme-global - Theme-specific global styles\n* 5. kol-theme-component - Theme-specific component styles\n* 6. kol-forced-colors - Defaults for forced colors and high contrast modes\n* 7. kol-theme-forced-colors - Theme-specific styles for forced colors and high contrast modes\n*/\n@layer kol-a11y, kol-global, kol-component, kol-theme-global, kol-theme-component, kol-forced-colors, kol-theme-forced-colors;\n/*\n * This file contains all rules for accessibility.\n */\n@layer kol-a11y {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     *\n     * The `max(…, 44px)` floor guarantees the WCAG 2.5.5 (AAA) target size of 44px:\n     * `to-rem(44)` runs the value through a `calc()` rem round-trip which can lose\n     * sub-pixel precision and resolve to e.g. 43.99px depending on the browser's\n     * rounding, dropping just below the required minimum.\n     */\n    --a11y-min-size: max(calc(44 * 1rem / var(--kolibri-root-font-size, 16)), 44px);\n    /*\n     * No element should be used without verifying the contrast ratio of its background and font colors.\n     * By initially setting the background color to white and the font color to black,\n     * the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    --kol-a11y-font-color: black;\n    --kol-a11y-background-color: white;\n    color: var(--kol-a11y-font-color);\n    background-color: var(--kol-a11y-background-color);\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    --kol-a11y-font-family: Verdana;\n    font-family: var(--kol-a11y-font-family);\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n    /*\n     * Text should be aligned left by default to provide a predictable starting point.\n     */\n    text-align: left;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n  }\n  /*\n   * All interactive elements should have a minimum size of to-rem(44).\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  button,\n  .kol-input .input {\n    min-width: var(--a11y-min-size);\n    min-height: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the text color from his parent element.\n     */\n    color: inherit;\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /**\n  * Sometimes we need the semantic element for accessibility reasons,\n  * but we don't want to show it.\n  *\n  * - https://www.a11yproject.com/posts/how-to-hide-content/\n  */\n  .visually-hidden {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n    white-space: nowrap;\n    clip-path: inset(50%);\n  }\n}\n/*\n * This file contains all rules for forced-colors and highcontrast modes\n * https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/system-color to see all color keywords the browsers are providing\n */\n@layer kol-forced-colors {\n  @media (forced-colors: active) {\n    .kol-button__text {\n      color: ButtonText;\n      background-color: ButtonFace;\n      border: 2px solid ButtonBorder;\n    }\n    .kol-button--disabled .kol-button__text {\n      color: GrayText;\n      border-color: GrayText;\n    }\n    .kol-card,\n    .kol-dialog,\n    .kol-modal,\n    .kol-drawer {\n      color: CanvasText;\n      background-color: Canvas;\n      border: 1px solid ButtonBorder;\n    }\n    .kol-pagination__button--selected .kol-button {\n      opacity: 1;\n    }\n    .kol-pagination__button--selected .kol-button__text {\n      color: SelectedItemText;\n      background-color: SelectedItem;\n    }\n    /* focus styles */\n    .kol-button:focus-visible,\n    .kol-link__anchor:focus-visible {\n      outline: 2px solid Highlight;\n      outline-offset: 2px;\n    }\n  }\n}\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    border: none;\n    /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n  .badge-text-hint {\n    color: black;\n    background-color: white;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n    font-size: calc(16 * 1rem / var(--kolibri-root-font-size, 16));\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  .kol-span {\n    /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    justify-content: center;\n    /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  }\n  .kol-span__container {\n    display: flex;\n    align-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  .kol-span .kol-span__label--hide-label .kol-span__label {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    outline: none;\n    cursor: not-allowed;\n  }\n  [aria-disabled=true]:focus .kol-span,\n  [disabled]:focus .kol-span {\n    outline: none !important;\n  }\n  .hastooltip {\n    z-index: 900 !important;\n  }\n}\n@layer kol-component {\n  :host {\n    display: block;\n  }\n}\n@font-face {\n  font-family: \"kolicons\";\n  src: url(\"kolicons.eot?t=1788937554327\"); /* IE9*/\n  src: url(\"kolicons.eot?t=1788937554327#iefix\") format(\"embedded-opentype\"), url(\"kolicons.woff2?t=1788937554327\") format(\"woff2\"), url(\"kolicons.woff?t=1788937554327\") format(\"woff\"), url(\"kolicons.ttf?t=1788937554327\") format(\"truetype\"), url(\"kolicons.svg?t=1788937554327#kolicons\") format(\"svg\"); /* iOS 4.1- */\n}\n@layer kol-component {\n  [class^=kolicon-], [class*=\" kolicon-\"] {\n    font-family: \"kolicons\";\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1em;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  .kolicon-alert-error::before {\n    content: \"\\ea01\";\n  }\n  .kolicon-alert-info::before {\n    content: \"\\ea02\";\n  }\n  .kolicon-alert-success::before {\n    content: \"\\ea03\";\n  }\n  .kolicon-alert-warning::before {\n    content: \"\\ea04\";\n  }\n  .kolicon-check::before {\n    content: \"\\ea05\";\n  }\n  .kolicon-chevron-double-left::before {\n    content: \"\\ea06\";\n  }\n  .kolicon-chevron-double-right::before {\n    content: \"\\ea07\";\n  }\n  .kolicon-chevron-down::before {\n    content: \"\\ea08\";\n  }\n  .kolicon-chevron-left::before {\n    content: \"\\ea09\";\n  }\n  .kolicon-chevron-right::before {\n    content: \"\\ea0a\";\n  }\n  .kolicon-chevron-up::before {\n    content: \"\\ea0b\";\n  }\n  .kolicon-cogwheel::before {\n    content: \"\\ea0c\";\n  }\n  .kolicon-cross::before {\n    content: \"\\ea0d\";\n  }\n  .kolicon-eye-closed::before {\n    content: \"\\ea0e\";\n  }\n  .kolicon-eye::before {\n    content: \"\\ea0f\";\n  }\n  .kolicon-house::before {\n    content: \"\\ea10\";\n  }\n  .kolicon-kolibri::before {\n    content: \"\\ea11\";\n  }\n  .kolicon-link-external::before {\n    content: \"\\ea12\";\n  }\n  .kolicon-link::before {\n    content: \"\\ea13\";\n  }\n  .kolicon-minus::before {\n    content: \"\\ea14\";\n  }\n  .kolicon-plus::before {\n    content: \"\\ea15\";\n  }\n  .kolicon-settings::before {\n    content: \"\\ea16\";\n  }\n  .kolicon-sort-asc::before {\n    content: \"\\ea17\";\n  }\n  .kolicon-sort-desc::before {\n    content: \"\\ea18\";\n  }\n  .kolicon-sort-neutral::before {\n    content: \"\\ea19\";\n  }\n  .kolicon-up::before {\n    content: \"\\ea1a\";\n  }\n  .kolicon-version::before {\n    content: \"\\ea1b\";\n  }\n}\n@layer kol-component {\n  .kol-icon {\n    color: inherit;\n    display: inline-block;\n    font-size: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n  }\n  .kol-tooltip {\n    display: contents;\n  }\n  .kol-tooltip__floating {\n    opacity: 0;\n    display: none;\n    position: fixed;\n    /* Avoid layout interference - see https://floating-ui.com/docs/computePosition */\n    top: 0;\n    left: 0;\n    /* Can be used to specify the tooltip-width from the outside. Unset by default.  */\n    width: var(--kol-tooltip-width, max-content);\n    min-width: calc(8 * 1rem / var(--kolibri-root-font-size, 16));\n    max-width: 90vw;\n    max-height: 90vh;\n    animation-direction: normal;\n    /* Can be used to specify the animation duration from the outside. 250ms by default. */\n    animation-duration: var(--kolibri-tooltip-animation-duration, 250ms);\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: ease-in;\n  }\n  .kol-tooltip__floating.hide {\n    animation-name: hideTooltip;\n  }\n  .kol-tooltip__floating.show {\n    animation-name: showTooltip;\n  }\n  .kol-tooltip__arrow {\n    transform: rotate(45deg);\n    color: black;\n    background-color: white;\n    position: absolute;\n    z-index: 999;\n    width: calc(10 * 1rem / var(--kolibri-root-font-size, 16));\n    height: calc(10 * 1rem / var(--kolibri-root-font-size, 16));\n  }\n  .kol-tooltip__content {\n    color: black;\n    background-color: white;\n    position: relative;\n    z-index: 1000;\n  }\n  @keyframes hideTooltip {\n    0% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n      display: none;\n    }\n  }\n  @keyframes showTooltip {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n}\n@layer kol-component {\n  .kol-icon {\n    color: inherit;\n    display: inline-block;\n    font-size: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n  }\n  :host {\n    display: inline-block;\n  }\n  .kol-link {\n    display: inline-flex;\n    max-width: fit-content;\n  }\n  .kol-link--standalone {\n    min-width: var(--a11y-min-size);\n    min-height: var(--a11y-min-size);\n    align-items: stretch;\n    /* The anchor is the flex container positioning the text — it must stretch its\n       content so the text pill keeps the full standalone height. */\n  }\n  .kol-link--standalone .kol-link__anchor {\n    align-items: stretch;\n  }\n  .kol-link--standalone .kol-link__text {\n    display: inline-flex;\n    flex: 1 1 100%;\n    place-items: center;\n  }\n  .kol-link__anchor {\n    display: inline-flex;\n    flex: 1;\n    align-items: baseline;\n    place-items: center;\n    text-align: left;\n    text-decoration-line: none;\n  }\n  .kol-link__anchor:focus:not([aria-disabled], [disabled]) .kol-span__label, .kol-link__anchor:hover:not([aria-disabled], [disabled]) .kol-span__label {\n    text-decoration-thickness: 0.2em;\n  }\n  .kol-link {\n    /* Root-level label decoration: the button DOM (button-link) has no `__anchor`, so the\n       underline must be carried outside the anchor scope — as it was before the migration. */\n  }\n  .kol-link .kol-span__label {\n    text-decoration-line: underline;\n  }\n  .kol-link:focus:not([aria-disabled], [disabled]) .kol-span__label, .kol-link:hover:not([aria-disabled], [disabled]) .kol-span__label {\n    text-decoration-thickness: 0.2em;\n  }\n  .kol-link__icon {\n    display: inline-flex;\n  }\n  .kol-alert .kol-icon {\n    color: inherit;\n    display: inline-block;\n    font-size: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n  }\n  .kol-alert :host {\n    display: inline-block;\n  }\n  .kol-alert .kol-button {\n    display: flex;\n    height: 100%;\n    min-height: var(--a11y-min-size);\n    font-style: calc(16 * 1rem / var(--kolibri-root-font-size, 16));\n    text-decoration-line: none;\n  }\n  .kol-alert .kol-button::before {\n    /* Render zero-width character as first element to set the baseline correctly. */\n    content: \"​\";\n  }\n  .kol-alert .kol-button__text {\n    flex: 1 0 100%;\n  }\n  .kol-alert .kol-button {\n    /* The link skeleton renders the anchor as `.kol-link__anchor` inside the `.kol-link`\n       wrapper. The UA default underline sits on the anchor itself, so suppressing\n       `text-decoration` on the wrapper alone is not enough. The remaining declarations\n       restore the box the root element was before the skeleton migration. */\n  }\n  .kol-alert .kol-button__anchor {\n    display: flex;\n    text-align: left;\n    text-decoration-line: none;\n    /* The zero-width baseline character used to live on the root element, which was the\n       flex container positioning the text. In the link skeleton the anchor is that\n       container, so the character has to move with it — otherwise the text sits 1px off. */\n  }\n  .kol-alert .kol-button__anchor::before {\n    content: \"​\";\n  }\n  .kol-alert .kol-button--external-link > .kolicon-link-external::before, .kol-alert .kol-button--external-link .kol-button__anchor > .kolicon-link-external::before {\n    content: none;\n  }\n  .kol-alert {\n    display: grid;\n    grid-template-areas: \"icon heading close\" \"icon content close\";\n    grid-template-columns: min-content 1fr min-content;\n    grid-template-rows: min-content min-content;\n  }\n  .kol-alert__icon {\n    grid-area: icon;\n  }\n  .kol-alert__heading {\n    grid-area: heading;\n  }\n  .kol-alert__closer {\n    /* Visible with forced colors */\n    outline: transparent solid calc(1 * 1rem / var(--kolibri-root-font-size, 16));\n    grid-area: close;\n  }\n  .kol-alert__content {\n    grid-area: content;\n  }\n}";

const KolForm = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scrollOptionsFallback = {
            behavior: 'smooth',
            block: 'nearest',
        };
        this.translateErrorListMessage = translate('kol-error-list-message');
        this.translateErrorList = translate('kol-error-list');
        this.translateFormDescription = translate('kol-form-description');
        this.onSubmit = (event) => {
            var _a, _b;
            event.preventDefault();
            if (typeof ((_a = this.state._on) === null || _a === void 0 ? void 0 : _a.onSubmit) === 'function') {
                (_b = this.state._on) === null || _b === void 0 ? void 0 : _b.onSubmit(event);
            }
            if (this.host) {
                dispatchDomEvent(this.host, KolEvent.submit);
            }
        };
        this.onReset = (event) => {
            var _a, _b;
            event.preventDefault();
            if (typeof ((_a = this.state._on) === null || _a === void 0 ? void 0 : _a.onReset) === 'function') {
                (_b = this.state._on) === null || _b === void 0 ? void 0 : _b.onReset(event);
            }
            if (this.host) {
                dispatchDomEvent(this.host, KolEvent.reset);
            }
        };
        this.handleLinkClick = (selector, options) => {
            const targetElement = document.querySelector(selector);
            if (targetElement && typeof targetElement.focus === 'function') {
                targetElement.focus(options ? options : this.scrollOptionsFallback);
            }
        };
        this.setBlockElement = (el) => (this.errorListBlock = el);
        this.setFirstLinkElement = (el) => (this.errorListFirstLink = el);
        this._requiredText = true;
        this.state = {};
    }
    renderErrorList(errorList) {
        return (h(KolAlertFc, { class: "kol-form__alert", ref: this.setBlockElement, type: "error", variant: "card", label: this.translateErrorListMessage }, h("nav", { "aria-label": this.translateErrorList }, h("ul", null, errorList === null || errorList === void 0 ? void 0 : errorList.map((error, index) => (h("li", { key: index }, h(KolLinkWcTag, { class: "kol-form__link", _href: "", _label: error.message, _on: { onClick: typeof error.selector === 'string' ? () => this.handleLinkClick(String(error.selector), error.options) : error.selector }, ref: index === 0 ? this.setFirstLinkElement : undefined }))))))));
    }
    renderFormElement() {
        return (h("form", { class: "kol-form", method: "post", onSubmit: this.onSubmit, onReset: this.onReset, noValidate: true }, this.state._requiredText === true ? (h("p", { class: "kol-form__mandatory-fields-hint" }, this.translateFormDescription)) : typeof this.state._requiredText === 'string' && this.state._requiredText.length > 0 ? (h("p", { class: "kol-form__mandatory-fields-hint" }, this.state._requiredText)) : null, h("slot", null)));
    }
    render() {
        const hasErrorList = Array.isArray(this._errorList) && this._errorList.length > 0;
        return (h(Host, { key: 'c2b8fc8fe2e383c833b04a41eed66ffa3bf9391c' }, hasErrorList && this.renderErrorList(this._errorList), this.renderFormElement()));
    }
    scrollToErrorList(options) {
        setTimeout(() => {
            var _a, _b;
            (_b = (_a = this.errorListFirstLink) === null || _a === void 0 ? void 0 : _a.querySelector('a')) === null || _b === void 0 ? void 0 : _b.focus(options ? options : this.scrollOptionsFallback);
        }, 250);
    }
    async focusErrorList(options) {


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"errorList\" node_modules/@public-ui/components/dist/esm/kol-form.entry.js | head; echo '=== touched watch ==='; grep -rn \"watchBoolean(this, '_touched'\\|_touched =\" node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js | head"
}
```

node_modules/@public-ui/components/dist/esm/kol-form.entry.js:18:    watchValidator(component, 'errorList', (value) => Array.isArray(value) && value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined, new Set(['string', 'function']), value);
node_modules/@public-ui/components/dist/esm/kol-form.entry.js:59:        this.setBlockElement = (el) => (this.errorListBlock = el);
node_modules/@public-ui/components/dist/esm/kol-form.entry.js:60:        this.setFirstLinkElement = (el) => (this.errorListFirstLink = el);
node_modules/@public-ui/components/dist/esm/kol-form.entry.js:64:    renderErrorList(errorList) {
node_modules/@public-ui/components/dist/esm/kol-form.entry.js:65:        return (h(KolAlertFc, { class: "kol-form__alert", ref: this.setBlockElement, type: "error", variant: "card", label: this.translateErrorListMessage }, h("nav", { "aria-label": this.translateErrorList }, h("ul", null, errorList === null || errorList === void 0 ? void 0 : errorList.map((error, index) => (h("li", { key: index }, h(KolLinkWcTag, { class: "kol-form__link", _href: "", _label: error.message, _on: { onClick: typeof error.selector === 'string' ? () => this.handleLinkClick(String(error.selector), error.options) : error.selector }, ref: index === 0 ? this.setFirstLinkElement : undefined }))))))));
node_modules/@public-ui/components/dist/esm/kol-form.entry.js:71:        const hasErrorList = Array.isArray(this._errorList) && this._errorList.length > 0;
node_modules/@public-ui/components/dist/esm/kol-form.entry.js:72:        return (h(Host, { key: 'c2b8fc8fe2e383c833b04a41eed66ffa3bf9391c' }, hasErrorList && this.renderErrorList(this._errorList), this.renderFormElement()));
node_modules/@public-ui/components/dist/esm/kol-form.entry.js:77:            (_b = (_a = this.errorListFirstLink) === null || _a === void 0 ? void 0 : _a.querySelector('a')) === null || _b === void 0 ? void 0 : _b.focus(options ? options : this.scrollOptionsFallback);
node_modules/@public-ui/components/dist/esm/kol-form.entry.js:103:        this.validateErrorList(this._errorList);
node_modules/@public-ui/components/dist/esm/kol-form.entry.js:109:        "_errorList": ["validateErrorList"]
=== touched watch ===
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:261:            this.component._touched = true;
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:303:    const hasError = isMessageValidError && state._touched === true;


---

## Assistant

_Thinking:_

Let me check how `_touched` gets set — line 261 in FormFieldStateWrapper. Let's look at the context.

**Tool: shell**

**Input:**
```json
{
  "command": "sed -n '245,335p' node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js"
}
```

        if (!this.inputHasFocus) {
            this.emitEvent(KolEvent.focus);
            if (typeof ((_a = this.component._on) === null || _a === void 0 ? void 0 : _a.onFocus) === 'function') {
                this.component._on.onFocus(event);
            }
            this.inputHasFocus = true;
        }
    }
    onBlur(event) {
        var _a, _b;
        if (this.component._disabled) {
            return;
        }
        const root = ((_a = this.host) === null || _a === void 0 ? void 0 : _a.shadowRoot) || this.host;
        const isFocusInside = (root === null || root === void 0 ? void 0 : root.contains(event.relatedTarget)) || this.host === event.relatedTarget;
        if (this.inputHasFocus && !isFocusInside) {
            this.component._touched = true;
            this.emitEvent(KolEvent.blur);
            if (typeof ((_b = this.component._on) === null || _b === void 0 ? void 0 : _b.onBlur) === 'function') {
                this.component._on.onBlur(event);
            }
            this.inputHasFocus = false;
        }
    }
    onKeyDown(event) {
        var _a;
        this.emitEvent(KolEvent.keydown);
        if (typeof ((_a = this.component._on) === null || _a === void 0 ? void 0 : _a.onKeyDown) === 'function') {
            this.component._on.onKeyDown(event);
        }
    }
    addValueChangeListener(listener) {
        this.valueChangeListeners.push(listener);
    }
    hasSoftCharacterLimit() {
        return typeof this.component.state._maxLength === 'number' && this.component.state._maxLengthBehavior === 'soft';
    }
    hasCounter() {
        return this.component.state._hasCounter === true;
    }
}

function getDefaultProps({ ariaDescribedBy, hideLabel, label }) {
    return {
        title: '',
        autoCapitalize: 'off',
        autoCorrect: 'off',
        'aria-describedby': (ariaDescribedBy === null || ariaDescribedBy === void 0 ? void 0 : ariaDescribedBy.length) ? ariaDescribedBy.join(' ') : undefined,
        'aria-label': hideLabel && label ? label : undefined,
    };
}

const getRenderStates = (state) => {
    const msg = state._msg;
    const description = typeof msg === 'string' ? msg : msg === null || msg === void 0 ? void 0 : msg._description;
    const type = getMsgType(msg);
    const hasMessage = Boolean(description && description.length > 0);
    const isMessageValidError = type === 'error' && hasMessage;
    const hasError = isMessageValidError && state._touched === true;
    const hasHint = typeof state._hint === 'string' && state._hint.length > 0;
    const ariaDescribedBy = [];
    if (hasMessage && !state._hideMsg) {
        ariaDescribedBy.push(createRelatedUniqueId(state._id, 'msg'));
    }
    if (hasHint === true) {
        ariaDescribedBy.push(createRelatedUniqueId(state._id, 'hint'));
    }
    if (hasError === true) {
        ariaDescribedBy.push(createRelatedUniqueId(state._id, 'error'));
    }
    return { hasError, hasHint, ariaDescribedBy };
};

const KolFormFieldHintFc = (_a) => {
    var { id, class: classNames, hint, baseClassName = 'kol-form-field' } = _a, other = __rest(_a, ["id", "class", "hint", "baseClassName"]);
    if (!hint) {
        return null;
    }
    return (h("span", Object.assign({ class: clsx(`${baseClassName}__hint`, classNames), id: createRelatedUniqueId(id || '', 'hint') }, other), hint));
};

const KolFormFieldLabelFc = (_a) => {
    var { component: Component = 'label', id, baseClassName = 'kol-form-field', class: classNames, accessKey, shortKey, label, hideLabel, hasExpertSlot, showBadge = true, readOnly, infoPopover } = _a, other = __rest(_a, ["component", "id", "baseClassName", "class", "accessKey", "shortKey", "label", "hideLabel", "hasExpertSlot", "showBadge", "readOnly", "infoPopover"]);
    const useTooltipInsteadOfLabel = !hasExpertSlot && hideLabel;
    const translateReadOnly = translate('kol-readonly');
    const badgeText = showBadge === false ? undefined : buildBadgeTextString(accessKey, shortKey);
    return (h(Component, Object.assign({}, other, { class: clsx(`${baseClassName}__label`, classNames), id: !useTooltipInsteadOfLabel ? createRelatedUniqueId(id, 'label') : undefined, hidden: useTooltipInsteadOfLabel, htmlFor: id }), h(SpanFC, { class: `${baseClassName}__label-text`, label: hasExpertSlot ? '' : (label !== null && label !== void 0 ? label : ''), badgeText: badgeText }, h("slot", { name: "expert" })), !hasExpertSlot && readOnly && (h("span", { class: `${baseClassName}__label__read-only`, "aria-hidden": "true" }, "(", translateReadOnly, ")")), !hasExpertSlot && infoPopover && (h(KolPopoverButtonWcTag, Object.assign({ _variant: "ghost" }, infoPopover, { _hideLabel: true, _inline: true }), h("div", { class: "kol-popover-button__popover--styled" }, infoPopover._content)))));
};

const FormFieldMsgFc = (_a) => {
    var _b, _c;


---

## Assistant

_Thinking:_

Key insight: `_msg` is shown only when `_touched === true`. So error messages appear after blur (component sets `_touched` internally on blur) — but if we control `_touched` as a prop, the internal state may be overwritten. Let's check: the component sets `this.component._touched = true` on blur. If we pass `_touched` prop ourselves, it becomes part of state and validation would re-run on prop change.

Actually let me check how `_msg` and `_touched` props flow. In Stencil, `component._touched` — is that `state._touched`? Let's check `this.component` — the component's state object. In `onBlur` they set `this.component._touched = true`. If we pass `_touched` as prop, we'd need to keep it. Let's think about how the controller works — typically `_touched` prop is watched and set into state.

For safety: we can control `_msg` ourselves (only provide msg when we want to show the error), and also set `_touched` to true when we want to display. But careful: if component sets `_touched=true` on blur internally, and we later pass `_touched` explicitly, that's fine.

Actually there's a subtlety: if we pass `_touched={false}` explicitly after it was set internally true... but we won't do that.

Approach: after submit attempt, set `_msg` on failing fields and set `_touched` true. Actually since `getRenderStates` requires `hasMessage && !hideMsg` for aria-describedby and the msg renders via `showMsg && !hideMsg` where showMsg presumably = `isMsgDefinedAndInputTouched(msg, touched)`. Let's check `showMsg`.

Let me search for showMsg definition.

Also need to check how `_on` callbacks are passed in React — the React wrapper passes props to the custom element. For events like `onClick` on KolButton via `_on={{ onClick: ... }}`.

Also check how input value is controlled: `_value` prop plus `_on={{ onInput: (event, value) => ... }}`.

Let's check showMsg.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -n \"showMsg\\|showHint\" node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js | head; echo '=== input text entry ==='; sed -n '1,60p' node_modules/@public-ui/components/dist/esm/kol-input-text.entry.js"
}
```

378:    const showHint = !renderNoHint;
381:    const showMsg = isMsgDefinedAndInputTouched(msg, touched);
414:    if (showMsg) {
420:        }) })))), counter && !(counter.maxLengthBehavior === 'soft' && typeof counter.maxLength !== 'number') && (h("div", { class: "kol-form-field__counter" }, h("span", { "data-testid": "input-counter", "aria-hidden": "true", class: "kol-form-field__counter", ref: counter.visualRef }), h("span", { "aria-live": "polite", class: "visually-hidden", "data-testid": "input-counter-aria", id: createRelatedUniqueId(id, 'counter'), ref: counter.ariaRef }))), showMsg && !hideMsg && h(FormFieldMsgFc, Object.assign({}, (formFieldMsgProps || {}), { id: id, alert: alert, msg: msg })), showHint && h(KolFormFieldHintFc, Object.assign({}, (formFieldHintProps || {}), { id: id, hint: hint })), anotherChildren, typeof maxLength === 'number' && !counter && (h("span", { id: createRelatedUniqueId(id, 'character-limit-hint'), class: "visually-hidden" }, translate('kol-character-limit-hint', { placeholders: { limit: String(maxLength) } })))));
=== input text entry ===
/*!
 * KoliBri - The accessible HTML-Standard
 */
import { h, r as registerInstance, g as getElement } from './index-C_ZKddLG.js';
import { _ as __decorate } from './tslib.es6-QNbPBOk5.js';
import { c as clsx } from './clsx-COFh-Vc8.js';
import { F as FormFieldStateWrapper } from './FormFieldStateWrapper-CANKwnKv.js';
import { K as KolIconButtonFc, a as InputContainerStateWrapperFc } from './controller-icon-GPaN1UHM.js';
import { I as InputStateWrapper } from './InputStateWrapper-BJMqyY_8.js';
import { t as translate } from './i18n-CvFPh0g5.js';
import { C as CounterDomUpdater } from './counter-dom-updater-osLR7-G0.js';
import { a as createRelatedUniqueId, c as createUniqueId } from './dev.utils-Cib2ENyx.js';
import { d as delegateFocus, a as delegateClick, c as createCtaRef } from './element-interaction-C5-6aPzz.js';
import { p as propagateSubmitEventToForm } from './controller-D__mtOju.js';
import { a as InputTextController } from './controller-BFiUKKYT.js';
import './common-D-vggmh2.js';
import './associated.controller-FCQDejnI.js';
import './aria-details-hRfn8aN9.js';
import './aria-labelledby-6-ki3akM.js';
import './bootstrap-Bfno1qh2.js';
import './component-names-DwvrfFak.js';
import './i18n-C73LqPIs.js';
import './disabled-CL52u2mm.js';
import './hide-label-CRGm6KGP.js';
import './label-w3T7Y2ih.js';
import './tooltip-align-BQmLWbBy.js';
import './align-C8fl12z_.js';
import './variant-class-name-9qZ5egaq.js';
import './events-BhfZTW2e.js';
import './access-and-short-key-ijzCZfHm.js';
import './base-web-component-D909Fl-Y.js';
import './behavior-Co00uT-D.js';
import './align-floating-elements-CBhVmYjn.js';
import './tooltip-open-tracking-D3tCiiGP.js';
import './normalizers-BNeak4hj.js';
import './_Uint8Array-kJHDjtoP.js';
import './isArray-CcrBs4JM.js';
import './label-FtX-skKy.js';
import './variant-quote-ClYWonZq.js';
import './component-BXCnkVUN.js';
import './component-DepnuZGT.js';
import './bem-registry-3ondDImf.js';
import './component-BjVFpeYY.js';
import './Alert-BjiZcCeA.js';
import './Heading-CNfXfPK2.js';
import './icons-mXXqyviE.js';
import './Input-DyCv-etW.js';
import './element-focus-BQXzaLL9.js';
import './spell-check-6kYqpIpx.js';
import './suggestions-CKylTAKv.js';
import './controller-QfZ_zY-h.js';
import './auto-complete-C-QNfuIh.js';
import './placeholder-CmUUN-3U.js';
import './read-only-DyDY-E9H.js';
import './required-CGf-IRxL.js';

const defaultStyleCss = "@charset \"UTF-8\";\n/*\n* This file defines the layer order for all CSS layers used in KoliBri.\n* The order is important as it determines the cascade priority.\n*\n* Layer order (lowest to highest priority):\n* 1. kol-a11y - Accessibility defaults and requirements\n* 2. kol-global - Global component styles and resets\n* 3. kol-component - Component-specific styles\n* 4. kol-theme-global - Theme-specific global styles\n* 5. kol-theme-component - Theme-specific component styles\n* 6. kol-forced-colors - Defaults for forced colors and high contrast modes\n* 7. kol-theme-forced-colors - Theme-specific styles for forced colors and high contrast modes\n*/\n@layer kol-a11y, kol-global, kol-component, kol-theme-global, kol-theme-component, kol-forced-colors, kol-theme-forced-colors;\n/* forward the rem function */\n/*\n * This file contains all rules for accessibility.\n */\n@layer kol-a11y {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     *\n     * The `max(…, 44px)` floor guarantees the WCAG 2.5.5 (AAA) target size of 44px:\n     * `to-rem(44)` runs the value through a `calc()` rem round-trip which can lose\n     * sub-pixel precision and resolve to e.g. 43.99px depending on the browser's\n     * rounding, dropping just below the required minimum.\n     */\n    --a11y-min-size: max(calc(44 * 1rem / var(--kolibri-root-font-size, 16)), 44px);\n    /*\n     * No element should be used without verifying the contrast ratio of its background and font colors.\n     * By initially setting the background color to white and the font color to black,\n     * the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    --kol-a11y-font-color: black;\n    --kol-a11y-background-color: white;\n    color: var(--kol-a11y-font-color);\n    background-color: var(--kol-a11y-background-color);\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    --kol-a11y-font-family: Verdana;\n    font-family: var(--kol-a11y-font-family);\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n    /*\n     * Text should be aligned left by default to provide a predictable starting point.\n     */\n    text-align: left;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n  }\n  /*\n   * All interactive elements should have a minimum size of to-rem(44).\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  button,\n  .kol-input .input {\n    min-width: var(--a11y-min-size);\n    min-height: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the text color from his parent element.\n     */\n    color: inherit;\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /**\n  * Sometimes we need the semantic element for accessibility reasons,\n  * but we don't want to show it.\n  *\n  * - https://www.a11yproject.com/posts/how-to-hide-content/\n  */\n  .visually-hidden {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n    white-space: nowrap;\n    clip-path: inset(50%);\n  }\n}\n/*\n * This file contains all rules for forced-colors and highcontrast modes\n * https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/system-color to see all color keywords the browsers are providing\n */\n@layer kol-forced-colors {\n  @media (forced-colors: active) {\n    .kol-button__text {\n      color: ButtonText;\n      background-color: ButtonFace;\n      border: 2px solid ButtonBorder;\n    }\n    .kol-button--disabled .kol-button__text {\n      color: GrayText;\n      border-color: GrayText;\n    }\n    .kol-card,\n    .kol-dialog,\n    .kol-modal,\n    .kol-drawer {\n      color: CanvasText;\n      background-color: Canvas;\n      border: 1px solid ButtonBorder;\n    }\n    .kol-pagination__button--selected .kol-button {\n      opacity: 1;\n    }\n    .kol-pagination__button--selected .kol-button__text {\n      color: SelectedItemText;\n      background-color: SelectedItem;\n    }\n    /* focus styles */\n    .kol-button:focus-visible,\n    .kol-link__anchor:focus-visible {\n      outline: 2px solid Highlight;\n      outline-offset: 2px;\n    }\n  }\n}\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    border: none;\n    /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n  .badge-text-hint {\n    color: black;\n    background-color: white;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n    font-size: calc(16 * 1rem / var(--kolibri-root-font-size, 16));\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  .kol-span {\n    /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    justify-content: center;\n    /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  }\n  .kol-span__container {\n    display: flex;\n    align-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  .kol-span .kol-span__label--hide-label .kol-span__label {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    outline: none;\n    cursor: not-allowed;\n  }\n  [aria-disabled=true]:focus .kol-span,\n  [disabled]:focus .kol-span {\n    outline: none !important;\n  }\n  .hastooltip {\n    z-index: 900 !important;\n  }\n}\n@layer kol-component {\n  :host {\n    display: block;\n  }\n}\n@font-face {\n  font-family: \"kolicons\";\n  src: url(\"kolicons.eot?t=1788937554327\"); /* IE9*/\n  src: url(\"kolicons.eot?t=1788937554327#iefix\") format(\"embedded-opentype\"), url(\"kolicons.woff2?t=1788937554327\") format(\"woff2\"), url(\"kolicons.woff?t=1788937554327\") format(\"woff\"), url(\"kolicons.ttf?t=1788937554327\") format(\"truetype\"), url(\"kolicons.svg?t=1788937554327#kolicons\") format(\"svg\"); /* iOS 4.1- */\n}\n@layer kol-component {\n  [class^=kolicon-], [class*=\" kolicon-\"] {\n    font-family: \"kolicons\";\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1em;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  .kolicon-alert-error::before {\n    content: \"\\ea01\";\n  }\n  .kolicon-alert-info::before {\n    content: \"\\ea02\";\n  }\n  .kolicon-alert-success::before {\n    content: \"\\ea03\";\n  }\n  .kolicon-alert-warning::before {\n    content: \"\\ea04\";\n  }\n  .kolicon-check::before {\n    content: \"\\ea05\";\n  }\n  .kolicon-chevron-double-left::before {\n    content: \"\\ea06\";\n  }\n  .kolicon-chevron-double-right::before {\n    content: \"\\ea07\";\n  }\n  .kolicon-chevron-down::before {\n    content: \"\\ea08\";\n  }\n  .kolicon-chevron-left::before {\n    content: \"\\ea09\";\n  }\n  .kolicon-chevron-right::before {\n    content: \"\\ea0a\";\n  }\n  .kolicon-chevron-up::before {\n    content: \"\\ea0b\";\n  }\n  .kolicon-cogwheel::before {\n    content: \"\\ea0c\";\n  }\n  .kolicon-cross::before {\n    content: \"\\ea0d\";\n  }\n  .kolicon-eye-closed::before {\n    content: \"\\ea0e\";\n  }\n  .kolicon-eye::before {\n    content: \"\\ea0f\";\n  }\n  .kolicon-house::before {\n    content: \"\\ea10\";\n  }\n  .kolicon-kolibri::before {\n    content: \"\\ea11\";\n  }\n  .kolicon-link-external::before {\n    content: \"\\ea12\";\n  }\n  .kolicon-link::before {\n    content: \"\\ea13\";\n  }\n  .kolicon-minus::before {\n    content: \"\\ea14\";\n  }\n  .kolicon-plus::before {\n    content: \"\\ea15\";\n  }\n  .kolicon-settings::before {\n    content: \"\\ea16\";\n  }\n  .kolicon-sort-asc::before {\n    content: \"\\ea17\";\n  }\n  .kolicon-sort-desc::before {\n    content: \"\\ea18\";\n  }\n  .kolicon-sort-neutral::before {\n    content: \"\\ea19\";\n  }\n  .kolicon-up::before {\n    content: \"\\ea1a\";\n  }\n  .kolicon-version::before {\n    content: \"\\ea1b\";\n  }\n}\n@layer kol-component {\n  .kol-icon {\n    color: inherit;\n    display: inline-block;\n    font-size: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n  }\n  .kol-tooltip {\n    display: contents;\n  }\n  .kol-tooltip__floating {\n    opacity: 0;\n    display: none;\n    position: fixed;\n    /* Avoid layout interference - see https://floating-ui.com/docs/computePosition */\n    top: 0;\n    left: 0;\n    /* Can be used to specify the tooltip-width from the outside. Unset by default.  */\n    width: var(--kol-tooltip-width, max-content);\n    min-width: calc(8 * 1rem / var(--kolibri-root-font-size, 16));\n    max-width: 90vw;\n    max-height: 90vh;\n    animation-direction: normal;\n    /* Can be used to specify the animation duration from the outside. 250ms by default. */\n    animation-duration: var(--kolibri-tooltip-animation-duration, 250ms);\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: ease-in;\n  }\n  .kol-tooltip__floating.hide {\n    animation-name: hideTooltip;\n  }\n  .kol-tooltip__floating.show {\n    animation-name: showTooltip;\n  }\n  .kol-tooltip__arrow {\n    transform: rotate(45deg);\n    color: black;\n    background-color: white;\n    position: absolute;\n    z-index: 999;\n    width: calc(10 * 1rem / var(--kolibri-root-font-size, 16));\n    height: calc(10 * 1rem / var(--kolibri-root-font-size, 16));\n  }\n  .kol-tooltip__content {\n    color: black;\n    background-color: white;\n    position: relative;\n    z-index: 1000;\n  }\n  @keyframes hideTooltip {\n    0% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n      display: none;\n    }\n  }\n  @keyframes showTooltip {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n}\n@layer kol-component {\n  .kol-alert .kol-icon {\n    color: inherit;\n    display: inline-block;\n    font-size: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n  }\n  .kol-alert :host {\n    display: inline-block;\n  }\n  .kol-alert .kol-button {\n    display: flex;\n    height: 100%;\n    min-height: var(--a11y-min-size);\n    font-style: calc(16 * 1rem / var(--kolibri-root-font-size, 16));\n    text-decoration-line: none;\n  }\n  .kol-alert .kol-button::before {\n    /* Render zero-width character as first element to set the baseline correctly. */\n    content: \"​\";\n  }\n  .kol-alert .kol-button__text {\n    flex: 1 0 100%;\n  }\n  .kol-alert .kol-button {\n    /* The link skeleton renders the anchor as `.kol-link__anchor` inside the `.kol-link`\n       wrapper. The UA default underline sits on the anchor itself, so suppressing\n       `text-decoration` on the wrapper alone is not enough. The remaining declarations\n       restore the box the root element was before the skeleton migration. */\n  }\n  .kol-alert .kol-button__anchor {\n    display: flex;\n    text-align: left;\n    text-decoration-line: none;\n    /* The zero-width baseline character used to live on the root element, which was the\n       flex container positioning the text. In the link skeleton the anchor is that\n       container, so the character has to move with it — otherwise the text sits 1px off. */\n  }\n  .kol-alert .kol-button__anchor::before {\n    content: \"​\";\n  }\n  .kol-alert .kol-button--external-link > .kolicon-link-external::before, .kol-alert .kol-button--external-link .kol-button__anchor > .kolicon-link-external::before {\n    content: none;\n  }\n  .kol-alert {\n    display: grid;\n    grid-template-areas: \"icon heading close\" \"icon content close\";\n    grid-template-columns: min-content 1fr min-content;\n    grid-template-rows: min-content min-content;\n  }\n  .kol-alert__icon {\n    grid-area: icon;\n  }\n  .kol-alert__heading {\n    grid-area: heading;\n  }\n  .kol-alert__closer {\n    /* Visible with forced colors */\n    outline: transparent solid calc(1 * 1rem / var(--kolibri-root-font-size, 16));\n    grid-area: close;\n  }\n  .kol-alert__content {\n    grid-area: content;\n  }\n  .kol-form-field .kol-popover-button__popover {\n    margin: 0;\n    padding: 0;\n    border: 0;\n  }\n  .kol-form-field .kol-popover-button--open .kol-button__tooltip {\n    display: none;\n  }\n  .kol-form-field .kol-popover-button--inline {\n    display: inline-block;\n  }\n  .kol-form-field .kol-popover-button--inline__button {\n    display: inline;\n  }\n  .kol-form-field .kol-popover-button--inline .kol-button {\n    min-width: 0;\n    min-height: 1em;\n  }\n  .kol-form-field .kol-popover {\n    opacity: 0;\n    transition: 0.2s ease-out opacity;\n  }\n  .kol-form-field .kol-popover-button--open + .kol-popover {\n    opacity: 1;\n  }\n  .kol-form-field {\n    display: grid;\n  }\n  .kol-form-field:not(.kol-form-field--disabled) .kol-form-field__label {\n    cursor: pointer;\n  }\n  .kol-form-field__label-text {\n    flex-flow: row;\n    align-items: flex-start;\n    justify-content: flex-start;\n  }\n  .kol-form-field--required .kol-form-field__label-text:has(.kol-span__slot[hidden]) .kol-span__label::after,\n  .kol-form-field--required .kol-form-field .kol-tooltip__content .kol-span__label::after {\n    content: \"*\"/\"\";\n  }\n  .kol-input-container {\n    background-color: transparent;\n    display: grid;\n    position: relative;\n    width: 100%;\n    min-width: var(--a11y-min-size);\n    min-height: var(--a11y-min-size);\n    align-items: center;\n    grid-template-columns: 1fr;\n  }\n  .kol-input-container:has(> .kol-input-container__adornment--start) {\n    grid-template-columns: auto 1fr auto;\n  }\n  .kol-input-container__container {\n    position: relative;\n    z-index: 1;\n  }\n  .kol-input-container__adornment {\n    display: flex;\n    align-items: center;\n  }\n  .kol-input-container__adornment .kol-icon {\n    display: grid;\n    place-items: center;\n  }\n  .kol-input {\n    background-color: transparent;\n    width: 100%;\n    min-width: var(--a11y-min-size);\n  }\n  input[type=search]::-webkit-search-cancel-button {\n    display: none;\n  }\n  .kol-input-text__clear-button--hidden {\n    display: none;\n  }\n}";

const KolInputText = class {
    getClearButton() {


---

## Assistant

_Thinking:_

I have a good picture now. Key facts:

- `_msg` only shows when `_touched === true` (KoliBri's `isMsgDefinedAndInputTouched`). The component sets `_touched = true` internally on blur. Also we can pass `_touched` ourselves.
- Actually let's check: does passing `_touched` as a prop work? Yes, it's a prop. But careful — the component sets `this.component._touched = true` on blur. If we control `_touched` prop from React, re-renders might reset it. Best practice: set `_touched` after submit attempt, and also let internal blur set it. Hmm, if React re-renders with `_touched={false}`, it would override. So we should manage touched state ourselves: track it in React state and pass it.

Actually, careful: when we pass `_touched` prop and also the component sets internal state `_touched = true` on blur — with Stencil, `this.component._touched` — is `component` the host element itself? Let's check. In `onBlur`, `this.component._touched = true`. If component is the host element, it sets the attribute-ish property. Then a React re-render with `_touched` prop would call validate. If we pass `_touched` explicitly, React will only re-set when the value changes... actually React re-renders set props on each render? React sets property only if changed (for custom elements, React sets attribute if value differs from previous render's value). Hmm, React DOM for custom elements: React 19 sets properties/attributes on every commit where prop changed. It tracks previous props. So if `_touched` stays `false` across renders, React won't re-set it (it compares to previous props value). So the internal mutation to true persists. Good — but it's safer to manage touched ourselves.

Simplest robust design:
- Track values and `submitted`/`touched` state in React.
- On submit: validate; set `errors` map; set `touched` all true; set `_msg` per field with `_type: 'error'` and `_description`.
- On change: clear that field's error.

Also `KolForm` `_errorList` gives an error summary with links that focus fields via `document.querySelector(selector)` → needs ids on inputs. Do KolInputText components accept an `id`? The React wrapper passes props to the custom element... There's no `_id` prop in the interface. The inner input gets an internally generated id. Hmm. The errorList selector uses `document.querySelector(selector)` and `.focus()`. The kol-input-text host is a custom element — does it have a `focus()` method? Yes! `focus: (options?) => Promise<void>`. But `document.querySelector('#foo')` needs an id on the host. Can we set `id` attribute on the React wrapper? The React component passes HTMLAttributes, so `id` would be applied to the host element probably. Let's check the React wrapper implementation.

Also `required` badge: KoliBri shows "*" automatically for required fields.

Also, note: `KolForm` renders `<form noValidate>` and calls `event.preventDefault()`.

Button `_type="submit"` submits the form. Does a KolButton inside the shadow DOM of... no, KolForm's form is in light DOM (rendered via slot? Actually `renderFormElement` renders `<form class="kol-form">...<slot/></form>` in shadow root — the slot means children of kol-form (light DOM) are slotted into the form). So submit buttons inside kol-form light DOM participate. KolButton renders a real `<button type="submit">` inside its shadow DOM — clicking submits the form. Good.

Does `KolButton` onClick `_on` get called? We can use `_type="submit"` and let KolForm's `_on.onSubmit` handle it. That's cleaner.

Let's check React wrapper to see how props/events are passed.

Also need to check: does `KolInputPassword` `_on.onInput` give `(event, value)`.

Let's check the React wrapper index.mjs.

**Tool: shell**

**Input:**
```json
{
  "command": "cat node_modules/@public-ui/react-v19/dist/index.mjs | head -120"
}
```

import React, { createElement } from 'react';

const dashToPascalCase = (str) => str.toLowerCase().split("-").map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1)).join("");
const camelToDashCase = (str) => str.replace(/([A-Z])/g, (m) => `-${m[0].toLowerCase()}`);

const attachProps = (node, newProps, oldProps = {}) => {
  if (node instanceof Element) {
    const className = getClassName(node.classList, newProps, oldProps);
    if (className !== "") {
      node.className = className;
    }
    Object.keys(newProps).forEach((name) => {
      if (name === "children" || name === "style" || name === "ref" || name === "class" || name === "className" || name === "forwardedRef") {
        return;
      }
      if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
        const eventName = name.substring(2);
        const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);
        if (!isCoveredByReact(eventNameLc)) {
          syncEvent(node, eventNameLc, newProps[name]);
        }
      } else {
        node[name] = newProps[name];
        const propType = typeof newProps[name];
        if (propType === "string") {
          node.setAttribute(camelToDashCase(name), newProps[name]);
        }
      }
    });
  }
};
const getClassName = (classList, newProps, oldProps) => {
  const newClassProp = newProps.className || newProps.class;
  const oldClassProp = oldProps.className || oldProps.class;
  const currentClasses = arrayToMap(classList);
  const incomingPropClasses = arrayToMap(newClassProp ? newClassProp.split(" ") : []);
  const oldPropClasses = arrayToMap(oldClassProp ? oldClassProp.split(" ") : []);
  const finalClassNames = [];
  currentClasses.forEach((currentClass) => {
    if (incomingPropClasses.has(currentClass)) {
      finalClassNames.push(currentClass);
      incomingPropClasses.delete(currentClass);
    } else if (!oldPropClasses.has(currentClass)) {
      finalClassNames.push(currentClass);
    }
  });
  incomingPropClasses.forEach((s) => finalClassNames.push(s));
  return finalClassNames.join(" ");
};
const transformReactEventName = (eventNameSuffix) => {
  switch (eventNameSuffix) {
    case "doubleclick":
      return "dblclick";
  }
  return eventNameSuffix;
};
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
const isCoveredByReact = (eventNameSuffix) => {
  if (typeof document === "undefined") {
    return true;
  } else {
    const eventName = "on" + transformReactEventName(eventNameSuffix);
    let isSupported = eventName in document;
    if (!isSupported) {
      const element = document.createElement("div");
      element.setAttribute(eventName, "return;");
      isSupported = typeof element[eventName] === "function";
    }
    return isSupported;
  }
};
const syncEvent = (node, eventName, newEventHandler) => {
  const eventStore = node.__events || (node.__events = {});
  const oldEventHandler = eventStore[eventName];
  if (oldEventHandler) {
    node.removeEventListener(eventName, oldEventHandler);
  }
  node.addEventListener(
    eventName,
    eventStore[eventName] = function handler(e) {
      if (newEventHandler) {
        newEventHandler.call(this, e);
      }
    }
  );
};
const arrayToMap = (arr) => {
  const map = /* @__PURE__ */ new Map();
  arr.forEach((s) => map.set(s, s));
  return map;
};

let tagNameTransformer;
const setTagNameTransformer = (_tagNameTransformer) => {
  tagNameTransformer = _tagNameTransformer;
};

const setRef = (ref, value) => {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref != null) {
    ref.current = value;
  }
};
const mergeRefs = (...refs) => {
  return (value) => {
    refs.forEach((ref) => {
      setRef(ref, value);
    });
  };
};
const createForwardRef = (ReactComponent, displayName) => {
  const forwardRef = (props, ref) => {
    return /* @__PURE__ */ React.createElement(ReactComponent, { ...props, forwardedRef: ref });
  };
  forwardRef.displayName = displayName;
  return React.forwardRef(forwardRef);


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"propagateSubmitEventToForm\" -A20 node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js | head -40; echo '=== KoliBriFormCallbacks usage ==='; grep -rn \"requiredText\\|_requiredText\" node_modules/@public-ui/components/dist/esm/kol-form.entry.js | head"
}
```

node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js:56:const propagateSubmitEventToForm = (options = {}) => {
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-57-    const form = searchFormElement(options.form);
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-58-    if (form instanceof HTMLElement) {
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-59-        const event = new SubmitEvent('submit', {
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-60-            bubbles: true,
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-61-            cancelable: true,
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-62-            submitter: form,
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-63-        });
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-64-        if (form.tagName === 'FORM') {
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-65-            if (getExperimentalMode() && form.noValidate === false) {
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-66-                devHint(`If you have not focusable or hidden form fields in your form, you should enable noValidate for your form.`, {
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-67-                    force: true,
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-68-                });
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-69-            }
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-70-            setTimeout(() => {
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-71-                if (typeof form.requestSubmit === 'function') {
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-72-                    form.requestSubmit();
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-73-                }
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-74-                else {
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-75-                    setEventTarget(event, form);
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-76-                    form.dispatchEvent(event);
--
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js:93:export { propagateResetEventToForm as a, propagateSubmitEventToForm as p };
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-94-//# sourceMappingURL=controller-D__mtOju.js.map
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-95-
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-96-//# sourceMappingURL=controller-D__mtOju.js.map
=== KoliBriFormCallbacks usage ===
node_modules/@public-ui/components/dist/esm/kol-form.entry.js:61:        this._requiredText = true;
node_modules/@public-ui/components/dist/esm/kol-form.entry.js:68:        return (h("form", { class: "kol-form", method: "post", onSubmit: this.onSubmit, onReset: this.onReset, noValidate: true }, this.state._requiredText === true ? (h("p", { class: "kol-form__mandatory-fields-hint" }, this.translateFormDescription)) : typeof this.state._requiredText === 'string' && this.state._requiredText.length > 0 ? (h("p", { class: "kol-form__mandatory-fields-hint" }, this.state._requiredText)) : null, h("slot", null)));
node_modules/@public-ui/components/dist/esm/kol-form.entry.js:91:            watchBoolean(this, '_requiredText', value);
node_modules/@public-ui/components/dist/esm/kol-form.entry.js:94:            watchString(this, '_requiredText', value);
node_modules/@public-ui/components/dist/esm/kol-form.entry.js:102:        this.validateRequiredText(this._requiredText);
node_modules/@public-ui/components/dist/esm/kol-form.entry.js:108:        "_requiredText": ["validateRequiredText"],


---

## Assistant

_Thinking:_

Important: the React wrapper's `attachProps` — for `_on` prop, it does `node[name] = newProps[name]`, so `_on={{...}}` is set as a property on the custom element. Good.

Also for events: `name.indexOf("on") === 0 && name[2] === uppercase` — `_on` doesn't start with "on" (starts with `_`), so it's set as property. Good.

Now, how does the input receive `_value`? It's a property.

Note: the React wrapper sets `node[name] = value` for all props, and for strings also sets attribute with dash-case name (`_on` -> `_on`? camelToDashCase("_on") -> "_-on"? Actually camelToDashCase only replaces uppercase letters. "_on" has no uppercase, so stays "_on". But value must be string for setAttribute — `propType === "string"`. For `_label` string, sets attribute `_label`. Fine.

Wait — there's a subtlety: Stencil props work via attribute or property. Property assignment works.

Now let me check how the msg/_touched interplay works and whether `_touched` can be set externally. `this.component._touched = true` on blur — this is internal state. When React sets `_touched` prop, it triggers validation `watchBoolean(this, '_touched', ...)`? Let's check if `_touched` is watched/validated. Let me grep.

Also need to check `KolInputText` `_msg` handling: `_msg` prop set → validateMsg → state._msg. And showMsg = isMsgDefinedAndInputTouched(msg, touched). So message only shows when touched === true. Since component sets touched=true on blur automatically, but for a submit with untouched fields, we should set `_touched` ourselves.

Let's check whether `_touched` prop is watched on inputs.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"'_touched'\" node_modules/@public-ui/components/dist/esm/*.js | head -10"
}
```

node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:85:    watchBoolean(component, '_touched', value);
node_modules/@public-ui/components/dist/esm/InputStateWrapper-BJMqyY_8.js:61:    if ('_touched' in state)
node_modules/@public-ui/components/dist/esm/kol-input-checkbox.entry.js:156:    if ('_touched' in state)
node_modules/@public-ui/components/dist/esm/kol-input-radio.entry.js:76:    if ('_touched' in state)


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"watchId\\|_id\\b\" node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js | head -20; echo '=== id prop? ==='; grep -rn \"_id\" node_modules/@public-ui/components/dist/types/components.d.ts | head -5"
}
```

node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:307:        ariaDescribedBy.push(createRelatedUniqueId(state._id, 'msg'));
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:310:        ariaDescribedBy.push(createRelatedUniqueId(state._id, 'hint'));
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:313:        ariaDescribedBy.push(createRelatedUniqueId(state._id, 'error'));
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:389:        tooltipBehavior.watchId(labelId);
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:425:        id: state._id,
=== id prop? ===
node_modules/@public-ui/components/dist/types/components.d.ts:468:        "_id"?: IdPropType;
node_modules/@public-ui/components/dist/types/components.d.ts:3000:        "_id"?: IdPropType;
node_modules/@public-ui/components/dist/types/components.d.ts:4032:        "_id"?: IdPropType;


---

## Assistant

_Thinking:_

The `_id` prop exists on some components (line 468 — probably KolInputText-ish? Let's check which interface line 468 is in). Line 468 falls in KolButtonWc (421-535)? Actually 468 is inside KolButtonWc (421 to 535). Hmm. Let's check what interfaces have `_id`.

Actually inputs generate their own `_id` internally. Let's check if inputs accept `_id`.

grep "_id" in components.d.ts gave only 3 matches at 468, 3000, 4032. Line 3000 is in KolPopoverButtonWc area (2969-3070), 4032 in KolTooltipWc. So inputs do NOT have a public `_id` prop — they generate internal ids.

So the errorList `selector` for focusing fields: `document.querySelector(selector)` — we need an id to target. Since inputs don't accept an id prop publicly... but we could set an `id` attribute on the custom element host directly via React (HTMLAttributes allows `id`). The React wrapper's attachProps: for `id`, it's not an event, so `node[name] = newProps[name]` sets property `id` on the element — for custom elements, setting `.id` property reflects to the `id` attribute. That works. Then `document.querySelector('#username')` returns the host element `<kol-input-text id="username">`. `.focus()` method exists on the host (declared `focus()` method). And `typeof targetElement.focus === 'function'` → true. Good.

Wait — but does the react wrapper pass through `id`? `attachProps` skips only children/style/ref/class/className/forwardedRef. `id` passes through. Also in createElement, React would set `id` as attribute natively too... Actually the wrapper creates a custom React component; let's see how it renders — createElement with the tag? Let's check rest of index.mjs.

Let me read the rest.

**Tool: shell**

**Input:**
```json
{
  "command": "sed -n '120,220p' node_modules/@public-ui/react-v19/dist/index.mjs"
}
```

  return React.forwardRef(forwardRef);
};

const createReactComponent = (tagName, ReactComponentContext, manipulatePropsFunction, defineCustomElement) => {
  const displayName = dashToPascalCase(tagName);
  const ReactComponent = class extends React.Component {
    componentEl;
    setComponentElRef = (element) => {
      this.componentEl = element;
    };
    constructor(props) {
      super(props);
    }
    componentDidMount() {
      this.componentDidUpdate(this.props);
    }
    componentDidUpdate(prevProps) {
      attachProps(this.componentEl, this.props, prevProps);
    }
    render() {
      const { children, forwardedRef, style, className, ref, ...cProps } = this.props;
      let propsToPass = Object.keys(cProps).reduce((acc, name) => {
        const value = cProps[name];
        if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
          const eventName = name.substring(2).toLowerCase();
          if (typeof document !== "undefined" && isCoveredByReact(eventName)) {
            acc[name] = value;
          }
        } else {
          const type = typeof value;
          if (type === "string" || type === "boolean" || type === "number") {
            acc[camelToDashCase(name)] = value;
          }
        }
        return acc;
      }, {});
      const newProps = {
        ...propsToPass,
        ref: mergeRefs(forwardedRef, this.setComponentElRef),
        style
      };
      const newTagName = typeof tagNameTransformer === "function" ? tagNameTransformer(tagName) : tagName;
      return createElement(newTagName, newProps, children);
    }
    static get displayName() {
      return displayName;
    }
  };
  return createForwardRef(ReactComponent, displayName);
};

const KolAbbr = /* @__PURE__ */ createReactComponent("kol-abbr");
const KolAccordion = /* @__PURE__ */ createReactComponent("kol-accordion");
const KolAlert = /* @__PURE__ */ createReactComponent("kol-alert");
const KolAvatar = /* @__PURE__ */ createReactComponent("kol-avatar");
const KolBadge = /* @__PURE__ */ createReactComponent("kol-badge");
const KolBreadcrumb = /* @__PURE__ */ createReactComponent("kol-breadcrumb");
const KolButton = /* @__PURE__ */ createReactComponent("kol-button");
const KolButtonLink = /* @__PURE__ */ createReactComponent("kol-button-link");
const KolCard = /* @__PURE__ */ createReactComponent("kol-card");
const KolCombobox = /* @__PURE__ */ createReactComponent("kol-combobox");
const KolDetails = /* @__PURE__ */ createReactComponent("kol-details");
const KolDialog = /* @__PURE__ */ createReactComponent("kol-dialog");
const KolDrawer = /* @__PURE__ */ createReactComponent("kol-drawer");
const KolForm = /* @__PURE__ */ createReactComponent("kol-form");
const KolHeading = /* @__PURE__ */ createReactComponent("kol-heading");
const KolIcon = /* @__PURE__ */ createReactComponent("kol-icon");
const KolImage = /* @__PURE__ */ createReactComponent("kol-image");
const KolInputCheckbox = /* @__PURE__ */ createReactComponent("kol-input-checkbox");
const KolInputColor = /* @__PURE__ */ createReactComponent("kol-input-color");
const KolInputDate = /* @__PURE__ */ createReactComponent("kol-input-date");
const KolInputEmail = /* @__PURE__ */ createReactComponent("kol-input-email");
const KolInputFile = /* @__PURE__ */ createReactComponent("kol-input-file");
const KolInputNumber = /* @__PURE__ */ createReactComponent("kol-input-number");
const KolInputPassword = /* @__PURE__ */ createReactComponent("kol-input-password");
const KolInputRadio = /* @__PURE__ */ createReactComponent("kol-input-radio");
const KolInputRange = /* @__PURE__ */ createReactComponent("kol-input-range");
const KolInputText = /* @__PURE__ */ createReactComponent("kol-input-text");
const KolKolibri = /* @__PURE__ */ createReactComponent("kol-kolibri");
const KolLink = /* @__PURE__ */ createReactComponent("kol-link");
const KolLinkButton = /* @__PURE__ */ createReactComponent("kol-link-button");
const KolMeter = /* @__PURE__ */ createReactComponent("kol-meter");
const KolModal = /* @__PURE__ */ createReactComponent("kol-modal");
const KolNav = /* @__PURE__ */ createReactComponent("kol-nav");
const KolPagination = /* @__PURE__ */ createReactComponent("kol-pagination");
const KolPopoverButton = /* @__PURE__ */ createReactComponent("kol-popover-button");
const KolProgress = /* @__PURE__ */ createReactComponent("kol-progress");
const KolQuote = /* @__PURE__ */ createReactComponent("kol-quote");
const KolSelect = /* @__PURE__ */ createReactComponent("kol-select");
const KolSingleSelect = /* @__PURE__ */ createReactComponent("kol-single-select");
const KolSkeleton = /* @__PURE__ */ createReactComponent("kol-skeleton");
const KolSkipNav = /* @__PURE__ */ createReactComponent("kol-skip-nav");
const KolSpin = /* @__PURE__ */ createReactComponent("kol-spin");
const KolSplitButton = /* @__PURE__ */ createReactComponent("kol-split-button");
const KolTableStateful = /* @__PURE__ */ createReactComponent("kol-table-stateful");
const KolTableStateless = /* @__PURE__ */ createReactComponent("kol-table-stateless");
const KolTabs = /* @__PURE__ */ createReactComponent("kol-tabs");
const KolTextarea = /* @__PURE__ */ createReactComponent("kol-textarea");
const KolToolbar = /* @__PURE__ */ createReactComponent("kol-toolbar");
const KolTree = /* @__PURE__ */ createReactComponent("kol-tree");
const KolTreeItem = /* @__PURE__ */ createReactComponent("kol-tree-item");


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"InputStateWrapper\\|'filter'\\|_id\" node_modules/@public-ui/components/dist/esm/InputStateWrapper-BJMqyY_8.js | head -20; echo '=== createUniqueId use in input-text ==='; grep -rn \"createUniqueId\\|_id\" node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js | sed -n '1,30p'"
}
```

node_modules/@public-ui/components/dist/esm/InputStateWrapper-BJMqyY_8.js:23:        id: state._id,
node_modules/@public-ui/components/dist/esm/InputStateWrapper-BJMqyY_8.js:70:            props.suggestions = (h(SuggestionsFc, { id: state._id, suggestions: state._suggestions }));
node_modules/@public-ui/components/dist/esm/InputStateWrapper-BJMqyY_8.js:75:const InputStateWrapper = (_a) => {
node_modules/@public-ui/components/dist/esm/InputStateWrapper-BJMqyY_8.js:80:export { InputStateWrapper as I, SuggestionsFc as S };
node_modules/@public-ui/components/dist/esm/InputStateWrapper-BJMqyY_8.js:81://# sourceMappingURL=InputStateWrapper-BJMqyY_8.js.map
node_modules/@public-ui/components/dist/esm/InputStateWrapper-BJMqyY_8.js:83://# sourceMappingURL=InputStateWrapper-BJMqyY_8.js.map
=== createUniqueId use in input-text ===
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:307:        ariaDescribedBy.push(createRelatedUniqueId(state._id, 'msg'));
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:310:        ariaDescribedBy.push(createRelatedUniqueId(state._id, 'hint'));
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:313:        ariaDescribedBy.push(createRelatedUniqueId(state._id, 'error'));
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:425:        id: state._id,


---

## Assistant

_Thinking:_

Important finding: `attachProps` sets `node[name] = newProps[name]` and for strings also `setAttribute(camelToDashCase(name), ...)`. For `_on` prop (object), it sets node._on = object. Good.

Also note: React wrapper passes `id` if we pass `id` prop? `render()` — `cProps` includes `id`; name doesn't start with "on", typeof string → `acc[camelToDashCase('id')] = 'id'`. So `id="..."` attribute is passed to the custom element. So we can set `id` on the kol-input-text element, which lets `document.querySelector('#username')` work for error list focus. And the element's `focus()` method exists — but `handleLinkClick` does `targetElement.focus(options)` — kol-input-text has a `focus()` method. 

Wait: `document.querySelector(selector)` where selector = '#login-username'. The kol-input-text host element has `focus()` method — yes, declared in the interface. Good.

But careful: does `id` attribute get set on host? attachProps only handles props; the render passes `id` to createElement. React sets attribute `id` on the custom element. Yes.

Now, about `_touched`: the component sets `_touched = true` internally on blur. But if we pass `_touched` as a prop, watchBoolean validates it. Since attachProps sets node._touched = value each update... Actually attachProps only runs on componentDidUpdate with all props. It sets node[name] = newProps[name] for every prop each update. So if we pass `_touched={false}` always, we'd override the internal blur-set touched. Hmm — that would break the built-in touched behavior.

Better: control `_touched` from React state — i.e., we set touched=true on submit attempt (or on blur via `_on.onBlur`). Let's be explicit: manage `touched` in React state and pass `_touched={touched.username}`. That's deterministic.

Actually there's a subtlety: on blur, component sets internal `_touched = true`, but on next React re-render, attachProps sets node._touched = our prop value (false) again, reverting it. So we should track blur ourselves with `_on.onBlur`. That's fine and more predictable.

Hmm, but does `_on` prop object get set? attachProps: name = "_on", doesn't start with "on" → node["_on"] = object. Stencil watches `_on` property. Good.

Actually wait — does `_on` get an attribute set? Only if typeof string. It's an object, so only property. Good.

Also `_msg` is an object → property only. Good.

Now check: does `_touched` boolean → propType boolean, not string, so no setAttribute; node._touched = boolean. Good.

Now — the msg only renders when `showMsg = isMsgDefinedAndInputTouched(msg, touched)` i.e. msg defined AND touched === true. So error messages appear only after submit (we set touched=true) or blur.

Also `hasError` in getRenderStates → aria-describedby includes error id... wait it pushes 'error' id but FormFieldMsgFc uses id `msg`. Slight mismatch in their code, but the msg id is in ariaDescribedBy already (hasMessage && !hideMsg). Fine.

Also there's `alert` prop passed to FormFieldMsgFc from formFieldMsgProps — let's check what `alert` is in the render: line ~414 `showMsg && !hideMsg && h(FormFieldMsgFc, {..., alert: alert, msg: msg})`. Let's check where `alert` comes from — probably state._alert or something. Let's check line 360-420 for context. Actually the alert gets `alert: alert` — if alert true, KolAlertFc renders role="alert". Let's check.

Let me grep for `const alert` near render in FormFieldStateWrapper.

Also need KolAlert `_alert` for our form-level status message: `_alert={true}` gives role="alert". Note alert timeout: onAlertTimeout after 10s calls... let's check — in KolAlertFc, if alert, setTimeout 10000 then onAlertTimeout?.() — for the form field msg, onAlertTimeout is undefined so nothing happens. For KolAlert component (kol-alert-wc entry), let's check what onAlertTimeout does — maybe sets _alert=false. Let's check kol-alert-wc.entry.js.

Let's check.

**Tool: shell**

**Input:**
```json
{
  "command": "sed -n '355,415p' node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js"
}
```

        tooltipBehavior.destroy();
        formFieldTooltipBehaviorPool.delete(id);
    }
};
function getModifierClassNameByMsgType(msg) {
    if (msg === null || msg === void 0 ? void 0 : msg.type) {
        return ({
            default: 'msg-type-default',
            info: 'msg-type-info',
            success: 'msg-type-success',
            warning: 'msg-type-warning',
            error: 'msg-type-error',
        }[msg === null || msg === void 0 ? void 0 : msg.type] || '');
    }
    return '';
}
const InputContainer = (_a, children) => {
    var { class: classNames } = _a, other = __rest(_a, ["class"]);
    return (h("div", Object.assign({ class: clsx('kol-form-field__input', classNames) }, other), children));
};
const KolFormFieldFc = (props, children) => {
    const { component: Component = 'div', renderNoLabel, renderNoTooltip, renderNoHint, anotherChildren, id, required, alert, disabled, class: classNames, msg, hideMsg, hideLabel, label, infoPopover, hint, accessKey, shortKey, counter, readOnly, touched, maxLength, ariaDescribedBy, showBadge, tooltipAlign, tooltipFloatingRef, variant, formFieldLabelProps, formFieldHintProps, formFieldTooltipProps, formFieldMsgProps, formFieldInputProps } = props, other = __rest(props, ["component", "renderNoLabel", "renderNoTooltip", "renderNoHint", "anotherChildren", "id", "required", "alert", "disabled", "class", "msg", "hideMsg", "hideLabel", "label", "infoPopover", "hint", "accessKey", "shortKey", "counter", "readOnly", "touched", "maxLength", "ariaDescribedBy", "showBadge", "tooltipAlign", "tooltipFloatingRef", "variant", "formFieldLabelProps", "formFieldHintProps", "formFieldTooltipProps", "formFieldMsgProps", "formFieldInputProps"]);
    const showLabel = !renderNoLabel;
    const showHint = !renderNoHint;
    const showTooltip = !renderNoTooltip;
    const hasExpertSlot = showExpertSlot(label);
    const showMsg = isMsgDefinedAndInputTouched(msg, touched);
    const badgeText = buildBadgeTextString(accessKey, shortKey);
    const useTooltipInsteadOfLabel = showTooltip && !hasExpertSlot && hideLabel;
    const labelId = createRelatedUniqueId(id, 'label');
    const tooltipBehavior = useTooltipInsteadOfLabel ? getFormFieldTooltipBehavior(id) : undefined;
    if (tooltipBehavior) {
        tooltipBehavior.watchAlign(tooltipAlign);
        tooltipBehavior.watchBadgeText(badgeText || '');
        tooltipBehavior.watchId(labelId);
        tooltipBehavior.watchLabel(label);
    }
    else {
        destroyFormFieldTooltipBehavior(id);
    }
    const forwardedInputRef = formFieldInputProps === null || formFieldInputProps === void 0 ? void 0 : formFieldInputProps.ref;
    const setInputContainerRef = (el) => {
        forwardedInputRef === null || forwardedInputRef === void 0 ? void 0 : forwardedInputRef(el);
        if (tooltipBehavior && el) {
            tooltipBehavior.initContext(el);
            tooltipBehavior.syncListeners(undefined, el, true);
        }
    };
    let stateCssClasses = {
        ['kol-form-field--disabled']: Boolean(disabled),
        ['kol-form-field--required']: Boolean(required),
        ['kol-form-field--touched']: Boolean(touched),
        ['kol-form-field--hide-label']: Boolean(hideLabel),
        ['kol-form-field--read-only']: Boolean(readOnly),
        ['kol-form-field--hidden-msg']: Boolean(hideMsg),
    };
    if (variant) {
        stateCssClasses = Object.assign(Object.assign({}, stateCssClasses), { [classNameFromVariant(variant, 'form-field')]: true });
    }
    if (showMsg) {
        const msgType = getMsgType(msg);


**Tool: shell**

**Input:**
```json
{
  "command": "sed -n '40,120p' node_modules/@public-ui/components/dist/esm/kol-alert-wc.entry.js"
}
```

const KolAlertWc = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.close = () => {
            var _a, _b;
            (_b = (_a = this._on) === null || _a === void 0 ? void 0 : _a.onClose) === null || _b === void 0 ? void 0 : _b.call(_a, new Event('Close'));
            if (this.host) {
                dispatchDomEvent(this.host, KolEvent.close);
            }
        };
        this.handleAlertTimeout = () => {
            this.validateAlert(false);
        };
        this._alert = false;
        this._hasCloser = false;
        this._level = 0;
        this._type = 'default';
        this._variant = 'msg';
        this.state = {
            _level: 0,
        };
        this.validateOnValue = (value) => typeof value === 'object' && value !== null && typeof value.onClose === 'function';
    }
    render() {
        const { _alert, _hasCloser, _label, _level, _type, _variant } = this.state;
        const props = {
            alert: _alert,
            hasCloser: _hasCloser,
            label: _label,
            level: _level,
            type: _type,
            variant: _variant,
            onCloserClick: this.close,
            onAlertTimeout: this.handleAlertTimeout,
        };
        return (h(KolAlertFc, Object.assign({ key: 'ab90b52cbda1d61514c3acd292d0bd6d91f0c9d5' }, props), h("slot", { key: '6a7e2a89cfabde71c1140d4cf5de28e99bc09ef4' })));
    }
    validateAlert(value) {
        watchBoolean(this, '_alert', value);
    }
    validateHasCloser(value) {
        validateHasCloser(this, value);
    }
    validateLabel(value) {
        validateLabel(this, value);
    }
    validateLevel(value) {
        watchHeadingLevel(this, value);
    }
    validateOn(value) {
        if (this.validateOnValue(value)) {
            setState(this, '_on', {
                onClose: value.onClose,
            });
        }
    }
    validateType(value) {
        validateAlertType(this, value);
    }
    validateVariant(value) {
        validateAlertVariant(this, value);
    }
    componentWillLoad() {
        this.validateAlert(this._alert);
        this.validateHasCloser(this._hasCloser);
        this.validateLabel(this._label);
        this.validateLevel(this._level);
        this.validateOn(this._on);
        this.validateType(this._type);
        this.validateVariant(this._variant);
    }
    get host() { return getElement(this); }
    static get watchers() { return {
        "_alert": ["validateAlert"],
        "_hasCloser": ["validateHasCloser"],
        "_label": ["validateLabel"],
        "_level": ["validateLevel"],
        "_on": ["validateOn"],
        "_type": ["validateType"],
        "_variant": ["validateVariant"]
    }; }


---

## Assistant

_Thinking:_

Now I understand the key APIs. Let me also check:
1. How does `_msg` get validated - does it require `_touched=true`? Yes: `showMsg = isMsgDefinedAndInputTouched(msg, touched)` → msg only shows when touched === true.
2. Note the internal `_touched` is set to true on blur automatically by the component itself. So the component sets `_touched = true` on blur internally. But if we pass `_touched` prop, does that work? `watchBoolean(component, '_touched', value)` - yes it's a validated prop. But the internal onBlur sets `this.component._touched = true` which mutates. Since we're passing a prop from React, re-render would reset... Actually attachProps sets `node[name] = newProps[name]` for each prop on every componentDidUpdate. So if we pass `_touched={false}` it'd get reset. Careful.

Actually attachProps is called on every componentDidUpdate with this.props. It sets node[name] = newProps[name]. So if we pass `_touched` as false always, it'd overwrite the internal true. Better: only pass `_touched` when we want to force it, or manage it in state ourselves (set to true on blur / submit).

Hmm but if we don't pass `_touched` at all, React won't set it, and internal mutation on blur persists. But for validation on submit before blur, we need `_touched=true`. So we can manage `_touched` in React state: set touched true on blur (via _on.onBlur) or on submit.

Wait — careful: if React state has `_touched` undefined initially, and later we set it to `true`, attachProps sets node._touched = true. Fine. But if the component internally set _touched=true on blur and we never pass the prop, that's fine too.

Actually simplest: control `_touched` in React state — set true on submit and on blur callback.

Let me check: does setting prop `_touched` on the custom element work? `watchBoolean(this, '_touched', value)` in watchers `_touched`? Let's check FormFieldStateWrapper line 85 context — it's in `validate()` probably. Let me check if there's a watcher for `_touched`.

Let me check the input-text entry's watchers.

Also need to check: `_msg` prop watcher.

Also important: how are props passed? attachProps sets `node[name] = newProps[name]` — for `_on` object it sets property. Also for strings, sets attribute with camelToDashCase. Note: `camelToDashCase("_on")` → `-_on`? Let's see: `str.replace(/([A-Z])/g, ...)` — no uppercase in `_on`, so stays `_on`. But it only sets attribute if typeof string. `_on` is object so just property. Good.

But careful — in `render()`, propsToPass filters: only strings/booleans/numbers get passed to createElement as dashed props. So `_on` object prop is NOT passed to createElement — it's only applied via attachProps in componentDidUpdate. OK that works.

Wait, but `_msg` is an object too — same path, applied via attachProps. Good.

Hmm, but there's an issue: in `render()`, `cProps` — `_msg` is object so not included in propsToPass. It's applied in componentDidUpdate via `node[name] = value`. Good.

Now, does Stencil pick up property assignment? Yes, `_msg` is a declared Stencil prop so setting `.msg`... wait, the property name is `_msg`. Yes.

Let's verify the input watchers for `_msg` and `_touched`.

Also: does `attachProps` run before Stencil's `componentDidUpdate`? It runs in React's cDU after mount. Fine.

Another concern: `attachProps` sets props for ALL props each update. If we pass `_touched={undefined}`... typeof undefined → not set. Actually `node[name] = undefined` would be set for object/undefined types (the else branch: `node[name] = newProps[name]` unconditionally except the skipped names). So `_touched` would be set to `undefined` if we include the key. So we should omit the key entirely or always provide a boolean.

Hmm, `Object.keys(newProps).forEach` — if `_touched` key exists with value undefined, it sets node._touched = undefined. That would reset internal touched to undefined → watchBoolean(undefined)... probably treated as false. So better to always give a real boolean and manage it in state.

Plan: manage `touched` per field in React state, set true on blur (via `_on.onBlur`) and on submit.

Actually simpler and more robust: control `_touched` explicitly in state.

Now for error display: `_msg` = `{ _description: '...', _type: 'error', _alert: true }`. And `showMsg = msg && touched===true`.

Wait: `isMsgDefinedAndInputTouched(msg, touched)` = Boolean(msg) && touched === true. So msg only shows when touched. Good — that gives us "don't show errors until touched/submit" behavior natively.

Also `aria-describedby` includes msg id when `hasMessage && !hideMsg`. And alert: FormFieldMsgFc passes `alert: message?._alert ?? alert`. The `alert` prop comes from `props.alert` in KolFormFieldFc, which comes from... let's check where alert comes from in the input render. There's `_alert`? Input components don't have `_alert` prop in the interface list I saw. Let's check kol-input-text.entry.js for `alert:`.

Actually getRenderStates doesn't include alert. Let's grep.

Let's just check how FormFieldFc is invoked in input-text entry.

Also for `_alert: true` in msg → role="alert" is set, and after 10s `handleAlertTimeout` → for FormFieldMsgFc's KolAlertFc, `onAlertTimeout` is undefined (not passed in FormFieldMsgFc). So role="alert" persists. Good.

Wait, in FormFieldMsgFc: `alert: message?._alert ?? alert`. So if we set `_alert: true` in msg, role=alert. 

Hmm, but role="alert" on an element that's already in DOM with content — screen readers announce on change. Since we add msg after submit, it should announce. Good enough.

Now the form-level: `KolForm` with `_errorList` gives an error summary card with links that focus fields via `document.querySelector(selector)`. We need IDs on the inputs for that. Does KolInputText accept an `_id` prop? The interface I read didn't show `_id` for KolInputText. Let's check — the grep showed `_id` at lines 468, 3000, 4032 which are other components (KolInputDate? line 468 is within KolButtonWc maybe). Actually input components generate internal `createUniqueId`. So we can't set `_id` on KolInputText.

Hmm, but errorList selector: `document.querySelector(selector)` then `.focus()`. Since kol-input-text is a custom element with a `focus()` method (declared in interface: `focus: (options?) => Promise<void>`), we could use a selector like `kol-input-text[name="username"]`? But does `name` get set as attribute? attachProps sets attribute for strings: `node.setAttribute(camelToDashCase("_name"), value)` → `camelToDashCase("_name")` = `-_name`? No uppercase, so `_name` stays `_name`. And also `node["_name"] = value` sets the Stencil property. So attribute `_name="username"` exists. So selector `[name=...]`... Actually attribute is `_name`, so selector `_name="username"` → `kol-input-text[_name="username"]`.

Hmm, that works but is ugly. Alternatively give the host element a plain HTML `id` attribute — attachProps: `id` is a normal prop... `name.indexOf("on")` no → else branch: `node["id"] = value` and `node.setAttribute("id", value)`. So passing `id="login-username"` to KolInputText sets the host element's id. Then selector `#login-username`. And `.focus()` exists on the element. 

But wait — does React's createElement also handle `id`? propsToPass includes only string/boolean/number → `acc[camelToDashCase("id")] = value` → `acc["id"]`. So createElement gets `id` attribute. Then attachProps also sets it. Fine either way.

Does the host `<kol-input-text id="login-username">` have `.focus()`? Yes, `focus` is a Stencil method on the component. And `handleLinkClick` does `if (targetElement && typeof targetElement.focus === 'function') targetElement.focus(options)`. Stencil's focus method accepts options. 

Now — `KolForm._errorList` expects `{message, selector, options?}`. The validator: `Array.isArray(value) && value.find(v => !(typeof v === 'string' || typeof v === 'function')) === undefined` — meaning every item must be a string or function?! That validator seems to check items are string/function, not objects. Hmm. That's `validateErrorList`. If we pass objects, `typeof v === 'object'` → not string/function → `!(false)` → find returns v → not undefined → validation fails. What does watchValidator do on failure? Probably a console warning, and it may not setState. Let's check.

Hmm. But the type says `{message, selector, options}`. And renderErrorList uses `error.message`, `error.selector`. So the validator seems buggy/legacy. Let's check watchValidator behavior on failure.

Let me check `watchValidator`.

Actually, let's check: maybe there's a `validateErrorList` in the public esm used by kol-form — yes it's defined locally in kol-form.entry.js as I saw. And in componentWillLoad: `this.validateErrorList(this._errorList)`. Let's see what that does — probably `setState(this, 'errorList', value)` if valid.

Let me look at watchValidator.

This matters: if objects fail validation, `_errorList` won't render. Let's check.

Let me grep common-D-vggmh2.js for watchValidator.

Also need to check `_requiredText` — default true shows "mandatory fields hint" text.

Let's check watchValidator.

Also check: does the form element render `<slot>` — meaning children of kol-form are slotted into the `<form>`. Yes: `h("form", ..., h("slot"))`. So KolButton with `_type="submit"` inside KolForm will submit the native form → KolForm.onSubmit → preventDefault + `_on.onSubmit`. 

And `propagateSubmitEventToForm` — inputs' Enter key triggers form submit. Good.

Now the button: `_type="submit"` → ButtonTypePropType options ['button','reset','submit']. Does KolButton render `<button type="submit">`? Let's verify quickly.

Let me check watchValidator + kol-button render.

Also `_variant` for button: default from theme `buttonVariantDefault` ?? 'normal'. Options? Let's check variantClassName — 'primary' | 'secondary' | 'danger' | 'ghost' | 'normal' | 'custom'? Let's check.

Let's gather these.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn -A25 \"const watchValidator\" node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js | head -40; echo '=== setState ==='; grep -rn -A15 \"^const setState\\|function setState\" node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js | head -25"
}
```

=== setState ===
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js:1427:const setState = (component, propName, value, hooks = {}) => {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1428-    var _a, _b;
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1429-    if (component.nextHooks === undefined) {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1430-        component.nextHooks = new Map();
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1431-    }
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1432-    if (component.nextState === undefined) {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1433-        component.nextState = new Map();
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1434-    }
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1435-    const nextHooks = component.nextHooks.get(propName);
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1436-    if (nextHooks instanceof Map === false) {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1437-        component.nextHooks.set(propName, new Map());
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1438-    }
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1439-    if (typeof hooks.afterPatch === 'function') {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1440-        (_a = component.nextHooks.get(propName)) === null || _a === void 0 ? void 0 : _a.set('afterPatch', hooks.afterPatch);
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1441-    }
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1442-    if (typeof hooks.beforePatch === 'function') {


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"type: \\|_type\\b\" node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js | head -20; echo '=== variants ==='; grep -rn \"VariantOptions\\|variantOptions\\|'primary'\" node_modules/@public-ui/components/dist/esm/*.js | head -10"
}
```

node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js:70:    watchValidator(component, `_type`, (value) => typeof value === 'string' && buttonTypePropTypeOptions.includes(value), new Set([`KoliBriButtonType {${buttonTypePropTypeOptions.join(', ')}`]), value);
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js:90:            }), disabled: isDisabled, id: this.state._id, name: this.state._name, onClick: this.onClick, onMouseDown: this.onMouseDown, onFocus: this.onFocus, onBlur: this.onBlur, role: this.state._role, tabIndex: this.state._tabIndex, type: this.state._type }, h(SpanFC, { key: 'a952ebc2063044a81f1bee81338a6b6c27e8ec86', class: "kol-button__text", badgeText: badgeText, icons: this.state._icons, hideLabel: hideLabel, label: hasExpertSlot ? '' : this.state._label }, h("slot", { key: '9495e37f98b7155172ceb6b639fd95d2291a0a86', name: "expert", slot: "expert" }))), hideLabel && typeof this.state._label === 'string' && this.state._label.length > 0 && (h("div", { key: '662387306af9583fab64d6f59c723ed44ce13019', class: "kol-button__tooltip" }, h(TooltipFC, { key: '743b4b515f88437df7e1080e8c3aa49b0befd85c', badgeText: badgeText || '', label: this.state._label, id: this.tooltipBehavior.getRenderProp('id'), refFloating: this.tooltipBehavior.setTooltipElementRef }))), hasAriaDescription && (h("span", { key: '47e8746efa42af91a209a9a9999b1ea42b4fe617', class: "visually-hidden", id: this.internalDescriptionById }, this.state._ariaDescription))));
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js:102:            if (this.state._type === 'submit') {
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js:106:            else if (this.state._type === 'reset') {
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js:146:        this._type = 'button';
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js:152:            _type: 'button',
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js:251:        this.validateType(this._type);
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js:289:        "_type": ["validateType"],
=== variants ===
node_modules/@public-ui/components/dist/esm/kol-alert-wc.entry.js:32:const alertVariantOptions = ['card', 'msg'];
node_modules/@public-ui/components/dist/esm/kol-alert-wc.entry.js:34:    return typeof value === 'string' && alertVariantOptions.includes(value);
node_modules/@public-ui/components/dist/esm/kol-alert-wc.entry.js:37:    watchValidator(component, '_variant', isAlertVariantPropType, new Set(alertVariantOptions), value);
node_modules/@public-ui/components/dist/esm/kol-input-checkbox.entry.js:62:const inputCheckboxVariantOptions = ['button', 'default', 'switch'];
node_modules/@public-ui/components/dist/esm/kol-input-checkbox.entry.js:64:    return typeof value === 'string' && inputCheckboxVariantOptions.includes(value);
node_modules/@public-ui/components/dist/esm/kol-input-checkbox.entry.js:67:    watchValidator(component, '_variant', isInputCheckboxVariantPropType, new Set(inputCheckboxVariantOptions), value);
node_modules/@public-ui/components/dist/esm/kol-progress.entry.js:17:const progressVariantOptions = ['bar', 'cycle'];
node_modules/@public-ui/components/dist/esm/kol-progress.entry.js:20:    if (progressVariantOptions.includes(str)) {
node_modules/@public-ui/components/dist/esm/kol-spin.entry.js:19:const spinVariantOptions = ['dot', 'cycle', 'none'];
node_modules/@public-ui/components/dist/esm/kol-spin.entry.js:22:    if (spinVariantOptions.includes(str)) {


---

## Assistant

_Thinking:_

Let me check button variant options and how the button's onClick is handled with _on. Also check `variantClassName` for buttons.

**Tool: shell**

**Input:**
```json
{
  "command": "cat node_modules/@public-ui/components/dist/esm/variant-class-name-9qZ5egaq.js | head -40; echo '=== button onClick ==='; sed -n '95,115p' node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js"
}
```

/*!
 * KoliBri - The accessible HTML-Standard
 */
import { b as watchValidator, i as isString } from './common-D-vggmh2.js';

const SAFE_CLASS_NAME_RE = /^[a-zA-Z][a-zA-Z0-9_-]{3,60}$/;
const isValidArrayOrString = (value) => (Array.isArray(value) && value.every(isSafeClassName)) || (isString(value, 1) && value.split(' ').every(isSafeClassName));
const isSafeClassName = (value) => typeof value === 'string' && SAFE_CLASS_NAME_RE.test(value);
const SAFE_CLASS_NAME_ALLOWED = new Set([SAFE_CLASS_NAME_RE.source]);
const beforePatchString = (component) => {
    var _a, _b, _c;
    if ((_a = component.nextState) === null || _a === void 0 ? void 0 : _a.has('_variant')) {
        const variants = (_b = component.nextState) === null || _b === void 0 ? void 0 : _b.get('_variant');
        let nextStateVariants = [];
        if (isString(variants, 1)) {
            nextStateVariants = variants.split(' ');
        }
        else if (Array.isArray(variants)) {
            nextStateVariants = variants;
        }
        (_c = component.nextState) === null || _c === void 0 ? void 0 : _c.set('_variant', nextStateVariants);
    }
};
const validateVariantClassName = (component, value, options = {}) => {
    var _a;
    watchValidator(component, '_variant', isValidArrayOrString, SAFE_CLASS_NAME_ALLOWED, value, Object.assign(Object.assign({}, options), { defaultValue: {}, hooks: {
            afterPatch: (_a = options.hooks) === null || _a === void 0 ? void 0 : _a.afterPatch,
            beforePatch: (nextValue, nextState, component, key) => {
                var _a, _b;
                if (typeof ((_a = options.hooks) === null || _a === void 0 ? void 0 : _a.beforePatch) === 'function') {
                    (_b = options.hooks) === null || _b === void 0 ? void 0 : _b.beforePatch(nextValue, nextState, component, key);
                }
                beforePatchString(component);
            },
        } }));
};
const classNameFromVariant = (variants, componentName) => {
    let className = '';
    if (Array.isArray(variants)) {
        variants.forEach((variant) => {
=== button onClick ===
        this.ctaRef = createCtaRef();
        this.tooltipBehavior = new TooltipBehavior(BaseWebComponent.stateLess);
        this.internalDescriptionById = nonce();
        this.onClick = (event) => {
            var _a, _b;
            event.stopPropagation();
            this.tooltipBehavior.hideTooltip();
            if (this.state._type === 'submit') {
                propagateSubmitEventToForm({
                    form: this.host});
            }
            else if (this.state._type === 'reset') {
                propagateResetEventToForm({
                    form: this.host});
            }
            else {
                this.controller.setFormAssociatedValue(this.state._value);
                if (typeof ((_a = this.state._on) === null || _a === void 0 ? void 0 : _a.onClick) === 'function') {
                    setEventTarget(event, this.ctaRef.el);
                    (_b = this.state._on) === null || _b === void 0 ? void 0 : _b.onClick(event, this.state._value);
                }


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"_alert\\b\" node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js | head; echo '=== alert prop in inputs ==='; grep -rn \"alert\" node_modules/@public-ui/components/dist/esm/kol-input-text.entry.js | head"
}
```

node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:338:    return (h(KolAlertFc, Object.assign({ id: createRelatedUniqueId(id, 'msg'), alert: (_b = message === null || message === void 0 ? void 0 : message._alert) !== null && _b !== void 0 ? _b : alert, hasCloser: false, level: 0, type: (_c = message === null || message === void 0 ? void 0 : message._type) !== null && _c !== void 0 ? _c : 'error', variant: "msg", class: clsx('kol-form-field__msg', classNames) }, other), (message === null || message === void 0 ? void 0 : message._description) || undefined));
=== alert prop in inputs ===
node_modules/@public-ui/components/dist/esm/kol-input-text.entry.js:57:const defaultStyleCss = "@charset \"UTF-8\";\n/*\n* This file defines the layer order for all CSS layers used in KoliBri.\n* The order is important as it determines the cascade priority.\n*\n* Layer order (lowest to highest priority):\n* 1. kol-a11y - Accessibility defaults and requirements\n* 2. kol-global - Global component styles and resets\n* 3. kol-component - Component-specific styles\n* 4. kol-theme-global - Theme-specific global styles\n* 5. kol-theme-component - Theme-specific component styles\n* 6. kol-forced-colors - Defaults for forced colors and high contrast modes\n* 7. kol-theme-forced-colors - Theme-specific styles for forced colors and high contrast modes\n*/\n@layer kol-a11y, kol-global, kol-component, kol-theme-global, kol-theme-component, kol-forced-colors, kol-theme-forced-colors;\n/* forward the rem function */\n/*\n * This file contains all rules for accessibility.\n */\n@layer kol-a11y {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     *\n     * The `max(…, 44px)` floor guarantees the WCAG 2.5.5 (AAA) target size of 44px:\n     * `to-rem(44)` runs the value through a `calc()` rem round-trip which can lose\n     * sub-pixel precision and resolve to e.g. 43.99px depending on the browser's\n     * rounding, dropping just below the required minimum.\n     */\n    --a11y-min-size: max(calc(44 * 1rem / var(--kolibri-root-font-size, 16)), 44px);\n    /*\n     * No element should be used without verifying the contrast ratio of its background and font colors.\n     * By initially setting the background color to white and the font color to black,\n     * the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    --kol-a11y-font-color: black;\n    --kol-a11y-background-color: white;\n    color: var(--kol-a11y-font-color);\n    background-color: var(--kol-a11y-background-color);\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    --kol-a11y-font-family: Verdana;\n    font-family: var(--kol-a11y-font-family);\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n    /*\n     * Text should be aligned left by default to provide a predictable starting point.\n     */\n    text-align: left;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n  }\n  /*\n   * All interactive elements should have a minimum size of to-rem(44).\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  button,\n  .kol-input .input {\n    min-width: var(--a11y-min-size);\n    min-height: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the text color from his parent element.\n     */\n    color: inherit;\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /**\n  * Sometimes we need the semantic element for accessibility reasons,\n  * but we don't want to show it.\n  *\n  * - https://www.a11yproject.com/posts/how-to-hide-content/\n  */\n  .visually-hidden {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n    white-space: nowrap;\n    clip-path: inset(50%);\n  }\n}\n/*\n * This file contains all rules for forced-colors and highcontrast modes\n * https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/system-color to see all color keywords the browsers are providing\n */\n@layer kol-forced-colors {\n  @media (forced-colors: active) {\n    .kol-button__text {\n      color: ButtonText;\n      background-color: ButtonFace;\n      border: 2px solid ButtonBorder;\n    }\n    .kol-button--disabled .kol-button__text {\n      color: GrayText;\n      border-color: GrayText;\n    }\n    .kol-card,\n    .kol-dialog,\n    .kol-modal,\n    .kol-drawer {\n      color: CanvasText;\n      background-color: Canvas;\n      border: 1px solid ButtonBorder;\n    }\n    .kol-pagination__button--selected .kol-button {\n      opacity: 1;\n    }\n    .kol-pagination__button--selected .kol-button__text {\n      color: SelectedItemText;\n      background-color: SelectedItem;\n    }\n    /* focus styles */\n    .kol-button:focus-visible,\n    .kol-link__anchor:focus-visible {\n      outline: 2px solid Highlight;\n      outline-offset: 2px;\n    }\n  }\n}\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    border: none;\n    /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n  .badge-text-hint {\n    color: black;\n    background-color: white;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n    font-size: calc(16 * 1rem / var(--kolibri-root-font-size, 16));\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  .kol-span {\n    /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    justify-content: center;\n    /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  }\n  .kol-span__container {\n    display: flex;\n    align-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  .kol-span .kol-span__label--hide-label .kol-span__label {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    outline: none;\n    cursor: not-allowed;\n  }\n  [aria-disabled=true]:focus .kol-span,\n  [disabled]:focus .kol-span {\n    outline: none !important;\n  }\n  .hastooltip {\n    z-index: 900 !important;\n  }\n}\n@layer kol-component {\n  :host {\n    display: block;\n  }\n}\n@font-face {\n  font-family: \"kolicons\";\n  src: url(\"kolicons.eot?t=1788937554327\"); /* IE9*/\n  src: url(\"kolicons.eot?t=1788937554327#iefix\") format(\"embedded-opentype\"), url(\"kolicons.woff2?t=1788937554327\") format(\"woff2\"), url(\"kolicons.woff?t=1788937554327\") format(\"woff\"), url(\"kolicons.ttf?t=1788937554327\") format(\"truetype\"), url(\"kolicons.svg?t=1788937554327#kolicons\") format(\"svg\"); /* iOS 4.1- */\n}\n@layer kol-component {\n  [class^=kolicon-], [class*=\" kolicon-\"] {\n    font-family: \"kolicons\";\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1em;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  .kolicon-alert-error::before {\n    content: \"\\ea01\";\n  }\n  .kolicon-alert-info::before {\n    content: \"\\ea02\";\n  }\n  .kolicon-alert-success::before {\n    content: \"\\ea03\";\n  }\n  .kolicon-alert-warning::before {\n    content: \"\\ea04\";\n  }\n  .kolicon-check::before {\n    content: \"\\ea05\";\n  }\n  .kolicon-chevron-double-left::before {\n    content: \"\\ea06\";\n  }\n  .kolicon-chevron-double-right::before {\n    content: \"\\ea07\";\n  }\n  .kolicon-chevron-down::before {\n    content: \"\\ea08\";\n  }\n  .kolicon-chevron-left::before {\n    content: \"\\ea09\";\n  }\n  .kolicon-chevron-right::before {\n    content: \"\\ea0a\";\n  }\n  .kolicon-chevron-up::before {\n    content: \"\\ea0b\";\n  }\n  .kolicon-cogwheel::before {\n    content: \"\\ea0c\";\n  }\n  .kolicon-cross::before {\n    content: \"\\ea0d\";\n  }\n  .kolicon-eye-closed::before {\n    content: \"\\ea0e\";\n  }\n  .kolicon-eye::before {\n    content: \"\\ea0f\";\n  }\n  .kolicon-house::before {\n    content: \"\\ea10\";\n  }\n  .kolicon-kolibri::before {\n    content: \"\\ea11\";\n  }\n  .kolicon-link-external::before {\n    content: \"\\ea12\";\n  }\n  .kolicon-link::before {\n    content: \"\\ea13\";\n  }\n  .kolicon-minus::before {\n    content: \"\\ea14\";\n  }\n  .kolicon-plus::before {\n    content: \"\\ea15\";\n  }\n  .kolicon-settings::before {\n    content: \"\\ea16\";\n  }\n  .kolicon-sort-asc::before {\n    content: \"\\ea17\";\n  }\n  .kolicon-sort-desc::before {\n    content: \"\\ea18\";\n  }\n  .kolicon-sort-neutral::before {\n    content: \"\\ea19\";\n  }\n  .kolicon-up::before {\n    content: \"\\ea1a\";\n  }\n  .kolicon-version::before {\n    content: \"\\ea1b\";\n  }\n}\n@layer kol-component {\n  .kol-icon {\n    color: inherit;\n    display: inline-block;\n    font-size: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n  }\n  .kol-tooltip {\n    display: contents;\n  }\n  .kol-tooltip__floating {\n    opacity: 0;\n    display: none;\n    position: fixed;\n    /* Avoid layout interference - see https://floating-ui.com/docs/computePosition */\n    top: 0;\n    left: 0;\n    /* Can be used to specify the tooltip-width from the outside. Unset by default.  */\n    width: var(--kol-tooltip-width, max-content);\n    min-width: calc(8 * 1rem / var(--kolibri-root-font-size, 16));\n    max-width: 90vw;\n    max-height: 90vh;\n    animation-direction: normal;\n    /* Can be used to specify the animation duration from the outside. 250ms by default. */\n    animation-duration: var(--kolibri-tooltip-animation-duration, 250ms);\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: ease-in;\n  }\n  .kol-tooltip__floating.hide {\n    animation-name: hideTooltip;\n  }\n  .kol-tooltip__floating.show {\n    animation-name: showTooltip;\n  }\n  .kol-tooltip__arrow {\n    transform: rotate(45deg);\n    color: black;\n    background-color: white;\n    position: absolute;\n    z-index: 999;\n    width: calc(10 * 1rem / var(--kolibri-root-font-size, 16));\n    height: calc(10 * 1rem / var(--kolibri-root-font-size, 16));\n  }\n  .kol-tooltip__content {\n    color: black;\n    background-color: white;\n    position: relative;\n    z-index: 1000;\n  }\n  @keyframes hideTooltip {\n    0% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n      display: none;\n    }\n  }\n  @keyframes showTooltip {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n}\n@layer kol-component {\n  .kol-alert .kol-icon {\n    color: inherit;\n    display: inline-block;\n    font-size: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n  }\n  .kol-alert :host {\n    display: inline-block;\n  }\n  .kol-alert .kol-button {\n    display: flex;\n    height: 100%;\n    min-height: var(--a11y-min-size);\n    font-style: calc(16 * 1rem / var(--kolibri-root-font-size, 16));\n    text-decoration-line: none;\n  }\n  .kol-alert .kol-button::before {\n    /* Render zero-width character as first element to set the baseline correctly. */\n    content: \"​\";\n  }\n  .kol-alert .kol-button__text {\n    flex: 1 0 100%;\n  }\n  .kol-alert .kol-button {\n    /* The link skeleton renders the anchor as `.kol-link__anchor` inside the `.kol-link`\n       wrapper. The UA default underline sits on the anchor itself, so suppressing\n       `text-decoration` on the wrapper alone is not enough. The remaining declarations\n       restore the box the root element was before the skeleton migration. */\n  }\n  .kol-alert .kol-button__anchor {\n    display: flex;\n    text-align: left;\n    text-decoration-line: none;\n    /* The zero-width baseline character used to live on the root element, which was the\n       flex container positioning the text. In the link skeleton the anchor is that\n       container, so the character has to move with it — otherwise the text sits 1px off. */\n  }\n  .kol-alert .kol-button__anchor::before {\n    content: \"​\";\n  }\n  .kol-alert .kol-button--external-link > .kolicon-link-external::before, .kol-alert .kol-button--external-link .kol-button__anchor > .kolicon-link-external::before {\n    content: none;\n  }\n  .kol-alert {\n    display: grid;\n    grid-template-areas: \"icon heading close\" \"icon content close\";\n    grid-template-columns: min-content 1fr min-content;\n    grid-template-rows: min-content min-content;\n  }\n  .kol-alert__icon {\n    grid-area: icon;\n  }\n  .kol-alert__heading {\n    grid-area: heading;\n  }\n  .kol-alert__closer {\n    /* Visible with forced colors */\n    outline: transparent solid calc(1 * 1rem / var(--kolibri-root-font-size, 16));\n    grid-area: close;\n  }\n  .kol-alert__content {\n    grid-area: content;\n  }\n  .kol-form-field .kol-popover-button__popover {\n    margin: 0;\n    padding: 0;\n    border: 0;\n  }\n  .kol-form-field .kol-popover-button--open .kol-button__tooltip {\n    display: none;\n  }\n  .kol-form-field .kol-popover-button--inline {\n    display: inline-block;\n  }\n  .kol-form-field .kol-popover-button--inline__button {\n    display: inline;\n  }\n  .kol-form-field .kol-popover-button--inline .kol-button {\n    min-width: 0;\n    min-height: 1em;\n  }\n  .kol-form-field .kol-popover {\n    opacity: 0;\n    transition: 0.2s ease-out opacity;\n  }\n  .kol-form-field .kol-popover-button--open + .kol-popover {\n    opacity: 1;\n  }\n  .kol-form-field {\n    display: grid;\n  }\n  .kol-form-field:not(.kol-form-field--disabled) .kol-form-field__label {\n    cursor: pointer;\n  }\n  .kol-form-field__label-text {\n    flex-flow: row;\n    align-items: flex-start;\n    justify-content: flex-start;\n  }\n  .kol-form-field--required .kol-form-field__label-text:has(.kol-span__slot[hidden]) .kol-span__label::after,\n  .kol-form-field--required .kol-form-field .kol-tooltip__content .kol-span__label::after {\n    content: \"*\"/\"\";\n  }\n  .kol-input-container {\n    background-color: transparent;\n    display: grid;\n    position: relative;\n    width: 100%;\n    min-width: var(--a11y-min-size);\n    min-height: var(--a11y-min-size);\n    align-items: center;\n    grid-template-columns: 1fr;\n  }\n  .kol-input-container:has(> .kol-input-container__adornment--start) {\n    grid-template-columns: auto 1fr auto;\n  }\n  .kol-input-container__container {\n    position: relative;\n    z-index: 1;\n  }\n  .kol-input-container__adornment {\n    display: flex;\n    align-items: center;\n  }\n  .kol-input-container__adornment .kol-icon {\n    display: grid;\n    place-items: center;\n  }\n  .kol-input {\n    background-color: transparent;\n    width: 100%;\n    min-width: var(--a11y-min-size);\n  }\n  input[type=search]::-webkit-search-cancel-button {\n    display: none;\n  }\n  .kol-input-text__clear-button--hidden {\n    display: none;\n  }\n}";
node_modules/@public-ui/components/dist/esm/kol-input-text.entry.js:112:            alert: this.showAsAlert(),


---

## Assistant

_Thinking:_

Let me check showAsAlert and how the `alert` prop flows (for aria-live). Also check how `_on` input callbacks are typed/validated.

Let's check `showAsAlert` in input-text.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn -B3 -A8 \"showAsAlert\" node_modules/@public-ui/components/dist/esm/*.js | head -40"
}
```

node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-197-                'has-value': this.state._hasValue,
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-198-            }),
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-199-            tooltipAlign: this._tooltipAlign,
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js:200:            alert: this.showAsAlert(),
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-201-            infoPopover: this._infoPopover,
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-202-        };
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-203-    }
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-204-    getInputProps() {
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-205-        const { ariaDescribedBy } = getRenderStates(this.state);
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-206-        const isDisabled = this.state._disabled === true;
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-207-        return Object.assign(Object.assign({ ref: this.ctaRef, state: this.state, class: 'kol-combobox__input', type: 'text', role: 'combobox', 'aria-activedescendant': this._isOpen && this._focusedOptionIndex >= 0 ? `option-${this._focusedOptionIndex}` : undefined, 'aria-autocomplete': 'both', 'aria-controls': this.state._id + '-listbox', 'aria-describedby': ariaDescribedBy.length > 0 ? ariaDescribedBy.join(' ') : undefined, 'aria-expanded': this._isOpen ? 'true' : 'false', 'aria-label': this.state._hideLabel && typeof this.state._label === 'string' ? this.state._label : undefined, 'aria-labelledby': this.state._id + '-label', 'aria-keyshortcuts': this.state._shortKey, value: this.state._value, accessKey: this.state._accessKey, autocapitalize: 'off', autocorrect: 'off', autocomplete: 'off', disabled: isDisabled, customSuggestions: true, id: this.state._id, name: this.state._name, required: this.state._required }, this.controller.onFacade), { onChange: this.onChange.bind(this), onInput: this.onInput.bind(this), placeholder: this.state._placeholder });
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-208-    }
--
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-392-        this.controller = new ComboboxController(this, 'combobox', this.host);
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-393-        this.onInput = this.onInput.bind(this);
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-394-    }
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js:395:    showAsAlert() {
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-396-        return Boolean(this.state._touched) && !this.inputHasFocus;
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-397-    }
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-398-    validatePlaceholder(value) {
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-399-        this.controller.validatePlaceholder(value);
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-400-    }
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-401-    validateAccessKey(value) {
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-402-        this.controller.validateAccessKey(value);
node_modules/@public-ui/components/dist/esm/kol-combobox.entry.js-403-    }
--
node_modules/@public-ui/components/dist/esm/kol-input-checkbox.entry.js-188-                [`kol-input-checkbox--label-align-${this.state._labelAlign || 'right'}`]: true,
node_modules/@public-ui/components/dist/esm/kol-input-checkbox.entry.js-189-            }),
node_modules/@public-ui/components/dist/esm/kol-input-checkbox.entry.js-190-            tooltipAlign: this._tooltipAlign,
node_modules/@public-ui/components/dist/esm/kol-input-checkbox.entry.js:191:            alert: this.showAsAlert(),
node_modules/@public-ui/components/dist/esm/kol-input-checkbox.entry.js-192-            renderNoTooltip: true,
node_modules/@public-ui/components/dist/esm/kol-input-checkbox.entry.js-193-        };
node_modules/@public-ui/components/dist/esm/kol-input-checkbox.entry.js-194-    }
node_modules/@public-ui/components/dist/esm/kol-input-checkbox.entry.js-195-    getFieldControlProps() {
node_modules/@public-ui/components/dist/esm/kol-input-checkbox.entry.js-196-        return {
node_modules/@public-ui/components/dist/esm/kol-input-checkbox.entry.js-197-            class: clsx('kol-input-checkbox__field-control', {
node_modules/@public-ui/components/dist/esm/kol-input-checkbox.entry.js-198-                [`kol-input-checkbox__field-control--checked`]: this.state._checked,
node_modules/@public-ui/components/dist/esm/kol-input-checkbox.entry.js-199-                [`kol-input-checkbox__field-control--indeterminate`]: this.state._indeterminate,
--
node_modules/@public-ui/components/dist/esm/kol-input-checkbox.entry.js-292-        };


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn -A12 \"validateOn(component, value)\" node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js | head -20; grep -rn \"isInputTypeOn\\|validateInputTypeOn\" -A12 node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js | head -30"
}
```

(no output)

---

## Assistant

_Thinking:_

Good. Now let me check how `_on` is validated for inputs (to know whether passing `_on={{ onInput: ... }}` works as object property from React — yes, attachProps sets node[name] = value for non-string; for objects it sets property directly).

Note: attachProps only calls `node[name] = newProps[name]` for props — objects get set as JS properties, which Stencil watches. Good.

But important: in `render()`, propsToPass only includes string/boolean/number props — objects like `_on`, `_msg` are dropped from the React-rendered element attributes but applied via attachProps in componentDidUpdate. Wait — attachProps iterates `Object.keys(newProps)` where newProps = this.props (all props). So `_on` and `_msg` objects get set via `node[name] = value`. Good.

However there's a subtlety: `render()` strips object props so createElement won't pass them, but `componentDidUpdate` passes `this.props` (full) to attachProps. So objects are handled. Good.

Also event props starting with "on" + uppercase — `_on` starts with underscore, so not matched. Good.

Now, boolean props: `node[name] = value` — but for booleans they're also added to `acc[camelToDashCase(name)] = value` in render → set as attribute in React? React will set attribute `_touched="true"`? Hmm, for custom elements React sets attributes for unknown props. Actually in render, `acc[camelToDashCase(name)]` → `_touched` (camelToDashCase only inserts dash before uppercase; "_touched" has no uppercase → "_touched"). So React passes `_touched={true}` as attribute → React sets attribute `_touched="true"`. Stencil watches `_touched` prop — attribute reflection works if attribute name matches. Stencil default attribute name for `_touched` prop... Stencil uses prop name as attribute by default (lowercase): `_touched`. Hmm, actually Stencil's attribute mapping: for property `_touched`, the attribute is `_touched` (Stencil keeps as-is by default? Actually Stencil converts to lowercase attribute matching property name). Let's not over-worry; the attachProps also sets node._touched = true as property in componentDidUpdate.

Important behavior: internal `_touched` is set true by component on blur. But if React re-renders and passes `_touched={false}`, it would override back to false. So better: control `_touched` ourselves via React state — set true on submit attempt. Actually simpler: don't pass `_touched` at all initially; set it true after submit attempt. And on blur the component sets it internally.

Hmm but if we pass `_touched` as undefined initially, attachProps sets `node["_touched"] = undefined`? Let's check: `Object.keys(newProps).forEach` — only keys present in props. If we don't include `_touched` in JSX, key absent → not set. Good.

But careful: if we set `_touched={true}` after submit, subsequent renders keep it true. Fine.

Alternative: rely purely on `_msg` + `_touched`. The msg only shows when touched===true. So we need to set touched true on submit.

Let me now check the input's `_msg` validation — does setting `_msg` to undefined clear? validateMsg probably handles.

Also check `_errorList` on KolForm: type requires `{message, selector}` where selector is string or EventCallback. The validator `validateErrorList` checks `Array.isArray(value) && value.find(v => !(typeof v === 'string' || typeof v === 'function')) === undefined` — that validator is weird: it requires every item to be string or function?? Actually `v => !(typeof v === 'string' || typeof v === 'function')` — find first item that is NOT string and NOT function. If items are objects, find returns the object → not undefined → validation fails. Hmm, so objects `{message, selector}` would fail validation? But the type says ErrorListPropType = {message, selector, options}. The validator seems buggy/legacy. Let's check what happens on validation failure — probably logs warning and doesn't set state? Let's check watchValidator.

Let's check.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn -A30 \"const watchValidator\" node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js | head -45"
}
```

(no output)

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn -A12 \"const validateMsg\" node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js | head -20; echo '=== validateOn in FormFieldStateWrapper ==='; sed -n '75,95p' node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js"
}
```

node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:37:const validateMsg = (component, value) => {
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-38-    objectObjectHandler(value, () => {
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-39-        try {
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-40-            value = parseJson(value);
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-41-        }
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-42-        catch (_a) {
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-43-        }
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-44-        watchValidator(component, `_msg`, (value) => {
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-45-            if (value === undefined) {
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-46-                return true;
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-47-            }
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-48-            if (typeof value === 'string' && value.length > 0) {
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-49-                return true;
=== validateOn in FormFieldStateWrapper ===
}
function getMsgType(msg) {
    var _a;
    if (typeof msg === 'string') {
        return 'error';
    }
    return (_a = msg === null || msg === void 0 ? void 0 : msg._type) !== null && _a !== void 0 ? _a : 'error';
}

const validateTouched = (component, value) => {
    watchBoolean(component, '_touched', value);
};

class ControlledInputController extends AssociatedInputController {
    constructor(component, name, host) {
        super(component, name, host);
        this.component = component;
    }
    validateTouched(value) {
        validateTouched(this.component, value);
    }


---

## Assistant

_Thinking:_

I have a good understanding now. Let me check how `_on` object props are validated for inputs (to know if passing `_on={{ onInput: ... }}` works). Also check whether React wrapper sets `_on` via `node[name] = value` — yes, attachProps sets `node[name] = newProps[name]` for non-"on" prefixed... wait `_on` doesn't start with "on", so it goes to else branch: `node["_on"] = value` — object, not string, so no setAttribute. Good.

But important: `render()` in the React wrapper filters props to only string/boolean/number for `propsToPass`, and events starting with "on" + uppercase. `_on` is an object so it's NOT passed to createElement — it's only applied via `attachProps` in componentDidUpdate/componentDidMount. That works: `node["_on"] = value`.

Wait — but in `attachProps`, `Object.keys(newProps).forEach` — `_on` doesn't start with "on" (it's `_on`), so goes to else: `node["_on"] = newProps["_on"]`. Good.

Also for `onInput` etc as React-style props on KoliBri components? Not applicable.

Now, one issue: `attachProps` is only called in componentDidMount/componentDidUpdate — fine.

Let me also check whether `_msg` object prop passes through: `_msg` starts with `_`, not "on", so `node["_msg"] = value` (object → no attribute). Good.

Another important thing: the React wrapper's `render()` filters props to primitives only for the actual element creation; but `_label`, `_type` etc. are strings so they're passed as dashed attributes AND set as properties in attachProps. Fine.

Now check: does `_touched` need to be set by us? The component sets `_touched = true` on blur internally. But if React passes `_touched` prop... Actually there's a subtlety: `attachProps` sets `node[name] = newProps[name]` on every update for keys in newProps. If we don't pass `_touched`, it won't be reset. But careful: if we don't pass `_touched`, then initial touched=false and the component sets it true on blur internally. However, on React re-render, `attachProps` only iterates newProps keys, so `_touched` untouched → stays true. Good.

But there's a catch: the component internally sets `this.component._touched = true` — that's on the Stencil component instance (the host element's property). Since React doesn't manage `_touched`, it persists.

However: if we want to force showing errors on submit (before blur), we need to set `_touched` ourselves. We can pass `_touched={true}` after submit attempt. But once passed as prop, React will keep setting it. That's fine since we want it true after submit.

Hmm, but careful: if we pass `_touched={false}` initially... actually if we pass `_touched={touchedState}` where touchedState starts false, then on blur the component sets it true internally, but on next React re-render (state change e.g. value change) attachProps would reset it to false! That would hide errors. So better to NOT pass `_touched` at all, and only pass it when we want to force it (after submit). Actually if we conditionally pass it only after submit: `{submitted && '_touched': true}` — but once we pass it, React's attachProps on subsequent updates... it stays true anyway since submitted stays true.

Hmm, but if we pass it only when submitted is true, then when submitted is false the key is absent from newProps, so it's never reset. 

Actually simpler: manage `touched` fully in React state? No — the component sets it internally on blur; passing it would conflict. Let's do: don't pass `_touched` initially; after submit, pass `_touched={true}`.

Wait — but a problem: when React re-renders with `_touched: true` newly added, `attachProps` sets `node._touched = true`. Good.

Actually there's still a risk: once submitted=true and we pass `_touched={true}`, if user edits and the component sets touched... it stays true. Fine.

Alternative cleaner approach: track "submitted" in React, and pass `_touched={true}` only when submitted. But we also need errors to clear. Let's manage validation errors ourselves and pass `_msg` only when there's an error. And show msg only if touched (component requires touched=true to render msg). So pass `_touched` = true when submitted OR when the component itself touched it.

Simplest robust: maintain `submitCount` state; pass `_touched={submitAttempted}` — but risk of resetting on re-render as described. Hmm: if `submitAttempted` is false initially, `_touched={false}` is passed on every render. Component's internal `true` on blur would be reset by the next React render! Because attachProps runs on every componentDidUpdate and sets node._touched = false.

Wait — does React re-render? Only when state changes. On blur, component sets `_touched=true` internally, no React state change → no re-render → stays true. Then if user types → onChange → setState → re-render → attachProps sets `_touched=false` again → error message disappears even though field is touched. That's a bug.

So: don't pass `_touched` at all until we want to force it. Let's use: `_touched={submitAttempted || undefined}`... Actually if we pass `_touched={true}` when submitted, and never pass false, we're fine. Since key absent → not reset.

Hmm, but actually careful: does `attachProps` delete keys absent from newProps? No, it only iterates newProps. Good.

So plan: `const showTouched = submitted` → pass `_touched={submitted ? true : undefined}`. But `undefined` value: `Object.keys` includes key if present in JSX as `_touched={undefined}`? If we write `_touched={submitted || undefined}`, React createElement gets prop `_touched: undefined`. In the wrapper's `render()`, `cProps` includes `_touched`, typeof undefined → not string/boolean/number → not passed to element. But `attachProps(this.componentEl, this.props, prevProps)` uses `this.props` which includes `_touched: undefined` → `node["_touched"] = undefined`. watchBoolean(undefined)... might warn or set false. Risky.

Safer: spread conditionally: `{...(submitted ? { _touched: true } : {})}`. Then key absent entirely.

Hmm, wait. Actually there's another consideration — does the msg render require touched? `showMsg = isMsgDefinedAndInputTouched(msg, touched)` → `Boolean(msg) && touched === true`. So yes.

Also `hasError` for aria-describedby requires `_touched === true`.

OK. Also note: the component sets `_touched = true` on blur anyway, so after user tabs out of a field, errors show. That's good UX. We just need submit to force it.

Now, the value: should we control `_value`? If we pass `_value={value}` on every render, it's fine. And `_on={{ onInput: (e, value) => ... }}` — wait, `_on` object recreated each render → attachProps sets node._on = newObj → Stencil watcher validateOn → setState. Fine.

Hmm, but does `_on` need to be stable? Not necessary.

Actually — careful: does the input component need `_value` to be controlled, or does it keep internal state? KoliBri inputs are controlled-ish: state._value from prop. If we don't pass `_value`, it keeps internal. Let's pass `_value` for controlled behavior.

Let me check: does setting `_value` prop trigger re-render and reset? It's fine.

Wait, one risk: passing `_value` on every keystroke — the component receives new value prop; there may be cursor jump issues but generally fine.

Actually, maybe simpler: use `_on.onInput` to capture the value into React state, and pass `_value` back. Let's do controlled.

Hmm, but there's a subtlety: `onInput` handler signature `(event, value)`. And `onChange` also `(event, value)`.

Let me now also double check the `_alert` behavior for the msg: `alert: message?._alert ?? alert` where `alert` = `showAsAlert()` = `Boolean(_touched) && !inputHasFocus`. So role="alert" is applied when touched and not focused. Combined with `_alert` in msg if we set it. Note `handleAlertTimeout` sets `_alert` false after 10s — but that's on KolAlertWc, not the FormFieldMsg (which passes onAlertTimeout undefined... actually FormFieldMsgFc doesn't pass onAlertTimeout, so no auto-reset). Wait it does: `h(KolAlertFc, {..., alert: ..., hasCloser: false, ...})` — no onAlertTimeout. So role="alert" persists. But `role=alert` on an element that already exists with content doesn't re-announce on content change necessarily... it does when content changes within a live region.

Hmm, one thing: role="alert" region appearing — screen readers announce when live region is added to DOM. Since the msg div is conditionally rendered (`showMsg && ...`), adding it with role=alert should announce. 

Now form-level: `KolForm` with `_errorList` gives an error summary with links that focus fields via `document.querySelector(selector)`. The selector must match the actual input's id inside... wait, `handleLinkClick` does `document.querySelector(selector)` — but inputs are in shadow DOM? The kol-input-text host is in light DOM; the actual `<input>` is inside shadow root. `document.querySelector('#username')` would find the custom element if we set id on it... but does kol-input-text accept an `id` prop? Looking at KolInputText interface — no `_id`. But the React wrapper passes through `id` attribute? In `render()`, `id` is a string → `acc["id"]` passed to createElement → React sets `id` attribute on the custom element host. So `document.querySelector('#login-username')` finds `<kol-input-text id="login-username">`. Then `.focus()` — does the host have focus()? Yes! `focus: (options?) => Promise<void>` is a method on KolInputText. But `handleLinkClick` does `targetElement.focus(options ? options : fallback)` — the host's focus accepts options. 

Actually wait: `typeof targetElement.focus === 'function'` → true, and it calls `targetElement.focus(options)` where options may be `{behavior:'smooth', block:'nearest'}` — passed to KolFocusOptions. Let me check KolFocusOptions — probably `{preventScroll?, focusOptions?}`. Let's not over-worry.

Hmm, but does `document.querySelector` find it? The host element is in the light DOM of kol-form's shadow... kol-form renders `<form>` in shadow with `<slot>` → children are in light DOM under kol-form, accessible via document. Yes.

So errorList selector: `#login-username`.

But careful: errorList `selector` type is `string | EventCallback<Event>`. Validation: `Array.isArray(value) && value.find(v => !(typeof v === 'string' || typeof v === 'function')) === undefined`. Wait — that validator requires each item to be a string or function?! But the type is `{message, selector, options}` object. The validator says: find first item that is NOT (string or function) → must be undefined, meaning ALL items must be string or function. That would reject objects! Hmm, that seems like a bug or the validator is stale. Let's check `validateErrorList` again:

```js
const validateErrorList = (component, value) => {
    watchValidator(component, 'errorList', (value) => Array.isArray(value) && value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined, new Set(['string', 'function']), value);
};
```

Hmm so it expects array of strings/functions. But `renderErrorList` uses `error.message` and `error.selector`. Contradiction. Let me check watchValidator behavior on invalid — probably logs a warning and doesn't set state, meaning errorList wouldn't render.

Let me check watchValidator implementation.

This is an important API uncertainty. Let me check.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn -A35 \"watchValidator = \" node_modules/@public-ui/components/dist/esm/*.js | head -50"
}
```

(no output)

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"KolFocusOptions\" -A8 node_modules/@public-ui/components/dist/types/schema/interfaces/*.d.ts | head -20; echo '=== validateErrorList in form ==='; grep -rn \"validateErrorList\" node_modules/@public-ui/components/dist/esm/*.js | head"
}
```

ort\":[\"validateAllowMultiSort\"],\"_data\":[\"validateData\"],\"_dataFoot\":[\"validateDataFoot\"],\"_fixedCols\":[\"validateFixedCols\"],\"_paginationPosition\":[\"validatePaginationPosition\"],\"_hasSettingsMenu\":[\"validateHasSettingsMenu\"],\"_headers\":[\"validateHeaders\"],\"_label\":[\"validateLabel\"],\"_selection\":[\"validateSelection\"],\"_on\":[\"validateOn\"],\"_pagination\":[\"validatePagination\"]}]]],[\"kol-table-stateless\",[[289,\"kol-table-stateless\",{\"_ariaLabelledby\":[1,\"_aria-labelledby\"],\"_data\":[1],\"_dataFoot\":[1,\"_data-foot\"],\"_fixedCols\":[16],\"_headerCells\":[1,\"_header-cells\"],\"_label\":[1],\"_loading\":[4],\"_on\":[16],\"_selection\":[1],\"_hasSettingsMenu\":[4,\"_has-settings-menu\"],\"_variant\":[1],\"resolvedElements\":[32]},null,{\"_ariaLabelledby\":[\"validateAriaLabelledby\"]}]]],[\"kol-table-stateless-wc\",[[260,\"kol-table-stateless-wc\",{\"externalLabelElements\":[16],\"_ariaLabelledby\":[1,\"_aria-labelledby\"],\"_data\":[1],\"_dataFoot\":[1,\"_data-foot\"],\"_fixedCols\":[16],\"_headerCells\":[1,\"_header-cells\"],\"_label\":[1],\"_loading\":[4],\"_on\":[16],\"_selection\":[1],\"_variant\":[1],\"_hasSettingsMenu\":[4,\"_has-settings-menu\"],\"state\":[32],\"tableDivElementHasScrollbar\":[32],\"stickyColsDisabled\":[32],\"previousHeaderCells\":[32]},[[0,\"keydown\",\"handleKeyDown\"],[0,\"changeheadercells\",\"handleSettingsChange\"]],{\"externalLabelElements\":[\"onExternalLabelElementsChange\"],\"_ariaLabelledby\":[\"validateAriaLabelledby\"],\"_hasSettingsMenu\":[\"validateHasSettingsMenu\"],\"_data\":[\"validateData\"],\"_dataFoot\":[\"validateDataFoot\"],\"_fixedCols\":[\"validateFixedCols\"],\"_headerCells\":[\"validateHeaderCells\"],\"_label\":[\"validateLabel\"],\"_loading\":[\"validateLoading\"],\"_on\":[\"validateOn\"],\"_selection\":[\"validateSelection\"],\"_variant\":[\"validateVariantClassName\"]}]]],[\"kol-tabs\",[[289,\"kol-tabs\",{\"_align\":[1],\"_behavior\":[1],\"_hasCreateButton\":[4,\"_has-create-button\"],\"_label\":[1],\"_on\":[16],\"_selected\":[1538],\"_tabs\":[1],\"state\":[32],\"focus\":[64],\"click\":[64]},null,{\"_align\":[\"validateAlign\"],\"_behavior\":[\"validateBehavior\"],\"_hasCreateButton\":[\"validateHasCreateButton\"],\"_label\":[\"validateLabel\"],\"_on\":[\"validateOn\"],\"_selected\":[\"validateSelected\"],\"_tabs\":[\"validateTabs\"]}]]],[\"kol-textarea\",[[289,\"kol-textarea\",{\"_accessKey\":[1,\"_access-key\"],\"_adjustHeight\":[4,\"_adjust-height\"],\"_ariaDetails\":[1,\"_aria-details\"],\"_disabled\":[4],\"_hideMsg\":[4,\"_hide-msg\"],\"_hideLabel\":[4,\"_hide-label\"],\"_hint\":[1],\"_icons\":[1],\"_infoPopover\":[8,\"_info-popover\"],\"_label\":[1],\"_maxLength\":[2,\"_max-length\"],\"_hasCounter\":[4,\"_has-counter\"],\"_maxLengthBehavior\":[1,\"_max-length-behavior\"],\"_msg\":[1],\"_name\":[1],\"_on\":[16],\"_placeholder\":[1],\"_readOnly\":[4,\"_read-only\"],\"_resize\":[1],\"_required\":[4],\"_rows\":[1026],\"_shortKey\":[1,\"_short-key\"],\"_spellCheck\":[4,\"_spell-check\"],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_touched\":[1540],\"_value\":[1537],\"_variant\":[1],\"state\":[32],\"inputHasFocus\":[32],\"getValue\":[64],\"focus\":[64],\"click\":[64]},null,{\"_ariaDetails\":[\"validateAriaDetails\"],\"_accessKey\":[\"validateAccessKey\"],\"_adjustHeight\":[\"validateAdjustHeight\"],\"_disabled\":[\"validateDisabled\"],\"_hideMsg\":[\"validateHideMsg\"],\"_hideLabel\":[\"validateHideLabel\"],\"_hasCounter\":[\"validateHasCounter\"],\"_hint\":[\"validateHint\"],\"_icons\":[\"validateIcons\"],\"_label\":[\"validateLabel\"],\"_maxLength\":[\"validateMaxLength\"],\"_maxLengthBehavior\":[\"validateMaxLengthBehavior\"],\"_msg\":[\"validateMsg\"],\"_name\":[\"validateName\"],\"_on\":[\"validateOn\"],\"_placeholder\":[\"validatePlaceholder\"],\"_readOnly\":[\"validateReadOnly\"],\"_resize\":[\"validateResize\"],\"_required\":[\"validateRequired\"],\"_rows\":[\"validateRows\"],\"_shortKey\":[\"validateShortKey\"],\"_spellCheck\":[\"validateSpellCheck\"],\"_syncValueBySelector\":[\"validateSyncValueBySelector\"],\"_touched\":[\"validateTouched\"],\"_value\":[\"validateValue\"],\"_variant\":[\"validateVariant\"]}]]],[\"kol-toast-container\",[[289,\"kol-toast-container\",{\"state\":[32],\"enqueue\":[64],\"closeAll\":[64]}]]],[\"kol-toolbar\",[[289,\"kol-toolbar\",{\"_label\":[1],\"_items\":[16],\"_orientation\":[1],\"state\":[32],\"currentIndex\":[32],\"focus\":[64],\"click\":[64]},[[0,\"keydown\",\"handleKeyDown\"],[2,\"focusout\",\"handleFocusout\"]],{\"_label\":[\"validateLabel\"],\"_items\":[\"validateItems\"],\"_orientation\":[\"validateOrientation\"]}]]],[\"kol-tooltip-wc\",[[256,\"kol-tooltip-wc\",{\"_badgeText\":[1,\"_badge-text\"],\"_align\":[1],\"_id\":[1],\"_label\":[1],\"hideTooltip\":[64]},null,{\"_align\":[\"validateAlign\"],\"_id\":[\"validateId\"],\"_label\":[\"validateLabel\"]}]]],[\"kol-tree\",[[289,\"kol-tree\",{\"_label\":[1],\"focus\":[64]}]]],[\"kol-tree-item\",[[289,\"kol-tree-item\",{\"_active\":[4],\"_label\":[1],\"_open\":[4],\"_href\":[1],\"focus\":[64],\"expand\":[64],\"collapse\":[64],\"isOpen\":[64]}]]],[\"kol-tree-item-wc\",[[260,\"kol-tree-item-wc\",{\"_active\":[4],\"_label\":[1],\"_open\":[4],\"_href\":[1],\"level\":[32],\"state\":[32],\"focus\":[64],\"expand\":[64],\"collapse\":[64],\"isOpen\":[64]},null,{\"_active\":[\"validateActive\"],\"_label\":[\"validateLabel\"],\"_open\":[\"validateOpen\"],\"_href\":[\"validateHref\"]}]]],[\"kol-tree-wc\",[[260,\"kol-tree-wc\",{\"_label\":[1],\"state\":[32],\"focus\":[64],\"invalidateOpenItemsCache\":[64]},[[0,\"keydown\",\"handleKeyDown\"],[0,\"focusin\",\"handleFocusIn\"],[0,\"focusout\",\"handleFocusOut\"]],{\"_label\":[\"validateLabel\"]}]]],[\"kol-version\",[[289,\"kol-version\",{\"_label\":[1],\"state\":[32]},null,{\"_label\":[\"validateLabel\"]}]]],[\"test-component\",[[0,\"test-component\"]]]]"), options);
node_modules/@public-ui/components/dist/esm/loader.js:12:  return bootstrapLazy(JSON.parse("[[\"kol-abbr\",[[801,\"kol-abbr\",{\"_label\":[1]}]]],[\"kol-accordion\",[[289,\"kol-accordion\",{\"_disabled\":[4],\"_label\":[1],\"_level\":[2],\"_on\":[16],\"_open\":[1540],\"state\":[32],\"focus\":[64],\"click\":[64]},null,{\"_disabled\":[\"validateDisabled\"],\"_label\":[\"validateLabel\"],\"_level\":[\"validateLevel\"],\"_on\":[\"validateOn\"],\"_open\":[\"validateOpen\"]}]]],[\"kol-alert\",[[289,\"kol-alert\",{\"_alert\":[4],\"_hasCloser\":[4,\"_has-closer\"],\"_label\":[1],\"_level\":[2],\"_on\":[16],\"_type\":[1],\"_variant\":[1],\"state\":[32]}]]],[\"kol-alert-wc\",[[260,\"kol-alert-wc\",{\"_alert\":[4],\"_hasCloser\":[4,\"_has-closer\"],\"_label\":[1],\"_level\":[2],\"_on\":[16],\"_type\":[1],\"_variant\":[1],\"state\":[32]},null,{\"_alert\":[\"validateAlert\"],\"_hasCloser\":[\"validateHasCloser\"],\"_label\":[\"validateLabel\"],\"_level\":[\"validateLevel\"],\"_on\":[\"validateOn\"],\"_type\":[\"validateType\"],\"_variant\":[\"validateVariant\"]}]]],[\"kol-avatar\",[[801,\"kol-avatar\",{\"_color\":[1],\"_label\":[1],\"_src\":[1],\"initials\":[32]},null,{\"_color\":[\"watchColor\"],\"_label\":[\"watchLabel\"],\"_src\":[\"watchSrc\"]}]]],[\"kol-badge\",[[289,\"kol-badge\",{\"_color\":[1],\"_icons\":[1],\"_label\":[1],\"_smartButton\":[1,\"_smart-button\"],\"state\":[32],\"focus\":[64]},null,{\"_icons\":[\"validateIcons\"],\"_color\":[\"validateColor\"],\"_smartButton\":[\"validateSmartButton\"]}]]],[\"kol-breadcrumb\",[[289,\"kol-breadcrumb\",{\"_label\":[1],\"_links\":[1],\"state\":[32]},null,{\"_label\":[\"validateLabel\"],\"_links\":[\"validateLinks\"]}]]],[\"kol-button\",[[289,\"kol-button\",{\"_accessKey\":[1,\"_access-key\"],\"_ariaControls\":[1,\"_aria-controls\"],\"_ariaDescription\":[1,\"_aria-description\"],\"_ariaExpanded\":[4,\"_aria-expanded\"],\"_ariaSelected\":[4,\"_aria-selected\"],\"_customClass\":[1,\"_custom-class\"],\"_disabled\":[4],\"_hideLabel\":[4,\"_hide-label\"],\"_icons\":[1],\"_inline\":[4],\"_label\":[1],\"_name\":[1],\"_on\":[16],\"_role\":[1],\"_shortKey\":[1,\"_short-key\"],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_type\":[1],\"_value\":[8],\"_variant\":[1],\"getValue\":[64],\"focus\":[64],\"click\":[64]}]]],[\"kol-button-link\",[[289,\"kol-button-link\",{\"_accessKey\":[1,\"_access-key\"],\"_ariaControls\":[1,\"_aria-controls\"],\"_ariaDescription\":[1,\"_aria-description\"],\"_ariaExpanded\":[4,\"_aria-expanded\"],\"_ariaSelected\":[4,\"_aria-selected\"],\"_disabled\":[4],\"_hideLabel\":[4,\"_hide-label\"],\"_icons\":[1],\"_inline\":[4],\"_label\":[1],\"_name\":[1],\"_on\":[16],\"_role\":[1],\"_shortKey\":[1,\"_short-key\"],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_type\":[1],\"_value\":[8],\"_variant\":[1],\"getValue\":[64],\"focus\":[64],\"click\":[64]}]]],[\"kol-button-wc\",[[260,\"kol-button-wc\",{\"_accessKey\":[1,\"_access-key\"],\"_ariaControls\":[1,\"_aria-controls\"],\"_ariaDescription\":[1,\"_aria-description\"],\"_ariaExpanded\":[4,\"_aria-expanded\"],\"_ariaHasPopup\":[1,\"_aria-has-popup\"],\"_ariaSelected\":[4,\"_aria-selected\"],\"_customClass\":[1,\"_custom-class\"],\"_disabled\":[4],\"_hideLabel\":[4,\"_hide-label\"],\"_icons\":[1],\"_id\":[1],\"_inline\":[4],\"_label\":[1],\"_name\":[1],\"_on\":[16],\"_role\":[1],\"_shortKey\":[1,\"_short-key\"],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_tabIndex\":[2,\"_tab-index\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_type\":[1],\"_value\":[8],\"_variant\":[1],\"state\":[32],\"focus\":[64],\"click\":[64]},null,{\"_accessKey\":[\"validateAccessKey\"],\"_ariaControls\":[\"validateAriaControls\"],\"_ariaDescription\":[\"validateAriaDescription\"],\"_ariaExpanded\":[\"validateAriaExpanded\"],\"_ariaSelected\":[\"validateAriaSelected\"],\"_customClass\":[\"validateCustomClass\"],\"_disabled\":[\"validateDisabled\"],\"_hideLabel\":[\"validateHideLabel\"],\"_icons\":[\"validateIcons\"],\"_id\":[\"validateId\"],\"_inline\":[\"validateInline\"],\"_label\":[\"validateLabel\"],\"_name\":[\"validateName\"],\"_on\":[\"validateOn\"],\"_role\":[\"validateRole\"],\"_shortKey\":[\"validateShortKey\"],\"_syncValueBySelector\":[\"validateSyncValueBySelector\"],\"_tabIndex\":[\"validateTabIndex\"],\"_tooltipAlign\":[\"validateTooltipAlign\"],\"_type\":[\"validateType\"],\"_value\":[\"validateValue\"],\"_variant\":[\"validateVariant\"]}]]],[\"kol-card\",[[289,\"kol-card\",{\"_on\":[16],\"_hasCloser\":[4,\"_has-closer\"],\"_href\":[1],\"_label\":[1],\"_level\":[2],\"_target\":[1],\"focus\":[64],\"click\":[64]}]]],[\"kol-card-wc\",[[260,\"kol-card-wc\",{\"_hasCloser\":[4,\"_has-closer\"],\"_headingId\":[1,\"_heading-id\"],\"_href\":[1],\"_label\":[1],\"_level\":[2],\"_on\":[16],\"_target\":[1],\"state\":[32],\"focus\":[64],\"click\":[64]},null,{\"_hasCloser\":[\"validateHasCloser\"],\"_href\":[\"validateHref\"],\"_label\":[\"validateLabel\"],\"_level\":[\"validateLevel\"],\"_on\":[\"validateOn\"],\"_target\":[\"validateTarget\"]}]]],[\"kol-click-button\",[[769,\"kol-click-button\",{\"_label\":[1],\"focus\":[64]},null,{\"_label\":[\"watchLabel\"]}]]],[\"kol-combobox\",[[289,\"kol-combobox\",{\"_accessKey\":[1,\"_access-key\"],\"_ariaDetails\":[1,\"_aria-details\"],\"_placeholder\":[1],\"_disabled\":[4],\"_hideMsg\":[4,\"_hide-msg\"],\"_hideLabel\":[4,\"_hide-label\"],\"_hint\":[1],\"_icons\":[1],\"_infoPopover\":[8,\"_info-popover\"],\"_label\":[1],\"_msg\":[1],\"_name\":[1],\"_on\":[16],\"_hasClearButton\":[4,\"_has-clear-button\"],\"_suggestions\":[1],\"_required\":[4],\"_shortKey\":[1,\"_short-key\"],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_touched\":[1540],\"_value\":[1537],\"_variant\":[1],\"blockSuggestionMouseOver\":[32],\"_isOpen\":[32],\"_filteredSuggestions\":[32],\"state\":[32],\"inputHasFocus\":[32],\"getValue\":[64],\"focus\":[64],\"click\":[64]},[[0,\"keydown\",\"handleKeyDown\"],[0,\"click\",\"handleWindowClick\"],[1,\"mousemove\",\"handleMouseEvent\"],[0,\"focusin\",\"handleFocusIn\"],[0,\"focusout\",\"handleFocusOut\"]],{\"_ariaDetails\":[\"validateAriaDetails\"],\"_placeholder\":[\"validatePlaceholder\"],\"_accessKey\":[\"validateAccessKey\"],\"_disabled\":[\"validateDisabled\"],\"_hideMsg\":[\"validateHideMsg\"],\"_hideLabel\":[\"validateHideLabel\"],\"_hint\":[\"validateHint\"],\"_icons\":[\"validateIcons\"],\"_label\":[\"validateLabel\"],\"_msg\":[\"validateMsg\"],\"_name\":[\"validateName\"],\"_on\":[\"validateOn\"],\"_shortKey\":[\"validateShortKey\"],\"_suggestions\":[\"validateSuggestions\"],\"_hasClearButton\":[\"validateHasClearButton\"],\"_required\":[\"validateRequired\"],\"_syncValueBySelector\":[\"validateSyncValueBySelector\"],\"_touched\":[\"validateTouched\"],\"_value\":[\"validateValue\"],\"_variant\":[\"validateVariant\"]}]]],[\"kol-details\",[[289,\"kol-details\",{\"_disabled\":[4],\"_label\":[1],\"_level\":[2],\"_on\":[16],\"_open\":[1540],\"state\":[32],\"focus\":[64],\"click\":[64]},null,{\"_disabled\":[\"validateDisabled\"],\"_label\":[\"validateLabel\"],\"_level\":[\"validateLevel\"],\"_on\":[\"validateOn\"],\"_open\":[\"validateOpen\"]}]]],[\"kol-dialog\",[[289,\"kol-dialog\",{\"_label\":[1],\"_level\":[2],\"_on\":[16],\"_width\":[1],\"_variant\":[1],\"openModal\":[64],\"showModal\":[64],\"show\":[64],\"close\":[64],\"closeModal\":[64]}]]],[\"kol-dialog-wc\",[[260,\"kol-dialog-wc\",{\"_label\":[1],\"_level\":[2],\"_on\":[16],\"_width\":[1],\"_variant\":[1],\"isModal\":[32],\"state\":[32],\"show\":[64],\"showModal\":[64],\"openModal\":[64],\"close\":[64],\"closeModal\":[64]},null,{\"_label\":[\"validateLabel\"],\"_level\":[\"validateLevel\"],\"_on\":[\"validateOn\"],\"_width\":[\"validateWidth\"],\"_variant\":[\"validateVariant\"]}]]],[\"kol-drawer\",[[289,\"kol-drawer\",{\"_open\":[4],\"_align\":[1],\"_hasCloser\":[4,\"_has-closer\"],\"_label\":[1],\"_level\":[2],\"_on\":[16],\"isModal\":[32],\"state\":[32],\"show\":[64],\"showModal\":[64],\"open\":[64],\"close\":[64]},null,{\"_label\":[\"validateLabel\"],\"_align\":[\"validateAlign\"],\"_hasCloser\":[\"validateHasCloser\"],\"_level\":[\"validateLevel\"],\"_open\":[\"validateOpen\"],\"_on\":[\"validateOn\"]}]]],[\"kol-form\",[[289,\"kol-form\",{\"_on\":[16],\"_requiredText\":[8,\"_required-text\"],\"_errorList\":[16],\"state\":[32],\"focusErrorList\":[64]},null,{\"_on\":[\"validateOn\"],\"_requiredText\":[\"validateRequiredText\"],\"_errorList\":[\"validateErrorList\"]}]]],[\"kol-heading\",[[801,\"kol-heading\",{\"_label\":[1],\"_level\":[2],\"_secondaryHeadline\":[1,\"_secondary-headline\"]},null,{\"_label\":[\"watchLabel\"],\"_level\":[\"watchLevel\"],\"_secondaryHeadline\":[\"watchSecondaryHeadline\"]}]]],[\"kol-icon\",[[801,\"kol-icon\",{\"_icons\":[1],\"_label\":[1]},null,{\"_icons\":[\"watchIcons\"],\"_label\":[\"watchLabel\"]}]]],[\"kol-image\",[[801,\"kol-image\",{\"_alt\":[1],\"_loading\":[1],\"_sizes\":[1],\"_src\":[1],\"_srcset\":[1],\"_on\":[16]},null,{\"_alt\":[\"watchAlt\"],\"_loading\":[\"watchLoading\"],\"_sizes\":[\"watchSizes\"],\"_src\":[\"watchSrc\"],\"_srcset\":[\"watchSrcset\"]}]]],[\"kol-input-checkbox\",[[289,\"kol-input-checkbox\",{\"_accessKey\":[1,\"_access-key\"],\"_checked\":[1540],\"_hideMsg\":[4,\"_hide-msg\"],\"_disabled\":[4],\"_hideLabel\":[4,\"_hide-label\"],\"_hint\":[1],\"_icons\":[1],\"_infoPopover\":[8,\"_info-popover\"],\"_indeterminate\":[1540],\"_label\":[1],\"_labelAlign\":[1,\"_label-align\"],\"_msg\":[1],\"_name\":[1],\"_on\":[16],\"_required\":[4],\"_ariaDetails\":[1,\"_aria-details\"],\"_shortKey\":[1,\"_short-key\"],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_touched\":[1540],\"_value\":[8],\"_variant\":[1],\"state\":[32],\"inputHasFocus\":[32],\"getValue\":[64],\"focus\":[64],\"click\":[64]},null,{\"_accessKey\":[\"validateAccessKey\"],\"_ariaDetails\":[\"validateAriaDetails\"],\"_checked\":[\"validateChecked\"],\"_disabled\":[\"validateDisabled\"],\"_hideMsg\":[\"validateHideMsg\"],\"_hideLabel\":[\"validateHideLabel\"],\"_hint\":[\"validateHint\"],\"_icons\":[\"validateIcons\"],\"_indeterminate\":[\"validateIndeterminate\"],\"_label\":[\"validateLabel\"],\"_labelAlign\":[\"validateLabelAlign\"],\"_msg\":[\"validateMsg\"],\"_name\":[\"validateName\"],\"_on\":[\"validateOn\"],\"_required\":[\"validateRequired\"],\"_shortKey\":[\"validateShortKey\"],\"_syncValueBySelector\":[\"validateSyncValueBySelector\"],\"_touched\":[\"validateTouched\"],\"_value\":[\"validateValue\"],\"_variant\":[\"validateVariant\"]}]]],[\"kol-input-color\",[[289,\"kol-input-color\",{\"_accessKey\":[1,\"_access-key\"],\"_ariaDetails\":[1,\"_aria-details\"],\"_autoComplete\":[1,\"_auto-complete\"],\"_disabled\":[4],\"_hideMsg\":[4,\"_hide-msg\"],\"_hideLabel\":[4,\"_hide-label\"],\"_hint\":[1],\"_icons\":[1],\"_infoPopover\":[8,\"_info-popover\"],\"_label\":[1],\"_msg\":[1],\"_name\":[1],\"_on\":[16],\"_shortKey\":[1,\"_short-key\"],\"_smartButton\":[1,\"_smart-button\"],\"_suggestions\":[1],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_touched\":[1540],\"_value\":[1],\"_variant\":[1],\"state\":[32],\"inputHasFocus\":[32],\"getValue\":[64],\"focus\":[64],\"click\":[64]},null,{\"_accessKey\":[\"validateAccessKey\"],\"_ariaDetails\":[\"validateAriaDetails\"],\"_autoComplete\":[\"validateAutoComplete\"],\"_disabled\":[\"validateDisabled\"],\"_hideMsg\":[\"validateHideMsg\"],\"_hideLabel\":[\"validateHideLabel\"],\"_hint\":[\"validateHint\"],\"_icons\":[\"validateIcons\"],\"_label\":[\"validateLabel\"],\"_msg\":[\"validateMsg\"],\"_name\":[\"validateName\"],\"_on\":[\"validateOn\"],\"_shortKey\":[\"validateShortKey\"],\"_smartButton\":[\"validateSmartButton\"],\"_suggestions\":[\"validateSuggestions\"],\"_syncValueBySelector\":[\"validateSyncValueBySelector\"],\"_touched\":[\"validateTouched\"],\"_value\":[\"validateValue\"],\"_variant\":[\"validateVariant\"]}]]],[\"kol-input-date\",[[289,\"kol-input-date\",{\"_accessKey\":[1,\"_access-key\"],\"_ariaDetails\":[1,\"_aria-details\"],\"_autoComplete\":[1,\"_auto-complete\"],\"_disabled\":[4],\"_hideMsg\":[4,\"_hide-msg\"],\"_hideLabel\":[4,\"_hide-label\"],\"_hint\":[1],\"_icons\":[1],\"_infoPopover\":[8,\"_info-popover\"],\"_label\":[1],\"_max\":[1],\"_min\":[1],\"_msg\":[1],\"_name\":[1],\"_on\":[16],\"_readOnly\":[4,\"_read-only\"],\"_required\":[4],\"_shortKey\":[1,\"_short-key\"],\"_smartButton\":[1,\"_smart-button\"],\"_suggestions\":[1],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_step\":[8],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_touched\":[1540],\"_type\":[1],\"_value\":[1537],\"_variant\":[1],\"_initialValueType\":[32],\"state\":[32],\"inputHasFocus\":[32],\"getValue\":[64],\"focus\":[64],\"click\":[64],\"reset\":[64]},null,{\"_accessKey\":[\"validateAccessKey\"],\"_ariaDetails\":[\"validateAriaDetails\"],\"_autoComplete\":[\"validateAutoComplete\"],\"_disabled\":[\"validateDisabled\"],\"_hideMsg\":[\"validateHideMsg\"],\"_hideLabel\":[\"validateHideLabel\"],\"_hint\":[\"validateHint\"],\"_icons\":[\"validateIcons\"],\"_label\":[\"validateLabel\"],\"_max\":[\"validateMax\"],\"_min\":[\"validateMin\"],\"_msg\":[\"validateMsg\"],\"_name\":[\"validateName\"],\"_on\":[\"validateOn\"],\"_readOnly\":[\"validateReadOnly\"],\"_required\":[\"validateRequired\"],\"_shortKey\":[\"validateShortKey\"],\"_smartButton\":[\"validateSmartButton\"],\"_suggestions\":[\"validateSuggestions\"],\"_step\":[\"validateStep\"],\"_syncValueBySelector\":[\"validateSyncValueBySelector\"],\"_touched\":[\"validateTouched\"],\"_type\":[\"validateType\"],\"_value\":[\"validateValue\"],\"_variant\":[\"validateVariant\"]}]]],[\"kol-input-email\",[[289,\"kol-input-email\",{\"_accessKey\":[1,\"_access-key\"],\"_ariaDetails\":[1,\"_aria-details\"],\"_autoComplete\":[1,\"_auto-complete\"],\"_hasCounter\":[4,\"_has-counter\"],\"_maxLengthBehavior\":[1,\"_max-length-behavior\"],\"_disabled\":[4],\"_hideMsg\":[4,\"_hide-msg\"],\"_hideLabel\":[4,\"_hide-label\"],\"_hint\":[1],\"_icons\":[1],\"_infoPopover\":[8,\"_info-popover\"],\"_label\":[1],\"_maxLength\":[2,\"_max-length\"],\"_msg\":[1],\"_multiple\":[4],\"_name\":[1],\"_on\":[16],\"_pattern\":[1],\"_placeholder\":[1],\"_readOnly\":[4,\"_read-only\"],\"_required\":[4],\"_shortKey\":[1,\"_short-key\"],\"_smartButton\":[1,\"_smart-button\"],\"_suggestions\":[1],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_touched\":[1540],\"_value\":[1537],\"_variant\":[1],\"state\":[32],\"inputHasFocus\":[32],\"getValue\":[64],\"focus\":[64],\"click\":[64]},null,{\"_accessKey\":[\"validateAccessKey\"],\"_ariaDetails\":[\"validateAriaDetails\"],\"_autoComplete\":[\"validateAutoComplete\"],\"_disabled\":[\"validateDisabled\"],\"_hideMsg\":[\"validateHideMsg\"],\"_hideLabel\":[\"validateHideLabel\"],\"_hasCounter\":[\"validateHasCounter\"],\"_hint\":[\"validateHint\"],\"_icons\":[\"validateIcons\"],\"_label\":[\"validateLabel\"],\"_maxLength\":[\"validateMaxLength\"],\"_msg\":[\"validateMsg\"],\"_multiple\":[\"validateMultiple\"],\"_name\":[\"validateName\"],\"_on\":[\"validateOn\"],\"_pattern\":[\"validatePattern\"],\"_placeholder\":[\"validatePlaceholder\"],\"_readOnly\":[\"validateReadOnly\"],\"_required\":[\"validateRequired\"],\"_shortKey\":[\"validateShortKey\"],\"_suggestions\":[\"validateSuggestions\"],\"_smartButton\":[\"validateSmartButton\"],\"_syncValueBySelector\":[\"validateSyncValueBySelector\"],\"_touched\":[\"validateTouched\"],\"_value\":[\"validateValue\"],\"_maxLengthBehavior\":[\"validateMaxLengthBehavior\"],\"_variant\":[\"validateVariant\"]}]]],[\"kol-input-file\",[[289,\"kol-input-file\",{\"_accept\":[1],\"_accessKey\":[1,\"_access-key\"],\"_ariaDetails\":[1,\"_aria-details\"],\"_disabled\":[4],\"_hideMsg\":[4,\"_hide-msg\"],\"_hideLabel\":[4,\"_hide-label\"],\"_hint\":[1],\"_icons\":[1],\"_infoPopover\":[8,\"_info-popover\"],\"_label\":[1],\"_msg\":[1],\"_multiple\":[4],\"_name\":[1],\"_on\":[16],\"_required\":[4],\"_shortKey\":[1,\"_short-key\"],\"_smartButton\":[1,\"_smart-button\"],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_touched\":[1540],\"_variant\":[1],\"filename\":[32],\"hasFileSelected\":[32],\"state\":[32],\"inputHasFocus\":[32],\"getValue\":[64],\"focus\":[64],\"click\":[64],\"reset\":[64]},null,{\"_accept\":[\"validateAccept\"],\"_accessKey\":[\"validateAccessKey\"],\"_ariaDetails\":[\"validateAriaDetails\"],\"_disabled\":[\"validateDisabled\"],\"_hideMsg\":[\"validateHideMsg\"],\"_hideLabel\":[\"validateHideLabel\"],\"_hint\":[\"validateHint\"],\"_icons\":[\"validateIcons\"],\"_label\":[\"validateLabel\"],\"_msg\":[\"validateMsg\"],\"_multiple\":[\"validateMultiple\"],\"_name\":[\"validateName\"],\"_on\":[\"validateOn\"],\"_required\":[\"validateRequired\"],\"_shortKey\":[\"validateShortKey\"],\"_smartButton\":[\"validateSmartButton\"],\"_syncValueBySelector\":[\"validateSyncValueBySelector\"],\"_touched\":[\"validateTouched\"],\"_variant\":[\"validateVariant\"]}]]],[\"kol-input-number\",[[289,\"kol-input-number\",{\"_accessKey\":[1,\"_access-key\"],\"_ariaDetails\":[1,\"_aria-details\"],\"_autoComplete\":[1,\"_auto-complete\"],\"_disabled\":[4],\"_hideMsg\":[4,\"_hide-msg\"],\"_hideLabel\":[4,\"_hide-label\"],\"_hint\":[1],\"_icons\":[1],\"_infoPopover\":[8,\"_info-popover\"],\"_label\":[1],\"_max\":[8],\"_min\":[8],\"_msg\":[1],\"_name\":[1],\"_on\":[16],\"_placeholder\":[1],\"_readOnly\":[4,\"_read-only\"],\"_required\":[4],\"_shortKey\":[1,\"_short-key\"],\"_smartButton\":[1,\"_smart-button\"],\"_suggestions\":[1],\"_step\":[8],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_touched\":[1540],\"_value\":[1544],\"_variant\":[1],\"state\":[32],\"_initialValueType\":[32],\"inputHasFocus\":[32],\"getValue\":[64],\"focus\":[64],\"click\":[64]},null,{\"_accessKey\":[\"validateAccessKey\"],\"_ariaDetails\":[\"validateAriaDetails\"],\"_autoComplete\":[\"validateAutoComplete\"],\"_disabled\":[\"validateDisabled\"],\"_hideMsg\":[\"validateHideMsg\"],\"_hideLabel\":[\"validateHideLabel\"],\"_hint\":[\"validateHint\"],\"_icons\":[\"validateIcons\"],\"_label\":[\"validateLabel\"],\"_max\":[\"validateMax\"],\"_min\":[\"validateMin\"],\"_msg\":[\"validateMsg\"],\"_name\":[\"validateName\"],\"_on\":[\"validateOn\"],\"_placeholder\":[\"validatePlaceholder\"],\"_readOnly\":[\"validateReadOnly\"],\"_required\":[\"validateRequired\"],\"_shortKey\":[\"validateShortKey\"],\"_smartButton\":[\"validateSmartButton\"],\"_suggestions\":[\"validateSuggestions\"],\"_step\":[\"validateStep\"],\"_syncValueBySelector\":[\"validateSyncValueBySelector\"],\"_touched\":[\"validateTouched\"],\"_value\":[\"validateValue\"],\"_variant\":[\"validateVariant\"]}]]],[\"kol-input-password\",[[289,\"kol-input-password\",{\"_accessKey\":[1,\"_access-key\"],\"_ariaDetails\":[1,\"_aria-details\"],\"_autoComplete\":[1,\"_auto-complete\"],\"_hasCounter\":[4,\"_has-counter\"],\"_maxLengthBehavior\":[1,\"_max-length-behavior\"],\"_disabled\":[4],\"_hideMsg\":[4,\"_hide-msg\"],\"_hideLabel\":[4,\"_hide-label\"],\"_hint\":[1],\"_icons\":[1],\"_infoPopover\":[8,\"_info-popover\"],\"_label\":[1],\"_maxLength\":[2,\"_max-length\"],\"_msg\":[1],\"_name\":[1],\"_on\":[16],\"_pattern\":[1],\"_placeholder\":[1],\"_readOnly\":[4,\"_read-only\"],\"_required\":[4],\"_shortKey\":[1,\"_short-key\"],\"_smartButton\":[1,\"_smart-button\"],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_touched\":[1540],\"_value\":[1537],\"_variant\":[1],\"_visibilityToggle\":[4,\"_visibility-toggle\"],\"state\":[32],\"_passwordVisible\":[32],\"inputHasFocus\":[32],\"getValue\":[64],\"focus\":[64],\"click\":[64]},null,{\"_accessKey\":[\"validateAccessKey\"],\"_ariaDetails\":[\"validateAriaDetails\"],\"_autoComplete\":[\"validateAutoComplete\"],\"_maxLengthBehavior\":[\"validateMaxLengthBehavior\"],\"_disabled\":[\"validateDisabled\"],\"_variant\":[\"validateVariant\"],\"_hideMsg\":[\"validateHideMsg\"],\"_hideLabel\":[\"validateHideLabel\"],\"_hasCounter\":[\"validateHasCounter\"],\"_hint\":[\"validateHint\"],\"_icons\":[\"validateIcons\"],\"_label\":[\"validateLabel\"],\"_maxLength\":[\"validateMaxLength\"],\"_msg\":[\"validateMsg\"],\"_name\":[\"validateName\"],\"_on\":[\"validateOn\"],\"_pattern\":[\"validatePattern\"],\"_placeholder\":[\"validatePlaceholder\"],\"_readOnly\":[\"validateReadOnly\"],\"_required\":[\"validateRequired\"],\"_shortKey\":[\"validateShortKey\"],\"_smartButton\":[\"validateSmartButton\"],\"_syncValueBySelector\":[\"validateSyncValueBySelector\"],\"_touched\":[\"validateTouched\"],\"_value\":[\"validateValue\"],\"_visibilityToggle\":[\"validateVisibilityToggle\"]}]]],[\"kol-input-radio\",[[289,\"kol-input-radio\",{\"_ariaDetails\":[1,\"_aria-details\"],\"_disabled\":[4],\"_hideMsg\":[4,\"_hide-msg\"],\"_hideLabel\":[4,\"_hide-label\"],\"_hint\":[1],\"_infoPopover\":[8,\"_info-popover\"],\"_label\":[1],\"_msg\":[1],\"_name\":[1],\"_on\":[16],\"_options\":[1],\"_orientation\":[1],\"_required\":[4],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_touched\":[1540],\"_value\":[1544],\"_variant\":[1],\"state\":[32],\"inputHasFocus\":[32],\"getValue\":[64],\"focus\":[64],\"click\":[64]},null,{\"_tooltipAlign\":[\"validateTooltipAlign\"],\"_ariaDetails\":[\"validateAriaDetails\"],\"_disabled\":[\"validateDisabled\"],\"_hideLabel\":[\"validateHideLabel\"],\"_hideMsg\":[\"validateHideMsg\"],\"_hint\":[\"validateHint\"],\"_label\":[\"validateLabel\"],\"_msg\":[\"validateMsg\"],\"_name\":[\"validateName\"],\"_on\":[\"validateOn\"],\"_options\":[\"validateOptions\"],\"_orientation\":[\"validateOrientation\"],\"_required\":[\"validateRequired\"],\"_syncValueBySelector\":[\"validateSyncValueBySelector\"],\"_touched\":[\"validateTouched\"],\"_value\":[\"validateValue\"],\"_variant\":[\"validateVariant\"]}]]],[\"kol-input-range\",[[289,\"kol-input-range\",{\"_accessKey\":[1,\"_access-key\"],\"_ariaDetails\":[1,\"_aria-details\"],\"_autoComplete\":[1,\"_auto-complete\"],\"_disabled\":[4],\"_hideMsg\":[4,\"_hide-msg\"],\"_hideLabel\":[4,\"_hide-label\"],\"_hint\":[1],\"_icons\":[1],\"_infoPopover\":[8,\"_info-popover\"],\"_label\":[1],\"_max\":[8],\"_min\":[8],\"_msg\":[1],\"_name\":[1],\"_on\":[16],\"_shortKey\":[1,\"_short-key\"],\"_step\":[8],\"_suggestions\":[1],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_touched\":[1540],\"_value\":[1544],\"_variant\":[1],\"state\":[32],\"_initialValueType\":[32],\"inputHasFocus\":[32],\"focus\":[64],\"click\":[64],\"getValue\":[64]},null,{\"_accessKey\":[\"validateAccessKey\"],\"_ariaDetails\":[\"validateAriaDetails\"],\"_autoComplete\":[\"validateAutoComplete\"],\"_disabled\":[\"validateDisabled\"],\"_hideMsg\":[\"validateHideMsg\"],\"_hideLabel\":[\"validateHideLabel\"],\"_hint\":[\"validateHint\"],\"_icons\":[\"validateIcons\"],\"_label\":[\"validateLabel\"],\"_max\":[\"validateMax\"],\"_min\":[\"validateMin\"],\"_msg\":[\"validateMsg\"],\"_name\":[\"validateName\"],\"_on\":[\"validateOn\"],\"_shortKey\":[\"validateShortKey\"],\"_step\":[\"validateStep\"],\"_suggestions\":[\"validateSuggestions\"],\"_syncValueBySelector\":[\"validateSyncValueBySelector\"],\"_touched\":[\"validateTouched\"],\"_value\":[\"validateValue\"],\"_variant\":[\"validateVariant\"]}]]],[\"kol-input-text\",[[289,\"kol-input-text\",{\"_accessKey\":[1,\"_access-key\"],\"_autoComplete\":[1,\"_auto-complete\"],\"_ariaDetails\":[1,\"_aria-details\"],\"_hasCounter\":[4,\"_has-counter\"],\"_maxLengthBehavior\":[1,\"_max-length-behavior\"],\"_disabled\":[4],\"_hideMsg\":[4,\"_hide-msg\"],\"_hideLabel\":[4,\"_hide-label\"],\"_hint\":[1],\"_icons\":[1],\"_infoPopover\":[16],\"_label\":[1],\"_maxLength\":[2,\"_max-length\"],\"_msg\":[1],\"_name\":[1],\"_on\":[16],\"_pattern\":[1],\"_placeholder\":[1],\"_readOnly\":[4,\"_read-only\"],\"_required\":[4],\"_shortKey\":[1,\"_short-key\"],\"_spellCheck\":[4,\"_spell-check\"],\"_suggestions\":[1],\"_smartButton\":[1,\"_smart-button\"],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_touched\":[1540],\"_type\":[1],\"_value\":[1537],\"_variant\":[1],\"state\":[32],\"inputHasFocus\":[32],\"getValue\":[64],\"focus\":[64],\"click\":[64],\"selectionStart\":[64],\"selectionEnd\":[64],\"setSelectionRange\":[64],\"setSelectionStart\":[64],\"setRangeText\":[64]},null,{\"_ariaDetails\":[\"validateAriaDetails\"],\"_accessKey\":[\"validateAccessKey\"],\"_autoComplete\":[\"validateAutoComplete\"],\"_maxLengthBehavior\":[\"validateMaxLengthBehavior\"],\"_disabled\":[\"validateDisabled\"],\"_hideMsg\":[\"validateHideMsg\"],\"_hideLabel\":[\"validateHideLabel\"],\"_hasCounter\":[\"validateHasCounter\"],\"_hint\":[\"validateHint\"],\"_icons\":[\"validateIcons\"],\"_label\":[\"validateLabel\"],\"_maxLength\":[\"validateMaxLength\"],\"_msg\":[\"validateMsg\"],\"_name\":[\"validateName\"],\"_on\":[\"validateOn\"],\"_pattern\":[\"validatePattern\"],\"_placeholder\":[\"validatePlaceholder\"],\"_readOnly\":[\"validateReadOnly\"],\"_required\":[\"validateRequired\"],\"_shortKey\":[\"validateShortKey\"],\"_spellCheck\":[\"validateSpellCheck\"],\"_suggestions\":[\"validateSuggestions\"],\"_smartButton\":[\"validateSmartButton\"],\"_syncValueBySelector\":[\"validateSyncValueBySelector\"],\"_touched\":[\"validateTouched\"],\"_type\":[\"validateType\"],\"_value\":[\"validateValue\"],\"_variant\":[\"validateVariant\"]}]]],[\"kol-kolibri\",[[289,\"kol-kolibri\",{\"_color\":[1],\"_labeled\":[4],\"state\":[32]},null,{\"_color\":[\"validateColor\"],\"_labeled\":[\"validateLabeled\"]}]]],[\"kol-link\",[[801,\"kol-link\",{\"_accessKey\":[1,\"_access-key\"],\"_ariaCurrentValue\":[1,\"_aria-current-value\"],\"_ariaControls\":[1,\"_aria-controls\"],\"_ariaDescription\":[1,\"_aria-description\"],\"_ariaExpanded\":[4,\"_aria-expanded\"],\"_disabled\":[4],\"_download\":[1],\"_hideLabel\":[4,\"_hide-label\"],\"_href\":[1],\"_icons\":[1],\"_inline\":[4],\"_label\":[1],\"_on\":[16],\"_shortKey\":[1,\"_short-key\"],\"_target\":[1],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_variant\":[1],\"ariaCurrent\":[32],\"ariaDescriptionId\":[32],\"expertSlot\":[32],\"focus\":[64]},null,{\"_accessKey\":[\"watchAccessKey\"],\"_ariaCurrentValue\":[\"watchAriaCurrentValue\"],\"_ariaControls\":[\"watchAriaControls\"],\"_ariaDescription\":[\"watchAriaDescription\"],\"_ariaExpanded\":[\"watchAriaExpanded\"],\"_disabled\":[\"watchDisabled\"],\"_download\":[\"watchDownload\"],\"_hideLabel\":[\"watchHideLabel\"],\"_href\":[\"watchHref\"],\"_icons\":[\"watchIcons\"],\"_inline\":[\"watchInline\"],\"_label\":[\"watchLabel\"],\"_on\":[\"watchOn\"],\"_shortKey\":[\"watchShortKey\"],\"_target\":[\"watchTarget\"],\"_tooltipAlign\":[\"watchTooltipAlign\"],\"_variant\":[\"watchVariant\"]}]]],[\"kol-link-button\",[[289,\"kol-link-button\",{\"_accessKey\":[1,\"_access-key\"],\"_ariaCurrentValue\":[1,\"_aria-current-value\"],\"_ariaControls\":[1,\"_aria-controls\"],\"_ariaDescription\":[1,\"_aria-description\"],\"_customClass\":[1,\"_custom-class\"],\"_disabled\":[4],\"_download\":[1],\"_hideLabel\":[4,\"_hide-label\"],\"_href\":[1],\"_icons\":[1],\"_inline\":[4],\"_label\":[1],\"_on\":[16],\"_role\":[1],\"_shortKey\":[1,\"_short-key\"],\"_target\":[1],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_variant\":[1],\"focus\":[64],\"click\":[64]}]]],[\"kol-link-wc\",[[772,\"kol-link-wc\",{\"_accessKey\":[1,\"_access-key\"],\"_ariaCurrentValue\":[1,\"_aria-current-value\"],\"_ariaControls\":[1,\"_aria-controls\"],\"_ariaDescription\":[1,\"_aria-description\"],\"_ariaExpanded\":[4,\"_aria-expanded\"],\"_ariaOwns\":[1,\"_aria-owns\"],\"_customClass\":[1,\"_custom-class\"],\"_disabled\":[4],\"_download\":[1],\"_hideLabel\":[4,\"_hide-label\"],\"_href\":[1],\"_icons\":[1],\"_inline\":[4],\"_label\":[1],\"_on\":[16],\"_role\":[1],\"_shortKey\":[1,\"_short-key\"],\"_tabIndex\":[2,\"_tab-index\"],\"_target\":[1],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_variant\":[1],\"ariaCurrent\":[32],\"ariaDescriptionId\":[32],\"expertSlot\":[32],\"focus\":[64],\"click\":[64]},null,{\"_accessKey\":[\"watchAccessKey\"],\"_ariaCurrentValue\":[\"watchAriaCurrentValue\"],\"_ariaControls\":[\"watchAriaControls\"],\"_ariaDescription\":[\"watchAriaDescription\"],\"_ariaExpanded\":[\"watchAriaExpanded\"],\"_ariaOwns\":[\"watchAriaOwns\"],\"_customClass\":[\"watchCustomClass\"],\"_disabled\":[\"watchDisabled\"],\"_download\":[\"watchDownload\"],\"_hideLabel\":[\"watchHideLabel\"],\"_href\":[\"watchHref\"],\"_icons\":[\"watchIcons\"],\"_inline\":[\"watchInline\"],\"_label\":[\"watchLabel\"],\"_on\":[\"watchOn\"],\"_role\":[\"watchRole\"],\"_shortKey\":[\"watchShortKey\"],\"_tabIndex\":[\"watchTabIndex\"],\"_target\":[\"watchTarget\"],\"_tooltipAlign\":[\"watchTooltipAlign\"],\"_variant\":[\"watchVariant\"]}]]],[\"kol-meter\",[[801,\"kol-meter\",{\"_high\":[2],\"_label\":[1],\"_low\":[2],\"_max\":[2],\"_min\":[2],\"_optimum\":[2],\"_orientation\":[1],\"_unit\":[1],\"_value\":[2]},null,{\"_high\":[\"watchHigh\"],\"_label\":[\"watchLabel\"],\"_low\":[\"watchLow\"],\"_max\":[\"watchMax\"],\"_min\":[\"watchMin\"],\"_optimum\":[\"watchOptimum\"],\"_orientation\":[\"watchOrientation\"],\"_unit\":[\"watchUnit\"],\"_value\":[\"watchValue\"]}]]],[\"kol-modal\",[[289,\"kol-modal\",{\"_label\":[1],\"_on\":[16],\"_width\":[1],\"_variant\":[1],\"openModal\":[64],\"showModal\":[64],\"show\":[64],\"close\":[64],\"closeModal\":[64]}]]],[\"kol-nav\",[[289,\"kol-nav\",{\"_collapsible\":[4],\"_hasCompactButton\":[4,\"_has-compact-button\"],\"_hasIconsWhenExpanded\":[4,\"_has-icons-when-expanded\"],\"_hideLabel\":[4,\"_hide-label\"],\"_label\":[1],\"_links\":[1],\"state\":[32]},null,{\"_collapsible\":[\"validateCollapsible\"],\"_hasCompactButton\":[\"validateHasCompactButton\"],\"_hasIconsWhenExpanded\":[\"validateHasIconsWhenExpanded\"],\"_hideLabel\":[\"validateHideLabel\"],\"_label\":[\"validateLabel\"],\"_links\":[\"validateLinks\"]}]]],[\"kol-pagination\",[[289,\"kol-pagination\",{\"_boundaryCount\":[2,\"_boundary-count\"],\"_customClass\":[1,\"_custom-class\"],\"_label\":[1],\"_hasButtons\":[8,\"_has-buttons\"],\"_page\":[2],\"_pageSize\":[1026,\"_page-size\"],\"_pageSizeOptions\":[1,\"_page-size-options\"],\"_on\":[16],\"_siblingCount\":[2,\"_sibling-count\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_max\":[2]}]]],[\"kol-pagination-wc\",[[256,\"kol-pagination-wc\",{\"_boundaryCount\":[2,\"_boundary-count\"],\"_customClass\":[1,\"_custom-class\"],\"_label\":[1],\"_hasButtons\":[8,\"_has-buttons\"],\"_page\":[2],\"_pageSize\":[1026,\"_page-size\"],\"_pageSizeOptions\":[1,\"_page-size-options\"],\"_on\":[16],\"_siblingCount\":[2,\"_sibling-count\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_max\":[2],\"state\":[32]},null,{\"_boundaryCount\":[\"validateBoundaryCount\"],\"_customClass\":[\"validateCustomClass\"],\"_label\":[\"validateLabel\"],\"_hasButtons\":[\"validateHasButtons\"],\"_on\":[\"validateOn\"],\"_page\":[\"validatePage\"],\"_pageSize\":[\"validatePageSize\"],\"_pageSizeOptions\":[\"validatePageSizeOptions\"],\"_siblingCount\":[\"validateSiblingCount\"],\"_max\":[\"validateMax\"],\"_tooltipAlign\":[\"validateTooltipAlign\"]}]]],[\"kol-popover-button\",[[289,\"kol-popover-button\",{\"_accessKey\":[1,\"_access-key\"],\"_ariaDescription\":[1,\"_aria-description\"],\"_customClass\":[1,\"_custom-class\"],\"_disabled\":[4],\"_hideLabel\":[4,\"_hide-label\"],\"_icons\":[1],\"_inline\":[4],\"_label\":[1],\"_name\":[1],\"_popoverAlign\":[1,\"_popover-align\"],\"_shortKey\":[1,\"_short-key\"],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_tabIndex\":[2,\"_tab-index\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_type\":[1],\"_value\":[8],\"_variant\":[1],\"hidePopover\":[64],\"showPopover\":[64],\"click\":[64],\"focus\":[64]}]]],[\"kol-popover-button-wc\",[[260,\"kol-popover-button-wc\",{\"_accessKey\":[1,\"_access-key\"],\"_ariaDescription\":[1,\"_aria-description\"],\"_customClass\":[1,\"_custom-class\"],\"_disabled\":[4],\"_hideLabel\":[4,\"_hide-label\"],\"_icons\":[1],\"_id\":[1],\"_inline\":[4],\"_label\":[1],\"_name\":[1],\"_popoverAlign\":[1,\"_popover-align\"],\"_shortKey\":[1,\"_short-key\"],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_tabIndex\":[2,\"_tab-index\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_type\":[1],\"_value\":[8],\"_variant\":[1],\"state\":[32],\"popoverOpen\":[32],\"hidePopover\":[64],\"showPopover\":[64],\"focus\":[64],\"click\":[64]},null,{\"_inline\":[\"validateInline\"],\"_popoverAlign\":[\"validatePopoverAlign\"]}]]],[\"kol-progress\",[[801,\"kol-progress\",{\"_label\":[1],\"_max\":[2],\"_unit\":[1],\"_value\":[2],\"_variant\":[1],\"liveValue\":[32]},null,{\"_label\":[\"watchLabel\"],\"_max\":[\"watchMax\"],\"_unit\":[\"watchUnit\"],\"_value\":[\"watchValue\"],\"_variant\":[\"watchVariant\"]}]]],[\"kol-quote\",[[801,\"kol-quote\",{\"_href\":[1],\"_label\":[1],\"_quote\":[1],\"_variant\":[1]},null,{\"_href\":[\"watchHref\"],\"_label\":[\"watchLabel\"],\"_quote\":[\"watchQuote\"],\"_variant\":[\"watchVariant\"]}]]],[\"kol-select\",[[289,\"kol-select\",{\"_accessKey\":[1,\"_access-key\"],\"_ariaDetails\":[1,\"_aria-details\"],\"_disabled\":[4],\"_hideMsg\":[4,\"_hide-msg\"],\"_hideLabel\":[4,\"_hide-label\"],\"_hint\":[1],\"_icons\":[1],\"_infoPopover\":[8,\"_info-popover\"],\"_label\":[1],\"_msg\":[1],\"_multiple\":[4],\"_name\":[1],\"_on\":[16],\"_options\":[1],\"_required\":[4],\"_shortKey\":[1,\"_short-key\"],\"_rows\":[2],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_tabIndex\":[2,\"_tab-index\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_touched\":[1540],\"_value\":[1544],\"_variant\":[1],\"getValue\":[64],\"focus\":[64]},null,{\"_ariaDetails\":[\"validateAriaDetails\"]}]]],[\"kol-select-wc\",[[256,\"kol-select-wc\",{\"_accessKey\":[1,\"_access-key\"],\"_ariaDetails\":[1,\"_aria-details\"],\"_disabled\":[4],\"_hideMsg\":[4,\"_hide-msg\"],\"_hideLabel\":[4,\"_hide-label\"],\"_hint\":[1],\"_icons\":[1],\"_infoPopover\":[8,\"_info-popover\"],\"_label\":[1],\"_msg\":[1],\"_multiple\":[4],\"_name\":[1],\"_on\":[16],\"_options\":[1],\"_required\":[4],\"_shortKey\":[1,\"_short-key\"],\"_rows\":[2],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_tabIndex\":[2,\"_tab-index\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_touched\":[1540],\"_value\":[1544],\"_variant\":[1],\"state\":[32],\"inputHasFocus\":[32],\"getValue\":[64],\"focus\":[64],\"click\":[64]},null,{\"_ariaDetails\":[\"validateAriaDetails\"],\"_accessKey\":[\"validateAccessKey\"],\"_disabled\":[\"validateDisabled\"],\"_hideMsg\":[\"validateHideMsg\"],\"_hideLabel\":[\"validateHideLabel\"],\"_hint\":[\"validateHint\"],\"_icons\":[\"validateIcons\"],\"_label\":[\"validateLabel\"],\"_msg\":[\"validateMsg\"],\"_multiple\":[\"validateMultiple\"],\"_name\":[\"validateName\"],\"_on\":[\"validateOn\"],\"_options\":[\"validateOptions\"],\"_required\":[\"validateRequired\"],\"_rows\":[\"validateRows\"],\"_shortKey\":[\"validateShortKey\"],\"_syncValueBySelector\":[\"validateSyncValueBySelector\"],\"_tabIndex\":[\"validateTabIndex\"],\"_touched\":[\"validateTouched\"],\"_value\":[\"validateValue\"],\"_variant\":[\"validateVariant\"]}]]],[\"kol-single-select\",[[289,\"kol-single-select\",{\"_accessKey\":[1,\"_access-key\"],\"_ariaDetails\":[1,\"_aria-details\"],\"_placeholder\":[1],\"_disabled\":[4],\"_hideMsg\":[4,\"_hide-msg\"],\"_hideLabel\":[4,\"_hide-label\"],\"_hint\":[1],\"_icons\":[1],\"_infoPopover\":[8,\"_info-popover\"],\"_label\":[1],\"_msg\":[1],\"_name\":[1],\"_on\":[16],\"_options\":[1],\"_required\":[4],\"_shortKey\":[1,\"_short-key\"],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_touched\":[1540],\"_value\":[1032],\"_hasClearButton\":[4,\"_has-clear-button\"],\"_rows\":[2],\"_variant\":[1],\"_isOpen\":[32],\"_filteredOptions\":[32],\"_inputValue\":[32],\"blockSuggestionMouseOver\":[32],\"state\":[32],\"inputHasFocus\":[32],\"getValue\":[64],\"focus\":[64]},[[0,\"keydown\",\"handleKeyDown\"],[1,\"mousemove\",\"handleMouseEvent\"],[0,\"focusin\",\"handleFocusIn\"],[0,\"focusout\",\"handleFocusOut\"]],{\"_ariaDetails\":[\"validateAriaDetails\"],\"_placeholder\":[\"validatePlaceholder\"],\"_accessKey\":[\"validateAccessKey\"],\"_disabled\":[\"validateDisabled\"],\"_hideMsg\":[\"validateHideMsg\"],\"_hideLabel\":[\"validateHideLabel\"],\"_hint\":[\"validateHint\"],\"_icons\":[\"validateIcons\"],\"_label\":[\"validateLabel\"],\"_msg\":[\"validateMsg\"],\"_name\":[\"validateName\"],\"_on\":[\"validateOn\"],\"_options\":[\"validateOptions\"],\"_required\":[\"validateRequired\"],\"_shortKey\":[\"validateShortKey\"],\"_syncValueBySelector\":[\"validateSyncValueBySelector\"],\"_touched\":[\"validateTouched\"],\"_value\":[\"validateValue\"],\"_hasClearButton\":[\"validateHasClearButton\"],\"_rows\":[\"validateRows\"],\"_variant\":[\"validateVariant\"]}]]],[\"kol-skeleton\",[[769,\"kol-skeleton\",{\"_name\":[1],\"count\":[32],\"label\":[32],\"show\":[32],\"focus\":[64],\"toggle\":[64]},[[0,\"keydown\",\"handleKeyDown\"],[8,\"keydown\",\"onKeydown\"]],{\"_name\":[\"watchName\"]}]]],[\"kol-skip-nav\",[[289,\"kol-skip-nav\",{\"_label\":[1],\"_links\":[1],\"state\":[32],\"focus\":[64]},null,{\"_label\":[\"validateLabel\"],\"_links\":[\"validateLinks\"]}]]],[\"kol-spin\",[[801,\"kol-spin\",{\"_show\":[4],\"_label\":[1],\"_variant\":[1]},null,{\"_show\":[\"watchShow\"],\"_label\":[\"watchLabel\"],\"_variant\":[\"watchVariant\"]}]]],[\"kol-split-button\",[[289,\"kol-split-button\",{\"_accessKey\":[1,\"_access-key\"],\"_ariaControls\":[1,\"_aria-controls\"],\"_ariaDescription\":[1,\"_aria-description\"],\"_ariaExpanded\":[4,\"_aria-expanded\"],\"_ariaSelected\":[4,\"_aria-selected\"],\"_customClass\":[1,\"_custom-class\"],\"_disabled\":[4],\"_hideLabel\":[4,\"_hide-label\"],\"_icons\":[1],\"_label\":[1],\"_name\":[1],\"_on\":[16],\"_role\":[1],\"_shortKey\":[1,\"_short-key\"],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_type\":[1],\"_value\":[8],\"_variant\":[1],\"state\":[32],\"getValue\":[64],\"focus\":[64],\"click\":[64],\"closePopup\":[64]}]]],[\"kol-table-settings-wc\",[[256,\"kol-table-settings-wc\",{\"_horizontalHeaderCells\":[16],\"headerCells\":[32],\"editingHeaderCells\":[32],\"errorMessage\":[32]},null,{\"_horizontalHeaderCells\":[\"handleHeaderCellsChange\"]}]]],[\"kol-table-stateful\",[[289,\"kol-table-stateful\",{\"_ariaLabelledby\":[1,\"_aria-labelledby\"],\"_allowMultiSort\":[4,\"_allow-multi-sort\"],\"_data\":[1],\"_dataFoot\":[1,\"_data-foot\"],\"_fixedCols\":[16],\"_headers\":[1],\"_label\":[1],\"_loading\":[4],\"_pagination\":[8],\"_paginationPosition\":[1,\"_pagination-position\"],\"_selection\":[1],\"_on\":[16],\"_hasSettingsMenu\":[4,\"_has-settings-menu\"],\"_variant\":[1],\"resolvedElements\":[32],\"adjustedHeaderCells\":[32],\"state\":[32],\"getSelection\":[64],\"resetSort\":[64]},null,{\"_ariaLabelledby\":[\"validateAriaLabelledby\"],\"_allowMultiSort\":[\"validateAllowMultiSort\"],\"_data\":[\"validateData\"],\"_dataFoot\":[\"validateDataFoot\"],\"_fixedCols\":[\"validateFixedCols\"],\"_paginationPosition\":[\"validatePaginationPosition\"],\"_hasSettingsMenu\":[\"validateHasSettingsMenu\"],\"_headers\":[\"validateHeaders\"],\"_label\":[\"validateLabel\"],\"_selection\":[\"validateSelection\"],\"_on\":[\"validateOn\"],\"_pagination\":[\"validatePagination\"]}]]],[\"kol-table-stateless\",[[289,\"kol-table-stateless\",{\"_ariaLabelledby\":[1,\"_aria-labelledby\"],\"_data\":[1],\"_dataFoot\":[1,\"_data-foot\"],\"_fixedCols\":[16],\"_headerCells\":[1,\"_header-cells\"],\"_label\":[1],\"_loading\":[4],\"_on\":[16],\"_selection\":[1],\"_hasSettingsMenu\":[4,\"_has-settings-menu\"],\"_variant\":[1],\"resolvedElements\":[32]},null,{\"_ariaLabelledby\":[\"validateAriaLabelledby\"]}]]],[\"kol-table-stateless-wc\",[[260,\"kol-table-stateless-wc\",{\"externalLabelElements\":[16],\"_ariaLabelledby\":[1,\"_aria-labelledby\"],\"_data\":[1],\"_dataFoot\":[1,\"_data-foot\"],\"_fixedCols\":[16],\"_headerCells\":[1,\"_header-cells\"],\"_label\":[1],\"_loading\":[4],\"_on\":[16],\"_selection\":[1],\"_variant\":[1],\"_hasSettingsMenu\":[4,\"_has-settings-menu\"],\"state\":[32],\"tableDivElementHasScrollbar\":[32],\"stickyColsDisabled\":[32],\"previousHeaderCells\":[32]},[[0,\"keydown\",\"handleKeyDown\"],[0,\"changeheadercells\",\"handleSettingsChange\"]],{\"externalLabelElements\":[\"onExternalLabelElementsChange\"],\"_ariaLabelledby\":[\"validateAriaLabelledby\"],\"_hasSettingsMenu\":[\"validateHasSettingsMenu\"],\"_data\":[\"validateData\"],\"_dataFoot\":[\"validateDataFoot\"],\"_fixedCols\":[\"validateFixedCols\"],\"_headerCells\":[\"validateHeaderCells\"],\"_label\":[\"validateLabel\"],\"_loading\":[\"validateLoading\"],\"_on\":[\"validateOn\"],\"_selection\":[\"validateSelection\"],\"_variant\":[\"validateVariantClassName\"]}]]],[\"kol-tabs\",[[289,\"kol-tabs\",{\"_align\":[1],\"_behavior\":[1],\"_hasCreateButton\":[4,\"_has-create-button\"],\"_label\":[1],\"_on\":[16],\"_selected\":[1538],\"_tabs\":[1],\"state\":[32],\"focus\":[64],\"click\":[64]},null,{\"_align\":[\"validateAlign\"],\"_behavior\":[\"validateBehavior\"],\"_hasCreateButton\":[\"validateHasCreateButton\"],\"_label\":[\"validateLabel\"],\"_on\":[\"validateOn\"],\"_selected\":[\"validateSelected\"],\"_tabs\":[\"validateTabs\"]}]]],[\"kol-textarea\",[[289,\"kol-textarea\",{\"_accessKey\":[1,\"_access-key\"],\"_adjustHeight\":[4,\"_adjust-height\"],\"_ariaDetails\":[1,\"_aria-details\"],\"_disabled\":[4],\"_hideMsg\":[4,\"_hide-msg\"],\"_hideLabel\":[4,\"_hide-label\"],\"_hint\":[1],\"_icons\":[1],\"_infoPopover\":[8,\"_info-popover\"],\"_label\":[1],\"_maxLength\":[2,\"_max-length\"],\"_hasCounter\":[4,\"_has-counter\"],\"_maxLengthBehavior\":[1,\"_max-length-behavior\"],\"_msg\":[1],\"_name\":[1],\"_on\":[16],\"_placeholder\":[1],\"_readOnly\":[4,\"_read-only\"],\"_resize\":[1],\"_required\":[4],\"_rows\":[1026],\"_shortKey\":[1,\"_short-key\"],\"_spellCheck\":[4,\"_spell-check\"],\"_syncValueBySelector\":[1,\"_sync-value-by-selector\"],\"_tooltipAlign\":[1,\"_tooltip-align\"],\"_touched\":[1540],\"_value\":[1537],\"_variant\":[1],\"state\":[32],\"inputHasFocus\":[32],\"getValue\":[64],\"focus\":[64],\"click\":[64]},null,{\"_ariaDetails\":[\"validateAriaDetails\"],\"_accessKey\":[\"validateAccessKey\"],\"_adjustHeight\":[\"validateAdjustHeight\"],\"_disabled\":[\"validateDisabled\"],\"_hideMsg\":[\"validateHideMsg\"],\"_hideLabel\":[\"validateHideLabel\"],\"_hasCounter\":[\"validateHasCounter\"],\"_hint\":[\"validateHint\"],\"_icons\":[\"validateIcons\"],\"_label\":[\"validateLabel\"],\"_maxLength\":[\"validateMaxLength\"],\"_maxLengthBehavior\":[\"validateMaxLengthBehavior\"],\"_msg\":[\"validateMsg\"],\"_name\":[\"validateName\"],\"_on\":[\"validateOn\"],\"_placeholder\":[\"validatePlaceholder\"],\"_readOnly\":[\"validateReadOnly\"],\"_resize\":[\"validateResize\"],\"_required\":[\"validateRequired\"],\"_rows\":[\"validateRows\"],\"_shortKey\":[\"validateShortKey\"],\"_spellCheck\":[\"validateSpellCheck\"],\"_syncValueBySelector\":[\"validateSyncValueBySelector\"],\"_touched\":[\"validateTouched\"],\"_value\":[\"validateValue\"],\"_variant\":[\"validateVariant\"]}]]],[\"kol-toast-container\",[[289,\"kol-toast-container\",{\"state\":[32],\"enqueue\":[64],\"closeAll\":[64]}]]],[\"kol-toolbar\",[[289,\"kol-toolbar\",{\"_label\":[1],\"_items\":[16],\"_orientation\":[1],\"state\":[32],\"currentIndex\":[32],\"focus\":[64],\"click\":[64]},[[0,\"keydown\",\"handleKeyDown\"],[2,\"focusout\",\"handleFocusout\"]],{\"_label\":[\"validateLabel\"],\"_items\":[\"validateItems\"],\"_orientation\":[\"validateOrientation\"]}]]],[\"kol-tooltip-wc\",[[256,\"kol-tooltip-wc\",{\"_badgeText\":[1,\"_badge-text\"],\"_align\":[1],\"_id\":[1],\"_label\":[1],\"hideTooltip\":[64]},null,{\"_align\":[\"validateAlign\"],\"_id\":[\"validateId\"],\"_label\":[\"validateLabel\"]}]]],[\"kol-tree\",[[289,\"kol-tree\",{\"_label\":[1],\"focus\":[64]}]]],[\"kol-tree-item\",[[289,\"kol-tree-item\",{\"_active\":[4],\"_label\":[1],\"_open\":[4],\"_href\":[1],\"focus\":[64],\"expand\":[64],\"collapse\":[64],\"isOpen\":[64]}]]],[\"kol-tree-item-wc\",[[260,\"kol-tree-item-wc\",{\"_active\":[4],\"_label\":[1],\"_open\":[4],\"_href\":[1],\"level\":[32],\"state\":[32],\"focus\":[64],\"expand\":[64],\"collapse\":[64],\"isOpen\":[64]},null,{\"_active\":[\"validateActive\"],\"_label\":[\"validateLabel\"],\"_open\":[\"validateOpen\"],\"_href\":[\"validateHref\"]}]]],[\"kol-tree-wc\",[[260,\"kol-tree-wc\",{\"_label\":[1],\"state\":[32],\"focus\":[64],\"invalidateOpenItemsCache\":[64]},[[0,\"keydown\",\"handleKeyDown\"],[0,\"focusin\",\"handleFocusIn\"],[0,\"focusout\",\"handleFocusOut\"]],{\"_label\":[\"validateLabel\"]}]]],[\"kol-version\",[[289,\"kol-version\",{\"_label\":[1],\"state\":[32]},null,{\"_label\":[\"validateLabel\"]}]]],[\"test-component\",[[0,\"test-component\"]]]]"), options);


[showing lines 16-17 of 17; full output saved to /Users/p.dijon.de.monteton/.local/share/opencode/shell/0652865c1e38e197ad37148c7853f972bd77a86e/sh_0f78c6e1d0020H2QN75CC8Y28S.out]

---

## Assistant

_Thinking:_

I have a good understanding now. Key facts:

- `kol-input-text` has `_label` (required), `_msg`, `_touched`, `_value`, `_name`, `_required`, `_autoComplete`, `_on` with `onInput`/`onChange`/`onBlur`.
- `kol-input-password` has `_visibilityToggle`.
- `kol-form` has `_on.onSubmit`, `_errorList` (`{message, selector}`), `_requiredText`.
- `kol-button` `_type="submit"`, `_variant`, `_label`, `_on.onClick`.
- `kol-alert` `_alert` (role=alert), `_type` (error/success...), `_label`, `_variant` ('msg'|'card').
- `kol-card` `_label`, `_level`.
- `kol-heading` `_label`, `_level`.

Important: msg is only shown when `_touched === true`. So we need to set `_touched` ourselves for submit-time validation, or rely on blur. Actually the component sets `_touched = true` internally on blur. But React wrapper — hmm, `attachProps` sets `node[name] = newProps[name]` for each prop on every update. If we don't pass `_touched`, it's not in props, so untouched. Actually if we pass `_touched` explicitly it gets re-set on each render.

Important caveat: the React wrapper's `attachProps` runs on componentDidUpdate with all props. If we pass `_touched={true}`, it stays. If we don't pass it, the internal blur handling sets it. But careful: if we pass `_touched` and then internal sets it... Actually a safer approach: manage `_touched` in React state ourselves so submit triggers display.

Wait — there's a subtlety: if we never pass `_touched`, the component's internal onBlur sets `component._touched = true` (that's on the internal component instance, not state necessarily — `this.component._touched = true` where component is the host element). Hmm, `this.component` is the Stencil component instance (host element). Setting `_touched` property on host triggers the watcher → validateTouched → setState. So it works.

But React's `attachProps` only sets props that are in React props. So internal changes persist as long as we don't re-pass `_touched`. If we re-pass `_touched` with the same value each render... it sets node._touched = value, overriding internal. So best: track touched in React state, pass `_touched` explicitly, and update on blur via `_on.onBlur`.

Hmm, but then onBlur is `EventCallback<Event>`. Fine.

Actually simpler: pass `_touched` from React state; set true on submit; also set true on blur callback. That's fully controlled.

Also `_msg` object: `{_description: '...', _type: 'error'}`. Msg only shows when touched === true.

Also there's `alert` → role="alert" when `showAsAlert()` = `Boolean(_touched) && !inputHasFocus`. So error gets announced after blur.

Hmm wait — for input-text, does it have showAsAlert? Let me check. The combobox and checkbox had it. Let's assume input-text does too. Actually I should check. Let me quickly grep.

Also form `_errorList` gives error summary with links that focus elements by selector — but selectors must resolve via `document.querySelector(selector)` — shadow DOM! The actual input is inside shadow root. `document.querySelector('#username')` would find the kol-input-text host if we set an id on it. Then `targetElement.focus()` — kol-input-text has a `focus()` method. 

Does the React wrapper pass `id`? In `render()`, props with string type are passed as `camelToDashCase(name)` → `id` stays `id`. So `id="username"` would be rendered as attribute. And attachProps sets `node["id"] = "username"` too. Good — the host element gets id="username".

Hmm, but wait: `render()` filters props — for non-"on" prefixed props, only string/boolean/number pass through. `id` is a string → passed. Good.

But careful: `_label` etc. are strings → passed as `_label` attribute (camelToDashCase doesn't change underscore-prefixed). Stencil reads attributes. But `_on` is an object → not passed to createElement, but attachProps sets `node["_on"] = value`. Good.

Note: attachProps `Object.keys(newProps)` includes `_on`; `name.indexOf("on") === 0`? `_on` starts with `_`, so no. So `node["_on"] = object`. Good.

Now, form `_errorList` selector: we'd use `#login-username`. `document.querySelector('#login-username')` finds the host. `.focus()` exists. Good.

But error list requires selector to be string or function: validator says `value.find(v => !(typeof v === 'string' || typeof v === 'function')) === undefined` — wait, that validator says every item must be a string or function?! That contradicts the type `ErrorListPropType = {message, selector}`. The validator: `Array.isArray(value) && value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined` — so it requires all items to be string or function. Hmm, that means objects `{message, selector}` would FAIL validation. But `renderErrorList` uses `error.message` and `error.selector`. So the validator seems buggy/legacy. Let's check watchValidator — what happens on failure? Probably logs a warning and doesn't set state. That means `_errorList` with objects wouldn't be applied.

Hmm, this is an important uncertainty. Let me verify watchValidator behavior.

Let me check `watchValidator` in common file.

I've spent a lot of tool calls. Let me do one more targeted check on watchValidator, then write the implementation.

Actually, let me reconsider: maybe passing objects still works because validation only warns. Let's check.

Let me grep for "watchValidator" definition.

Earlier greps for `const watchValidator` returned nothing — maybe it's `function watchValidator`. Let's search.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn -A40 \"function watchValidator\\|watchValidator =\" node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js | head -60"
}
```

node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js:1451:function watchValidator(component, propName, validationFunction, requiredGeneric, value, options = {}) {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1452-    if (validationFunction(value)) {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1453-        setState(component, propName, value, options.hooks);
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1454-    }
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1455-    else if (value === undefined && options.required !== true && validationFunction(options.defaultValue)) {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1456-        setState(component, propName, options.defaultValue, options.hooks);
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1457-    }
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1458-    else {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1459-        if (!options.required) {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1460-            requiredGeneric.add(null);
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1461-        }
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1462-        logWarn(component, propName, value, requiredGeneric);
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1463-    }
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1464-}
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1465-const watchBoolean = (component, propName, value, options) => {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1466-    watchValidator(component, propName, (value) => typeof value === 'boolean', new Set(['Boolean {true, false}']), value, options);
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1467-};
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1468-const watchString = (component, propName, value, options = {}) => {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1469-    const minLength = typeof options.minLength === 'number' ? options === null || options === void 0 ? void 0 : options.minLength : 0;
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1470-    watchValidator(component, propName, (value) => typeof value === 'string' && value.length >= minLength && (typeof (options === null || options === void 0 ? void 0 : options.maxLength) === 'undefined' || value.length <= options.maxLength), new Set([`String`]), value, options);
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1471-};
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1472-const watchNumber = (component, propName, value, options) => {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1473-    watchValidator(component, propName, (value) => typeof value === 'number' &&
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1474-        (typeof (options === null || options === void 0 ? void 0 : options.min) === 'undefined' || (typeof (options === null || options === void 0 ? void 0 : options.min) === 'number' && value >= options.min)) &&
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1475-        (typeof (options === null || options === void 0 ? void 0 : options.max) === 'undefined' || (typeof (options === null || options === void 0 ? void 0 : options.max) === 'number' && value <= options.max)), new Set(['Number']), value, options);
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1476-};
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1477-const watchJsonArrayString = (component, propName, itemValidation, value, arrayValidation = (items) => items === items, options = {}) => {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1478-    emptyStringByArrayHandler(value, () => {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1479-        objectObjectHandler(value, () => {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1480-            if (typeof value === 'undefined') {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1481-                value = [];
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1482-            }
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1483-            try {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1484-                try {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1485-                    value = parseJson(value);
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1486-                }
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1487-                catch (_a) {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1488-                }
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1489-                if (Array.isArray(value)) {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1490-                    const invalid = value.find((item) => !itemValidation(item));
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1491-                    if (invalid === undefined && arrayValidation(value)) {


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"showAsAlert\" node_modules/@public-ui/components/dist/esm/kol-input-text.entry.js node_modules/@public-ui/components/dist/esm/kol-input-password.entry.js"
}
```

node_modules/@public-ui/components/dist/esm/kol-input-text.entry.js:112:            alert: this.showAsAlert(),
node_modules/@public-ui/components/dist/esm/kol-input-text.entry.js:190:    showAsAlert() {
node_modules/@public-ui/components/dist/esm/kol-input-password.entry.js:71:            alert: this.showAsAlert(),
node_modules/@public-ui/components/dist/esm/kol-input-password.entry.js:146:    showAsAlert() {


---

## Assistant

_Thinking:_

Let me check showAsAlert in input-text.

Also important: the `_errorList` validation in kol-form expects `value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined` — wait, that validation requires every item to be a string or function?? Let's re-read:

```js
watchValidator(component, 'errorList', (value) => Array.isArray(value) && value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined, new Set(['string', 'function']), value);
```

Hmm, that means each item must be a string or function. But ErrorListPropType is `{message, selector, options}`. That's odd - validator seems buggy/legacy. Actually wait: `value.find(v => !(typeof v === 'string' || typeof v === 'function')) === undefined` means find returns the first element that is NOT a string and NOT a function. So it requires all elements be string or function. That would reject `{message, selector}` objects! Hmm, but the render code uses `error.message` and `error.selector`. So the validator seems inconsistent with the type. If validation fails, watchValidator logs a warning and does NOT set state → errorList won't render.

Hmm, this is a real risk. Let me double check the exact code in kol-form.entry.js.

From output:
```
const validateErrorList = (component, value) => {
    watchValidator(component, 'errorList', (value) => Array.isArray(value) && value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined, new Set(['string', 'function']), value);
};
```

Yes. So passing objects `{message, selector}` would fail validation → logWarn, state not set → error list not rendered. That's a notable uncertainty/finding.

Hmm wait — maybe it's actually `!(typeof v === 'object')`... no, it's what it is. Let me verify by checking the actual minified/esm again carefully — I read it from kol-form.entry.js lines 17-19. Let me re-verify precisely.

Actually it's important. Let me grep exactly.

Also check `showAsAlert` for input-text.

Then decide: use `_errorList` on KolForm with object entries (may fail validation) OR build our own error summary. Safer: build our own accessible error summary with KolAlert + links, OR try `_errorList` and note uncertainty.

Actually — hold on. Since validation fails, state won't be set. Let's test empirically? Hard without browser. Let's just verify the exact string.

**Tool: shell**

**Input:**
```json
{
  "command": "sed -n '15,22p' node_modules/@public-ui/components/dist/esm/kol-form.entry.js; echo '=== showAsAlert input-text ==='; sed -n '185,200p' node_modules/@public-ui/components/dist/esm/kol-input-text.entry.js; echo '=== logWarn ==='; grep -rn -A15 \"function logWarn\\|const logWarn\" node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js | head -25"
}
```

import './Heading-CNfXfPK2.js';

const validateErrorList = (component, value) => {
    watchValidator(component, 'errorList', (value) => Array.isArray(value) && value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined, new Set(['string', 'function']), value);
};

const defaultStyleCss = "@charset \"UTF-8\";\n/* forward the rem function */\n/*\n* This file defines the layer order for all CSS layers used in KoliBri.\n* The order is important as it determines the cascade priority.\n*\n* Layer order (lowest to highest priority):\n* 1. kol-a11y - Accessibility defaults and requirements\n* 2. kol-global - Global component styles and resets\n* 3. kol-component - Component-specific styles\n* 4. kol-theme-global - Theme-specific global styles\n* 5. kol-theme-component - Theme-specific component styles\n* 6. kol-forced-colors - Defaults for forced colors and high contrast modes\n* 7. kol-theme-forced-colors - Theme-specific styles for forced colors and high contrast modes\n*/\n@layer kol-a11y, kol-global, kol-component, kol-theme-global, kol-theme-component, kol-forced-colors, kol-theme-forced-colors;\n/*\n * This file contains all rules for accessibility.\n */\n@layer kol-a11y {\n  :host {\n    /*\n     * Minimum size of interactive elements.\n     *\n     * The `max(…, 44px)` floor guarantees the WCAG 2.5.5 (AAA) target size of 44px:\n     * `to-rem(44)` runs the value through a `calc()` rem round-trip which can lose\n     * sub-pixel precision and resolve to e.g. 43.99px depending on the browser's\n     * rounding, dropping just below the required minimum.\n     */\n    --a11y-min-size: max(calc(44 * 1rem / var(--kolibri-root-font-size, 16)), 44px);\n    /*\n     * No element should be used without verifying the contrast ratio of its background and font colors.\n     * By initially setting the background color to white and the font color to black,\n     * the contrast ratio is ensured and explicit adjustment is forced.\n     */\n    --kol-a11y-font-color: black;\n    --kol-a11y-background-color: white;\n    color: var(--kol-a11y-font-color);\n    background-color: var(--kol-a11y-background-color);\n    /*\n     * Verdana is an accessible font that can be used without requiring additional loading time.\n     */\n    --kol-a11y-font-family: Verdana;\n    font-family: var(--kol-a11y-font-family);\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n    /*\n     * Text should be aligned left by default to provide a predictable starting point.\n     */\n    text-align: left;\n  }\n  * {\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    hyphens: auto;\n    /*\n     * This rule enables the word dividing for all texts. That is important for high zoom levels.\n     */\n    word-break: break-word;\n  }\n  /*\n   * All interactive elements should have a minimum size of to-rem(44).\n   */\n  /* input:not([type='checkbox'], [type='radio'], [type='range']), */\n  /* option, */\n  /* select, */\n  /* textarea, */\n  button,\n  .kol-input .input {\n    min-width: var(--a11y-min-size);\n    min-height: var(--a11y-min-size);\n  }\n  /*\n   * Some interactive elements should not inherit the font-family and font-size.\n   */\n  a,\n  button,\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6,\n  input,\n  option,\n  select,\n  textarea {\n    /*\n     * All elements should inherit the text color from his parent element.\n     */\n    color: inherit;\n    /*\n     * All elements should inherit the font family from his parent element.\n     */\n    font-family: inherit;\n    /*\n     * All elements should inherit the font size from his parent element.\n     */\n    font-size: inherit;\n    /*\n     * Letter spacing is required for all texts.\n     */\n    letter-spacing: inherit;\n    /*\n     * Word spacing is required for all texts.\n     */\n    word-spacing: inherit;\n  }\n  /**\n  * Sometimes we need the semantic element for accessibility reasons,\n  * but we don't want to show it.\n  *\n  * - https://www.a11yproject.com/posts/how-to-hide-content/\n  */\n  .visually-hidden {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 1px;\n    height: 1px;\n    overflow: hidden;\n    white-space: nowrap;\n    clip-path: inset(50%);\n  }\n}\n/*\n * This file contains all rules for forced-colors and highcontrast modes\n * https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/system-color to see all color keywords the browsers are providing\n */\n@layer kol-forced-colors {\n  @media (forced-colors: active) {\n    .kol-button__text {\n      color: ButtonText;\n      background-color: ButtonFace;\n      border: 2px solid ButtonBorder;\n    }\n    .kol-button--disabled .kol-button__text {\n      color: GrayText;\n      border-color: GrayText;\n    }\n    .kol-card,\n    .kol-dialog,\n    .kol-modal,\n    .kol-drawer {\n      color: CanvasText;\n      background-color: Canvas;\n      border: 1px solid ButtonBorder;\n    }\n    .kol-pagination__button--selected .kol-button {\n      opacity: 1;\n    }\n    .kol-pagination__button--selected .kol-button__text {\n      color: SelectedItemText;\n      background-color: SelectedItem;\n    }\n    /* focus styles */\n    .kol-button:focus-visible,\n    .kol-link__anchor:focus-visible {\n      outline: 2px solid Highlight;\n      outline-offset: 2px;\n    }\n  }\n}\n@layer kol-global {\n  /*\n   * Dieses CSS stellt sicher, dass der Standard-Style\n   * von A und Button resettet werden.\n   */\n  :is(a, button) {\n    background-color: transparent;\n    width: 100%;\n    margin: 0;\n    padding: 0;\n    border: none;\n    /* 100% needed for custom width from outside */\n  }\n  /*\n   * Ensure elements with hidden attribute to be actually not visible\n   * @see https://meowni.ca/hidden.is.a.lie.html\n   */\n  [hidden] {\n    display: none !important;\n  }\n  .badge-text-hint {\n    color: black;\n    background-color: white;\n  }\n}\n@layer kol-global {\n  :host {\n    /*\n     * The max-width is needed to prevent the table from overflowing the\n     * parent node, if the table is wider than the parent node.\n     */\n    max-width: 100%;\n    font-size: calc(16 * 1rem / var(--kolibri-root-font-size, 16));\n  }\n  * {\n    /*\n     * We prefer to box-sizing: border-box for all elements.\n     */\n    box-sizing: border-box;\n  }\n  .kol-span {\n    /* KolSpan is a layout component with icons in all directions and a label text in the middle. */\n    display: flex;\n    flex-flow: column;\n    align-items: center;\n    justify-content: center;\n    /* The sub span in KolSpan is the horizontal span with icon left and right and the label text in the middle. */\n  }\n  .kol-span__container {\n    display: flex;\n    align-items: center;\n  }\n  a,\n  button {\n    cursor: pointer;\n  }\n  .kol-span .kol-span__label--hide-label .kol-span__label {\n    display: none;\n  }\n  /* Reset browser agent style. */\n  button:disabled {\n    color: unset;\n  }\n  .disabled label,\n  .disabled:focus-within label,\n  [aria-disabled=true],\n  [aria-disabled=true]:focus,\n  [disabled],\n  [disabled]:focus {\n    outline: none;\n    cursor: not-allowed;\n  }\n  [aria-disabled=true]:focus .kol-span,\n  [disabled]:focus .kol-span {\n    outline: none !important;\n  }\n  .hastooltip {\n    z-index: 900 !important;\n  }\n}\n@layer kol-component {\n  :host {\n    display: block;\n  }\n}\n@font-face {\n  font-family: \"kolicons\";\n  src: url(\"kolicons.eot?t=1788937554327\"); /* IE9*/\n  src: url(\"kolicons.eot?t=1788937554327#iefix\") format(\"embedded-opentype\"), url(\"kolicons.woff2?t=1788937554327\") format(\"woff2\"), url(\"kolicons.woff?t=1788937554327\") format(\"woff\"), url(\"kolicons.ttf?t=1788937554327\") format(\"truetype\"), url(\"kolicons.svg?t=1788937554327#kolicons\") format(\"svg\"); /* iOS 4.1- */\n}\n@layer kol-component {\n  [class^=kolicon-], [class*=\" kolicon-\"] {\n    font-family: \"kolicons\";\n    font-style: normal;\n    font-weight: 400;\n    line-height: 1em;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n  .kolicon-alert-error::before {\n    content: \"\\ea01\";\n  }\n  .kolicon-alert-info::before {\n    content: \"\\ea02\";\n  }\n  .kolicon-alert-success::before {\n    content: \"\\ea03\";\n  }\n  .kolicon-alert-warning::before {\n    content: \"\\ea04\";\n  }\n  .kolicon-check::before {\n    content: \"\\ea05\";\n  }\n  .kolicon-chevron-double-left::before {\n    content: \"\\ea06\";\n  }\n  .kolicon-chevron-double-right::before {\n    content: \"\\ea07\";\n  }\n  .kolicon-chevron-down::before {\n    content: \"\\ea08\";\n  }\n  .kolicon-chevron-left::before {\n    content: \"\\ea09\";\n  }\n  .kolicon-chevron-right::before {\n    content: \"\\ea0a\";\n  }\n  .kolicon-chevron-up::before {\n    content: \"\\ea0b\";\n  }\n  .kolicon-cogwheel::before {\n    content: \"\\ea0c\";\n  }\n  .kolicon-cross::before {\n    content: \"\\ea0d\";\n  }\n  .kolicon-eye-closed::before {\n    content: \"\\ea0e\";\n  }\n  .kolicon-eye::before {\n    content: \"\\ea0f\";\n  }\n  .kolicon-house::before {\n    content: \"\\ea10\";\n  }\n  .kolicon-kolibri::before {\n    content: \"\\ea11\";\n  }\n  .kolicon-link-external::before {\n    content: \"\\ea12\";\n  }\n  .kolicon-link::before {\n    content: \"\\ea13\";\n  }\n  .kolicon-minus::before {\n    content: \"\\ea14\";\n  }\n  .kolicon-plus::before {\n    content: \"\\ea15\";\n  }\n  .kolicon-settings::before {\n    content: \"\\ea16\";\n  }\n  .kolicon-sort-asc::before {\n    content: \"\\ea17\";\n  }\n  .kolicon-sort-desc::before {\n    content: \"\\ea18\";\n  }\n  .kolicon-sort-neutral::before {\n    content: \"\\ea19\";\n  }\n  .kolicon-up::before {\n    content: \"\\ea1a\";\n  }\n  .kolicon-version::before {\n    content: \"\\ea1b\";\n  }\n}\n@layer kol-component {\n  .kol-icon {\n    color: inherit;\n    display: inline-block;\n    font-size: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n  }\n  .kol-tooltip {\n    display: contents;\n  }\n  .kol-tooltip__floating {\n    opacity: 0;\n    display: none;\n    position: fixed;\n    /* Avoid layout interference - see https://floating-ui.com/docs/computePosition */\n    top: 0;\n    left: 0;\n    /* Can be used to specify the tooltip-width from the outside. Unset by default.  */\n    width: var(--kol-tooltip-width, max-content);\n    min-width: calc(8 * 1rem / var(--kolibri-root-font-size, 16));\n    max-width: 90vw;\n    max-height: 90vh;\n    animation-direction: normal;\n    /* Can be used to specify the animation duration from the outside. 250ms by default. */\n    animation-duration: var(--kolibri-tooltip-animation-duration, 250ms);\n    animation-fill-mode: forwards;\n    animation-iteration-count: 1;\n    animation-timing-function: ease-in;\n  }\n  .kol-tooltip__floating.hide {\n    animation-name: hideTooltip;\n  }\n  .kol-tooltip__floating.show {\n    animation-name: showTooltip;\n  }\n  .kol-tooltip__arrow {\n    transform: rotate(45deg);\n    color: black;\n    background-color: white;\n    position: absolute;\n    z-index: 999;\n    width: calc(10 * 1rem / var(--kolibri-root-font-size, 16));\n    height: calc(10 * 1rem / var(--kolibri-root-font-size, 16));\n  }\n  .kol-tooltip__content {\n    color: black;\n    background-color: white;\n    position: relative;\n    z-index: 1000;\n  }\n  @keyframes hideTooltip {\n    0% {\n      opacity: 1;\n    }\n    100% {\n      opacity: 0;\n      display: none;\n    }\n  }\n  @keyframes showTooltip {\n    0% {\n      opacity: 0;\n    }\n    100% {\n      opacity: 1;\n    }\n  }\n}\n@layer kol-component {\n  .kol-icon {\n    color: inherit;\n    display: inline-block;\n    font-size: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n  }\n  :host {\n    display: inline-block;\n  }\n  .kol-link {\n    display: inline-flex;\n    max-width: fit-content;\n  }\n  .kol-link--standalone {\n    min-width: var(--a11y-min-size);\n    min-height: var(--a11y-min-size);\n    align-items: stretch;\n    /* The anchor is the flex container positioning the text — it must stretch its\n       content so the text pill keeps the full standalone height. */\n  }\n  .kol-link--standalone .kol-link__anchor {\n    align-items: stretch;\n  }\n  .kol-link--standalone .kol-link__text {\n    display: inline-flex;\n    flex: 1 1 100%;\n    place-items: center;\n  }\n  .kol-link__anchor {\n    display: inline-flex;\n    flex: 1;\n    align-items: baseline;\n    place-items: center;\n    text-align: left;\n    text-decoration-line: none;\n  }\n  .kol-link__anchor:focus:not([aria-disabled], [disabled]) .kol-span__label, .kol-link__anchor:hover:not([aria-disabled], [disabled]) .kol-span__label {\n    text-decoration-thickness: 0.2em;\n  }\n  .kol-link {\n    /* Root-level label decoration: the button DOM (button-link) has no `__anchor`, so the\n       underline must be carried outside the anchor scope — as it was before the migration. */\n  }\n  .kol-link .kol-span__label {\n    text-decoration-line: underline;\n  }\n  .kol-link:focus:not([aria-disabled], [disabled]) .kol-span__label, .kol-link:hover:not([aria-disabled], [disabled]) .kol-span__label {\n    text-decoration-thickness: 0.2em;\n  }\n  .kol-link__icon {\n    display: inline-flex;\n  }\n  .kol-alert .kol-icon {\n    color: inherit;\n    display: inline-block;\n    font-size: inherit;\n    font-weight: inherit;\n    line-height: inherit;\n  }\n  .kol-alert :host {\n    display: inline-block;\n  }\n  .kol-alert .kol-button {\n    display: flex;\n    height: 100%;\n    min-height: var(--a11y-min-size);\n    font-style: calc(16 * 1rem / var(--kolibri-root-font-size, 16));\n    text-decoration-line: none;\n  }\n  .kol-alert .kol-button::before {\n    /* Render zero-width character as first element to set the baseline correctly. */\n    content: \"​\";\n  }\n  .kol-alert .kol-button__text {\n    flex: 1 0 100%;\n  }\n  .kol-alert .kol-button {\n    /* The link skeleton renders the anchor as `.kol-link__anchor` inside the `.kol-link`\n       wrapper. The UA default underline sits on the anchor itself, so suppressing\n       `text-decoration` on the wrapper alone is not enough. The remaining declarations\n       restore the box the root element was before the skeleton migration. */\n  }\n  .kol-alert .kol-button__anchor {\n    display: flex;\n    text-align: left;\n    text-decoration-line: none;\n    /* The zero-width baseline character used to live on the root element, which was the\n       flex container positioning the text. In the link skeleton the anchor is that\n       container, so the character has to move with it — otherwise the text sits 1px off. */\n  }\n  .kol-alert .kol-button__anchor::before {\n    content: \"​\";\n  }\n  .kol-alert .kol-button--external-link > .kolicon-link-external::before, .kol-alert .kol-button--external-link .kol-button__anchor > .kolicon-link-external::before {\n    content: none;\n  }\n  .kol-alert {\n    display: grid;\n    grid-template-areas: \"icon heading close\" \"icon content close\";\n    grid-template-columns: min-content 1fr min-content;\n    grid-template-rows: min-content min-content;\n  }\n  .kol-alert__icon {\n    grid-area: icon;\n  }\n  .kol-alert__heading {\n    grid-area: heading;\n  }\n  .kol-alert__closer {\n    /* Visible with forced colors */\n    outline: transparent solid calc(1 * 1rem / var(--kolibri-root-font-size, 16));\n    grid-area: close;\n  }\n  .kol-alert__content {\n    grid-area: content;\n  }\n}";

=== showAsAlert input-text ===
            _type: 'text',
        };
        this.inputHasFocus = false;
        this.controller = new InputTextController(this, 'text', this.host);
    }
    showAsAlert() {
        return Boolean(this.state._touched) && !this.inputHasFocus;
    }
    validateAccessKey(value) {
        this.controller.validateAccessKey(value);
    }
    validateAutoComplete(value) {
        this.controller.validateAutoComplete(value);
    }
    validateMaxLengthBehavior(value) {
        this.controller.validateMaxLengthBehavior(value);
=== logWarn ===
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js:1448:const logWarn = (component, propName, value, requiredGeneric) => {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1449-    devHint(`[${component.constructor.name}] The property value: (${value}) for '${propName}' is not valid. Allowed values are: ${Array.from(requiredGeneric).join(', ')}`);
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1450-};
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1451-function watchValidator(component, propName, validationFunction, requiredGeneric, value, options = {}) {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1452-    if (validationFunction(value)) {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1453-        setState(component, propName, value, options.hooks);
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1454-    }
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1455-    else if (value === undefined && options.required !== true && validationFunction(options.defaultValue)) {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1456-        setState(component, propName, options.defaultValue, options.hooks);
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1457-    }
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1458-    else {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1459-        if (!options.required) {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1460-            requiredGeneric.add(null);
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1461-        }
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1462-        logWarn(component, propName, value, requiredGeneric);
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1463-    }


---

## Assistant

_Thinking:_

I now have a very good picture. Let me note important findings:

1. `KolForm` `_errorList` type in `.d.ts` is `ErrorListPropType[]` = `{message, selector, options}`. But the runtime validator `validateErrorList` requires each item to be a **string or function** (`value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined`). Wait — that validation is: array where every item is a string or function. But `renderErrorList` accesses `error.message` and `error.selector`. So there's a mismatch: the runtime validator would reject objects! Let's re-read:

```js
watchValidator(component, 'errorList', (value) => Array.isArray(value) && value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined, new Set(['string', 'function']), value);
```

So validation passes only if all items are strings or functions. If you pass `{message, selector}` objects, validation fails → logWarn → state NOT set → error list won't render.

Hmm, but `renderErrorList` expects objects with `.message` and `.selector`. That's a genuine inconsistency/bug. So if I use `_errorList` with objects, it won't render. If I use strings, then `error.message` is undefined → link label undefined.

This is an important "API uncertainty / unavailable functionality" to report. Let me verify by testing... hard to test without browser. But the code is clear.

Actually wait — let me double check. Maybe `validateErrorList` in the form is `PropErrorList` from schema/props/error-list. The type says objects. The validator says string|function. That's contradictory. So `_errorList` likely is broken for objects. I should note this and fall back.

Hmm, but actually maybe I should just verify at runtime later. Let's plan: use `_errorList` but be aware. Safer: build own error summary with KolAlert + links? But then no need.

Actually, let me reconsider: I could avoid `_errorList` entirely and rely on per-field `_msg` which is the primary mechanism. That's simpler and more robust. But requirement says "Validation feedback" and "error handling" — per-field messages satisfy that.

But it'd be nice to have form-level summary. Given the validator mismatch risk, I'll note it as an uncertainty and use a `KolAlert` with `_alert` for the summary instead? Hmm, but requirement5 says note if required functionality unavailable and suggest fallbacks.

Let me actually empirically test the errorList validator. I can run a quick node script? The components are web components requiring DOM. Hard.

Alternatively I can check git history / docs. Let me just be honest: I'll document the discrepancy and choose the fallback (KolAlert summary) — no wait, actually let me reconsider: maybe using `_errorList` with objects is what docs say and works. The validator would log a dev warning and not set state, so it wouldn't render. Risky.

Hmm, but there's a subtlety: `watchValidator` fails → `logWarn` → state not set. So no render. So objects definitely don't render.

With strings: validation passes, state set to array of strings. `renderErrorList` maps `error.message` (undefined) and `error.selector` (undefined) → `KolLinkWcTag _label={undefined}` and onClick `typeof error.selector === 'string' ? ... : error.selector` → undefined. So a link with empty label. Broken too.

So `_errorList` appears unusable either way. Good catch — that's a real finding to document.

Wait, actually... let me reconsider: does `validateErrorList` maybe get called with the raw prop and there's a different code path? `_errorList: [16]` in the Stencil lazy-load metadata — type 16 means "any"/object? Type 1 = string, 4 = boolean, 16 = object/any, 2 = number, 8 = ?, 1540 etc. So `_errorList` is passed through as object. Then `validateErrorList` is a watcher. So yes.

Let me double check that the `.d.ts` ErrorListPropType matches. Yes.

So: document as a likely bug/uncertainty. Fallback: render our own error summary using `KolAlert` with `_variant="card"` and `_alert` for role="alert".

Hmm, but actually — maybe I should just try it empirically in a browser. That's a lot of work. I could write a tiny node test with jsdom? Not installed.

Alternative: I can verify by checking the KoliBri GitHub source... offline. Let me just quickly grep the source map or docs folder for errorList examples.

Let me search node_modules for "errorList" usage examples.

Actually there might be e2e tests in dist/types/e2e.

Let me grep quickly.

Also, I should verify how `_on` callbacks are passed from React: `attachProps` sets `node[name] = newProps[name]` for non-event props. For `_on` (object), `name` = `_on`, doesn't start with "on" (starts with "_"), so `node["_on"] = object`. Good.

But wait: in `render()`, props are filtered: only string/boolean/number are passed to createElement as dashed props; `_on` is an object so it's NOT passed to createElement. It's only applied via `attachProps` in `componentDidUpdate`. Good — `node._on = {...}`.

Important: `_on` object identity changes each render → `node._on = newValue` each time → Stencil watcher validateOn → setState. Fine.

Now for events: KoliBri components dispatch DOM events (`kol-input`, `change`, `blur`, etc.) via `dispatchDomEvent`. But we use `_on` callbacks which are passed as property. Good.

Let's check `InputTypeOnDefault`: `onInput: (event, value) => void`. Great — so `_on={{ onInput: (event, value) => setValue(value) }}`.

Hmm, careful: `validateOn` for input — let's check it accepts object with onInput function. Probably yes.

Now `KolForm` `_on` = `{ onSubmit: (event) => void }`. Note KolForm's onSubmit calls `event.preventDefault()` then our callback.

Submit button: `KolButton _type="submit"` → `propagateSubmitEventToForm` → `form.requestSubmit()`. The `form` found via `searchFormElement(this.host)` — searches for closest form. But our inputs/buttons are slotted into `<kol-form>`'s shadow `<form>`. Actually `searchFormElement` — let's check: it probably looks at `host.closest('form')` or uses ElementInternals form. Since kol-form renders a real `<form>` in shadow DOM with a slot, the slotted content's `closest('form')` from light DOM... The button is a child of `<kol-form>` in light DOM; `closest('form')` would traverse up the light DOM — `<kol-form>` is not a `<form>`. So it'd go up to document, no form found.

Hmm. But there's `propagateSubmitEventToForm({form: this.host})` and `searchFormElement(options.form)`. Let's check `searchFormElement`.

Also KoliBri inputs are form-associated custom elements possibly (`associated.controller`). Let's check.

Let me check `searchFormElement`.

Actually, in kol-button onClick for `_type === 'submit'`: `propagateSubmitEventToForm({ form: this.host })`. And in `searchFormElement`, likely:

```js
const searchFormElement = (el) => {
  if (el instanceof HTMLFormElement) return el;
  // uses ElementInternals.form or host.form?
}
```

Let's check. Also Stencil `registerInstance`... KoliBri uses `formAssociated`? The controller has `setFormAssociatedValue`. Let's check `associated.controller`.

Let me check both quickly.

Then: does clicking submit inside `<kol-form>` trigger kol-form's onSubmit? Need to verify.

Let me grep searchFormElement.

Also need: does the React wrapper's `_on` for KolForm get called properly.

Another important thing: `_touched` — we must set `_touched={true}` ourselves on submit attempt to reveal messages, because messages only show when `touched === true`. Actually the component sets `_touched = true` internally on blur (`this.component._touched = true`). But React `attachProps` sets `node[name] = newProps[name]` for all props on each update — if we never pass `_touched`, it's not in props, so internal state persists. But if we pass `_touched` it overrides.

Hmm, careful: if we don't pass `_touched`, then on blur the component sets it internally → message shows. That's nice UX. But on submit before blur, no message.

Best: manage `touched` in React state ourselves: set true on blur (via `_on.onBlur`) and on submit. Then pass `_touched`.

Wait — but does `_on.onBlur` get called? `onBlur` in controller: `if (typeof this.component._on?.onBlur === 'function') this.component._on.onBlur(event)`. Yes.

But careful: the component also internally sets `_touched = true` on blur. If React passes `_touched` prop again on re-render, it sets node._touched = our value. Since we set our value to true on blur too, consistent.

Also: if we pass `_touched` and component internally changes, then React re-render sets it back to our state value. Fine as long as we track it.

Alternatively simply don't pass `_touched` at all and rely on internal blur behavior; for submit, we need messages though. Hmm — but if we don't pass `_touched`, can we force it? We'd need to pass it. So track in React state.

But there's a catch: `attachProps` runs `componentDidUpdate` and sets ALL props including `_touched`. If React state `touched` is false and component internally set true, re-render would reset to false. So we must track blur ourselves. OK.

Actually simpler: track `touched` in React; update on blur and on submit.

Hmm, but `onBlur` fires when focus leaves the input. The component's own onBlur logic uses `relatedTarget` checks. `_on.onBlur` is called from the same place. Good.

Now: `_msg` prop: `{ _description: '...', _type: 'error' }`. Also `_alert` in msg for role="alert"? `MsgPropType` = `Omit<AlertProps, '_level'|'_on'|'_label'|'_hasCloser'|'_variant'> & {_description: string}`. AlertProps includes `_alert`, `_type`. So `{_description, _type: 'error', _alert: true}` is valid.

Note: `showMsg = isMsgDefinedAndInputTouched(msg, touched)` → requires `msg` truthy AND `touched === true`.

And `alert` passed to FormFieldMsgFc: `message._alert ?? alert` where `alert = showAsAlert() = touched && !inputHasFocus`.

If `_alert` true → `role="alert"` on the msg div → announced. And KolAlertFc sets a 10s timeout calling `onAlertTimeout` → `handleAlertTimeout` → `validateAlert(false)` which sets `_alert` state false. But wait — for the input's msg, `KolAlertFc` is rendered directly with `alert: message._alert ?? alert` and `onAlertTimeout` is NOT passed (FormFieldMsgFc doesn't pass it). So no timeout reset. But if we pass `_alert: true` in msg, it stays role="alert" always while msg present. Hmm, that means every re-render... role="alert" region existing in DOM with content changes → announced on content change. Adding a new role=alert element → announced. Good.

Actually careful: if `_alert: true` and the element persists, changing `_description` will be announced. Good.

But: `alert: message._alert ?? alert` — if we don't set `_alert`, then `alert = touched && !inputHasFocus`. On blur → touched true, not focused → alert true → role=alert. That's the built-in behavior, quite nice. So maybe don't set `_alert` explicitly; let KoliBri handle it. But if we set `_alert: true` always, then error announced even while focused. Since msg only shows when touched... Let's just not set `_alert` and rely on default? Hmm, `message._alert ?? alert` where message._alert is undefined → alert (computed). Good.

Actually wait: `alert` prop passed into FormFieldFc from input: `alert: this.showAsAlert()` = `touched && !inputHasFocus`. So role=alert appears when touched and not focused. On submit with focus in button, input not focused → role=alert. 

But hold on: is `showAsAlert` re-evaluated on `_touched` change? It's computed in render → yes.

OK. Let's not set `_alert` in msg, keep it simple. Hmm, but on submit the user's focus might still be in the input (they pressed Enter). Then `inputHasFocus` true → no role=alert → but aria-describedby still links the message, and announcement happens... not automatically. Minor.

Actually if they click the submit button, focus moves to button → input not focused → role=alert → announced. Good.

I'll set `_alert: true` in the msg when submitting? That risks double... no, it's just `??` — if we set `_alert: true`, it's always role=alert while msg shown. Since msg only shows when touched, that's acceptable and guarantees announcement. I'll set `_alert: true` for determinism.

Hmm, but then it never resets, and re-announcements happen on any content change — which is what we want.

Wait, but there's a subtlety: role="alert" element that exists while we update `_description` from "Required" to something else — announced. Fine.

Let me reconsider — I'll set `_alert: true`. Deterministic.

Now `_hint`: can be used for helper text.

Now `KolHeading` / `KolCard` for layout. `KolCard` `_label` required, `_level`.

Form structure:
```
<KolCard _label="Anmelden" _level={2}> // hmm level0 default = bold text
  <KolForm _on={{onSubmit}} _requiredText={false} _errorList={...}>
    <KolInputText _label="Benutzername" _name="username" _required _autoComplete="username" _value={...} _on={{onInput}} ... />
    <KolInputPassword _label="Passwort" ... _visibilityToggle />
    <KolButton _type="submit" _label="Anmelden" _variant="primary" />
  </KolForm>
</KolCard>
```

Wait — is `_variant` for button 'primary'? The default from theme `buttonVariantDefault`. Let's check allowed variants: `validateVariant` for button. Let's check what it accepts. Earlier we saw `_variant = X('buttonVariantDefault', this.host) ?? 'normal'`. And `validateVariant` for button — need to check.

Let's grep kol-button-wc validateVariant.

Also `KolHeading` `_level` type HeadingLevel (0-6?).

Also is there a `_hint` for inputs — yes.

Also need `_id`? Inputs generate internal `_id`. For error list selector we'd need an id. Since inputs don't accept `_id` (not in KolInputText props list... actually KolButtonWc has `_id`, inputs don't). Right, inputs have no `_id` prop.

Let's check `searchFormElement` and button variant validation.

Also check `KolInputText` `_type` options — 'text' | 'search'? Not needed.

Let me check remaining details.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn -A25 \"const searchFormElement\" node_modules/@public-ui/components/dist/esm/*.js | head -35; echo '=== button validateVariant ==='; grep -rn -A12 \"validateVariant(value)\" node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js | head -20; grep -rn \"validateVariant\" node_modules/@public-ui/components/dist/esm/variant*.js | head"
}
```

node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js:7:const searchFormElement = (el) => {
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-8-    if (getExperimentalMode()) {
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-9-        devHint(`↓ Search form element start.`);
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-10-        Log.debug(el);
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-11-    }
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-12-    while (el instanceof HTMLElement && el.tagName !== 'FORM' && el.tagName !== KolFormTag.toUpperCase()) {
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-13-        try {
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-14-            if (el.parentElement instanceof HTMLElement) {
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-15-                el = el.parentElement;
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-16-            }
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-17-            else if (el.parentNode instanceof ShadowRoot) {
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-18-                el = el.parentNode.host;
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-19-            }
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-20-            else {
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-21-                el = null;
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-22-            }
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-23-        }
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-24-        catch (_a) {
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-25-        }
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-26-        if (getExperimentalMode()) {
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-27-            Log.debug(el);
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-28-        }
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-29-    }
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-30-    if (getExperimentalMode()) {
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-31-        devHint(`↑ Search form element finished.`);
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js-32-    }
=== button validateVariant ===
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js:228:    validateVariant(value) {
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js-229-        validateVariantClassName(this, value);
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js-230-    }
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js-231-    componentWillLoad() {
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js-232-        this.validateAccessKey(this._accessKey);
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js-233-        this.validateAriaControls(this._ariaControls);
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js-234-        this.validateAriaDescription(this._ariaDescription);
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js-235-        this.validateAriaExpanded(this._ariaExpanded);
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js-236-        this.validateAriaSelected(this._ariaSelected);
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js-237-        this.validateCustomClass(this._customClass);
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js-238-        this.validateDisabled(this._disabled);
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js-239-        this.validateHideLabel(this._hideLabel);
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js-240-        this.validateIcons(this._icons);
node_modules/@public-ui/components/dist/esm/variant-class-name-9qZ5egaq.js:24:const validateVariantClassName = (component, value, options = {}) => {
node_modules/@public-ui/components/dist/esm/variant-class-name-9qZ5egaq.js:47:export { classNameFromVariant as c, validateVariantClassName as v };


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn -B3 -A20 \"validateVariant = (component\" node_modules/@public-ui/components/dist/esm/*.js | head -40; echo '=== HeadingLevel ==='; grep -rn \"HeadingLevel\" node_modules/@public-ui/components/dist/types/schema/types/*.d.ts node_modules/@public-ui/components/dist/types/schema/props/*.d.ts 2>/dev/null | grep \"export type\" | head"
}
```

=== HeadingLevel ===


---

## Assistant

_Thinking:_

I have enough understanding. Let me also check how `_errorList` items are validated: `value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined` — wait, that means each item must be a string or a function? Actually the validation requires every item to be string or function... but the renderErrorList uses `error.message` and `error.selector`. Hmm, that's a discrepancy. Let's re-read:

```js
watchValidator(component, 'errorList', (value) => Array.isArray(value) && value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined, new Set(['string', 'function']), value);
```

So validation passes only if all items are strings or functions. But `ErrorListPropType = { message, selector, options }` — objects! So the validator would reject objects → `logWarn` and no setState. That means `_errorList` with objects `{message, selector}` would FAIL validation and never render!

Wait — the type declaration says `ErrorListPropType[]`. But the runtime validator says items must be string or function. Let's double check: `value.find(v => !(typeof v === 'string' || typeof v === 'function')) === undefined` — find returns undefined if no item matches the predicate, i.e., no item is neither string nor function → all items are strings or functions. So objects fail.

Hmm, but renderErrorList does `error.message` and `error.selector`, implying objects. So there's an inconsistency — possibly the validator is buggy/legacy. This is an important API uncertainty to document.

Let me verify by testing... I can't easily run a browser. Let me check git history / docs. Actually let me check if there's a newer version. Let's just note it as uncertainty and provide a fallback: build our own error summary with KolAlert + links, or rely on per-field messages only.

Actually, let's reconsider: maybe safest approach is:
- Use `KolForm` with `_on={{ onSubmit }}`.
- Use `_errorList` — risky.

Alternative: implement error summary ourselves using `KolAlert` variant card with `_alert` for live announcement, plus per-field `_msg`.

Hmm but a nice accessible pattern: error summary with links to fields. We could do it manually with KolLink. But the requirement says "Validation feedback" — per-field `_msg` satisfies that.

Let me think about `_errorList` more. Risk: validator rejects objects → warning logged → errorList not set → nothing renders. That's a silent failure. I could pass strings? But renderErrorList does `error.message` on a string → undefined, and `error.selector` → undefined; link label undefined. So strings don't work either.

Actually wait: maybe `watchValidator` failure with `options.required` false → `requiredGeneric.add(null)` then logWarn. It just warns; state not set. So `_errorList` objects → not rendered. Unless... hmm.

Let me actually test it quickly in a headless browser? Probably too heavy. Let me check if there's a dist test or the source in node_modules (maybe src maps). The .map files might contain original source. Let's check the source map for kol-form.entry.js to see if validator matches.

Actually the runtime code is definitive. But maybe there's a possibility that `_errorList` is typed as objects AND validator is outdated — meaning broken. I'll document as uncertainty and choose a defensive approach: still pass `_errorList` (typed correctly) because if it works we get a nice summary; and ALSO render our own accessible error summary alert as fallback? That'd be duplicative.

Better: Don't rely on `_errorList`. Instead:
- Per-field `_msg` with `_type: 'error'` and `_touched: true` → renders an alert (`role="alert"` when `showAsAlert()` = touched && !focused) associated via `aria-describedby`.
- Plus a form-level `KolAlert` with `_alert` (role=alert) summarizing errors / success, placed before the form.

Hmm, but actually let me reconsider — maybe I should just test `_errorList` in a browser quickly with vite dev + a headless check. Is there a browser available? Could use `npx playwright`? Not installed. Let's not.

Actually — wait. Let me reconsider the validator once more. `new Set(['string', 'function'])` is `requiredGeneric`. The validation function returns true only if all items are string|function. So objects fail. I'm fairly confident.

Hmm, but the TypeScript type explicitly says `{message, selector, options?}`. Let me check if maybe `renderErrorList` handles strings too... `error.message` on string → undefined. So no.

Let me check git blame/CHANGELOG in node_modules for @public-ui/components.

Let's just quickly search for "errorList" in any docs/README in the package.

I'll do a quick grep.

Actually, an even better approach: test it. I can write a tiny node script using jsdom? Not installed either.

Hmm, maybe simplest: run `pnpm dev` in background and use a headless browser... Let me check if playwright/puppeteer available globally. Probably not. Let's check quickly.

Actually, I could check whether Chrome is available and use `osascript`... overkill.

Let me check if there's a `dist/types/e2e` folder that might have tests referencing errorList.

**Tool: shell**

**Input:**
```json
{
  "command": "ls node_modules/@public-ui/components/dist/types/e2e 2>/dev/null | head -30; echo '---'; grep -rn \"errorList\" node_modules/@public-ui/components/dist/types/e2e 2>/dev/null | head -20; echo '--- README ---'; grep -rn \"errorList\\|_errorList\" node_modules/@public-ui/components/README.md node_modules/@public-ui/react-v19/README.md 2>/dev/null | head"
}
```

index.d.ts
input-character-limit.d.ts
input-msg.d.ts
input-value-reflection.d.ts
utils
---
--- README ---


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"errorList\" node_modules/@public-ui/components/dist/cjs/*.js 2>/dev/null | head -5; echo '=== search docs ==='; grep -rln \"errorList\" node_modules/@public-ui/components/ 2>/dev/null | head"
}
```

node_modules/@public-ui/components/dist/cjs/kol-form.cjs.entry.js:20:    common.watchValidator(component, 'errorList', (value) => Array.isArray(value) && value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined, new Set(['string', 'function']), value);
node_modules/@public-ui/components/dist/cjs/kol-form.cjs.entry.js:61:        this.setBlockElement = (el) => (this.errorListBlock = el);
node_modules/@public-ui/components/dist/cjs/kol-form.cjs.entry.js:62:        this.setFirstLinkElement = (el) => (this.errorListFirstLink = el);
node_modules/@public-ui/components/dist/cjs/kol-form.cjs.entry.js:66:    renderErrorList(errorList) {
node_modules/@public-ui/components/dist/cjs/kol-form.cjs.entry.js:67:        return (index.h(Alert.KolAlertFc, { class: "kol-form__alert", ref: this.setBlockElement, type: "error", variant: "card", label: this.translateErrorListMessage }, index.h("nav", { "aria-label": this.translateErrorList }, index.h("ul", null, errorList === null || errorList === void 0 ? void 0 : errorList.map((error, index$1) => (index.h("li", { key: index$1 }, index.h(componentNames.KolLinkWcTag, { class: "kol-form__link", _href: "", _label: error.message, _on: { onClick: typeof error.selector === 'string' ? () => this.handleLinkClick(String(error.selector), error.options) : error.selector }, ref: index$1 === 0 ? this.setFirstLinkElement : undefined }))))))));
=== search docs ===
node_modules/@public-ui/components/dist/collection/schema/props/error-list.js.map
node_modules/@public-ui/components/dist/collection/schema/props/error-list.js
node_modules/@public-ui/components/dist/collection/components/form/shadow.js
node_modules/@public-ui/components/dist/collection/components/form/shadow.js.map
node_modules/@public-ui/components/dist/types/schema/props/error-list.d.ts
node_modules/@public-ui/components/dist/types/components/form/shadow.d.ts
node_modules/@public-ui/components/dist/types/components.d.ts
node_modules/@public-ui/components/dist/esm/kol-form.entry.js
node_modules/@public-ui/components/dist/esm/kol-form.entry.js.map
node_modules/@public-ui/components/dist/esm/kolibri.js


---

## Assistant

_Thinking:_

Interesting: the `validateErrorList` says value must be an array of strings or functions... wait: `value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined` — this means all items must be string or function. But renderErrorList uses `error.message` and `error.selector` — objects. That's a contradiction. Hmm, wait: `!((typeof v === 'string') || (typeof v === 'function'))` — for an object `{message, selector}`, typeof is 'object', so `!(false)` = true, so find returns the object ≠ undefined → validation fails. So passing objects `{message, selector}` fails validation and gets a devHint warning, and setState is not called → errorList won't render!

Hmm, but the type says `ErrorListPropType[]` with objects. Let me double check the validator in the source (collection) to make sure it's not a typo in my reading.

Actually wait — maybe I should check `dist/collection/components/form/shadow.js`.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn -A6 \"validateErrorList\" node_modules/@public-ui/components/dist/collection/components/form/shadow.js | head -20; echo '=== error-list.js ==='; cat node_modules/@public-ui/components/dist/collection/schema/props/error-list.js"
}
```

node_modules/@public-ui/components/dist/collection/components/form/shadow.js:5:import { validateErrorList, watchBoolean, watchString } from "../../schema";
node_modules/@public-ui/components/dist/collection/components/form/shadow.js-6-import { translate } from "../../i18n";
node_modules/@public-ui/components/dist/collection/components/form/shadow.js-7-import { KolLinkWcTag } from "../../core/component-names";
node_modules/@public-ui/components/dist/collection/components/form/shadow.js-8-import KolAlertFc from "../../functional-components/Alert";
node_modules/@public-ui/components/dist/collection/components/form/shadow.js-9-import { dispatchDomEvent, KolEvent } from "../../utils/events";
node_modules/@public-ui/components/dist/collection/components/form/shadow.js-10-export class KolForm {
node_modules/@public-ui/components/dist/collection/components/form/shadow.js-11-    constructor() {
--
node_modules/@public-ui/components/dist/collection/components/form/shadow.js:83:    validateErrorList(value) {
node_modules/@public-ui/components/dist/collection/components/form/shadow.js:84:        validateErrorList(this, value);
node_modules/@public-ui/components/dist/collection/components/form/shadow.js-85-    }
node_modules/@public-ui/components/dist/collection/components/form/shadow.js-86-    componentWillLoad() {
node_modules/@public-ui/components/dist/collection/components/form/shadow.js-87-        this.validateOn(this._on);
node_modules/@public-ui/components/dist/collection/components/form/shadow.js-88-        this.validateRequiredText(this._requiredText);
node_modules/@public-ui/components/dist/collection/components/form/shadow.js:89:        this.validateErrorList(this._errorList);
node_modules/@public-ui/components/dist/collection/components/form/shadow.js-90-    }
node_modules/@public-ui/components/dist/collection/components/form/shadow.js-91-    static get is() { return "kol-form"; }
node_modules/@public-ui/components/dist/collection/components/form/shadow.js-92-    static get encapsulation() { return "shadow"; }
node_modules/@public-ui/components/dist/collection/components/form/shadow.js-93-    static get originalStyleUrls() {
node_modules/@public-ui/components/dist/collection/components/form/shadow.js-94-        return {
=== error-list.js ===
/*!
 * KoliBri - The accessible HTML-Standard
 */
import { watchValidator } from "../utils";
export const validateErrorList = (component, value) => {
    watchValidator(component, 'errorList', (value) => Array.isArray(value) && value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined, new Set(['string', 'function']), value);
};
//# sourceMappingURL=error-list.js.map


---

## Assistant

_Thinking:_

Interesting: the validator for `_errorList` requires each item to be a string or function... but the renderer uses `error.message` and `error.selector`. Hmm, the validator says: `value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined` — meaning all items must be string or function. That contradicts the type `ErrorListPropType[]` with objects. So if we pass objects `{message, selector}`, validation fails → `logWarn` and state not set → error list won't render.

Wait, let me re-read. If we pass array of objects, `value.find(v => !(typeof v === 'string' || typeof v === 'function'))` returns the first object (since typeof object is not string/function → `!(false)` = true → returns object) → not undefined → validation fails → warn, no setState. So `_errorList` with objects would NOT render!

Hmm, but that seems like a bug. Let's double check: maybe passing strings works — then `error.message` would be undefined and `error.selector` undefined → link label undefined. So strings don't render meaningful messages either.

Hmm. So `_errorList` seems broken either way? Let's check: if item is a string, `error.message` is undefined → `_label: undefined` → blank link. And `error.selector` undefined → onClick undefined. So it renders blank links. If item is an object, validation fails entirely.

Actually wait — maybe validation only warns but there's a default? `watchValidator` → if invalid, `logWarn`, no setState. So state._errorList stays undefined → hasErrorList false → nothing rendered.

So `_errorList` with objects is rejected. That's an API inconsistency worth noting. Let me test empirically maybe... hard without running browser. But the code is clear.

Hmm, but hold on: maybe I misread. Let me re-read the predicate:

```
(value) => Array.isArray(value) && value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined
```

Yes: passes only if array contains exclusively strings or functions.

But renderer does `error.message` / `error.selector` / `error.options`. So there's a genuine mismatch — likely a bug in this version (4.4.0). Given uncertainty, the safe approach: use `_errorList` but... it won't work. Alternative: render our own error summary using `KolAlert` with links, or rely on per-field `_msg`.

Actually, let's reconsider: maybe I should verify by actually running it. That's expensive. Let's instead check the KoliBri docs/GitHub for `_errorList` usage. Could do a quick web search. But maybe not necessary — I can note it as an uncertainty and provide a fallback: build our own accessible error summary with `KolAlert` + `KolLink` (or simply rely on per-field messages plus a `KolAlert` summary).

Hmm, but requirement says "Validation feedback" — per-field `_msg` covers that. And an error summary is a nice-to-have. Let me use `_errorList` anyway? If broken, no error summary appears silently. Better: implement our own summary using KolAlert with `_alert` (role=alert) and links to fields, which is guaranteed to work.

Actually wait — let's reconsider using `_errorList`. Let me quickly check the e2e types folder for form error list tests... there's `dist/types/e2e` with only a few files. Let's check `utils`.

Let me just check whether there's a `form` e2e in a separate package... not available.

Decision: Use `_errorList` as primary (it's the designed API) — no. Risk of silent failure. Let me empirically verify quickly by checking whether the validator would pass for objects... I'm confident it fails.

Hmm, actually wait. Let me reconsider: perhaps `watchValidator` failure with `options.required` undefined → `requiredGeneric.add(null)` then logWarn → devHint. In production mode devHint may be no-op. Either way no setState.

But hold on — does `_errorList` maybe get set through a different path? The Stencil metadata showed `_errorList: [16]` — type 16 means "any"/object? Then `validateErrorList` watcher. So yes, only via validateErrorList.

So `_errorList: [{message, selector}]` → rejected. `_errorList: ['msg']` → accepted but renders `_label: undefined`.

Hmm! Unless... for a string item, `error.message` is undefined. Actually in JS, strings don't have `.message`. Right.

So this feature is effectively broken in this version. Good catch — this is exactly the kind of "required functionality appears unavailable, suggest fallbacks" item.

Actually — wait. Could I pass a function? `error.selector` being a function... if item is a function, `error.message` undefined too. No.

OK so: fallback = render our own error summary. I'll use `KolAlert` with `_type="error"`, `_variant="card"`, `_label`, and inside it a `<nav aria-label>` with a `<ul>` of `KolLink` buttons... Actually simpler and still accessible: use KolAlert as a live region (`_alert`) with text summary, and focus the first invalid field via ref `focus()`.

Hmm, but a link-based error summary is the gold standard (WCAG 3.3.1). I can build it with KolButtonLink or KolLink. Let's keep it reasonable: 

- `KolAlert _alert _type="error"` containing a heading/label and a list of links implemented as `KolLink` with `_href="#..."`? Links with href to element id — but the input's internal `<input>` id is generated internally (state._id), not controllable. However, we can set `id` attribute on the kol-input-text host element via the React wrapper (`id="username"`), and `href="#username"` would focus... anchors focus the target element if focusable. The custom element host has a `focus()` method (KolInputText has `focus`). Actually native anchor navigation to an element with tabindex... host element isn't focusable by default. Hmm.

Simpler: use `KolLink _on.onClick` → call ref.focus(). But then it's a link with href — `_href` required probably.

Let's simplify: use `KolButtonLink` (semantically a button, appearance of a link) with `_on.onClick` → focus the field. That's accessible: a button in an error summary that moves focus to the field.Actually even simpler and arguably fine: the error summary is `KolAlert` with `_alert` (role=alert) listing errors as text, plus each field shows its own inline message with proper `aria-describedby` + `aria-invalid`... wait, does KoliBri set `aria-invalid`? Let's check.

Let me check if inputs set aria-invalid.

Also need to double-check: does `_msg` show only when `_touched`? Yes: `showMsg = isMsgDefinedAndInputTouched(msg, touched)` → requires touched === true. The component sets `_touched = true` internally on blur. So on blur the message appears. But on submit (without blur), if we set `_touched` prop ourselves... the component's onBlur sets `this.component._touched = true` — that's on the component instance, but if we pass `_touched` as a prop from React, each re-render sets it again. Careful: if React passes `_touched={false}` on every render, it would override the internal true. Actually React wrapper `attachProps` sets `node[name] = newProps[name]` on every update for all props. So if we pass `_touched`, we control it fully; if we don't pass it, internal blur handling controls it.

Best: track `touched` in React state: set true on blur (via `_on.onBlur`) and on submit. Pass `_touched` explicitly. Then message shows when we decide.

Hmm but the internal onBlur sets `_touched` on component too, which triggers re-render internally — fine.

Careful: if we pass `_touched={false}` initially and React re-renders with `_touched={false}` after internal set to true... attachProps runs on componentDidUpdate with newProps — if value unchanged (false), it still assigns `node._touched = false`? `Object.keys(newProps).forEach` — it assigns regardless of whether it changed! So `node["_touched"] = false` every update. That would reset internal touched to false on any React re-render. So yes, we must control it ourselves in React state.

So: maintain `touched` per field in React state, set true on blur/submit.

Similarly `_msg` — we pass it; it's an object recreated each render, fine.

Also `_value` — controlled: pass `_value` and update via `_on.onInput`/`onChange`.

Wait: does `_value` get validated/set properly? `validateValue` → watchString probably. Fine.

One concern: React wrapper sets `node["_value"] = value` AND `setAttribute` only for strings — `_value` is a string so both. OK.

But careful: on every keystroke we re-render and set `_value`. KoliBri input handles `_value` prop changes. Should be fine.

Actually there's a subtlety: `_on` is an object; `attachProps` sets `node._on = {...}`. Since we create a new object each render, that's fine. But if we pass `_on` inline it re-assigns each render — fine.

Hmm, but there's a catch: for props whose name starts with "on" followed by uppercase — `_on` doesn't (starts with underscore). So it goes to else branch: `node[name] = newProps[name]`, and if string, setAttribute. `_on` is object → just property assignment. Good.

Now `aria-invalid`: let's check.

Also, does the input render `aria-describedby` for msg? Yes (getRenderStates pushes msg id).

Let's check aria-invalid quickly, and also whether `_msg` object `_description` is required (yes, MsgPropType requires `_description: string`).

Also `_type` in msg: 'error' | 'success' | ... and `_alert` boolean within msg → role="alert".

Note: `alert: message?._alert ?? alert` where `alert = showAsAlert() = touched && !inputHasFocus`. So role="alert" is set when touched && not focused. Good — that gives announcement on blur. If we set `_alert: true` in msg explicitly, it'd always be alert. We should be careful: role=alert on always-present element with changing content announces changes. Since the msg element only renders when touched && msg defined... it's inserted into DOM with role=alert → announced. Good.

Actually `showMsg` requires touched. So the alert div is created when touched becomes true → screen reader announces content. 

Let's verify aria-invalid.

Also for the form: `KolForm` renders `<form noValidate>` in shadow DOM with a slot; children (our inputs) are slotted. Submit: `KolButton _type="submit"` → `propagateSubmitEventToForm` → searchFormElement walks up parents until FORM or KOL-FORM tag → finds `<kol-form>` → then `form.requestSubmit()` where form is the kol-form element? Let's read: `searchFormElement` returns element with tagName FORM or KOL-FORM. Then in propagate: `if (form.tagName === 'FORM')` → requestSubmit; else (KOL-FORM) → ? Let's read the rest of controller-D__mtOju.js.

Let me check that.

Also note KolForm's internal `<form>` has onSubmit → preventDefault → calls `_on.onSubmit(event)`.

Let's read lines 56-93 of controller-D__mtOju.js fully.

Also need `KolAlert` usage for success message.

And check `aria-invalid`.

**Tool: shell**

**Input:**
```json
{
  "command": "sed -n '36,95p' node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js; echo '=== aria-invalid ==='; grep -rn \"aria-invalid\" node_modules/@public-ui/components/dist/esm/*.js | head -10"
}
```

    var _a, _b;
    const form = searchFormElement(options.form);
    if (form instanceof HTMLElement) {
        const event = new Event('reset', {
            bubbles: true,
            cancelable: true,
        });
        if (form.tagName === 'FORM') {
            setEventTarget(event, form);
            form.dispatchEvent(event);
        }
        else if (form.tagName === KolFormTag.toUpperCase()) {
            setEventTarget(event, KoliBriDevHelper.querySelector('form', form));
            const kolForm = form;
            if (typeof ((_a = kolForm._on) === null || _a === void 0 ? void 0 : _a.onReset) === 'function') {
                (_b = kolForm._on) === null || _b === void 0 ? void 0 : _b.onReset(event);
            }
        }
    }
};
const propagateSubmitEventToForm = (options = {}) => {
    const form = searchFormElement(options.form);
    if (form instanceof HTMLElement) {
        const event = new SubmitEvent('submit', {
            bubbles: true,
            cancelable: true,
            submitter: form,
        });
        if (form.tagName === 'FORM') {
            if (getExperimentalMode() && form.noValidate === false) {
                devHint(`If you have not focusable or hidden form fields in your form, you should enable noValidate for your form.`, {
                    force: true,
                });
            }
            setTimeout(() => {
                if (typeof form.requestSubmit === 'function') {
                    form.requestSubmit();
                }
                else {
                    setEventTarget(event, form);
                    form.dispatchEvent(event);
                }
            });
        }
        else if (form.tagName === KolFormTag.toUpperCase()) {
            setEventTarget(event, KoliBriDevHelper.querySelector('form', form));
            const kolForm = form;
            setTimeout(() => {
                var _a, _b;
                if (typeof ((_a = kolForm._on) === null || _a === void 0 ? void 0 : _a.onSubmit) === 'function') {
                    (_b = kolForm._on) === null || _b === void 0 ? void 0 : _b.onSubmit(event);
                }
            });
        }
    }
};

export { propagateResetEventToForm as a, propagateSubmitEventToForm as p };
//# sourceMappingURL=controller-D__mtOju.js.map

=== aria-invalid ===
node_modules/@public-ui/components/dist/esm/InputStateWrapper-BJMqyY_8.js:73:    return Object.assign(Object.assign(Object.assign({}, props), other), { ariaDescribedBy, 'aria-invalid': renderStates.hasError ? 'true' : undefined });
node_modules/@public-ui/components/dist/esm/kol-input-checkbox.entry.js:162:    return Object.assign(Object.assign(Object.assign({}, props), inputProps), { 'aria-invalid': hasError ? 'true' : undefined });
node_modules/@public-ui/components/dist/esm/kol-input-radio.entry.js:80:    return Object.assign(Object.assign(Object.assign({}, props), inputProps), { 'aria-invalid': hasError ? 'true' : undefined });
node_modules/@public-ui/components/dist/esm/kol-select-wc.entry.js:109:        'aria-invalid': hasError ? 'true' : undefined,
node_modules/@public-ui/components/dist/esm/kol-textarea.entry.js:78:    const props = Object.assign(Object.assign({ id: state._id, hideLabel: state._hideLabel, label: state._label, value: state._value, accessKey: state._accessKey, disabled: state._disabled, name: state._name, rows: state._rows, readonly: state._readOnly, required: state._required, placeholder: state._placeholder, touched: state._touched, msg: state._msg }, other), { ariaDescribedBy, 'aria-invalid': renderStates.hasError ? 'true' : undefined });


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"aria-invalid\" node_modules/@public-ui/components/dist/esm/Input-DyCv-etW.js node_modules/@public-ui/components/dist/esm/FieldControl*.js 2>/dev/null | head; echo '=== Input fc ==='; cat node_modules/@public-ui/components/dist/types/functional-components/inputs/Input/Input.d.ts"
}
```

=== Input fc ===
import { type FunctionalComponent as FC } from '../../../stencil-public-runtime';
import type { JSXBase, VNode } from '../../../stencil-public-runtime';
import { type MsgPropType, type Stringified } from '../../../schema';
import type { DefaultInputProps } from '../_types';
export type InputProps = DefaultInputProps<JSXBase.InputHTMLAttributes<HTMLInputElement>> & {
    msg?: Stringified<MsgPropType>;
    touched?: boolean;
    spellcheck?: boolean;
    suggestions?: VNode;
    value?: string | number | string[];
} & {
    [key: `aria-${string}`]: unknown;
    [key: `data-${string}`]: unknown;
};
declare const InputFc: FC<InputProps>;
export default InputFc;


---

## Assistant

_Thinking:_

I have a good picture now. Let me note key findings:

1. Available components: `KolForm`, `KolInputText`, `KolInputPassword`, `KolButton`, `KolAlert`, `KolCard`, `KolHeading`, `KolLink`.

2. Key API facts:
- Inputs: `_label` (required), `_name`, `_value`, `_on` (object with `onInput`, `onChange`, `onBlur`, `onFocus`, `onKeyDown`), `_msg` (`{_description, _type, _alert}`), `_touched` (boolean), `_required`, `_disabled`, `_hint`, `_autoComplete`, `_visibilityToggle` (password), `_hideMsg`.
- Messages only render when `_touched === true` (isMsgDefinedAndInputTouched). The component sets `_touched = true` internally on blur. Also can set externally.
- `aria-invalid` is set when `hasError` = msg type error && touched.
- `_on` for inputs: `(event, value) => void`.
- KolForm: `_on={{ onSubmit, onReset }}`, `_errorList` array of `{message, selector, options}` — BUT the validator `validateErrorList` requires each item be `string` or `function`?? Actually: `value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined` means every item must be a string or function. But type says `ErrorListPropType = {message, selector, options}`. That's a contradiction/bug: an object item would fail validation → logWarn and no setState. So passing objects `{message, selector}` would fail validation and the error list would not render!

Wait — let me re-read. `watchValidator(component, 'errorList', validationFunction, requiredGeneric, value)`. validationFunction = `Array.isArray(value) && value.find(v => !(typeof v === 'string' || typeof v === 'function')) === undefined`. So if items are objects, find returns the object → not undefined → validation fails → logWarn, no setState. So `_errorList` with objects does NOT work; only strings or functions work. But renderErrorList accesses `error.message` and `error.selector`, which on a string would be `undefined`... Actually strings don't have `.message` or `.selector`. So `_label` would be `undefined` for strings.

Hmm, this is a genuine API inconsistency in this version. So the form-level error list is unreliable. This is an important "uncertainty/unavailable" item → fallback: render my own error summary using `KolAlert` with `_variant="card"` and links, or simply rely on per-field messages + a top-level alert.

Let me verify the version: @public-ui/components 4.4.0. Let me double check the type definition again: `ErrorListPropType = { message: string; selector: string | EventCallback<Event>; options?: KolFocusOptions }`. And validator expects string|function items. Definitely inconsistent. Actually wait, maybe the intent: `v` could be... no. It's a bug.

Hmm, but maybe I should test. Hard to test without browser. Let me consider: risk of using `_errorList` is that it silently doesn't render. Safer: build my own accessible error summary with KolAlert + KolButtonLink/KolLink links that focus fields. But `KolLink` needs `_href`. Focus target: inputs have `focus()` method exposed on the host element (ref). Actually the React wrapper forwards refs. `KolInputText` has `focus()` method. So I can use `ref` to call `.focus()`.

Actually simpler: use `KolForm`'s built-in `_errorList` AND a manual summary? Redundant. Let me decide: implement manual error summary with `KolAlert` `_variant="card"` containing a nav list of `KolButtonLink`? Hmm, KoliBri pattern in form uses KolLinkWcTag with `_href=""` and `_on.onClick`.

Hmm — but requirement says "Use KoliBri components that are appropriate and available". A form-level error summary is good a11y practice (WCAG 3.3.1). I'll try `_errorList` first? Given the validator bug, it likely won't render. Let me actually verify more carefully whether items could be strings and render... `error.message` on a string is `undefined`, so `_label: undefined` — KolLink `_label` required, would warn.

So the built-in error list appears broken in 4.4.0. I should report that as "functionality appears unavailable" and provide a fallback: custom error summary built from `KolAlert` + `KolButtonLink`, or `KolForm._errorList` optionally.

Hmm, but wait. Let me reconsider — maybe validation only warns and still... no, `watchValidator` only calls `setState` if valid. So state never updates → `hasErrorList` false → nothing rendered. Confirmed unavailable (for object form).

Actually — I could pass strings and they'd render with undefined labels. Bad.

Alternatively, pass functions? `typeof v === 'function'` passes validation, then `error.message` is undefined (functions don't have .message... actually no). And `error.selector` would be the function itself → `onClick: error.selector` since typeof function !== 'string'. So a link with `_label: undefined`. Still bad.

So: custom error summary it is. I'll build it with `KolAlert` (variant card, type error, `_alert` for role=alert) containing a list of `KolButtonLink` or plain buttons. Hmm, but `KolButtonLink` renders a button styled as link, with `_on.onClick`. That's semantically correct for focusing an input (it's a behavior, not navigation). KoliBri itself uses KolLink with `_href=""`. I'll use `KolButtonLink` with `_on={{ onClick }}` — cleaner, no fake href.

Wait — does KolButtonLink support `_on.onClick`? It's in the interface (line 321+). Let me assume yes; it shares ButtonCallbacksPropType. Let me verify quickly.

3. Focus management: after submit with errors, focus first invalid field or the error summary. Use refs: React wrapper `createForwardRef` → `forwardedRef`. KolInputText exposes `focus()` method. So `ref.current?.focus()`.

But note: the ref points to the host element `<kol-input-text>`; TS type `HTMLKolInputTextElement` has `focus(options?)`. Good.

4. `_msg` + `_touched`:
- To show error: set `_msg={{_description: '...', _type: 'error', _alert: true}}` and `_touched={true}`.
- Component sets `_touched=true` on blur internally. If we pass `_touched` as prop, React wrapper sets `node._touched = value` on each update... `attachProps` sets `node[name] = newProps[name]` for every prop on every componentDidUpdate. If we don't pass `_touched` at all, our props don't include it → not overwritten. Careful: if we pass `_touched={false}` initially and later don't want to clobber internal true... Actually attachProps iterates `Object.keys(newProps)` — only props we pass. If we pass `_touched` always, we'd force our state. Better: control `_touched` ourselves? But internal blur sets it too. Mixed control = last writer wins on re-render.

Simplest robust approach: don't pass `_touched` at all; rely on the component's internal blur → touched. But then on submit (before blur), errors wouldn't show because `showMsg` requires touched. Hmm. On submit, the user clicked the button → blur already fired on the input (clicking button blurs input). Actually clicking the submit button causes the input to blur first (mousedown → blur). So internal `_touched` becomes true. Then validation on submit sets `_msg`. Order: blur happens before click/submit. So msg shows.

But edge case: pressing Enter in the input → submit via `propagateSubmitEventToForm`; focus stays in input → no blur → touched false → message hidden. Risky.

Safer: explicitly manage `_touched` in React state — set `touched: true` for a field on blur (via `_on.onBlur`) and on submit. Pass `_touched={touched}`. Since attachProps writes it each update, our value wins consistently. The internal `component._touched = true` will be overwritten by our value on next React render — but we also set it to true on blur via our own handler, so consistent.

Wait: internal onBlur sets `this.component._touched = true` on the component instance directly. Our `_on.onBlur` handler is called after. We set state → re-render → attachProps writes `_touched=true`. Fine.

But careful: `hasError`/`showMsg` needs touched; our submit sets touched=true for fields with errors. Good.

Hmm, but there's a subtlety: attachProps runs in `componentDidUpdate` — always writes all props. So `_touched` is fully controlled by us. Good, deterministic.

5. `_value` controlled: pass `_value={value}` and update via `_on.onInput`/`onChange`. Note inputs are Stencil components with `_value` prop; passing strings is fine. Also `attachProps` sets attribute for strings: `node.setAttribute(camelToDashCase(name), value)` → `_value` → `setAttribute("_value", ...)`. Fine.

Hmm, one concern: `camelToDashCase("_value")` = `-_value`? Let's see: `str.replace(/([A-Z])/g, m => '-' + m.toLowerCase())` — no uppercase in `_value`, so stays `_value`. OK.

For `_autoComplete` → camelToDashCase → `_-auto-complete`? No: `_autoComplete` has uppercase C → becomes `_auto-complete`. And Stencil expects attribute `_auto-complete`. Good, that matches (the loader metadata shows `_autoComplete: [1, "_auto-complete"]`). 

6. `KolForm` renders `<form noValidate>` with slot, and `_on.onSubmit` receives event (prevented). Submit button `_type="submit"` inside the form triggers `propagateSubmitEventToForm` → finds KOL-FORM → calls `_on.onSubmit`. Also native form submit works.

Note: `KolForm` also renders "mandatory fields hint" by default (`_requiredText = true` default) — shows translated text about required fields. I can set `_requiredText={false}` to hide, or keep. I'll set to false since we mark required per-field... Actually keeping it is fine and informative. Hmm, default text `kol-form-description`. I'll set `_requiredText={false}` to reduce noise? It's an a11y nicety. I'll keep default (true) — no, it says "mandatory fields hint". Let's keep it simple: set `_requiredText={false}`.

Hmm, actually leaving it on is harmless. I'll pass `_requiredText={false}` for a cleaner demo.

7. Password: `KolInputPassword` with `_visibilityToggle` (show password button, accessible labels built in).

8. Username: `KolInputText` with `_autoComplete="username"`, `_required`, `_label="Username"`.

Password: `_autoComplete="current-password"`.

9. Status alert: `KolAlert` with `_alert` (role=alert) for success/error form-level message. Note `_alert` triggers a 10s timeout that sets `_alert=false` (handleAlertTimeout) — only in `kol-alert-wc`; `KolAlert` (wrapper) passes `onAlertTimeout: this.handleAlertTimeout`? Looking at kol-alert.entry.js — it renders KolAlertWcTag with props, no onAlertTimeout. Actually the wrapper `kol-alert.entry.js` line 23 passes `_alert` etc. to `kol-alert-wc`. And `kol-alert-wc.render()` sets `onAlertTimeout: this.handleAlertTimeout` → `validateAlert(false)` after 10s. So role="alert" is removed after 10s. That's fine/standard.

Note: for announcement, role=alert must exist when content changes. If I re-render the same KolAlert element with new text, role=alert already present → announced. If I mount it fresh, also announced. To be safe, I'll mount a single alert and update its slot content... Slot content changes inside shadow DOM — role=alert lives in shadow root of kol-alert-wc; live region announcements for slot content changes... may not fire reliably across shadow boundary. Common practice: give the alert `key` so it remounts. I'll remount with `key` to force new node → announced.

Hmm, remounting the whole alert with a new key creates a new role=alert element with content → announced. Good.

10. Error summary with focus: after failed submit, focus first invalid input via ref.

Let me also double-check `KolButtonLink` `_on` support and `_variant`.

Also need `KolCard` for layout, `KolHeading`.

Let me check KolButtonLink interface quickly and also `_msg` typing (MsgPropType requires `_description`).

Also: does `KolInputText` accept `_on` object with `onInput`? `InputTypeOnDefault` yes.

One more: the React wrapper `attachProps` — for object props like `_on` and `_msg`, `node[name] = newProps[name]` (property assignment, not attribute since not string). Good — Stencil picks up property assignment.

Important: `attachProps` also handles event props: names starting with "on" + uppercase → syncEvent. `_on` starts with `_`, so goes to else → property set. Good.

But careful: our `_on` object is recreated each render → property assignment each render → Stencil watcher validateOn → setState. Fine.

11. TypeScript: `JSX.KolInputText` etc. Props types come from `@public-ui/components` JSX namespace. Need to check that `_msg` type accepts `{_description, _type}`. MsgPropType = Omit<AlertProps, '_level'|'_on'|'_label'|'_hasCloser'|'_variant'> & {_description: string}. AlertProps includes `_alert?: boolean`, `_type?: AlertTypePropType`. Since it's `Generic.Element.Members<...>` — let me check: `AlertProps = Generic.Element.Members<RequiredAlertProps, OptionalAlertProps>` where OptionalAlertProps has `level: HeadingLevel` etc. `Members` probably makes them optional. So `{_description: '...', _type: 'error', _alert: true}` should typecheck.

Hmm — but wait, does JSX.KolInputText's `_msg` type equal `Stringified<MsgPropType>`? Stringified<T> = T | string. Fine.

Let me check `Generic.Element.Members`.

Also potential issue: TS may complain about `_alert` not in MsgPropType if Omit list differs. Let's just check the actual type quickly.

Let me now also verify KolButtonLink props and check whether `KolForm` `_on` key is `onSubmit` (Callback.onSubmit = "onSubmit"). Yes.

Now let me check `Members` and KolButtonLink.

Also — should I use `KolForm`'s `_errorList`? I decided no due to validator bug. I'll document it.

Let me verify KolButtonLink interface.

**Tool: shell**

**Input:**
```json
{
  "command": "sed -n '321,421p' node_modules/@public-ui/components/dist/types/components.d.ts"
}
```

    interface KolButtonLink {
        /**
          * Defines the key combination that can be used to trigger or focus the component's interactive element.
         */
        "_accessKey"?: AccessKeyPropType;
        /**
          * Defines which elements are controlled by this component. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-controls)
         */
        "_ariaControls"?: string;
        /**
          * Defines the value for the aria-description attribute.
         */
        "_ariaDescription"?: AriaDescriptionPropType;
        /**
          * Defines whether the interactive element of the component expanded something. (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-expanded)
          * @TODO : Change type back to `AriaExpandedPropType` after Stencil#4663 has been resolved.
         */
        "_ariaExpanded"?: boolean;
        /**
          * Defines whether the interactive element of the component is selected (e.g. role=tab). (https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-selected)
          * @TODO : Change type back to `AriaSelectedPropType` after Stencil#4663 has been resolved.
         */
        "_ariaSelected"?: boolean;
        /**
          * Makes the element not focusable and ignore all events.
          * @TODO : Change type back to `DisabledPropType` after Stencil#4663 has been resolved.
          * @default false
         */
        "_disabled"?: boolean;
        /**
          * Hides the caption by default and displays the caption text with a tooltip when the interactive element is focused or the mouse is over it.
          * @TODO : Change type back to `HideLabelPropType` after Stencil#4663 has been resolved.
          * @default false
         */
        "_hideLabel"?: boolean;
        /**
          * Defines the icon classnames.
         */
        "_icons"?: IconsPropType;
        /**
          * Defines whether the component is displayed as a standalone block or inline without enforcing a minimum size of 44px.
          * @default true
         */
        "_inline"?: InlinePropType;
        /**
          * Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.). Set to `false` to enable the expert slot.
         */
        "_label": LabelWithExpertSlotPropType;
        /**
          * Defines the technical name of an input field.
         */
        "_name"?: NamePropType;
        /**
          * Gibt die EventCallback-Funktionen für die Button-Events an.
         */
        "_on"?: ButtonCallbacksPropType<StencilUnknown>;
        /**
          * Defines the role of the components primary element.
          * @deprecated We prefer the semantic role of the HTML element and do not allow for customization. We will remove this prop in the future.
         */
        "_role"?: AlternativeButtonLinkRolePropType;
        /**
          * Adds a visual shortcut hint after the label and instructs the screen reader to read the shortcut aloud.
         */
        "_shortKey"?: ShortKeyPropType;
        /**
          * Selector for synchronizing the value with another input element.
         */
        "_syncValueBySelector"?: SyncValueBySelectorPropType;
        /**
          * Defines where to show the Tooltip preferably: top, right, bottom or left.
          * @default 'top'
         */
        "_tooltipAlign"?: TooltipAlignPropType;
        /**
          * Defines either the type of the component or of the components interactive element.
          * @default 'button'
         */
        "_type"?: ButtonTypePropType;
        /**
          * Defines the value of the element.
         */
        "_value"?: StencilUnknown;
        /**
          * Defines which variant should be used for presentation.
         */
        "_variant"?: VariantClassNamePropType;
        /**
          * Clicks the primary interactive element inside this component.
         */
        "click": () => Promise<void>;
        /**
          * Sets focus on the internal element.
         */
        "focus": (options?: KolFocusOptions) => Promise<void>;
        /**
          * Returns the current value.
         */
        "getValue": () => Promise<StencilUnknown>;
    }
    interface KolButtonWc {


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"Members\" node_modules/adopted-style-sheets/dist/*.d.ts 2>/dev/null | head; find node_modules/adopted-style-sheets -name \"*.d.ts\" | head; echo '==='; grep -rn -A10 \"Members\" node_modules/adopted-style-sheets/dist/types/*.d.ts 2>/dev/null | head -20"
}
```

zsh:1: no matches found: node_modules/adopted-style-sheets/dist/*.d.ts
find: node_modules/adopted-style-sheets: No such file or directory
===
zsh:1: no matches found: node_modules/adopted-style-sheets/dist/types/*.d.ts


---

## Assistant

_Thinking:_

Let me check the Generic.Element.Members type to understand whether MsgPropType's `_alert` is required etc. Actually MsgPropType = Omit<AlertProps, '_level'|'_on'|'_label'|'_hasCloser'|'_variant'> & { _description: string }. AlertProps = Generic.Element.Members<RequiredAlertProps, OptionalAlertProps>. Optional props become optional. So `_alert?`, `_type?`, `_description` required.

Now let's check how the React wrapper's `_on` prop is handled. In attachProps, for props starting with "on" + uppercase, it syncs events. `_on` doesn't start with "on", so it goes to else: `node[name] = newProps[name]`, and if string, setAttribute. So `_on={{...}}` sets node._on = object. Good — that works for object props.

But wait: in the React render(), props are filtered: only string/boolean/number are passed to createElement as dashed attributes; and `on*` events with uppercase. So `_on` (object) is NOT passed through createElement, but it IS in `this.props`, so attachProps handles it via componentDidUpdate. Good.

Important: `attachProps` runs in componentDidMount/componentDidUpdate. Object props like `_on` and `_msg` are set as node properties. Good.

Also note `_msg` object → node._msg = object. Works.

Now — important issue: React's createElement with dashed props like `_label` → React will set attribute `_label` on custom element? React 19 passes unknown props as attributes. Actually for custom elements React 19 sets attributes for unknown props. `_label` → attribute `_label`. That's fine since Stencil uses attribute names `_label`.

Hmm but attachProps also does `node[name] = newProps[name]` and setAttribute for strings with camelToDashCase. camelToDashCase("_autoComplete") = "_-auto-complete"? Let's see: str.replace(/([A-Z])/g, m => '-' + m.toLowerCase()). "_autoComplete" → "_auto-complete". Good.

Now `_msg` object: `node["_msg"] = obj`, propType is object not string, so no setAttribute. Good.

Now let's think about the actual design.

Key findings:
1. Components available: KolForm, KolInputText, KolInputPassword, KolButton, KolAlert, KolCard, KolHeading, KolLink/KolButtonLink, KolSkipNav.
2. KolForm renders a native `<form noValidate>` with slot, calls `_on.onSubmit`. It supports `_errorList` for a summary with links that focus fields — BUT the validator `validateErrorList` requires each item be a string or function... wait: `value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined` means every item must be string or function. But `renderErrorList` uses `error.message` and `error.selector`. So the validator contradicts the render code! An object `{message, selector}` would fail the validator (typeof 'object' is neither string nor function) → logWarn, and setState not called → errorList never set → nothing renders.

Hmm, that's a real bug/inconsistency. Let's double check: watchValidator(component, 'errorList', validationFn, ...) — if validationFn fails and value !== undefined, it logs warn and doesn't setState. So `_errorList` with objects would NOT render. With strings, `error.message` would be undefined → link label undefined.

So `_errorList` appears broken in this version. That's a genuine "functionality appears unavailable" finding → fallback: render our own error summary with KolAlert + KolLink/KolButtonLink, or just rely on per-field messages + a form-level alert.

Actually wait — let me reconsider. Maybe passing a function works: `typeof v === 'function'` passes. But renderErrorList does `error.message` → undefined for a function, and `error.selector` → undefined for a function. So no.

So yes, `_errorList` is effectively broken (validator mismatch). I should note that and provide a fallback: a custom error summary using KolAlert (variant card) with a list of KolButtonLink/KolLink that focus fields via refs.

Hmm, but maybe I should double check by running it? Could run a quick node test... it's a Stencil web component, hard to test without DOM. Could use jsdom? Not available necessarily. Let's not over-engineer; but I could verify quickly with a small script using happy-dom? Not installed.

Actually, I can verify the logic statically with confidence — it's clear.

3. Per-field messages: `_msg` object `{_description, _type: 'error'}` + `_touched={true}` → renders an alert with role="alert" (when showAsAlert() = touched && !focused). Also aria-describedby and aria-invalid set. Requires touched === true. The component sets `_touched = true` internally on blur. But if we pass `_touched` prop from React, it's set each render... Actually attachProps sets node._touched = value on every componentDidUpdate. If we don't pass `_touched`, it stays undefined and the internal blur handler sets it. But careful: does passing `_touched` conflict? If we don't pass it, internal works.

Hmm, but there's a subtlety: `showAsAlert()` returns touched && !inputHasFocus. So on blur, role="alert" appears and screen reader announces. Good.

But for submit-time validation without blur (e.g., clicking the submit button blurs the input first, so touched becomes true anyway). Actually clicking a button does blur the input → touched=true. And pressing Enter in the input → submit, input still focused → touched false → message hidden! That's a problem.

So better: explicitly control `_touched` in React state — set touched=true on submit attempt. Since attachProps sets the property on each update, we can pass `_touched={touched[field]}`. But then internal onBlur also sets it — that's fine, they agree.

Wait, but there's a conflict: if React passes `_touched={false}` on a re-render after internal set to true, it would reset to false. So we should set our own state on blur too. Let's just manage `touched` in React state via `_on.onBlur` callback... but does onBlur fire? `_on.onBlur` is called in controller.onBlur when focus leaves. Yes.

Hmm, but does React re-render and reset `_touched` to false? attachProps runs on componentDidUpdate with newProps — it sets node[name] = newProps[name] for every prop in newProps. If we pass `_touched={false}` (still false in our state) while component internally set true, then any re-render (e.g., typing) resets it to false. So we must track touched ourselves. On blur → setTouched(true). On submit → setTouched(true).

Actually simpler: only set touched=true, never back to false (until success/reset). Use a single `submitted`/`touched` state per field.

Also note the internal onBlur sets `component._touched = true` directly on the element, then our React state also becomes true → consistent.

4. Error message clearing: when the user fixes the field, we should clear `_msg`. We validate on submit and clear on input/change.

5. `role="alert"` live region: KolAlert `_alert` prop. Note KolAlertFc sets a 10s timeout calling onAlertTimeout which sets `_alert=false` (only in kol-alert-wc; the outer KolAlert wrapper passes handleAlertTimeout? Let's check: kol-alert.entry.js renders KolAlertWcTag with _alert prop; the -wc one has handleAlertTimeout → validateAlert(false)). So `_alert` becomes false after 10s. That's for announcement only; content stays. Fine.

Important: for a live region to announce, the element must exist before content changes, or be added with role=alert (new nodes with role=alert are announced when added). Re-rendering a KolAlert with new children — since it's a custom element in shadow DOM with a slot... hmm, role="alert" is inside shadow root. Content changes inside shadow root still trigger announcement.

Actually there's a subtlety: for success/error status, I'll conditionally render KolAlert with `_alert` → new element added → announced. Should work.

6. Focus management: after failed submit, focus first invalid field. KolInputText/KolInputPassword have `focus()` method. Use refs (React wrapper supports forwardRef).

Wait — does `createForwardRef` give us the host element? `setComponentElRef` sets `this.componentEl = element` and merges with forwardedRef. Yes, ref → host custom element `<kol-input-text>`. And `.focus()` exists on it. 

7. Button: `_type="submit"` triggers propagateSubmitEventToForm which finds KOL-FORM and calls `_on.onSubmit`. Good. Or use `_type="button"` with `_on.onClick`. Using submit is more semantic (Enter key in input also triggers submit via propagateSubmitEventToForm from input's Enter? Let's check — inputs have `propagateSubmitEventToForm` imported. Let's assume Enter submits.)

Actually let's verify input Enter handling.

8. KolForm `_requiredText` default true shows "mandatory fields hint" text. We might set `_requiredText={false}` or leave. I'll set false to reduce noise? Actually it's a helpful hint. Hmm, default text is `kol-form-description` translation. I'll keep default (true) — no, it says "mandatory fields" hint. With required fields it's appropriate. Let's keep it but maybe set `_requiredText={false}` for simplicity. I'll keep default true since we mark fields required — it's an accessibility feature. Hmm, but it adds a paragraph. It's fine either way. I'll keep it (default).

9. Password visibility toggle: `_visibilityToggle` prop.

10. autoComplete: username / current-password.

Now, is there a `KolInputEmail`? Yes but username isn't necessarily email. Use KolInputText.

Let me verify Enter-key submit in inputs.

Also check `_hint` prop for helper text.

Let me check input Enter → submit.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"propagateSubmitEventToForm\\|KeyboardKey.Enter\\|'Enter'\" node_modules/@public-ui/components/dist/esm/InputStateWrapper-BJMqyY_8.js node_modules/@public-ui/components/dist/esm/base-web-component-D909Fl-Y.js node_modules/@public-ui/components/dist/esm/controller-BFiUKKYT.js 2>/dev/null | head -20; echo '=== all refs ==='; grep -rln \"propagateSubmitEventToForm\" node_modules/@public-ui/components/dist/esm/ | head -20"
}
```

=== all refs ===
node_modules/@public-ui/components/dist/esm/kol-input-number.entry.js
node_modules/@public-ui/components/dist/esm/kol-input-number.entry.js.map
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js.map
node_modules/@public-ui/components/dist/esm/kol-input-password.entry.js
node_modules/@public-ui/components/dist/esm/kol-input-date.entry.js.map
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js.map
node_modules/@public-ui/components/dist/esm/kol-input-range.entry.js
node_modules/@public-ui/components/dist/esm/kol-input-email.entry.js.map
node_modules/@public-ui/components/dist/esm/kol-input-checkbox.entry.js.map
node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js
node_modules/@public-ui/components/dist/esm/kol-input-text.entry.js.map
node_modules/@public-ui/components/dist/esm/kol-input-text.entry.js
node_modules/@public-ui/components/dist/esm/kol-input-password.entry.js.map
node_modules/@public-ui/components/dist/esm/kol-form.entry.js.map
node_modules/@public-ui/components/dist/esm/kol-input-radio.entry.js.map
node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js
node_modules/@public-ui/components/dist/esm/kol-select-wc.entry.js.map
node_modules/@public-ui/components/dist/esm/kol-input-email.entry.js
node_modules/@public-ui/components/dist/esm/kol-input-range.entry.js.map
node_modules/@public-ui/components/dist/esm/kol-input-radio.entry.js


**Tool: shell**

**Input:**
```json
{
  "command": "sed -n '1,80p' node_modules/@public-ui/components/dist/esm/InputStateWrapper-BJMqyY_8.js"
}
```

/*!
 * KoliBri - The accessible HTML-Standard
 */
import { a as __rest } from './tslib.es6-QNbPBOk5.js';
import { h } from './index-C_ZKddLG.js';
import { I as InputFc } from './Input-DyCv-etW.js';
import { a as createRelatedUniqueId } from './dev.utils-Cib2ENyx.js';
import { a as getRenderStates } from './FormFieldStateWrapper-CANKwnKv.js';

const SuggestionsFc = (_a) => {
    var { id, suggestions } = _a, other = __rest(_a, ["id", "suggestions"]);
    if (!suggestions) {
        return null;
    }
    return (h("datalist", Object.assign({ id: createRelatedUniqueId(id, 'list') }, other), suggestions.map((option) => (h("option", { value: option })))));
};

function getInputProps(state, other, customSuggestions) {
    var _a;
    const renderStates = getRenderStates(state);
    const ariaDescribedBy = [...renderStates.ariaDescribedBy, ...((_a = other.ariaDescribedBy) !== null && _a !== void 0 ? _a : [])];
    const props = {
        id: state._id,
        hideLabel: state._hideLabel,
        label: state._label,
        disabled: state._disabled,
        name: state._name,
    };
    if ('_accessKey' in state)
        props.accessKey = state._accessKey;
    if ('_type' in state)
        props.type = state._type;
    if ('_value' in state)
        props.value = state._value;
    if ('_required' in state)
        props.required = state._required;
    if ('_maxLength' in state && '_maxLengthBehavior' in state && state._maxLengthBehavior === 'hard')
        props.maxlength = state._maxLength;
    if ('_placeholder' in state)
        props.placeholder = state._placeholder;
    if ('_autoComplete' in state)
        props.autoComplete = state._autoComplete;
    if ('_spellCheck' in state)
        props.spellcheck = state._spellCheck;
    if ('_pattern' in state)
        props.pattern = state._pattern;
    if ('_readOnly' in state)
        props.readonly = state._readOnly;
    if ('_min' in state)
        props.min = state._min;
    if ('_max' in state)
        props.max = state._max;
    if ('_step' in state)
        props.step = state._step;
    if ('_multiple' in state)
        props.multiple = state._multiple;
    if ('_checked' in state)
        props.checked = state._checked;
    if ('_indeterminate' in state)
        props.indeterminate = state._indeterminate;
    if ('_touched' in state)
        props.touched = state._touched;
    if ('_msg' in state)
        props.msg = state._msg;
    if ('_shortKey' in state)
        props['aria-keyshortcuts'] = state._shortKey;
    if ('_suggestions' in state && !customSuggestions) {
        const hasSuggestions = Array.isArray(state._suggestions) && state._suggestions.length > 0;
        if (hasSuggestions) {
            props.suggestions = (h(SuggestionsFc, { id: state._id, suggestions: state._suggestions }));
        }
    }
    return Object.assign(Object.assign(Object.assign({}, props), other), { ariaDescribedBy, 'aria-invalid': renderStates.hasError ? 'true' : undefined });
}
const InputStateWrapper = (_a) => {
    var { state, customSuggestions } = _a, other = __rest(_a, ["state", "customSuggestions"]);
    return h(InputFc, Object.assign({}, getInputProps(state, other, customSuggestions)));
};

export { InputStateWrapper as I, SuggestionsFc as S };


---

## Assistant

_Thinking:_

Let's check how inputs propagate Enter key to form submit. Let's search in kol-input-text.entry.js for keydown Enter.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"propagateSubmitEventToForm\\|Enter\" node_modules/@public-ui/components/dist/esm/kol-input-text.entry.js | head; echo '=== controller BFiU ==='; grep -rn \"propagateSubmitEventToForm\\|Enter\" node_modules/@public-ui/components/dist/esm/controller-BFiUKKYT.js | head; echo '=== base-web-component ==='; grep -rn \"propagateSubmitEventToForm\\|Enter\" node_modules/@public-ui/components/dist/esm/base-web-component-D909Fl-Y.js | head"
}
```

node_modules/@public-ui/components/dist/esm/kol-input-text.entry.js:14:import { p as propagateSubmitEventToForm } from './controller-D__mtOju.js';
node_modules/@public-ui/components/dist/esm/kol-input-text.entry.js:161:            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
node_modules/@public-ui/components/dist/esm/kol-input-text.entry.js:162:                propagateSubmitEventToForm({
=== controller BFiU ===
=== base-web-component ===


---

## Assistant

_Thinking:_

Good — Enter in input submits the form. Now let me check how the React wrapper passes `_on` objects — since `_on` starts with `_`, not `on` + uppercase, so `attachProps` sets `node[name] = newProps[name]` — good, it sets as property. And in render(), `_on` is an object, so `type === object` → not passed through propsToPass! Wait, look at render():

```js
let propsToPass = Object.keys(cProps).reduce((acc, name) => {
  const value = cProps[name];
  if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
    ...
  } else {
    const type = typeof value;
    if (type === "string" || type === "boolean" || type === "number") {
      acc[camelToDashCase(name)] = value;
    }
  }
  return acc;
}, {});
```

So object props like `_on` and `_msg` are NOT passed to createElement — they're only applied in `componentDidUpdate` → `attachProps`. attachProps does `node[name] = newProps[name]` for all keys (except the skipped ones). So `_on` object gets assigned as property on the element. Good.

But careful: attachProps runs in componentDidMount/componentDidUpdate. That works.

Important caveat: in attachProps, for string values it also calls `node.setAttribute(camelToDashCase(name), newProps[name])`. camelToDashCase("_msg") = "_-msg"? Let's see: `str.replace(/([A-Z])/g, ...)` — no uppercase in "_msg", so stays "_msg". Good. For "_hideMsg" → "_hide-msg". Good.

For object values, only property assignment. Good.

Now — one important issue: React wrapper's `render()` skips object props from createElement, but `attachProps` handles them. OK.

Another issue: boolean props are passed to createElement as attributes — React sets attribute `_required="true"`? Actually React for custom elements: unknown attributes are set as attributes with string conversion... React 19 sets `_required` as attribute. Then attachProps also does `node["_required"] = true` (property) and since propType is boolean not string, no setAttribute. Fine.

Now, event handling: `_on={{ onInput: ... }}` is a property. Good.

But note the wrapper also supports `onInput` as React-style prop? `name.indexOf("on")===0 && name[2] is uppercase` — "onInput": name[2] = "I" uppercase → yes it's treated as event. But we use `_on`, so no conflict.

Now let's decide the design.

Components to use:
- `KolForm` — wraps form, provides `_on.onSubmit`, `_errorList` for error summary. Note: `_errorList` validator requires each item to be a string or function?? `value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined` — that means every item must be string or function! But renderErrorList uses `error.message` and `error.selector`. So an object `{message, selector}` would fail validation → `logWarn` and state not set. Hmm interesting: validator says items must be string or function. But the type says `ErrorListPropType[]` = `{message, selector, options}[]`.

So the validator contradicts the type. If we pass objects, validation fails and `_errorList` state won't be set → error list won't render. If we pass strings, `error.message` is undefined → renders empty label links.

That's a real bug/uncertainty. So the form-level error list may not work. Fallback: render our own error summary using `KolAlert` with `_variant="card"` and links, OR just rely on per-field `_msg`.

Hmm, but wait — actually let's reconsider. `watchValidator` with `requiredGeneric` — if validation fails, it just warns and doesn't setState. So object items → not rendered. So `_errorList` with objects is effectively broken in this version (4.4.0). Let me double check: maybe `typeof v === 'object'` check... `!(typeof v === 'string' || typeof v === 'function')` → for object, typeof is 'object', so `!(false)` = true → find returns the object ≠ undefined → validation false. Yes, broken.

Actually hold on. Let me reconsider: maybe it's intended that items are strings/functions and renderErrorList handles `error.message` where error is a string → undefined label. Hmm, for a string, `error.message` is undefined, `error.selector` undefined → link with undefined label. So strings also render badly.

So `_errorList` is effectively unusable/broken. I should note this as "functionality appears unavailable" and use a fallback: build our own error summary with `KolAlert` + `KolLink` (or buttons) that focus fields.

Hmm, but it's a documented prop. Let me verify by checking the git/version or the actual KoliBri docs... Let me just test at runtime? We could run the dev server and check. That might be overkill but valuable. Actually, we could write a quick test with a headless browser? Not available probably.

Let me just reason carefully and note it as an assumption, and provide fallback. Actually — better: I can verify by checking the TypeScript types: `ErrorListPropType = {message, selector, options?}`. And validator requires string|function. Definitely contradictory. I'll note it.

Alternative: I could pass items that are objects and see... no runtime check possible easily. Actually I could check if there's a `dist/collection` version with different code — already checked, same.

Hmm, but wait. Maybe there's a different code path: `_errorList` type16 in the loader metadata (`"_errorList":[16]`) = object/array type, passed as property. Fine.

Decision: Use `KolForm` with `_on.onSubmit`, per-field `_msg` + `_touched`, and a custom accessible error summary rendered with `KolAlert` + `KolLink`/`KolButtonLink` for jumping to fields. Actually to keep it simpler and robust: use KolAlert (variant card, type error, `_alert` for role=alert) containing a list of KolButtonLink buttons that focus the corresponding input via ref.

Hmm, but "Use KoliBri components that are appropriate" — a custom summary with KolAlert + KolButtonLink is fine.

Actually, let me reconsider: maybe simpler & more idiomatic — use `_errorList` AND per-field messages? If error list is broken, summary silently disappears. Better to be safe: implement our own summary. But I should still document `_errorList` as the "native" option with the found bug.

Wait — actually, let me test it for real. There might be a way: run vite dev server and use... no browser automation available. Let me check if playwright/puppeteer is around.

Probably not. Let's not over-engineer.

Hmm, actually — one more consideration. Let me reconsider the validator once more:

```js
watchValidator(component, 'errorList', 
  (value) => Array.isArray(value) && value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined, 
  new Set(['string', 'function']), value);
```

Yes. So only arrays of strings or functions pass.

And renderErrorList:
```js
error.message, error.selector
```
- string: `.message` undefined, `.selector` undefined → `onClick: error.selector` → since typeof undefined !== 'string', onClick = undefined. Link label undefined.
- function: `.message` undefined, `.selector` undefined. Same.

So both fail to render meaningful content. Confirmed broken. Unless... KolLinkWcTag `_label` undefined → renders empty. So error list renders an alert box with empty links. Bad.

OK. Fallback: custom summary.

Now, per-field validation feedback: `_msg` object `{_description: '...', _type: 'error'}` plus `_touched: true`. Note `showMsg = isMsgDefinedAndInputTouched(msg, touched)` — needs `touched === true`. The component sets `_touched = true` internally on blur. But if we pass `_touched` from React, `attachProps` sets `node._touched = value` on every update... only if key present in props. If we don't pass `_touched` at all, the internal onBlur sets it. But internal sets `this.component._touched = true` — is that on the element? `this.component` is the Stencil component instance (host el proxy). Setting `_touched` on host triggers watcher → setState. OK.

But if we DO pass `_touched` as prop, React will re-set it on each render (attachProps iterates all keys of newProps every componentDidUpdate). So we must control it ourselves consistently.

Design: manage `touched` per field in React state:
- On blur (via `_on.onBlur`) → mark touched.
- On submit → mark all touched.

Actually simpler: don't pass `_touched` initially; let component's internal blur handling do it. But then on submit (without blur), messages won't show. We need `_touched` for submit-time display. So better to control it fully in React: pass `_touched={touched.username}`.

Hmm, but the component's internal onBlur also sets `_touched=true` on the element, which would desync from React state (React state false, element true). Then on next React render, attachProps sets it back to false. Messy. Better: also listen to `_on.onBlur` and set state true. Then React state and element agree (both true).

But careful: onBlur internal sets element `_touched = true` first, then calls our `_on.onBlur` → we setState(true) → re-render → attachProps sets `_touched = true`. Consistent. 

If we never set it false after true, fine.

Alternative approach: track touched in React only, and set `_touched` prop. The internal onBlur sets it true too — no conflict since we also set true.

Edge: initial render `_touched={false}` — attachProps sets node._touched = false. Fine.

Hmm, one problem: attachProps `node[name] = newProps[name]` where name = "_touched" and value false → sets property `_touched = false`, and propType is boolean so no setAttribute. Stencil watcher on `_touched` → validateTouched → watchBoolean → setState. Fine.

Now: does setting `_touched` to false initially cause warnings? watchBoolean accepts boolean. Fine.

Now messages: `_msg` = `{ _description: '...', _type: 'error', _alert: false }`. Wait MsgPropType = Omit<AlertProps, '_level'|'_on'|'_label'|'_hasCloser'|'_variant'> & {_description: string}. AlertProps includes `_alert`, `_type`. So `_alert` is allowed. If `_alert: true`, FormFieldMsgFc passes `alert: message._alert ?? alert` → role="alert" on the msg div → announced immediately. But note KolAlertFc sets a 10s timeout calling onAlertTimeout → `handleAlertTimeout` → `validateAlert(false)`... wait that's on KolAlertWc. FormFieldMsgFc renders KolAlertFc directly with `onAlertTimeout` not passed → undefined → `onAlertTimeout?.()` no-op. So `_alert: true` stays. Hmm, actually it passes `alert: true` always while msg present → role="alert" permanently on the element. When the msg element is added to DOM with role=alert, it gets announced. When text changes, announced again. Good.

But careful: role="alert" region already in DOM and content changes → announced. That's what we want.

Actually `showAsAlert()` returns `touched && !inputHasFocus` and is passed as `alert` fallback: `alert: message?._alert ?? alert`. Since we can set `_alert` in msg, if we set `_alert: true` it's always alert. Let's not set `_alert` in msg and let component compute `showAsAlert()` (touched && !focused). That's the KoliBri-idiomatic behavior: error announced on blur. Hmm but on submit with focus in button (not input), touched=true, inputHasFocus=false → alert=true. 

But if we don't set `_alert`, `message._alert` is undefined → `?? alert` → uses showAsAlert(). Good, that's better.

Wait: `alert` prop passed to KolFormFieldFc comes from `this.showAsAlert()` in kol-input-text.entry.js line 112. And that's re-evaluated on render. But does the component re-render when focus changes? `inputHasFocus` is a plain instance property, not state... Let's check: in FormFieldStateWrapper, `inputHasFocus` is set in onFocus/onBlur handlers. Is it state? `this.inputHasFocus = true` — plain property. Stencil re-renders on state changes. Hmm, in kol-input-text, `inputHasFocus` listed in loader metadata as `[32]` (state, type 32 = any?). Actually `{"..., "state":[32], "inputHasFocus":[32], ...}` — so `inputHasFocus` IS a state property (type 32). Wait for kol-input-text the metadata shows `"state":[32], "inputHasFocus":[32]`? Let me look: `kol-input-text` → `{"_accessKey":[1,...], ..., "_variant":[1], "state":[32], "inputHasFocus":[32], ...}` Hmm I see for kol-input-password: `"state":[32], "_passwordVisible":[32], "inputHasFocus":[32]`. For kol-input-text: `"state":[32], "inputHasFocus":[32]`. Yes it's a state → re-render on change. Good.

OK so per-field messages with `role="alert"` when touched & not focused. 

Now, is there also `aria-describedby` linking? Yes: getRenderStates pushes msg id when hasMessage && !hideMsg. And `aria-invalid` when hasError (error type + touched).

Wait: `hasError = isMessageValidError && state._touched === true`. And ariaDescribedBy includes msg id when `hasMessage && !state._hideMsg` (regardless of touched). So describedby always present when msg exists. Good.

Now the submit flow:
- `KolForm _on={{ onSubmit: handler }}`. KolForm renders `<form noValidate>` with slot; children (our inputs + button) are slotted into the form → native form semantics. 
- `KolButton _type="submit"` → onClick → propagateSubmitEventToForm → finds KOL-FORM ancestor → calls kolForm._on.onSubmit(event) via setTimeout.
- Enter key in input → same.
- Also native form submit event → kol-form's own onSubmit → `event.preventDefault()` then calls `_on.onSubmit`.

Note: there could be double invocation: propagateSubmitEventToForm for KOL-FORM tag calls `kolForm._on.onSubmit` directly (setTimeout), AND the native form... no, for KOL-FORM it doesn't dispatch to form. It calls kolForm._on.onSubmit directly. The `<form>` inside has onSubmit handler which is only triggered by native submit (e.g., requestSubmit). Since button is inside shadow... actually button is slotted content of kol-form, but the `<form>` is inside kol-form's shadow DOM, and slotted elements are children of kol-form in light DOM. The form is in shadow root → slotted button is NOT a descendant of the form element in DOM tree! So native form submission doesn't include slotted content... Actually form association: slotted elements are form-associated? A form-associated custom element... hmm. The button is `<kol-button>` which is a custom element inside `<kol-form>` light DOM. The `<form>` is in kol-form's shadow root. `<kol-button>`'s `closest('form')` — shadow root boundary: closest from light DOM won't traverse into shadow root of kol-form... Actually `closest` traverses up parentNode chain; kol-form's parent is light DOM chain, not the shadow form. So button's form is null.

That's why they use searchFormElement walking up and checking for KOL-FORM tag, then invoking `kolForm._on.onSubmit` directly. Good — so `_on.onSubmit` fires once. 

Also `form.requestSubmit()` path: for KOL-FORM they don't call requestSubmit. OK so single call.

But careful: KolForm's internal `<form onSubmit>` → if some native path triggers it, `_on.onSubmit` called again. Enter key in input: `propagateSubmitEventToForm` → searchFormElement(input) → walks up: input → ... → kol-input-text → kol-form (tag KOL-FORM) → returns kol-form → calls kolForm._on.onSubmit. Single.

Hmm but does the input's Enter also cause native form submission? The input is slotted into kol-form; input.closest('form') → no form in light DOM. So no native submit. Good. Single call.

So `_on.onSubmit(event)` gets a `SubmitEvent`. We must NOT need preventDefault (KolForm's native handler already preventDefaults).

Wait — actually in the KOL-FORM branch, `event` is a newly created SubmitEvent, and `setEventTarget(event, ...)` sets target. preventDefault not called, but it's a synthetic event so nothing happens anyway.

OK.

Now validation flow on submit:
1. Validate username/password.
2. If invalid: set errors, set touched for both fields, set error summary, focus first invalid field (or focus error list).
3. If valid: show success alert, clear errors.

Focus management: use refs to the KoliBri input elements and call `.focus()`. React wrapper supports forwardRef → `HTMLKolInputTextElement` with `focus()` method. 

Type: `React.ForwardRefExoticComponent<JSX.KolInputText & ... & RefAttributes<HTMLKolInputTextElement>>`. So `useRef<HTMLKolInputTextElement>(null)` works? The ref type must match. `RefAttributes<HTMLKolInputTextElement>` yes.

Hmm, but `focus` on the element is `focus(options?: KolFocusOptions)`. Fine.

Error summary: To keep it accessible & simple, render a `KolAlert` with `_variant="card"`, `_type="error"`, `_label`, `_alert` (role=alert) containing... slot content with a list of `KolButtonLink` or `KolLink` that focus fields.

Hmm, actually maybe simpler: since `_errorList` is broken, use our own `<nav aria-label>` + `<ul>` + `KolButtonLink _type="button"` with `_on.onClick`. But KolButtonLink requires `_label` and `_href`? KolButtonLink doesn't have `_href` (it's button-styled-as-link). Good — `_label` + `_on.onClick`.

Actually within KolAlert slot we can put plain HTML too. But requirement says use KoliBri components. I'll use KolButtonLink.

Hmm, let me reconsider: maybe simpler is better. The requirements: "Validation feedback", "Accessible labels and error handling". A per-field message + a form-level error summary (role=alert) + focus management covers it.

Let me reconsider whether to even use `_errorList`. I'll mention it as documented-but-unusable.

Actually, hold on. Let me reconsider the `_errorList` validator once more — maybe `watchValidator` failing still... no, it doesn't setState. But is `_errorList` maybe also set elsewhere? `hasErrorList = Array.isArray(this._errorList) && this._errorList.length > 0` — wait! render() uses `this._errorList` (the raw prop), NOT `this.state._errorList`!

```js
render() {
    const hasErrorList = Array.isArray(this._errorList) && this._errorList.length > 0;
    return (h(Host, null, hasErrorList && this.renderErrorList(this._errorList), this.renderFormElement()));
}
```

It uses `this._errorList` — the raw instance property! So the validator's failure only affects `state._errorList` which... is unused in render. So `_errorList` DOES work — validation warning is logged but rendering uses raw prop.

So `_errorList` with `{message, selector}` objects WILL render. The validator is buggy (logs a dev warning) but render path works.

Wait but does Stencil re-render when `_errorList` changes? `_errorList` is a `@Prop()` — Stencil re-renders on prop change (props are reactive by default unless mutable). Yes, @Prop changes trigger re-render. So it works.

Hmm, but does the dev warning matter? `logWarn` → `devHint` which only logs in dev mode. Acceptable — but it'd pollute console. Let's check `devHint`.

Actually wait: `validateErrorList` is called in `componentWillLoad` only (not in a watcher — let's check: `static get watchers() { return { "_on": ["validateOn"], "_requiredText": ["validateRequiredText"], "_errorList": ["validateErrorList"] }`. Yes `_errorList` has a watcher too. So on each change → warn.

Let me check devHint: probably only logs when `getExperimentalMode()` or always?

Let me check.

Actually, let me reconsider: maybe items as objects do pass? `typeof v === 'object'`... no.

Hmm, so we'd get console warnings in dev. That's a minor annoyance but works. Alternatively pass selector as... no, need message+selector.

I'll use `_errorList` since it works at runtime, and note the validator discrepancy. Actually — better: let me verify devHint behavior to know if it's noisy.

Let me check.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn -A12 \"function devHint\\|const devHint\" node_modules/@public-ui/components/dist/esm/*.js | head -25; echo '=== getExperimentalMode ==='; grep -rn -A8 \"function getExperimentalMode\\|const getExperimentalMode\" node_modules/@public-ui/components/dist/esm/*.js | head -15"
}
```

node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js:650:const devHint = (msg, options) => {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-651-    if (devCache.has(msg) === false || !!(options === null || options === void 0 ? void 0 : options.force)) {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-652-        devCache.add(msg);
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-653-        Log.debug([msg].concat((options === null || options === void 0 ? void 0 : options.details) || []), {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-654-            classifier: `💻 dev`,
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-655-            forceLog: !!(options === null || options === void 0 ? void 0 : options.force),
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-656-            overwriteStyle: '; background-color: #f09',
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-657-        });
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-658-    }
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-659-};
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-660-const devWarning = (msg, options) => {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-661-    if (devCache.has(msg) === false || false) {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-662-        devCache.add(msg);
=== getExperimentalMode ===
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js:565:const getExperimentalMode = () => EXPERIMENTAL_MODE === true;
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-566-const setExperimentalMode = (mode) => {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-567-    EXPERIMENTAL_MODE = mode === true;
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-568-};
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-569-const getColorContrastAnalysis = () => COLOR_CONTRAST_ANALYSIS === true;
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-570-const setColorContrastAnalysis = (mode) => {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-571-    COLOR_CONTRAST_ANALYSIS = mode === true;
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-572-};
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-573-const LOG_STYLE = 'color: white; background: #666; font-weight: bold; padding: .25em .5em; border-radius: 3px; border: 1px solid #000';


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"state._errorList\\|this.state._errorList\" node_modules/@public-ui/components/dist/esm/kol-form.entry.js | head; echo '---'; grep -rn \"errorList\" node_modules/@public-ui/components/dist/collection/components/form/shadow.js"
}
```

---
node_modules/@public-ui/components/dist/collection/components/form/shadow.js:45:        this.setBlockElement = (el) => (this.errorListBlock = el);
node_modules/@public-ui/components/dist/collection/components/form/shadow.js:46:        this.setFirstLinkElement = (el) => (this.errorListFirstLink = el);
node_modules/@public-ui/components/dist/collection/components/form/shadow.js:50:    renderErrorList(errorList) {
node_modules/@public-ui/components/dist/collection/components/form/shadow.js:51:        return (h(KolAlertFc, { class: "kol-form__alert", ref: this.setBlockElement, type: "error", variant: "card", label: this.translateErrorListMessage }, h("nav", { "aria-label": this.translateErrorList }, h("ul", null, errorList === null || errorList === void 0 ? void 0 : errorList.map((error, index) => (h("li", { key: index }, h(KolLinkWcTag, { class: "kol-form__link", _href: "", _label: error.message, _on: { onClick: typeof error.selector === 'string' ? () => this.handleLinkClick(String(error.selector), error.options) : error.selector }, ref: index === 0 ? this.setFirstLinkElement : undefined }))))))));
node_modules/@public-ui/components/dist/collection/components/form/shadow.js:57:        const hasErrorList = Array.isArray(this._errorList) && this._errorList.length > 0;
node_modules/@public-ui/components/dist/collection/components/form/shadow.js:58:        return (h(Host, { key: 'c2b8fc8fe2e383c833b04a41eed66ffa3bf9391c' }, hasErrorList && this.renderErrorList(this._errorList), this.renderFormElement()));
node_modules/@public-ui/components/dist/collection/components/form/shadow.js:63:            (_b = (_a = this.errorListFirstLink) === null || _a === void 0 ? void 0 : _a.querySelector('a')) === null || _b === void 0 ? void 0 : _b.focus(options ? options : this.scrollOptionsFallback);
node_modules/@public-ui/components/dist/collection/components/form/shadow.js:89:        this.validateErrorList(this._errorList);
node_modules/@public-ui/components/dist/collection/components/form/shadow.js:154:            "_errorList": {
node_modules/@public-ui/components/dist/collection/components/form/shadow.js:223:                "propName": "_errorList",


---

## Assistant

_Thinking:_

Interesting: `_errorList` validator requires each item be a string or a function... wait: `value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined` — that means every item must be string or function. But renderErrorList uses `error.message` and `error.selector`. So objects `{message, selector}` would FAIL validation (watchValidator would logWarn and not setState). Hmm, but `render()` uses `this._errorList` directly (not state), so it still renders! It reads `this._errorList` (the raw prop). So the validator only affects state, not rendering. Good — objects work for rendering.

Actually wait: `hasErrorList = Array.isArray(this._errorList) && this._errorList.length > 0` and `renderErrorList(this._errorList)` — uses raw prop. So objects work. The validator warning would be logged but harmless.

Hmm, but actually maybe items are strings? Then `error.message` would be undefined → label undefined. So objects are correct for rendering. The validator is buggy/legacy. I'll note that as an API uncertainty.

Now, one more important thing: the React wrapper's `attachProps` — props starting with "on" + uppercase letter get event treatment. `_on` starts with `_`, so it's set as `node["_on"] = value` — a direct property assignment. Good, that's how `_on` callbacks pass through.

But note: in `render()`, props are filtered: only string/boolean/number types pass through to createElement as dashed attributes; objects like `_on` and `_msg` are NOT passed to createElement — they're only applied via `attachProps` in `componentDidMount`/`componentDidUpdate`. Since `_on` is an object, `node["_on"] = newProps["_on"]` happens in attachProps. Good.

Important caveat: `attachProps` sets `node[name] = newProps[name]` for every prop each update, and for strings also sets attribute. Objects are assigned as JS properties — which Stencil picks up as prop changes. Good.

Another caveat: `_msg` object recreated each render → assignment triggers watcher. Fine.

Also careful: `name.indexOf("on") === 0 && name[2] === uppercase` — `_on` doesn't start with "on". Good.

Now `KolInputText` `_value` is string. `_touched` boolean. `_msg` object `{_description, _type, _alert}`.

Key a11y: msg only shows when `_touched === true`. The component itself sets `_touched = true` on blur internally. But if React passes `_touched` prop explicitly... if we pass `_touched={false}` initially and never update, the internal onBlur sets `this.component._touched = true` — wait, `this.component` is the Stencil component instance, setting `_touched` property. But if React re-renders and `attachProps` sets `node["_touched"] = false` again, it would reset. So better: don't pass `_touched` at all, OR pass it as controlled state we update on blur.

Hmm, but attachProps iterates `Object.keys(newProps)` — only props we actually pass. If we don't pass `_touched`, it's never touched by React. Then internal blur handling sets it true. That's the simplest.

But for submit-time validation before blur, we need `_touched = true` to show the msg. So we should control `_touched` ourselves: set to true on submit attempt. And track blur via `_on.onBlur`.

Actually simplest: keep our own `touched` state per field, set true on blur (via `_on.onBlur`) and on submit. Pass `_touched={touched}`. Since React passes it, on re-render it sets node property — consistent with our state. That works and is deterministic.

Wait — there's a subtlety: internal onBlur sets `component._touched = true` AND fires `_on.onBlur`. Our handler sets React state → true. Both agree. Fine.

Now the form: `KolForm` with `_on={{ onSubmit }}`. The button with `_type="submit"` calls `propagateSubmitEventToForm` which finds KOL-FORM ancestor and calls `kolForm._on.onSubmit(event)` in a setTimeout. Note: it does NOT call form.requestSubmit for KOL-FORM — it directly calls `_on.onSubmit`. Good.

Also native form submit (Enter key in input) → kol-form's internal `<form onSubmit>` → `event.preventDefault()` then `_on.onSubmit(event)`. Also `propagateSubmitEventToForm` from input Enter key → searchFormElement walks up... the input is inside kol-form's shadow DOM? Actually kol-form renders `<form>` in shadow with a slot; children of kol-form are slotted. The input's parent chain: kol-input-text → ... → light DOM children of kol-form. `searchFormElement` walks up parents until tagName === 'FORM' or 'KOL-FORM'. It would reach `KOL-FORM`. Then since tagName is KOL-FORM, it directly calls `_on.onSubmit`. Good — no double call since it doesn't dispatch native submit... wait, for KOL-FORM branch it does NOT call form.requestSubmit. It directly calls `kolForm._on.onSubmit(event)`. So single call. 

But careful: native Enter in input — inputs are slotted into `<form>`; pressing Enter in a text input inside a form triggers native form submission too. Then kol-form's internal form onSubmit fires → `_on.onSubmit`. Plus `propagateSubmitEventToForm` is called explicitly by kol-input-text on Enter → also calls `_on.onSubmit`. Potential double invocation!

Let's check kol-input-text line 161 context.

Let me check whether the input's Enter handler calls preventDefault.

Actually let me check. Also need `_errorList` selectors — the input host element needs an id for `document.querySelector(selector)`. Do inputs accept `_id`? Looking at KolInputText interface — no `_id` prop listed. Hmm, the id is generated internally. So error list selector can't target the input host by id... but we could set `id` attribute via React `id` prop? The wrapper passes non-"on" props as dashed attributes: `id` is a string → `acc["id"] = value`. So `<KolInputText id="username" />` sets attribute `id` on the host element. Then `document.querySelector('#username')` finds the host `<kol-input-text>`, and `targetElement.focus()` — does the host have focus()? Yes! `focus: (options?) => Promise<void>` is a method on KolInputText. 

But wait — in `attachProps`, for prop `id`, `node["id"] = "username"` — sets id property → attribute. Fine.

Hmm but does React's createElement pass `id` through? In render(), `id` is a string → `acc[camelToDashCase("id")] = "username"` → `id="username"` on the custom element. Good.

So error list with selector `#login-username` works and focuses the host which delegates focus.

Actually `handleLinkClick` does `document.querySelector(selector)` then `.focus(options)` where options defaults to `{behavior:'smooth', block:'nearest'}` — a ScrollIntoViewOptions passed to focus(). The component's `focus(options?: KolFocusOptions)`. Let's check KolFocusOptions.

Let's not over-engineer. Let me check KolFocusOptions quickly and the input Enter handler.

Let me also decide about `KolForm._requiredText` default true → shows "mandatory fields hint" text. We may set `_requiredText={false}` to hide.

Now let's check the Enter handler double-submit.

**Tool: shell**

**Input:**
```json
{
  "command": "sed -n '150,180p' node_modules/@public-ui/components/dist/esm/kol-input-text.entry.js; echo '=== KolFocusOptions ==='; grep -rn -A10 \"KolFocusOptions\" node_modules/@public-ui/components/dist/types/schema/interfaces/*.d.ts | head -20"
}
```

            this.counterUpdater.retriggerAria((_b = (_a = this._value) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0, this.state._maxLength, (_c = this.state._maxLengthBehavior) !== null && _c !== void 0 ? _c : 'hard');
        };
        this.onInput = (event) => {
            var _a, _b;
            this._value = (_b = (_a = this.ctaRef.el) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
            this.controller.onFacade.onInput(event);
        };
        this.onKeyDown = (event) => {
            var _a, _b, _c;
            this.controller.onFacade.onKeyDown(event);
            this.counterUpdater.handleKeyDown(event, (_b = (_a = this.ctaRef.el) === null || _a === void 0 ? void 0 : _a.value.length) !== null && _b !== void 0 ? _b : 0, this.state._maxLength, (_c = this.state._maxLengthBehavior) !== null && _c !== void 0 ? _c : 'hard');
            if (event.code === 'Enter' || event.code === 'NumpadEnter') {
                propagateSubmitEventToForm({
                    form: this.host});
            }
        };
        this.translateClearSearch = translate('kol-clear-search');
        this._autoComplete = 'off';
        this._hasCounter = false;
        this._maxLengthBehavior = 'hard';
        this._disabled = false;
        this._hideMsg = false;
        this._hideLabel = false;
        this._hint = '';
        this._readOnly = false;
        this._required = false;
        this._tooltipAlign = 'top';
        this._touched = false;
        this._type = 'text';
        this.state = {
            _hasValue: false,
=== KolFocusOptions ===
node_modules/@public-ui/components/dist/types/schema/interfaces/FocusableElement.d.ts:1:export type KolFocusOptions = {
node_modules/@public-ui/components/dist/types/schema/interfaces/FocusableElement.d.ts-2-    preventScroll?: true;
node_modules/@public-ui/components/dist/types/schema/interfaces/FocusableElement.d.ts-3-    focusVisible?: true;
node_modules/@public-ui/components/dist/types/schema/interfaces/FocusableElement.d.ts-4-} & ScrollIntoViewOptions & {
node_modules/@public-ui/components/dist/types/schema/interfaces/FocusableElement.d.ts-5-    afterFocus?: () => void;
node_modules/@public-ui/components/dist/types/schema/interfaces/FocusableElement.d.ts-6-};
node_modules/@public-ui/components/dist/types/schema/interfaces/FocusableElement.d.ts-7-export interface FocusableElement {
node_modules/@public-ui/components/dist/types/schema/interfaces/FocusableElement.d.ts:8:    focus(options?: KolFocusOptions): Promise<void>;
node_modules/@public-ui/components/dist/types/schema/interfaces/FocusableElement.d.ts-9-}


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn -B5 -A15 \"KolFocusOptions\" node_modules/@public-ui/components/dist/types/schema/interfaces/focus.d.ts 2>/dev/null || grep -rln \"KolFocusOptions\" node_modules/@public-ui/components/dist/types/"
}
```

node_modules/@public-ui/components/dist/types/internal/functional-components/skeleton/api.d.ts
node_modules/@public-ui/components/dist/types/utils/element-focus.d.ts
node_modules/@public-ui/components/dist/types/schema/props/error-list.d.ts
node_modules/@public-ui/components/dist/types/schema/interfaces/FocusableElement.d.ts
node_modules/@public-ui/components/dist/types/components/input-text/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/tabs/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/split-button/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/tree/component.d.ts
node_modules/@public-ui/components/dist/types/components/tree/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/form/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/input-range/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/_skeleton/web-components/click-button/component.d.ts
node_modules/@public-ui/components/dist/types/components/_skeleton/web-components/skeleton/component.d.ts
node_modules/@public-ui/components/dist/types/components/card/component.d.ts
node_modules/@public-ui/components/dist/types/components/card/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/skip-nav/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/input-number/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/single-select/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/input-email/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/popover-button/component.d.ts
node_modules/@public-ui/components/dist/types/components/popover-button/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/accordion/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/toolbar/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/details/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/combobox/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/button-link/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/textarea/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/button/component.d.ts
node_modules/@public-ui/components/dist/types/components/button/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/input-date/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/link/component.d.ts
node_modules/@public-ui/components/dist/types/components/link/wc.d.ts
node_modules/@public-ui/components/dist/types/components/input-color/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/input-password/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/select/component.d.ts
node_modules/@public-ui/components/dist/types/components/select/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/input-checkbox/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/tree-item/component.d.ts
node_modules/@public-ui/components/dist/types/components/tree-item/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/input-radio/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/link-button/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/input-file/shadow.d.ts
node_modules/@public-ui/components/dist/types/components/badge/shadow.d.ts
node_modules/@public-ui/components/dist/types/components.d.ts


---

## Assistant

_Thinking:_

I have a good picture now. Let me also check how `_on` object props are handled by the React wrapper — `attachProps` only handles props whose name starts with "on" followed by uppercase, or otherwise sets `node[name] = value` and for strings sets attribute. For `_on` object: `name.indexOf("on")` is false (starts with `_`), so it does `node["_on"] = value` — good, it sets the property directly. Objects won't be set as attributes (only strings).

Important caveat: `_msg` object prop also gets `node["_msg"] = value` — good.

But wait: in `render()`, `cProps` are filtered: only string/boolean/number values are passed to createElement (as dashed attributes), and events starting with "on"+uppercase. So `_on` and `_msg` objects are NOT passed to createElement — they're only applied via `attachProps` in `componentDidUpdate`/`componentDidMount`, which sets `node[name] = value` for all props in `this.props`. Let me re-check: `attachProps(this.componentEl, this.props, prevProps)` uses full `this.props`, so `_on` object gets assigned to node. Good.

Now about touched: `_touched` is set internally by component on blur (`this.component._touched = true`). But if React passes `_touched` prop, on each update attachProps sets `node._touched = props value`. So if we pass `_touched={false}` explicitly it would reset. We should avoid passing `_touched` unless we want to force it. Actually for validation on submit, we want to set `_touched=true` to show messages. The internal component sets `_touched=true` on blur. On submit (clicking button), blur happens first, so touched becomes true. But if user presses Enter... focus still in input, no blur. Hmm, then touched may be false and msg won't show.

So best: manage `touched` in React state and pass `_touched`. But careful: attachProps on every render sets node._touched. If we set state touched=true on submit, it will pass through. Also internal blur sets it true on element but React state stays false; if React re-renders with touched=false it would override back to false. So better to also set touched=true on blur via `_on.onBlur` callback. Actually `_on.onBlur` is available. Let's track it in React state.

Hmm, but there's a subtlety: `showMsg = isMsgDefinedAndInputTouched(msg, touched)` requires touched===true. And `hasError` for aria-invalid also requires touched===true.

Design: track `touched` per field in React state; set true on blur (via `_on.onBlur`) and on submit attempt. Pass `_touched` prop.

Also `_msg` = `{ _description: '...', _type: 'error' }` and `_alert` for role=alert? The msg is rendered as KolAlertFc with `alert: message?._alert ?? alert` where `alert = showAsAlert()` = `touched && !inputHasFocus`. So it auto-sets role=alert when touched and not focused. 

Now the `_alert` in msg — MsgPropType omits `_level`, `_on`, `_label`, `_hasCloser`, `_variant` from AlertProps, keeps `_alert` and `_type` and adds `_description`. So we can pass `_alert: true` to force role="alert". Actually if we set `_alert: true` it will always be alert... and KolAlertFc sets a 10s timeout calling onAlertTimeout → for FormFieldMsgFc, onAlertTimeout is not passed, so no timeout reset. Wait, FormFieldMsgFc doesn't pass onAlertTimeout, so it just stays. Fine.

Hmm, but actually `alert` prop default from showAsAlert() handles it: when touched && !focused → role=alert. That's good behavior — announced on blur. For submit-time announcement, we can rely on the form-level error list / alert.

Form-level: `KolForm` with `_errorList` array of `{message, selector}` and `_on.onSubmit`. The errorList renders a KolAlert type=error variant=card with nav+ul of links that focus `document.querySelector(selector)`. Note: the selector must find the input. Inputs are custom elements with shadow DOM; `document.querySelector('#username')` — we can set an `id` on the kol-input-text element itself? The React wrapper: `id` prop → not starting with "on", value string → `node["id"] = value` and `setAttribute("id", value)`. Wait `camelToDashCase("id")` = "id". So the host element gets `id="username"`. Then `document.querySelector('#username')` finds the host `<kol-input-text>`, and `.focus()` — host has focus() method. `handleLinkClick` does `targetElement.focus(options)`. Host's focus() accepts KolFocusOptions. Good — but `document.querySelector` on host element then focus() works.

Hmm, but does `id` get passed? In render(), `cProps` includes `id` (string) → `acc[camelToDashCase('id')] = 'id'`... wait `camelToDashCase("id")` = "id". So `createElement('kol-input-text', {id: 'username'})`. React sets attribute id. Good.

Actually wait — careful: does React set it as attribute or property? For custom elements React 19 sets attributes for unknown props... `id` is a known HTML attribute so it sets attribute. Fine.

Alternatively use selector like `kol-input-text[_name="username"]`? The `_name` prop: string → `node["_name"] = value` and `setAttribute(camelToDashCase("_name"), value)` = `setAttribute("_name", value)`. Hmm camelToDashCase("_name") = "_name" (no uppercase). So attribute `_name="username"`. Selector `[_name="username"]` would work. But `#id` is simpler and more standard.

However there's a catch: `validateId`? For input-text there's no `_id` prop in the component (KolInputText interface has no `_id`). The `id` attribute is a plain HTML attribute on the host — used by React. That's fine for querySelector.

But does setting `id` on the host conflict? The internal `_id` is generated separately for the inner input. Setting host id is harmless and standard.

Now, does `handleLinkClick` → `document.querySelector(selector)` → found host → `.focus(options)`. The host's `focus()` is the component method. `typeof targetElement.focus === 'function'` → true. options default `{behavior:'smooth', block:'nearest'}` — passed to KolFocusOptions which extends ScrollIntoViewOptions. Good.

Also `KolForm.focusErrorList()` to move focus to error summary after failed submit.

Now — important: `_errorList` prop is an array of objects. In React wrapper `render()`, objects are not passed as attributes (only string/boolean/number), but `attachProps` sets `node["_errorList"] = value`. Good.

Wait — actually there's a problem. In `attachProps`, the loop: `if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase())` → for `_on`, indexOf("on") is 1 (or -1?). "_on".indexOf("on") = 1. So condition `1 === 0` false. Good, goes to else: `node["_on"] = value`. 

Now for `_errorList` — validation function: `Array.isArray(value) && value.find(v => !(typeof v === 'string' || typeof v === 'function')) === undefined`. Wait, that requires EVERY item to be a string or function! But renderErrorList uses `error.message` and `error.selector`. So the validator expects strings/functions but renderer expects objects. That's a mismatch!

Let's read carefully: `value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined` means: find first item that is NOT (string or function) → if undefined, all items are strings or functions → valid.

So passing `[{message, selector}]` → item is object → not string/function → find returns it → !== undefined → validation FAILS → logWarn, state not set → `_errorList` in state never set... but render uses `this._errorList` directly (the raw prop), not state! `render() { const hasErrorList = Array.isArray(this._errorList) && this._errorList.length > 0; ... renderErrorList(this._errorList) }`. So it uses the raw prop. The validation only affects `state._errorList` which appears unused in render.

Let me verify: grep `state.errorList` in form shadow. Earlier grep for "state._errorList" returned nothing. So validation is irrelevant to rendering — it just logs a dev warning. Good, so objects work.

Hmm, but is `_errorList` a @Prop that triggers re-render on change? Yes, Stencil props re-render. And `render` reads `this._errorList`. Good.

So we can pass `[{message, selector: '#username'}]`.

Wait — but `watchValidator` failing means it logs devHint warning. Noise but functional. Actually hold on, let me reconsider: maybe the intended usage IS strings? `renderErrorList` maps `error.message` — for a string, `.message` is undefined → label undefined. And `error.selector` undefined. So strings wouldn't render properly. Objects are correct per the TS type `ErrorListPropType = {message, selector, options?}`. The validator is buggy/legacy. I'll note this as an API uncertainty.

Hmm, actually wait. Let me re-read the validator: `new Set(['string', 'function'])` is requiredGeneric. And validation fails for objects. So yes there's an inconsistency between the type definition and validator. But render uses objects. I'll pass objects (matching the TypeScript type) and note the dev warning possibility.

Actually, to be safe and avoid console warnings... no, objects are required for correct rendering. Proceed with objects.

Now let's think about whether we even need KolForm. Requirements: username, password, submit, validation feedback, accessible labels/error handling. 

Component structure proposal:
- `KolCard` as container with `_label="Anmelden"` and `_level` — actually KolCard `_label` is required.
- `KolHeading`? Card already has heading.
- `KolForm` — provides native `<form>` in shadow with slot, `noValidate`, submit/reset callbacks, error list summary.
- `KolInputText` for username: `_label="Benutzername"`, `_name`, `_required`, `_autoComplete="username"`, `_value`, `_on.onInput`, `_on.onBlur`, `_msg`, `_touched`.
- `KolInputPassword` for password: `_visibilityToggle` (show/hide password button, accessible), `_autoComplete="current-password"`.
- `KolButton` `_type="submit"` `_label="Anmelden"` `_variant`.
- Form-level `KolAlert` for overall status (success/error) with `_alert` for role=alert.
- `KolForm._errorList` for error summary with links to fields.

Wait: does `_type="submit"` on KolButton propagate to KolForm? `propagateSubmitEventToForm({form: this.host})` → searchFormElement walks up until FORM or KOL-FORM. Our button is inside `<kol-form>` light DOM children (slot). Walking up parents: kol-button → ... → kol-form (KOL-FORM tag) → returns it. Then since tagName is KOL-FORM, it calls `kolForm._on.onSubmit(event)` directly. 

Also Enter in input → same propagation. Good.

And native form submit: `<form>` is inside kol-form's shadow DOM; button inside form? The button is in light DOM slotted into the form. Clicking it — `propagateSubmitEventToForm` handles it. Also native: button with type=submit inside a slotted content... slotted elements ARE part of the form for form submission? Actually `form` attribute association: elements are associated with their nearest form ancestor in the tree; slotted content's DOM tree parent is `<kol-form>`, not `<form>`. So native association fails — that's why KoliBri does the manual propagation. Right.

So KolForm `_on.onSubmit` gets called. But note: KolForm's own `<form onSubmit>` also calls `_on.onSubmit` with preventDefault. Could that double-fire? `propagateSubmitEventToForm` for KOL-FORM path does NOT dispatch native submit; it directly calls `_on.onSubmit` in setTimeout. So single fire. Good.

For Enter key: same path. Good.

Hmm — but wait, for KOL-FORM, `setEventTarget(event, KoliBriDevHelper.querySelector('form', form))` and calls kolForm._on.onSubmit. Not native dispatch. Single fire.

Now: TypeScript types. The React components accept `JSX.KolInputText` etc. Let's check the exact props shape — `_on` typed as `InputTypeOnDefault`, `_msg` as `Stringified<MsgPropType>`. `Stringified<T>` = `T | string` probably.

Let me check how `_on.onChange` signature: `(event: Event, value: unknown) => void`. So we get value directly.

Actually there might be an issue: does `_on.onInput` get called with (event, value)? From `onInput(event, shouldSetFormAssociatedValue, value)` → `this.component._on.onInput(event, value)`. Yes.

Now, `_value` for inputs: controlled. Setting `_value` prop triggers `validateValue`. When user types, internal `this._value` updates. If we pass `_value` from React state, it re-renders and sets node._value. Should be fine.

Potential issue: React wrapper sets `node["_value"] = value` on every update — but only when props change... Actually `attachProps` is called on every componentDidMount/Update with ALL props. So it re-assigns `_value` each render. If user typed and our state is stale (e.g., onInput didn't fire), value could revert. We'll wire onInput properly.

Hmm, one concern: `onInput` fires; we setState; React re-renders; sets `_value` to the same value. Fine.

Let me now also double check `LabelWithExpertSlotPropType` — `_label` required (not optional). Good.

`_hideLabel` false default → visible label. KoliBri renders `<label for=id>` in shadow with slot — actually it's a custom element; label association: `KolFormFieldLabelFc` renders `Component = 'label'` with `htmlFor: id` where id = state._id (the inner input's id inside shadow DOM). Since both label and input are in same shadow root, `for`/`id` works. Good — accessible name guaranteed.

`aria-describedby` includes msg id and hint id. And `aria-invalid` when error+touch.

Now the FormFieldMsg: `id: createRelatedUniqueId(id, 'msg')` and getRenderStates pushes `createRelatedUniqueId(state._id, 'msg')` → consistent. Good.

Now let's also decide: `_hint` for helper text.

Validation messages: `_msg` requires `_description: string`. Type: `MsgPropType = Omit<AlertProps, '_level'|'_on'|'_label'|'_hasCloser'|'_variant'> & {_description: string}`. AlertProps includes `_alert?`, `_type?`. So `{_description: '...', _type: 'error'}`.

Hmm — AlertProps is `Generic.Element.Members<Required, Optional>` which likely makes all optional with underscore prefixes. So `_description` required.

Now: should messages show only after submit/blur? Yes — `showMsg` requires `touched === true`. We control touched.

Plan for state:
```ts
type FieldName = 'username' | 'password'
interface LoginState {
  username: string
  password: string
  touched: { username: boolean; password: boolean }
  errors: { username?: string; password?: string }
  status: { type: 'error'|'success'|null; message: string }
  submitted: boolean
}
```

On submit: validate; set errors; set touched all true; if invalid → focus error list (`formRef.current?.focusErrorList()`), status error. If valid → success status, clear errors.

Hmm, focusErrorList only useful if errorList rendered. We'll pass `_errorList` derived from errors. Focus after render — need a `useEffect` or `setTimeout`. The component's `focusErrorList` itself uses setTimeout 250ms internally. We can call it in an effect after errors set.

Actually simpler: in submit handler, call `formRef.current?.focusErrorList()` right away — it waits 250ms internally, by which time React has re-rendered with the error list. Reasonable. But if we only pass errorList when submitted... it's derived from errors state which updates synchronously in the same handler; React batches; re-render happens before the 250ms timer. Good.

Also, field-level focus? Optional.

Success: show KolAlert with `_alert` role=alert, `_type="success"`, message "Anmeldung erfolgreich". Also maybe disable... no.

Also need to clear field error when user edits → set errors[field] = undefined on input.

Reset: `_on.onReset` → clear everything.

Let's also consider `_requiredText` on KolForm — default true shows "mandatory fields" hint. That's fine/appropriate since both fields required. Actually the text is translated `kol-form-description`. Keep default (don't pass) or set to false? It's a helpful a11y hint. I'll keep default true. Hmm, but it's in German/English by locale. Fine.

Actually, does the theme require a locale registration? `register(DEFAULT, defineCustomElements)` — DEFAULT theme. Translation defaults to English probably. Fine.

Now `_visibilityToggle` on KolInputPassword: boolean, activates show password button with proper labels.

Let's double-check `KolInputPassword` has `_autoComplete`. Yes.

And `KolInputText` `_autoComplete` default 'off'. We'll set `username`.

Also `_spellCheck={false}` for username? optional.

Let me now check `VariantClassNamePropType` allowed values for button to pick `_variant`. It's `isValidArrayOrString` with safe class name regex — so basically any class-like string; theme defines variants like `primary`, `secondary`, `danger`, `ghost`, `normal`. Let's check theme-default for button variants.

Let me check quickly.

Also check KolAlert `_variant` = 'card' | 'msg'.

Let's check theme-default button variant classes.

I should also verify the CSS file App.css/index.css to keep styling consistent. Let's look at App.css and index.css.

Let me gather these last bits.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"buttonVariantDefault\\|--primary\\|primary\" node_modules/@public-ui/theme-default/dist/*.css 2>/dev/null | head -20; ls node_modules/@public-ui/theme-default/dist 2>/dev/null | head"
}
```

zsh:1: no matches found: node_modules/@public-ui/theme-default/dist/*.css
index.cjs
index.cjs.map
index.d.ts
index.mjs
index.mjs.map
variants


**Tool: shell**

**Input:**
```json
{
  "command": "cat src/App.css; echo '=== index.css ==='; cat src/index.css"
}
```

.counter {
  font-size: 16px;
  padding: 5px 10px;
  border-radius: 5px;
  color: var(--accent);
  background: var(--accent-bg);
  border: 2px solid transparent;
  transition: border-color 0.3s;
  margin-bottom: 24px;

  &:hover {
    border-color: var(--accent-border);
  }
  &:focus-visible {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
}

.hero {
  position: relative;

  .base,
  .framework,
  .vite {
    inset-inline: 0;
    margin: 0 auto;
  }

  .base {
    width: 170px;
    position: relative;
    z-index: 0;
  }

  .framework,
  .vite {
    position: absolute;
  }

  .framework {
    z-index: 1;
    top: 34px;
    height: 28px;
    transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
      scale(1.4);
  }

  .vite {
    z-index: 0;
    top: 107px;
    height: 26px;
    width: auto;
    transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
      scale(0.8);
  }
}

#center {
  display: flex;
  flex-direction: column;
  gap: 25px;
  place-content: center;
  place-items: center;
  flex-grow: 1;

  @media (max-width: 1024px) {
    padding: 32px 20px 24px;
    gap: 18px;
  }
}

#next-steps {
  display: flex;
  border-top: 1px solid var(--border);
  text-align: left;

  & > div {
    flex: 1 1 0;
    padding: 32px;
    @media (max-width: 1024px) {
      padding: 24px 20px;
    }
  }

  .icon {
    margin-bottom: 16px;
    width: 22px;
    height: 22px;
  }

  @media (max-width: 1024px) {
    flex-direction: column;
    text-align: center;
  }
}

#docs {
  border-right: 1px solid var(--border);

  @media (max-width: 1024px) {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}

#next-steps ul {
  list-style: none;
  padding: 0;
  display: flex;
  gap: 8px;
  margin: 32px 0 0;

  .logo {
    height: 18px;
  }

  a {
    color: var(--text-h);
    font-size: 16px;
    border-radius: 6px;
    background: var(--social-bg);
    display: flex;
    padding: 6px 12px;
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}
=== index.css ===
:root {
  --text: #6b6375;
  --text-h: #08060d;
  --bg: #fff;
  --border: #e5e4e7;
  --code-bg: #f4f3ec;
  --accent: #aa3bff;
  --accent-bg: rgba(170, 59, 255, 0.1);
  --accent-border: rgba(170, 59, 255, 0.5);
  --social-bg: rgba(244, 243, 236, 0.5);
  --shadow:
    rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px;

  --sans: system-ui, 'Segoe UI', Roboto, sans-serif;
  --heading: system-ui, 'Segoe UI', Roboto, sans-serif;
  --mono: ui-monospace, Consolas, monospace;

  font: 18px/145% var(--sans);
  letter-spacing: 0.18px;
  color-scheme: light dark;
  color: var(--text);
  background: var(--bg);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --text: #9ca3af;
    --text-h: #f3f4f6;
    --bg: #16171d;
    --border: #2e303a;
    --code-bg: #1f2028;
    --accent: #c084fc;
    --accent-bg: rgba(192, 132, 252, 0.15);
    --accent-border: rgba(192, 132, 252, 0.5);
    --social-bg: rgba(47, 48, 58, 0.5);
    --shadow:
      rgba(0, 0, 0, 0.4) 0 10px 15px -3px, rgba(0, 0, 0, 0.25) 0 4px 6px -2px;
  }

  #social .button-icon {
    filter: invert(1) brightness(2);
  }
}

#root {
  width: 1126px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  border-inline: 1px solid var(--border);
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

body {
  margin: 0;
}

h1,
h2 {
  font-family: var(--heading);
  font-weight: 500;
  color: var(--text-h);
}

h1 {
  font-size: 56px;
  letter-spacing: -1.68px;
  margin: 32px 0;
  @media (max-width: 1024px) {
    font-size: 36px;
    margin: 20px 0;
  }
}
h2 {
  font-size: 24px;
  line-height: 118%;
  letter-spacing: -0.24px;
  margin: 0 0 8px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
}
p {
  margin: 0;
}

code,
.counter {
  font-family: var(--mono);
  display: inline-flex;
  border-radius: 4px;
  color: var(--text-h);
}

code {
  font-size: 15px;
  line-height: 135%;
  padding: 4px 8px;
  background: var(--code-bg);
}


---

## Assistant

_Thinking:_

Let me check the theme-default variants for button variant names.

Let me also check how `_msg` needs `_touched` — important: `showMsg = isMsgDefinedAndInputTouched(msg, touched)` requires `touched === true`. The component sets `_touched = true` on blur internally. But if I pass `_touched` as a prop from React, it will override. Actually attachProps sets `node[name] = newProps[name]` for every prop on every update. If I don't pass `_touched`, it won't be set. The component internally sets `this.component._touched = true` on blur — but that's on `component` (the host element). Then Stencil watcher `validateTouched` runs. But React's attachProps only sets props that are in newProps. So if I don't pass `_touched`, internal blur setting works.

However, for submit-time validation, I need to force `_touched = true` to show messages. I can pass `_touched` from React state. But careful: once I pass `_touched={true}`, React will keep it true. And if I never pass it initially (undefined)... Actually if I pass `_touched={false}` initially, then attachProps sets node._touched = false. On blur the component sets it to true internally, but on next React re-render, attachProps would set it back to false (since prop value unchanged false? No — attachProps iterates all keys in newProps and sets node[name] = value unconditionally). So it would reset to false on every re-render. That's a conflict.

Best approach: fully control `_touched` from React state — set it true on submit attempt and on blur callbacks. That's deterministic.

Actually simpler: track `touched` in React state; set true on blur via `_on.onBlur` and on submit. Pass `_touched` always.

Hmm but `_on.onBlur` — the component's onBlur sets `this.component._touched = true` then calls `this.component._on.onBlur(event)`. So our handler fires after. We set state touched=true, React re-renders, attachProps sets _touched=true. Consistent.

But there's an ordering subtlety: onBlur sets internal `_touched = true` directly on host. Stencil watcher `validateTouched` on `_touched`? Setting `this.component._touched = true` where component is the host — that triggers the prop setter and watcher. Fine.

Then React re-render sets it to our state value. If our state is false at that moment (before onBlur handler setState flushes)... Actually our onBlur handler is called synchronously within the same onBlur, calling setState. React 18+ batches, then re-renders with touched=true. So OK.

But risk: if user blurs and our state update happens, fine. Let's just control it.

Now `_msg` — object `{_description: '...', _type: 'error'}`. Note attachProps: for object props, `node[name] = newProps[name]` (not a string so no setAttribute). `_msg` starts with `_`, not `on`, so goes to else branch: sets property. Good.

Wait — but there's a subtlety: `name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()`. `_on` starts with `_` so no. It goes to else: `node["_on"] = {...}`. Good, property assignment.

Important: In React wrapper's `render()`, props are filtered: only string/boolean/number are passed to createElement as dashed attributes; objects (`_on`, `_msg`) are dropped from render props but applied in `componentDidUpdate` via attachProps. Good.

Hmm, but wait: `_msg` object passed to `attachProps` — `node["_msg"] = value`. Stencil validates it. Good.

Also `_errorList` array on KolForm: object array → attachProps else-branch: `node["_errorList"] = array`, propType is 'object', no setAttribute. Good.

But careful — the error list validator: `Array.isArray(value) && value.find(v => !(typeof v === 'string' || typeof v === 'function')) === undefined`. This requires every item to be a **string or function**! But the render uses `error.message` and `error.selector`. So objects `{message, selector}` would FAIL validation (find returns the object, !== undefined → validation false → logWarn, state not set).

Hmm wait: `value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined` means "all items are string or function". So passing `[{message, selector}]` fails validation and `_errorList` state never updates → error list won't render!

That's a real bug/mismatch between the TS type (`ErrorListPropType[]` = `{message, selector, options}`) and runtime validator. Let me double check the CJS version... same. Hmm.

Actually wait — maybe validation failure with `value !== undefined` and `options.required !== true`: `else if (value === undefined && ...)` — value is array so not undefined. So goes to else: logWarn. State not set. So errorList won't render.

Hmm, but `render()` uses `this._errorList` directly, not `this.state._errorList`! Let's check: `const hasErrorList = Array.isArray(this._errorList) && this._errorList.length > 0;` and `renderErrorList(this._errorList)`. It reads `this._errorList` — the raw prop, not state. So the validator is irrelevant to rendering! Only warns in dev console.

So passing objects works at render time. The validator just logs a dev hint. Since Stencil re-renders when `@Prop` changes, `this._errorList` updates. 

But wait, does Stencil's `@Prop` on `_errorList` trigger re-render? Yes, props trigger re-render by default (unless mutable/no-rerender). Let me verify it's a normal @Prop. From collection/shadow.js there's `"propName": "_errorList"` in members. Should re-render.

Hmm, but there's a caveat: the React wrapper sets `node["_errorList"] = newArray`. Stencil detects change → re-render. Good.

Actually hold on, there's a risk: does `_errorList` get `reflect`? Not important.

OK. Also note: `validateErrorList` will log a dev warning. I should mention this as an API uncertainty. Alternatively I can avoid `_errorList` entirely and render my own error summary. But `_errorList` provides the accessible error summary with links that focus fields — good a11y. Given render uses raw prop, it works. But the dev warning is noise.

Hmm, let me reconsider: maybe better to check if items can be strings... `error.message` on a string is undefined → `_label: undefined` → invalid label. So strings don't render properly either. So objects are correct for rendering.

So: `_errorList` with objects works for rendering but triggers a dev console warning due to a validator bug. I'll note that.

Actually — let me reconsider whether to use `_errorList` at all. Requirement: "Validation feedback" and "error handling". A form-level error summary is a WCAG best practice (3.3.1). I'll use it, and note the validator discrepancy. Let me verify empirically by running the dev server? That'd require a browser. Too heavy. I'll note it as uncertainty with fallback.

Hmm, actually I could test with a quick node script using jsdom? Not available. Let's not.

Wait — actually, is there a risk the validator sets state to something? No.

Let me reconsider once more: `logWarn` only called if validation fails. `devHint` caches per msg. Fine.

Now, `_errorList` selectors: `handleLinkClick` does `document.querySelector(selector)`. Inputs are custom elements with shadow DOM; the internal `<input>` has `id: state._id` generated internally. `document.querySelector('#someid')` — the host element `<kol-input-text>` — can we set an id on the host? The React wrapper: prop `id` → `node["id"] = value` and `setAttribute("id", value)`. But wait, in `render()`, `id` is a string → `acc[camelToDashCase("id")] = "id"` → passes `id` to createElement. React sets attribute `id` on the custom element host. Then `document.querySelector('#login-username')` finds the host `<kol-input-text id="login-username">`, and `targetElement.focus()` — the host has a `focus()` method! `KolInputText` exposes `focus`. And `typeof targetElement.focus === 'function'` → true → calls `.focus(options)`. 

But wait: does `id` prop on KolInputText conflict? There's no `_id` prop on inputs (unlike button-wc). So `id` is just a plain HTML attribute on the host. React will set it. Good.

Hmm, but does `handleLinkClick` pass `options` = `{behavior:'smooth', block:'nearest'}` fallback — `targetElement.focus(options)`. KolInputText.focus(options?: KolFocusOptions) accepts ScrollIntoViewOptions. Fine.

Actually careful: `document.querySelector` with selector `#login-username`. Good.

Alternatively use selector `#login-username` — but does the host's `focus()` focus the internal input? `delegateFocus` was imported in kol-input-text — likely `shadowRoot.delegatesFocus = true`. Plus the component's `focus()` method explicitly focuses internal element. Good.

Now — a big question: does setting `id` attribute on host work? React 19 sets attributes for custom elements. `id` is a known DOM property, React sets it as attribute. attachProps also does `node["id"] = "login-username"`. Fine.

Hmm, one catch: in `attachProps`, for name `id`: not `on*`, so `node["id"] = value`, and since typeof string → `setAttribute(camelToDashCase("id"), value)` → `setAttribute("id", ...)`. camelToDashCase("id") = "id". Good.

Now — inputs `_name`: `camelToDashCase("_name")` = "_name" (no uppercase) → `setAttribute("_name", "username")` and `node["_name"] = "username"`. Stencil prop `_name` maps to attribute `_name`. Good.

Wait, actually for `_autoComplete`: camelToDashCase("_autoComplete") = "_auto-complete". Stencil attribute for `_autoComplete` is `_auto-complete` (from loader: `"_autoComplete":[1,"_auto-complete"]`). 

Now let's design the component structure.

Structure:
- `KolCard` with `_label="Anmelden"` ... actually maybe use `KolHeading` + `KolForm`.
- `KolForm` `_on={{ onSubmit }}` `_errorList={errors}` `_requiredText={false}` 
- Inside: `KolInputText` (username), `KolInputPassword` (password), `KolButton` `_type="submit"`.

Wait — is `KolButton _type="submit"` inside KolForm handled? Button's onClick → `propagateSubmitEventToForm({form: this.host})` → searchFormElement walks up from the button host. The button is a child (light DOM) of `<kol-form>`. `searchFormElement` walks `parentElement` until tagName === 'FORM' or 'KOL-FORM'. Button host → parent `<kol-form>` → tagName KOL-FORM → found. Then since tagName is KOL-FORM, it calls `kolForm._on.onSubmit(event)` in a setTimeout. 

Also `KolForm` renders a real `<form>` in shadow with slot — children are slotted, so a native `<button type=submit>` inside... actually KolButton renders `<button type="submit">` inside its own shadow DOM, but the button host is slotted into kol-form's shadow `<form>`. Native form submission: a `<button type="submit">` inside shadow DOM of an element slotted into a form — form association is via the composed tree? Form ownership uses the node tree, not composed tree. Hmm, actually form association: an element is associated with the form if its form owner is that form. For slotted content, the form owner is determined by the tree — the button host's ancestors in light DOM are `<kol-form>`, not `<form>`. So native submit wouldn't work. That's exactly why KoliBri has `propagateSubmitEventToForm`. Good — it directly calls `kolForm._on.onSubmit`.

Also Enter key in input → `propagateSubmitEventToForm` → same path.

So `_on.onSubmit` fires. Note it's `event.preventDefault()`'d inside KolForm's native form handler, but in the KOL-FORM branch of propagate, it directly calls `kolForm._on.onSubmit(event)` where event is a `SubmitEvent` created manually. Fine — our handler doesn't need default prevented.

Hmm, but there's a double-fire risk: KolForm's shadow `<form>` has `onSubmit` handler. Does clicking submit button also trigger native form submit? The `<button type="submit">` is inside kol-button's shadow root. Native form submission for buttons in shadow DOM: the button is associated with the form via form owner. Form owner for an element in shadow DOM: the form is found by climbing the *flattened* tree? Actually the spec's "form owner" uses the element's node tree ancestors AND shadow-including... Let me recall: `form` attribute / form owner algorithm: "retarget the form-associated element's root... if the element is in a shadow tree, its form owner is determined by climbing shadow-including ancestors." Yes — HTML spec: form owner determination climbs the shadow-including parent chain. So a button in a shadow tree whose host is slotted into `<form>` → form owner is that form. So native submit might fire too!

Hmm. If that's the case, both propagate AND native submit would call `_on.onSubmit` → double invocation.

Wait, but kol-form's `<form>` has `onSubmit={this.onSubmit}` which calls `event.preventDefault()` and then `_on.onSubmit(event)`. And propagate in KOL-FORM branch does NOT dispatch native submit; it directly calls `_on.onSubmit`. So if native submit also happens → two calls.

Actually — does the native path happen? `propagateSubmitEventToForm` is called in button's onClick. It calls, in KOL-FORM branch, `setTimeout(() => kolForm._on.onSubmit(event))`. It does NOT preventDefault or stopPropagation of the click. The native `<button type="submit">` click would trigger form submission natively too... unless preventDefault happened.

Hmm, but note: in the FORM branch, propagate calls `form.requestSubmit()`. In KOL-FORM branch it directly invokes the callback. This suggests KoliBri authors know native submit doesn't reach their `<form>`... or they handle it separately.

Hmm, actually wait. The button host `<kol-button>` is a child of `<kol-form>` in light DOM. `<kol-form>`'s shadow contains `<form>` with `<slot/>`. So the button host is slotted into the form. The button element inside kol-button's shadow root: its shadow-including ancestor chain is: button → kol-button shadow root → kol-button (host) → kol-form → ... So form owner = the `<form>`? The algorithm for form owner: "If element has an ancestor form element, then return that form's form owner" — but does it consider shadow-including ancestors? 

Per HTML spec, form-associated elements' form owner: step: "If element's form owner filter is not null..." Actually the relevant algorithm (`form owner`): climb "parent" chain — and for elements in shadow trees, `parentNode` of the host... The spec says form association uses the *flat tree*? No.

Let me just check: Known behavior — a `<input>` inside a shadow DOM whose host is inside a `<form>` is NOT associated with that form (this is a well-known limitation; that's why `form="id"` attribute exists, and it doesn't work across shadow either... actually `form=id` does work by id lookup in the document, and per spec form attribute looks up in the node document).

Actually, MDN: "The form attribute... must be in the same document". And known issue: form controls in shadow DOM don't submit with the outer form.

Hmm, but actually the HTML spec's form owner algorithm does use shadow-including ancestors? Let me recall the "form owner" definition: 

> A form-associated element can have a form owner, which is either null or a form element. The form owner of a form-associated element is determined as follows: ... If element is a form-associated element and attribute form is set: ... return the result of running find an element given element's node document, element's form content attribute, and... Otherwise, return the result of running element's nearest ancestor form element...

"nearest ancestor form element" = tree ancestor (not shadow-including). So shadow DOM elements are NOT associated. 

And the `<slot>` doesn't change tree ancestry. So the button inside kol-button's shadow root has no nearest ancestor form. → no native submit.

But the kol-button HOST element itself is slotted into `<form>` — hosts aren't form-associated anyway.

So: no native submit. Only propagate → `_on.onSubmit` called once. 

Now — does clicking a `<button type="submit">` in shadow DOM cause anything else? No.

Hmm, but wait: `propagateSubmitEventToForm` in KOL-FORM branch also does `setEventTarget(event, ...querySelector('form', form))`. Fine.

Also Enter key in input → same. Good, so Enter submits.

But careful: our React `_on.onSubmit` — will it be re-attached on re-render? attachProps sets `node["_on"] = newProps["_on"]` each update. Since we create a new object each render, it updates. Fine. But note: attachProps runs on every componentDidUpdate — including when props didn't change? It runs `this.componentDidUpdate(this.props)` always. Sets `node._on = {...}` fresh object each time → Stencil validateOn → setState. Fine.

Hmm — potential issue: does setting `_on` to a new object cause Stencil re-render loops? It's just state update. Should be fine.

Now, is `_on.onSubmit` typed `EventCallback<Event>`? `KoliBriFormCallbacks = { onSubmit?: EventCallback<Event>, onReset?: ... }`. Good.

Now validation feedback design:

State:
```ts
type Field = 'username' | 'password'
const [values, setValues] = useState({username:'', password:''})
const [errors, setErrors] = useState<{username?:string; password?:string}>({})
const [touched, setTouched] = useState({username:false, password:false})
const [submitted, setSubmitted] = useState(false)
const [status, setStatus] = useState<null | {type:'success'|'error', text:string}>(null)
```

Validation function:
- username: required, min length 3
- password: required, min length 8

On submit:
- compute errors
- setTouched both true
- setSubmitted true
- if errors → setStatus error, build `_errorList` array with `{message, selector}`
- else → setStatus success

Focus management: after failed submit, focus first invalid field or the error list. `KolForm.focusErrorList()` exists — use ref to KolForm and call `.focusErrorList()` when errors present. That focuses the first error link (with 250ms delay inside). 

Actually `focusErrorList` → `scrollToErrorList` → setTimeout 250ms → focus first link's `a`. But if errorList is empty (no errors) there's nothing. So call only when there are errors.

Hmm but `_errorList` only has entries for fields with errors. Good.

Alternatively focus the first invalid input directly. I'll do both: focus error list (summary) — that's the WCAG-recommended pattern.

Hmm, but careful: the errorList's links are `<a>` with `_href=""`... `KolLinkWcTag` with `_href: ""`. And `handleLinkClick` → `document.querySelector(selector)`.

Wait: clicking the link — `_on.onClick` → `handleLinkClick(selector)`. And KolLink with `_href=""` would navigate to ""? Let's check: KoliBri link with `_href=""`... it calls onClick and probably preventDefault. KoliBri's own form error list uses this, so it must work (they preventDefault on click when _on.onClick given? ). Let's check kol-link-wc onClick.

Let me verify quickly.

Also: for the status alert, use `KolAlert` with `_alert` (role=alert) `_type` success/error. Note: `_alert` true sets role="alert" and after 10s `onAlertTimeout` sets `_alert=false`. Since KolAlert (wrapper) renders KolAlertWc... Actually `KolAlert` wrapper (`kol-alert.entry.js`) renders `KolAlertWcTag` with `_alert` etc. The Wc's `handleAlertTimeout` → `validateAlert(false)` → sets state `_alert=false` → role removed after 10s. That's fine (standard pattern: role=alert present when content inserted).

Important a11y detail: for screen readers to announce, the alert should be newly inserted or role=alert present. Since we conditionally render the KolAlert when status changes, and set `_alert` true, it should announce.

Hmm, one caveat: if we render `<KolAlert _alert={true} _type="success">text</KolAlert>` — the wrapper passes `_alert` to the wc; wc renders KolAlertFc with `alert: _alert` → `role="alert"` and sets a 10s timeout to clear. When content updates (new message), if the element persists with role=alert, changes to content are announced. To be safe, use a `key` to force remount per message.

Now — where to place status alert? Inside the form above the fields, or above the form. Put it inside the card, before the form (or after error list). Actually KolForm renders errorList above the `<form>` in shadow. If we put status alert inside slot, it appears below the error list. Fine.

Let's also add `KolHeading` maybe. Use `KolCard _label="Anmelden"` for structure.

Hmm, does `KolCard` need `_level`? default 0 = bold text. `_label` required. Let's use `_level={1}`? Card heading level... The page has `<h1>`. So card heading should be h2 → `_level={2}`.

Now — username field: `KolInputText` with `_label="Benutzername"`, `_name="username"`, `_required`, `_autoComplete="username"`, `_value`, `_on={{onInput, onBlur}}`, `_msg`, `_touched`.

Wait: `_on.onInput` signature `(event, value) => void`. Actually `EventValueOrEventCallback<Event, unknown>` — `(event: Event, value: unknown) => void`. So handler gets (event, value). We can use `String(value)`.

Hmm, but does the wrapper's `_on` object need `_type`? No.

Also: is `_value` controlled OK? Setting `_value` prop from React each render. The component's `onInput` handler sets `this._value = ctaRef.el.value` (internal prop) then calls controller.onFacade.onInput. Our handler updates React state → re-render → sets `_value` again to same value. Fine.

Potential issue: Stencil `validateValue` on `_value` — if same value, no re-render churn.

Let's use `_type="text"` default for username; for autocomplete maybe `_type="email"`? Username could be email. Keep text + autoComplete="username".

Password: `KolInputPassword` with `_visibilityToggle` (show/hide password button), `_autoComplete="current-password"`.

Submit: `KolButton _type="submit" _label="Anmelden" _variant="primary"`? Let's check allowed variants. `validateVariantClassName` accepts any safe class-name-ish string, theme provides variants. Let's check theme-default variants dir.

Let's check `node_modules/@public-ui/theme-default/dist/variants`.

Also need to confirm `_requiredText` default true shows "mandatory fields" hint — that's fine, or set `_requiredText={false}`? It shows a hint about required fields which is good. Default true. Keep it.

Hmm — actually `_requiredText` default true renders `<p>` with `kol-form-description` translation. Good a11y. Keep.

Now: `hideMsg`? Not needed.

Validation timing: Since `showMsg = msg && touched === true`, error message only shows when touched. On submit we set touched=true for all → messages appear. Good.

But also `hasError` for aria-invalid requires `_type === 'error'` && touched. Good.

Note: `getMsgType` returns `msg._type ?? 'error'`. We set `_type: 'error'`.

Msg object: `{ _description: '...', _type: 'error' }`. Type `MsgPropType = Omit<AlertProps, '_level'|'_on'|'_label'|'_hasCloser'|'_variant'> & {_description: string}`. AlertProps includes `_alert`, `_type`, etc. So `_description` required, `_type` optional. Good.

Hmm — `_alert` in msg: `FormFieldMsgFc` uses `message._alert ?? alert` where `alert` comes from `showAsAlert()` = touched && !inputHasFocus. So role=alert applied when touched and not focused. That's automatic — nice. If I set `_alert: true` in msg it'd always be alert. Better leave `_alert` unset and let `showAsAlert()` handle it. On blur → touched true, not focused → role=alert → announced. 

On submit while focus is on the submit button → input not focused → alert true → announced. 

Now: clearing errors — when user edits a field, clear its error. Also when field is corrected.

Let's also handle: after successful submit, reset password field, show success alert, clear errors.

Now let's also think about `_errorList` type: `ErrorListPropType[] = {message: string, selector: string | EventCallback, options?}`.

Let me now check KolLink click preventDefault with empty href.

And theme variants.

Let me run those checks.

Also — one more: does `KolForm` render `_errorList` only when `hasErrorList`? Yes. So when no errors, pass `[]` or undefined.

Also note `focusErrorList` needs the form ref. React wrapper supports `forwardRef` → returns host element `HTMLKolFormElement` with `focusErrorList()` method. Type: `RefAttributes<HTMLKolFormElement>`. We can `useRef<HTMLKolFormElement>(null)`.

Hmm — does `createForwardRef` pass ref correctly? `React.createElement(ReactComponent, {...props, forwardedRef: ref})` and the class merges `forwardedRef` with `setComponentElRef`. And `render()` destructures `forwardedRef` out of props and passes `ref: mergeRefs(forwardedRef, this.setComponentElRef)` to createElement. So ref → host element. 

But TypeScript: `KolForm` type is `ForwardRefExoticComponent<JSX.KolForm & Omit<React.HTMLAttributes<HTMLKolFormElement>,"style"> & StyleReactProps & RefAttributes<HTMLKolFormElement>>`. So `useRef<HTMLKolFormElement>(null)` works.

Hmm, `HTMLKolFormElement` is exported from `@public-ui/components`. Need to import type. Actually we can just use `React.ElementRef<typeof KolForm>` or import `HTMLKolFormElement` from '@public-ui/components'. Let's check it's exported.

Let's check the components index.d.ts exports.

Also for input refs to focus first invalid field: `HTMLKolInputTextElement`.

Let me check exports.

Let me run a few more checks then write the code.

Actually also worth checking: does `JSX.KolInputText` include `_on`? Yes `_on?: InputTypeOnDefault`.

One thing: `InputTypeOnDefault` includes `onInput?: EventValueOrEventCallback<Event, unknown>`.

TypeScript: `(event: Event, value: unknown) => void` is assignable to that union? The union is `((e,v)=>void) | ((e)=>void)`. Our2-arg function matches the first. Good.

Now let's check exports and theme variants.

**Tool: shell**

**Input:**
```json
{
  "command": "ls node_modules/@public-ui/theme-default/dist/variants; echo '=== index.d.ts ==='; cat node_modules/@public-ui/theme-default/dist/index.d.ts"
}
```

button.d.ts
index.d.ts
=== index.d.ts ===
export declare const DEFAULT: (patch: (name: string, map: {
    GLOBAL?: string | undefined;
    PROPERTIES?: string | undefined;
    "KOL-SYMBOL"?: string | undefined;
    "KOL-PAGINATION"?: string | undefined;
    "KOL-ABBR"?: string | undefined;
    "KOL-BUTTON"?: string | undefined;
    "KOL-DETAILS"?: string | undefined;
    "KOL-DIALOG"?: string | undefined;
    "KOL-FORM"?: string | undefined;
    "KOL-LINK"?: string | undefined;
    "KOL-METER"?: string | undefined;
    "KOL-NAV"?: string | undefined;
    "KOL-PROGRESS"?: string | undefined;
    "KOL-SELECT"?: string | undefined;
    "KOL-TABLE"?: string | undefined;
    "KOL-TEXTAREA"?: string | undefined;
    "KOL-IMAGE"?: string | undefined;
    "KOL-ICON"?: string | undefined;
    "KOL-ALERT"?: string | undefined;
    "KOL-CARD"?: string | undefined;
    "KOL-ACCORDION"?: string | undefined;
    "KOL-AVATAR"?: string | undefined;
    "KOL-BADGE"?: string | undefined;
    "KOL-BREADCRUMB"?: string | undefined;
    "KOL-BUTTON-LINK"?: string | undefined;
    "KOL-COMBOBOX"?: string | undefined;
    "KOL-DRAWER"?: string | undefined;
    "KOL-HEADING"?: string | undefined;
    "KOL-INPUT-CHECKBOX"?: string | undefined;
    "KOL-INPUT-COLOR"?: string | undefined;
    "KOL-INPUT-DATE"?: string | undefined;
    "KOL-INPUT-EMAIL"?: string | undefined;
    "KOL-INPUT-FILE"?: string | undefined;
    "KOL-INPUT-NUMBER"?: string | undefined;
    "KOL-INPUT-PASSWORD"?: string | undefined;
    "KOL-INPUT-RADIO"?: string | undefined;
    "KOL-INPUT-RANGE"?: string | undefined;
    "KOL-INPUT-TEXT"?: string | undefined;
    "KOL-KOLIBRI"?: string | undefined;
    "KOL-LINK-BUTTON"?: string | undefined;
    "KOL-LOGO"?: string | undefined;
    "KOL-MODAL"?: string | undefined;
    "KOL-POPOVER-BUTTON"?: string | undefined;
    "KOL-QUOTE"?: string | undefined;
    "KOL-SINGLE-SELECT"?: string | undefined;
    "KOL-SKIP-NAV"?: string | undefined;
    "KOL-SPIN"?: string | undefined;
    "KOL-SPLIT-BUTTON"?: string | undefined;
    "KOL-TABLE-STATEFUL"?: string | undefined;
    "KOL-TABLE-STATELESS"?: string | undefined;
    "KOL-TABS"?: string | undefined;
    "KOL-TOAST-CONTAINER"?: string | undefined;
    "KOL-TOOLBAR"?: string | undefined;
    "KOL-TOOLTIP"?: string | undefined;
    "KOL-TREE"?: string | undefined;
    "KOL-TREE-ITEM"?: string | undefined;
}, options?: {
    append?: boolean;
}, features?: import("adopted-style-sheets").FeatureFlags) => string) => string;
export * from './variants';


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"HTMLKolFormElement\\|HTMLKolInputTextElement\\|HTMLKolInputPasswordElement\" node_modules/@public-ui/components/dist/types/index.d.ts | head; echo '---'; head -30 node_modules/@public-ui/components/dist/types/index.d.ts; echo '=== link click ==='; grep -rn -A15 \"this.onClick = \\|onClick = (event)\" node_modules/@public-ui/components/dist/esm/kol-link-wc.entry.js | head -30"
}
```

---
export { getDefaultThemeName } from 'adopted-style-sheets';
export * from './components.d';
export { setCurrentLocation } from './components/link/ariaCurrentService';
export { ToasterService } from './components/toaster/toaster';
export { bootstrap, isInitialized, register } from './core/bootstrap';
export * from './enums/bund';
export * from './kolibri';
export { KoliBri, KoliBriDevHelper } from './schema';
export type { ClickableElement, EventValueOrEventCallback, FocusableElement, KoliBriTableCell, KoliBriTableHeaderCell, KoliBriTableHeaderCellWithLogic, KoliBriTableSelection, Optgroup, Option, RadioOption, SelectOption, Toast, ToasterOptions, W3CInputValue, } from './schema';
export { BEM } from './schema/bem-registry';
export { KolEvent } from './utils/events';
export { isTooltipOpen } from './utils/tooltip-open-tracking';
=== link click ===


---

## Assistant

_Thinking:_

Let me check the button variants from the theme.

Also check `_variant` for button — theme-default/dist/variants/button.d.ts.

**Tool: shell**

**Input:**
```json
{
  "command": "cat node_modules/@public-ui/theme-default/dist/variants/button.d.ts; echo '=== variants index ==='; cat node_modules/@public-ui/theme-default/dist/variants/index.d.ts"
}
```

export declare enum ButtonVariantsEnum {
    Primary = "primary",
    Secondary = "secondary",
    Tertiary = "tertiary",
    Danger = "danger",
    Ghost = "ghost",
    Normal = "normal"
}
=== variants index ===
export * from './button';


**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn \"buttonVariantDefault\\|primary\\|secondary\\|danger\\|ghost\" node_modules/@public-ui/theme-default/dist/index.mjs | head -20"
}
```

content: \"\\f41e\";\n  }\n  .fa-schlix:before {\n    content: \"\\f3ea\";\n  }\n  .fa-screenpal:before {\n    content: \"\\e570\";\n  }\n  .fa-scribd:before {\n    content: \"\\f28a\";\n  }\n  .fa-searchengin:before {\n    content: \"\\f3eb\";\n  }\n  .fa-sellcast:before {\n    content: \"\\f2da\";\n  }\n  .fa-sellsy:before {\n    content: \"\\f213\";\n  }\n  .fa-servicestack:before {\n    content: \"\\f3ec\";\n  }\n  .fa-shirtsinbulk:before {\n    content: \"\\f214\";\n  }\n  .fa-shopify:before {\n    content: \"\\e057\";\n  }\n  .fa-shopware:before {\n    content: \"\\f5b5\";\n  }\n  .fa-simplybuilt:before {\n    content: \"\\f215\";\n  }\n  .fa-sistrix:before {\n    content: \"\\f3ee\";\n  }\n  .fa-sith:before {\n    content: \"\\f512\";\n  }\n  .fa-sitrox:before {\n    content: \"\\e44a\";\n  }\n  .fa-sketch:before {\n    content: \"\\f7c6\";\n  }\n  .fa-skyatlas:before {\n    content: \"\\f216\";\n  }\n  .fa-skype:before {\n    content: \"\\f17e\";\n  }\n  .fa-slack:before {\n    content: \"\\f198\";\n  }\n  .fa-slack-hash:before {\n    content: \"\\f198\";\n  }\n  .fa-slideshare:before {\n    content: \"\\f1e7\";\n  }\n  .fa-snapchat:before {\n    content: \"\\f2ab\";\n  }\n  .fa-snapchat-ghost:before {\n    content: \"\\f2ab\";\n  }\n  .fa-snapchat-square:before {\n    content: \"\\f2ad\";\n  }\n  .fa-soundcloud:before {\n    content: \"\\f1be\";\n  }\n  .fa-sourcetree:before {\n    content: \"\\f7d3\";\n  }\n  .fa-speakap:before {\n    content: \"\\f3f3\";\n  }\n  .fa-speaker-deck:before {\n    content: \"\\f83c\";\n  }\n  .fa-spotify:before {\n    content: \"\\f1bc\";\n  }\n  .fa-square-font-awesome:before {\n    content: \"\\f425\";\n  }\n  .fa-square-font-awesome-stroke:before {\n    content: \"\\f35c\";\n  }\n  .fa-font-awesome-alt:before {\n    content: \"\\f35c\";\n  }\n  .fa-squarespace:before {\n    content: \"\\f5be\";\n  }\n  .fa-stack-exchange:before {\n    content: \"\\f18d\";\n  }\n  .fa-stack-overflow:before {\n    content: \"\\f16c\";\n  }\n  .fa-stackpath:before {\n    content: \"\\f842\";\n  }\n  .fa-staylinked:before {\n    content: \"\\f3f5\";\n  }\n  .fa-steam:before {\n    content: \"\\f1b6\";\n  }\n  .fa-steam-square:before {\n    content: \"\\f1b7\";\n  }\n  .fa-steam-symbol:before {\n    content: \"\\f3f6\";\n  }\n  .fa-sticker-mule:before {\n    content: \"\\f3f7\";\n  }\n  .fa-strava:before {\n    content: \"\\f428\";\n  }\n  .fa-stripe:before {\n    content: \"\\f429\";\n  }\n  .fa-stripe-s:before {\n    content: \"\\f42a\";\n  }\n  .fa-studiovinari:before {\n    content: \"\\f3f8\";\n  }\n  .fa-stumbleupon:before {\n    content: \"\\f1a4\";\n  }\n  .fa-stumbleupon-circle:before {\n    content: \"\\f1a3\";\n  }\n  .fa-superpowers:before {\n    content: \"\\f2dd\";\n  }\n  .fa-supple:before {\n    content: \"\\f3f9\";\n  }\n  .fa-suse:before {\n    content: \"\\f7d6\";\n  }\n  .fa-swift:before {\n    content: \"\\f8e1\";\n  }\n  .fa-symfony:before {\n    content: \"\\f83d\";\n  }\n  .fa-teamspeak:before {\n    content: \"\\f4f9\";\n  }\n  .fa-telegram:before {\n    content: \"\\f2c6\";\n  }\n  .fa-telegram-plane:before {\n    content: \"\\f2c6\";\n  }\n  .fa-tencent-weibo:before {\n    content: \"\\f1d5\";\n  }\n  .fa-the-red-yeti:before {\n    content: \"\\f69d\";\n  }\n  .fa-themeco:before {\n    content: \"\\f5c6\";\n  }\n  .fa-themeisle:before {\n    content: \"\\f2b2\";\n  }\n  .fa-think-peaks:before {\n    content: \"\\f731\";\n  }\n  .fa-tiktok:before {\n    content: \"\\e07b\";\n  }\n  .fa-trade-federation:before {\n    content: \"\\f513\";\n  }\n  .fa-trello:before {\n    content: \"\\f181\";\n  }\n  .fa-tumblr:before {\n    content: \"\\f173\";\n  }\n  .fa-tumblr-square:before {\n    content: \"\\f174\";\n  }\n  .fa-twitch:before {\n    content: \"\\f1e8\";\n  }\n  .fa-twitter:before {\n    content: \"\\f099\";\n  }\n  .fa-twitter-square:before {\n    content: \"\\f081\";\n  }\n  .fa-typo3:before {\n    content: \"\\f42b\";\n  }\n  .fa-uber:before {\n    content: \"\\f402\";\n  }\n  .fa-ubuntu:before {\n    content: \"\\f7df\";\n  }\n  .fa-uikit:before {\n    content: \"\\f403\";\n  }\n  .fa-umbraco:before {\n    content: \"\\f8e8\";\n  }\n  .fa-uncharted:before {\n    content: \"\\e084\";\n  }\n  .fa-uniregistry:before {\n    content: \"\\f404\";\n  }\n  .fa-unity:before {\n    content: \"\\e049\";\n  }\n  .fa-unsplash:before {\n    content: \"\\e07c\";\n  }\n  .fa-untappd:before {\n    content: \"\\f405\";\n  }\n  .fa-ups:before {\n    content: \"\\f7e0\";\n  }\n  .fa-usb:before {\n    content: \"\\f287\";\n  }\n  .fa-usps:before {\n    content: \"\\f7e1\";\n  }\n  .fa-ussunnah:before {\n    content: \"\\f407\";\n  }\n  .fa-vaadin:before {\n    content: \"\\f408\";\n  }\n  .fa-viacoin:before {\n    content: \"\\f237\";\n  }\n  .fa-viadeo:before {\n    content: \"\\f2a9\";\n  }\n  .fa-viadeo-square:before {\n    content: \"\\f2aa\";\n  }\n  .fa-viber:before {\n    content: \"\\f409\";\n  }\n  .fa-vimeo:before {\n    content: \"\\f40a\";\n  }\n  .fa-vimeo-square:before {\n    content: \"\\f194\";\n  }\n  .fa-vimeo-v:before {\n    content: \"\\f27d\";\n  }\n  .fa-vine:before {\n    content: \"\\f1ca\";\n  }\n  .fa-vk:before {\n    content: \"\\f189\";\n  }\n  .fa-vnv:before {\n    content: \"\\f40b\";\n  }\n  .fa-vuejs:before {\n    content: \"\\f41f\";\n  }\n  .fa-watchman-monitoring:before {\n    content: \"\\e087\";\n  }\n  .fa-waze:before {\n    content: \"\\f83f\";\n  }\n  .fa-weebly:before {\n    content: \"\\f5cc\";\n  }\n  .fa-weibo:before {\n    content: \"\\f18a\";\n  }\n  .fa-weixin:before {\n    content: \"\\f1d7\";\n  }\n  .fa-whatsapp:before {\n    content: \"\\f232\";\n  }\n  .fa-whatsapp-square:before {\n    content: \"\\f40c\";\n  }\n  .fa-whmcs:before {\n    content: \"\\f40d\";\n  }\n  .fa-wikipedia-w:before {\n    content: \"\\f266\";\n  }\n  .fa-windows:before {\n    content: \"\\f17a\";\n  }\n  .fa-wirsindhandwerk:before {\n    content: \"\\e2d0\";\n  }\n  .fa-wsh:before {\n    content: \"\\e2d0\";\n  }\n  .fa-wix:before {\n    content: \"\\f5cf\";\n  }\n  .fa-wizards-of-the-coast:before {\n    content: \"\\f730\";\n  }\n  .fa-wodu:before {\n    content: \"\\e088\";\n  }\n  .fa-wolf-pack-battalion:before {\n    content: \"\\f514\";\n  }\n  .fa-wordpress:before {\n    content: \"\\f19a\";\n  }\n  .fa-wordpress-simple:before {\n    content: \"\\f411\";\n  }\n  .fa-wpbeginner:before {\n    content: \"\\f297\";\n  }\n  .fa-wpexplorer:before {\n    content: \"\\f2de\";\n  }\n  .fa-wpforms:before {\n    content: \"\\f298\";\n  }\n  .fa-wpressr:before {\n    content: \"\\f3e4\";\n  }\n  .fa-xbox:before {\n    content: \"\\f412\";\n  }\n  .fa-xing:before {\n    content: \"\\f168\";\n  }\n  .fa-xing-square:before {\n    content: \"\\f169\";\n  }\n  .fa-y-combinator:before {\n    content: \"\\f23b\";\n  }\n  .fa-yahoo:before {\n    content: \"\\f19e\";\n  }\n  .fa-yammer:before {\n    content: \"\\f840\";\n  }\n  .fa-yandex:before {\n    content: \"\\f413\";\n  }\n  .fa-yandex-international:before {\n    content: \"\\f414\";\n  }\n  .fa-yarn:before {\n    content: \"\\f7e3\";\n  }\n  .fa-yelp:before {\n    content: \"\\f1e9\";\n  }\n  .fa-yoast:before {\n    content: \"\\f2b1\";\n  }\n  .fa-youtube:before {\n    content: \"\\f167\";\n  }\n  .fa-youtube-square:before {\n    content: \"\\f431\";\n  }\n  .fa-zhihu:before {\n    content: \"\\f63f\";\n  }\n  :root,\n  :host {\n    --fa-font-regular: normal 400 1em/1 'Font Awesome 6 Free';\n  }\n  @font-face {\n    font-family: \"Font Awesome 6 Free\";\n    font-weight: 400;\n    font-display: block;\n    font-style: normal;\n    src: url(\"../webfonts/fa-regular-400.woff2\") format(\"woff2\"), url(\"../webfonts/fa-regular-400.ttf\") format(\"truetype\");\n  }\n  .far,\n  .fa-regular {\n    font-family: \"Font Awesome 6 Free\";\n    font-weight: 400;\n  }\n  :root,\n  :host {\n    --fa-font-solid: normal 900 1em/1 'Font Awesome 6 Free';\n  }\n  @font-face {\n    font-family: \"Font Awesome 6 Free\";\n    font-weight: 900;\n    font-display: block;\n    font-style: normal;\n    src: url(\"../webfonts/fa-solid-900.woff2\") format(\"woff2\"), url(\"../webfonts/fa-solid-900.ttf\") format(\"truetype\");\n  }\n  .fas,\n  .fa-solid {\n    font-family: \"Font Awesome 6 Free\";\n    font-weight: 900;\n  }\n  @font-face {\n    font-family: \"Font Awesome 5 Brands\";\n    font-weight: 400;\n    font-display: block;\n    src: url(\"../webfonts/fa-brands-400.woff2\") format(\"woff2\"), url(\"../webfonts/fa-brands-400.ttf\") format(\"truetype\");\n  }\n  @font-face {\n    font-family: \"Font Awesome 5 Free\";\n    font-weight: 900;\n    font-display: block;\n    src: url(\"../webfonts/fa-solid-900.woff2\") format(\"woff2\"), url(\"../webfonts/fa-solid-900.ttf\") format(\"truetype\");\n  }\n  @font-face {\n    font-family: \"Font Awesome 5 Free\";\n    font-weight: 400;\n    font-display: block;\n    src: url(\"../webfonts/fa-regular-400.woff2\") format(\"woff2\"), url(\"../webfonts/fa-regular-400.ttf\") format(\"truetype\");\n  }\n  @font-face {\n    font-family: FontAwesome;\n    font-display: block;\n    src: url(\"../webfonts/fa-solid-900.woff2\") format(\"woff2\"), url(\"../webfonts/fa-solid-900.ttf\") format(\"truetype\");\n  }\n  @font-face {\n    font-family: FontAwesome;\n    font-display: block;\n    src: url(\"../webfonts/fa-brands-400.woff2\") format(\"woff2\"), url(\"../webfonts/fa-brands-400.ttf\") format(\"truetype\");\n  }\n  @font-face {\n    font-family: FontAwesome;\n    font-display: block;\n    src: url(\"../webfonts/fa-regular-400.woff2\") format(\"woff2\"), url(\"../webfonts/fa-regular-400.ttf\") format(\"truetype\");\n    unicode-range: U+F003, U+F006, U+F014, U+F016-F017, U+F01A-F01B, U+F01D, U+F022, U+F03E, U+F044, U+F046, U+F05C-F05D, U+F06E, U+F070, U+F087-F088, U+F08A, U+F094, U+F096-F097, U+F09D, U+F0A0, U+F0A2, U+F0A4-F0A7, U+F0C5, U+F0C7, U+F0E5-F0E6, U+F0EB, U+F0F6-F0F8, U+F10C, U+F114-F115, U+F118-F11A, U+F11C-F11D, U+F133, U+F147, U+F14E, U+F150-F152, U+F185-F186, U+F18E, U+F190-F192, U+F196, U+F1C1-F1C9, U+F1D9, U+F1DB, U+F1E3, U+F1EA, U+F1F7, U+F1F9, U+F20A, U+F247-F248, U+F24A, U+F24D, U+F255-F25B, U+F25D, U+F271-F274, U+F278, U+F27B, U+F28C, U+F28E, U+F29C, U+F2B5, U+F2B7, U+F2BA, U+F2BC, U+F2BE, U+F2C0-F2C1, U+F2C3, U+F2D0, U+F2D2, U+F2D4, U+F2DC;\n  }\n  @font-face {\n    font-family: FontAwesome;\n    font-display: block;\n    src: url(\"../webfonts/fa-v4compatibility.woff2\") format(\"woff2\"), url(\"../webfonts/fa-v4compatibility.ttf\") format(\"truetype\");\n    unicode-range: U+F041, U+F047, U+F065-F066, U+F07D-F07E, U+F080, U+F08B, U+F08E, U+F090, U+F09A, U+F0AC, U+F0AE, U+F0B2, U+F0D0, U+F0D6, U+F0E4, U+F0EC, U+F10A-F10B, U+F123, U+F13E, U+F148-F149, U+F14C, U+F156, U+F15E, U+F160-F161, U+F163, U+F175-F178, U+F195, U+F1F8, U+F219, U+F250, U+F252, U+F27A;\n  }\n  /*---------------------------------------------------------------------------------------------\n  *  Copyright (c) Microsoft Corporation. All rights reserved.\n  *  Licensed under the MIT License. See License.txt in the project root for license information.\n  *--------------------------------------------------------------------------------------------*/\n  @font-face {\n    font-family: codicon;\n    font-display: block;\n    src: url(\"/assets/codicons/codicon.ttf?be64b7213e352cd7f91ef58198e71237\") format(\"truetype\");\n  }\n  .codicon[class*=codicon-] {\n    display: inline-block;\n    font: normal normal normal 16px/1 codicon;\n    text-decoration: none;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-align: center;\n    text-rendering: auto;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n         user-select: none;\n  }\n  /*---------------------\n  *  Modifiers\n  *-------------------*/\n  @keyframes codicon-spin {\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  .codicon-sync.codicon-modifier-spin,\n  .codicon-loading.codicon-modifier-spin,\n  .codicon-gear.codicon-modifier-spin {\n    /* Use steps to throttle FPS to reduce CPU usage */\n    animation: codicon-spin 1.5s steps(30) infinite;\n  }\n  .codicon-modifier-disabled {\n    opacity: 0.5;\n  }\n  .codicon-modifier-hidden {\n    opacity: 0;\n  }\n  /* custom speed & easing for loading icon */\n  .codicon-loading {\n    animation-duration: 1s !important;\n    animation-timing-function: cubic-bezier(0.53, 0.21, 0.29, 0.67) !important;\n  }\n  /*---------------------\n  *  Icons\n  *-------------------*/\n  .codicon-add:before {\n    content: \"\\ea60\";\n  }\n  .codicon-plus:before {\n    content: \"\\ea60\";\n  }\n  .codicon-gist-new:before {\n    content: \"\\ea60\";\n  }\n  .codicon-repo-create:before {\n    content: \"\\ea60\";\n  }\n  .codicon-lightbulb:before {\n    content: \"\\ea61\";\n  }\n  .codicon-light-bulb:before {\n    content: \"\\ea61\";\n  }\n  .codicon-repo:before {\n    content: \"\\ea62\";\n  }\n  .codicon-repo-delete:before {\n    content: \"\\ea62\";\n  }\n  .codicon-gist-fork:before {\n    content: \"\\ea63\";\n  }\n  .codicon-repo-forked:before {\n    content: \"\\ea63\";\n  }\n  .codicon-git-pull-request:before {\n    content: \"\\ea64\";\n  }\n  .codicon-git-pull-request-abandoned:before {\n    content: \"\\ea64\";\n  }\n  .codicon-record-keys:before {\n    content: \"\\ea65\";\n  }\n  .codicon-keyboard:before {\n    content: \"\\ea65\";\n  }\n  .codicon-tag:before {\n    content: \"\\ea66\";\n  }\n  .codicon-git-pull-request-label:before {\n    content: \"\\ea66\";\n  }\n  .codicon-tag-add:before {\n    content: \"\\ea66\";\n  }\n  .codicon-tag-remove:before {\n    content: \"\\ea66\";\n  }\n  .codicon-person:before {\n    content: \"\\ea67\";\n  }\n  .codicon-person-follow:before {\n    content: \"\\ea67\";\n  }\n  .codicon-person-outline:before {\n    content: \"\\ea67\";\n  }\n  .codicon-person-filled:before {\n    content: \"\\ea67\";\n  }\n  .codicon-git-branch:before {\n    content: \"\\ea68\";\n  }\n  .codicon-git-branch-create:before {\n    content: \"\\ea68\";\n  }\n  .codicon-git-branch-delete:before {\n    content: \"\\ea68\";\n  }\n  .codicon-source-control:before {\n    content: \"\\ea68\";\n  }\n  .codicon-mirror:before {\n    content: \"\\ea69\";\n  }\n  .codicon-mirror-public:before {\n    content: \"\\ea69\";\n  }\n  .codicon-star:before {\n    content: \"\\ea6a\";\n  }\n  .codicon-star-add:before {\n    content: \"\\ea6a\";\n  }\n  .codicon-star-delete:before {\n    content: \"\\ea6a\";\n  }\n  .codicon-star-empty:before {\n    content: \"\\ea6a\";\n  }\n  .codicon-comment:before {\n    content: \"\\ea6b\";\n  }\n  .codicon-comment-add:before {\n    content: \"\\ea6b\";\n  }\n  .codicon-alert:before {\n    content: \"\\ea6c\";\n  }\n  .codicon-warning:before {\n    content: \"\\ea6c\";\n  }\n  .codicon-search:before {\n    content: \"\\ea6d\";\n  }\n  .codicon-search-save:before {\n    content: \"\\ea6d\";\n  }\n  .codicon-log-out:before {\n    content: \"\\ea6e\";\n  }\n  .codicon-sign-out:before {\n    content: \"\\ea6e\";\n  }\n  .codicon-log-in:before {\n    content: \"\\ea6f\";\n  }\n  .codicon-sign-in:before {\n    content: \"\\ea6f\";\n  }\n  .codicon-eye:before {\n    content: \"\\ea70\";\n  }\n  .codicon-eye-unwatch:before {\n    content: \"\\ea70\";\n  }\n  .codicon-eye-watch:before {\n    content: \"\\ea70\";\n  }\n  .codicon-circle-filled:before {\n    content: \"\\ea71\";\n  }\n  .codicon-primitive-dot:before {\n    content: \"\\ea71\";\n  }\n  .codicon-close-dirty:before {\n    content: \"\\ea71\";\n  }\n  .codicon-debug-breakpoint:before {\n    content: \"\\ea71\";\n  }\n  .codicon-debug-breakpoint-disabled:before {\n    content: \"\\ea71\";\n  }\n  .codicon-debug-hint:before {\n    content: \"\\ea71\";\n  }\n  .codicon-terminal-decoration-success:before {\n    content: \"\\ea71\";\n  }\n  .codicon-primitive-square:before {\n    content: \"\\ea72\";\n  }\n  .codicon-edit:before {\n    content: \"\\ea73\";\n  }\n  .codicon-pencil:before {\n    content: \"\\ea73\";\n  }\n  .codicon-info:before {\n    content: \"\\ea74\";\n  }\n  .codicon-issue-opened:before {\n    content: \"\\ea74\";\n  }\n  .codicon-gist-private:before {\n    content: \"\\ea75\";\n  }\n  .codicon-git-fork-private:before {\n    content: \"\\ea75\";\n  }\n  .codicon-lock:before {\n    content: \"\\ea75\";\n  }\n  .codicon-mirror-private:before {\n    content: \"\\ea75\";\n  }\n  .codicon-close:before {\n    content: \"\\ea76\";\n  }\n  .codicon-remove-close:before {\n    content: \"\\ea76\";\n  }\n  .codicon-x:before {\n    content: \"\\ea76\";\n  }\n  .codicon-repo-sync:before {\n    content: \"\\ea77\";\n  }\n  .codicon-sync:before {\n    content: \"\\ea77\";\n  }\n  .codicon-clone:before {\n    content: \"\\ea78\";\n  }\n  .codicon-desktop-download:before {\n    content: \"\\ea78\";\n  }\n  .codicon-beaker:before {\n    content: \"\\ea79\";\n  }\n  .codicon-microscope:before {\n    content: \"\\ea79\";\n  }\n  .codicon-vm:before {\n    content: \"\\ea7a\";\n  }\n  .codicon-device-desktop:before {\n    content: \"\\ea7a\";\n  }\n  .codicon-file:before {\n    content: \"\\ea7b\";\n  }\n  .codicon-file-text:before {\n    content: \"\\ea7b\";\n  }\n  .codicon-more:before {\n    content: \"\\ea7c\";\n  }\n  .codicon-ellipsis:before {\n    content: \"\\ea7c\";\n  }\n  .codicon-kebab-horizontal:before {\n    content: \"\\ea7c\";\n  }\n  .codicon-mail-reply:before {\n    content: \"\\ea7d\";\n  }\n  .codicon-reply:before {\n    content: \"\\ea7d\";\n  }\n  .codicon-organization:before {\n    content: \"\\ea7e\";\n  }\n  .codicon-organization-filled:before {\n    content: \"\\ea7e\";\n  }\n  .codicon-organization-outline:before {\n    content: \"\\ea7e\";\n  }\n  .codicon-new-file:before {\n    content: \"\\ea7f\";\n  }\n  .codicon-file-add:before {\n    content: \"\\ea7f\";\n  }\n  .codicon-new-folder:before {\n    content: \"\\ea80\";\n  }\n  .codicon-file-directory-create:before {\n    content: \"\\ea80\";\n  }\n  .codicon-trash:before {\n    content: \"\\ea81\";\n  }\n  .codicon-trashcan:before {\n    content: \"\\ea81\";\n  }\n  .codicon-history:before {\n    content: \"\\ea82\";\n  }\n  .codicon-clock:before {\n    content: \"\\ea82\";\n  }\n  .codicon-folder:before {\n    content: \"\\ea83\";\n  }\n  .codicon-file-directory:before {\n    content: \"\\ea83\";\n  }\n  .codicon-symbol-folder:before {\n    content: \"\\ea83\";\n  }\n  .codicon-logo-github:before {\n    content: \"\\ea84\";\n  }\n  .codicon-mark-github:before {\n    content: \"\\ea84\";\n  }\n  .codicon-github:before {\n    content: \"\\ea84\";\n  }\n  .codicon-terminal:before {\n    content: \"\\ea85\";\n  }\n  .codicon-console:before {\n    content: \"\\ea85\";\n  }\n  .codicon-repl:before {\n    content: \"\\ea85\";\n  }\n  .codicon-zap:before {\n    content: \"\\ea86\";\n  }\n  .codicon-symbol-event:before {\n    content: \"\\ea86\";\n  }\n  .codicon-error:before {\n    content: \"\\ea87\";\n  }\n  .codicon-stop:before {\n    content: \"\\ea87\";\n  }\n  .codicon-variable:before {\n    content: \"\\ea88\";\n  }\n  .codicon-symbol-variable:before {\n    content: \"\\ea88\";\n  }\n  .codicon-array:before {\n    content: \"\\ea8a\";\n  }\n  .codicon-symbol-array:before {\n    content: \"\\ea8a\";\n  }\n  .codicon-symbol-module:before {\n    content: \"\\ea8b\";\n  }\n  .codicon-symbol-package:before {\n    content: \"\\ea8b\";\n  }\n  .codicon-symbol-namespace:before {\n    content: \"\\ea8b\";\n  }\n  .codicon-symbol-object:before {\n    content: \"\\ea8b\";\n  }\n  .codicon-symbol-method:before {\n    content: \"\\ea8c\";\n  }\n  .codicon-symbol-function:before {\n    content: \"\\ea8c\";\n  }\n  .codicon-symbol-constructor:before {\n    content: \"\\ea8c\";\n  }\n  .codicon-symbol-boolean:before {\n    content: \"\\ea8f\";\n  }\n  .codicon-symbol-null:before {\n    content: \"\\ea8f\";\n  }\n  .codicon-symbol-numeric:before {\n    content: \"\\ea90\";\n  }\n  .codicon-symbol-number:before {\n    content: \"\\ea90\";\n  }\n  .codicon-symbol-structure:before {\n    content: \"\\ea91\";\n  }\n  .codicon-symbol-struct:before {\n    content: \"\\ea91\";\n  }\n  .codicon-symbol-parameter:before {\n    content: \"\\ea92\";\n  }\n  .codicon-symbol-type-parameter:before {\n    content: \"\\ea92\";\n  }\n  .codicon-symbol-key:before {\n    content: \"\\ea93\";\n  }\n  .codicon-symbol-text:before {\n    content: \"\\ea93\";\n  }\n  .codicon-symbol-reference:before {\n    content: \"\\ea94\";\n  }\n  .codicon-go-to-file:before {\n    content: \"\\ea94\";\n  }\n  .codicon-symbol-enum:before {\n    content: \"\\ea95\";\n  }\n  .codicon-symbol-value:before {\n    content: \"\\ea95\";\n  }\n  .codicon-symbol-ruler:before {\n    content: \"\\ea96\";\n  }\n  .codicon-symbol-unit:before {\n    content: \"\\ea96\";\n  }\n  .codicon-activate-breakpoints:before {\n    content: \"\\ea97\";\n  }\n  .codicon-archive:before {\n    content: \"\\ea98\";\n  }\n  .codicon-arrow-both:before {\n    content: \"\\ea99\";\n  }\n  .codicon-arrow-down:before {\n    content: \"\\ea9a\";\n  }\n  .codicon-arrow-left:before {\n    content: \"\\ea9b\";\n  }\n  .codicon-arrow-right:before {\n    content: \"\\ea9c\";\n  }\n  .codicon-arrow-small-down:before {\n    content: \"\\ea9d\";\n  }\n  .codicon-arrow-small-left:before {\n    content: \"\\ea9e\";\n  }\n  .codicon-arrow-small-right:before {\n    content: \"\\ea9f\";\n  }\n  .codicon-arrow-small-up:before {\n    content: \"\\eaa0\";\n  }\n  .codicon-arrow-up:before {\n    content: \"\\eaa1\";\n  }\n  .codicon-bell:before {\n    content: \"\\eaa2\";\n  }\n  .codicon-bold:before {\n    content: \"\\eaa3\";\n  }\n  .codicon-book:before {\n    content: \"\\eaa4\";\n  }\n  .codicon-bookmark:before {\n    content: \"\\eaa5\";\n  }\n  .codicon-debug-breakpoint-conditional-unverified:before {\n    content: \"\\eaa6\";\n  }\n  .codicon-debug-breakpoint-conditional:before {\n    content: \"\\eaa7\";\n  }\n  .codicon-debug-breakpoint-conditional-disabled:before {\n    content: \"\\eaa7\";\n  }\n  .codicon-debug-breakpoint-data-unverified:before {\n    content: \"\\eaa8\";\n  }\n  .codicon-debug-breakpoint-data:before {\n    content: \"\\eaa9\";\n  }\n  .codicon-debug-breakpoint-data-disabled:before {\n    content: \"\\eaa9\";\n  }\n  .codicon-debug-breakpoint-log-unverified:before {\n    content: \"\\eaaa\";\n  }\n  .codicon-debug-breakpoint-log:before {\n    content: \"\\eaab\";\n  }\n  .codicon-debug-breakpoint-log-disabled:before {\n    content: \"\\eaab\";\n  }\n  .codicon-briefcase:before {\n    content: \"\\eaac\";\n  }\n  .codicon-broadcast:before {\n    content: \"\\eaad\";\n  }\n  .codicon-browser:before {\n    content: \"\\eaae\";\n  }\n  .codicon-bug:before {\n    content: \"\\eaaf\";\n  }\n  .codicon-calendar:before {\n    content: \"\\eab0\";\n  }\n  .codicon-case-sensitive:before {\n    content: \"\\eab1\";\n  }\n  .codicon-check:before {\n    content: \"\\eab2\";\n  }\n  .codicon-checklist:before {\n    content: \"\\eab3\";\n  }\n  .codicon-chevron-down:before {\n    content: \"\\eab4\";\n  }\n  .codicon-chevron-left:before {\n    content: \"\\eab5\";\n  }\n  .codicon-chevron-right:before {\n    content: \"\\eab6\";\n  }\n  .codicon-chevron-up:before {\n    content: \"\\eab7\";\n  }\n  .codicon-chrome-close:before {\n    content: \"\\eab8\";\n  }\n  .codicon-chrome-maximize:before {\n    content: \"\\eab9\";\n  }\n  .codicon-chrome-minimize:before {\n    content: \"\\eaba\";\n  }\n  .codicon-chrome-restore:before {\n    content: \"\\eabb\";\n  }\n  .codicon-circle-outline:before {\n    content: \"\\eabc\";\n  }\n  .codicon-circle:before {\n    content: \"\\eabc\";\n  }\n  .codicon-debug-breakpoint-unverified:before {\n    content: \"\\eabc\";\n  }\n  .codicon-terminal-decoration-incomplete:before {\n    content: \"\\eabc\";\n  }\n  .codicon-circle-slash:before {\n    content: \"\\eabd\";\n  }\n  .codicon-circuit-board:before {\n    content: \"\\eabe\";\n  }\n  .codicon-clear-all:before {\n    content: \"\\eabf\";\n  }\n  .codicon-clippy:before {\n    content: \"\\eac0\";\n  }\n  .codicon-close-all:before {\n    content: \"\\eac1\";\n  }\n  .codicon-cloud-download:before {\n    content: \"\\eac2\";\n  }\n  .codicon-cloud-upload:before {\n    content: \"\\eac3\";\n  }\n  .codicon-code:before {\n    content: \"\\eac4\";\n  }\n  .codicon-collapse-all:before {\n    content: \"\\eac5\";\n  }\n  .codicon-color-mode:before {\n    content: \"\\eac6\";\n  }\n  .codicon-comment-discussion:before {\n    content: \"\\eac7\";\n  }\n  .codicon-credit-card:before {\n    content: \"\\eac9\";\n  }\n  .codicon-dash:before {\n    content: \"\\eacc\";\n  }\n  .codicon-dashboard:before {\n    content: \"\\eacd\";\n  }\n  .codicon-database:before {\n    content: \"\\eace\";\n  }\n  .codicon-debug-continue:before {\n    content: \"\\eacf\";\n  }\n  .codicon-debug-disconnect:before {\n    content: \"\\ead0\";\n  }\n  .codicon-debug-pause:before {\n    content: \"\\ead1\";\n  }\n  .codicon-debug-restart:before {\n    content: \"\\ead2\";\n  }\n  .codicon-debug-start:before {\n    content: \"\\ead3\";\n  }\n  .codicon-debug-step-into:before {\n    content: \"\\ead4\";\n  }\n  .codicon-debug-step-out:before {\n    content: \"\\ead5\";\n  }\n  .codicon-debug-step-over:before {\n    content: \"\\ead6\";\n  }\n  .codicon-debug-stop:before {\n    content: \"\\ead7\";\n  }\n  .codicon-debug:before {\n    content: \"\\ead8\";\n  }\n  .codicon-device-camera-video:before {\n    content: \"\\ead9\";\n  }\n  .codicon-device-camera:before {\n    content: \"\\eada\";\n  }\n  .codicon-device-mobile:before {\n    content: \"\\eadb\";\n  }\n  .codicon-diff-added:before {\n    content: \"\\eadc\";\n  }\n  .codicon-diff-ignored:before {\n    content: \"\\eadd\";\n  }\n  .codicon-diff-modified:before {\n    content: \"\\eade\";\n  }\n  .codicon-diff-removed:before {\n    content: \"\\eadf\";\n  }\n  .codicon-diff-renamed:before {\n    content: \"\\eae0\";\n  }\n  .codicon-diff:before {\n    content: \"\\eae1\";\n  }\n  .codicon-diff-sidebyside:before {\n    content: \"\\eae1\";\n  }\n  .codicon-discard:before {\n    content: \"\\eae2\";\n  }\n  .codicon-editor-layout:before {\n    content: \"\\eae3\";\n  }\n  .codicon-empty-window:before {\n    content: \"\\eae4\";\n  }\n  .codicon-exclude:before {\n    content: \"\\eae5\";\n  }\n  .codicon-extensions:before {\n    content: \"\\eae6\";\n  }\n  .codicon-eye-closed:before {\n    content: \"\\eae7\";\n  }\n  .codicon-file-binary:before {\n    content: \"\\eae8\";\n  }\n  .codicon-file-code:before {\n    content: \"\\eae9\";\n  }\n  .codicon-file-media:before {\n    content: \"\\eaea\";\n  }\n  .codicon-file-pdf:before {\n    content: \"\\eaeb\";\n  }\n  .codicon-file-submodule:before {\n    content: \"\\eaec\";\n  }\n  .codicon-file-symlink-directory:before {\n    content: \"\\eaed\";\n  }\n  .codicon-file-symlink-file:before {\n    content: \"\\eaee\";\n  }\n  .codicon-file-zip:before {\n    content: \"\\eaef\";\n  }\n  .codicon-files:before {\n    content: \"\\eaf0\";\n  }\n  .codicon-filter:before {\n    content: \"\\eaf1\";\n  }\n  .codicon-flame:before {\n    content: \"\\eaf2\";\n  }\n  .codicon-fold-down:before {\n    content: \"\\eaf3\";\n  }\n  .codicon-fold-up:before {\n    content: \"\\eaf4\";\n  }\n  .codicon-fold:before {\n    content: \"\\eaf5\";\n  }\n  .codicon-folder-active:before {\n    content: \"\\eaf6\";\n  }\n  .codicon-folder-opened:before {\n    content: \"\\eaf7\";\n  }\n  .codicon-gear:before {\n    content: \"\\eaf8\";\n  }\n  .codicon-gift:before {\n    content: \"\\eaf9\";\n  }\n  .codicon-gist-secret:before {\n    content: \"\\eafa\";\n  }\n  .codicon-gist:before {\n    content: \"\\eafb\";\n  }\n  .codicon-git-commit:before {\n    content: \"\\eafc\";\n  }\n  .codicon-git-compare:before {\n    content: \"\\eafd\";\n  }\n  .codicon-compare-changes:before {\n    content: \"\\eafd\";\n  }\n  .codicon-git-merge:before {\n    content: \"\\eafe\";\n  }\n  .codicon-github-action:before {\n    content: \"\\eaff\";\n  }\n  .codicon-github-alt:before {\n    content: \"\\eb00\";\n  }\n  .codicon-globe:before {\n    content: \"\\eb01\";\n  }\n  .codicon-grabber:before {\n    content: \"\\eb02\";\n  }\n  .codicon-graph:before {\n    content: \"\\eb03\";\n  }\n  .codicon-gripper:before {\n    content: \"\\eb04\";\n  }\n  .codicon-heart:before {\n    content: \"\\eb05\";\n  }\n  .codicon-home:before {\n    content: \"\\eb06\";\n  }\n  .codicon-horizontal-rule:before {\n    content: \"\\eb07\";\n  }\n  .codicon-hubot:before {\n    content: \"\\eb08\";\n  }\n  .codicon-inbox:before {\n    content: \"\\eb09\";\n  }\n  .codicon-issue-reopened:before {\n    content: \"\\eb0b\";\n  }\n  .codicon-issues:before {\n    content: \"\\eb0c\";\n  }\n  .codicon-italic:before {\n    content: \"\\eb0d\";\n  }\n  .codicon-jersey:before {\n    content: \"\\eb0e\";\n  }\n  .codicon-json:before {\n    content: \"\\eb0f\";\n  }\n  .codicon-kebab-vertical:before {\n    content: \"\\eb10\";\n  }\n  .codicon-key:before {\n    content: \"\\eb11\";\n  }\n  .codicon-law:before {\n    content: \"\\eb12\";\n  }\n  .codicon-lightbulb-autofix:before {\n    content: \"\\eb13\";\n  }\n  .codicon-link-external:before {\n    content: \"\\eb14\";\n  }\n  .codicon-link:before {\n    content: \"\\eb15\";\n  }\n  .codicon-list-ordered:before {\n    content: \"\\eb16\";\n  }\n  .codicon-list-unordered:before {\n    content: \"\\eb17\";\n  }\n  .codicon-live-share:before {\n    content: \"\\eb18\";\n  }\n  .codicon-loading:before {\n    content: \"\\eb19\";\n  }\n  .codicon-location:before {\n    content: \"\\eb1a\";\n  }\n  .codicon-mail-read:before {\n    content: \"\\eb1b\";\n  }\n  .codicon-mail:before {\n    content: \"\\eb1c\";\n  }\n  .codicon-markdown:before {\n    content: \"\\eb1d\";\n  }\n  .codicon-megaphone:before {\n    content: \"\\eb1e\";\n  }\n  .codicon-mention:before {\n    content: \"\\eb1f\";\n  }\n  .codicon-milestone:before {\n    content: \"\\eb20\";\n  }\n  .codicon-git-pull-request-milestone:before {\n    content: \"\\eb20\";\n  }\n  .codicon-mortar-board:before {\n    content: \"\\eb21\";\n  }\n  .codicon-move:before {\n    content: \"\\eb22\";\n  }\n  .codicon-multiple-windows:before {\n    content: \"\\eb23\";\n  }\n  .codicon-mute:before {\n    content: \"\\eb24\";\n  }\n  .codicon-no-newline:before {\n    content: \"\\eb25\";\n  }\n  .codicon-note:before {\n    content: \"\\eb26\";\n  }\n  .codicon-octoface:before {\n    content: \"\\eb27\";\n  }\n  .codicon-open-preview:before {\n    content: \"\\eb28\";\n  }\n  .codicon-package:before {\n    content: \"\\eb29\";\n  }\n  .codicon-paintcan:before {\n    content: \"\\eb2a\";\n  }\n  .codicon-pin:before {\n    content: \"\\eb2b\";\n  }\n  .codicon-play:before {\n    content: \"\\eb2c\";\n  }\n  .codicon-run:before {\n    content: \"\\eb2c\";\n  }\n  .codicon-plug:before {\n    content: \"\\eb2d\";\n  }\n  .codicon-preserve-case:before {\n    content: \"\\eb2e\";\n  }\n  .codicon-preview:before {\n    content: \"\\eb2f\";\n  }\n  .codicon-project:before {\n    content: \"\\eb30\";\n  }\n  .codicon-pulse:before {\n    content: \"\\eb31\";\n  }\n  .codicon-question:before {\n    content: \"\\eb32\";\n  }\n  .codicon-quote:before {\n    content: \"\\eb33\";\n  }\n  .codicon-radio-tower:before {\n    content: \"\\eb34\";\n  }\n  .codicon-reactions:before {\n    content: \"\\eb35\";\n  }\n  .codicon-references:before {\n    content: \"\\eb36\";\n  }\n  .codicon-refresh:before {\n    content: \"\\eb37\";\n  }\n  .codicon-regex:before {\n    content: \"\\eb38\";\n  }\n  .codicon-remote-explorer:before {\n    content: \"\\eb39\";\n  }\n  .codicon-remote:before {\n    content: \"\\eb3a\";\n  }\n  .codicon-remove:before {\n    content: \"\\eb3b\";\n  }\n  .codicon-replace-all:before {\n    content: \"\\eb3c\";\n  }\n  .codicon-replace:before {\n    content: \"\\eb3d\";\n  }\n  .codicon-repo-clone:before {\n    content: \"\\eb3e\";\n  }\n  .codicon-repo-force-push:before {\n    content: \"\\eb3f\";\n  }\n  .codicon-repo-pull:before {\n    content: \"\\eb40\";\n  }\n  .codicon-repo-push:before {\n    content: \"\\eb41\";\n  }\n  .codicon-report:before {\n    content: \"\\eb42\";\n  }\n  .codicon-request-changes:before {\n    content: \"\\eb43\";\n  }\n  .codicon-rocket:before {\n    content: \"\\eb44\";\n  }\n  .codicon-root-folder-opened:before {\n    content: \"\\eb45\";\n  }\n  .codicon-root-folder:before {\n    content: \"\\eb46\";\n  }\n  .codicon-rss:before {\n    content: \"\\eb47\";\n  }\n  .codicon-ruby:before {\n    content: \"\\eb48\";\n  }\n  .codicon-save-all:before {\n    content: \"\\eb49\";\n  }\n  .codicon-save-as:before {\n    content: \"\\eb4a\";\n  }\n  .codicon-save:before {\n    content: \"\\eb4b\";\n  }\n  .codicon-screen-full:before {\n    content: \"\\eb4c\";\n  }\n  .codicon-screen-normal:before {\n    content: \"\\eb4d\";\n  }\n  .codicon-search-stop:before {\n    content: \"\\eb4e\";\n  }\n  .codicon-server:before {\n    content: \"\\eb50\";\n  }\n  .codicon-settings-gear:before {\n    content: \"\\eb51\";\n  }\n  .codicon-settings:before {\n    content: \"\\eb52\";\n  }\n  .codicon-shield:before {\n    content: \"\\eb53\";\n  }\n  .codicon-smiley:before {\n    content: \"\\eb54\";\n  }\n  .codicon-sort-precedence:before {\n    content: \"\\eb55\";\n  }\n  .codicon-split-horizontal:before {\n    content: \"\\eb56\";\n  }\n  .codicon-split-vertical:before {\n    content: \"\\eb57\";\n  }\n  .codicon-squirrel:before {\n    content: \"\\eb58\";\n  }\n  .codicon-star-full:before {\n    content: \"\\eb59\";\n  }\n  .codicon-star-half:before {\n    content: \"\\eb5a\";\n  }\n  .codicon-symbol-class:before {\n    content: \"\\eb5b\";\n  }\n  .codicon-symbol-color:before {\n    content: \"\\eb5c\";\n  }\n  .codicon-symbol-constant:before {\n    content: \"\\eb5d\";\n  }\n  .codicon-symbol-enum-member:before {\n    content: \"\\eb5e\";\n  }\n  .codicon-symbol-field:before {\n    content: \"\\eb5f\";\n  }\n  .codicon-symbol-file:before {\n    content: \"\\eb60\";\n  }\n  .codicon-symbol-interface:before {\n    content: \"\\eb61\";\n  }\n  .codicon-symbol-keyword:before {\n    content: \"\\eb62\";\n  }\n  .codicon-symbol-misc:before {\n    content: \"\\eb63\";\n  }\n  .codicon-symbol-operator:before {\n    content: \"\\eb64\";\n  }\n  .codicon-symbol-property:before {\n    content: \"\\eb65\";\n  }\n  .codicon-wrench:before {\n    content: \"\\eb65\";\n  }\n  .codicon-wrench-subaction:before {\n    content: \"\\eb65\";\n  }\n  .codicon-symbol-snippet:before {\n    content: \"\\eb66\";\n  }\n  .codicon-tasklist:before {\n    content: \"\\eb67\";\n  }\n  .codicon-telescope:before {\n    content: \"\\eb68\";\n  }\n  .codicon-text-size:before {\n    content: \"\\eb69\";\n  }\n  .codicon-three-bars:before {\n    content: \"\\eb6a\";\n  }\n  .codicon-thumbsdown:before {\n    content: \"\\eb6b\";\n  }\n  .codicon-thumbsup:before {\n    content: \"\\eb6c\";\n  }\n  .codicon-tools:before {\n    content: \"\\eb6d\";\n  }\n  .codicon-triangle-down:before {\n    content: \"\\eb6e\";\n  }\n  .codicon-triangle-left:before {\n    content: \"\\eb6f\";\n  }\n  .codicon-triangle-right:before {\n    content: \"\\eb70\";\n  }\n  .codicon-triangle-up:before {\n    content: \"\\eb71\";\n  }\n  .codicon-twitter:before {\n    content: \"\\eb72\";\n  }\n  .codicon-unfold:before {\n    content: \"\\eb73\";\n  }\n  .codicon-unlock:before {\n    content: \"\\eb74\";\n  }\n  .codicon-unmute:before {\n    content: \"\\eb75\";\n  }\n  .codicon-unverified:before {\n    content: \"\\eb76\";\n  }\n  .codicon-verified:before {\n    content: \"\\eb77\";\n  }\n  .codicon-versions:before {\n    content: \"\\eb78\";\n  }\n  .codicon-vm-active:before {\n    content: \"\\eb79\";\n  }\n  .codicon-vm-outline:before {\n    content: \"\\eb7a\";\n  }\n  .codicon-vm-running:before {\n    content: \"\\eb7b\";\n  }\n  .codicon-watch:before {\n    content: \"\\eb7c\";\n  }\n  .codicon-whitespace:before {\n    content: \"\\eb7d\";\n  }\n  .codicon-whole-word:before {\n    content: \"\\eb7e\";\n  }\n  .codicon-window:before {\n    content: \"\\eb7f\";\n  }\n  .codicon-word-wrap:before {\n    content: \"\\eb80\";\n  }\n  .codicon-zoom-in:before {\n    content: \"\\eb81\";\n  }\n  .codicon-zoom-out:before {\n    content: \"\\eb82\";\n  }\n  .codicon-list-filter:before {\n    content: \"\\eb83\";\n  }\n  .codicon-list-flat:before {\n    content: \"\\eb84\";\n  }\n  .codicon-list-selection:before {\n    content: \"\\eb85\";\n  }\n  .codicon-selection:before {\n    content: \"\\eb85\";\n  }\n  .codicon-list-tree:before {\n    content: \"\\eb86\";\n  }\n  .codicon-debug-breakpoint-function-unverified:before {\n    content: \"\\eb87\";\n  }\n  .codicon-debug-breakpoint-function:before {\n    content: \"\\eb88\";\n  }\n  .codicon-debug-breakpoint-function-disabled:before {\n    content: \"\\eb88\";\n  }\n  .codicon-debug-stackframe-active:before {\n    content: \"\\eb89\";\n  }\n  .codicon-circle-small-filled:before {\n    content: \"\\eb8a\";\n  }\n  .codicon-debug-stackframe-dot:before {\n    content: \"\\eb8a\";\n  }\n  .codicon-terminal-decoration-mark:before {\n    content: \"\\eb8a\";\n  }\n  .codicon-debug-stackframe:before {\n    content: \"\\eb8b\";\n  }\n  .codicon-debug-stackframe-focused:before {\n    content: \"\\eb8b\";\n  }\n  .codicon-debug-breakpoint-unsupported:before {\n    content: \"\\eb8c\";\n  }\n  .codicon-symbol-string:before {\n    content: \"\\eb8d\";\n  }\n  .codicon-debug-reverse-continue:before {\n    content: \"\\eb8e\";\n  }\n  .codicon-debug-step-back:before {\n    content: \"\\eb8f\";\n  }\n  .codicon-debug-restart-frame:before {\n    content: \"\\eb90\";\n  }\n  .codicon-debug-alt:before {\n    content: \"\\eb91\";\n  }\n  .codicon-call-incoming:before {\n    content: \"\\eb92\";\n  }\n  .codicon-call-outgoing:before {\n    content: \"\\eb93\";\n  }\n  .codicon-menu:before {\n    content: \"\\eb94\";\n  }\n  .codicon-expand-all:before {\n    content: \"\\eb95\";\n  }\n  .codicon-feedback:before {\n    content: \"\\eb96\";\n  }\n  .codicon-git-pull-request-reviewer:before {\n    content: \"\\eb96\";\n  }\n  .codicon-group-by-ref-type:before {\n    content: \"\\eb97\";\n  }\n  .codicon-ungroup-by-ref-type:before {\n    content: \"\\eb98\";\n  }\n  .codicon-account:before {\n    content: \"\\eb99\";\n  }\n  .codicon-git-pull-request-assignee:before {\n    content: \"\\eb99\";\n  }\n  .codicon-bell-dot:before {\n    content: \"\\eb9a\";\n  }\n  .codicon-debug-console:before {\n    content: \"\\eb9b\";\n  }\n  .codicon-library:before {\n    content: \"\\eb9c\";\n  }\n  .codicon-output:before {\n    content: \"\\eb9d\";\n  }\n  .codicon-run-all:before {\n    content: \"\\eb9e\";\n  }\n  .codicon-sync-ignored:before {\n    content: \"\\eb9f\";\n  }\n  .codicon-pinned:before {\n    content: \"\\eba0\";\n  }\n  .codicon-github-inverted:before {\n    content: \"\\eba1\";\n  }\n  .codicon-server-process:before {\n    content: \"\\eba2\";\n  }\n  .codicon-server-environment:before {\n    content: \"\\eba3\";\n  }\n  .codicon-pass:before {\n    content: \"\\eba4\";\n  }\n  .codicon-issue-closed:before {\n    content: \"\\eba4\";\n  }\n  .codicon-stop-circle:before {\n    content: \"\\eba5\";\n  }\n  .codicon-play-circle:before {\n    content: \"\\eba6\";\n  }\n  .codicon-record:before {\n    content: \"\\eba7\";\n  }\n  .codicon-debug-alt-small:before {\n    content: \"\\eba8\";\n  }\n  .codicon-vm-connect:before {\n    content: \"\\eba9\";\n  }\n  .codicon-cloud:before {\n    content: \"\\ebaa\";\n  }\n  .codicon-merge:before {\n    content: \"\\ebab\";\n  }\n  .codicon-export:before {\n    content: \"\\ebac\";\n  }\n  .codicon-graph-left:before {\n    content: \"\\ebad\";\n  }\n  .codicon-magnet:before {\n    content: \"\\ebae\";\n  }\n  .codicon-notebook:before {\n    content: \"\\ebaf\";\n  }\n  .codicon-redo:before {\n    content: \"\\ebb0\";\n  }\n  .codicon-check-all:before {\n    content: \"\\ebb1\";\n  }\n  .codicon-pinned-dirty:before {\n    content: \"\\ebb2\";\n  }\n  .codicon-pass-filled:before {\n    content: \"\\ebb3\";\n  }\n  .codicon-circle-large-filled:before {\n    content: \"\\ebb4\";\n  }\n  .codicon-circle-large:before {\n    content: \"\\ebb5\";\n  }\n  .codicon-circle-large-outline:before {\n    content: \"\\ebb5\";\n  }\n  .codicon-combine:before {\n    content: \"\\ebb6\";\n  }\n  .codicon-gather:before {\n    content: \"\\ebb6\";\n  }\n  .codicon-table:before {\n    content: \"\\ebb7\";\n  }\n  .codicon-variable-group:before {\n    content: \"\\ebb8\";\n  }\n  .codicon-type-hierarchy:before {\n    content: \"\\ebb9\";\n  }\n  .codicon-type-hierarchy-sub:before {\n    content: \"\\ebba\";\n  }\n  .codicon-type-hierarchy-super:before {\n    content: \"\\ebbb\";\n  }\n  .codicon-git-pull-request-create:before {\n    content: \"\\ebbc\";\n  }\n  .codicon-run-above:before {\n    content: \"\\ebbd\";\n  }\n  .codicon-run-below:before {\n    content: \"\\ebbe\";\n  }\n  .codicon-notebook-template:before {\n    content: \"\\ebbf\";\n  }\n  .codicon-debug-rerun:before {\n    content: \"\\ebc0\";\n  }\n  .codicon-workspace-trusted:before {\n    content: \"\\ebc1\";\n  }\n  .codicon-workspace-untrusted:before {\n    content: \"\\ebc2\";\n  }\n  .codicon-workspace-unknown:before {\n    content: \"\\ebc3\";\n  }\n  .codicon-terminal-cmd:before {\n    content: \"\\ebc4\";\n  }\n  .codicon-terminal-debian:before {\n    content: \"\\ebc5\";\n  }\n  .codicon-terminal-linux:before {\n    content: \"\\ebc6\";\n  }\n  .codicon-terminal-powershell:before {\n    content: \"\\ebc7\";\n  }\n  .codicon-terminal-tmux:before {\n    content: \"\\ebc8\";\n  }\n  .codicon-terminal-ubuntu:before {\n    content: \"\\ebc9\";\n  }\n  .codicon-terminal-bash:before {\n    content: \"\\ebca\";\n  }\n  .codicon-arrow-swap:before {\n    content: \"\\ebcb\";\n  }\n  .codicon-copy:before {\n    content: \"\\ebcc\";\n  }\n  .codicon-person-add:before {\n    content: \"\\ebcd\";\n  }\n  .codicon-filter-filled:before {\n    content: \"\\ebce\";\n  }\n  .codicon-wand:before {\n    content: \"\\ebcf\";\n  }\n  .codicon-debug-line-by-line:before {\n    content: \"\\ebd0\";\n  }\n  .codicon-inspect:before {\n    content: \"\\ebd1\";\n  }\n  .codicon-layers:before {\n    content: \"\\ebd2\";\n  }\n  .codicon-layers-dot:before {\n    content: \"\\ebd3\";\n  }\n  .codicon-layers-active:before {\n    content: \"\\ebd4\";\n  }\n  .codicon-compass:before {\n    content: \"\\ebd5\";\n  }\n  .codicon-compass-dot:before {\n    content: \"\\ebd6\";\n  }\n  .codicon-compass-active:before {\n    content: \"\\ebd7\";\n  }\n  .codicon-azure:before {\n    content: \"\\ebd8\";\n  }\n  .codicon-issue-draft:before {\n    content: \"\\ebd9\";\n  }\n  .codicon-git-pull-request-closed:before {\n    content: \"\\ebda\";\n  }\n  .codicon-git-pull-request-draft:before {\n    content: \"\\ebdb\";\n  }\n  .codicon-debug-all:before {\n    content: \"\\ebdc\";\n  }\n  .codicon-debug-coverage:before {\n    content: \"\\ebdd\";\n  }\n  .codicon-run-errors:before {\n    content: \"\\ebde\";\n  }\n  .codicon-folder-library:before {\n    content: \"\\ebdf\";\n  }\n  .codicon-debug-continue-small:before {\n    content: \"\\ebe0\";\n  }\n  .codicon-beaker-stop:before {\n    content: \"\\ebe1\";\n  }\n  .codicon-graph-line:before {\n    content: \"\\ebe2\";\n  }\n  .codicon-graph-scatter:before {\n    content: \"\\ebe3\";\n  }\n  .codicon-pie-chart:before {\n    content: \"\\ebe4\";\n  }\n  .codicon-bracket:before {\n    content: \"\\eb0f\";\n  }\n  .codicon-bracket-dot:before {\n    content: \"\\ebe5\";\n  }\n  .codicon-bracket-error:before {\n    content: \"\\ebe6\";\n  }\n  .codicon-lock-small:before {\n    content: \"\\ebe7\";\n  }\n  .codicon-azure-devops:before {\n    content: \"\\ebe8\";\n  }\n  .codicon-verified-filled:before {\n    content: \"\\ebe9\";\n  }\n  .codicon-newline:before {\n    content: \"\\ebea\";\n  }\n  .codicon-layout:before {\n    content: \"\\ebeb\";\n  }\n  .codicon-layout-activitybar-left:before {\n    content: \"\\ebec\";\n  }\n  .codicon-layout-activitybar-right:before {\n    content: \"\\ebed\";\n  }\n  .codicon-layout-panel-left:before {\n    content: \"\\ebee\";\n  }\n  .codicon-layout-panel-center:before {\n    content: \"\\ebef\";\n  }\n  .codicon-layout-panel-justify:before {\n    content: \"\\ebf0\";\n  }\n  .codicon-layout-panel-right:before {\n    content: \"\\ebf1\";\n  }\n  .codicon-layout-panel:before {\n    content: \"\\ebf2\";\n  }\n  .codicon-layout-sidebar-left:before {\n    content: \"\\ebf3\";\n  }\n  .codicon-layout-sidebar-right:before {\n    content: \"\\ebf4\";\n  }\n  .codicon-layout-statusbar:before {\n    content: \"\\ebf5\";\n  }\n  .codicon-layout-menubar:before {\n    content: \"\\ebf6\";\n  }\n  .codicon-layout-centered:before {\n    content: \"\\ebf7\";\n  }\n  .codicon-target:before {\n    content: \"\\ebf8\";\n  }\n  .codicon-indent:before {\n    content: \"\\ebf9\";\n  }\n  .codicon-record-small:before {\n    content: \"\\ebfa\";\n  }\n  .codicon-error-small:before {\n    content: \"\\ebfb\";\n  }\n  .codicon-terminal-decoration-error:before {\n    content: \"\\ebfb\";\n  }\n  .codicon-arrow-circle-down:before {\n    content: \"\\ebfc\";\n  }\n  .codicon-arrow-circle-left:before {\n    content: \"\\ebfd\";\n  }\n  .codicon-arrow-circle-right:before {\n    content: \"\\ebfe\";\n  }\n  .codicon-arrow-circle-up:before {\n    content: \"\\ebff\";\n  }\n  .codicon-layout-sidebar-right-off:before {\n    content: \"\\ec00\";\n  }\n  .codicon-layout-panel-off:before {\n    content: \"\\ec01\";\n  }\n  .codicon-layout-sidebar-left-off:before {\n    content: \"\\ec02\";\n  }\n  .codicon-blank:before {\n    content: \"\\ec03\";\n  }\n  .codicon-heart-filled:before {\n    content: \"\\ec04\";\n  }\n  .codicon-map:before {\n    content: \"\\ec05\";\n  }\n  .codicon-map-horizontal:before {\n    content: \"\\ec05\";\n  }\n  .codicon-fold-horizontal:before {\n    content: \"\\ec05\";\n  }\n  .codicon-map-filled:before {\n    content: \"\\ec06\";\n  }\n  .codicon-map-horizontal-filled:before {\n    content: \"\\ec06\";\n  }\n  .codicon-fold-horizontal-filled:before {\n    content: \"\\ec06\";\n  }\n  .codicon-circle-small:before {\n    content: \"\\ec07\";\n  }\n  .codicon-bell-slash:before {\n    content: \"\\ec08\";\n  }\n  .codicon-bell-slash-dot:before {\n    content: \"\\ec09\";\n  }\n  .codicon-comment-unresolved:before {\n    content: \"\\ec0a\";\n  }\n  .codicon-git-pull-request-go-to-changes:before {\n    content: \"\\ec0b\";\n  }\n  .codicon-git-pull-request-new-changes:before {\n    content: \"\\ec0c\";\n  }\n  .codicon-search-fuzzy:before {\n    content: \"\\ec0d\";\n  }\n  .codicon-comment-draft:before {\n    content: \"\\ec0e\";\n  }\n  .codicon-send:before {\n    content: \"\\ec0f\";\n  }\n  .codicon-sparkle:before {\n    content: \"\\ec10\";\n  }\n  .codicon-insert:before {\n    content: \"\\ec11\";\n  }\n  .codicon-mic:before {\n    content: \"\\ec12\";\n  }\n  .codicon-thumbsdown-filled:before {\n    content: \"\\ec13\";\n  }\n  .codicon-thumbsup-filled:before {\n    content: \"\\ec14\";\n  }\n  .codicon-coffee:before {\n    content: \"\\ec15\";\n  }\n  .codicon-snake:before {\n    content: \"\\ec16\";\n  }\n  .codicon-game:before {\n    content: \"\\ec17\";\n  }\n  .codicon-vr:before {\n    content: \"\\ec18\";\n  }\n  .codicon-chip:before {\n    content: \"\\ec19\";\n  }\n  .codicon-piano:before {\n    content: \"\\ec1a\";\n  }\n  .codicon-music:before {\n    content: \"\\ec1b\";\n  }\n  .codicon-mic-filled:before {\n    content: \"\\ec1c\";\n  }\n  .codicon-repo-fetch:before {\n    content: \"\\ec1d\";\n  }\n  .codicon-copilot:before {\n    content: \"\\ec1e\";\n  }\n  .codicon-lightbulb-sparkle:before {\n    content: \"\\ec1f\";\n  }\n  .codicon-robot:before {\n    content: \"\\ec20\";\n  }\n  .codicon-sparkle-filled:before {\n    content: \"\\ec21\";\n  }\n  .codicon-diff-single:before {\n    content: \"\\ec22\";\n  }\n  .codicon-diff-multiple:before {\n    content: \"\\ec23\";\n  }\n  .codicon-surround-with:before {\n    content: \"\\ec24\";\n  }\n  .codicon-share:before {\n    content: \"\\ec25\";\n  }\n  .codicon-git-stash:before {\n    content: \"\\ec26\";\n  }\n  .codicon-git-stash-apply:before {\n    content: \"\\ec27\";\n  }\n  .codicon-git-stash-pop:before {\n    content: \"\\ec28\";\n  }\n  .codicon-vscode:before {\n    content: \"\\ec29\";\n  }\n  .codicon-vscode-insiders:before {\n    content: \"\\ec2a\";\n  }\n  .codicon-code-oss:before {\n    content: \"\\ec2b\";\n  }\n  .codicon-run-coverage:before {\n    content: \"\\ec2c\";\n  }\n  .codicon-run-all-coverage:before {\n    content: \"\\ec2d\";\n  }\n  .codicon-coverage:before {\n    content: \"\\ec2e\";\n  }\n  .codicon-github-project:before {\n    content: \"\\ec2f\";\n  }\n  .codicon-map-vertical:before {\n    content: \"\\ec30\";\n  }\n  .codicon-fold-vertical:before {\n    content: \"\\ec30\";\n  }\n  .codicon-map-vertical-filled:before {\n    content: \"\\ec31\";\n  }\n  .codicon-fold-vertical-filled:before {\n    content: \"\\ec31\";\n  }\n  .codicon-go-to-search:before {\n    content: \"\\ec32\";\n  }\n  .codicon-percentage:before {\n    content: \"\\ec33\";\n  }\n  .codicon-sort-percentage:before {\n    content: \"\\ec33\";\n  }\n  .codicon-attach:before {\n    content: \"\\ec34\";\n  }\n  .codicon-go-to-editing-session:before {\n    content: \"\\ec35\";\n  }\n  .codicon-edit-session:before {\n    content: \"\\ec36\";\n  }\n  .codicon-code-review:before {\n    content: \"\\ec37\";\n  }\n  .codicon-copilot-warning:before {\n    content: \"\\ec38\";\n  }\n  .codicon-python:before {\n    content: \"\\ec39\";\n  }\n  .codicon-git-fetch:before {\n    content: \"\\f101\";\n  }\n  .kol-input {\n    background-color: transparent;\n    height: calc(40 * 1rem / var(--kolibri-root-font-size, 16));\n    padding: 0 calc(10 * 1rem / var(--kolibri-root-font-size, 16));\n    border: none;\n  }\n  .kol-input::-moz-placeholder {\n    color: var(--color-subtle);\n  }\n  .kol-input::placeholder {\n    color: var(--color-subtle);\n  }\n  .kol-input:focus {\n    outline: none;\n  }\n  .kol-input-container {\n    padding: 0;\n    gap: 0;\n    grid-template-columns: auto max-content min-content;\n  }\n  .kol-input-container__adornment {\n    position: absolute;\n    top: calc(-2 * 1rem / var(--kolibri-root-font-size, 16));\n    bottom: calc(-2 * 1rem / var(--kolibri-root-font-size, 16));\n  }\n  .kol-input-container__adornment--start {\n    left: 0;\n  }\n  .kol-input-container__adornment--end {\n    right: 0;\n  }\n  .kol-input-container:has(.kol-input-container__adornment--start:not(:empty)) .kol-input {\n    padding-left: calc(48 * 1rem / var(--kolibri-root-font-size, 16));\n  }\n  .kol-input-container:has(.kol-input-container__adornment--start .kol-input-container__smart-button + .kol-input-container__icon) .kol-input {\n    padding-left: calc(76 * 1rem / var(--kolibri-root-font-size, 16));\n  }\n  .kol-input-container:has(.kol-input-container__adornment--end:not(:empty)) .kol-input {\n    padding-right: calc(48 * 1rem / var(--kolibri-root-font-size, 16));\n  }\n  .kol-input-container:has(.kol-input-container__adornment--end .kol-input-container__icon + .kol-input-container__smart-button) .kol-input {\n    padding-right: calc(76 * 1rem / var(--kolibri-root-font-size, 16));\n  }\n}";


[showing lines 20-20 of 20; full output saved to /Users/p.dijon.de.monteton/.local/share/opencode/shell/0652865c1e38e197ad37148c7853f972bd77a86e/sh_0f7987d7a002bU6P6Ksh23T0nz.out]

---

## Assistant

_Thinking:_

I have enough info. Let me now check how the React wrapper handles `_on` object props — `attachProps` sets `node[name] = newProps[name]` for non-event props, so `_on` object gets set as a property. Good.

One important thing: the React wrapper's `render()` filters props: only string/boolean/number are passed to createElement as dashed attributes; objects like `_on` and `_msg` are NOT passed to createElement but ARE applied in `componentDidUpdate` via `attachProps` (which iterates all `this.props`). Wait — `attachProps(this.componentEl, this.props, prevProps)` uses full props, so objects work.

Actually careful: `attachProps` sets `node[name] = newProps[name]` for all keys except children/style/ref/class/className/forwardedRef. So `_on` (object) → `node._on = {...}` — good, property assignment triggers Stencil prop setter.

But note: for object props, `propType` is not string so no setAttribute. Good.

Also important: `_msg` object — passed as `node._msg = value`. Good.

Now, key design decisions:

**Component structure:**
- `KolCard` wrapping the login form (label + level for heading) — or `KolHeading`. Let's use `KolCard` with `_label="Anmelden"` and `_level={2}`.
- `KolForm` with `_on={{ onSubmit }}` and `_errorList`.
- `KolInputText` for username with `_label`, `_name`, `_required`, `_autoComplete="username"`, `_value`, `_on={{ onChange/onInput }}`, `_msg`, `_touched`.
- `KolInputPassword` for password with `_visibilityToggle`, `_autoComplete="current-password"`.
- `KolButton` `_type="submit"` `_variant="primary"`.
- `KolAlert` for form-level status message (`_alert` for role=alert, `_type` success/error).

**Important findings to report:**

1. Available components: KolForm, KolInputText, KolInputPassword, KolButton, KolAlert, KolCard, KolHeading.

2. Critical: KoliBri inputs only render `_msg` when `_touched === true` (`isMsgDefinedAndInputTouched`). So error messages won't show until touched. The component sets `_touched = true` internally on blur. So we must either rely on blur, or set `_touched` explicitly after submit. I'll set `_touched` explicitly on submit attempt — that's the reliable approach.

Note: there's a subtlety — `attachProps` on componentDidUpdate sets `node._touched = props._touched` on every update. The component internally sets `_touched = true` on blur which mutates `this.component._touched`... wait, `this.component._touched = true` where `this.component` is the Stencil component instance (host element property). If React then re-renders with `_touched={false}`, it would reset it. So controlling `_touched` fully in React state is the safe approach: set touched=true on blur (via `_on.onBlur`) and on submit.

Hmm, but onBlur callback — `InputTypeOnDefault` has `onBlur?: EventCallback<Event>`. Good.

Actually simpler: track `touched` per field in React state; set true on blur and on submit. Pass `_touched={touched.field}`.

3. `_msg` type: `{ _description: string, _type: 'error' | 'info' | 'success' | 'warning' | 'default', _alert?: boolean }`. Rendering: `FormFieldMsgFc` renders a KolAlert with `role="alert"` if `alert` true. The `alert` prop comes from `showAsAlert()` = `touched && !inputHasFocus`, plus `message._alert`. So it gets role=alert automatically when touched and not focused. 

4. `aria-invalid` is set when `hasError` = msg type error && touched.

5. `aria-describedby` includes msg id.

6. Error list on KolForm: `_errorList: {message, selector}[]`. IMPORTANT BUG/LIMITATION: `validateErrorList` only accepts items that are **strings or functions** — `value.find(v => !(typeof v === 'string' || typeof v === 'function')) === undefined`. So passing `{message, selector}` objects will fail validation (logWarn) and... wait, does it reject? Let's re-read:

```js
watchValidator(component, 'errorList', (value) => Array.isArray(value) && value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined, new Set(['string', 'function']), value);
```

So validation passes only if every item is a string or function. But `renderErrorList` accesses `error.message` and `error.selector`. So the type declares `ErrorListPropType[]` = `{message, selector, options}[]` but the validator rejects objects! That's an inconsistency. If it fails validation, `setState` is not called → `_errorList` state never set → but `render()` uses `this._errorList` directly (not state!): `const hasErrorList = Array.isArray(this._errorList) && this._errorList.length > 0` and `renderErrorList(this._errorList)`. So it renders from the raw prop regardless of validation. Validation only affects `state._errorList` which isn't used in render.So `_errorList` with objects WILL render. The validator just logs a dev warning. Good — but worth noting as uncertainty.

Hmm wait, but does Stencil re-render when `_errorList` prop changes? It's a `@Prop()`, so yes.

Actually careful: does `_errorList` have `reflect: false` and is it a plain prop? From lazy-load metadata: `"_errorList":[16]` — type 16 = object/array. Prop change triggers re-render. Good.

So I can use `_errorList` for a form-level error summary with links that focus the fields via `document.querySelector(selector)`. The selector needs to target an element with an id. KoliBri inputs generate internal `_id` — do they accept an `id` attribute? Let's check: KolInputText interface has no `_id`. But the React wrapper passes `id` attribute through? `attachProps`: for name `id` — not starting with "on", so `node["id"] = value` and `node.setAttribute("id", value)`. So we can set `id="login-username"` on the host element `kol-input-text`. Then `document.querySelector('#login-username')` finds the host element. But `handleLinkClick` does `targetElement.focus(options)` — does the host `<kol-input-text>` have a `focus()` method? Yes! `focus: (options?: KolFocusOptions) => Promise<void>` is in the interface. 

But careful: `handleLinkClick` calls `targetElement.focus(options ? options : this.scrollOptionsFallback)` where options = `{behavior:'smooth', block:'nearest'}`. KolFocusOptions accepts those. Fine.

Hmm, but does setting `id` on the host conflict? The host id is separate from internal input id. `document.querySelector('#login-username')` → host element → `.focus()` method exists → focuses internal input. 

Actually wait — will React pass `id`? In `render()`, `cProps` includes `id` (string) → `acc[camelToDashCase('id')] = 'id'` → createElement with `id`. React sets attribute `id` on the custom element. Yes.

Also `attachProps` sets `node["id"] = 'login-username'`. Fine.

Hmm, but there's a risk: does KoliBri's `validateId` exist for input-text? Not in the watchers list for kol-input-text (no `_id` prop). So the host `id` is untouched by Stencil. Good.

Actually hold on — I should double check whether the internal `_id` gets generated and whether host id matters. It doesn't.

7. **Submit flow**: `KolButton _type="submit"` inside `KolForm` → `propagateSubmitEventToForm` finds the KOL-FORM ancestor → calls `kolForm._on.onSubmit(event)` directly (for KOL-FORM tag) via setTimeout. Also Enter key in input triggers the same. So `_on.onSubmit` on KolForm is the right handler.

But wait — does the button's searchFormElement find KOL-FORM? `searchFormElement` walks up `parentElement` until tagName === 'FORM' or 'KOL-FORM'. The button is a light-DOM child of `<kol-form>` (React renders children into the KolForm's slot). So parentElement chain: `kol-button` → ... → `kol-form`. Actually the button host is `<kol-button>`, its parentElement is `<kol-form>`. tagName 'KOL-FORM' → stop. 

Then `form.tagName === KolFormTag.toUpperCase()` → calls `kolForm._on.onSubmit(event)`. But `kolForm._on` — this accesses the DOM element's `_on` property, which React set via attachProps. Good.

Hmm, but `setEventTarget(event, KoliBriDevHelper.querySelector('form', form))` — fine.

Note: for the KOL-FORM branch, it does NOT call preventDefault on a native form submit... Actually the `<form>` inside shadow DOM has `onSubmit` → `event.preventDefault()` then calls `_on.onSubmit`. But the button's propagate path calls `kolForm._on.onSubmit(event)` directly without going through the native form. Since the button is NOT inside the shadow `<form>` (it's slotted... wait, `<form method="post" ...><slot/></form>` — the slot distributes light DOM children INTO the form). So `<kol-button>` IS inside the form in the flattened tree. A `<button type="submit">` inside a form would natively submit the form too!

Hmm. `kol-button` renders `<button type="submit">` inside its shadow DOM. Native form submission: the button is inside `kol-form`'s shadow `<form>` via slot. Does the shadow `<button>` submit the form? The `form` owner of a shadow `<button>` — form association goes through the flattened tree? Actually form owner is determined by ancestor in the node tree (shadow tree doesn't cross to outer form by default)... Elements in shadow DOM are associated with forms via `form` attribute or the tree; a shadow tree's `<button>`'s form owner is computed from its shadow tree ancestors — there's no `<form>` in kol-button's shadow tree, so no form owner. So native submit doesn't happen. That's why KoliBri explicitly propagates. OK.

But ALSO: pressing Enter in the input — `propagateSubmitEventToForm` is called explicitly. And the input is inside the form (slotted) so native implicit submission might also fire. Hmm, `input` in shadow DOM of kol-input-text: its form owner — same reasoning, no `<form>` in kol-input-text's shadow tree. Actually the input is rendered in kol-input-text's shadow root. So no form owner → no native submission. KoliBri handles it explicitly. Good.

Could we get double calls? Enter → propagate → `_on.onSubmit`. Native? no. Button click → propagate → `_on.onSubmit`. Fine.

Let me just be safe and not worry.

8. **`_requiredText`**: KolForm default `_requiredText = true` shows a "mandatory fields" hint paragraph. We can leave it or set `_requiredText={false}`. I'll keep default (it's a nice a11y hint) — actually it shows translated text `kol-form-description`. Keep it simple: leave default.

Hmm, but it says "mandatory fields hint" — appropriate since fields are required. Keep default.

9. **Success feedback**: `KolAlert` with `_alert` (role=alert) `_type="success"` `_variant="msg"`. Note `_alert` auto-resets to false after 10s via `handleAlertTimeout` (only in kol-alert-wc... the wrapper `kol-alert` passes `_alert` through; `kol-alert-wc` has `onAlertTimeout: this.handleAlertTimeout` → `validateAlert(false)`). So role="alert" is removed after 10 seconds. That's fine/intentional.

Actually careful: if we keep `_alert={true}` as a React prop, React re-sets it on each render... only when props change (componentDidUpdate runs on every re-render of the React component). Actually `componentDidUpdate` is called whenever the parent re-renders. `attachProps` sets `node._alert = true` again → triggers `validateAlert` watcher → state `_alert` true → role=alert again. Could cause re-announcement. Minor. Use a `key` to remount when message changes — better pattern for live regions.

Let me use `key` on the alert so a new element is created for each new status → announced once.

Hmm, but if we set `key`, React unmounts/remounts → fresh element → `_alert=true` → role=alert with content → announced. Good.

10. **Focus management on submit with errors**: `KolForm.focusErrorList()` — but our React ref to KolForm... The React wrapper supports `forwardRef` → gives us the host element `HTMLKolFormElement` which has `focusErrorList()`. 

But careful — does the ref type include `focusErrorList`? `JSX.KolForm` includes it. Yes: `"focusErrorList": (options?: KolFocusOptions) => Promise<void>`.

Actually simpler and more robust: focus the first invalid field directly. We have refs to inputs (`HTMLKolInputTextElement.focus()`).

Hmm, but which is more "standard"? Error summary + focus first invalid field. I'll do: focus first invalid input on failed submit.

Wait — but KoliBri's `_errorList` with links is a nice accessible pattern. Let me use both: `_errorList` for the summary, and focus the first invalid field.

Actually, focusing the error list is the WCAG-recommended pattern for error summaries. Let me use `focusErrorList()` when there are errors... but `_errorList` items must have `selector` as a string that `document.querySelector` can find. We'll use `#login-username` etc.

Hmm, but there's the validation issue: `validateErrorList` will log a dev warning because objects aren't strings/functions. Let me reconsider...

Wait, re-read: `value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined` — this requires ALL items be string or function. An object item → find returns it → not undefined → validation fails → logWarn (devHint, only logs in dev via Log.debug).

But render uses raw `this._errorList`. So it works, just logs a warning. Hmm, that's ugly.

Hmm, but actually — is `renderErrorList` given `this._errorList` or `this.state._errorList`? Line: `render() { const hasErrorList = Array.isArray(this._errorList) && ...; hasErrorList && this.renderErrorList(this._errorList) }` — uses `this._errorList` (the raw prop). So objects work.

But TS type says `ErrorListPropType[]` = `{message, selector, options?}[]`. So TypeScript is happy; runtime validator complains but render works. This is a real API inconsistency worth documenting.

Hmm, actually wait. Let me reconsider: maybe passing objects is correct and the validator is buggy/legacy. The `.d.ts` type is authoritative for us. I'll use objects and note the discrepancy.

Hmm, but do I want a dev console warning? Alternative: don't use `_errorList` at all; build our own summary with `KolAlert` + `KolLink`/`KolButtonLink`. That's more code but no warnings.

Let me think about what's cleanest. Given "small accessible login feature", I think:
- Per-field `_msg` (primary validation feedback, with aria-describedby/aria-invalid built in)
- Form-level `KolAlert` with `_alert` for status (success / invalid credentials)
- Use `_errorList` on KolForm for the error summary with focusable links — this is the KoliBri-native accessible pattern.

I'll include `_errorList` since it gives focusErrorList. But the warning concern...

Actually, let me test it. I could run a quick build/typecheck at least. Let me just implement and run `tsc -b` and `eslint`.

Actually — I can't easily test runtime without a browser. Let me be pragmatic: use `_errorList` (it's the documented typed API), and mention the validator discrepancy as an uncertainty.

Hmm, alternatively I can avoid the risk: skip `_errorList`, and instead on failed submit focus the first invalid field (refs). Simpler, fully reliable, no API risk. And show per-field messages + a form-level alert.

Let me reconsider the requirement: "Validation feedback" + "error handling". Per-field messages + form-level alert satisfies this. But the error summary with links is a strong a11y pattern...

I'll include `_errorList` because it's KoliBri's purpose-built accessible mechanism, AND document the validator quirk. Actually no — if it logs warnings or worse behaves unexpectedly, that's bad. Let me verify the validator behavior more concretely... I already did: `watchValidator` → validationFunction fails → `logWarn` → `devHint` → `Log.debug`. Let me check Log.debug — does it print in production?

Let me check quickly.

Actually, let's do a quick sanity check by actually running the dev server and using a headless check? Too heavy.

Let me check Log.debug.

Let me do one more grep.

Actually, I realize I should just make a decision and implement. Let me check Log quickly, then decide.

Let me also double-check: does `_errorList` accept `selector` as string like `#id`? `handleLinkClick` does `document.querySelector(selector)`. The `id` must be in the document — our host elements are. But wait: the host `<kol-input-text id="login-username">` — does it have a `focus()` method? Yes per types.

Hmm, but `targetElement.focus(options)` where options = `{behavior: 'smooth', block: 'nearest'}`. The component's `focus(options?: KolFocusOptions)` accepts those. Good.

OK let me check Log.debug then implement.

Let me be efficient — one shell call.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn -A25 \"class Log\\|const Log = \\|debug(\" node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js | grep -n \"debug\\|isServer\\|console\\|LOG\" | head -30; echo '=== search Log object ==='; grep -rn -B2 -A20 \"const Log = {\" node_modules/@public-ui/components/dist/esm/*.js | head -40"
}
```

5:node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js:596:    debug(msg, options) {
7:node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js:598:            console.debug(...getShield(this.label, options), ...mapToArray(msg));
12:node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-603-            console.info(...getShield(this.label, options), ...mapToArray(msg));
17:node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-608-            console.trace(...getShield(this.label, options), ...mapToArray(msg));
22:node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-613-            console.warn(...getShield(this.label, options), ...mapToArray(msg));
26:node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-617-        console.error(...getShield(this.label, options), ...mapToArray(msg));
40:node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js:631:        Log.debug([msg].concat([]), {
62:node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js:653:        Log.debug([msg].concat((options === null || options === void 0 ? void 0 : options.details) || []), {
84:node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js:675:        Log.debug([msg].concat([]), {
96:node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js:687:        Log.debug([msg].concat([]), {
123:node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js:1398:        Log.debug([event, target]);
124:node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js:1399:        Log.debug(`↑ We propagate the (submit) event to this target.`);
151:node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js:1496:                            Log.debug(invalid);
158:node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js:1503:                        Log.debug(value);
164:node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js:1509:                Log.debug(error);
191:node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js:1673:                    Log.debug(`[KoliBriUtils] Color contrast analysis started...`);
218:node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js:1716:            Log.debug(`[KoliBriUtils] Call aborted because a color contrast analysis is currently being executed.`);
222:node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js:1720:                Log.debug(`[KoliBriUtils] Color contrast analysis finished (${KoliBriUtils.cache.size} DOM elements are analysed).`);
=== search Log object ===


---

## Assistant

_Thinking:_

I have enough understanding. Let me now check the React wrapper's `attachProps` behavior for object props like `_on` and `_msg`: it sets `node[name] = newProps[name]` for non-"on..." props. `_on` starts with `_`, so `name.indexOf("on") === 0` is false → sets `node["_on"] = value`. Good — object props get set as element properties. Good.

But note: in `render()`, props are filtered: only string/boolean/number are passed to createElement (as dashed attributes), and event props. So `_on` object won't be passed to createElement but will be applied in componentDidUpdate via attachProps. Wait — `componentDidUpdate(prevProps)` calls `attachProps(this.componentEl, this.props, prevProps)` with full this.props. So `_on` and `_msg` objects are applied as properties. Good.

Important caveat: attachProps applies `node[name] = newProps[name]` for every prop on every update. That's fine.

Also note `attachProps` for props named starting with "on" + uppercase letter → syncEvent as DOM listener. `_on` doesn't match. Fine.

Another caveat: `_msg` is an object; Stencil `validateMsg` uses `parseJson`... objectObjectHandler allows object. Fine.

Now `_touched`: if we don't pass `_touched`, the component sets `this.component._touched = true` internally on blur. But since we're controlling, better to pass `_touched` explicitly as React state so that on submit we can force show errors. But careful: if we pass `_touched`, `attachProps` sets it on every update — and internal onBlur sets it true too. Since we pass a prop, our value wins on next render. So we should set touched=true in our own state on blur too (or on submit). Let's manage `touched` in React state: set true on blur (via `_on.onBlur`) and on submit.

Hmm, but does `_on.onBlur` get called? In FormFieldStateWrapper `onBlur`, it calls `this.component._on.onBlur(event)` if function. Yes.

Actually simpler: track `touched` only via submit; but validation feedback on blur is better UX. Let's do: on blur → touched true for that field; on submit → all touched true.

Wait — there's a subtlety: internal onBlur sets `this.component._touched = true` directly on the component instance. If we also pass `_touched={false}` from React on next render, it would reset to false. So we must ensure our state reflects true after blur. We do handle that.

Hmm, but is `onBlur` in `_on` invoked before or after internal `_touched = true`? It sets `_touched = true` then calls our onBlur. We set state → re-render → attachProps sets `_touched = true`. Consistent.

Careful: does `_on` for input require a specific structure? `InputTypeOnDefault` = onBlur, onClick, onChange, onFocus, onInput, onKeyDown. Good.

Now event value: `onInput(event, value)` — value is `event.target.value`. So `_on: { onInput: (e, value) => setValue(value) }`.

Actually simpler: use `onChange`. `onChange(event, value)`. For controlled inputs, `onInput` fires per keystroke; `onChange` fires on blur/enter for native input? No — in KoliBri, `onInput` on the native input dispatches KolEvent.input; `onChange` dispatches on... let's check. Actually the controller's onChange is called from the input's native change event. For text inputs, native `change` fires on blur. So `onInput` is the right one for controlled updates.

Let's double-check: in kol-input-text.entry.js, `this.onInput = (event) => { this._value = ctaRef.el?.value; this.controller.onFacade.onInput(event); }`. And InputStateWrapper/InputFc presumably binds onInput to native input event. So `_on.onInput(event, value)` fires each keystroke. 

Now, does the component re-render when `_value` prop changes? We pass `_value` each render. attachProps sets `node._value = value` → Stencil watcher validateValue → setState. Should be OK. There may be cursor-jump issues but for a demo it's fine. Actually a safer approach for controlled: keep React state and pass `_value`. KoliBri inputs are "controlled" via `_value`. Let's do that.

Hmm, but there's risk: when user types, internal `this._value` set, our handler sets React state, re-render passes `_value` = same value → watcher runs, setState with same value → fine.

Now the form submit: `KolForm` `_on: { onSubmit: handler }`. Button `_type="submit"` inside form → propagateSubmitEventToForm finds KOL-FORM tag → calls `kolForm._on.onSubmit(event)`. Also Enter key in input → same. And KolForm's internal `<form onSubmit>` also calls `_on.onSubmit` with preventDefault.

Wait — potential double invocation: Button with `_type="submit"` calls propagateSubmitEventToForm, which for KOL-FORM tag calls `kolForm._on.onSubmit(event)` directly (not form.requestSubmit). It does NOT dispatch native submit. So single call. But also, is the button inside the actual `<form>` element? The KolForm renders `<form>` in shadow DOM with a `<slot>`. Our button is slotted into it. A native `<button type="submit">` inside a form would also trigger native form submission... but the button is in the light DOM of kol-form, slotted into the shadow `<form>`. Native form submission would fire the `submit` event on the `<form>` inside shadow DOM → KolForm's onSubmit handler → preventDefault + `_on.onSubmit`. That could double-call!

Hmm. Let's check: kol-button's internal button has `type: this.state._type` = 'submit'. And onClick → propagateSubmitEventToForm. Also the native click on a submit button inside a form triggers form submission.

Actually wait — is the slotted button actually a descendant of the `<form>`? In shadow DOM, slotted content's *flattened tree* parent is the `<form>`. Native form submission algorithm uses the form owner which is determined by... for a button, "form owner" is determined by the nearest ancestor `form` in the *tree* (not flattened tree?) Actually form association uses the element's node tree ancestors AND shadow tree considerations: form owner determination goes up the tree, crossing shadow boundaries only... Per spec, form owner is determined by: if element has `form` attribute, use it; otherwise climb the *shadow-including* ancestor chain? Let me recall: "form owner: return the result of running nearest ancestor form element... " — the algorithm for `form owner` in HTML spec: for form-associated elements, if no `form` attribute, the form owner is the nearest `form` element ancestor **in the tree**... Actually spec says: "If element is a form-associated element, and ... its form owner is the form element that is the nearest ancestor form element, in the tree" — but for elements in shadow trees, there's special handling.

Hmm, actually KoliBri explicitly does `propagateSubmitEventToForm` precisely because this doesn't work across shadow DOM. And they set the `<form noValidate>` with `method="post"`.

Let me check whether KoliBri's button avoids double submission. In `propagateSubmitEventToForm`, for FORM tag it calls `form.requestSubmit()` in setTimeout. For KOL-FORM it calls `kolForm._on.onSubmit(event)` in setTimeout. It does not preventDefault the click.

The `<kol-button>` host is in light DOM, child of `<kol-form>` host. The internal `<button>` is inside kol-button's shadow root. Its form owner: climbing from the internal button → kol-button shadow root → kol-button host → kol-form host → ... no `<form>` in light DOM. So form owner is null → no native submission. 

And the input's Enter key → `propagateSubmitEventToForm` explicitly. The internal `<input>` in kol-input-text's shadow root also has no form owner. So no double-call. KoliBri handles it manually. Good — single `_on.onSubmit` call.

Hmm, but wait: does KolForm's `<form>` element's own submit event ever fire? Only via requestSubmit from a form-owner element. Since nothing has form owner, no. So `_on.onSubmit` called once. 

Actually — hold on. Does slotted light-DOM content count? `<kol-form>`'s light children (our KolButton wrapper = `<kol-button>` element) are slotted into `<form>`. But `<kol-button>` is not form-associated (it's a custom element without form association... actually Stencil components may use `formAssociated`). The internal `<button>` inside kol-button's shadow root — its ancestors in the tree: button → shadow root → kol-button. Not in the form. So no.

OK, so single call. But to be safe, our handler should be idempotent-ish. Fine.

Now: `_errorList` on KolForm. The type is `ErrorListPropType[]` = `{message, selector, options?}`. But `validateErrorList` requires each item to be a **string or function**! `value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined` — this means all items must be string or function. But `renderErrorList` uses `error.message` and `error.selector`. So passing objects `{message, selector}` will FAIL validation → `logWarn` → state not set.

Wait, but `render()` uses `this._errorList` directly (the raw prop), NOT `this.state._errorList`! Look: `const hasErrorList = Array.isArray(this._errorList) && this._errorList.length > 0;` and `renderErrorList(this._errorList)`. So the validator doesn't matter for rendering — it only warns. Hmm, actually `validateErrorList` calls `watchValidator` which on failure calls `logWarn` → devHint → console.debug. It doesn't clear the prop. So `_errorList` with objects WILL render.

But TypeScript type says `ErrorListPropType[]` = objects. So objects are the documented API. The validator seems buggy/legacy (accepting strings/functions). We'll use objects as typed. There will be a dev console debug warning — acceptable, but let me note it.

Hmm, actually, wait. Let me re-read: does `render()` use `this._errorList` (raw prop) — yes. So it renders regardless. Good.

But careful: does Stencil's `_errorList` prop reflect properly? `"_errorList":[16]` type 16 = object/any. Fine.

Also `handleLinkClick` uses `document.querySelector(selector)` and focuses it. Our inputs are custom elements with generated internal ids. To make selectors work, we need an id on the element. Does KolInputText accept `_id`? Looking at the interface — no `_id` prop for input-text (only `_name`). Hmm. So we can't set the host id via prop... But we CAN pass a plain `id` attribute through React? The React wrapper passes non-"on" props as `node[name] = value` and for strings also `setAttribute(camelToDashCase(name), value)`. `id` → `setAttribute('id', ...)`. But `render()` only passes string/boolean/number to createElement: `acc[camelToDashCase(name)]` → `id` is a string → passed as `id` attribute to the custom element. So `<KolInputText id="login-username" />` sets the host element's id. Then `document.querySelector('#login-username')` finds the host, and `.focus()` on the host calls the component's `focus()` method (it's a method on the element). 

Wait, `handleLinkClick` does `targetElement.focus(options)` where targetElement = `document.querySelector(selector)`. The host `<kol-input-text>` has a `focus()` method. And it accepts KolFocusOptions. 

Hmm but `document.querySelector('#login-username')` — the host element has `id` attribute. Yes.

But hold on: does the KoliBri input's `focus()` method exist? Yes: `"focus": (options?: KolFocusOptions) => Promise<void>`.

Alternatively use `selector` as a function (EventCallback). `typeof error.selector === 'string' ? ... : error.selector` → so we can pass a function directly! That's cleaner and avoids id collisions. Let's use a function that focuses via ref.

Actually `ErrorListPropType.selector: string | EventCallback<Event>`. So a function works. 

Now — should we even use `_errorList`? It renders an error summary card at top of form with links. That's a great accessible pattern (WCAG error summary). Let's use it.

But there's the validator quirk producing a console debug warning. Let's check: `logWarn` → `devHint` → `Log.debug` → `console.debug` only if `DEBUG` mode? Let's check line 596-598: `debug(msg, options) { if (...) { console.debug(...) } }`. Need to see the condition.

Let me just check quickly.

Actually, let's not over-engineer. Let me check the condition.

Also I should double check: does `validateErrorList` failing matter? It just logs. Fine.

Let me check Log.debug guard.

Also need to consider: `_errorList` items with objects — validator fails → `requiredGeneric.add(null)` then logWarn. Only logs.

Hmm, but wait: maybe I should pass strings? `renderErrorList` accesses `error.message` and `error.selector` — for a string, `.message` is undefined → label undefined → KolLink `_label` required... would warn. So objects are correct per render code. The validator is just inconsistent. Use objects.

Let me verify Log.debug guard quickly and then write the code.

Also: focus management on submit failure. `KolForm.focusErrorList()` method exists — focuses the first link in error list (with a 250ms timeout). We can call it via ref. That's the accessible pattern: move focus to error summary.

Let's check: `focusErrorList` → `scrollToErrorList` → setTimeout 250ms → `this.errorListFirstLink.querySelector('a')`.focus(). `setFirstLinkElement` ref is on the KolLinkWc element. So `.querySelector('a')` finds the internal anchor. Good.

So: use a ref to KolForm and call `focusErrorList()` after setting errors.

Wait — does React wrapper support refs? `createForwardRef` → `React.forwardRef`. And `KolForm` is exported via `createForwardRef(ReactComponent, displayName)`. So `ref` gives the host element `HTMLKolFormElement` with `focusErrorList()`. 

But careful: `render()` does `const { children, forwardedRef, style, className, ref, ...cProps } = this.props` and passes `ref: mergeRefs(forwardedRef, this.setComponentElRef)`. So yes.

Hmm, but `attachProps` skips "ref" key. Fine.

Now TypeScript types: `KolForm` is `ForwardRefExoticComponent<JSX.KolForm & ... & RefAttributes<HTMLKolFormElement>>`. So `useRef<HTMLKolFormElement>(null)`.

Now let's plan the component structure:

```
<KolCard _label="Anmelden" _level={2}>   // or heading
  <KolForm ref _errorList={...} _on={{onSubmit}} _requiredText={false}>
    <KolInputText _label="Benutzername" _name="username" _required _autoComplete="username" ... />
    <KolInputPassword _label="Passwort" _name="password" _required _autoComplete="current-password" _visibilityToggle ... />
    <KolButton _type="submit" _label="Anmelden" _variant="primary" />
  </KolForm>
</KolCard>
```

Wait — does KolCard's `_label` become a heading? Yes with `_level`.

Hmm, but does KolForm render a `<slot>` inside `<form>` — our children (KolInputText etc.) are light DOM children of `<kol-form>`, slotted. Yes.

Also `_requiredText` default true shows "mandatory fields" hint. Set to false? The default shows a `<p>` with translated text about mandatory fields. Since we have required fields, it's actually helpful. But it might be redundant. I'll keep default (true) — it's accessible info. Actually the default text `kol-form-description`. Let's leave it.

Hmm, but it adds visual noise. I'll set `_requiredText={false}` and instead use `_hint` on fields? Actually required fields get a visual `*` marker automatically (CSS `.kol-form-field--required ... content: "*"`). Plus screen reader gets `required` attribute. Let's keep `_requiredText` default true — it explains the `*`. That's good a11y. I'll keep it.

Now validation:
- username: required, min length 3? Let's do required + trim. Maybe also check it's a valid... keep simple: required and at least 3 chars.
- password: required and at least 8 chars.

Errors displayed via `_msg` prop: `{_description: '...', _type: 'error'}` and `_touched={true}`.

Note: `showMsg = isMsgDefinedAndInputTouched(msg, touched)` → requires touched === true. So we set `_touched` true on submit for all fields (or per-field once validated).

Also `_msg` with `_type: 'error'` and touched → `hasError` true → `aria-invalid="true"`, `aria-describedby` includes msg id, and `role="alert"` on the msg (because `alert: this.showAsAlert()` = touched && !inputHasFocus... and FormFieldMsgFc uses `message?._alert ?? alert`). We can set `_alert: true` in the msg to force role="alert". Hmm — MsgPropType = `Omit<AlertProps, '_level'|'_on'|'_label'|'_hasCloser'|'_variant'> & {_description: string}`. AlertProps includes `_alert?: boolean`. So `_alert: true` allowed.

But note: role="alert" on an element that's added to DOM triggers announcement. Since we conditionally render msg (it's rendered only when touched && msg defined), adding it with role=alert → announced. Good.

Actually careful: `showAsAlert()` returns `touched && !inputHasFocus`. If user submits via button click, focus is on button, not input → alert true. If submits via Enter in input, input has focus → alert false. So set `_alert: true` explicitly in msg to be safe? But then when user is typing and msg re-renders... msg only shows when touched. Hmm, after first failed submit, touched=true; then user types in the field → onInput → msg still set → re-render with role="alert" already present → no announcement (live regions announce changes to existing regions). Actually content changes in existing role=alert do get announced by most SRs. Could be noisy.

Better UX: clear the field error on input (when user starts correcting). Let's clear error for that field on input. Then msg disappears, and reappears only on next submit. That's clean.

Let's do that.

Also form-level status: success message via `KolAlert` with `_alert` (role=alert) and `_type="success"`. And for invalid credentials (server-side demo), `_type="error"`.

Since there's no backend, simulate: credentials `demo`/`secret123`? Better: accept any non-empty valid input and show success, but also demo an "invalid credentials" path. Let's do: username `demo`, password `kolibri` → success; otherwise "Invalid username or password" as form-level alert. Hmm, that could be confusing.

Alternative: purely client-side validation → success alert "Form submitted successfully (demo)". And if credentials don't match demo → error alert.

I think a clear demo is better: validate format (required, length), then check against demo credentials and show form-level alert. Let's include a hint below the form about demo credentials using `_hint` or a `KolAlert` type="info".

Hmm, "small accessible login feature" — let's keep it focused. I'll do:
- Field validation (required/length) → per-field `_msg`
- On all-valid: simulated auth → success alert or error alert (invalid credentials)
- Demo credentials shown via `KolAlert` `_type="info"` or a `_hint`.

Let's use `KolAlert` `_type="info"` `_variant="msg"` with text "Demo: demo / kolibri".

Now `_errorList`: only pass when there are field errors (submit attempted with errors).

Focus: after failed submit, call `formRef.current?.focusErrorList()`.

Careful: focusErrorList has internal 250ms timeout; also we set `_errorList` in same render. React renders synchronously-ish; the Stencil prop updates on componentDidUpdate of the wrapper... Actually `attachProps` runs in `componentDidUpdate` of the KolForm React wrapper. Our `focusErrorList()` call in a `useEffect` after state change would run after the DOM commit but... order: React commits → runs effect → calls focusErrorList which setTimeouts 250ms → by then componentDidUpdate has run and Stencil has re-rendered (Stencil re-render is async microtask/raf?). Stencil v4 renders async. 250ms should be enough.

But if `_errorList` was empty before and now has items, `render()` needs to run first. Stencil's re-render on prop change is scheduled. 250ms likely fine.

Edge: if errorList unchanged (same array identity but new object each time) — React wrapper sets `node._errorList = newArray` → Stencil watcher `validateErrorList` → on success `setState` → re-render. On failure it just logs and does NOT setState, but prop `this._errorList` is still the raw prop (Stencil stores prop value regardless of validation? Actually `watchValidator` failure means `state._errorList` not updated, but `this._errorList` is the raw prop). render uses `this._errorList` (raw). But does Stencil re-render when a prop changes even if validation "fails"? Stencil re-renders on any prop change (dirty checking) — yes, prop setters mark component dirty. Actually Stencil's `@Prop()` setter calls `this['v']` ... it triggers re-render. Validation is separate. So re-render happens.

Hmm, but if validator "fails" does Stencil still re-render? The generated prop setter: `set _errorList(value) { ... this.__stencilRegisterInstance... }` Typically: `if (value !== this._errorList) { this._errorList = value; ... }` then `valueChanged` triggers re-render. Validation is in `validateXxx` watcher called from `componentWillLoad`/`componentDidUpdate`. So re-render happens regardless.

But wait — does the validator failure prevent re-render? No.

OK. But there's risk. Alternative: pass `selector` as a string selector and rely on `document.querySelector`. Function is safer since we hold refs.

Let's use a function: `selector: () => usernameRef.current?.focus()`. Type: `EventCallback<Event>` = `(event: Event) => void`. Our function ignores the event. Fine.

Hmm, but then `error.selector` is a function → `typeof error.selector === 'string'` false → `_on: { onClick: error.selector }`. So clicking the link calls our function. 

Now, `_errorList` — validator: items must be string or function per the buggy validator → our objects fail → console debug. To avoid noise... eh. It's `console.debug` gated maybe. Let me check the guard.

Let me check Log.debug.

Actually let me just run a check.

One more: does `_errorList` need `message` AND does renderErrorList handle it? yes.

Also: the error summary uses `KolAlertFc` with `variant: "card"`, `type: "error"`, label = translated "kol-error-list-message". It's a `role="alert"`? `alert: false` default (not passed) → no role. Hmm, `KolAlertFc` props: `alert` not passed → defaults false → no role="alert". So error summary isn't announced automatically. We handle announcement via focus() on the summary (focus moves → SR reads it). Actually moving focus to a non-interactive... it focuses the first link's `<a>`. That's fine — SR announces the link which contains the message.

Hmm, but better: also set focus to first invalid field? The KoliBri pattern is focus the error list. Let's use `focusErrorList()`.

But if errorList is empty... we only call when errors exist.

Additionally: on success, focus the success alert? Use `KolAlert` with `_alert` → role="alert" → announced. Good.

Now, does `KolAlert` `_alert` auto-reset after 10s? In `kol-alert-wc.entry.js` `handleAlertTimeout` → `validateAlert(false)`. That's for the WC. Our `KolAlert` React wrapper renders `kol-alert` which renders `kol-alert-wc` with `_alert`. After 10s it sets `_alert=false` → role removed. But our React prop `_alert={true}` stays; if React re-renders and sets `_alert` again... `attachProps` sets `node["_alert"] = true` on every update where props include it. So role could come back on re-render. Only if re-render happens. Minor.

Hmm, actually there's a subtle issue: React wrapper `attachProps` runs on EVERY `componentDidUpdate` of the wrapper, setting `_alert = true` again → Stencil watcher → setState → re-add role="alert". If our component re-renders (e.g., on input change) while a success alert is displayed, the alert role is re-added → re-announce. To avoid, use a `key` on the alert so it remounts only when the message changes. And after success we typically don't re-render... we do if user types. Let's clear the status alert on input change? No — success should persist.

Simplest: give the alert a stable `key` derived from status; and it's fine if re-announced occasionally. Actually to reduce risk, set `_alert` only when status changes... can't easily.

I'll accept: use `key={status.id}` and `_alert` true. Reasonable.

Hmm, alternatively don't re-set: the wrapper sets props only in componentDidUpdate — every render. So `_alert` stays true always while mounted. The 10s timeout sets internal state false but React prop remains true, and next React update re-applies. It's a minor re-announcement risk. Acceptable and I'll note it.

Actually — cleaner: keep `_alert={true}`. It's the accessible thing. Fine.

Let me now also double check `_label` on KolAlert is optional; content is children (slot). Yes.

Now `_level` for KolAlert: `_level={0}` default (no heading). We pass `_label` maybe not needed.

Let's write the code.

Structure in src/App.tsx:

```tsx
import { useRef, useState } from 'react'
import {
  KolAlert, KolButton, KolCard, KolForm,
  KolInputPassword, KolInputText,
} from '@public-ui/react-v19'
import type { ErrorListPropType, HTMLKolFormElement } from '@public-ui/components'
```

Wait, are `HTMLKolFormElement` and `ErrorListPropType` exported from `@public-ui/components`? `index.d.ts` does `export * from './components.d'` which includes `HTMLKolFormElement`. And `export { KoliBri, KoliBriDevHelper } from './schema'` — schema index probably exports props types. Let's check `schema/index.d.ts` exports `ErrorListPropType`.

Need to verify. Also `HTMLKolInputTextElement` etc.

Let's check.

Also need `MsgPropType`? We can inline the object.

Let me verify exports.

Let me run a check.

Also verify `KolCard` `_label` and `_level` — level type `HeadingLevel`.

And check `JSX` namespace types for KolForm `_on`.

Let me check schema index exports.

Let's do that now.

Then write the file, run `pnpm build` (tsc -b && vite build) and `pnpm lint`.

Let me check exports.

**Tool: shell**

**Input:**
```json
{
  "command": "cat node_modules/@public-ui/components/dist/types/schema/index.d.ts; echo '=== props index ==='; cat node_modules/@public-ui/components/dist/types/schema/props/index.d.ts"
}
```

import { Theme } from 'adopted-style-sheets';
import type { VariantClassNamePropType } from './props';
declare module 'adopted-style-sheets' {
    interface FeatureFlagRegistry {
        breadcrumbCurrentPage: 'show' | 'hide';
        buttonVariantDefault: VariantClassNamePropType;
        inputNumberButtons: 'show' | 'hide';
    }
}
export declare const KoliBri: Theme<"kol", "sort" | "info" | "success" | "warning" | "error" | "page" | "action-done" | "action-running" | "avatar-alt" | "character-counter-current" | "character-counter-current-of-max" | "character-counter-current-of-max-aria" | "character-counter-max-aria" | "character-limit-exceeded" | "character-limit-hint" | "character-limit-remaining" | "clear-search" | "close" | "close-alert" | "data-browse-text" | "delete-selection" | "entries-per-site" | "error-list" | "error-list-message" | "filename-text" | "form-description" | "hide-password" | "kolibri-logo" | "live-value" | "live-value-bounded" | "message" | "meter-state-critical" | "meter-state-optimum" | "meter-state-suboptimal" | "nav-maximize" | "nav-minimize" | "new" | "no-entries" | "no-results-message" | "open-link-in-tab" | "page-back" | "page-first" | "page-last" | "page-next" | "pagination" | "pagination-position-bottom" | "pagination-position-top" | "readonly" | "show-password" | "split-button-dropdown-label-open" | "table-data-loading" | "table-data-loaded" | "table-pagination-label" | "table-selection" | "table-selection-all" | "table-selection-indeterminate" | "table-selection-none" | "table-settings" | "table-settings-apply" | "table-settings-cancel" | "table-settings-column-hidable" | "table-settings-column-not-hidable" | "table-settings-column-width" | "table-settings-error-all-invisible" | "table-settings-move-down" | "table-settings-move-up" | "table-settings-not-move" | "table-sort-order" | "table-visible-range" | "toast-close-all" | "version", "symbol" | "abbr" | "button" | "details" | "dialog" | "form" | "link" | "meter" | "nav" | "progress" | "select" | "table" | "textarea" | "image" | "icon" | "alert" | "card" | "pagination" | "accordion" | "avatar" | "badge" | "breadcrumb" | "button-link" | "combobox" | "drawer" | "heading" | "input-checkbox" | "input-color" | "input-date" | "input-email" | "input-file" | "input-number" | "input-password" | "input-radio" | "input-range" | "input-text" | "kolibri" | "link-button" | "logo" | "modal" | "popover-button" | "quote" | "single-select" | "skip-nav" | "spin" | "split-button" | "table-stateful" | "table-stateless" | "tabs" | "toast-container" | "toolbar" | "tooltip" | "tree" | "tree-item">;
export * from './components';
export * from './interfaces';
export * from './props';
export * from './types';
export * from './utils';
export * from './validators';
=== props index ===
export { headingLevelOptions, type HeadingLevel } from '../../internal/props/level';
export * from './accept';
export * from './access-key';
export * from './accordion-callbacks';
export * from './active';
export * from './adjust-height';
export * from './alert';
export * from './alert-type';
export * from './align';
export * from './allow-multi-sort';
export * from './alt';
export * from './alternative-button-link-role';
export * from './aria-controls';
export * from './aria-current-value';
export * from './aria-description';
export * from './aria-details';
export * from './aria-expanded';
export * from './aria-labelledby';
export * from './aria-owns';
export * from './aria-selected';
export * from './auto-complete';
export * from './badge-text';
export * from './button-callbacks';
export * from './button-type';
export * from './button-variant';
export * from './checked';
export * from './collapsible';
export * from './color';
export * from './current-length';
export * from './custom-class';
export * from './details-callbacks';
export * from './disabled';
export * from './download';
export * from './error-list';
export * from './has-closer';
export * from './has-compact-button';
export * from './has-counter';
export * from './has-icons-when-expanded';
export * from './has-settings-menu';
export * from './has-value';
export * from './hide-label';
export * from './hide-msg';
export * from './hint';
export * from './href';
export * from './icons';
export * from './icons-input-checkbox';
export * from './id';
export * from './image-sizes';
export * from './image-source';
export * from './image-srcset';
export * from './indeterminate';
export * from './inline';
export * from './label';
export * from './label-align';
export * from './link-on-callbacks';
export * from './link-target';
export * from './loading';
export * from './max';
export * from './max-length';
export * from './max-length-behavior';
export * from './modal';
export * from './msg';
export * from './multiple';
export * from './name';
export * from './open';
export * from './options';
export * from './pagination-position';
export * from './pattern';
export * from './placeholder';
export * from './popover-align';
export * from './quote';
export * from './read-only';
export * from './required';
export * from './resize-textarea';
export * from './rows';
export * from './short-key';
export * from './show';
export * from './spell-check';
export * from './suggestions';
export * from './sync-value-by-selector';
export * from './tab-behavior';
export * from './tab-index';
export * from './table-callbacks';
export * from './table-data';
export * from './table-data-foot';
export * from './table-fixed-cols';
export * from './table-header-cells';
export * from './table-selection';
export * from './toolbar-items';
export * from './tooltip-align';
export * from './touched';
export * from './type-input-date';
export * from './type-input-text';
export * from './unit';
export * from './variant-alert';
export * from './variant-class-name';
export * from './variant-input-checkbox';
export * from './variant-progress';
export * from './variant-quote';
export * from './variant/spin';
export * from './visibility-toggle';
export * from './width';


**Tool: shell**

**Input:**
```json
{
  "command": "sed -n '590,600p' node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js; echo '=== Log guard ==='; sed -n '575,600p' node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js"
}
```

};
const isDevModeOrForceLog = (forceLog) => isDevMode() || forceLog === true;
class Logger {
    constructor(label) {
        this.label = label;
    }
    debug(msg, options) {
        if (isDevModeOrForceLog(options === null || options === void 0 ? void 0 : options.forceLog)) {
            console.debug(...getShield(this.label, options), ...mapToArray(msg));
        }
    }
=== Log guard ===
    return Array.isArray(msg) ? msg : [msg];
};
const getLogLabel = (label) => {
    return `%c${label}`;
};
const handleClassifier = (label, classifier) => {
    if (typeof classifier === 'string' && classifier.length > 0) {
        return `${getLogLabel(label)} | ${classifier}`;
    }
    else {
        return getLogLabel(label);
    }
};
const getShield = (label, options) => {
    return [handleClassifier(label, options === null || options === void 0 ? void 0 : options.classifier), `${LOG_STYLE};${(options === null || options === void 0 ? void 0 : options.overwriteStyle) || ''}`];
};
const isDevModeOrForceLog = (forceLog) => isDevMode() || forceLog === true;
class Logger {
    constructor(label) {
        this.label = label;
    }
    debug(msg, options) {
        if (isDevModeOrForceLog(options === null || options === void 0 ? void 0 : options.forceLog)) {
            console.debug(...getShield(this.label, options), ...mapToArray(msg));
        }
    }


---

## Assistant

_Thinking:_

Now I have a good picture. Let me think about the design.

Key findings:

**Available KoliBri components relevant:**
- `KolForm` — wraps a real `<form noValidate>` in shadow DOM with a slot; `_on: { onSubmit, onReset }`; `_errorList` for an error summary with focus management (`focusErrorList()` method).
- `KolInputText` — username field: `_label` (required), `_value`, `_on: { onInput, onChange, onBlur }`, `_msg` (`{_description, _type}`), `_touched`, `_required`, `_autoComplete`, `_name`.
- `KolInputPassword` — password field: same + `_visibilityToggle` (show/hide password button).
- `KolButton` — `_type="submit"`, `_label`, `_variant`.
- `KolAlert` — for form-level status message: `_alert` (role=alert), `_type` ("error"|"success"...), `_label`.
- `KolCard` / `KolHeading` — layout/heading.
- `KolSpin` maybe for pending.

**Critical API details discovered:**

1. `_msg` only renders when `_touched === true` (`isMsgDefinedAndInputTouched`). The component itself sets `_touched = true` on blur internally (`onBlur` sets `this.component._touched = true`). But that's on the component instance — since we're controlling props via React, if we pass `_touched` it will overwrite. Actually `attachProps` in the React wrapper sets `node[name] = newProps[name]` on every update — so if we pass `_touched={false}` we'd reset it. Best: **control `_touched` ourselves** — set to true on submit/blur from React state. That's the reliable approach.

Note: attachProps runs on every componentDidUpdate and sets ALL props present in newProps. So if we don't pass `_touched` at all, the internal onBlur handler can set it. But careful: `attachProps` iterates `Object.keys(newProps)` — only props we actually pass. So if we omit `_touched`, internal state works. But for submit-time validation before blur, we need to set it. Safer to control it: track touched in React state, set true on blur (via `_on.onBlur`) and on submit.

Hmm, but `_on.onBlur` — the internal onBlur sets `component._touched = true` then calls `component._on.onBlur(event)`. So both happen. If we also pass `_touched` prop, on the next React render attachProps will set `node._touched = ourValue`, overwriting. So we must make our state reflect true on blur. Good — I'll do that.

2. Validation messages must appear only after touched — that's built-in and good UX (no error spam on first render).

3. `aria-invalid` is set when `hasError` = msg type is 'error' && touched. `aria-describedby` gets the msg id. And the msg renders as an Alert with `role="alert"` when `showAsAlert()` = touched && !inputHasFocus. So errors get announced on blur.

4. `KolForm._errorList` — **PROBLEM**: the validator `validateErrorList` requires each item be a `string` or `function` (`value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined`). But `renderErrorList` uses `error.message` and `error.selector`. And the TS type says `{message, selector, options}`. So the validator contradicts the renderer/type. If we pass objects `{message, selector}`, `watchValidator` fails → logs devHint warning and **does not call setState** → `state._errorList` stays unset... 

Wait — but `render()` uses `this._errorList` (the raw prop), not `this.state._errorList`:
```js
const hasErrorList = Array.isArray(this._errorList) && this._errorList.length > 0;
return ... hasErrorList && this.renderErrorList(this._errorList) ...
```
It reads `this._errorList` directly — the raw prop. So the validator failure only affects `state._errorList` which isn't used in render. So objects WILL render. The validator just logs a console warning in dev mode. Good — this is an important nuance to document.

Actually wait, let me double check: does Stencil's `@Prop() _errorList` get assigned to `this._errorList`? Yes, props are instance fields. And `validateErrorList` is called in componentWillLoad and watcher. The watcher `"_errorList": ["validateErrorList"]` calls `this.validateErrorList(value)` → `validateErrorList(this, value)` → watchValidator → fails → logWarn (devHint → console.debug in dev). State never set, but render doesn't use state. So it works, with a console warning.

Hmm, that's a bit risky. Also `errorList` prop with string items → `error.message` would be `undefined`, rendering empty labels. So objects are correct per type.

Alternative: skip `_errorList` entirely and render my own error summary. But using KolForm's `_errorList` + `focusErrorList()` is a nice accessible pattern. Let me consider whether to rely on it.

Risk: console dev warning. I think I should mention it as an "assumption/uncertainty" and perhaps use it anyway — it's the documented API (TypeScript type is authoritative). Actually, let me reconsider: the TS type is `ErrorListPropType[]` = `{message, selector, options?}[]`. The runtime validator is buggy. I'll use it and note the warning.

Hmm, but actually — is `selector` a string CSS selector used with `document.querySelector`? Yes: `handleLinkClick` does `document.querySelector(selector)` then `.focus()`. Our inputs are custom elements `<kol-input-text>` — do they have an `id`? We can't set `_id` (not exposed on KolInputText interface — no `_id` prop). We CAN set a plain `id` attribute on the custom element via React (`id="username"`), since the React wrapper passes through non-`on` props... Let's check: in `render()`, props are filtered: only string/boolean/number are passed as attributes (`acc[camelToDashCase(name)]`). `id` is a string → `acc["id"] = "username"`. Then in attachProps: `node["id"] = "username"` and `node.setAttribute("id", "username")`. So `<kol-input-text id="username">` gets an id on the host element. `document.querySelector('#username')` finds it. Then `.focus()` — does the host element have a `focus()` method? Yes! KolInputText declares `focus(options?: KolFocusOptions): Promise<void>`. 

So `selector: '#username'` works, and `targetElement.focus(...)` works because the host has a focus method. Excellent.

But careful: `handleLinkClick` checks `typeof targetElement.focus === 'function'` → passes `{behavior:'smooth', block:'nearest'}` as options by default. `focus()` on kol-input-text accepts KolFocusOptions which includes ScrollIntoViewOptions. Fine.

5. Submit: `KolForm` renders `<form ... noValidate>` with a slot. `KolButton _type="submit"` inside → `propagateSubmitEventToForm` walks up parents to find FORM or KOL-FORM. Our button is inside `<kol-form>` light DOM → parent chain reaches `KOL-FORM` → calls `kolForm._on.onSubmit(event)` directly (via setTimeout). Also the native form submission: button is in light DOM of kol-form, which is slotted into the shadow `<form>`. Does clicking a slotted `<button type=submit>` trigger form submit? The button is in the light DOM; the form is in shadow DOM. `form` association: the button's form owner is determined by ancestor in the *light* tree... Actually `searchFormElement` walks up `parentElement` until tagName === 'FORM' or 'KOL-FORM'. The kol-form renders a `<form>` in shadow DOM with `<slot>`. Slotted content's flattened-tree parent is the form, but `parentElement` (node tree) goes to `<kol-form>`. So it finds KOL-FORM tag. Good — so it calls `_on.onSubmit` directly.

But ALSO: does the native `<button type="submit">` inside the shadow `<form>` (via slot) trigger a native form submit? In the flattened tree, slotted elements ARE descendants of the `<form>`. Native form submission uses the *flattened* tree for form association? Form association uses the node tree ancestor or the `form` attribute... Per HTML spec, form owner is determined by the element's ancestor in the tree (not flattened), or `form` attribute. Hmm, actually form association: "If element has a form owner..." — form owner is determined by climbing the *shadow-including* ancestor chain? Let me recall: For form-associated custom elements / elements in shadow trees, form association uses "the element's form owner is the nearest ancestor form element, in the tree" — actually the spec says form owner = nearest `form` element ancestor **in the tree** (node tree), and for shadow trees there's special handling with `form` attribute.

Hmm, but the `<button>` inside `kol-button`'s shadow root — its tree ancestors: button → kol-button shadow root → kol-button (host) → kol-form (light DOM) → ... → no FORM in light DOM. So no form owner. Hence KoliBri's `propagateSubmitEventToForm` workaround. That's exactly why it exists. Good.

Wait, but then: does KOL-FORM branch also dispatch a native submit? No — it just calls `_on.onSubmit(event)` in setTimeout. And KolForm's own `<form onSubmit>` handler calls `_on.onSubmit` too but only fires on native submit which won't happen. So `_on.onSubmit` fires once. 

Hmm, but actually there's a subtlety: does `propagateSubmitEventToForm` also happen for Enter key in inputs? Yes — `kol-input-text.onKeyDown` → `propagateSubmitEventToForm({form: this.host})`. The input host walks up to kol-form → KOL-FORM → `_on.onSubmit`. Good, Enter submits.

Could it double-fire? Button click → propagate (once). Enter in input → propagate (once). Native form submit doesn't occur. So single fire. Good.

BUT: `_on` is an object prop `{onSubmit: fn}`. The React wrapper's attachProps sets `node["_on"] = value` (since name doesn't start with "on" followed by uppercase — it's `_on`, starts with `_`). Good, sets property. And Stencil receives it as a prop. Fine.

Wait — careful with `attachProps`: `if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase())` — for `_on`, indexOf("on") is 1 (or -1), not 0. Actually `"_on".indexOf("on")` = 1. So condition `=== 0` false → goes to else → `node["_on"] = value`, propType is object not string → no setAttribute. Good.

Hmm but wait: does React pass `_on` object through `render()`'s filter? In `render()`: `const type = typeof value; if (type === "string" || "boolean" || "number") acc[camelToDashCase(name)] = value;` — objects are dropped from the element props, but `componentDidUpdate` calls `attachProps(this.componentEl, this.props, prevProps)` with the FULL `this.props`, so objects get set as properties. 

But on **first mount**: `componentDidMount()` → `this.componentDidUpdate(this.props)` → attachProps with oldProps = this.props. Sets all. Good.

One issue: object props are re-assigned every update (new object identity each render) → Stencil re-validates. For `_on` that's fine.

6. `_value` on inputs: React-controlled. `_value` is a string prop. `onInput` callback receives `(event, value)`. Actually `InputTypeOnDefault.onInput?: EventValueOrEventCallback<Event, unknown>` = `(event, value) => void`. So `_on: { onInput: (e, value) => setValue(String(value)) }`.

Hmm — but does setting `_value` from React cause the input to update? `validateValue` → sets state → re-render. Should work. There's a known caveat about cursor position in controlled inputs, but KoliBri's input sets `value` attr on the native input; since we set the same value the user typed, no cursor jump issue.

Actually careful: does `onInput` fire before or after internal `_value` update? In kol-input-text: `this.onInput = (event) => { this._value = ctaRef.el?.value ?? ''; this.controller.onFacade.onInput(event); }`. `onFacade.onInput` → `component._on.onInput(event, value)` where value = `event.target.value`. So we get the raw value. Good.

Also `onChange` fires with value too. `onInput` is more immediate. Use `onInput`.

Hmm, actually — there's a subtlety: `event.stopPropagation()` in `onInput` then dispatches `KolEvent.input` DOM event. Our `_on.onInput` is called directly. Fine.

7. `_autoComplete` values: `'username'`, `'current-password'` — type `AutoCompletePropType`. Let's check it accepts arbitrary strings.

8. Accessibility of labels: KoliBri renders `<label for=id>` with the `_label`. `_label` is required. Good.

9. `KolInputPassword` `_visibilityToggle` — shows show/hide password toggle button with proper labels (translate 'show-password'/'hide-password'). 

10. Error summary focus: `formRef.current.focusErrorList()` — but React ref on KolForm gives the host element `HTMLKolFormElement` which has `focusErrorList()`. The React wrapper supports `forwardRef`. Yes: `createForwardRef` → `React.forwardRef` → passes `forwardedRef`, merged with `setComponentElRef`. So `ref` gives the custom element. 

`focusErrorList` → `scrollToErrorList` → setTimeout 250ms → focus first link's `<a>`. But the error list must already be rendered (needs `this._errorList` set, which happens synchronously on prop set + Stencil re-render... Stencil re-render is async/microtask). 250ms should be enough.

Hmm, but is `focusErrorList` worth it? It moves focus to the error summary — good pattern. But if we focus error list, then user tabs from there. Alternatively focus the first invalid field. 

Let me think about the best accessible pattern: WCAG 3.3.1 — error identification. Common pattern: error summary at top with links to fields, focus moved to summary. KoliBri's KolForm `_errorList` + `focusErrorList()` does exactly this. That's the idiomatic KoliBri way. I'll use it.

But there's a risk: if `_errorList` validator issue... it still renders. And `focusErrorList` uses `this.errorListFirstLink` ref which is set during render. Fine.

Hmm, one concern: when `_errorList` is empty array, `hasErrorList` false → `setFirstLinkElement` never called → `this.errorListFirstLink` undefined → `.querySelector` on undefined → guarded by `?.`. Good.

Let me also consider: should I put `_errorList` selectors as `'#login-username'`? Need id attributes on the inputs. Let's set `id="login-username"` and `id="login-password"`.

Wait — does setting `id` on the kol-input-text host conflict with anything? The host's internal `_id` is separate (generated). The `<label for>` uses internal `_id`. Setting host `id` is fine.

Hmm, but actually there's a subtle problem: `attachProps` does `node.setAttribute(camelToDashCase(name), newProps[name])` for strings. `camelToDashCase("id")` = "id" (no uppercase) → setAttribute("id", ...). Fine.

Actually also `render()` puts `id` into element props → React sets attribute. Fine.

11. Form-level status alert: use `KolAlert` with `_alert` (role=alert) and `_type` success/error. Note: `_alert` triggers a 10s timeout that sets `_alert=false` (only in `kol-alert-wc` — the outer `kol-alert` wrapper passes `_alert` down to `kol-alert-wc`, which has `handleAlertTimeout`). Actually `KolAlert` (React) renders `<kol-alert>` which renders `<kol-alert-wc _alert=...>`. The `-wc` has `onAlertTimeout: this.handleAlertTimeout` → `validateAlert(false)`. Hmm, that's inside `kol-alert-wc`'s own state, but the outer `kol-alert` keeps `_alert` prop as we set it... The outer `kol-alert` passes `_alert` to `-wc` each render. So role="alert" persists as long as we pass `_alert={true}`. The timeout sets wc's state to false but outer re-render resets it. Minor.

Actually simpler: keep `_alert` true while the status is shown; use `key` to force re-mount so it re-announces.

Actually for live region announcement, the best practice: element must exist in DOM before content changes, OR be added with role=alert (announcement happens when added). Adding a new `role=alert` element with content → announced. So conditionally rendering `<KolAlert _alert key={statusId}>` works.

12. Do I need `KolForm`'s `_requiredText`? Default true shows "mandatory fields hint" text. That's a `<p>` with translated text. Fine to keep, or set `_requiredText={false}`. I'll keep default (it's the accessible hint about required fields). Actually the default text is `kol-form-description` translation. Keep it.

Hmm, actually it might be noise. But it's a11y-friendly. I'll keep default.

13. `KolCard` for layout with `_label` heading? Let's use `KolHeading` for the section heading, and a simple `<section>`. Or use `KolCard _label="Anmelden"`. Card renders a heading with `_level`. That's clean and semantic. Let's use KolCard with `_level={2}`? The page has `<h1>`. So card heading should be level 2. 

Hmm, `HeadingLevel` type — let's check options. `headingLevelOptions` from internal/props/level. Probably `1|2|3|4|5|6|0`. Let me verify.

14. Styling: App.css has lots of Vite template styles. I should add minimal styles for the login layout. Let's create a small `.login` style block. Actually `#center` etc. — App.tsx currently renders `<main><h1>...</h1><KolButton/></main>`. Let me check index.html for structure.

Let me check index.html.

15. Also — does `KolInputText` need `_hint`? Could add hint for username format.

16. Password min length validation etc.

Let me now check a few remaining things: headingLevelOptions, AutoCompletePropType, and index.html.

Also `MsgPropType` — `_description` required, `_type` optional (defaults to 'error'). `_alert` optional. Let's build `{_description: '...', _type: 'error'}`.

Note: `normalizeMsg` — if object without `_type`, sets `_type: 'error'`. Good.

Also note `getRenderStates`: `hasError = type === 'error' && hasMessage && touched === true`. And `ariaDescribedBy` includes msg id when `hasMessage && !hideMsg`.

And `showMsg = isMsgDefinedAndInputTouched(msg, touched)` → msg must be defined AND touched. So error only shows when touched. 

Important: **we must set `_touched` ourselves** if we want errors shown after submit without blur. Also the component sets `_touched=true` on blur internally — but if we pass `_touched` prop, attachProps overwrites on every React update. So: control `touched` in React state, set true on blur and on submit.

Hmm — but there's a catch: if we pass `_touched={false}` initially and React re-renders (e.g., on input change) *after* internal onBlur set it true, attachProps would set it back to false... unless our handler also set it. Since `_on.onBlur` fires after internal set, we set state → our prop becomes true. Order: internal sets `_touched=true`, calls our onBlur → setState → re-render → attachProps sets `_touched=true`. Consistent. 

Now, one more consideration: `attachProps` runs `componentDidUpdate` on EVERY render of the wrapper, setting ALL props including `_touched`. So yes, controlled is right.

Let me verify `headingLevelOptions` and `AutoCompletePropType`.

Also need to double-check: does `KolInputText` accept `_type="email"`? `InputTextTypePropType`. We want plain text/username. Use default 'text' — username could be email though. Let's use `_type="text"` default.

Let's check remaining types.

Also: I should verify that `KolForm`'s slot actually passes children — yes, `<slot/>`.

One more: is there a `KolSpin`/loading state? Keep simple: simulate async login with a small delay, show `KolButton _disabled` while submitting. Actually `_disabled` on button. Or use `KolSpin`. Keep it simple but include pending state — good practice. Hmm, "small" feature. I'll include a simple simulated async with disabled button — it's realistic and uses `_disabled`.

Let's check the remaining type details.

**Tool: shell**

**Input:**
```json
{
  "command": "cat node_modules/@public-ui/components/dist/types/internal/props/level.d.ts 2>/dev/null; echo '=== autocomplete ==='; cat node_modules/@public-ui/components/dist/types/schema/props/auto-complete.d.ts; echo '=== input-text type ==='; cat node_modules/@public-ui/components/dist/types/schema/props/type-input-text.d.ts; echo '=== touched ==='; cat node_modules/@public-ui/components/dist/types/schema/props/touched.d.ts; echo '=== label ==='; cat node_modules/@public-ui/components/dist/types/schema/props/label.d.ts"
}
```

import type { SimpleProp } from './helpers/factory';
export declare const headingLevelOptions: readonly [0, 1, 2, 3, 4, 5, 6];
export type HeadingLevel = (typeof headingLevelOptions)[number];
export type LevelProp = SimpleProp<'level', HeadingLevel>;
export declare const levelProp: import("./helpers/factory").PropDefinition<import("./helpers/factory").InternalPropValue<LevelProp>, LevelProp>;
=== autocomplete ===
import type { Generic } from 'adopted-style-sheets';
export declare const autoCompleteOptions: readonly ["on", "off"];
export type AutoCompletePropType = (typeof autoCompleteOptions)[number] | string;
export type PropAutoComplete = {
    autoComplete: AutoCompletePropType;
};
export declare const validateAutoComplete: (component: Generic.Element.Component, value?: AutoCompletePropType) => void;
=== input-text type ===
import type { Generic } from 'adopted-style-sheets';
export declare const inputTextTypeOptions: readonly ["text", "search", "url", "tel"];
export type InputTextTypePropType = (typeof inputTextTypeOptions)[number];
export type PropTypeInputText = {
    type: InputTextTypePropType;
};
export declare const validateTypeInputText: (component: Generic.Element.Component, value?: InputTextTypePropType) => void;
=== touched ===
import type { Generic } from 'adopted-style-sheets';
export type TouchedPropType = boolean;
export type PropTouched = {
    touched: TouchedPropType;
};
export declare const validateTouched: (component: Generic.Element.Component, value?: TouchedPropType) => void;
=== label ===
import type { Generic } from 'adopted-style-sheets';
import type { WatchStringOptions } from '../utils';
export declare function hasEnoughReadableChars(str: string, min?: number): boolean;
export declare function containsOnlyNumbers(str: string): boolean;
export type LabelPropType = string;
export type LabelWithExpertSlotPropType = LabelPropType | '';
export type PropLabel = {
    label: LabelPropType;
};
export type PropLabelWithExpertSlot = {
    label: LabelWithExpertSlotPropType;
};
export type LabelProp = Generic.Element.Members<PropLabel, unknown>;
export declare const validateLabel: (component: Generic.Element.Component, value?: LabelPropType, options?: WatchStringOptions) => void;
export declare const validateLabelWithExpertSlot: (component: Generic.Element.Component, value?: LabelPropType, options?: WatchStringOptions) => void;


**Tool: read**

**Input:**
```json
{
  "path": "/Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/index.html"
}
```

Read file /Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/index.html, lines 1-13
1: <!doctype html>
2: <html lang="en">
3:   <head>
4:     <meta charset="UTF-8" />
5:     <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
6:     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
7:     <title>kolibri-mcp-playground</title>
8:   </head>
9:   <body>
10:     <div id="root"></div>
11:     <script type="module" src="/src/main.tsx"></script>
12:   </body>
13: </html>

---

## Assistant

_Thinking:_

Now let me check how the React wrapper passes props — importantly, `_msg` is an object, `_on` is an object. In `attachProps`, `node[name] = newProps[name]` for objects (not string), so `node['_msg'] = {...}` sets the property. But note in `render()`, only string/boolean/number props get passed to createElement as attributes. Objects like `_msg`, `_on`, `_errorList` are only set in `attachProps` via `componentDidUpdate`. Wait — `attachProps` is called in componentDidMount/componentDidUpdate with `this.props`, which includes `_msg`. So `node['_msg'] = value`. Good.

But careful: for objects, `attachProps` does `node[name] = newProps[name]` — property assignment. Since these are Stencil props, setting the property works.

Hmm, but one issue: `attachProps` iterates `Object.keys(newProps)` and sets ALL props each update, including old ones. Actually it just sets newProps. If a prop is removed, it won't unset. Fine.

Another important issue: event props. `_on` starts with `_`, not `on`, so it goes to else branch: `node['_on'] = {...}`. Good.

Now, `_value` on inputs: prop is string. In render(), `type === 'string'` so `acc[camelToDashCase('_value')] = value` → `acc['_value']`. React will set attribute `_value`. And attachProps sets `node['_value'] = value` and `setAttribute('_value', value)`. Fine.

Hmm wait, there's a subtlety: React renders custom element with attribute `_value`, then Stencil sees attribute. That's fine.

Actually potential problem: controlled input. If we set `_value` from React state and update on `onInput`, the Stencil component re-renders. This generally works.

Let me now think about validation approach.

Key facts discovered:
1. `_msg` prop: `{ _description: string, _type?: 'default'|'info'|'success'|'warning'|'error', _alert?: boolean }` — MsgPropType = Omit<AlertProps, '_level'|'_on'|'_label'|'_hasCloser'|'_variant'> & {_description: string}.
2. Message is only shown when `_touched === true` (`isMsgDefinedAndInputTouched`). The component sets `_touched = true` internally on blur. But since we're controlling props from React... Actually `_touched` is a prop we can set. The internal onBlur sets `this.component._touched = true` — that mutates the component instance's prop directly. But React will re-set it on next render if we pass `_touched`. So we should track touched ourselves in React state and pass it.

Actually important: if we don't pass `_touched`, the internal blur sets it to true and message shows. But if we pass `_touched={false}` always, then on re-render React sets it back to false. Safer: manage `touched` in React state — set true on blur and on submit.

3. `aria-invalid` is set when `hasError` = msg type is 'error' && touched === true.
4. `aria-describedby` includes msg id and hint id.
5. The msg renders as KolAlert with `alert: msg._alert ?? alert` where `alert = showAsAlert()` = `touched && !inputHasFocus`. So role="alert" gets applied when touched and not focused. Plus `_alert` in msg can force it.

Actually `showAsAlert()` in input-text: `Boolean(this.state._touched) && !this.inputHasFocus`. So on blur → touched true, not focused → alert true → role="alert" → screen reader announces. 

6. `KolForm` renders a real `<form>` with `noValidate`, `onSubmit` handler that calls `_on.onSubmit(event)` after preventDefault. And `_errorList` prop of type `ErrorListPropType[]` = `{message, selector, options?}` where selector is a string CSS selector or a callback.

Important caveat: `validateErrorList` in the built code checks `Array.isArray(value) && value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined` — this means each item must be a string or a function! But the render code uses `error.message` and `error.selector`. So passing objects `{message, selector}` would FAIL validation → logWarn and setState not called → `_errorList` state not updated → but render uses `this._errorList` (the raw prop), not state! Let's check: `render() { const hasErrorList = Array.isArray(this._errorList) && this._errorList.length > 0; ... this.renderErrorList(this._errorList) }` — it uses `this._errorList` directly (raw prop). So even if validation warns, rendering works.

Hmm, but Stencil: `_errorList` is a `@Prop()`, so `this._errorList` is the raw prop value. Validation failing only means `state._errorList` isn't set (state isn't used for errorList in render). So objects work but a dev warning is logged.

Wait, let me re-read: validation function: `value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined` means all items are string or function → valid. If items are objects → invalid → logWarn (dev hint). But render still works since it uses raw prop.

Hmm, this is a genuine API inconsistency. Let me double check by looking at the actual type: `ErrorListPropType = { message: string; selector: string | EventCallback<Event>; options?: KolFocusOptions }`. And render uses `error.message`, `error.selector`. So objects are the correct/intended shape, and the validator is buggy (or intentionally permissive in an odd way). Either way, objects render correctly.

Actually — careful. If validation fails, `watchValidator` doesn't call `setState`, but for `@Prop` with `state` maybe Stencil requires state sync... No, render uses `this._errorList` directly. So fine.

Hmm, but actually is there a risk? Let's just use `_errorList` with objects and note the console warning as an API quirk. Or alternatively avoid `_errorList` and build our own error summary. 

Let me reconsider: the requirement says "Validation feedback" and "error handling". Using KoliBri's `_errorList` on KolForm is the idiomatic way — it renders an alert card with links that focus the offending fields (via `document.querySelector(selector)`).

But there's a subtlety: `handleLinkClick` does `document.querySelector(selector)` and calls `.focus()`. Our inputs are custom elements `<kol-input-text>` with shadow DOM. If we set `id` on the custom element, `document.querySelector('#username')` would find the custom element host. Does the host have a `focus()` method? Yes! `focus(options?: KolFocusOptions): Promise<void>` is declared on KolInputText. So `targetElement.focus()` works.

But wait — can we set an `id` on the Kol component? The React wrapper: props that are strings get `node[name] = value` and `setAttribute(camelToDashCase(name), value)`. For `id`, `node['id'] = 'username'` and `setAttribute('id', 'username')`. So yes, `id="username"` passes through as a plain attribute. Actually in `render()`, `id` is a string so `acc[camelToDashCase('id')] = 'username'` → `acc['id']`. React sets it as attribute on custom element. Good.

Hmm, but does KoliBri's input use `_id` internally for its label's `for`? Yes, `state._id` is internally generated. Setting a host `id` attribute is separate and harmless.

Actually wait — is `_id` an accepted prop for inputs? Looking at the components.d.ts KolInputText — no `_id` in the interface. So we set plain `id`.

Hmm, but there's a catch: `document.querySelector('#username')` — is `id` on the host element reflected? React will set attribute `id` on `<kol-input-text>`. Yes.

And `.focus()` on the host — KoliBri's `focus()` delegates to internal input. Good.

Alternative: use `selector` as a callback function `() => inputRef.current?.focus()`. That's more React-idiomatic and avoids shadow-DOM selector issues. `selector: string | EventCallback<Event>`. Actually render: `_on: { onClick: typeof error.selector === 'string' ? () => this.handleLinkClick(...) : error.selector }`. So if we pass a function, it's used directly as onClick handler. 

Let me use string selectors with `#username` since it's simpler and matches the component's design... but risk: if `id` doesn't work. Let's be safe and test.

Actually, I can't easily test without running. Let me run the dev server and test with a headless browser? That may be overkill but valuable. Let me at least run `pnpm build` (tsc) to type-check.

Let me now think about the overall design.

### Component structure

```
<App>
  <main>
    <h1>KoliBri MCP Playground</h1>
    <KolCard _label="Anmelden" _level={2}>       // or heading
      <KolForm _on={{onSubmit}} _errorList={...} _requiredText={false}>
        <KolInputText _label="Benutzername" _name="username" _required _autoComplete="username" ... />
        <KolInputPassword _label="Passwort" _name="password" _required _autoComplete="current-password" _visibilityToggle ... />
        <KolButton _type="submit" _label="Anmelden" _variant="primary" />
      </KolForm>
    </KolCard>
  </main>
</App>
```

Plus status alert: `KolAlert _alert _type="success"` for successful login.

Wait — does `KolForm`'s submit work? `_on.onSubmit` is called when form submits. The `<form>` inside KolForm has `onSubmit` handler. A `KolButton _type="submit"` inside the form: `onClick` → `propagateSubmitEventToForm({form: this.host})` → `searchFormElement` walks up parents until FORM or KOL-FORM tag. Our button is inside `<kol-form>` (light DOM children of kol-form are slotted into the `<form>`). So walking up from `<kol-button>` we reach `<kol-form>` → tag is KOL-FORM → then it calls `kolForm._on.onSubmit(event)` directly via setTimeout. 

Hmm, but does it also trigger the native form submit? The `<form>` is in shadow DOM of kol-form with a `<slot>`. The button is in the light DOM of kol-form. Native form submission: the button is slotted into the form, so it IS a descendant in the flattened tree → native submit would fire. Hmm, actually form association uses the tree structure; for slotted content, the form owner is determined by... Actually `form` attribute / ancestor form element in the *flattened tree*? The HTML spec says form owner is determined by ancestor `form` element in the tree (not flat tree) or the `form` attribute. For shadow DOM, elements in the light DOM of `<kol-form>` don't have `<kol-form>`'s shadow `<form>` as an ancestor in their own tree — their tree ancestor is `<kol-form>` element, not `form`. So no native form association. That's exactly why KoliBri has `propagateSubmitEventToForm`.

So: button click → propagate → finds KOL-FORM → calls `_on.onSubmit(event)` in setTimeout. Also inputs pressing Enter → `propagateSubmitEventToForm` → same.

But also: KolForm's internal `<form onSubmit>` → `event.preventDefault()` then `_on.onSubmit(event)`. That path fires only for native submit, which won't happen. So `_on.onSubmit` called once. 

Hmm, but wait: could it be called twice (once from propagate, once from native)? Native submit won't happen since button isn't form-associated. OK.

Also `_on.onReset` for reset.

Now — does `propagateSubmitEventToForm` reach the KolForm? `searchFormElement(el)` walks: `while (el instanceof HTMLElement && el.tagName !== 'FORM' && el.tagName !== 'KOL-FORM')`. Start = `this.host` = `<kol-button>`. Parent → whatever wraps → `<kol-form>`. tagName KOL-FORM → stop. Returns `<kol-form>`. Then `form.tagName === KolFormTag.toUpperCase()` → calls `kolForm._on.onSubmit(event)`.

Wait, it reads `kolForm._on` — the actual DOM property `_on` on the element. We pass `_on={{onSubmit}}` from React → attachProps sets `node['_on'] = {...}`. Yes! It's a Stencil `@Prop`, so `element._on` works. 

But careful: `attachProps` — does it set `_on`? name = `_on`, doesn't start with "on" at index 0 (it's `_`), so else branch: `node['_on'] = value`, propType is object → no setAttribute. Good.

Hmm, actually wait: `name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()`. For `_on`, indexOf("on") is 1, not 0. So else branch. Good.

But there's a subtlety — React's own event system: `_on` isn't a React event. Fine.

Now, importantly: does `attachProps` run? It's called in `componentDidMount` → `this.componentDidUpdate(this.props)` → `attachProps(this.componentEl, this.props, prevProps=this.props)`. Yes.

BUT: `render()` filters props: `const { children, forwardedRef, style, className, ref, ...cProps } = this.props;` then reduces to only string/boolean/number (for non-React-event names). So `_on` (object) is NOT passed to createElement — it's only applied via attachProps. And attachProps uses `this.props` (full), so `_on` is set. 

And on updates, `componentDidUpdate(prevProps)` → attachProps(this.props) → sets `_on` again. Good — but note each render creates a new object, and Stencil's watcher `validateOn` will run. Fine.

Hmm, one concern: `attachProps` sets `node[name] = newProps[name]` for EVERY key in newProps including `children`? No — children is skipped.

OK. Another: `_errorList` is an array (object) → set as property. Good.

`_msg` object → property. Good.

Now — does Stencil need the attribute for props? Property assignment works for `@Prop`.

### Validation flow

State:
- `username`, `password` (values)
- `errors: { username?: string, password?: string }`
- `touched: { username: boolean, password: boolean }`
- `status: { type, message } | null` for form-level
- `submitted` flag

On submit:
- validate → compute errors
- if errors: set errors, mark all touched, build `errorList`, focus error list (`formRef.current.focusErrorList()`)
- if ok: set success status

On input change: clear field error (revalidate) — common UX.

Per-field msg: `_msg = errors.username ? { _description: errors.username, _type: 'error' } : undefined` and `_touched={touched.username}`.

Note: msg only shows when touched. So on submit we set touched=true for fields with errors. Actually the component itself sets touched on blur. But we control it via prop, so we must set it. Let's set `touched` on blur via `_on.onBlur` and on submit.

Hmm — but does the internal onBlur setting `component._touched = true` conflict with our React prop? On next React render we'd pass `_touched` from our state. If our state says false but component set true internally, React's attachProps would reset it to false. So we should track blur in our state too. Use `_on: { onBlur: ... }`.

Wait — `InputTypeOnDefault.onBlur?: EventCallback<Event>`. And it's called in `onBlur` handler of FormFieldStateWrapper AFTER setting `_touched = true`. So our handler runs; we set state touched=true; React re-renders and passes `_touched=true`. Consistent.

Order concern: React state update is async; between internal set and our re-render, the internal `_touched=true` already shows the message. Fine.

### `aria-invalid` / `aria-describedby`

Handled by component: `hasError = type==='error' && description && touched===true`. So we need touched=true for aria-invalid. Good.

### Form-level error list

`_errorList` on KolForm: `[{ message, selector }]`. Rendered as an alert with role... `KolAlertFc` with `alert: false` (not passed) → no role="alert". Hmm, `renderErrorList` passes `type: "error", variant: "card", label: ...` but not `alert`. So no role=alert — it won't auto-announce. But `focusErrorList()` moves focus to the first link, which will announce the link. That's a reasonable pattern (focus-based announcement).

Actually — the error list is placed OUTSIDE/ABOVE the form element (rendered before `renderFormElement`). Good, it's at top.

Hmm, but there's a problem: the alert is rendered in shadow DOM of kol-form, above the `<form>`. Focus management: `focusErrorList()` → `scrollToErrorList` → setTimeout 250ms → focus first link's `<a>`.

Alternatively we could just focus the first invalid field. But error summary + focus is the WCAG-recommended pattern (3.3.1). Let's use `focusErrorList()`.

Risk: `setFirstLinkElement` ref is on `KolLinkWcTag` and `.querySelector('a')`. Should work.

Hmm — but if `_errorList` validation fails (dev warning), does `renderErrorList` still get called? Yes, render uses raw prop. Let me double-check `render()`:

```js
render() {
    const hasErrorList = Array.isArray(this._errorList) && this._errorList.length > 0;
    return (h(Host, null, hasErrorList && this.renderErrorList(this._errorList), this.renderFormElement()));
}
```

Uses `this._errorList` = the raw `@Prop`. So yes works.

But will Stencil re-render when `_errorList` prop changes? Yes, `@Prop` change triggers re-render (unless `mutable: false` and no re-render... actually Stencil always re-renders on prop change for non-immutable props). Default: re-render on prop change. Good.

Hmm, actually for `@Prop()` Stencil re-renders on value change. Yes.

Actually one concern: will the validator failure prevent... no.

But to be safe and avoid console warnings, maybe I should double check the validator once more:

```js
export const validateErrorList = (component, value) => {
    watchValidator(component, 'errorList', 
 (value) => Array.isArray(value) && value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined, 
      new Set(['string', 'function']), value);
};
```

Hmm — `value.find(v => !(typeof v === 'string' || typeof v === 'function')) === undefined` → true iff every v is string or function. So objects → invalid → `logWarn` → `devHint` → `console.debug` in dev mode. Not an error. And state not set — but state isn't used for rendering error list.

Wait... is it? Let me search for `state.errorList`. Grep showed no `state._errorList`. Confirmed only `this._errorList`.

Hmm, but `setState(component, propName, value)` is what syncs to `state`. Since render doesn't use state, fine.

So: objects work at runtime, dev console shows a hint. I'll note this as an API quirk/uncertainty. Actually — hmm, maybe I should avoid the warning by... there's no way to pass objects without triggering it. Unless I pass `selector` as a function and `message`... no, the item itself must be string/function.

Interesting: if item is a **function**, `error.message` would be `undefined` → link label undefined. So that's not usable either.

So objects are the only usable shape, and the validator is buggy. I'll use objects and document it.

Hmm, alternatively I skip `_errorList` entirely and render my own error summary with `KolAlert` + `KolLink`/`KolButtonLink`. That avoids the quirk but duplicates functionality.

I think using `_errorList` is more idiomatic. I'll use it and note the console hint.

Actually, let me reconsider — maybe safer to not rely on a buggy path for a demo. But the render path is clearly correct and type says objects. I'll use it, and mention the fallback.

### Success feedback

`KolAlert` with `_alert` (role=alert) `_type="success"` and text. Note: `_alert=true` sets a 10s timeout that calls `validateAlert(false)` → removes role after 10s. That's intentional (announce once). But since we pass `_alert` from React as prop... on timeout the component sets `this._alert = false` internally (via `validateAlert(false)` → `watchBoolean(this,'_alert', false)` → `setState`). Hmm, `validateAlert` is the watcher; `handleAlertTimeout` calls `this.validateAlert(false)` which sets state `_alert=false`. But our React prop stays `true`. On next React render, attachProps sets `node['_alert'] = true` again → watcher → state true → role=alert again. Could re-announce. But React only re-renders when state changes. Acceptable.

Actually to make announcement robust, use a `key` on the alert so a new element mounts each time a new status appears. Mounting a new `role="alert"` element with content → announced. Good practice.

Hmm, actually role=alert elements that are added to DOM with content are announced by most SRs. Let's use `key={statusId}`.

### Heading / structure

Use `KolHeading` for the form title instead of raw h1? The page already has h1. Use `KolHeading _label="Anmelden" _level={2}`? Or `KolCard _label="Anmelden" _level={2}` which renders a heading inside a card. Let's use `KolCard` — nice container.

Actually `KolCard._label` required, `_level` default 0 (bold text). Use `_level={2}`.

Hmm — does the h1 already exist? Yes `<h1>KoliBri MCP Playground</h1>`. So card heading level 2 is correct.

### Layout/CSS

Add minimal styles in App.css for the form stack. KoliBri form-field is `display: grid`. Let's add a `.login` wrapper class with max-width and gap.

But `App.css` currently has `.hero`, `#center` etc. which aren't used in current App.tsx. I'll add a new `.login-panel` class. Actually App.css isn't even imported in App.tsx! Let me check: App.tsx imports nothing except KolButton. main.tsx imports './index.css'. So App.css is unused. Hmm.

I should import './App.css' in App.tsx, or just use index.css. Let me import App.css and add login styles there.

Wait — is App.css imported anywhere? grep showed only App.css and index.css files. Let me verify quickly with grep.

Actually I read App.tsx: only imports KolButton. So App.css unused. I'll add `import './App.css'` and add styles.

Hmm, but careful: `#center`, `.hero` etc. are template leftovers; adding the import would activate them — but they're only applied if elements with those ids/classes exist. `.counter`, `.hero`, `#center` — none exist in App.tsx. So safe.

Actually let's keep it simple: put login layout styles in App.css and import it.

### Now: does `_hideLabel` matter? No.

### `_requiredText` on KolForm

Default `true` → shows "mandatory fields hint" paragraph with translated text. That's fine/helpful. Keep default? It says "The following fields are mandatory" roughly. Actually `kol-form-description`. Keep it — it's accessible info. Hmm, it might be noise. I'll keep default (true) since fields are required.

Actually, both fields ARE required, so the hint is accurate. Keep.

### Password visibility toggle

`_visibilityToggle` — shows show/hide button with proper labels (translations `show-password`/`hide-password`). 

### autoComplete

- username: `_autoComplete="username"`
- password: `_autoComplete="current-password"`

Type is `AutoCompletePropType = 'on'|'off' | string`. Validator: let's check `validateAutoComplete`.

Let me check it accepts arbitrary strings.

### Simulated auth

Since no backend, simulate: accept if username === 'demo' and password === 'kolibri', else "invalid credentials" error via form-level alert (not field-level), OR field-level. Simpler: 
- Field validation: non-empty, password min length 8.
- Then "authenticate": if credentials don't match demo → form-level error alert.

Hmm, that adds complexity. Let's do it — it demonstrates form-level error handling nicely. Provide a hint in `_hint` of username field: "Demo: demo / kolibri".

Hmm, maybe simpler: just validate format and show success. But "error handling" requirement... Field validation covers it. I'll add a fake auth check too for realism but keep it small.

Let me reconsider scope: "small accessible login feature". I'll do:
- required validation + min length- fake auth (demo/kolibri) producing form-level error alert
- success alert

That's good and demonstrates: field errors, form error list, live-region status alert.

Hmm, actually if fake auth fails, should I add to errorList? The errorList is for field errors. Form-level failure → `KolAlert _alert _type="error"` with role=alert. Good.

Wait, but on validation failure I set `_errorList` — that's also announced via focus. And separately on auth failure I show KolAlert.

Hmm, two different mechanisms could both be "error handling". That's fine and educational.

Actually — let me simplify: 
- `_errorList` = field-level errors (focus moved to it on failed submit)
- `KolAlert` for form-level auth result (success or invalid credentials)

Good.

### Refs

`KolForm` ref → `HTMLKolFormElement` (has `focusErrorList()`).
`KolInputText` ref → `HTMLKolInputTextElement`.

React wrapper: `createForwardRef` → `React.forwardRef` → passes `forwardedRef`, merged with `setComponentElRef`. So ref gives the DOM element. 

Type: `RefAttributes<HTMLKolInputTextElement>`. Are those types exported? `HTMLKolInputTextElement` is in components.d.ts which is exported via `export * from './components.d'`. Let's confirm `HTMLKolInputTextElement` interface exists — yes (line 4572 for input-text? that was `HTMLKolInputTextElement`). Good.

But for errorList selector, I'll use functions to be safe? Or strings with `#id`.

Hmm — `document.querySelector('#username')` returns `<kol-input-text>` host. Then `targetElement.focus(options)`. KolInputText has `focus()`. Type-wise, `handleLinkClick` does `if (targetElement && typeof targetElement.focus === 'function')`. Good.

But does React set `id` on the custom element? In `render()`, `id` is a string → `acc[camelToDashCase('id')] = 'username'` → `acc['id']`. React renders `<kol-input-text id="username">`. Yes.

Hmm — but ALSO `attachProps` sets `node['id'] = 'username'` and `setAttribute('id','username')`. Same.

OK but wait: does `id` conflict with KoliBri internal `_id`? Internal `_id` is a separate generated id used for label `for`. Host `id` is different. No conflict.

Hmm, actually is there a risk that setting `id` on host changes `state._id`? `_id` is not a declared prop for input-text, so no.

I'll use string selectors `#login-username`, `#login-password`. Simpler and matches component design.

Actually hold on — potential issue: is `focus()` on host going to focus the inner input? KolInputText.focus() → `element-focus` util focusing `ctaRef.el`. Should work.

I could also just use callback selectors for robustness. Let me use callback functions — no wait, `_errorList` type: `selector: string | EventCallback<Event>`. Using a callback: `() => usernameRef.current?.focus()`. But signature is `(event: Event) => void`; a `() => void` is assignable. Fine.

Hmm, which is better? String selector is declarative and KoliBri-native. Callback is React-native with refs. I'll use string selectors since KoliBri explicitly supports them and it exercises the documented API... but risk if id doesn't work.

Let me just test it. I'll run the dev server and use a quick headless check. Actually, do we have playwright? Probably not. Let me check if there's any test infra... no.

I could write a tiny node script using... no jsdom either probably.

Alternative: verify by reasoning — React definitely sets `id` attribute on custom elements. KoliBri definitely reads `document.querySelector(selector)`. `.focus` exists on the host. So it works.

Actually one more check: `handleLinkClick(selector, options)` → `document.querySelector(selector)`. Since kol-form is in light DOM (React renders `<kol-form>` in the main document tree), `document.querySelector('#login-username')` finds it. Yes — the host elements are in the light DOM (shadow DOM only inside them). 

I'll use string selectors.

### Focus error list timing

`focusErrorList()` → `scrollToErrorList()` → setTimeout 250ms → focus. But `_errorList` prop must be applied first. React sets state → re-render → attachProps sets `_errorList` on element → Stencil re-renders. Then we call `focusErrorList()` — should be in `useEffect` after render, or directly in the submit handler? In the handler, we call `setState` (async) then `formRef.current.focusErrorList()` immediately — the prop hasn't been applied yet! But focusErrorList's setTimeout is 250ms, and Stencil re-render is fast. Also `errorListFirstLink` ref set during render.

Hmm, risky but250ms should be enough. Better: call in `useEffect` that watches `errorList`. Let's do that — cleaner:

```tsx
useEffect(() => {
  if (errorList.length > 0 && submitAttempted) {
    formRef.current?.focusErrorList();
  }
}, [errorList]);
```

Hmm but errorList array identity changes each validation. Use a counter/flag.

Actually simpler: keep `errorList` in state; effect depends on it. On each failed submit, errorList is a new array → effect runs → focus. Good. But if errorList is same content... new array identity → effect runs. Fine.

Edge: first render errorList = [] → effect runs but length 0 → skip.

But if user submits twice with same errors, errorList is a new array (we create it in handler) → effect runs. Good.

Hmm, but we need `errorList` to actually be non-empty and Stencil to have rendered the links. Stencil's re-render is async (microtask/raf). 250ms timeout inside focusErrorList covers it.

OK, let's also consider: should we focus the error list, or the first invalid field? Focusing error list is WCAG 3.3.1 best practice. Use it.

### Also: role="alert" on form-level status

`KolAlert _alert` → role="alert". But it's only set at mount... Actually the alert is conditionally rendered when status != null → new DOM node with role=alert + content → announced. 

But careful: `KolAlertFc` with `alert: true` → sets `setTimeout(() => onAlertTimeout?.(), 10000)` where `onAlertTimeout` for `kol-alert-wc` = `validateAlert(false)`. Only for the `-wc` variant. Our `KolAlert` (React) renders `<kol-alert>` which renders `<kol-alert-wc _alert=...>` with `onAlertTimeout: this.handleAlertTimeout`. So after 10s role removed. Fine.

Hmm — actually `KolAlert` React component → `createReactComponent("kol-alert")` → renders `<kol-alert _alert _type ...>`. And `kol-alert.entry.js` renders `KolAlertWcTag` with props including `_alert`. And `kol-alert-wc` render passes `onAlertTimeout: this.handleAlertTimeout` → `this.validateAlert(false)` → sets `_alert` state false. But `kol-alert-wc`'s `_alert` prop is controlled by `kol-alert` which is controlled by our React prop. So after 10s, `_alert=false` in wc state; our prop still true. If React re-renders and re-sets `_alert=true`... attachProps sets `node['_alert'] = true` on every componentDidUpdate. If we re-render for any reason, role=alert re-added → re-announce. Minor. Avoid unnecessary re-renders... not critical.

Actually there's a subtle issue: `attachProps` runs on EVERY `componentDidUpdate` of the wrapper, setting all props again. Stencil's watcher `validateAlert(true)` → setState → triggers re-render of wc. If value unchanged, does Stencil skip? `setState` with same value — Stencil's `setState` sets state and marks dirty; might re-render anyway. If `_alert` was set false by timeout and we set true again → role=alert reappears → re-announce. But this only happens if our React tree re-renders (which happens on every state change anyway).

To be safe: only pass `_alert` when we want announcement... it's already conditional. Fine, good enough.

Hmm, alternatively use `key` so a fresh alert mounts. I'll do `key={status.id}` — each new status gets a fresh element → role=alert at mount → announced reliably.

### Let me reconsider `_alert` vs not

Actually if `_alert` is false, `role` is undefined → not announced. For status messages we want announcement. Set `_alert`. Yes.

### Now write the code.

Let me define types:

```tsx
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import {
  KolAlert, KolButton, KolCard, KolForm,
  KolInputPassword, KolInputText,
} from '@public-ui/react-v19'
import type { ErrorListPropType, HTMLKolFormElement } from '@public-ui/components'
```

Hmm — does `@public-ui/components` export `ErrorListPropType`? `export * from './schema'` → `export * from './props'` → `export * from './error-list'` → exports `ErrorListPropType`. And top-level `index.d.ts` has `export * from './components.d'` and `export { ... } from './schema'`. Wait: `export { KoliBri, KoliBriDevHelper } from './schema';` — that's a named export list, NOT `export *`. But also `export * from './enums/bund'`, `export * from './kolibri'`.

Hmm! Let me re-read:

```
export { getDefaultThemeName } from 'adopted-style-sheets';
export * from './components.d';
export { setCurrentLocation } from './components/link/ariaCurrentService';
export { ToasterService } from './components/toaster/toaster';
export { bootstrap, isInitialized, register } from './core/bootstrap';
export * from './enums/bund';
export * from './kolibri';
export { KoliBri, KoliBriDevHelper } from './schema';
export type { ClickableElement, ... } from './schema';
export { BEM } from './schema/bem-registry';
...
```

So `ErrorListPropType` is NOT re-exported from the package root! Only `KoliBri`, `KoliBriDevHelper`, and the listed types.

Hmm. So I can't import `ErrorListPropType` from `@public-ui/components`.

Let me verify by grepping index.d.ts fully (70 lines, I saw the whole thing? It said lines 1-70 and showed... actually I read react-v19's index.d.ts which was 70 lines. Let me read @public-ui/components' index.d.ts.

Let me check.

Also `HTMLKolFormElement` — from `./components.d` which IS `export *`. So `HTMLKolFormElement` should be available.

For `ErrorListPropType`, if not exported, I can define the shape inline:
```ts
type ErrorList = { message: string; selector: string; options?: { behavior?: ScrollBehavior; block?: ScrollLogicalPosition } }[]
```

Or use `JSX.KolForm['_errorList']`. `JSX` namespace is exported? `export * from './components.d'` — components.d.ts declares `declare namespace JSX { interface KolForm {...} }`. Is JSX exported? Typically `export { JSX }`... Let's check.

Simplest: type the array via `NonNullable<JSX.KolForm['_errorList']>` if JSX is accessible, else define manually.

Let me check @public-ui/components/index.d.ts.

Let's do it.

Also need to confirm `HTMLKolFormElement` is exported.

Let me also double check `validateAutoComplete`.

Let's run these checks.

Then write App.tsx.

Also: should I use `KolHeading`? Let's keep KolCard.

Let me also think about `_msg` type. `MsgPropType` — need `{ _description: string; _type?: ... }`. Not exported from root either likely. I'll construct inline: `{ _description: '...', _type: 'error' }` — TS should infer and check against `Stringified<MsgPropType>`.

Hmm, `_msg?: Stringified<MsgPropType>` where `Stringified<T> = T | string | ...`? Let's check. If object literal is assignable, fine.

Let's check `Stringified`.

OK let me run the checks.

**Tool: shell**

**Input:**
```json
{
  "command": "cat node_modules/@public-ui/components/dist/types/index.d.ts; echo '=== Stringified ==='; grep -rn \"Stringified\" node_modules/@public-ui/components/dist/types/schema/types/*.d.ts | head -10"
}
```

export { getDefaultThemeName } from 'adopted-style-sheets';
export * from './components.d';
export { setCurrentLocation } from './components/link/ariaCurrentService';
export { ToasterService } from './components/toaster/toaster';
export { bootstrap, isInitialized, register } from './core/bootstrap';
export * from './enums/bund';
export * from './kolibri';
export { KoliBri, KoliBriDevHelper } from './schema';
export type { ClickableElement, EventValueOrEventCallback, FocusableElement, KoliBriTableCell, KoliBriTableHeaderCell, KoliBriTableHeaderCellWithLogic, KoliBriTableSelection, Optgroup, Option, RadioOption, SelectOption, Toast, ToasterOptions, W3CInputValue, } from './schema';
export { BEM } from './schema/bem-registry';
export { KolEvent } from './utils/events';
export { isTooltipOpen } from './utils/tooltip-open-tracking';
=== Stringified ===
node_modules/@public-ui/components/dist/types/schema/types/common.d.ts:1:export type Stringified<T> = string | T;


**Tool: shell**

**Input:**
```json
{
  "command": "cat node_modules/@public-ui/components/dist/types/schema/props/auto-complete.d.ts | grep -A10 validateAutoComplete; echo '=== validateAutoComplete impl ==='; grep -rn -A8 \"validateAutoComplete\" node_modules/@public-ui/components/dist/esm/auto-complete-C-QNfuIh.js"
}
```

export declare const validateAutoComplete: (component: Generic.Element.Component, value?: AutoCompletePropType) => void;
=== validateAutoComplete impl ===
node_modules/@public-ui/components/dist/esm/auto-complete-C-QNfuIh.js:7:const validateAutoComplete = (component, value) => {
node_modules/@public-ui/components/dist/esm/auto-complete-C-QNfuIh.js-8-    watchValidator(component, '_autoComplete', (value) => autoCompleteOptions.includes(value) || (typeof value === 'string' && value.length > 0), new Set(autoCompleteOptions), value, {
node_modules/@public-ui/components/dist/esm/auto-complete-C-QNfuIh.js-9-        defaultValue: 'off',
node_modules/@public-ui/components/dist/esm/auto-complete-C-QNfuIh.js-10-    });
node_modules/@public-ui/components/dist/esm/auto-complete-C-QNfuIh.js-11-};
node_modules/@public-ui/components/dist/esm/auto-complete-C-QNfuIh.js-12-
node_modules/@public-ui/components/dist/esm/auto-complete-C-QNfuIh.js:13:export { validateAutoComplete as v };
node_modules/@public-ui/components/dist/esm/auto-complete-C-QNfuIh.js-14-//# sourceMappingURL=auto-complete-C-QNfuIh.js.map
node_modules/@public-ui/components/dist/esm/auto-complete-C-QNfuIh.js-15-
node_modules/@public-ui/components/dist/esm/auto-complete-C-QNfuIh.js-16-//# sourceMappingURL=auto-complete-C-QNfuIh.js.map


---

## Assistant

_Thinking:_

Let me now analyze the design and implement. I've done extensive research. Let me now present the analysis (steps 1-5) and then implement.

Let me verify a couple more things quickly: `HTMLKolFormElement` export, `_errorList` type export, `Stringified<MsgPropType>` shape, and KolForm `_on` type.

Let me check exports needed for TypeScript.

**Tool: execute**

**Input:**
```json
{
  "code": "import { readFileSync } from 'node:fs';\n\n// 1. What does @public-ui/components export at root?\nconst root = readFileSync('node_modules/@public-ui/components/dist/types/index.d.ts', 'utf8');\nconsole.log('--- root index.d.ts ---');\nconsole.log(root);\n\n// 2. Is HTMLKolFormElement / JSX exported from components.d.ts?\nconst comp = readFileSync('node_modules/@public-ui/components/dist/types/components.d.ts', 'utf8');\nconst m = comp.match(/export\\s+(declare\\s+)?(namespace|class|const|type|interface)?\\s*JSX/g);\nconsole.log('--- JSX export markers in components.d.ts ---', m);\nconsole.log('--- HTMLKolFormElement decl ---', comp.match(/interface HTMLKolFormElement[^\\n]*/g));\nconsole.log('--- last 20 lines of components.d.ts ---');\nconsole.log(comp.trimEnd().split('\\n').slice(-20).join('\\n'));\n"
}
```

'import' and 'export' may appear only with 'sourceType: module' (1:0)

---

## Assistant

_Thinking:_

Hmm, the execute tool interpreted it as a different language? Let me check — it seems the code was parsed as something else. Maybe I need to specify... Actually error says 'sourceType: module' — that's a JS parse error meaning something. Maybe imports are unavailable. Let me use plain fetch/tools instead.

Actually the instructions say: "Imports, direct filesystem access, and timers are unavailable". So I can't use node:fs. I should use shell tool.

Let me use shell directly.

**Tool: shell**

**Input:**
```json
{
  "command": "cat node_modules/@public-ui/components/dist/types/index.d.ts; echo \"=== JSX export ===\"; grep -n \"namespace JSX\\|export.*JSX\" node_modules/@public-ui/components/dist/types/components.d.ts | head; echo \"=== tail ===\"; tail -25 node_modules/@public-ui/components/dist/types/components.d.ts"
}
```

export { getDefaultThemeName } from 'adopted-style-sheets';
export * from './components.d';
export { setCurrentLocation } from './components/link/ariaCurrentService';
export { ToasterService } from './components/toaster/toaster';
export { bootstrap, isInitialized, register } from './core/bootstrap';
export * from './enums/bund';
export * from './kolibri';
export { KoliBri, KoliBriDevHelper } from './schema';
export type { ClickableElement, EventValueOrEventCallback, FocusableElement, KoliBriTableCell, KoliBriTableHeaderCell, KoliBriTableHeaderCellWithLogic, KoliBriTableSelection, Optgroup, Option, RadioOption, SelectOption, Toast, ToasterOptions, W3CInputValue, } from './schema';
export { BEM } from './schema/bem-registry';
export { KolEvent } from './utils/events';
export { isTooltipOpen } from './utils/tooltip-open-tracking';
=== JSX export ===
8604:export { LocalJSX as JSX };
8606:    export namespace JSX {
=== tail ===
             * The **Tabs** component is used to organize related content on the same page and navigate between them. Tabs ensure that large amounts of content can be more easily organized for users.
             */
            "kol-tabs": LocalJSX.KolTabs & JSXBase.HTMLAttributes<HTMLKolTabsElement>;
            /**
             * The **Textarea** component provides a larger input field for content. Unlike InputText, it also allows extensive content to be entered, including line breaks.
             */
            "kol-textarea": LocalJSX.KolTextarea & JSXBase.HTMLAttributes<HTMLKolTextareaElement>;
            /**
             * @deprecated Will be removed in the next major version. For more information, please refer to: https://github.com/public-ui/kolibri/issues/8372
             */
            "kol-toast-container": LocalJSX.KolToastContainer & JSXBase.HTMLAttributes<HTMLKolToastContainerElement>;
            "kol-toolbar": LocalJSX.KolToolbar & JSXBase.HTMLAttributes<HTMLKolToolbarElement>;
            /**
             * @deprecated The tooltip component is deprecated and will be removed in the next major release
             */
            "kol-tooltip-wc": LocalJSX.KolTooltipWc & JSXBase.HTMLAttributes<HTMLKolTooltipWcElement>;
            "kol-tree": LocalJSX.KolTree & JSXBase.HTMLAttributes<HTMLKolTreeElement>;
            "kol-tree-item": LocalJSX.KolTreeItem & JSXBase.HTMLAttributes<HTMLKolTreeItemElement>;
            "kol-tree-item-wc": LocalJSX.KolTreeItemWc & JSXBase.HTMLAttributes<HTMLKolTreeItemWcElement>;
            "kol-tree-wc": LocalJSX.KolTreeWc & JSXBase.HTMLAttributes<HTMLKolTreeWcElement>;
            "kol-version": LocalJSX.KolVersion & JSXBase.HTMLAttributes<HTMLKolVersionElement>;
            "test-component": LocalJSX.TestComponent & JSXBase.HTMLAttributes<HTMLTestComponentElement>;
        }
    }
}


---

## Assistant

_Thinking:_

Let me now check the remaining details I need:1. `ErrorListPropType` is exported? `export * from './components.d'` — components.d.ts doesn't export ErrorListPropType. Let me check what's exported from schema types for ErrorList. Actually `export type { ... } from './schema'` only lists a few. So `ErrorListPropType` is likely NOT exported from the root. Let me check.

2. `MsgPropType` also likely not exported.

Let me check exports.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -n \"ErrorListPropType\\|MsgPropType\\|InputTypeOnDefault\\|ButtonVariantsEnum\" node_modules/@public-ui/components/dist/types/index.d.ts node_modules/@public-ui/components/dist/types/kolibri.d.ts node_modules/@public-ui/components/dist/types/enums/*.d.ts 2>/dev/null | head -20; echo \"=== schema exports ===\"; cat node_modules/@public-ui/components/dist/types/schema/props/index.d.ts | head -40"
}
```

=== schema exports ===
export { headingLevelOptions, type HeadingLevel } from '../../internal/props/level';
export * from './accept';
export * from './access-key';
export * from './accordion-callbacks';
export * from './active';
export * from './adjust-height';
export * from './alert';
export * from './alert-type';
export * from './align';
export * from './allow-multi-sort';
export * from './alt';
export * from './alternative-button-link-role';
export * from './aria-controls';
export * from './aria-current-value';
export * from './aria-description';
export * from './aria-details';
export * from './aria-expanded';
export * from './aria-labelledby';
export * from './aria-owns';
export * from './aria-selected';
export * from './auto-complete';
export * from './badge-text';
export * from './button-callbacks';
export * from './button-type';
export * from './button-variant';
export * from './checked';
export * from './collapsible';
export * from './color';
export * from './current-length';
export * from './custom-class';
export * from './details-callbacks';
export * from './disabled';
export * from './download';
export * from './error-list';
export * from './has-closer';
export * from './has-compact-button';
export * from './has-counter';
export * from './has-icons-when-expanded';
export * from './has-settings-menu';
export * from './has-value';


---

## Assistant

_Thinking:_

The schema/props/index.d.ts exports things but is it reachable from the package root? The root index.d.ts does `export * from './components.d'` and `export * from './enums/bund'` and `export * from './kolibri'`. Let's check whether `./schema` is exported from root.

Root index.d.ts exports:
- getDefaultThemeName from adopted-style-sheets
- * from './components.d'
- setCurrentLocation, ToasterService, bootstrap/isInitialized/register
- * from './enums/bund'
- * from './kolibri'
- KoliBri, KoliBriDevHelper from './schema'
- type { ... } from './schema' (a specific list)
- BEM, KolEvent, isTooltipOpen

So `ErrorListPropType` and `MsgPropType` are NOT exported from root. Only `KoliBri`, `KoliBriDevHelper`, BEM, KolEvent, and the listed types.

So in App.tsx, I cannot import `ErrorListPropType` from `@public-ui/components` directly. Let me verify.

Also `enums/bund` — check what that exports (maybe ButtonVariantsEnum?).

Let me check.

**Tool: shell**

**Input:**
```json
{
  "command": "cat node_modules/@public-ui/components/dist/types/enums/bund.d.ts 2>/dev/null || ls node_modules/@public-ui/components/dist/types/enums/; echo \"=== kolibri.d.ts ===\"; cat node_modules/@public-ui/components/dist/types/kolibri.d.ts | head -30; echo \"=== react-v19 exports ===\"; grep -n \"^export\" node_modules/@public-ui/react-v19/dist/index.d.ts"
}
```

export declare enum Bundesministerium {
    'Die Bundesregierung' = "BReg",
    'Bundesministerium der Finanzen' = "BMF",
    'Bundesministerium des Innern, für Bau und Heimat' = "BMI",
    'Auswärtiges Amt' = "AA",
    'Bundesministerium für Wirtschaft und Energie' = "BMWi",
    'Bundesministerium der Justiz und für Verbraucherschutz' = "BMJV",
    'Bundesministerium für Arbeit und Soziales' = "BMAS",
    'Bundesministerium der Verteidigung' = "BMVg",
    'Bundesministerium für Ernährung und Landwirtschaft' = "BMEL",
    'Bundesministerium für Familie, Senioren, Frauen und Jugend' = "BMFSFJ",
    'Bundesministerium für Gesundheit' = "BMG",
    'Bundesministerium für Verkehr und digitale Infrastruktur' = "BMVI",
    'Bundesministerium für Umwelt, Naturschutz und nukleare Sicherheit' = "BMU",
    'Bundesministerium für Bildung und Forschung' = "BMBF",
    'Bundesministerium für wirtschaftliche Zusammenarbeit und Entwicklung' = "BMZ"
}
export declare const BUNDESMINISTERIEN: string[];
export declare enum Bundesamt {
    'Beschaffungsamt des Bundesministeriums des Innern' = "BeschA",
    'Bundesamt für Ausrüstung, Informationstechnik und Nutzung der Bundeswehr' = "BAAINBw",
    'Bundesamt für äußere Restitutionen' = "BAR",
    'Bundesamt für Bauwesen und Raumordnung' = "BBR",
    'Bundesamt für Bevölkerungsschutz und Katastrophenhilfe' = "BBK",
    'Bundesamt für Familie und zivilgesellschaftliche Aufgaben' = "BAFzA",
    'Bundesamt für Güterverkehr' = "BAG",
    'Bundesamt für Justiz' = "BfJ",
    'Bundesamt für Kartographie und Geodäsie' = "BKG",
    'Bundesamt für kerntechnische Entsorgungssicherheit' = "BASE",
    'Bundesamt für Migration und Flüchtlinge' = "BAMF",
    'Bundesamt für Sicherheit in der Informationstechnik' = "BSI",
    'Bundesamt für Verbraucherschutz und Lebensmittelsicherheit' = "BVL",
    'Bundesamt für Verfassungsschutz' = "BfV",
    'Bundesamt für Wirtschaft und Ausfuhrkontrolle' = "BAFA",
    'Bundesamt für zentrale Dienste und offene Vermögensfragen' = "BADV",
    'Bundesanstalt für Verwaltungsdienstleistungen' = "BAV",
    Bundesarchiv = "BArch",
    'Bundesaufsichtsamt für Flugsicherung' = "BAF",
    Bundesausgleichsamt = "BAA",
    Bundeskartellamt = "BKartA",
    Bundeskriminalamt = "BKA",
    Bundesnachrichtendienst = "BND",
    'Bundesnetzagentur für Elektrizität, Gas, Telekommunikation, Post und Eisenbahnen' = "BNetzA",
    Bundespolizeipräsidium = "BPOLP",
    'Bundesprüfstelle für jugendgefährdende Medien' = "BPjM",
    Bundessortenamt = "BSA",
    Bundessprachenamt = "BSprA",
    'Bundesamt für Soziale Sicherung' = "BAS",
    Bundesverwaltungsamt = "BVA",
    'Bundeszentralamt für Steuern' = "BZSt",
    'Deutsches Patent- und Markenamt' = "DPMA",
    'Eisenbahn-Bundesamt' = "EBA",
    Generalzolldirektion = "GZD",
    'Militärischer Abschirmdienst' = "MAD",
    'Zentrale Stelle für Informationstechnik im Sicherheitsbereich' = "ZITiS"
}
export declare const BUNDESAEMTER: string[];
export declare enum Bundesanstalt {
    'Informationstechnikzentrum Bund' = "ITZBund",
    'Bundesanstalt für den Digitalfunk der Behörden und Organisationen mit Sicherheitsaufgaben' = "BDBOS",
    'Bundesanstalt für Landwirtschaft und Ernährung' = "BLE",
    'Bundesanstalt Technisches Hilfswerk' = "THW",
    'Bundesinstitut für Arzneimittel und Medizinprodukte' = "BfArM",
    'Bundesinstitut für Bevölkerungsforschung' = "BiB",
    'Bundesinstitut für Sportwissenschaft' = "BISp"
}
export declare const BUNDESANSTALTEN: string[];
export declare const BUND_LOGO_TEXT_MAP: Map<Bundesamt | Bundesanstalt | Bundesministerium, string[]>;
=== kolibri.d.ts ===
export {};

declare global {
	interface Window {
		KoliBri: Record<string, unknown>;
	}
}
=== react-v19 exports ===
69:export { KolAbbr, KolAccordion, KolAlert, KolAvatar, KolBadge, KolBreadcrumb, KolButton, KolButtonLink, KolCard, KolCombobox, KolDetails, KolDialog, KolDrawer, KolForm, KolHeading, KolIcon, KolImage, KolInputCheckbox, KolInputColor, KolInputDate, KolInputEmail, KolInputFile, KolInputNumber, KolInputPassword, KolInputRadio, KolInputRange, KolInputText, KolKolibri, KolLink, KolLinkButton, KolMeter, KolModal, KolNav, KolPagination, KolPopoverButton, KolProgress, KolQuote, KolSelect, KolSingleSelect, KolSkeleton, KolSkipNav, KolSpin, KolSplitButton, KolTableStateful, KolTableStateless, KolTabs, KolTextarea, KolToolbar, KolTree, KolTreeItem, KolVersion, createReactRenderElement, setTagNameTransformer };
70:export type { StyleReactProps };


---

## Assistant

_Thinking:_

So `@public-ui/components` root export: `export * from './components.d'` — components.d.ts contains `JSX` namespace exported as `export { LocalJSX as JSX }` and `declare global { namespace JSX ... }`. Also all interfaces including `HTMLKolFormElement`, `ErrorListPropType`? Let's check whether ErrorListPropType is exported from root index. Earlier grep of index.d.ts showed no ErrorListPropType. And `export { KoliBri, KoliBriDevHelper } from './schema'` only. And `export type { ... } from './schema'` — a fixed list not including ErrorListPropType.

Hmm, but `export * from './components.d'` — components.d.ts may re-export types? Let's check if ErrorListPropType is referenced there. It's the prop type in `KolForm` interface: `_errorList?: ErrorListPropType[];` — that's an imported type used inline. The TS declaration would need the import. So type ErrorListPropType isn't necessarily exported.

Let's check whether we can import type from '@public-ui/components'. Let's just check with tsc in practice. Simpler: define our own local type for error list to avoid import problems.

Actually, let's check what components.d.ts exports overall.

Let me now also double-check the key facts before writing the analysis:

1. Available components: KolForm, KolInputText, KolInputPassword, KolButton, KolAlert, KolCard, KolHeading, KolLink (for error list).

2. Structure: KolCard > KolHeading + KolForm > inputs + submit button. Form-level alert (KolAlert with `_alert` role=alert) for summary/status. Per-field `_msg` + `_touched` for validation feedback.

3. Accessibility:
   - `_label` on inputs renders a `<label for>` bound to the inner input id (shadow DOM), providing accessible name.
   - `_hint` → aria-describedby.
   - `_msg` with `_type: 'error'` → shown only when `_touched === true`; renders KolAlertFc with `alert` = `showAsAlert()` (touched && !focused) → role="alert" announced on blur.
   - `aria-invalid` set when error msg present and touched.
   - `aria-describedby` includes msg + hint ids.
   - KolForm `_errorList` renders a card alert with nav list of links that focus fields by selector (needs `id` on the host element).
   - Submit via KolButton `_type="submit"` inside KolForm triggers propagateSubmitEventToForm → KolForm `_on.onSubmit`; Enter in input also submits.
   - `_required` marks required; KolForm `_requiredText` default true shows mandatory hint.
   - Focus management: KolForm.focusErrorList() scrolls & focuses first error link.

4. API assumptions/uncertainties:
   - `_on` object prop passed through React wrapper as element property (not a React event) — the wrapper's attachProps sets node[name]=value for non-"onXxx" props. `_on` starts with underscore so it's set as a property. ✔ verified.
   - Event callbacks signature: `onChange/onInput: (event, value)`.
   - `_msg` object `{_description, _type}` only displayed when `_touched === true`.
   - `_touched` set internally on blur; also controllable as prop. Passing `_touched` from React works but internal blur mutates it — need to manage state ourselves to be deterministic.
   - KolForm `_errorList` validator: `value.find(v => !(typeof v === 'string' || typeof v === 'function')) === undefined` — this means items must be string or function?! Wait: validation function returns true if Array.isArray && every element is string or function. But type says ErrorListPropType = {message, selector, options}. And renderErrorList uses `error.message` and `error.selector`. So the validator would REJECT objects `{message, selector}`! Let's re-read: `value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined` → find returns the first v that is NOT string and NOT function. If all items are objects, find returns the object (truthy) → `=== undefined` false → validation fails → logWarn, state not set.

Hmm wait — that's a real discrepancy. Let me double check by reading the actual source in dist/collection.

Actually let me check the .map or the collection source.

This is important: if `_errorList` with objects fails validation, error list won't render. Let's verify carefully.

Also note: `renderErrorList(this._errorList)` uses `this._errorList` (raw prop) not state. So even if validation fails (which only affects `state`), render uses the raw prop! Let's check: in shadow.js line 57: `const hasErrorList = Array.isArray(this._errorList) && ...` and `renderErrorList(this._errorList)`. So it uses the raw prop directly, ignoring state. So validation warning is harmless — objects still render.

Hmm, but does Stencil re-render when a @Prop changes even if validation "fails"? Yes — Prop changes trigger re-render regardless; validation only writes to `state` via watchValidator. And render uses `this._errorList` raw. So it works.

But wait — is `_errorList` a @Prop with `state: true`? Let's confirm the render code.

Let's verify precisely.

Let me check shadow.js lines 40-75.

**Tool: shell**

**Input:**
```json
{
  "command": "sed -n '1,80p' node_modules/@public-ui/components/dist/collection/components/form/shadow.js"
}
```

/*!
 * KoliBri - The accessible HTML-Standard
 */
import { h, Host } from "@stencil/core";
import { validateErrorList, watchBoolean, watchString } from "../../schema";
import { translate } from "../../i18n";
import { KolLinkWcTag } from "../../core/component-names";
import KolAlertFc from "../../functional-components/Alert";
import { dispatchDomEvent, KolEvent } from "../../utils/events";
export class KolForm {
    constructor() {
        this.scrollOptionsFallback = {
            behavior: 'smooth',
            block: 'nearest',
        };
        this.translateErrorListMessage = translate('kol-error-list-message');
        this.translateErrorList = translate('kol-error-list');
        this.translateFormDescription = translate('kol-form-description');
        this.onSubmit = (event) => {
            var _a, _b;
            event.preventDefault();
            if (typeof ((_a = this.state._on) === null || _a === void 0 ? void 0 : _a.onSubmit) === 'function') {
                (_b = this.state._on) === null || _b === void 0 ? void 0 : _b.onSubmit(event);
            }
            if (this.host) {
                dispatchDomEvent(this.host, KolEvent.submit);
            }
        };
        this.onReset = (event) => {
            var _a, _b;
            event.preventDefault();
            if (typeof ((_a = this.state._on) === null || _a === void 0 ? void 0 : _a.onReset) === 'function') {
                (_b = this.state._on) === null || _b === void 0 ? void 0 : _b.onReset(event);
            }
            if (this.host) {
                dispatchDomEvent(this.host, KolEvent.reset);
            }
        };
        this.handleLinkClick = (selector, options) => {
            const targetElement = document.querySelector(selector);
            if (targetElement && typeof targetElement.focus === 'function') {
                targetElement.focus(options ? options : this.scrollOptionsFallback);
            }
        };
        this.setBlockElement = (el) => (this.errorListBlock = el);
        this.setFirstLinkElement = (el) => (this.errorListFirstLink = el);
        this._requiredText = true;
        this.state = {};
    }
    renderErrorList(errorList) {
        return (h(KolAlertFc, { class: "kol-form__alert", ref: this.setBlockElement, type: "error", variant: "card", label: this.translateErrorListMessage }, h("nav", { "aria-label": this.translateErrorList }, h("ul", null, errorList === null || errorList === void 0 ? void 0 : errorList.map((error, index) => (h("li", { key: index }, h(KolLinkWcTag, { class: "kol-form__link", _href: "", _label: error.message, _on: { onClick: typeof error.selector === 'string' ? () => this.handleLinkClick(String(error.selector), error.options) : error.selector }, ref: index === 0 ? this.setFirstLinkElement : undefined }))))))));
    }
    renderFormElement() {
        return (h("form", { class: "kol-form", method: "post", onSubmit: this.onSubmit, onReset: this.onReset, noValidate: true }, this.state._requiredText === true ? (h("p", { class: "kol-form__mandatory-fields-hint" }, this.translateFormDescription)) : typeof this.state._requiredText === 'string' && this.state._requiredText.length > 0 ? (h("p", { class: "kol-form__mandatory-fields-hint" }, this.state._requiredText)) : null, h("slot", null)));
    }
    render() {
        const hasErrorList = Array.isArray(this._errorList) && this._errorList.length > 0;
        return (h(Host, { key: 'c2b8fc8fe2e383c833b04a41eed66ffa3bf9391c' }, hasErrorList && this.renderErrorList(this._errorList), this.renderFormElement()));
    }
    scrollToErrorList(options) {
        setTimeout(() => {
            var _a, _b;
            (_b = (_a = this.errorListFirstLink) === null || _a === void 0 ? void 0 : _a.querySelector('a')) === null || _b === void 0 ? void 0 : _b.focus(options ? options : this.scrollOptionsFallback);
        }, 250);
    }
    async focusErrorList(options) {
        this.scrollToErrorList(options);
        return Promise.resolve();
    }
    validateOn(value) {
        if (typeof value === 'object' && value !== null) {
            this.state = Object.assign(Object.assign({}, this.state), { _on: value });
        }
    }
    validateRequiredText(value) {
        if (typeof value === 'boolean') {
            watchBoolean(this, '_requiredText', value);
        }
        else {
            watchString(this, '_requiredText', value);


---

## Assistant

_Thinking:_

Confirmed: `render()` uses `this._errorList` (the raw prop), so object entries `{message, selector}` work. The validator `validateErrorList` only writes to `state._errorList` (which is unused for rendering). So passing objects works at runtime, though a dev-mode console hint may be logged.

Wait — let's double-check: `validateErrorList` fails for objects → `logWarn`/`devHint`? Let's check watchValidator else branch: it does `requiredGeneric.add(null)` then logs. Actually earlier read showed:
```
else {
    if (!options.required) { requiredGeneric.add(null); }
    ... (truncated)
}
```
Let's read lines 1451-1480 to see what it does.

Also important: does the failed validation prevent re-render? No, Stencil re-renders on prop change regardless.

Let me confirm watchValidator's else branch.

**Tool: shell**

**Input:**
```json
{
  "command": "sed -n '1451,1490p' node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js; echo \"=== validateErrorList in schema ===\"; cat node_modules/@public-ui/components/dist/collection/schema/props/error-list.js"
}
```

function watchValidator(component, propName, validationFunction, requiredGeneric, value, options = {}) {
    if (validationFunction(value)) {
        setState(component, propName, value, options.hooks);
    }
    else if (value === undefined && options.required !== true && validationFunction(options.defaultValue)) {
        setState(component, propName, options.defaultValue, options.hooks);
    }
    else {
        if (!options.required) {
            requiredGeneric.add(null);
        }
        logWarn(component, propName, value, requiredGeneric);
    }
}
const watchBoolean = (component, propName, value, options) => {
    watchValidator(component, propName, (value) => typeof value === 'boolean', new Set(['Boolean {true, false}']), value, options);
};
const watchString = (component, propName, value, options = {}) => {
    const minLength = typeof options.minLength === 'number' ? options === null || options === void 0 ? void 0 : options.minLength : 0;
    watchValidator(component, propName, (value) => typeof value === 'string' && value.length >= minLength && (typeof (options === null || options === void 0 ? void 0 : options.maxLength) === 'undefined' || value.length <= options.maxLength), new Set([`String`]), value, options);
};
const watchNumber = (component, propName, value, options) => {
    watchValidator(component, propName, (value) => typeof value === 'number' &&
        (typeof (options === null || options === void 0 ? void 0 : options.min) === 'undefined' || (typeof (options === null || options === void 0 ? void 0 : options.min) === 'number' && value >= options.min)) &&
        (typeof (options === null || options === void 0 ? void 0 : options.max) === 'undefined' || (typeof (options === null || options === void 0 ? void 0 : options.max) === 'number' && value <= options.max)), new Set(['Number']), value, options);
};
const watchJsonArrayString = (component, propName, itemValidation, value, arrayValidation = (items) => items === items, options = {}) => {
    emptyStringByArrayHandler(value, () => {
        objectObjectHandler(value, () => {
            if (typeof value === 'undefined') {
                value = [];
            }
            try {
                try {
                    value = parseJson(value);
                }
                catch (_a) {
                }
                if (Array.isArray(value)) {
                    const invalid = value.find((item) => !itemValidation(item));
=== validateErrorList in schema ===
/*!
 * KoliBri - The accessible HTML-Standard
 */
import { watchValidator } from "../utils";
export const validateErrorList = (component, value) => {
    watchValidator(component, 'errorList', (value) => Array.isArray(value) && value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined, new Set(['string', 'function']), value);
};
//# sourceMappingURL=error-list.js.map


---

## Assistant

_Thinking:_

Confirmed: the `validateErrorList` validator only affects `state._errorList`, but `render()` uses `this._errorList` (the raw prop) directly. So passing objects `{message, selector}` renders fine, just triggers a console dev warning in dev mode (logWarn → Log.warn? let's check logWarn). Actually `logWarn` probably uses console.warn guarded by dev mode. Minor cosmetic issue.

Let's check logWarn quickly.

Now let me also verify: does `render()` re-run when `_errorList` prop changes? Stencil props re-render by default (unless `mutable`/`reflect`). `@Prop() _errorList` → re-render on change. Yes.

Also verify `hasErrorList` uses `this._errorList` — good.

Now: the errorList `selector` — `document.querySelector(selector)`. We need an id on the kol-input-text host. React wrapper passes `id` as attribute. Let's double-check the React wrapper's `render()` filter for `id`: `name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()` — "id" doesn't start with "on". So else branch: `type === 'string'` → `acc[camelToDashCase('id')] = 'id'` → `acc['id']`. camelToDashCase('id') = 'id' (no uppercase). Good.

Then attachProps: `node['id'] = 'login-username'` and `node.setAttribute('id', 'login-username')`. 

Hmm wait, careful: in attachProps, for `id`, `node instanceof Element` → true, sets className etc, then `node[name] = newProps[name]` → sets `id` property → reflects to attribute. Then `propType === 'string'` → `node.setAttribute(camelToDashCase('id'), ...)` = setAttribute('id'). Both fine.

So `document.querySelector('#login-username')` finds `<kol-input-text id="login-username">`. `.focus` is a method on the component → `typeof targetElement.focus === 'function'` → true. It calls `targetElement.focus({behavior:'smooth', block:'nearest'})`. KolInputText.focus(options) → let's verify it accepts ScrollIntoViewOptions.

Let's check the input-text focus implementation.

Actually `focus: (options?: KolFocusOptions) => Promise<void>` where KolFocusOptions presumably = ScrollIntoViewOptions. Good enough.

Alternative: use a function as `selector` — `ErrorListPropType.selector: string | EventCallback<Event>`. If function, `renderErrorList` uses it directly as onClick. That avoids DOM id dependency. But then `document.querySelector` isn't used. Using a ref-based callback is more React-idiomatic and robust. Hmm, but `_errorList` object is passed to a web component as a property — refs work fine inside the callback closure.

I think using string selectors with ids is cleaner/declarative and matches KoliBri's design. But refs are more robust. Let me use string selectors `#login-username` — simple, and demonstrates the intended API. Actually, wait: `targetElement.focus(options)` on `<kol-input-text id="login-username">`. Let's verify the host has a `focus` method that focuses the inner input.

Let me check input-text shadow.d.ts / focus impl.

Also I want to double check `_hint` prop exists on inputs.

Let's check KolInputText interface fully for `_hint`, `_required`, `_name`, `_value`, `_touched`, `_msg`.

Let me grep the interface property list.

**Tool: shell**

**Input:**
```json
{
  "command": "awk 'NR>=2178 && NR<=2350' node_modules/@public-ui/components/dist/types/components.d.ts | grep -E '^\\s+\"_|^\\s+\"focus|^\\s+\"click'; echo \"=== logWarn ===\"; grep -n -A8 \"const logWarn\" node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js"
}
```

        "_accessKey"?: AccessKeyPropType;
        "_ariaDetails"?: AriaDetailsPropType;
        "_autoComplete"?: AutoCompletePropType;
        "_disabled"?: boolean;
        "_hasCounter"?: boolean;
        "_hideLabel"?: boolean;
        "_hideMsg"?: boolean;
        "_hint"?: string;
        "_icons"?: IconsHorizontalPropType;
        "_infoPopover"?: FormFieldLabelInfoPopoverProps1;
        "_label": LabelWithExpertSlotPropType;
        "_maxLength"?: number;
        "_maxLengthBehavior"?: MaxLengthBehaviorPropType;
        "_msg"?: Stringified<MsgPropType>;
        "_name"?: NamePropType;
        "_on"?: InputTypeOnDefault;
        "_pattern"?: string;
        "_placeholder"?: string;
        "_readOnly"?: boolean;
        "_required"?: boolean;
        "_shortKey"?: ShortKeyPropType;
        "_smartButton"?: Stringified<InternalButtonProps>;
        "_spellCheck"?: SpellCheckPropType;
        "_suggestions"?: SuggestionsPropType;
        "_syncValueBySelector"?: SyncValueBySelectorPropType;
        "_tooltipAlign"?: TooltipAlignPropType;
        "_touched"?: boolean;
        "_type"?: InputTextTypePropType;
        "_value"?: string;
        "_variant"?: VariantClassNamePropType;
        "click": () => Promise<void>;
        "focus": (options?: KolFocusOptions) => Promise<void>;
=== logWarn ===
1448:const logWarn = (component, propName, value, requiredGeneric) => {
1449-    devHint(`[${component.constructor.name}] The property value: (${value}) for '${propName}' is not valid. Allowed values are: ${Array.from(requiredGeneric).join(', ')}`);
1450-};
1451-function watchValidator(component, propName, validationFunction, requiredGeneric, value, options = {}) {
1452-    if (validationFunction(value)) {
1453-        setState(component, propName, value, options.hooks);
1454-    }
1455-    else if (value === undefined && options.required !== true && validationFunction(options.defaultValue)) {
1456-        setState(component, propName, options.defaultValue, options.hooks);


---

## Assistant

_Thinking:_

Now check KolInputPassword interface props and KolForm props, KolAlert props, KolCard props.

KolForm props: `_errorList`, `_on`, `_requiredText`, `focusErrorList`.

Let me confirm KolInputPassword props list.

**Tool: shell**

**Input:**
```json
{
  "command": "awk 'NR>=1805 && NR<=1952' node_modules/@public-ui/components/dist/types/components.d.ts | grep -E '^\\s+\"_|^\\s+\"focus'; echo \"=== alert props ===\"; awk 'NR>=81 && NR<=117' node_modules/@public-ui/components/dist/types/components.d.ts | grep -E '^\\s+\"_'; echo \"=== button props ===\"; awk 'NR>=213 && NR<=321' node_modules/@public-ui/components/dist/types/components.d.ts | grep -E '^\\s+\"_'"
}
```

        "_accessKey"?: string;
        "_ariaDetails"?: AriaDetailsPropType;
        "_autoComplete"?: AutoCompletePropType;
        "_disabled"?: boolean;
        "_hasCounter"?: boolean;
        "_hideLabel"?: boolean;
        "_hideMsg"?: boolean;
        "_hint"?: string;
        "_icons"?: IconsHorizontalPropType;
        "_infoPopover"?: FormFieldLabelInfoPopoverProps;
        "_label": LabelWithExpertSlotPropType;
        "_maxLength"?: number;
        "_maxLengthBehavior"?: MaxLengthBehaviorPropType;
        "_msg"?: Stringified<MsgPropType>;
        "_name"?: NamePropType;
        "_on"?: InputTypeOnDefault;
        "_pattern"?: string;
        "_placeholder"?: string;
        "_readOnly"?: boolean;
        "_required"?: boolean;
        "_shortKey"?: ShortKeyPropType;
        "_smartButton"?: Stringified<InternalButtonProps>;
        "_syncValueBySelector"?: SyncValueBySelectorPropType;
        "_tooltipAlign"?: TooltipAlignPropType;
        "_touched"?: boolean;
        "_value"?: string;
        "_variant"?: VariantClassNamePropType;
        "_visibilityToggle"?: VisibilityTogglePropType;
        "focus": (options?: KolFocusOptions) => Promise<void>;
=== alert props ===
        "_alert"?: boolean;
        "_hasCloser"?: boolean;
        "_label"?: LabelPropType;
        "_level"?: HeadingLevel;
        "_on"?: KoliBriAlertEventCallbacks;
        "_type"?: AlertTypePropType;
        "_variant"?: AlertVariantPropType;
=== button props ===
        "_accessKey"?: AccessKeyPropType;
        "_ariaControls"?: string;
        "_ariaDescription"?: AriaDescriptionPropType;
        "_ariaExpanded"?: boolean;
        "_ariaSelected"?: boolean;
        "_customClass"?: CustomClassPropType;
        "_disabled"?: boolean;
        "_hideLabel"?: boolean;
        "_icons"?: IconsPropType;
        "_inline"?: InlinePropType;
        "_label": LabelWithExpertSlotPropType;
        "_name"?: string;
        "_on"?: ButtonCallbacksPropType<StencilUnknown>;
        "_role"?: AlternativeButtonLinkRolePropType;
        "_shortKey"?: ShortKeyPropType;
        "_syncValueBySelector"?: SyncValueBySelectorPropType;
        "_tooltipAlign"?: TooltipAlignPropType;
        "_type"?: ButtonTypePropType;
        "_value"?: StencilUnknown;
        "_variant"?: VariantClassNamePropType;


---

## Assistant

_Thinking:_

Now let me check the MsgPropType type used in `_msg` — `Stringified<MsgPropType>` = `string | MsgPropType`. MsgPropType = Omit<AlertProps, '_level'|'_on'|'_label'|'_hasCloser'|'_variant'> & { _description: string }. AlertProps likely = Generic.Element.Members<{_type}, {_alert}>. Let's check components/alert.d.ts.

Also need to check that TS type for `_msg` object — passing `{ _description: '...', _type: 'error' }`.

Let's check alert.d.ts.

**Tool: shell**

**Input:**
```json
{
  "command": "cat node_modules/@public-ui/components/dist/types/schema/components/alert.d.ts; echo \"=== msg ===\"; cat node_modules/@public-ui/components/dist/types/schema/props/msg.d.ts; echo \"=== touched prop ===\"; cat node_modules/@public-ui/components/dist/types/schema/props/touched.d.ts 2>/dev/null; echo \"=== error-list d.ts ===\"; cat node_modules/@public-ui/components/dist/types/schema/props/error-list.d.ts"
}
```

import type { Generic } from 'adopted-style-sheets';
import type { HeadingLevel, PropAlert, PropAlertType, PropAlertVariant, PropHasCloser, PropLabel } from '../props';
import type { EventCallback } from '../types';
export type KoliBriAlertEventCallbacks = {
    onClose?: EventCallback<Event>;
};
type RequiredAlertProps = NonNullable<unknown>;
type OptionalAlertProps = {
    level: HeadingLevel;
    on: KoliBriAlertEventCallbacks;
} & PropLabel & PropAlert & PropHasCloser & PropAlertType & PropAlertVariant;
type RequiredAlertStates = RequiredAlertProps;
type OptionalAlertStates = OptionalAlertProps;
export type InternalAlertProps = RequiredAlertProps & OptionalAlertProps;
export type AlertProps = Generic.Element.Members<RequiredAlertProps, OptionalAlertProps>;
export type AlertStates = Generic.Element.Members<RequiredAlertStates, OptionalAlertStates>;
export type AlertAPI = Generic.Element.ComponentApi<RequiredAlertProps, OptionalAlertProps, RequiredAlertStates, OptionalAlertStates>;
export {};
=== msg ===
import type { Generic } from 'adopted-style-sheets';
import type { AlertProps } from '../components';
import type { Stringified } from '../types';
export type MsgPropType = Omit<AlertProps, '_level' | '_on' | '_label' | '_hasCloser' | '_variant'> & {
    _description: string;
};
export type PropMsg = {
    msg: Stringified<MsgPropType>;
};
export declare const validateMsg: (component: Generic.Element.Component, value?: Stringified<MsgPropType>) => void;
export declare function isMsgDefinedAndInputTouched(msg?: Stringified<MsgPropType>, touched?: boolean): boolean;
export declare const checkHasMsg: typeof isMsgDefinedAndInputTouched;
export declare function normalizeMsg(msg?: Stringified<MsgPropType>): MsgPropType | undefined;
export declare function getMsgType(msg?: Stringified<MsgPropType>): MsgPropType['_type'] | 'error';
=== touched prop ===
import type { Generic } from 'adopted-style-sheets';
export type TouchedPropType = boolean;
export type PropTouched = {
    touched: TouchedPropType;
};
export declare const validateTouched: (component: Generic.Element.Component, value?: TouchedPropType) => void;
=== error-list d.ts ===
import type { Generic } from 'adopted-style-sheets';
import type { KolFocusOptions } from '../interfaces';
import type { EventCallback } from '../types';
export type ErrorListPropType = {
    message: string;
    selector: string | EventCallback<Event>;
    options?: KolFocusOptions;
};
export type PropErrorList = {
    errorList: ErrorListPropType[];
};
export declare const validateErrorList: (component: Generic.Element.Component, value?: ErrorListPropType[]) => void;


---

## Assistant

_Thinking:_

Now, key question: are `ErrorListPropType` and `MsgPropType` exported from `@public-ui/components` root? Root index.d.ts has `export * from './components.d'` and `export type { ... } from './schema'` (a limited list), plus `export { KoliBri, KoliBriDevHelper } from './schema'`. So `ErrorListPropType` is NOT exported from root.

Wait — `export * from './components.d'` — does components.d.ts re-export schema types? Let's check. components.d.ts probably imports them but doesn't re-export.

Actually, let's check if there's a `typesVersions` or the package.json exports map pointing to `./dist/types/schema`. Let's check package.json exports.

Actually simpler: test compile. I'll write the code and run `tsc`.

Let me check package.json exports of @public-ui/components.

**Tool: shell**

**Input:**
```json
{
  "command": "cat node_modules/@public-ui/components/package.json; echo \"=== components.d.ts head ===\"; head -40 node_modules/@public-ui/components/dist/types/components.d.ts"
}
```

{
  "name": "@public-ui/components",
  "version": "4.4.0",
  "license": "EUPL-1.2",
  "homepage": "https://public-ui.github.io",
  "repository": {
    "type": "git",
    "url": "https://github.com/public-ui/kolibri"
  },
  "bugs": {
    "url": "https://github.com/public-ui/kolibri/issues",
    "email": "kolibri@itzbund.de"
  },
  "author": {
    "name": "Informationstechnikzentrum Bund",
    "email": "kolibri@itzbund.de"
  },
  "main": "dist/index.cjs.js",
  "module": "dist/index.js",
  "bin": {
    "kolibri-copy-assets": "./copy-assets.mjs"
  },
  "exports": {
    ".": {
      "types": "./dist/types/index.d.ts",
      "import": "./dist/index.js",
      "require": "./dist/index.cjs.js"
    },
    "./loader": {
      "types": "./loader/index.d.ts",
      "import": "./loader/index.mjs",
      "require": "./dist/loader/index.cjs.js"
    },
    "./custom-elements.json": "./custom-elements.json",
    "./package.json": "./package.json"
  },
  "customElements": "custom-elements.json",
  "es2015": "dist/esm/index.mjs",
  "es2017": "dist/esm/index.mjs",
  "types": "dist/types/index.d.ts",
  "unpkg": "dist/stencil/stencil.js",
  "collection:main": "dist/collection/index.js",
  "collection": "dist/collection/collection-manifest.json",
  "sideEffects": true,
  "description": "Contains all web components that belong to KoliBri - The accessible HTML-Standard.",
  "keywords": [
    "accessibility",
    "accessible",
    "bitv",
    "framework",
    "library",
    "designsystem",
    "design",
    "system",
    "web components",
    "webcomponents",
    "aria",
    "wai",
    "axe",
    "custom elements",
    "styleguide",
    "style",
    "guide",
    "ui",
    "html",
    "css",
    "web",
    "a11y",
    "w3c",
    "webstandard",
    "wcag"
  ],
  "dependencies": {
    "@floating-ui/dom": "1.8.0",
    "color-convert": "3.1.3",
    "color-rgba": "2.4.0",
    "lodash-es": "4.18.1",
    "markdown-it": "14.3.0",
    "rgba-convert": "0.3.0",
    "typed-bem": "1.0.2",
    "wcag-contrast": "3.0.0"
  },
  "devDependencies": {
    "@playwright/test": "1.60.0",
    "@public-ui/stencil-angular-output-target": "0.9.0",
    "@public-ui/stencil-react-output-target": "0.6.0",
    "@public-ui/stencil-solid-output-target": "0.2.0",
    "@public-ui/stencil-vue-output-target": "0.9.0",
    "@revolist/svelte-output-target": "0.0.7",
    "@stencil-community/postcss": "2.2.0",
    "@stencil/core": "4.38.3",
    "@stencil/playwright": "0.5.1",
    "@stencil/sass": "3.3.2",
    "@types/jest": "29.5.14",
    "@types/lodash-es": "4.17.12",
    "@types/markdown-it": "14.2.0",
    "@types/mustache": "4.2.6",
    "@types/node": "26.4.0",
    "@types/pug": "2.0.10",
    "@types/twig": "1.12.17",
    "@types/wcag-contrast": "3.0.3",
    "adopted-style-sheets": "1.1.9-rc.25",
    "autoprefixer": "10.5.4",
    "cross-env": "10.1.0",
    "cssnano": "8.0.10",
    "eslint": "9.39.5",
    "eslint-plugin-perfectionist": "5.10.1",
    "jest": "29.7.0",
    "jest-cli": "29.7.0",
    "knip": "6.32.3",
    "mustache": "4.2.0",
    "postcss": "8.5.26",
    "postcss-sorting": "10.0.0",
    "prettier": "3.9.6",
    "prettier-plugin-organize-imports": "4.3.0",
    "pug": "3.0.4",
    "rimraf": "6.1.3",
    "stencil-awesome-test": "1.0.6",
    "stylelint": "17.14.1",
    "terser": "5.51.2",
    "twig": "3.0.0",
    "typescript": "5.9.3",
    "@public-ui/eslint-config": "4.3.0-rc.1",
    "@public-ui/stylelint-rules": "4.1.2-rc.1"
  },
  "peerDependencies": {
    "adopted-style-sheets": "1.1.9-rc.25"
  },
  "files": [
    "assets",
    "copy-assets.mjs",
    "dist",
    "doc",
    "custom-elements.json",
    "index.scss",
    "loader",
    "vscode-custom-data.json"
  ],
  "scripts": {
    "assets:kolicons": "pnpm --filter @public-ui/icons build",
    "build": "pnpm build:light",
    "build:light": "mkdir doc && cross-env NODE_ENV=production stencil build --docs --prod && node scripts/autogen.doc.js && node scripts/vaadin.js && pnpm format -w",
    "clear": "rimraf -g dist doc www ../adapters/angular/v19/src ../adapters/angular/v20/src ../adapters/angular/v21/src ../adapters/hydrate/dist ../adapters/react/src ../adapters/react-v19/src ../adapters/solid/src ../adapters/vaadin/*.java ../adapters/vue/src assets/kolicons",
    "format": "prettier --check src",
    "lint": "pnpm lint:eslint && pnpm lint:stylelint && pnpm lint:tsc && pnpm lint:i18n",
    "lint:eslint": "eslint src",
    "lint:i18n": "tsx scripts/lint-i18n.ts",
    "lint:stylelint": "stylelint \"src/**/*.{css,scss}\"",
    "lint:stylelint:components": "stylelint src/components/**/*.{css,scss}",
    "lint:tsc": "tsc --noemit",
    "dev": "cross-env NODE_ENV=development stencil build --prod --watch",
    "prod": "stencil build --prod",
    "test": "pnpm test:unit && pnpm test:e2e",
    "test:e2e": "playwright test",
    "test:unit": "mkdir -p dist && cross-env NODE_ENV=test stencil test --spec --json --outputFile dist/jest-test-results.json",
    "test:update:unit": "pnpm test:unit -u",
    "test:watch": "cross-env NODE_ENV=test stencil test --spec --watchAll",
    "prebuild:light": "pnpm clear && pnpm assets:kolicons",
    "pretest:e2e": "pnpm assets:kolicons",
    "xunused": "knip"
  }
}=== components.d.ts head ===
/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "./stencil-public-runtime";
import { AccessKeyPropType, AccordionCallbacksPropType, AlertTypePropType, AlertVariantPropType, AlignPropType, AlternativeButtonLinkRolePropType, AriaCurrentValuePropType, AriaDescriptionPropType, AriaDetailsPropType, AriaOwnsPropType, AutoCompletePropType, BadgeTextPropType, BreadcrumbLinkProps, ButtonCallbacksPropType, ButtonOrLinkOrTextWithChildrenProps, ButtonTypePropType, ColorPair, CustomClassPropType, DetailsCallbacksPropType, DownloadPropType, ErrorListPropType, FixedColsPropType, HasSettingsMenuPropType, HeadingLevel, HrefPropType, IconsHorizontalPropType, IconsPropType, IdPropType, InlinePropType, InputCheckboxIconsProp, InputDateTypePropType, InputTextTypePropType, InputTypeOnDefault, InternalButtonProps, Iso8601, KolFocusOptions, KoliBriAlertEventCallbacks, KoliBriCardEventCallbacks, KoliBriDialogEventCallbacks, KoliBriFormCallbacks, KoliBriIconsProp, KoliBriModalEventCallbacks, KoliBriPaginationButtonCallbacks, KoliBriTableDataType, KoliBriTableHeaderCell, KoliBriTableHeaders, KoliBriTablePaginationProps, KoliBriTableSelectionKeys, KoliBriTabsCallbacks, LabelAlignPropType, LabelPropType, LabelWithExpertSlotPropType, LinkOnCallbacksPropType, LinkProps, LinkTargetPropType, MaxLengthBehaviorPropType, MaxPropType, MsgPropType, NamePropType, NumberString, OpenPropType, OptionsPropType, OptionsWithOptgroupPropType, PaginationHasButton, PaginationPositionPropType, PopoverAlignPropType, PropColor, RadioOptionsPropType, RowsPropType, ShortKeyPropType, SpellCheckPropType, StencilUnknown, Stringified, SuggestionsPropType, SyncValueBySelectorPropType, TabBehaviorPropType, TabButtonProps, TableCallbacksPropType, TableDataFootPropType, TableDataPropType, TableHeaderCellsPropType, TableSelectionPropType, TableStatefulCallbacksPropType, TextareaResizePropType, Toast, ToastState, ToolbarItemsPropType, TooltipAlignPropType, VariantClassNamePropType, VisibilityTogglePropType } from "./schema";
import { AriaHasPopupPropType } from "./schema/props/aria-has-popup";
import { unknown as FormFieldLabelInfoPopoverProps } from "./components";
import { ModalVariantPropType } from "./schema/props/variant/modal";
import { LoadingType, OrientationPropType as OrientationPropType1, ProgressVariantType, QuoteVariantType, SpinVariantType } from "./internal/props";
import { KoliBriImageEventCallbacks } from "./schema/components/image";
import { InputCheckboxVariantPropType } from "./schema/props/variant-input-checkbox";
import { OrientationPropType } from "./schema/props/orientation";
import { FormFieldLabelInfoPopoverProps as FormFieldLabelInfoPopoverProps1 } from "./functional-components/FormFieldLabel/FormFieldLabel";
import { AriaLabelledbyPropType } from "./schema/props/aria-labelledby";
import { HasCreateButtonPropType } from "./schema/props/has-create-button";
export { AccessKeyPropType, AccordionCallbacksPropType, AlertTypePropType, AlertVariantPropType, AlignPropType, AlternativeButtonLinkRolePropType, AriaCurrentValuePropType, AriaDescriptionPropType, AriaDetailsPropType, AriaOwnsPropType, AutoCompletePropType, BadgeTextPropType, BreadcrumbLinkProps, ButtonCallbacksPropType, ButtonOrLinkOrTextWithChildrenProps, ButtonTypePropType, ColorPair, CustomClassPropType, DetailsCallbacksPropType, DownloadPropType, ErrorListPropType, FixedColsPropType, HasSettingsMenuPropType, HeadingLevel, HrefPropType, IconsHorizontalPropType, IconsPropType, IdPropType, InlinePropType, InputCheckboxIconsProp, InputDateTypePropType, InputTextTypePropType, InputTypeOnDefault, InternalButtonProps, Iso8601, KolFocusOptions, KoliBriAlertEventCallbacks, KoliBriCardEventCallbacks, KoliBriDialogEventCallbacks, KoliBriFormCallbacks, KoliBriIconsProp, KoliBriModalEventCallbacks, KoliBriPaginationButtonCallbacks, KoliBriTableDataType, KoliBriTableHeaderCell, KoliBriTableHeaders, KoliBriTablePaginationProps, KoliBriTableSelectionKeys, KoliBriTabsCallbacks, LabelAlignPropType, LabelPropType, LabelWithExpertSlotPropType, LinkOnCallbacksPropType, LinkProps, LinkTargetPropType, MaxLengthBehaviorPropType, MaxPropType, MsgPropType, NamePropType, NumberString, OpenPropType, OptionsPropType, OptionsWithOptgroupPropType, PaginationHasButton, PaginationPositionPropType, PopoverAlignPropType, PropColor, RadioOptionsPropType, RowsPropType, ShortKeyPropType, SpellCheckPropType, StencilUnknown, Stringified, SuggestionsPropType, SyncValueBySelectorPropType, TabBehaviorPropType, TabButtonProps, TableCallbacksPropType, TableDataFootPropType, TableDataPropType, TableHeaderCellsPropType, TableSelectionPropType, TableStatefulCallbacksPropType, TextareaResizePropType, Toast, ToastState, ToolbarItemsPropType, TooltipAlignPropType, VariantClassNamePropType, VisibilityTogglePropType } from "./schema";
export { AriaHasPopupPropType } from "./schema/props/aria-has-popup";
export { unknown as FormFieldLabelInfoPopoverProps } from "./components";
export { ModalVariantPropType } from "./schema/props/variant/modal";
export { LoadingType, OrientationPropType as OrientationPropType1, ProgressVariantType, QuoteVariantType, SpinVariantType } from "./internal/props";
export { KoliBriImageEventCallbacks } from "./schema/components/image";
export { InputCheckboxVariantPropType } from "./schema/props/variant-input-checkbox";
export { OrientationPropType } from "./schema/props/orientation";
export { FormFieldLabelInfoPopoverProps as FormFieldLabelInfoPopoverProps1 } from "./functional-components/FormFieldLabel/FormFieldLabel";
export { AriaLabelledbyPropType } from "./schema/props/aria-labelledby";
export { HasCreateButtonPropType } from "./schema/props/has-create-button";
export namespace Components {
    /**
     * The **Abbr** component implements the HTML tag `abbr`.
     */
    interface KolAbbr {
        /**
          * DEPRECATED! Defines the visible or semantic label of the component (e.g. aria-label, label, headline, caption, summary, etc.).
         */
        "_label"?: LabelPropType;
    }
    /**


---

## Assistant

_Thinking:_

`components.d.ts` re-exports `ErrorListPropType`, `MsgPropType`, `InputTypeOnDefault`, etc. And `index.d.ts` does `export * from './components.d'`. So `import type { ErrorListPropType, MsgPropType, HTMLKolFormElement, HTMLKolInputTextElement, HTMLKolInputPasswordElement, HTMLKolAlertElement } from '@public-ui/components'` works.

Now let's confirm `HTMLKolInputTextElement` etc exist in components.d.ts — yes (line 4572 for input-text).

Now, one more thing: how does the React wrapper handle the `id` prop and does `attachProps` set `_msg` object? Let's re-verify the full attachProps and render functions carefully (from earlier reading).

From earlier read of index.mjs:

```js
const attachProps = (node, newProps, oldProps = {}) => {
  if (node instanceof Element) {
    const className = getClassName(node.classList, newProps, oldProps);
    if (className !== "") node.className = className;
    Object.keys(newProps).forEach((name) => {
      if (name === "children" || name === "style" || name === "ref" || name === "class" || name === "className" || name === "forwardedRef") return;
      if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
        const eventName = name.substring(2);
        const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);
        if (!isCoveredByReact(eventNameLc)) syncEvent(node, eventNameLc, newProps[name]);
      } else {
        node[name] = newProps[name];
        const propType = typeof newProps[name];
        if (propType === "string") {
          node.setAttribute(camelToDashCase(name), newProps[name]);
        }
      }
    });
  }
  ...
};
```

Wait — there's a subtlety: `name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()`. For `_on` → indexOf returns -1, so false → goes to else → `node["_on"] = {...}`. Good.

Hmm, but wait: for a prop named `_on`, `name[2]` is 'o'... doesn't matter since indexOf !== 0.

But there's an important catch: `node.setAttribute(camelToDashCase(name), ...)` for string props. `camelToDashCase("_label")` → `_label` (no uppercase) → sets attribute `_label`. Fine. `_autoComplete` → `_auto-complete`. Stencil prop `_autoComplete` attribute is `_auto-complete`. 

But also `node["_autoComplete"] = value` sets the property. That's the primary mechanism. Setting attribute too is harmless.

Hmm, actually one concern: `node[name] = value` for `_label` etc. works.

Now for `_msg` object: `node["_msg"] = {...}` — property set, no attribute. Stencil's `@Prop() _msg` — property assignment triggers validation. Good.

And `_errorList` array: `node["_errorList"] = [...]` property. Good.

And `_touched` boolean: `node["_touched"] = true`, propType boolean → no setAttribute. Good.

And `_on` object: property. Good.

Now `render()` in the React component:
```js
render() {
  const { children, forwardedRef, style, className, ref, ...cProps } = this.props;
  let propsToPass = Object.keys(cProps).reduce((acc, name) => {
    const value = cProps[name];
    if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
      const eventName = name.substring(2).toLowerCase();
      if (typeof document !== "undefined" && isCoveredByReact(eventName)) acc[name] = value;
    } else {
      const type = typeof value;
      if (type === "string" || type === "boolean" || type === "number") {
        acc[camelToDashCase(name)] = value;
      }
    }
    return acc;
  }, {});
  ...
}
```

So objects (`_on`, `_msg`, `_errorList`) are NOT passed to createElement — only applied in componentDidUpdate via attachProps. Wait, `componentDidMount() { this.componentDidUpdate(this.props); }` → `attachProps(this.componentEl, this.props, prevProps)`. So on mount, `_on`/`_msg`/`_errorList` are applied. Good.

BUT: important — on the very first render, `propsToPass` excludes objects. So `<kol-form>` is created without `_errorList`. Then componentDidMount applies it. Fine.

Another important issue: **booleans in propsToPass**: `_touched={true}` → `acc["_touched"] = true` → React sets attribute? React19 for custom elements: unknown attributes with boolean `true` → sets attribute `_touched="true"`. Hmm, actually React19 sets `attribute="" `... Let me think. For custom elements, React 19 will set the attribute with the stringified value. Actually React's `setValueForProperty` for custom elements: if the property exists on the element (as own property or in prototype), it sets the property; otherwise sets attribute. Since Stencil defines `_touched` as a getter/setter on the class prototype, React might detect it... React uses `in` check: `shouldRemoveAttribute` ... For custom elements React checks `typeof value === 'boolean'` and property existence.

Anyway, attachProps also sets `node[name] = value` directly, which is the reliable path. Good.

Hmm, but there's a subtle bug risk: React sets attribute `_touched="true"`? For boolean attributes React 19 with custom elements... it may set `_touched` attribute to `""` or `"true"`. Stencil reads attribute `_touched` → `watchBoolean` → boolean coercion of "true" → true. Fine either way.

OK. Now: does `attachProps` run on EVERY render? `componentDidUpdate(prevProps) { attachProps(this.componentEl, this.props, prevProps); }` — yes, every re-render. So `_msg`/`_touched`/`_errorList` are re-assigned each render.

Now a critical question: **`_touched` internal mutation vs React prop**. In `onBlur`, FormFieldStateWrapper sets `this.component._touched = true` where `this.component` is the Stencil component instance (the host element, I think — `registerInstance(this, hostRef)` and the controller gets `this` = component instance which IS the host element proxy). So `host._touched = true`.

Then on next React render, attachProps sets `node["_touched"] = props._touched`. If our prop value is `false`, it would RESET touched to false, hiding errors. So we MUST manage `touched` in React state and set it to `true` on blur (or at least not pass `false` after blur).

Simplest robust approach: manage `touched` entirely in React state:
- Initially both false.
- On `_on.onBlur` → set touched true for that field.
- On submit attempt → set touched true for both.

And pass `_touched={touched.field}` always.

But wait: does `_on.onBlur` fire? From FormFieldStateWrapper.onBlur: `this.component._touched = true; emitEvent; this.component._on?.onBlur(event)`. Yes, `_on.onBlur` is called. 

Hmm, but careful about ordering: onBlur sets `host._touched = true` internally, then calls our `onBlur` → setState → React re-renders → attachProps sets `_touched = true` (our state). Consistent. 

Now — what if we DON'T pass `_touched` at all? Then attachProps never touches it, and internal blur sets it true. That's simpler and lets KoliBri handle it. But then on submit (before blur), we need errors to show. If the user clicked the submit button, blur fires first (focus moves from input to button) → touched=true. But if they pressed Enter while focused in an input, that input's blur doesn't fire... Actually pressing Enter doesn't blur. So the other field wouldn't be touched.

So better to control `touched` explicitly. I'll manage it in state.

Actually, there's a nuance: if we pass `_touched={false}` initially and the component internally sets it to `true` on blur, then our state `false` on the *next* render would reset it — unless our onBlur handler updates state. Since we handle onBlur, we're fine.

Let's now think about **which fields to validate** and messages:

- username: required (non-empty). Message: "Please enter your username."
- password: required. Message: "Please enter your password."

Maybe also: username must be at least 3 chars, password at least 6 chars? Keep it simple but demonstrate real validation: required + min lengths.

Actually let's keep: username required, password required; plus password min8 characters. Hmm, adding min length makes the demo more convincing. Let's do:
- username: required → "Please enter your username."
- password: required → "Please enter your password."

And for the demo "auth": if credentials don't match, show a form-level alert "Invalid username or password." with `_alert` for role=alert.

Hmm — but that requires a hardcoded credential. The task says "small accessible login feature". A simulated auth is fine and demonstrates error handling. Let's do:
- username: required, min 3 chars
- password: required, min 6 chars
- submit → if username === "demo" && password === "demo123" → success alert; else → form-level error alert "Invalid username or password."

Hmm, but then a user can't log in without knowing creds. We should hint. Maybe simpler: don't simulate auth at all — on valid input show a success alert "Login successful." That's cleaner and avoids confusing demo credentials.

Actually a login feature that always succeeds on valid input is fine for a playground and avoids confusing demo credentials. But "error handling" is satisfied by validation errors.

Hmm. Let me reconsider — I think showing both paths is more valuable for demonstrating accessibility (success vs error alerts). I'll do simulated auth with a visible hint about demo credentials (e.g., a hint on the form or a `<p>`). Actually let's keep it minimal: validate fields, and simulate a login that fails if password !== "kolibri" ... no, that's confusing.

Decision: Keep it simple and predictable:
- Client-side validation with per-field messages + error summary (`_errorList`) + focus management.
- On successful validation, show a success `KolAlert` with `_alert` (role=alert) announcing "Signed in successfully." (demo — no backend).
- Provide a reset button (`_type="reset"`) that clears state via `KolForm._on.onReset`.

That demonstrates: username field, password field, submit, validation feedback, accessible labels & error handling. 

Hmm, but should I add an error-level form alert? The `_errorList` already renders as a card alert with `type: "error"`. Note: does `_errorList`'s alert have `role="alert"`? `KolAlertFc` is called with `type: "error", variant: "card"` but no `alert: true`. So `alert` defaults false → no role=alert. So it won't be announced automatically. That's why `focusErrorList()` exists — it moves focus to the first error link, which announces it.

So: on failed submit → set errors, set touched, then call `formRef.current?.focusErrorList()`.

But `focusErrorList` uses `setTimeout(250)` and queries `this.errorListFirstLink.querySelector('a')`. The error list must be rendered first. Since we set state and React re-renders, then attachProps sets `_errorList` on the element... but `focusErrorList()` must be called AFTER the DOM update. In React, calling it inside the submit handler happens synchronously before re-render. Stencil's re-render is async (microtask/raf). The 250ms timeout might be enough, but risky if we call before the prop is set.

Safer: call `focusErrorList()` in a `useEffect` that depends on `errors` (after render). Let's do:

```tsx
useEffect(() => {
  if (submitAttempted && errorList.length > 0) {
    formRef.current?.focusErrorList();
  }
}, [errorList]); // or a counter
```

Hmm, but `errorList` is a new array each render → effect runs every render → infinite focus stealing. Need to memoize errorList with useMemo keyed on errors, and track a `submitCount`/`errorPulse` counter.

Alternative simpler: focus the first invalid field directly via input refs. That's very predictable:
```tsx
usernameRef.current?.focus();
```
KolInputText has `focus(options?)`.

But the error summary + focus-to-summary is the canonical pattern. Let's do both? Focusing the summary is better practice.

Let me structure:

```tsx
const errorList = useMemo(() => {
  const list: ErrorListPropType[] = [];
  if (errors.username) list.push({ message: errors.username, selector: '#login-username' });
  if (errors.password) list.push({ message: errors.password, selector: '#login-password' });
  return list;
}, [errors]);
```

`errors` is an object; we create a new object on each validation → new reference → useMemo recomputes only when `errors` changes. Good. And `errors` only changes when validation result changes. If the user submits twice with the same errors, we'd set the same object content but a new reference → effect reruns → focus again. That's actually desirable (re-focus on repeated submit).

Hmm, but if we set the same errors object reference (e.g., `setErrors(prev => ...)` returning a new object always) — fine.

Wait, careful: if validation passes, we set errors to `{}` (new ref), errorList = [], effect runs but length 0 → skip. Good.

Then:
```tsx
useEffect(() => {
  if (!attempted) return;
  if (errorList.length > 0) formRef.current?.focusErrorList();
}, [attempted, errorList]);
```

Hmm, `attempted` boolean + errorList identity. On first mount attempted=false → skip. After submit → attempted true, errorList non-empty → focus. Good.

But there's a timing issue: React runs the effect after DOM mutation, but the `<kol-form>` custom element's `_errorList` property is set in `componentDidUpdate` of the *KolForm wrapper component*. React runs child effects... Actually class component `componentDidUpdate` runs BEFORE parent function component `useEffect`? 

React commit order: for a class component, `componentDidUpdate` is called during the commit phase (layout phase for lifecycle... actually `componentDidUpdate` is a "passive"?? No — `componentDidMount/DidUpdate` are invoked in the commit phase, after DOM mutations, in the layout phase). And `useEffect` (passive effects) run after paint (or at least after layout). So parent's `useEffect` runs AFTER child class `componentDidUpdate`. 

So by the time our effect runs, `attachProps` has already set `_errorList` on `<kol-form>`. Stencil will then re-render asynchronously (its own scheduling). `focusErrorList` waits 250ms. Should be fine.

Hmm, but is KolForm's wrapper a class component? Yes: `ReactComponent` class extends React.Component. And our App is a function component. The KolForm wrapper is a child of App. Parent function component's `useEffect` runs after children's `componentDidUpdate`. Yes — layout effects/lifecycles of children run before parent's passive effects.

Actually more precisely: `componentDidUpdate` is called in the layout phase, and `useEffect` callbacks are scheduled as passive effects which flush after. So order is correct.

OK. Also `focusErrorList` scrolls — good.

Now, alternatively I could avoid the effect and just call `formRef.current?.focusErrorList()` inside the submit handler — the 250ms delay gives plenty of time for React to commit and Stencil to render. That's simpler and less error-prone regarding infinite loops. Let's do that: call it in the submit handler after `setErrors`.Hmm, but if errorList is empty we shouldn't call it (it would try to focus nothing — harmless, `?.` guard). So:

```tsx
const onSubmit = (event: Event) => {
  event.preventDefault(); // KolForm already prevents default
  const nextErrors = validate(values);
  setErrors(nextErrors);
  setTouched({ username: true, password: true });
  setStatus(null);
  const list = buildList(nextErrors);
  if (list.length > 0) {
    setSubmitted(false);
    // focus error summary after it renders
    requestAnimationFrame(() => formRef.current?.focusErrorList());
  } else {
    setSubmitted(true);
    ...
  }
};
```

Hmm, `requestAnimationFrame` might be too early for Stencil's async render. But `focusErrorList` already has a 250ms internal timeout. The only requirement is that by +250ms the error list is rendered. Stencil renders within a frame. So calling synchronously is fine.

Let's simplify: call `formRef.current?.focusErrorList()` synchronously in the handler when there are errors. The internal 250ms timeout handles DOM readiness.

Wait — but there's a catch. `focusErrorList` → `scrollToErrorList` → `setTimeout(..., 250)` → `this.errorListFirstLink?.querySelector('a')`. `errorListFirstLink` is set via Stencil's `ref` on the first link when rendered. If `_errorList` prop is set after our handler... React commits synchronously right after the event handler (batched), attachProps sets `_errorList`, Stencil schedules re-render. Within 250ms it's done. Good.

OK.

Now: **do we even need `_errorList`?** It's a nice touch and uses KoliBri's built-in pattern. But it has the validator quirk that logs a dev console warning (`devHint` → `console.debug` in dev mode). Actually `logWarn` calls `devHint(...)` which calls `Log.debug(...)` → `console.debug` only `if (isDevMode() || forceLog)`. In dev (vite dev mode), `isDevMode()` — let's check what that means. It might be based on `process.env.NODE_ENV`. In a Vite build, NODE_ENV is production → no console spam. In dev it's a `console.debug` — acceptable, not a warning.

Hmm, but wait — will the validator failure prevent anything? `state._errorList` won't be set, but render uses `this._errorList` directly. Confirmed: `render() { const hasErrorList = Array.isArray(this._errorList) && this._errorList.length > 0; ... }`. So it works.

Hold on — is `_errorList` a `@Prop` on the class, so `this._errorList` reflects the property? Yes: `@Prop() _errorList?: ErrorListPropType[]`. And `validateErrorList` is in a `@Watch('_errorList')`. So `this._errorList` is the raw prop. Render works.

Great, so `_errorList` with `{message, selector}` objects works. Confirmed by reading render source.

Now, one more consideration: **`document.querySelector('#login-username')`** — will the `<kol-input-text id="login-username">` have `focus()`? Yes, `focus` is a component method. `handleLinkClick` checks `typeof targetElement.focus === 'function'` → true → `targetElement.focus({behavior:'smooth', block:'nearest'})`.

`KolInputText.focus(options?: KolFocusOptions)` → let's check implementation to be sure it accepts those options.

Let's check kol-input-text.entry.js focus method.

Also: does `id` on the host break anything? The component generates its own internal `_id` for label/input. Setting host `id` attribute — `validateId`? `_id` is not a declared prop for input-text (no `_id` in the interface list above). So no conflict.

Wait, actually there IS no `_id` prop in KolInputText's interface. Good.

Now let's also double check: does the React wrapper's `render()` pass `id`? `id` is a string → `acc[camelToDashCase('id')] = 'id'` → `acc['id']`. camelToDashCase('id') → 'id' (no uppercase letters). So `<kol-input-text id="login-username">`. React sets the `id` attribute. Good.

Hmm — actually wait. React 19 might treat `id` as a special DOM property and set `element.id = "..."` which reflects to attribute anyway. Fine.

Now — the KolForm wrapper: do we get a ref to the `<kol-form>` element? `React.forwardRef` → `mergeRefs(forwardedRef, this.setComponentElRef)` — so `ref` gives the host element `HTMLKolFormElement`. Good.

Let's verify `createForwardRef` passes ref correctly.

Let me read the rest of index.mjs.

Also need to check: how do we handle form reset? `KolForm._on.onReset`. A `KolButton _type="reset"` inside the form triggers `propagateResetEventToForm` → for KOL-FORM tag → calls `kolForm._on.onReset(event)`.

Now let's read the rest of index.mjs to confirm ref handling.

Also check `KolFocusOptions` type.

Let's also verify `KolInputText.focus` implementation.

Then I'll write the code.

Actually — I've done a LOT of exploration. Let me just finish these last checks and write the implementation.

One more: the `_label` on inputs. KoliBri renders label with `<label for={id}>` inside shadow DOM — associated with the internal input. `_hideLabel` false by default. Good.

Also `_hint` for helper text → aria-describedby.

Let's also confirm: `KolAlert` `_type` accepts 'error' | 'success' | 'info' | 'warning' | 'default'. `alertTypeOptions = ['default','info','success','warning','error']`. Good.

`_variant` = 'card' | 'msg'. For a standalone status alert, `msg` is right.

`_alert` = true → role="alert" + auto-timeout after 10s that sets `_alert=false` (so the live region deactivates after announcement). Actually `handleAlertTimeout` → `validateAlert(false)` → sets `_alert` to false. But our React prop `_alert={true}`... on next render attachProps sets `_alert = true` again. Hmm, only if the component re-renders. Since `_alert` is a `@Prop`, Stencil state changes trigger re-render of the WC but React won't re-set the prop unless React re-renders. If React re-renders (state change), attachProps sets `_alert=true` again → re-announces? Only if content changed. Since content stays the same, no re-announcement (live regions announce on content change).

Hmm, actually role="alert" region that already exists doesn't re-announce unchanged content. Fine.

Actually, better: use `key` on the alert so a new element is created for each new status → guaranteed announcement.

Wait — but there's a subtlety: if the alert is NEWLY inserted into the DOM with role="alert" and content, screen readers DO announce it (insertion into accessibility tree with content). Most SRs announce newly added role=alert elements. Using a fresh `key` per status change is the most reliable.

Let's do: `{status && <KolAlert key={status.id} _alert _type={status.type} _label={status.text} />}` — hmm, `_label` on KolAlert is the visible label. Content via children slot? Looking at `KolAlert`'s render: `KolAlertFc({label, type, variant, ...}, <slot/>)`. So the label is the heading, and children go into the alert body. For `variant: "msg"` with `level: 0`, label renders as bold text inside the alert.

Let's check `KolAlertFc` more closely to see how label and children are rendered.

Actually from earlier: `h(KolAlertFc, {..., label, level, type, variant, onCloserClick, onAlertTimeout}, ...)` and `KolAlertFc(props, children)`. The children is the slot. So `<kol-alert _label="..." _type="success" _alert>text</kol-alert>` → children = "text" rendered as the alert body, label as heading.

Hmm, for a `msg` variant alert, typically label IS the message. Let's check how KoliBri uses KolAlert: `<KolAlert _label="The message." _type="error" />` — that's the common usage. Let's verify by looking at KolAlertFc's render.

Let me read Alert-BjiZcCeA.js around line 63.

I'll do one final batch of checks then write code.

Actually, let me reconsider scope. I've spent a lot of exploration. Let me do a final verification batch and then write the file.

Let me check:
1. Rest of react index.mjs (ref handling)
2. KolAlertFc render (label + children)
3. KolInputText.focus impl
4. KolFocusOptions type5. Existing App.tsx / App.css current state6. tsconfig / eslint config

Let's go.

**Tool: shell**

**Input:**
```json
{
  "command": "echo \"=== react index.mjs 1-120 ===\"; sed -n '1,120p' node_modules/@public-ui/react-v19/dist/index.mjs; echo \"=== AlertFc render ===\"; sed -n '60,100p' node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js; echo \"=== KolFocusOptions ===\"; cat node_modules/@public-ui/components/dist/types/schema/interfaces/FocusableElement.d.ts; grep -rn \"KolFocusOptions =\" node_modules/@public-ui/components/dist/types/schema/interfaces/*.d.ts"
}
```

=== react index.mjs 1-120 ===
import React, { createElement } from 'react';

const dashToPascalCase = (str) => str.toLowerCase().split("-").map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1)).join("");
const camelToDashCase = (str) => str.replace(/([A-Z])/g, (m) => `-${m[0].toLowerCase()}`);

const attachProps = (node, newProps, oldProps = {}) => {
  if (node instanceof Element) {
    const className = getClassName(node.classList, newProps, oldProps);
    if (className !== "") {
      node.className = className;
    }
    Object.keys(newProps).forEach((name) => {
      if (name === "children" || name === "style" || name === "ref" || name === "class" || name === "className" || name === "forwardedRef") {
        return;
      }
      if (name.indexOf("on") === 0 && name[2] === name[2].toUpperCase()) {
        const eventName = name.substring(2);
        const eventNameLc = eventName[0].toLowerCase() + eventName.substring(1);
        if (!isCoveredByReact(eventNameLc)) {
          syncEvent(node, eventNameLc, newProps[name]);
        }
      } else {
        node[name] = newProps[name];
        const propType = typeof newProps[name];
        if (propType === "string") {
          node.setAttribute(camelToDashCase(name), newProps[name]);
        }
      }
    });
  }
};
const getClassName = (classList, newProps, oldProps) => {
  const newClassProp = newProps.className || newProps.class;
  const oldClassProp = oldProps.className || oldProps.class;
  const currentClasses = arrayToMap(classList);
  const incomingPropClasses = arrayToMap(newClassProp ? newClassProp.split(" ") : []);
  const oldPropClasses = arrayToMap(oldClassProp ? oldClassProp.split(" ") : []);
  const finalClassNames = [];
  currentClasses.forEach((currentClass) => {
    if (incomingPropClasses.has(currentClass)) {
      finalClassNames.push(currentClass);
      incomingPropClasses.delete(currentClass);
    } else if (!oldPropClasses.has(currentClass)) {
      finalClassNames.push(currentClass);
    }
  });
  incomingPropClasses.forEach((s) => finalClassNames.push(s));
  return finalClassNames.join(" ");
};
const transformReactEventName = (eventNameSuffix) => {
  switch (eventNameSuffix) {
    case "doubleclick":
      return "dblclick";
  }
  return eventNameSuffix;
};
/**
 * Checks if an event is supported in the current execution environment.
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
const isCoveredByReact = (eventNameSuffix) => {
  if (typeof document === "undefined") {
    return true;
  } else {
    const eventName = "on" + transformReactEventName(eventNameSuffix);
    let isSupported = eventName in document;
    if (!isSupported) {
      const element = document.createElement("div");
      element.setAttribute(eventName, "return;");
      isSupported = typeof element[eventName] === "function";
    }
    return isSupported;
  }
};
const syncEvent = (node, eventName, newEventHandler) => {
  const eventStore = node.__events || (node.__events = {});
  const oldEventHandler = eventStore[eventName];
  if (oldEventHandler) {
    node.removeEventListener(eventName, oldEventHandler);
  }
  node.addEventListener(
    eventName,
    eventStore[eventName] = function handler(e) {
      if (newEventHandler) {
        newEventHandler.call(this, e);
      }
    }
  );
};
const arrayToMap = (arr) => {
  const map = /* @__PURE__ */ new Map();
  arr.forEach((s) => map.set(s, s));
  return map;
};

let tagNameTransformer;
const setTagNameTransformer = (_tagNameTransformer) => {
  tagNameTransformer = _tagNameTransformer;
};

const setRef = (ref, value) => {
  if (typeof ref === "function") {
    ref(value);
  } else if (ref != null) {
    ref.current = value;
  }
};
const mergeRefs = (...refs) => {
  return (value) => {
    refs.forEach((ref) => {
      setRef(ref, value);
    });
  };
};
const createForwardRef = (ReactComponent, displayName) => {
  const forwardRef = (props, ref) => {
    return /* @__PURE__ */ React.createElement(ReactComponent, { ...props, forwardedRef: ref });
  };
  forwardRef.displayName = displayName;
  return React.forwardRef(forwardRef);
=== AlertFc render ===
    catch (_a) {
    }
};
const KolAlertFc = (props, children) => {
    const { class: classNames = {}, alert = false, hasCloser = false, label, level = 0, type = 'default', variant = 'msg', onAlertTimeout, onCloserClick } = props, other = __rest(props, ["class", "alert", "hasCloser", "label", "level", "type", "variant", "onAlertTimeout", "onCloserClick"]);
    const translateCloseAlert = translate('kol-close-alert');
    if (alert) {
        vibrateOnError();
        setTimeout(() => {
            onAlertTimeout === null || onAlertTimeout === void 0 ? void 0 : onAlertTimeout();
        }, 10000);
    }
    const BEM_CLASS_ROOT = alertBem({
        hasCloser: !!hasCloser,
        [`type-${type}`]: true,
        [`variant-${variant}`]: true,
    });
    const BEM_CLASS__HEADING = alertBem('heading', {
        [`h${level}`]: true,
    });
    const rootProps = Object.assign({ class: clsx(classNames, BEM_CLASS_ROOT) }, other);
    return (h("div", Object.assign({ role: alert ? 'alert' : undefined }, rootProps, { "data-testid": "alert" }), h(AlertIcon, { label: label, type: type }), label && (h(KolHeadingFc, { class: BEM_CLASS__HEADING, level: level, id: "heading" }, label)), hasCloser && (h(KolButtonWcTag, { class: BEM_CLASS_ALERT__CLOSER + ' kol-close-button', "data-testid": "alert-close-button", _ariaDescription: (label === null || label === void 0 ? void 0 : label.trim()) || '', _hideLabel: true, _icons: {
            left: {
                icon: 'kolicon-cross',
            },
        }, _label: translateCloseAlert, _on: { onClick: onCloserClick }, _tooltipAlign: "left" })), h("div", { class: BEM_CLASS_ALERT__CONTENT, "aria-describedby": label ? 'heading' : undefined }, children)));
};

export { KolAlertFc as K };
//# sourceMappingURL=Alert-BjiZcCeA.js.map

//# sourceMappingURL=Alert-BjiZcCeA.js.map=== KolFocusOptions ===
export type KolFocusOptions = {
    preventScroll?: true;
    focusVisible?: true;
} & ScrollIntoViewOptions & {
    afterFocus?: () => void;
};
export interface FocusableElement {
    focus(options?: KolFocusOptions): Promise<void>;
}
node_modules/@public-ui/components/dist/types/schema/interfaces/FocusableElement.d.ts:1:export type KolFocusOptions = {


---

## Assistant

_Thinking:_

Now I understand everything. Let me check the current App.tsx, App.css, tsconfig, eslint.

Let's read App.tsx current state.

**Tool: shell**

**Input:**
```json
{
  "command": "cat src/App.tsx; echo \"=== tsconfig ===\"; ls; cat tsconfig.json tsconfig.app.json 2>/dev/null; echo \"=== eslint ===\"; cat eslint.config.js 2>/dev/null | head -60; echo \"=== package.json scripts ===\"; cat package.json"
}
```

import { KolButton } from '@public-ui/react-v19'

function App() {
  return (
    <main>
      <h1>KoliBri MCP Playground</h1>

      <KolButton _label="Hello KoliBri" />
    </main>
  )
}

export default App=== tsconfig ===
docs
eslint.config.js
index.html
node_modules
package.json
pnpm-lock.yaml
public
README.md
src
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
{
  "files": [],
  "references": [
    { "path": "./tsconfig.app.json" },
    { "path": "./tsconfig.node.json" }
  ]
}
{
  "compilerOptions": {
    "tsBuildInfoFile": "./node_modules/.tmp/tsconfig.app.tsbuildinfo",
    "target": "es2023",
    "lib": ["ES2023", "DOM"],
    "module": "esnext",
    "types": ["vite/client"],
    "allowArbitraryExtensions": true,
    "skipLibCheck": true,

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "verbatimModuleSyntax": true,
    "moduleDetection": "force",
    "noEmit": true,
    "jsx": "react-jsx",

    /* Linting */
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "erasableSyntaxOnly": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
=== eslint ===
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      globals: globals.browser,
    },
  },
])
=== package.json scripts ===
{
  "name": "kolibri-mcp-playground",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@public-ui/components": "^4.4.0",
    "@public-ui/react-v19": "^4.4.0",
    "@public-ui/theme-default": "^4.4.0",
    "react": "^19.2.8",
    "react-dom": "^19.2.8"
  },
  "devDependencies": {
    "@eslint/js": "^10.0.1",
    "@types/node": "^24.13.3",
    "@types/react": "^19.2.18",
    "@types/react-dom": "^19.2.7",
    "@vitejs/plugin-react": "^6.1.1",
    "eslint": "^10.10.0",
    "eslint-plugin-react-hooks": "^7.1.1",
    "eslint-plugin-react-refresh": "^0.5.6",
    "globals": "^17.12.0",
    "typescript": "~6.0.2",
    "typescript-eslint": "^8.69.0",
    "vite": "^8.3.0"
  }
}


---

## Assistant

_Thinking:_

`tsconfig.app.json` has `noUnusedLocals` but no `strict`! Interesting — no `strict` mode. And `verbatimModuleSyntax: true` → must use `import type` for type-only imports.

Now let me write the analysis and implementation.

Let me plan the component structure:

```
<main>
  <h1>KoliBri MCP Playground</h1>
  <KolCard _label="Sign in" _level={2}>
    <KolForm ref={formRef} _on={{ onSubmit }} _requiredText={false} _errorList={errorList}>
      {status && <KolAlert key={...} _alert _type={status.type} _label={status.message} />}
      <KolInputText id="login-username" _label="Username" _name="username" _required _autoComplete="username" _value={username} _touched={touched.username} _msg={errors.username ? {...} : undefined} _hint="..." _on={{ onInput, onBlur }} />
      <KolInputPassword id="login-password" _label="Password" _name="password" _required _autoComplete="current-password" _visibilityToggle _value={password} _touched={touched.password} _msg={...} _on={{ onInput, onBlur }} />
      <div className="login-actions">
        <KolButton _type="submit" _label="Sign in" _variant="primary" />
        <KolButton _type="reset" _label="Reset" _variant="ghost" />
      </div>
    </KolForm>
  </KolCard>
</main>
```

Wait — does `KolForm`'s slot render children correctly? KolForm renders `<form class="kol-form">...<slot/></form>` in its shadow root. Our React children (KolInputText etc.) become light DOM children of `<kol-form>`, slotted into the form. Good — they're inside the form element, so `propagateSubmitEventToForm` walks up parents to find `KOL-FORM`. 

Hmm — wait. `searchFormElement(el)`:
```js
while (el instanceof HTMLElement && el.tagName !== 'FORM' && el.tagName !== 'KOL-FORM') {
  if (el.parentElement instanceof HTMLElement) el = el.parentElement;
  else if (el.parentNode instanceof ShadowRoot) el = ... (host)
}
```
Starting from `<kol-input-text>` (host, in light DOM of kol-form) → parentElement = `<kol-form>` → tagName `KOL-FORM` → loop exits. Good.

Then `form.tagName === 'KOL-FORM'` → `setEventTarget(event, querySelector('form', form))` and calls `kolForm._on.onSubmit(event)`.

Wait, let's re-read `propagateSubmitEventToForm`:
```js
const form = searchFormElement(options.form);
if (form instanceof HTMLElement) {
  const event = new SubmitEvent('submit', { bubbles:true, cancelable:true, submitter: form });
  if (form.tagName === 'FORM') {
    if (experimental && noValidate === false) {...}
    else { ... form.requestSubmit? }
  } else if (form.tagName === KolFormTag.toUpperCase()) {
    ... calls kolForm._on.onSubmit
  }
}
```
Let me read the rest of it to be sure.

Also: does the KolButton's submit actually call propagate? Let's check kol-button-wc onClick.

Let's read those.

Also important: KolForm's own `<form>` has `onSubmit={this.onSubmit}` which calls `event.preventDefault()` then `this.state._on.onSubmit(event)`. And `propagateSubmitEventToForm` for KOL-FORM tag — does it dispatch on the inner `<form>` (which would trigger onSubmit → duplicate)? Let's read.

Let's check.

**Tool: shell**

**Input:**
```json
{
  "command": "sed -n '1,60p' node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js; echo \"...\"; sed -n '80,130p' node_modules/@public-ui/components/dist/esm/controller-D__mtOju.js; echo \"=== button onClick ===\"; grep -n -B4 -A22 \"this.onClick = \" node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js"
}
```

/*!
 * KoliBri - The accessible HTML-Standard
 */
import { g as KolFormTag } from './component-names-DwvrfFak.js';
import { N as getExperimentalMode, j as devHint, t as setEventTarget, a as KoliBriDevHelper, L as Log } from './common-D-vggmh2.js';

const searchFormElement = (el) => {
    if (getExperimentalMode()) {
        devHint(`↓ Search form element start.`);
        Log.debug(el);
    }
    while (el instanceof HTMLElement && el.tagName !== 'FORM' && el.tagName !== KolFormTag.toUpperCase()) {
        try {
            if (el.parentElement instanceof HTMLElement) {
                el = el.parentElement;
            }
            else if (el.parentNode instanceof ShadowRoot) {
                el = el.parentNode.host;
            }
            else {
                el = null;
            }
        }
        catch (_a) {
        }
        if (getExperimentalMode()) {
            Log.debug(el);
        }
    }
    if (getExperimentalMode()) {
        devHint(`↑ Search form element finished.`);
    }
    return el;
};
const propagateResetEventToForm = (options = {}) => {
    var _a, _b;
    const form = searchFormElement(options.form);
    if (form instanceof HTMLElement) {
        const event = new Event('reset', {
            bubbles: true,
            cancelable: true,
        });
        if (form.tagName === 'FORM') {
            setEventTarget(event, form);
            form.dispatchEvent(event);
        }
        else if (form.tagName === KolFormTag.toUpperCase()) {
            setEventTarget(event, KoliBriDevHelper.querySelector('form', form));
            const kolForm = form;
            if (typeof ((_a = kolForm._on) === null || _a === void 0 ? void 0 : _a.onReset) === 'function') {
                (_b = kolForm._on) === null || _b === void 0 ? void 0 : _b.onReset(event);
            }
        }
    }
};
const propagateSubmitEventToForm = (options = {}) => {
    const form = searchFormElement(options.form);
    if (form instanceof HTMLElement) {
        const event = new SubmitEvent('submit', {
            bubbles: true,
...
        else if (form.tagName === KolFormTag.toUpperCase()) {
            setEventTarget(event, KoliBriDevHelper.querySelector('form', form));
            const kolForm = form;
            setTimeout(() => {
                var _a, _b;
                if (typeof ((_a = kolForm._on) === null || _a === void 0 ? void 0 : _a.onSubmit) === 'function') {
                    (_b = kolForm._on) === null || _b === void 0 ? void 0 : _b.onSubmit(event);
                }
            });
        }
    }
};

export { propagateResetEventToForm as a, propagateSubmitEventToForm as p };
//# sourceMappingURL=controller-D__mtOju.js.map

//# sourceMappingURL=controller-D__mtOju.js.map=== button onClick ===
94-        var _a;
95-        this.ctaRef = createCtaRef();
96-        this.tooltipBehavior = new TooltipBehavior(BaseWebComponent.stateLess);
97-        this.internalDescriptionById = nonce();
98:        this.onClick = (event) => {
99-            var _a, _b;
100-            event.stopPropagation();
101-            this.tooltipBehavior.hideTooltip();
102-            if (this.state._type === 'submit') {
103-                propagateSubmitEventToForm({
104-                    form: this.host});
105-            }
106-            else if (this.state._type === 'reset') {
107-                propagateResetEventToForm({
108-                    form: this.host});
109-            }
110-            else {
111-                this.controller.setFormAssociatedValue(this.state._value);
112-                if (typeof ((_a = this.state._on) === null || _a === void 0 ? void 0 : _a.onClick) === 'function') {
113-                    setEventTarget(event, this.ctaRef.el);
114-                    (_b = this.state._on) === null || _b === void 0 ? void 0 : _b.onClick(event, this.state._value);
115-                }
116-            }
117-            if (this.host) {
118-                dispatchDomEvent(this.host, KolEvent.click, this.state._value);
119-            }
120-        };


---

## Assistant

_Thinking:_

Good. So `propagateSubmitEventToForm` for KOL-FORM calls `kolForm._on.onSubmit(event)` in a `setTimeout` — it does NOT dispatch to the inner `<form>`. So `_on.onSubmit` is called once.

But wait — is the inner `<form>`'s native submit also triggered? The `<kol-button>` is in the light DOM of `<kol-form>`. The `<form>` is inside kol-form's shadow root with `<slot>`. The button is slotted into the form. Native form submission: clicking a `<button type="submit">` inside a form (in the flattened tree) triggers form submission. Slotted content IS part of the form's flattened tree... Actually, form submission uses the form's *shadow-including* descendants? HTML spec: "The form owner of a button is the nearest ancestor form element" — computed via tree ancestry, and shadow DOM: for elements in the light DOM of a custom element, their ancestor is `<kol-form>`, not `<form>`. The `<form>` is inside shadow root; slotted elements' *tree* parent is `<kol-form>`, not `<form>`.

Actually, form association in the spec uses "form owner" determined by: if the element has a `form` attribute → that; else nearest ancestor `form` element **in the tree** (node tree, not flattened). For slotted content, the node tree parent chain from `<kol-input-text>` is `<kol-form>` → ... → no `<form>` ancestor. So no native form owner.

Hmm, but actually the `<button>` is inside `<kol-button>`'s shadow root. Its tree ancestors: shadow root → `<kol-button>` → `<kol-form>`... So no form owner. That's exactly why KoliBri implements `propagateSubmitEventToForm`.

Wait, but actually there's a subtlety: does `searchFormElement` from `<kol-button>` host reach `<kol-form>`? `el = kol-button host`, parentElement = ... let's see our DOM: `<kol-form>` > (slot) > `<div class="login-actions">` > `<kol-button>`. So parentElement chain: `<kol-button>` → `<div>` → `<kol-form>` → tagName KOL-FORM → stop. 

But hold on: does the `<button>` inside kol-button's shadow root have a form owner? If it did, native submit would fire → the inner `<form>`'s onSubmit → `this.state._on.onSubmit(event)` too → double call. Let's think: `<button>` in kol-button's shadow root. Tree ancestors: shadowRoot → `<kol-button>` → `<div class="login-actions">` → `<kol-form>` → ... no FORM. So no form owner → no native submit. 

Hmm, but actually the spec for form owner: "return the nearest ancestor form element" — this traverses the *shadow-including* ancestor chain? Let me recall HTML spec § "form owner":

> If element is a form-associated element, ...:
> 1. If element's `form` content attribute is set... 
> 2. Otherwise, return the nearest ancestor form element, ...Actually the spec says: "The form owner of a form-associated element is ... its form element ancestor, if any, **or null**". And importantly, for shadow trees, form association uses "shadow-including" traversal? I believe there's `form` attribute support across shadow boundaries but ancestor traversal does NOT cross shadow boundaries for descendants... hmm.

Actually HTML spec: "form element ancestor" is defined as: climb the **parent** chain (node tree, not flattened). For an element inside a shadow tree, its parent chain ends at the shadow root, then... The spec for form owner says: "If element is in a shadow tree, return null"? No...

Let me not over-think. KoliBri explicitly implements `propagateSubmitEventToForm` because native form association doesn't work for slotted web components. And KoliBri's own docs say to use `kol-form` with `_on.onSubmit`. This is the documented, intended path. Also the KolForm's inner `<form>` has `noValidate: true` and `onSubmit` handler which also calls `_on.onSubmit`.

Risk of double-invocation: if BOTH native submit and propagate fire. To be safe, I can make the submit handler idempotent-ish (it's just validation + setState, running twice is harmless except setState duplication which React handles fine). Actually running validation twice is harmless. So no guard needed. But an alert announced twice... no, it's just state.

Hmm, but there IS one risk: `event.preventDefault()` — KolForm's onSubmit already calls preventDefault. Our handler doesn't need to.

Actually wait: if native submit fired, the `<form method="post">` would navigate away if not prevented. KolForm's `onSubmit` prevents default first, then calls `_on.onSubmit`. So safe.

OK — no double-submit concern for correctness.

Now — one more: does pressing Enter in an input trigger submit? `kol-input-text.onKeyDown` → `propagateSubmitEventToForm({form: this.host})`. Yes. Good — that's desirable.

Now, about the `reset` button: `propagateResetEventToForm` for KOL-FORM calls `kolForm._on.onReset(event)` **synchronously** (no setTimeout). We handle `onReset` to clear state.

Note: KolForm's inner form has `onReset` → preventDefault → `state._on.onReset`. And propagate calls `kolForm._on.onReset` directly. Possibly twice. Harmless (idempotent state reset).

Hmm — but if native reset DOES fire, inputs would clear their internal values but our React `_value` prop would re-set them on next render... Actually React's `_value` prop only changes when our state changes. We clear state in onReset → `_value=""` → consistent.

But careful: if native reset fires on the inner `<form>`, and slotted inputs aren't form-associated, nothing resets natively. Fine.

Now — a concern about controlled inputs: `_value` is set from React state. When the user types, `onInput` fires with `(event, value)`. We `setUsername(value)`. React re-renders → attachProps sets `node._value = value`. Stencil updates internal state → input's value attribute. Since value is the same as what's in the input, no cursor jump. Good.

Wait — but does Stencil's `onInput` handler in kol-input-text set `this._value = ctaRef.el.value`? Yes: `this.onInput = (event) => { this._value = this.ctaRef.el?.value ?? ''; ... }`. Then `controller.onFacade.onInput(event)` → `component._on.onInput(event, value)`.

Hmm, `onFacade.onInput(event)` → `this.onInput(event, shouldSetFormAssociatedValue, value)` in FormFieldStateWrapper? Let's check: earlier we saw `onInput(event, shouldSetFormAssociatedValue = true, value)` with `if (typeof value === 'undefined') value = event.target.value;`. And `this.component._on.onInput(event, value)`.

So `_on.onInput(event, value)` where value is the string. 

But wait — in kol-input-text, `this.controller.onFacade.onInput(event)` is called with only the event. Then FormFieldStateWrapper's onInput gets `value = event.target.value`. `event.target` is the `<input>` inside shadow DOM. Good.

Hmm, but does kol-input-text pass its own `onInput`? Let's check: earlier saw `this.onInput = (event) => { this._value = ctaRef.el?.value; this.controller.onFacade.onInput(event); }`. Hmm, but there's also `shouldSetFormAssociatedValue`. Anyway, `_on.onInput(event, value)` is what we get.

Now — does `_on` need `onInput` or `onChange`? `onChange` fires on blur/enter natively for text inputs... Actually KoliBri's `onChange` on inputs: `onChange(event, value)` is wired to native `change` event → fires on blur for text inputs. For live state we want `onInput`.

I'll use `onInput` for value binding, and `onBlur` for touched.

Now, there's a subtlety: `_on` is recreated each render (new object). attachProps sets `node._on = newObject` each time. Stencil's `validateOn` → `setState`. Fine.

Hmm, actually potential issue: if we create `_on` inline in JSX, every render creates a new object → `node._on` set → Stencil state update → re-render of the WC. Not a React re-render, so no loop. Fine.

But `react-hooks` lint might complain about... no.

Now let's think about **`_touched` and the msg display**:

`showMsg = isMsgDefinedAndInputTouched(msg, touched)` = `Boolean(msg) && touched === true`.

So we need BOTH `_msg` (with description) and `_touched === true`.

Our approach: only set `_msg` when there's an error AND the field is touched (or submit attempted). Actually simpler: set `_msg` when error exists; set `_touched` when touched/submit attempted. Since errors are only computed on submit/blur, and touched is set at the same time, they align.

Hmm, but there's an ordering issue: if we compute errors on submit and set touched=true simultaneously, both props update in the same render → msg shows. Good.

But what if user blurs an empty required field without submitting? We should validate on blur too. Let's do: on blur → mark touched, and validate that field (set/clear its error).

Actually simpler and cleaner: 
- `errors` computed on submit and on blur (per-field) and cleared/updated on input.
- `touched` set on blur and on submit.

Let's keep it straightforward:

```tsx
const [values, setValues] = useState({ username: '', password: '' })
const [touched, setTouched] = useState({ username: false, password: false })
const [errors, setErrors] = useState<Errors>({})
const [status, setStatus] = useState<Status | null>(null)
const [submitted, setSubmitted] = useState(false) // maybe not needed
```

`validateField(name, value)` returns error string | undefined.

On input: update value; if the field is touched or submit attempted, re-validate and clear/set error.
On blur: set touched true; validate field.
On submit: set touched for both; validate both; if any → show errorList, focus error list; else → success status.

Now — an important a11y detail: `_msg` with `_type: 'error'` gets `role="alert"` via `alert = showAsAlert() = touched && !inputHasFocus`. Since on submit the focus moves to the error list link (blur happens), `inputHasFocus` false → `alert: true` → role="alert". Also `message._alert ?? alert` — we can set `_alert: true` in the msg explicitly to guarantee role=alert.

Hmm — but MsgPropType includes `_alert`? `MsgPropType = Omit<AlertProps, '_level'|'_on'|'_label'|'_hasCloser'|'_variant'> & {_description: string}`. AlertProps includes `_alert`, `_type`. So yes: `{ _description: '...', _type: 'error', _alert: true }`.

But careful: if `_alert: true` on the msg, `KolAlertFc` sets a 10s timeout calling `onAlertTimeout` — for FormFieldMsgFc, `onAlertTimeout` isn't passed... let's check: FormFieldMsgFc passes `alert`, `hasCloser: false`, `level: 0`, `type`, `variant: 'msg'`, and children — no `onAlertTimeout`. So no timeout. Good, role="alert" persists.

Hmm, but actually `alert` is passed from the input's `showAsAlert()`. Let's check FormFieldMsgFc: `alert: message?._alert ?? alert`. So if we set `_alert: true` in msg, it's always alert (even while focused). If we don't, it's `touched && !focused`.

Setting `_alert: true` means the error is announced whenever the msg content changes while role=alert is present. Could be chatty on re-validation. But our errors only change on blur/submit/input-clear. Hmm — on input, if we clear the error, msg disappears → no announcement (removal isn't announced). If error persists... we clear errors on input for that field. So mostly fine.

Actually, let's NOT set `_alert` and rely on `showAsAlert()` = touched && !focused. Hmm, but then on submit, when focus jumps to the error-list link, the input blurs → `inputHasFocus` false → but does the component re-render? `showAsAlert()` is computed during render. Setting `_touched` prop triggers re-render. `inputHasFocus` is set in onBlur handler (`this.inputHasFocus = false`) — is that a `@State`? Let's check: in FormFieldStateWrapper, `inputHasFocus` is a plain field. Hmm, then changing it doesn't trigger re-render.

Wait — actually `showAsAlert()` in kol-input-text: `return Boolean(this.state._touched) && !this.inputHasFocus;`. Hmm, let's check if `inputHasFocus` is a Stencil @State.

Let's grep.

Actually — safer to explicitly set `_alert: true` in the msg. That guarantees `role="alert"` and announcement. The chattiness concern is minimal since we clear errors on input.

Hmm, but wait: with `_alert: true`, `KolAlertFc` runs `vibrateOnError()` and `setTimeout(..., 10000)` with `onAlertTimeout` undefined → no-op. `vibrateOnError()` — calls `navigator.vibrate` if available. Harmless.

Let me check `vibrateOnError`.

Actually, more important: does `role="alert"` on an element that's *inserted into the DOM* get announced? Yes — newly inserted role=alert regions with content are announced by screen readers. And since `_msg` only renders when `showMsg` is true (touched && msg defined), the msg element is inserted at that moment → announced. 

Now: **aria-describedby**. `getRenderStates` pushes msg id when `hasMessage && !hideMsg`. And `hasError` for aria-invalid.

Let's check `getRenderStates`:
```js
const ariaDescribedBy = [];
if (hasMessage && !hideMsg) ariaDescribedBy.push(createRelatedUniqueId(state._id, 'msg'));
if (hasHint) ariaDescribedBy.push(createRelatedUniqueId(state._id, 'hint'));
if (hasError) ariaDescribedBy.push(createRelatedUniqueId(state._id, 'error'));
```
Hmm, earlier output showed three pushes with 'msg', 'hint', 'error'. Let's verify `hasMessage` — probably `isMsgDefinedAndInputTouched`. Let's check.

Let me grep getRenderStates.

Also need to confirm `aria-invalid` is set.

Let's check InputFc / getRenderStates.

Also — a **critical** question: does `_hint` exist on inputs? Yes: `"_hint"?: string`.

Let's check getRenderStates + aria-invalid.

Also check `vibrateOnError` and `showAsAlert` / `inputHasFocus` state-ness.

One more batch of checks, then write.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -n -A30 \"const getRenderStates\" node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js; echo \"=== aria-invalid ===\"; grep -rn \"aria-invalid\\|invalid:\" node_modules/@public-ui/components/dist/esm/*.js | head -20; echo \"=== inputHasFocus ===\"; grep -rn \"inputHasFocus\" node_modules/@public-ui/components/dist/esm/kol-input-text.entry.js node_modules/@public-ui/components/dist/collection/components/input-text/shadow.js | head; echo \"=== showAsAlert ===\"; grep -rn -A3 \"showAsAlert()\" node_modules/@public-ui/components/dist/collection/components/input-text/shadow.js node_modules/@public-ui/components/dist/collection/components/input-password/shadow.js"
}
```

297:const getRenderStates = (state) => {
298-    const msg = state._msg;
299-    const description = typeof msg === 'string' ? msg : msg === null || msg === void 0 ? void 0 : msg._description;
300-    const type = getMsgType(msg);
301-    const hasMessage = Boolean(description && description.length > 0);
302-    const isMessageValidError = type === 'error' && hasMessage;
303-    const hasError = isMessageValidError && state._touched === true;
304-    const hasHint = typeof state._hint === 'string' && state._hint.length > 0;
305-    const ariaDescribedBy = [];
306-    if (hasMessage && !state._hideMsg) {
307-        ariaDescribedBy.push(createRelatedUniqueId(state._id, 'msg'));
308-    }
309-    if (hasHint === true) {
310-        ariaDescribedBy.push(createRelatedUniqueId(state._id, 'hint'));
311-    }
312-    if (hasError === true) {
313-        ariaDescribedBy.push(createRelatedUniqueId(state._id, 'error'));
314-    }
315-    return { hasError, hasHint, ariaDescribedBy };
316-};
317-
318-const KolFormFieldHintFc = (_a) => {
319-    var { id, class: classNames, hint, baseClassName = 'kol-form-field' } = _a, other = __rest(_a, ["id", "class", "hint", "baseClassName"]);
320-    if (!hint) {
321-        return null;
322-    }
323-    return (h("span", Object.assign({ class: clsx(`${baseClassName}__hint`, classNames), id: createRelatedUniqueId(id || '', 'hint') }, other), hint));
324-};
325-
326-const KolFormFieldLabelFc = (_a) => {
327-    var { component: Component = 'label', id, baseClassName = 'kol-form-field', class: classNames, accessKey, shortKey, label, hideLabel, hasExpertSlot, showBadge = true, readOnly, infoPopover } = _a, other = __rest(_a, ["component", "id", "baseClassName", "class", "accessKey", "shortKey", "label", "hideLabel", "hasExpertSlot", "showBadge", "readOnly", "infoPopover"]);
=== aria-invalid ===
node_modules/@public-ui/components/dist/esm/InputStateWrapper-BJMqyY_8.js:73:    return Object.assign(Object.assign(Object.assign({}, props), other), { ariaDescribedBy, 'aria-invalid': renderStates.hasError ? 'true' : undefined });
node_modules/@public-ui/components/dist/esm/kol-input-checkbox.entry.js:162:    return Object.assign(Object.assign(Object.assign({}, props), inputProps), { 'aria-invalid': hasError ? 'true' : undefined });
node_modules/@public-ui/components/dist/esm/kol-input-radio.entry.js:80:    return Object.assign(Object.assign(Object.assign({}, props), inputProps), { 'aria-invalid': hasError ? 'true' : undefined });
node_modules/@public-ui/components/dist/esm/kol-select-wc.entry.js:109:        'aria-invalid': hasError ? 'true' : undefined,
node_modules/@public-ui/components/dist/esm/kol-textarea.entry.js:78:    const props = Object.assign(Object.assign({ id: state._id, hideLabel: state._hideLabel, label: state._label, value: state._value, accessKey: state._accessKey, disabled: state._disabled, name: state._name, rows: state._rows, readonly: state._readOnly, required: state._required, placeholder: state._placeholder, touched: state._touched, msg: state._msg }, other), { ariaDescribedBy, 'aria-invalid': renderStates.hasError ? 'true' : undefined });
=== inputHasFocus ===
node_modules/@public-ui/components/dist/esm/kol-input-text.entry.js:136:            this.inputHasFocus = false;
node_modules/@public-ui/components/dist/esm/kol-input-text.entry.js:149:            this.inputHasFocus = true;
node_modules/@public-ui/components/dist/esm/kol-input-text.entry.js:187:        this.inputHasFocus = false;
node_modules/@public-ui/components/dist/esm/kol-input-text.entry.js:191:        return Boolean(this.state._touched) && !this.inputHasFocus;
node_modules/@public-ui/components/dist/collection/components/input-text/shadow.js:93:            this.inputHasFocus = false;
node_modules/@public-ui/components/dist/collection/components/input-text/shadow.js:106:            this.inputHasFocus = true;
node_modules/@public-ui/components/dist/collection/components/input-text/shadow.js:146:        this.inputHasFocus = false;
node_modules/@public-ui/components/dist/collection/components/input-text/shadow.js:150:        return Boolean(this.state._touched) && !this.inputHasFocus;
node_modules/@public-ui/components/dist/collection/components/input-text/shadow.js:992:            "inputHasFocus": {}
=== showAsAlert ===
node_modules/@public-ui/components/dist/collection/components/input-text/shadow.js:70:            alert: this.showAsAlert(),
node_modules/@public-ui/components/dist/collection/components/input-text/shadow.js-71-            counterRefs: {
node_modules/@public-ui/components/dist/collection/components/input-text/shadow.js-72-                visualRef: this.counterUpdater.setVisualRef,
node_modules/@public-ui/components/dist/collection/components/input-text/shadow.js-73-                ariaRef: this.counterUpdater.setAriaRef,
--
node_modules/@public-ui/components/dist/collection/components/input-text/shadow.js:149:    showAsAlert() {
node_modules/@public-ui/components/dist/collection/components/input-text/shadow.js-150-        return Boolean(this.state._touched) && !this.inputHasFocus;
node_modules/@public-ui/components/dist/collection/components/input-text/shadow.js-151-    }
node_modules/@public-ui/components/dist/collection/components/input-text/shadow.js-152-    validateAccessKey(value) {
--
node_modules/@public-ui/components/dist/collection/components/input-password/shadow.js:33:            alert: this.showAsAlert(),
node_modules/@public-ui/components/dist/collection/components/input-password/shadow.js-34-            counterRefs: {
node_modules/@public-ui/components/dist/collection/components/input-password/shadow.js-35-                visualRef: this.counterUpdater.setVisualRef,
node_modules/@public-ui/components/dist/collection/components/input-password/shadow.js-36-                ariaRef: this.counterUpdater.setAriaRef,
--
node_modules/@public-ui/components/dist/collection/components/input-password/shadow.js:109:    showAsAlert() {
node_modules/@public-ui/components/dist/collection/components/input-password/shadow.js-110-        return Boolean(this.state._touched) && !this.inputHasFocus;
node_modules/@public-ui/components/dist/collection/components/input-password/shadow.js-111-    }
node_modules/@public-ui/components/dist/collection/components/input-password/shadow.js-112-    validateAccessKey(value) {


---

## Assistant

_Thinking:_

`inputHasFocus` is a `@State` (`"inputHasFocus": {}` in the state list at line 992). So it triggers re-render on focus/blur. `showAsAlert()` = `touched && !inputHasFocus`. So `role="alert"` is applied automatically once touched and not focused. 

So I don't strictly need `_alert: true` in the msg — KoliBri does it. But relying on it means: after submit, focus moves to error list → input blurs → `inputHasFocus=false` → re-render → `alert: true` → role="alert" inserted → announced. 

However, if focus never leaves (e.g., submit via Enter while focused in input), `inputHasFocus` stays true → no role=alert for that field. But the OTHER field (blurred) would get alert. And the error list focus moves focus away anyway.

To be robust I'll set `_alert: true` explicitly in the msg. That guarantees `role="alert"` regardless of focus.

Hmm — but wait. With `_alert: true`, `KolAlertFc` calls `vibrateOnError()` on every render where alert is true. Let's check `vibrateOnError` — probably `navigator.vibrate?.(...)` guarded. On a desktop browser it's a no-op. But on every re-render it'd vibrate mobile. Hmm, it's called during render of the FC. Re-renders happen on state change. Could be annoying on mobile.

Actually let's check: `if (alert) { vibrateOnError(); setTimeout(...) }`. So every render with alert=true vibrates. If we set `_alert: true` and the component re-renders several times, repeated vibration.

Let's check vibrateOnError.

Actually, the default behavior (`showAsAlert()`) also passes `alert: true` when touched && !focused — same vibration behavior. So KoliBri already does this. Setting `_alert: true` just extends it to the focused case.

I'll NOT set `_alert` explicitly — use KoliBri's built-in `showAsAlert()` logic. It's the idiomatic path, avoids extra vibrations, and focus moves to the error summary anyway which triggers blur → alert.

Hmm, but one concern: on submit, does focus actually leave the input? `focusErrorList()` focuses the first error link after 250ms → blur fires → `inputHasFocus=false` → role=alert → announced. Actually the msg is inserted when `_msg`+`_touched` are set (before focus moves), at which point `alert` may be false (still focused). Then when focus moves, re-render adds role="alert" → announced. Good.

But if the user clicks the submit button (rather than Enter), blur happens before submit → touched set by blur handler → msg inserted after blur → `alert: true` immediately. Good.

Edge case: submit via Enter while focused in password field, and only password has an error. Then focus moves to error list link → blur → alert. Good.

OK, I'll rely on KoliBri's default. Actually... let me reconsider once more. There's a subtle failure mode: `focusErrorList` uses `setTimeout(250)`. If the error list doesn't render (e.g., our `_errorList` doesn't work), focus stays in the input → no role=alert → error not announced for the focused field. But `aria-describedby` + `aria-invalid` are set, and SR will announce on... nothing automatic.

To be safe, I'll set `_alert: true` on the msg. It's more robust for the "validation feedback announced" requirement. Let me check vibrateOnError first.

Let me check.

Also I should double check `_errorList` works — I read `render()` uses `this._errorList` raw. That's solid.

Hmm, but one thing: does the `@Prop() _errorList` with `state: false`? In Stencil, `@Prop()` values are available as `this._errorList`. And `@Watch('_errorList')` → `validateErrorList`. Render uses `this._errorList`. Confirmed from source. 

Now let's check vibrateOnError.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn -B2 -A10 \"vibrateOnError\" node_modules/@public-ui/components/dist/esm/*.js | head -30; echo \"=== input-text @State list ===\"; sed -n '985,1000p' node_modules/@public-ui/components/dist/collection/components/input-text/shadow.js; echo \"=== id prop on input-text? ===\"; grep -n \"_id\" node_modules/@public-ui/components/dist/collection/components/input-text/shadow.js | head -20"
}
```

node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-43-const BEM_CLASS_ALERT__CLOSER = alertBem('closer');
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-44-const BEM_CLASS_ALERT__CONTENT = alertBem('content');
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js:45:const vibrateOnError = () => {
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-46-    if (typeof navigator === 'undefined' || typeof navigator.vibrate !== 'function') {
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-47-        return;
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-48-    }
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-49-    const ua = navigator.userActivation;
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-50-    const hasGesture = (ua === null || ua === void 0 ? void 0 : ua.isActive) || (ua === null || ua === void 0 ? void 0 : ua.hasBeenActive);
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-51-    if (!hasGesture) {
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-52-        return;
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-53-    }
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-54-    if (!matchMedia('(any-pointer: coarse)').matches) {
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-55-        return;
--
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-65-    const translateCloseAlert = translate('kol-close-alert');
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-66-    if (alert) {
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js:67:        vibrateOnError();
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-68-        setTimeout(() => {
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-69-            onAlertTimeout === null || onAlertTimeout === void 0 ? void 0 : onAlertTimeout();
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-70-        }, 10000);
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-71-    }
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-72-    const BEM_CLASS_ROOT = alertBem({
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-73-        hasCloser: !!hasCloser,
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-74-        [`type-${type}`]: true,
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-75-        [`variant-${variant}`]: true,
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-76-    });
node_modules/@public-ui/components/dist/esm/Alert-BjiZcCeA.js-77-    const BEM_CLASS__HEADING = alertBem('heading', {
=== input-text @State list ===
                "attribute": "_variant"
            }
        };
    }
    static get states() {
        return {
            "state": {},
            "inputHasFocus": {}
        };
    }
    static get methods() {
        return {
            "getValue": {
                "complexType": {
                    "signature": "() => Promise<string | undefined>",
                    "parameters": [],
=== id prop on input-text? ===
79:        const ariaDescribedBy = typeof this.state._maxLength === 'number' && !this.controller.hasCounter() ? [createRelatedUniqueId(this.state._id, 'character-limit-hint')] : undefined;
141:            _id: createUniqueId('input-text'),
815:                    "resolved": "string | undefined | { _label: string; } & { _ariaExpanded?: boolean | undefined; _tabIndex?: number | undefined; _value?: StencilUnknown; _accessKey?: string | undefined; _role?: \"tab\" | \"treeitem\" | undefined; _ariaControls?: string | undefined; _ariaDescription?: string | undefined; _ariaSelected?: boolean | undefined; _on?: ButtonCallbacksPropType<StencilUnknown> | undefined; _type?: \"button\" | \"reset\" | \"submit\" | undefined; _variant?: VariantClassNamePropType | undefined; _customClass?: string | undefined; _disabled?: boolean | undefined; _hideLabel?: boolean | undefined; _icons?: IconsPropType | undefined; _id?: string | undefined; _inline?: boolean | undefined; _name?: string | undefined; _shortKey?: string | undefined; _syncValueBySelector?: string | undefined; _tooltipAlign?: AlignPropType | undefined; }",


---

## Assistant

_Thinking:_

`vibrateOnError` is guarded: only on coarse-pointer devices with an active gesture. So it's fine — and it's KoliBri's intended behavior for errors.

Also, `input-text` has `_id: createUniqueId('input-text')` — an internal state, not a public prop (not in the `KolInputText` interface). So the host's `id` attribute is free for us to use.

Wait — actually is `_id` set as an internal `@State`? Line 141: `_id: createUniqueId('input-text')`. Let's check where — probably in `componentWillLoad` setting `this.state._id`. So it's internal. Our host `id` attribute is separate. 

Hmm, but careful: if Stencil has a `@Prop() _id` on input-text... The interface `KolInputText` didn't list `_id`. And `watchId`? Let's just trust: no `_id` in the JSX interface → not a public prop.

Actually hold on — there's a risk: Stencil may map attribute `id` ... no, `id` is a global HTML attribute.

OK. Now, `document.querySelector('#login-username')` returns `<kol-input-text>` which has `focus()`. `handleLinkClick` calls `targetElement.focus({behavior:'smooth', block:'nearest'})`. KolInputText's `focus(options)` → let's check it accepts these. It's `focus(options?: KolFocusOptions) => Promise<void>`. KolFocusOptions includes ScrollIntoViewOptions. Good.

Now let's write the implementation.

### Design

**Component tree:**

```
<main>
  <h1>KoliBri MCP Playground</h1>
  <KolCard _label="Sign in" _level={2}>
    <KolForm ref _on={{onSubmit, onReset}} _errorList={errorList} _requiredText={false}>
      <div className="login">
        {status && <KolAlert key={statusKey} _alert _type={status.type} _label={status.message} />}
        <KolInputText ... />
        <KolInputPassword ... />
        <div className="login__actions">
          <KolButton _type="submit" _label="Sign in" _variant="primary" />
          <KolButton _type="reset" _label="Reset" _variant="ghost" />
        </div>
      </div>
    </KolForm>
  </KolCard>
</main>
```

Wait — does `KolCard` render children? KolCard has `_label` (required) and a slot. Yes.

Hmm, but does KolCard have `_level`? Yes: `"_level"?: HeadingLevel`.

**Note on `_errorList` + status alert placement**: The error list is rendered by KolForm OUTSIDE the `<form>` (before it), at the top of kol-form. The status alert is inside our `<div className="login">` inside the form. Both fine.

Hmm, actually — should the success/error status alert be inside or outside the form? Doesn't matter much. Let's put it at the top of the form content.

Wait, but there's an issue: if we show BOTH an error list (from KolForm, above the form) and a status alert, they could conflict. Let's make them mutually exclusive:
- Validation errors → `errorList` (KolForm renders it) + focus error list.
- Successful submit → status alert (success).
- No separate "invalid credentials" case since we don't do real auth.

Actually, hmm. Let's reconsider whether to simulate auth failure. The requirement: "Validation feedback" + "Accessible labels and error handling". Field validation + error summary covers it. A success alert covers the positive path.

I think that's a complete, small, accessible login feature. Let's keep it focused.

Hmm, but "error handling" might also mean handling the case where login fails. Since there's no backend, simulating an auth failure would demonstrate a form-level error alert. I think adding it makes the demo more realistic and exercises `KolAlert _alert`. Let's add a simple simulated auth: accept any non-empty valid credentials → success; no. That's weird.

Decision: Simulate authentication against a demo credential and show a form-level error alert when it fails, with a hint telling the user the demo credentials. That demonstrates:
- field-level validation errors (error list + per-field msgs)
- form-level error alert (role=alert)
- success alert (role=alert)

Hmm, this is getting complex for a "small" feature. Let me weigh: the task says "small accessible login feature". Adding fake auth + demo credential hints adds noise.

I'll go middle ground: validate fields; on valid submit show a success status alert. On invalid submit show error list + field messages. That's "validation feedback" and "error handling" fully covered, keeps it small and honest (no fake backend).

Hmm... but then "error handling" for a login = handling bad credentials. Ugh.

Let me just ask... no, better to decide. Actually, I think a brief simulated-auth is valuable and clearly labeled. But it risks confusing users of the playground.

Final decision: **No fake auth.** On successful validation, show a success alert: "Sign-in data is valid. (Demo: no backend connected.)" — honest, and demonstrates success/live-region handling. Field validation provides the error path.

Hmm, actually — let me reconsider one more time. I'll add a lightweight simulated credential check because it makes "error handling" concrete and demonstrates the form-level alert, but I'll make it explicit in a hint. 

No. Keep it simple. The user asked for validation feedback and error handling — client-side validation IS that. I'll note in the summary that server-side auth is out of scope (no backend).

OK, writing code now.

### State & validation

```tsx
type FieldName = 'username' | 'password'
type FieldValues = Record<FieldName, string>
type FieldErrors = Partial<Record<FieldName, string>>

const VALIDATORS: Record<FieldName, (value: string) => string | undefined> = {
  username: (v) => {
    if (!v.trim()) return 'Please enter your username.'
    if (v.trim().length < 3) return 'Your username must be at least 3 characters long.'
    return undefined
  },
  password: (v) => {
    if (!v) return 'Please enter your password.'
    if (v.length < 8) return 'Your password must be at least 8 characters long.'
    return undefined
  },
}
```

Wait — is requiring min 8 chars for a login form right? For *login*, you shouldn't enforce password rules (the account may have a shorter password). For a login form, validation should only be "required". Min-length validation belongs to registration.

Right! This is a login form → only "required" validation is appropriate. Enforcing min length on login is a UX anti-pattern.

So:
- username: required → "Please enter your username."
- password: required → "Please enter your password."

That's honest and correct domain behavior. Good — and it keeps it small.

Hmm, but then the validation logic is trivially "empty check". That's fine and correct.

Maybe add: username trimmed non-empty. Password non-empty (don't trim passwords).

OK.

### Touched / errors

```tsx
const [values, setValues] = useState({ username: '', password: '' })
const [touched, setTouched] = useState({ username: false, password: false })
const [errors, setErrors] = useState<FieldErrors>({})
const [status, setStatus] = useState<{ id: number; type: 'success'; message: string } | null>(null)
```

- `validateField(name, value)` → `!value.trim() ? msg : undefined` (for password: `!value`).
- `handleInput(name)`: `(event, value) => { const next = { ...values, [name]: String(value) }; setValues(next); if (touched[name] || attemptedRef) setErrors(prev => ({...prev, [name]: validateField(name, next[name])})) ; setStatus(null) }`

Hmm, "attempted" — simpler: always re-validate a field on input if it currently has an error OR is touched:

```tsx
const handleInput = (name) => (_event, value) => {
  const nextValue = typeof value === 'string' ? value : String(value ?? '')
  setValues((prev) => ({ ...prev, [name]: nextValue }))
  setTouched((prev) => {
    if (!prev[name]) return prev  // no re-render needed
    setErrors((e) => ({ ...e, [name]: validate(name, nextValue) }))  // ⚠️ setState inside updater — bad
    return prev
  })
}
```

That's a React anti-pattern (side effect in updater). Better: read current state from closure. Since the handler is created on each render, closure values are current. Fine.

```tsx
const handleInput = (name: FieldName) => (_event: Event, value: unknown) => {
  const next = typeof value === 'string' ? value : String(value ?? '')
  const nextValues = { ...values, [name]: next }
  setValues(nextValues)
  if (touched[name]) {
    setErrors((prev) => ({ ...prev, [name]: validateField(name, next) }))
  }
  if (status) setStatus(null)
}
```

Wait — but `errors[name]` may exist even if not touched? Only after submit attempt, which also sets touched. So `touched[name]` gating is fine.

Hmm, but after submit sets `touched` for both, subsequent input revalidates. Good.

`handleBlur(name)`:
```tsx
const handleBlur = (name: FieldName) => () => {
  setTouched((prev) => (prev[name] ? prev : { ...prev, [name]: true }))
  setErrors((prev) => {
    const nextError = validateField(name, values[name])
    if (prev[name] === nextError) return prev
    return { ...prev, [name]: nextError }
  })
}
```

Careful: if error is undefined and prev has none, `{...prev, [name]: undefined}` creates a key with undefined — `errors.username` would be undefined → falsy → fine. But `Partial<Record>` allows undefined. And `errorList` filter handles it.

Hmm, but there's a subtlety: blur fires when moving focus. On submit via button click, blur fires first (from input to button) → touched=true + validate → then submit handler runs. That's fine.

But: blur on the password field when clicking submit — then submit handler validates both anyway.

Wait, ordering issue: if blur sets `errors` (async) and submit also sets `errors` (async), React batches them — the later `setErrors` wins (both are functional updaters, so they compose: blur's updater runs, then submit's updater runs). Both compute from the same `values`, so results agree. Good.

Actually, careful: in React 19, events in the same batch → updaters applied in order. blur updater: `{...prev, [name]: validate(name, values[name])}`. submit updater: computes full error map. The submit one will overwrite. Fine.

Hmm, but blur fires BEFORE mousedown/click on the button? Blur fires on mousedown (focus change happens on mousedown for buttons... actually clicking a button: mousedown → focus moves → blur of input; then click). React's onBlur is a focus event (not focusin in React 17+? React maps onBlur to `focusout`). Either way it fires before `click`. Both in the same batch? React 18+ batches across all events in the same task... blur (focusout) and click are separate native events → separate batches. So blur commits first, then submit. Fine either way.

`handleSubmit(event)`:
```tsx
const handleSubmit = (event: Event) => {
  event.preventDefault()
  const nextErrors: FieldErrors = {}
  ;(Object.keys(VALIDATORS) as FieldName[]).forEach((name) => {
    const err = validateField(name, values[name])
    if (err) nextErrors[name] = err
  })
  setTouched({ username: true, password: true })
  setErrors(nextErrors)
  setStatus(null)
  if (Object.keys(nextErrors).length > 0) {
    formRef.current?.focusErrorList()
  } else {
    setStatus({ id: Date.now(), type: 'success', message: 'Sign-in data validated successfully.' })
  }
}
```

Wait — `focusErrorList()` is called synchronously, but `errors` state hasn't committed yet → `_errorList` prop not set on the element → error list not rendered at +250ms? Let's see: React commits synchronously after the event handler returns (automatic batching flushes at end of event). So by +250ms the new `_errorList` is set. `focusErrorList`'s internal setTimeout(250) runs after. ✓But `errorList` must be derived from `nextErrors`, not from `errors` state (which hasn't updated). Since `_errorList` comes from `errors` state → after commit it's correct. And `focusErrorList` runs at +250ms → correct. ✓

Hmm — but there's an ordering concern: does `attachProps` (child `componentDidUpdate`) run before Stencil's re-render? Yes, React sets the property synchronously during commit; Stencil schedules its re-render (async, but well within 250ms).

Also: `KolForm`'s `focusErrorList` is a public method on the host element. `formRef.current` is `HTMLKolFormElement`. ✓

Now — `event.preventDefault()`: KolForm's internal onSubmit already calls it. Our `_on.onSubmit(event)` receives the event after preventDefault. Calling again is harmless. But for the `propagateSubmitEventToForm` path, the event is a synthetic `SubmitEvent` not attached to any form — preventDefault is harmless. Keep it for safety (defensive; prevents navigation if native submit path is used... but KolForm already prevents). I'll keep it — harmless and explicit.

Hmm, actually: is `_on.onSubmit`'s signature `(event: Event) => void`? `KoliBriFormCallbacks` — let's check: probably `{ onSubmit?: EventCallback<Event>; onReset?: EventCallback<Event> }`. Let's verify.

Actually from components.d.ts: `"_on"?: KoliBriFormCallbacks;`. Let's check its definition quickly.

### `errorList` memo

```tsx
const errorList = useMemo<ErrorListPropType[]>(() => {
  const list: ErrorListPropType[] = []
  if (errors.username) list.push({ message: errors.username, selector: USERNAME_ID })
  if (errors.password) list.push({ message: errors.password, selector: PASSWORD_ID })
  return list
}, [errors])
```

### `_msg`

```tsx
const usernameMsg = errors.username ? { _description: errors.username, _type: 'error' as const } : undefined
```

Type: `Stringified<MsgPropType>` = `string | MsgPropType`. MsgPropType requires `_description: string` and allows `_type?: AlertTypePropType`. Since `verbatimModuleSyntax` is on and no `strict`, object literal should be assignable.

Hmm — is `_type` in AlertProps optional? `AlertProps = Generic.Element.Members<RequiredAlertProps, OptionalAlertProps>`. `Generic.Element.Members<R, O>` presumably maps to `{ [K in keyof R]-?: ... } & { [K in keyof O]?: ... }`. So optional with `_` prefix. So `_type?: 'default'|'info'|'success'|'warning'|'error'`.

Let's verify `Generic.Element.Members` from adopted-style-sheets... it's a peer dep, present in node_modules? `adopted-style-sheets` was not found earlier (`find: node_modules/adopted-style-sheets: No such file or directory`). Hmm! But `@public-ui/components` has it as a peerDependency. If it's not installed, TypeScript would error on `import type { Generic } from 'adopted-style-sheets'` inside the .d.ts... but `skipLibCheck: true` is set, so lib errors are skipped. And we don't import it ourselves.

Wait, but earlier `grep -rn "Members" node_modules/adopted-style-sheets/dist/*.d.ts` → "no matches found: node_modules/adopted-style-sheets/dist/*.d.ts" and `find: node_modules/adopted-style-sheets: No such file or directory`. So it's NOT installed at the root. With `skipLibCheck: true`, TS won't complain about the broken import inside the .d.ts, but `AlertProps` would resolve to `any`/error type. With skipLibCheck, unresolved imports in declaration files become `any`. So `MsgPropType` might degrade to something permissive. Should be fine for assignment.

Hmm, but actually — is `adopted-style-sheets` maybe hoisted differently? Let's check with pnpm (node_modules/.pnpm). Let's verify quickly.

Actually `pnpm` uses a symlinked structure; `node_modules/adopted-style-sheets` would exist if it's a direct dependency of the root package. It's not in root package.json, so it's not linked at root. But `@public-ui/components`'s own node_modules would have it... pnpm links deps into `node_modules/.pnpm/@public-ui+components@4.4.0/node_modules/adopted-style-sheets`. Hmm, but it's a *peer* dependency — pnpm resolves peers from the parent. Since root doesn't provide it, pnpm might warn/skip.

Let's just check.

Also `@public-ui/theme-default` is imported in main.tsx and presumably also needs it.

Let's check whether it resolves.

Let's do a quick check and also run `tsc -b` to see the current baseline compiles.

Let's go.

**Tool: shell**

**Input:**
```json
{
  "command": "ls node_modules/.pnpm | grep -i adopted; echo \"---\"; ls node_modules/@public-ui/components/node_modules 2>/dev/null; echo \"=== KoliBriFormCallbacks ===\"; cat node_modules/@public-ui/components/dist/types/schema/components/form.d.ts; echo \"=== baseline tsc ===\"; npx tsc -b 2>&1 | head -30; echo \"exit=$?\""
}
```

@public-ui+components@4.4.0_adopted-style-sheets@1.1.9-rc.25
@public-ui+react-v19@4.4.0_@public-ui+components@4.4.0_adopted-style-sheets@1.1.9-rc.25_384a374bdc2d971affd9aa190bdb38c1
@public-ui+theme-default@4.4.0_@public-ui+components@4.4.0_adopted-style-sheets@1.1.9-rc.25_
adopted-style-sheets@1.1.9-rc.25
---
=== KoliBriFormCallbacks ===
import type { Generic } from 'adopted-style-sheets';
import type { Callback } from '../enums';
import type { PropErrorList } from '../props';
import type { EventCallback } from '../types';
export type KoliBriFormCallbacks = {
    [Callback.onSubmit]?: EventCallback<Event>;
    [Callback.onReset]?: EventCallback<Event>;
};
type RequiredProps = NonNullable<unknown>;
type OptionalProps = {
    on: KoliBriFormCallbacks;
    requiredText: string | boolean;
} & PropErrorList;
type RequiredStates = RequiredProps;
type OptionalStates = OptionalProps;
export type FormProps = Generic.Element.Members<RequiredProps, OptionalProps>;
export type FormStates = Generic.Element.Members<RequiredStates, OptionalStates>;
export type FormAPI = Generic.Element.ComponentApi<RequiredProps, OptionalProps, RequiredStates, OptionalStates>;
export {};
=== baseline tsc ===
exit=0


---

## Assistant

_Thinking:_

Baseline compiles. `adopted-style-sheets` is present in `.pnpm` (peer resolved).

`KoliBriFormCallbacks = { onSubmit?: EventCallback<Event>; onReset?: EventCallback<Event> }` where `EventCallback<E> = (event: E) => void`.

Now let's verify `Generic.Element.Members` to know if `_type` is optional in MsgPropType. Let's check the .d.ts.

Actually easier: just write the code and let tsc tell us.

Let me also double check: does `KolForm`'s `_errorList` prop type on the React wrapper accept `ErrorListPropType[]`? `JSX.KolForm._errorList?: ErrorListPropType[]`. And `ErrorListPropType` is exported from `@public-ui/components` (via `components.d` re-export). ✓

Now, `HTMLKolFormElement` — exported? It's `interface HTMLKolFormElement` inside `declare global`? Let's check: components.d.ts line 4572 was `interface HTMLKolInputTextElement extends Omit<Components.KolInputText, ...>, HTMLStencilElement`. Let's see if it's inside `declare global { namespace JSX { ... } }` or at top level.

From the tail output: `export { LocalJSX as JSX };` at 8604, then `declare global { namespace JSX { ... } }` with `IntrinsicElements`. The `HTMLKol*Element` interfaces are probably declared under `declare global { interface HTMLElementTagNameMap ... }` or exported.

Let's grep for how HTMLKolFormElement is declared/exported.

Let's check.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -n \"HTMLKolFormElement\" node_modules/@public-ui/components/dist/types/components.d.ts; echo \"---\"; grep -n \"declare global\\|^export\\|^declare\" node_modules/@public-ui/components/dist/types/components.d.ts | head -30; echo \"=== Members ===\"; sed -n '1,60p' node_modules/.pnpm/adopted-style-sheets@1.1.9-rc.25/node_modules/adopted-style-sheets/dist/types/*.d.ts 2>/dev/null | head -60 || find node_modules/.pnpm/adopted-style-sheets@1.1.9-rc.25 -name \"*.d.ts\" | head"
}
```

4386:    interface HTMLKolFormElement extends Components.KolForm, HTMLStencilElement {
4388:    var HTMLKolFormElement: {
4389:        prototype: HTMLKolFormElement;
4390:        new (): HTMLKolFormElement;
5006:        "kol-form": HTMLKolFormElement;
8684:            "kol-form": LocalJSX.KolForm & JSXBase.HTMLAttributes<HTMLKolFormElement>;
---
19:export { AccessKeyPropType, AccordionCallbacksPropType, AlertTypePropType, AlertVariantPropType, AlignPropType, AlternativeButtonLinkRolePropType, AriaCurrentValuePropType, AriaDescriptionPropType, AriaDetailsPropType, AriaOwnsPropType, AutoCompletePropType, BadgeTextPropType, BreadcrumbLinkProps, ButtonCallbacksPropType, ButtonOrLinkOrTextWithChildrenProps, ButtonTypePropType, ColorPair, CustomClassPropType, DetailsCallbacksPropType, DownloadPropType, ErrorListPropType, FixedColsPropType, HasSettingsMenuPropType, HeadingLevel, HrefPropType, IconsHorizontalPropType, IconsPropType, IdPropType, InlinePropType, InputCheckboxIconsProp, InputDateTypePropType, InputTextTypePropType, InputTypeOnDefault, InternalButtonProps, Iso8601, KolFocusOptions, KoliBriAlertEventCallbacks, KoliBriCardEventCallbacks, KoliBriDialogEventCallbacks, KoliBriFormCallbacks, KoliBriIconsProp, KoliBriModalEventCallbacks, KoliBriPaginationButtonCallbacks, KoliBriTableDataType, KoliBriTableHeaderCell, KoliBriTableHeaders, KoliBriTablePaginationProps, KoliBriTableSelectionKeys, KoliBriTabsCallbacks, LabelAlignPropType, LabelPropType, LabelWithExpertSlotPropType, LinkOnCallbacksPropType, LinkProps, LinkTargetPropType, MaxLengthBehaviorPropType, MaxPropType, MsgPropType, NamePropType, NumberString, OpenPropType, OptionsPropType, OptionsWithOptgroupPropType, PaginationHasButton, PaginationPositionPropType, PopoverAlignPropType, PropColor, RadioOptionsPropType, RowsPropType, ShortKeyPropType, SpellCheckPropType, StencilUnknown, Stringified, SuggestionsPropType, SyncValueBySelectorPropType, TabBehaviorPropType, TabButtonProps, TableCallbacksPropType, TableDataFootPropType, TableDataPropType, TableHeaderCellsPropType, TableSelectionPropType, TableStatefulCallbacksPropType, TextareaResizePropType, Toast, ToastState, ToolbarItemsPropType, TooltipAlignPropType, VariantClassNamePropType, VisibilityTogglePropType } from "./schema";
20:export { AriaHasPopupPropType } from "./schema/props/aria-has-popup";
21:export { unknown as FormFieldLabelInfoPopoverProps } from "./components";
22:export { ModalVariantPropType } from "./schema/props/variant/modal";
23:export { LoadingType, OrientationPropType as OrientationPropType1, ProgressVariantType, QuoteVariantType, SpinVariantType } from "./internal/props";
24:export { KoliBriImageEventCallbacks } from "./schema/components/image";
25:export { InputCheckboxVariantPropType } from "./schema/props/variant-input-checkbox";
26:export { OrientationPropType } from "./schema/props/orientation";
27:export { FormFieldLabelInfoPopoverProps as FormFieldLabelInfoPopoverProps1 } from "./functional-components/FormFieldLabel/FormFieldLabel";
28:export { AriaLabelledbyPropType } from "./schema/props/aria-labelledby";
29:export { HasCreateButtonPropType } from "./schema/props/has-create-button";
30:export namespace Components {
4143:export interface KolSkeletonCustomEvent<T> extends CustomEvent<T> {
4147:declare global {
5057:declare namespace LocalJSX {
8604:export { LocalJSX as JSX };
8605:declare module "@stencil/core" {
=== Members ===
zsh:1: no matches found: node_modules/.pnpm/adopted-style-sheets@1.1.9-rc.25/node_modules/adopted-style-sheets/dist/types/*.d.ts


---

## Assistant

_Thinking:_

`HTMLKolFormElement` is inside `declare global` (line 4147 `declare global {` ... containing `HTMLElementTagNameMap` and the HTML*Element interfaces at 4386). So it's a global type — no import needed. It's available as a global since `@public-ui/components` types are loaded (via the import of the package).Actually — global augmentation requires the module to be included in the program. Since we `import { ... } from '@public-ui/components'` (value import), the global augmentation applies. Also main.tsx imports from `@public-ui/components` already.

Hmm, but to be safe I could use `React.ElementRef<typeof KolForm>` instead. Actually `KolForm` is `ForwardRefExoticComponent<JSX.KolForm & ... & RefAttributes<HTMLKolFormElement>>` — so `React.ElementRef<typeof KolForm>` = `HTMLKolFormElement`. Using the global directly is simpler.

Let's verify globals work by compiling.

Now let's also confirm `Generic.Element.Members` — check adopted-style-sheets d.ts location.

Let's just write the code and compile.

### Styling

Add CSS in App.css for `.login` layout. Note App.css isn't imported. I'll import it in App.tsx.

Actually — check `src/index.css` and whether App.css is referenced anywhere.

Let me check src files.

Let me now write the code.

One more consideration: `KolForm`'s `_requiredText` default `true` shows a mandatory-fields hint paragraph. Since both fields are required, that hint is accurate and helpful. I'll keep the default (don't pass the prop) — actually passing nothing means default `true`. But the default text is the KoliBri translation `kol-form-description`. Let's keep it (accessible hint about `*` markers).

Hmm, does KoliBri show a `*` for required fields? Yes, `showBadge` on the label with required badge. Good.

Let's keep `_requiredText` default (omit).

Now: layout. KoliBri form fields are block-level. I'll add a small wrapper with gap.

Let's check index.css to match styling conventions.

Let me look at src/index.css and App.css fully (App.css was truncated earlier).

Let me read them.

**Tool: shell**

**Input:**
```json
{
  "command": "ls -la src public docs; echo \"=== index.css ===\"; cat src/index.css; echo \"=== App.css (tail) ===\"; tail -60 src/App.css; echo \"=== main.tsx ===\"; cat src/main.tsx"
}
```

docs:
total 16
drwxr-xr-x@  3 p.dijon.de.monteton  staff    96 Oct  1 14:51 .
drwxr-xr-x@ 17 p.dijon.de.monteton  staff   544 Oct  1 14:51 ..
-rw-r--r--@  1 p.dijon.de.monteton  staff  4162 Oct  1 14:51 kolibri-mcp-poc.md

public:
total 40
drwxr-xr-x@  4 p.dijon.de.monteton  staff   128 Oct  1 12:17 .
drwxr-xr-x@ 17 p.dijon.de.monteton  staff   544 Oct  1 14:51 ..
-rw-r--r--@  1 p.dijon.de.monteton  staff  9522 Oct  1 12:17 favicon.svg
-rw-r--r--@  1 p.dijon.de.monteton  staff  5031 Oct  1 12:17 icons.svg

src:
total 32
drwxr-xr-x@  7 p.dijon.de.monteton  staff   224 Oct  1 12:17 .
drwxr-xr-x@ 17 p.dijon.de.monteton  staff   544 Oct  1 14:51 ..
-rw-r--r--@  1 p.dijon.de.monteton  staff  2891 Oct  1 12:17 App.css
-rw-r--r--@  1 p.dijon.de.monteton  staff   208 Oct  1 12:39 App.tsx
drwxr-xr-x@  5 p.dijon.de.monteton  staff   160 Oct  1 12:17 assets
-rw-r--r--@  1 p.dijon.de.monteton  staff  2169 Oct  1 12:17 index.css
-rw-r--r--@  1 p.dijon.de.monteton  staff   503 Oct  1 12:32 main.tsx
=== index.css ===
:root {
  --text: #6b6375;
  --text-h: #08060d;
  --bg: #fff;
  --border: #e5e4e7;
  --code-bg: #f4f3ec;
  --accent: #aa3bff;
  --accent-bg: rgba(170, 59, 255, 0.1);
  --accent-border: rgba(170, 59, 255, 0.5);
  --social-bg: rgba(244, 243, 236, 0.5);
  --shadow:
    rgba(0, 0, 0, 0.1) 0 10px 15px -3px, rgba(0, 0, 0, 0.05) 0 4px 6px -2px;

  --sans: system-ui, 'Segoe UI', Roboto, sans-serif;
  --heading: system-ui, 'Segoe UI', Roboto, sans-serif;
  --mono: ui-monospace, Consolas, monospace;

  font: 18px/145% var(--sans);
  letter-spacing: 0.18px;
  color-scheme: light dark;
  color: var(--text);
  background: var(--bg);
  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
}

@media (prefers-color-scheme: dark) {
  :root {
    --text: #9ca3af;
    --text-h: #f3f4f6;
    --bg: #16171d;
    --border: #2e303a;
    --code-bg: #1f2028;
    --accent: #c084fc;
    --accent-bg: rgba(192, 132, 252, 0.15);
    --accent-border: rgba(192, 132, 252, 0.5);
    --social-bg: rgba(47, 48, 58, 0.5);
    --shadow:
      rgba(0, 0, 0, 0.4) 0 10px 15px -3px, rgba(0, 0, 0, 0.25) 0 4px 6px -2px;
  }

  #social .button-icon {
    filter: invert(1) brightness(2);
  }
}

#root {
  width: 1126px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  border-inline: 1px solid var(--border);
  min-height: 100svh;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

body {
  margin: 0;
}

h1,
h2 {
  font-family: var(--heading);
  font-weight: 500;
  color: var(--text-h);
}

h1 {
  font-size: 56px;
  letter-spacing: -1.68px;
  margin: 32px 0;
  @media (max-width: 1024px) {
    font-size: 36px;
    margin: 20px 0;
  }
}
h2 {
  font-size: 24px;
  line-height: 118%;
  letter-spacing: -0.24px;
  margin: 0 0 8px;
  @media (max-width: 1024px) {
    font-size: 20px;
  }
}
p {
  margin: 0;
}

code,
.counter {
  font-family: var(--mono);
  display: inline-flex;
  border-radius: 4px;
  color: var(--text-h);
}

code {
  font-size: 15px;
  line-height: 135%;
  padding: 4px 8px;
  background: var(--code-bg);
}
=== App.css (tail) ===
    align-items: center;
    gap: 8px;
    text-decoration: none;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: var(--shadow);
    }
    .button-icon {
      height: 18px;
      width: 18px;
    }
  }

  @media (max-width: 1024px) {
    margin-top: 20px;
    flex-wrap: wrap;
    justify-content: center;

    li {
      flex: 1 1 calc(50% - 8px);
    }

    a {
      width: 100%;
      justify-content: center;
      box-sizing: border-box;
    }
  }
}

#spacer {
  height: 88px;
  border-top: 1px solid var(--border);
  @media (max-width: 1024px) {
    height: 48px;
  }
}

.ticks {
  position: relative;
  width: 100%;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: -4.5px;
    border: 5px solid transparent;
  }

  &::before {
    left: 0;
    border-left-color: var(--border);
  }
  &::after {
    right: 0;
    border-right-color: var(--border);
  }
}
=== main.tsx ===
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { register } from '@public-ui/components'
import { defineCustomElements } from '@public-ui/components/loader'
import { DEFAULT } from '@public-ui/theme-default'

import './index.css'
import App from './App.tsx'

register(DEFAULT, defineCustomElements)
  .then(() => {
    createRoot(document.getElementById('root')!).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
  })
  .catch(console.error)

---

## Assistant

_Thinking:_

Note: `#root` has `text-align: center`. The login form should probably be left-aligned within a centered card. I'll add styles.

Also `App.css` is not imported. I'll import it in App.tsx and add `.login` styles.

Careful: importing App.css activates `.counter`, `.hero`, `#center`, `#next-steps`, `#spacer`, `.ticks` — none of which exist in the DOM now (the original template's markup was removed). So harmless.

Actually wait — `#center` and `#next-steps`... the current App.tsx has `<main><h1>...</h1></main>`. No such IDs. Safe.

Hmm, but `#center` has `display:flex; flex-grow:1` — not applied since no element. Fine.

Now let me write the implementation.

Let me be careful about the `_on` handler signature for inputs: `InputTypeOnDefault`:
```ts
export type InputTypeOnDefault = {
  onBlur?: EventCallback<Event>;
  onChange?: EventValueOrEventCallback<Event, StencilUnknown>;
  onFocus?: EventCallback<Event>;
  onInput?: EventValueOrEventCallback<Event, StencilUnknown>;
  onKeyDown?: EventCallback<KeyboardEvent>;
  ...
}
```
Let's verify.

Actually let's check `input-type-on.d.ts` or similar.

Let's grep.

Also `ButtonCallbacksPropType` for KolButton — not needed since we use `_type="submit"` (no onClick).

Let's check InputTypeOnDefault.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn -A15 \"InputTypeOnDefault\" node_modules/@public-ui/components/dist/types/schema/types/input/*.d.ts node_modules/@public-ui/components/dist/types/schema/types/*.d.ts 2>/dev/null | head -30; echo \"=== files ===\"; grep -rln \"InputTypeOnDefault =\" node_modules/@public-ui/components/dist/types/"
}
```

node_modules/@public-ui/components/dist/types/schema/types/input/types.d.ts:35:export type InputTypeOnDefault = InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus & InputTypeOnInput & InputTypeOnKeyDown;
node_modules/@public-ui/components/dist/types/schema/types/input/types.d.ts-36-export {};
=== files ===
node_modules/@public-ui/components/dist/types/schema/types/input/types.d.ts


---

## Assistant

_Thinking:_

Good. Now write the code.

Let me draft `src/App.tsx`.

```tsx
import { useMemo, useRef, useState } from 'react'
import {
  KolAlert,
  KolButton,
  KolCard,
  KolForm,
  KolInputPassword,
  KolInputText,
} from '@public-ui/react-v19'
import type { ErrorListPropType, HTMLKolFormElement, MsgPropType } from '@public-ui/components'

import './App.css'

const USERNAME_FIELD_ID = 'login-username'
const PASSWORD_FIELD_ID = 'login-password'

type FieldName = 'username' | 'password'
type FieldValues = Record<FieldName, string>
type FieldErrors = Partial<Record<FieldName, string>>

type Status = {
  key: number
  type: 'success'
  message: string
}

const VALIDATORS: Record<FieldName, (value: string) => string | undefined> = {
  username: (value) =>
    value.trim().length > 0 ? undefined : 'Please enter your username.',
  password: (value) =>
    value.length > 0 ? undefined : 'Please enter your password.',
}

function validateField(name: FieldName, value: string): string | undefined {
  return VALIDATORS[name](value)
}

const toFieldValue = (value: unknown): string =>
  typeof value === 'string' ? value : String(value ?? '')

function App() {
  const formRef = useRef<HTMLKolFormElement>(null)

  const [values, setValues] = useState<FieldValues>({ username: '', password: '' })
  const [touched, setTouched] = useState<Record<FieldName, boolean>>({ username: false, password: false })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status | null>(null)

  const errorList = useMemo<ErrorListPropType[]>(() => {
    const list: ErrorListPropType[] = []
    if (errors.username) {
      list.push({ message: errors.username, selector: `#${USERNAME_FIELD_ID}` })
    }
    if (errors.password) {
      list.push({ message: errors.password, selector: `#${PASSWORD_FIELD_ID}` })
    }
    return list
  }, [errors])

  const createInputHandler = (name: FieldName) => (_event: Event, value: unknown) => {
    const nextValue = toFieldValue(value)
    setValues((previous) => ({ ...previous, [name]: nextValue }))
    if (touched[name]) {
      setErrors((previous) => ({ ...previous, [name]: validateField(name, nextValue) }))
    }
    setStatus(null)
  }

  const createBlurHandler = (name: FieldName) => () => {
    setTouched((previous) =>
      previous[name] ? previous : { ...previous, [name]: true },
    )
    setErrors((previous) => {
      const nextError = validateField(name, values[name])
      return previous[name] === nextError ? previous : { ...previous, [name]: nextError }
    })
  }

  const handleSubmit = (event: Event) => {
    event.preventDefault()

    const nextErrors: FieldErrors = {}
    for (const name of Object.keys(VALIDATORS) as FieldName[]) {
      const nextError = validateField(name, values[name])
      if (nextError) nextErrors[name] = nextError
    }

    setTouched({ username: true, password: true })
    setErrors(nextErrors)
    setStatus(null)

    if (Object.keys(nextErrors).length > 0) {
      formRef.current?.focusErrorList()
      return
    }

    setStatus({
      key: Date.now(),
      type: 'success',
      message: 'Sign-in data is valid. This demo does not connect to a backend.',
    })
  }

  const handleReset = (event: Event) => {
    event.preventDefault()
    setValues({ username: '', password: '' })
    setTouched({ username: false, password: false })
    setErrors({})
    setStatus(null)
  }

  const usernameError = touched.username ? errors.username : undefined
  const passwordError = touched.password ? errors.password : undefined
  ...
}
```

Hmm — `createInputHandler` closes over `touched`. On each render a new handler is created, so `touched` is current. But `_on` is set on the element in componentDidUpdate with the latest props → current closure. ✓

Wait — there's a subtle bug: `touched[name]` gating. After submit, `touched` = both true. Then input revalidates. ✓. Before any touch, no validation on input — correct (don't show errors while typing).

But what if field is NOT touched but has an error? Can't happen: errors are only set on blur (which sets touched) or submit (which sets touched).

Hmm — actually in `handleSubmit` we `setTouched` and `setErrors` — but if `touched` was already both true, `setTouched` with a new object → new reference → re-render (needed anyway for errors).

Edge: submit with no errors, both touched already true → `setTouched` new object, `setErrors` new object → re-render → status set. Fine.

Now the blur handler: `previous[name] === nextError ? previous : ...`. If both undefined → returns previous (no re-render). Good.

Hmm, but `setErrors` returning `previous` when nothing changed avoids extra renders. But we also `setTouched`. Fine.

Careful: on blur we validate `values[name]` from the closure. The blur happens after input events have committed (React flushes state after each event). Since `onInput` and `onBlur` are separate native events, `values` is current. ✓

But wait — are `_on.onInput` and `_on.onBlur` React-managed events? No, they're called by the web component directly. So React's automatic batching doesn't apply — each `setValues` call triggers a synchronous re-render (React 18+ outside of React event handlers still batches in most cases... actually React 18+ batches ALL updates, including in promises/timeouts/native callbacks, via `createRoot`). So updates are batched per microtask. Either way, by the time blur fires (a later native event), state is committed.

Hmm, one risk: KoliBri's `onInput` → `setValues`. Then immediately... no. Fine.

Now: **is `_on.onInput` called at all if we don't pass `onInput`?** We pass it. ✓

Another consideration: **React `onChange` vs `onInput`**. We use `onInput`.

Now — there's an important issue: `_value` is a controlled prop. When the user types, we call `setValues`. React re-renders, `attachProps` sets `node._value = nextValue`. Stencil's `validateValue` → `state._value` → the `<input>`'s value updated. Since it's the same as what the user typed, no cursor jump. ✓

But: does `attachProps` set `_value` BEFORE the WC processes its own internal `this._value` update? Order: user types → WC sets `this._value = el.value` → calls our `onInput` → React setState → re-render → `node._value = same string`. Stencil's `@Prop` setter fires with the same value → `validateValue` → `watchString` → `setState` with same value → likely no-op or a harmless re-render. ✓

OK.

### `_msg` type

```tsx
const usernameMsg: MsgPropType | undefined = usernameError
  ? { _description: usernameError, _type: 'error' }
  : undefined
```

Hmm, `MsgPropType` is exported from `@public-ui/components`. ✓

But careful: `_msg` accepts `Stringified<MsgPropType>`. Passing `MsgPropType | undefined` ✓.

### The status alert

```tsx
{status && (
  <KolAlert key={status.key} _alert _type={status.type} _label={status.message} />
)}
```

Hmm — `_label` on KolAlert is `LabelPropType` (string). And children slot is separate. For a `msg` variant, label renders as a heading (`level: 0` → bold text) inside the alert. That's the standard KoliBri usage: `<kol-alert _label="..." _type="success" />`.

Wait — but `KolAlertFc` renders `label && h(KolHeadingFc, {level: 0}, label)` and `children` in the content div. With `level: 0`, `KolHeadingFc` renders... probably a `<strong>` or `<p>`. Fine.

Actually, is `_label` required for KolAlert? `"_label"?: LabelPropType;` — optional. But without it, nothing shows except the icon. So pass `_label`.

Hmm, but with `_alert` and no children, the alert content div is empty; label is the heading. Good.

Actually — is `aria-describedby="heading"` pointing to an element with `id="heading"`? `h("div", {class: content, "aria-describedby": label ? 'heading' : undefined}, children)` and the heading has `id: "heading"`. Hmm, `id="heading"` inside a shadow root — `aria-describedby` resolves within the same tree. Fine (KoliBri's concern).

### `role="alert"` announcement with `key`

Using `key={status.key}` forces a fresh element each time status changes → newly inserted `role="alert"` → announced. But: initial insert with `_alert=true`. ✓

Hmm — but React reconciliation: with a different `key`, React unmounts old and mounts new. During commit, `attachProps` in `componentDidMount` sets `_alert`. Stencil renders `role="alert"`. Should announce.

Actually there's a timing subtlety: `role="alert"` appears via Stencil's async render, not immediately. Screen readers still announce late-inserted alert content (usually). This is a known limitation of web-component-based live regions. It's the standard KoliBri approach though.

Alternative: always render a persistent live region and change its content. But KoliBri's `KolAlert` sets `role` only when `_alert`. If we keep `_alert` true and change `_label`... but our `key` approach remounts.

Better: keep the SAME element (no key) and just change `_label` — the role="alert" region persists, and content changes get announced. But the first appearance... if the alert element is always rendered (even with a placeholder), role=alert persists from the start and content changes are announced. That's the most reliable pattern for live regions.

Hmm, but rendering an empty alert always is odd.

Compromise: render the alert only when `status` exists, with a stable key (no key change), and change `_label` when status changes. Since the element is created fresh on first status → inserted with role=alert + content → announced. Subsequent status changes (same element) → label changes → announced (live region mutation).

But success → then error → then success: we set `status` to null on input, which unmounts it. Next status mounts a fresh element. That works.

So: no `key`, just conditional render. Let's do that. Actually with no key, React reuses the element when status goes from success to another success without unmount — but we always null it out on input/submit. Fine.

Hmm, let's keep `key={status.key}` — no. Let's think about which is more reliable:

Case A (no key, conditional render): 
- status null → element absent.
- status set → element mounted, `_alert=true`, label set. Stencil renders `role="alert"` with text. Announced. ✓
- status changes without unmount (won't happen since we null it) → label change → announced. ✓

Case B (key): fresh element each time → same as A for each transition.

Both equivalent given we null out. I'll drop the key and just use conditional rendering — simpler. Actually I'll keep the key to guarantee a fresh element per status (defends against the case where status changes directly success→success). Keep it.

Hmm, `key={status.key}` where key = Date.now(). Fine.

### `focusErrorList` timing

Called synchronously in `handleSubmit`. Internal setTimeout(250ms). By then React has committed (synchronously at end of the event handler? Actually the handler is called by the web component, not React — so `setState` is NOT in a React event handler → React 18+ still auto-batches in a microtask). Hmm!

This is important: `_on.onSubmit` is invoked by the web component (from `setTimeout` in `propagateSubmitEventToForm`, or from a native `submit` event). So it's outside React's event system. React 18+ batches updates everywhere (automatic batching) — flushed in a microtask. So `setTouched`/`setErrors`/`setStatus` will be flushed in a microtask shortly after, well before 250ms. ✓

And `formRef.current?.focusErrorList()` is called synchronously — `formRef.current` exists (the element). It schedules a 250ms timeout. Meanwhile React commits and `attachProps` sets `_errorList`. ✓

Good.

Wait — but is `formRef.current` set? The `KolForm` wrapper is `React.forwardRef` → `mergeRefs(forwardedRef, this.setComponentElRef)`. `forwardedRef` is our ref. So `formRef.current` = the `<kol-form>` element. ✓

### Does `focusErrorList` exist on the element?

`HTMLKolFormElement extends Components.KolForm, HTMLStencilElement` → `Components.KolForm` has `focusErrorList(options?: KolFocusOptions): Promise<void>`. ✓

### Reset button

`<KolButton _type="reset" _label="Reset" _variant="ghost" />`. Note `KolButton`'s `_variant` — theme variants: primary, secondary, tertiary, danger, ghost, normal. Default from theme feature flag `buttonVariantDefault` ?? 'normal'.

Let's use `_variant="primary"` for submit and `_variant="normal"` (or omit) for reset. Actually `ghost` might look odd. Let's use primary for submit, and omit `_variant` for reset (default normal).

Hmm — actually KoliBri's default button variant is 'normal'. Fine.

### KolCard

`<KolCard _label="Sign in" _level={2}>` — but wait, index.css styles `h2` globally; KoliBri renders in shadow DOM so global h2 styles don't apply. Fine.

Hmm, does `KolCard` require children? It has a slot. Provide children.

Actually — do I even need KolCard? It gives a nice bordered container with a heading. `#root` has `text-align: center` which would center everything. A card with left-aligned form looks better.

Let's structure:

```tsx
<main>
  <h1>KoliBri MCP Playground</h1>
  <section className="login" aria-labelledby="login-title">  // hmm, KolCard provides heading
 ...
</main>
```

Simpler: use KolCard as the section (it renders a `<section>`? let's check). KoliBri's kol-card renders... let's check: it probably renders `<section>` or `<div>` with a heading. Let's check.

Actually, does `KolCard` produce a `<h2>`/heading with `_level`? `KolCard` `_level` → heading level. With `_level={2}` it renders an `<h2>` inside the card's shadow root. But `index.css` `h2` styles don't pierce shadow DOM. KoliBri has its own heading styles. Fine.

Let's check what element KolCard renders (for landmark semantics).

Let me check kol-card shadow render.

Also — do we want a `<main>` landmark? `<main>` exists. The h1 is "KoliBri MCP Playground". The card heading "Sign in" as h2. Good document outline.

Let's check kol-card render quickly.

Also need to double-check: does `KolCard` slot content get rendered? Let's check.

One more: text-align center from `#root`. The card should have `text-align: start`. I'll add `.login { text-align: start; }`... but the card's shadow content inherits? `text-align` is inherited. `#root` sets `text-align: center` → inherits into `<kol-card>` → into shadow root → into form fields → centered text. Ugly.

So set `text-align: start` on the card/section wrapper. Actually better: set it on `main` or on our `.login-card` wrapper. I'll add a wrapper `<div className="login">` around the card with `text-align: start; max-width: 480px; margin: 0 auto;`.

Hmm, but `#root` is `display:flex; flex-direction: column`. `<main>` inside — does main have flex-grow? `#center` used to. Now `<main>` is a plain block. The h1 has margin. Fine.

Let's keep it simple: wrap the card in `<div className="login">` and style it.

Let me now check kol-card's rendered element.

Let's write and then run tsc + eslint.

Actually, let me reconsider using KolCard at all — "small" feature. But a card gives visual grouping and a heading. I'll use it; it's an appropriate KoliBri component.

Let's check kol-card render + whether it renders `<section>`.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -n -A25 \"render()\" node_modules/@public-ui/components/dist/collection/components/card/shadow.js | head -40; echo \"=== HeadingLevel in card ===\"; grep -n \"_level\\|KolHeadingFc\\|heading\" node_modules/@public-ui/components/dist/collection/components/card/shadow.js | head -20"
}
```

16:    render() {
17-        return (h(KolCardWcTag, { key: '6bfac2fd07a6529339f761a897c1ad7b1103c8d8', _on: this._on, _hasCloser: this._hasCloser, _label: this._label, _level: this._level, _href: this._href, _target: this._target, ref: this.ctaRef }, h("slot", { key: 'a1623a9ce692498136bf3134c5ed3c7067dbf817' })));
18-    }
19-    static get is() { return "kol-card"; }
20-    static get encapsulation() { return "shadow"; }
21-    static get originalStyleUrls() {
22-        return {
23-            "default": ["./style.scss"]
24-        };
25-    }
26-    static get styleUrls() {
27-        return {
28-            "default": ["style.css"]
29-        };
30-    }
31-    static get properties() {
32-        return {
33-            "_on": {
34-                "type": "unknown",
35-                "mutable": false,
36-                "complexType": {
37-                    "original": "KoliBriCardEventCallbacks",
38-                    "resolved": "undefined | { onClose?: EventCallback<Event> | undefined; onFocus?: EventCallback<FocusEvent> | undefined; onBlur?: EventCallback<FocusEvent> | undefined; }",
39-                    "references": {
40-                        "KoliBriCardEventCallbacks": {
41-                            "location": "import",
=== HeadingLevel in card ===
12:        this._level = 0;
17:        return (h(KolCardWcTag, { key: '6bfac2fd07a6529339f761a897c1ad7b1103c8d8', _on: this._on, _hasCloser: this._hasCloser, _label: this._label, _level: this._level, _href: this._href, _target: this._target, ref: this.ctaRef }, h("slot", { key: 'a1623a9ce692498136bf3134c5ed3c7067dbf817' })));
129:            "_level": {
147:                    "text": "Defines which H-level from 1-6 the heading has. 0 specifies no heading and is shown as bold text."
152:                "attribute": "_level",


---

## Assistant

_Thinking:_

Good. Let's check the card-wc render to see the wrapper element.

Actually enough. Let's write the code.

One more: I should verify `KolForm` renders `Host` wrapper — yes.

Let's write App.tsx now.

Regarding `verbatimModuleSyntax: true` → type-only imports must use `import type`. ✓

Regarding `noUnusedLocals`/`noUnusedParameters` → careful with unused params (e.g., `_event` prefixed with underscore is allowed? TS `noUnusedParameters` ignores params starting with `_`). ✓

Let's write.

Also eslint `react-refresh` rule: only export components from files exporting React components — we only default-export `App`. ✓

`eslint-plugin-react-hooks` — the `reactHooks.configs.flat.recommended` includes rules-of-hooks and exhaustive-deps. Our `useMemo` deps: `[errors]` ✓.

Now — potential issue with `createInputHandler`/`createBlurHandler` returning handlers: not a hook, fine.

Let me also double check: `KolInputText` `_on` type is `InputTypeOnDefault`. `onInput?: EventValueOrEventCallback<Event, StencilUnknown>` = `((event: Event, value: StencilUnknown) => void) | ((event: Event) => void)`. Our handler `(_event: Event, value: unknown) => void` — is `unknown` assignable to `StencilUnknown`? `StencilUnknown` is probably `unknown`. Let's check: `StencilUnknown = unknown`? Let's grep.

If `StencilUnknown = string | number | boolean | ...` then `unknown` param won't match. Actually for function assignability, parameter types are checked bivariantly for method-style but contravariantly for function-type properties (strictFunctionTypes). But `strict` is not enabled in tsconfig! `strictFunctionTypes` requires `strict`. tsconfig.app.json has no `strict` → all strict flags off. So parameter bivariance applies → fine.

But let's be safe and type the param as `StencilUnknown` imported? Or just use `(event, value)` with implicit `any`? Without `strict`, implicit any is allowed for params (noImplicitAny off). But eslint `tseslint.configs.recommended` has `no-explicit-any` as a warning, and implicit any is fine.

Hmm, but relying on implicit any is sloppy. Let's type explicitly:

```ts
import type { StencilUnknown } from '@public-ui/components'
```
Is `StencilUnknown` exported? Yes — in the components.d.ts export list. ✓

So:
```ts
const createInputHandler = (name: FieldName) => (_event: Event, value: StencilUnknown) => {...}
```

Wait — but `EventValueOrEventCallback<Event, StencilUnknown>` is a union: `EventValueCallback<E,V> | EventCallback<E>`. Our 2-arg function matches `EventValueCallback`. ✓

Hmm, `EventValueCallback<E, V> = (event: E, value: V) => void`. So `(event: Event, value: StencilUnknown) => void`. ✓

Actually hold on: is `onInput` in `InputTypeOnInput`? Let's just check the definition of InputTypeOnInput.

Let's grep types.d.ts lines 1-35.

Also `onBlur?: EventCallback<Event>` = `(event: Event) => void`. Our blur handler takes no args → assignable. ✓

Let's check InputTypeOnInput.

Also: does `StencilUnknown` exist as a type name exported? It's in the list: `StencilUnknown`. ✓

Let's check the input types quickly, then write.

**Tool: shell**

**Input:**
```json
{
  "command": "cat node_modules/@public-ui/components/dist/types/schema/types/input/types.d.ts; echo \"=== callback types ===\"; cat node_modules/@public-ui/components/dist/types/schema/types/callbacks.d.ts"
}
```

import type { Callback } from '../../enums';
import type { EventCallback, EventValueOrEventCallback } from '../callbacks';
type InputTypeOnBlur = {
    [Callback.onBlur]?: EventCallback<Event>;
};
type InputTypeOnClick = {
    [Callback.onClick]?: EventCallback<Event>;
};
type InputTypeOnChange = {
    [Callback.onChange]?: EventValueOrEventCallback<Event, unknown>;
};
type InputTypeOnFocus = {
    [Callback.onFocus]?: EventCallback<Event>;
};
type InputTypeOnInput = {
    [Callback.onInput]?: EventValueOrEventCallback<Event, unknown>;
};
type InputTypeOnKeyDown = {
    [Callback.onKeyDown]?: EventCallback<KeyboardEvent>;
};
export type Option<T> = {
    disabled?: boolean;
    label: string | number;
    value: T;
};
export type RadioOption<T> = Option<T> & {
    hint?: string;
};
export type Optgroup<T> = {
    disabled?: boolean;
    label: string;
    options: Option<T>[];
};
export type SelectOption<T> = Option<T> | Optgroup<T> | RadioOption<T>;
export type InputTypeOnDefault = InputTypeOnBlur & InputTypeOnClick & InputTypeOnChange & InputTypeOnFocus & InputTypeOnInput & InputTypeOnKeyDown;
export {};
=== callback types ===
type Callback<T> = (event: T) => void;
export type EventCallback<E extends Event> = Callback<E>;
type EventValueCallback<E extends Event, V> = (event: E, value: V) => void;
export type EventValueOrEventCallback<E extends Event, V> = EventValueCallback<E, V> | EventCallback<E>;
export {};


---

## Assistant

_Thinking:_

`onInput?: EventValueOrEventCallback<Event, unknown>` → `(event: Event, value: unknown) => void`. 

So our handler `(_event: Event, value: unknown) => void`. ✓

`onBlur?: EventCallback<Event>` → `(event: Event) => void`. Our blur handler `() => void` is assignable. ✓

Now write the code.

Let me write `src/App.tsx`.

Also decide on `docs/` — there's `docs/kolibri-mcp-poc.md`. Not relevant.

Let's write.

Regarding whether to add a hint to fields: `_hint` on username: e.g. "Enter the username you registered with." Might be extra. I'll add hints only where useful:
- username `_hint`: none (label is clear)
- password `_hint`: none

Actually `_autoComplete="username"` and `_autoComplete="current-password"` are important a11y/UX details. And `_visibilityToggle` on password.

Also `_required` on both.

Let's write it.

For the status alert, `_type="success"`.

Also: should I show a form-level error alert at all? Not needed.

Let me write the file.

Also add `aria` consideration: the `<h1>` is present; KolCard gives an h2 heading.

Let's write App.tsx:```tsx
import { useMemo, useRef, useState } from 'react'
import type { ErrorListPropType, HTMLKolFormElement, MsgPropType } from '@public-ui/components'
import {
  KolAlert,
  KolButton,
  KolCard,
  KolForm,
  KolInputPassword,
  KolInputText,
} from '@public-ui/react-v19'

import './App.css'

const USERNAME_INPUT_ID = 'login-username'
const PASSWORD_INPUT_ID = 'login-password'

type FieldName = 'username' | 'password'
type FieldValues = Record<FieldName, string>
type FieldTouched = Record<FieldName, boolean>
type FieldErrors = Partial<Record<FieldName, string>>

type Status = {
  id: number
  type: 'success'
  message: string
}

const validate: Record<FieldName, (value: string) => string | undefined> = {
  username: (value) =>
    value.trim().length > 0 ? undefined : 'Enter your username.',
  password: (value) => (value.length > 0 ? undefined : 'Enter your password.'),
}

const toText = (value: unknown): string =>
  typeof value === 'string' ? value : String(value ?? '')

function App() {
  const formRef = useRef<HTMLKolFormElement>(null)

  const [values, setValues] = useState<FieldValues>({ username: '', password: '' })
  const [touched, setTouched] = useState<FieldTouched>({ username: false, password: false })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status | null>(null)

  const errorList = useMemo<ErrorListPropType[]>(() => {
    const list: ErrorListPropType[] = []
    if (errors.username) {
      list.push({ message: errors.username, selector: `#${USERNAME_INPUT_ID}` })
    }
    if (errors.password) {
      list.push({ message: errors.password, selector: `#${PASSWORD_INPUT_ID}` })
    }
    return list
  }, [errors])

  const handleInput = (name: FieldName) => (_event: Event, value: unknown) => {
    const nextValue = toText(value)
    setValues((previous) => ({ ...previous, [name]: nextValue }))
    if (touched[name]) {
      setErrors((previous) => ({
        ...previous,
        [name]: validate[name](nextValue),
      }))
    }
    setStatus(null)
  }

  const handleBlur = (name: FieldName) => () => {
    setTouched((previous) =>
      previous[name] ? previous : { ...previous, [name]: true },
    )
    setErrors((previous) => {
      const nextError = validate[name](values[name])
      return previous[name] === nextError
        ? previous
        : { ...previous, [name]: nextError }
    })
  }

  const handleSubmit = (event: Event) => {
    event.preventDefault()

    const nextErrors: FieldErrors = {}
    for (const name of ['username', 'password'] as const) {
      const nextError = validate[name](values[name])
      if (nextError) {
        nextErrors[name] = nextError
      }
    }

    setTouched({ username: true, password: true })
    setErrors(nextErrors)
    setStatus(null)

    if (Object.keys(nextErrors).length > 0) {
      formRef.current?.focusErrorList()
      return
    }

    setStatus({
      id: Date.now(),
      type: 'success',
      message: 'Sign-in data is valid. This demo has no backend connection.',
    })
  }

  const handleReset = (event: Event) => {
    event.preventDefault()
    setValues({ username: '', password: '' })
    setTouched({ username: false, password: false })
    setErrors({})
    setStatus(null)
  }

  const usernameError = touched.username ? errors.username : undefined
  const passwordError = touched.password ? errors.password : undefined

  const usernameMsg: MsgPropType | undefined = usernameError
    ? { _description: usernameError, _type: 'error' }
    : undefined
  const passwordMsg: MsgPropType | undefined = passwordError
    ? { _description: passwordError, _type: 'error' }
    : undefined

  return (
    <main>
      <h1>KoliBri MCP Playground</h1>

      <div className="login">
        <KolCard _label="Sign in" _level={2}>
          <KolForm
            ref={formRef}
            _errorList={errorList}
            _on={{ onSubmit: handleSubmit, onReset: handleReset }}
          >
            {status && (
              <KolAlert
                key={status.id}
                _alert
                _type={status.type}
                _label={status.message}
              />
            )}

            <div className="login__fields">
              <KolInputText
                id={USERNAME_INPUT_ID}
                _label="Username"
                _name="username"
                _required
                _autoComplete="username"
                _value={values.username}
                _touched={touched.username}
                _msg={usernameMsg}
                _on={{ onInput: handleInput('username'), onBlur: handleBlur('username') }}
              />

              <KolInputPassword
                id={PASSWORD_INPUT_ID}
                _label="Password"
                _name="password"
                _required
                _autoComplete="current-password"
                _visibilityToggle
                _value={values.password}
                _touched={touched.password}
                _msg={passwordMsg}
                _on={{ onInput: handleInput('password'), onBlur: handleBlur('password') }}
              />
            </div>

            <div className="login__actions">
              <KolButton _type="submit" _label="Sign in" _variant="primary" />
              <KolButton _type="reset" _label="Reset" />
            </div>
          </KolForm>
        </KolCard>
      </div>
    </main>
  )
}

export default App
```

Wait: `_alert` as a boolean shorthand JSX prop → `_alert={true}`. React will pass `acc['_alert'] = true` in propsToPass (boolean) → React sets attribute? For custom elements React 19 sets `_alert` attribute with value `true` → React might set `element.setAttribute('_alert', 'true')` or `removeAttribute` for `false`. Then attachProps sets `node['_alert'] = true`. ✓

Hmm — careful: React 19 for boolean `true` on a non-known attribute sets `attribute=""`. Then Stencil's `watchBoolean` reads attribute value `""` → `"" === 'true'`? Stencil boolean attribute parsing: `value === 'false' || value === ''` → hmm, Stencil treats empty string as `true` for boolean props. Actually Stencil: for boolean props, attribute presence (any value except 'false') → true. So fine.

And attachProps sets the property to `true` explicitly anyway. ✓

Now — **critical issue**: `attachProps` runs `componentDidUpdate` for EVERY re-render of the wrapper. It sets ALL props, including `_on` (a new object each render) and `_msg` (possibly `undefined`).

If `usernameMsg` is `undefined`, we pass `_msg={undefined}` → `Object.keys(newProps)` includes `_msg` (since the key exists with value undefined? In React, `props._msg = undefined` — yes the key exists in the props object if explicitly passed). Then `node['_msg'] = undefined` → Stencil `validateMsg(undefined)` → `objectObjectHandler(undefined, cb)` — earlier we saw `validateMsg` uses `objectObjectHandler(value, () => {...})`. If undefined, the callback may not run → state keeps old value!

Let's check `objectObjectHandler`:
```js
const objectObjectHandler = (value, handler) => { if (typeof value === 'object' && value !== null) handler(); }
```
Probably. Then `validateMsg(undefined)` does nothing → `state._msg` keeps the previous error message → error persists!

Hmm, that's a problem. Let's check.

Actually let's look at validateMsg again:
```js
const validateMsg = (component, value) => {
    objectObjectHandler(value, () => {
        try { value = parseJson(value); } catch {}
        watchValidator(component, '_msg', (value) => {
            if (value === undefined) return true;
            ...
        }, new Set(['MsgPropType', 'string']), value);
    });
};
```

So if `value` is undefined, `objectObjectHandler` skips → nothing happens → `state._msg` unchanged.

Hmm! So passing `_msg={undefined}` does NOT clear the message?

Let's verify `objectObjectHandler`.

Hmm, this matters a lot. Let's check.

Actually wait — let's re-read the earlier output:

```
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js:37:const validateMsg = (component, value) => {
node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-38-    objectObjectHandler(value, () => {
node_modules @public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js-39-        try {
```

So yes, wrapped in objectObjectHandler.

Let's check objectObjectHandler's definition.

If undefined doesn't clear, we need to pass an empty/neutral msg instead. But an empty msg with `_description: ''` → `hasMessage = Boolean(description && description.length > 0)` = false → no msg rendered, no aria-describedby. And `showMsg = Boolean(msg) && touched === true` — msg is truthy (object) but `FormFieldMsgFc` renders with `message._description || undefined` → empty. Actually `showMsg && !hideMsg && h(FormFieldMsgFc, {..., msg})` → FormFieldMsgFc: `if (!message) return null`? Let's check FormFieldMsgFc at line 334.

Hmm. Let's just check both.

Actually — hold on. There's another path: the `@Watch('_msg')` on the component. Stencil's `@Watch` fires when the property value changes. If we set `node._msg = undefined` and the previous was an object, the watcher fires with `undefined` → `validateMsg(component, undefined)` → objectObjectHandler skips → state unchanged.

So state._msg stays the old object. Then `showMsg` = `Boolean(msg) && touched` → true → the msg renders with the OLD description. Bug!

Unless... let's check `objectObjectHandler`. Maybe it's:
```js
const objectObjectHandler = (value, handler) => {
  if (typeof value === 'object' && value !== null) { handler(); }
  else if (value === undefined || value === null) { handler(); }  // ?
}
```

Let's just check.

Alternatively — a robust workaround: never pass `undefined`; instead always pass a msg object, with `_description: ''` when there's no error. Then `hasMessage` false → no msg element, no aria-describedby. But `state._msg` would be `{_description: ''}`. `showMsg = Boolean(msg) && touched` → true → FormFieldMsgFc rendered with `msg = {_description: ''}` → `message._description || undefined` → children undefined. And `type` from `getMsgType(msg)` → `_type ?? 'error'`. So an empty div with role... `alert: message._alert ?? alert` where alert = touched && !focused → could be `role="alert"` with empty content. Harmless but adds a stray node + `aria-describedby` pointing to an empty element.

Hmm, `ariaDescribedBy` push happens only `if (hasMessage && !hideMsg)` → hasMessage false → not pushed. Good. But the FormFieldMsgFc is rendered (`showMsg` true). `id = createRelatedUniqueId(id, 'msg')` → an empty element with role=alert possibly. Minor.

Better: check `objectObjectHandler` first.

Let's check.

Also `FormFieldMsgFc` might return null if no description.

Let's check both.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -rn -A6 \"objectObjectHandler = \\|function objectObjectHandler\" node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js; echo \"=== FormFieldMsgFc ===\"; sed -n '330,352p' node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js; echo \"=== validateMsg full ===\"; sed -n '37,75p' node_modules/@public-ui/components/dist/esm/FormFieldStateWrapper-CANKwnKv.js"
}
```

node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js:1384:const objectObjectHandler = (value, cb) => {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1385-    if (typeof value === 'string' && OBJECT_OBJECT.test(value)) {
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1386-        return;
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1387-    }
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1388-    cb();
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1389-};
node_modules/@public-ui/components/dist/esm/common-D-vggmh2.js-1390-const emptyStringByArrayHandler = (value, cb) => {
=== FormFieldMsgFc ===
    const badgeText = showBadge === false ? undefined : buildBadgeTextString(accessKey, shortKey);
    return (h(Component, Object.assign({}, other, { class: clsx(`${baseClassName}__label`, classNames), id: !useTooltipInsteadOfLabel ? createRelatedUniqueId(id, 'label') : undefined, hidden: useTooltipInsteadOfLabel, htmlFor: id }), h(SpanFC, { class: `${baseClassName}__label-text`, label: hasExpertSlot ? '' : (label !== null && label !== void 0 ? label : ''), badgeText: badgeText }, h("slot", { name: "expert" })), !hasExpertSlot && readOnly && (h("span", { class: `${baseClassName}__label__read-only`, "aria-hidden": "true" }, "(", translateReadOnly, ")")), !hasExpertSlot && infoPopover && (h(KolPopoverButtonWcTag, Object.assign({ _variant: "ghost" }, infoPopover, { _hideLabel: true, _inline: true }), h("div", { class: "kol-popover-button__popover--styled" }, infoPopover._content)))));
};

const FormFieldMsgFc = (_a) => {
    var _b, _c;
    var { alert, msg, id, class: classNames } = _a, other = __rest(_a, ["alert", "msg", "id", "class"]);
    const message = normalizeMsg(msg);
    return (h(KolAlertFc, Object.assign({ id: createRelatedUniqueId(id, 'msg'), alert: (_b = message === null || message === void 0 ? void 0 : message._alert) !== null && _b !== void 0 ? _b : alert, hasCloser: false, level: 0, type: (_c = message === null || message === void 0 ? void 0 : message._type) !== null && _c !== void 0 ? _c : 'error', variant: "msg", class: clsx('kol-form-field__msg', classNames) }, other), (message === null || message === void 0 ? void 0 : message._description) || undefined));
};

const formFieldTooltipBehaviorPool = new Map();
const getFormFieldTooltipBehavior = (id) => {
    const tooltipBehavior = formFieldTooltipBehaviorPool.get(id);
    if (tooltipBehavior) {
        return tooltipBehavior;
    }
    const nextTooltipBehavior = new TooltipBehavior(BaseWebComponent.stateLess);
    nextTooltipBehavior.componentWillLoad({ label: '' });
    formFieldTooltipBehaviorPool.set(id, nextTooltipBehavior);
    return nextTooltipBehavior;
};
const destroyFormFieldTooltipBehavior = (id) => {
=== validateMsg full ===
const validateMsg = (component, value) => {
    objectObjectHandler(value, () => {
        try {
            value = parseJson(value);
        }
        catch (_a) {
        }
        watchValidator(component, `_msg`, (value) => {
            if (value === undefined) {
                return true;
            }
            if (typeof value === 'string' && value.length > 0) {
                return true;
            }
            if (isObject(value) && value !== null) {
                const desc = value._description;
                return isString(desc, 1);
            }
            return false;
        }, new Set(['MsgPropType', 'string']), value);
    });
};
function isMsgDefinedAndInputTouched(msg, touched) {
    return Boolean(msg) && touched === true;
}
function normalizeMsg(msg) {
    if (typeof msg === 'string') {
        try {
            return parseJson(msg);
        }
        catch (_a) {
            return { _description: msg, _type: 'error' };
        }
    }
    if (msg && typeof msg === 'object' && !('_type' in msg)) {
        return Object.assign(Object.assign({}, msg), { _type: 'error' });
    }
    return msg;
}


---

## Assistant

_Thinking:_

`objectObjectHandler(value, cb)` calls `cb()` unless value is a string matching OBJECT_OBJECT regex (which detects a stringified object `[object Object]` or something). So for `undefined`, `cb()` IS called. ✓

Then `watchValidator(component, '_msg', validationFn, ...)`:
- `validationFn(undefined)` → returns `true` (first branch).
- → `setState(component, '_msg', undefined, hooks)` → state._msg = undefined. ✓

So passing `_msg={undefined}` DOES clear it. 

Wait, but `parseJson(undefined)` in the try — `JSON.parse(undefined)` → `JSON.parse("undefined")` throws → caught. Then value stays undefined. ✓

And validation: `value === undefined` → true → setState(undefined). ✓

So `_msg={undefined}` works.

Now let's double check `watchValidator`'s `setState` — `setState(component, propName, value, hooks)`. For `value === undefined`, `nextState.set('_msg', undefined)`. Then `component.state` update triggers re-render. Should be fine.

Hmm — one caveat: does Stencil's `@Watch('_msg')` fire when the property changes from an object to `undefined`? Yes, watchers fire on any change (unless `immutable`... no).

OK good.

Similarly `_touched` boolean — `validateTouched` = `watchBoolean` → `typeof value === 'boolean'` → true. Passing `false` works. ✓

And `_errorList` array → validation fails (objects) → `logWarn` → `devHint` → `console.debug` in dev mode only. And `state._errorList` not set, but render uses `this._errorList`. ✓

Hmm — wait. Actually there's a real risk here. Let me re-read `render()`:

```js
render() {
    const hasErrorList = Array.isArray(this._errorList) && this._errorList.length > 0;
    return (h(Host, {key}, hasErrorList && this.renderErrorList(this._errorList), this.renderFormElement()));
}
```

`this._errorList` — this is the Stencil `@Prop()`. Stencil props are stored on the component instance via getter/setter. So `this._errorList` returns the raw value we set. ✓

But does Stencil re-render when `_errorList` changes? `@Prop()` changes trigger re-render (unless `reflect: false` + no state... no, Stencil re-renders on any `@Prop` change by default). ✓

Hmm, but actually: Stencil's prop setter does `this.$ kol-form$ _errorList$ = value` then `valueChanged` → if `this.$flags$` ... it triggers a re-render unless `mutable: false` blocks assignment. `mutable: false` means only the component itself can change it internally — external assignment still works for `@Prop` (mutable refers to whether the component's internal code can change it). Actually in Stencil, `mutable: false` (default) means the prop value can't be changed by the component internally — external changes are fine.

Wait no — `mutable` in Stencil: "If true, the prop can be changed by the component itself (not just from outside)". Default false. External sets always work. ✓

OK. But here's a subtle concern: does setting `node._errorList = [...]` from outside trigger `validateErrorList` (@Watch)? Yes → devHint log. Cosmetic only.

Hmm, I'm slightly nervous. Let me reduce risk: **verify at runtime**. I could run the dev server and check with a quick script... but no headless browser guaranteed.

Alternative: reduce reliance on `_errorList`. But it's a genuinely nice accessible feature (error summary with focus management).

Hmm — actually, wait. Let me re-read the validator once more:

```js
value.find((v) => !(typeof v === 'string' || typeof v === 'function')) === undefined
```

For `[{message, selector}]`: `typeof v === 'object'` → `!(false || false)` = `true` → find returns the object → `!== undefined` → validation FAILS.

Hmm, so this validator says errorList items must be strings or functions. But `renderErrorList` uses `error.message` and `error.selector`. So objects are the only thing that renders correctly. The validator is clearly buggy (probably legacy for a different shape).

Given render uses the raw prop, objects work. I'm fairly confident.

But to be extra safe, I could **test it in a browser**. Let me consider: is there a headless browser available? Let's check for playwright/puppeteer... not in devDeps.

I could do a quick smoke test by running `vite build` and... no, that doesn't test runtime.

Alternative: use `vite dev` + `curl`? No, it's client-rendered.

Hmm. I could write a tiny Node script using jsdom? Not installed.

Let me check if there's a global playwright/chrome available. Actually, macOS has Safari/Chrome. I could use `osascript`... too fragile.

Let me just check if playwright is installed anywhere in node_modules.

Actually — simpler idea: I can verify the `_errorList` render logic with certainty from source (done), and the only uncertainty is whether Stencil's re-render happens on prop change, which is fundamental to Stencil. I'm confident.

Actually, there's one more thing I should double check: does `@Watch('_errorList')` failure prevent the prop value from being stored? No — Stencil stores the prop value in the instance regardless; watchers are separate.

Hmm, actually — in Stencil, `@Prop()` setter: 
```js
set _errorList(value) {
  if (this[KOL_FORM$errorList] !== value) { ... this[KOL_FORM$errorList] = value; ... }
}
```
Watchers are invoked but the value is stored. ✓

OK, I'm confident. Let's also keep a fallback note.

Actually — hold on. Let me reconsider. There's a simpler, more robust alternative that also demonstrates accessibility: build the error summary myself using `KolAlert` + `KolButtonLink`/`KolLink`, and use `useEffect` to move focus. That removes all uncertainty.

But `_errorList` + `focusErrorList()` is the KoliBri-idiomatic way and less code. And I've verified the source.

I'll use `_errorList`, and ALSO note the validator quirk as an "API uncertainty" in my report (which the user explicitly asked for: "Document any API assumptions or uncertainties about KoliBri").

Hmm, but if it silently fails, the feature is broken. Let me hedge: use `_errorList` for the summary AND keep per-field messages as the primary feedback (which definitely work). If `_errorList` fails, we still have field messages + `aria-invalid`. And focus... would stay put.

Actually, let me make focus management robust regardless: in `handleSubmit`, if there are errors, focus the first invalid input directly as a fallback? No — that conflicts with focusing the error list.

Hmm. Let me think about what's most robust and still idiomatic:

Option: focus the first invalid field via a ref. This is 100% reliable, simple, and a recognized pattern (though error-summary-first is the WCAG-recommended one).

Option: use `_errorList` + `focusErrorList()`.

I'll go with `_errorList` + `focusErrorList()`, since it's KoliBri's designed pattern and I've read the source. I'll document the validator discrepancy.

Actually — you know what, let me just verify it empirically. Let me check if there's any browser automation available.

Let me check: `npx playwright --version`, or `/Applications/Google Chrome.app`.

Actually, a simpler runtime check: I can run the built app and use... hmm.

Let's check for playwright availability quickly. If available, I'll write a quick smoke test. That would be genuinely valuable.

Let's check.

**Tool: shell**

**Input:**
```json
{
  "command": "npx --no-install playwright --version 2>&1 | head -3; ls /Applications 2>/dev/null | grep -i -E \"chrome|firefox|safari|playwright\"; ls node_modules/.bin | head -50; which google-chrome chromium 2>/dev/null; ls ~/Library/Caches/ms-playwright 2>/dev/null"
}
```

npm error npx canceled due to missing packages and no YES option: ["playwright@1.63.0"]
npm error A complete log of this run can be found in: /Users/p.dijon.de.monteton/.npm/_logs/2026-10-01T13_29_27_883Z-debug-0.log
Firefox 118.0.1.dmg
Firefox.app
Google Chrome.app
googlechrome.dmg
Safari.app
acorn
browserslist
eslint
kolibri-copy-assets
tsc
tsserver
vite
google-chrome not found
chromium not found
b
chromium-1055
chromium-1071
chromium-1105
ffmpeg-1008
ffmpeg-1009
firefox-1391
firefox-1419
firefox-1440
webkit-1811
webkit-1869
webkit-1983


---

## Assistant

_Thinking:_

There are Playwright browser caches but the playwright package isn't installed locally. Google Chrome is available.

I could drive Chrome headless with CDP directly... that's a lot of work.

Alternative: use `google-chrome --headless --dump-dom` on the dev server URL. `--dump-dom` runs JS and dumps the serialized DOM after load. That would let me verify the error list renders!

Plan:
1. Write App.tsx.
2. Run `vite dev` in background (or `vite build` + `vite preview`).
3. Use `Google Chrome --headless=new --dump-dom --virtual-time-budget=5000 <url>` — but that only dumps the initial DOM; I need to interact (click submit).

Hmm, interaction is the problem. But actually — I can test the `_errorList` render path without interaction if I could set state... no.

Alternative: write a tiny standalone HTML test page that imports the KoliBri components and sets `_errorList` directly, then dump the DOM. That directly tests the uncertain API! 

Even simpler: a plain HTML page with `<script type="module">` importing from the installed `@public-ui/components` dist via a path... Vite can serve node_modules. Hmm.

Actually simplest: create a temporary Vite entry or use the existing dev server with a test route... 

Better: Write a tiny HTML file that imports `/node_modules/@public-ui/components/dist/esm/index.js` (or the loader). Vite dev server serves `/node_modules/...` paths? Not by default (it serves them with `?import` etc. for bare imports). Actually Vite does serve files under the project root, and `node_modules` is inside root. Vite's `serveStaticMiddleware` has `denyList` that blocks `/node_modules/` ... hmm, actually Vite blocks `/@fs` outside root but node_modules within root — I recall Vite returns 403 for `/node_modules/` requests in dev.

Let me take a different approach: create a temporary `test-errorlist.html` + a small TS module in `src/` and run `vite build` on a multi-page config... getting complex.

Simplest robust approach: temporary Vite "lib-less" approach — just add a second HTML entry temporarily.

Hmm, this is a lot of scaffolding for verification. But it WOULD be valuable to verify the core uncertain API.

Actually — much simpler: I can write a temporary standalone HTML file that loads KoliBri from a **relative path to a copied bundle**. Or even simpler: use `vite` to build a tiny bundle.

Let me think about cost/benefit. The uncertainty is: does `_errorList` with object items render? I've read `render()` — it uses `this._errorList` raw. The render logic is unambiguous. The only risk is Stencil not re-rendering, which would break ALL props (including `_label` on the button, which the existing app already uses and presumably works).

Actually — the existing app uses `<KolButton _label="Hello KoliBri" />` and it works (it's a "working" playground). That proves prop → render works.

So `_errorList` will render. Confidence high.

But there's one more risk I glossed over: **does `@Watch` failure cause Stencil to skip the re-render?** In Stencil's generated code:

```js
set _errorList(value) {
  if (this[KOL_FORM$errorList] !== value) {
    this[KOL_FORM$errorList] = value;
    // trigger re-render
  }
}
```

Watchers (`validateErrorList`) are called in `componentWillLoad` and via `@Watch` — actually `@Watch` methods are called from the prop setter: `this.validateErrorList(value)` after storing. The re-render is triggered regardless.

Hmm, actually in Stencil the generated setter is:
```js
set _errorList(v) {
  this[kOL_FORM$errorList] = v;
}
```
and watchers are invoked via `updateComponent` → for each changed prop, call watcher. Actually Stencil's `@Watch` fires in `setValue` → `if (watchers) watchers[propName](newVal, oldVal, ...)`.

Either way, render happens.

OK — decision: use `_errorList`. I'll verify visually/empirically if convenient, but I won't over-engineer.

Actually, let me do a quick empirical check anyway — it's cheap: build a temporary page. Hmm.

Let me reconsider: there IS a simpler empirical check. I can run the real app in dev, then use Chrome headless with `--dump-dom` after injecting a script... no interaction.

OK alternative: I can make the *initial* render include an error list by... no, that changes the app.

Let me instead write a **temporary** verification page:

`src/verify.html` + `src/verify.tsx`? Vite dev serves any HTML under root with proper transform. So `http://localhost:5173/src/verify.html` would work if I put `verify.html` at project root.

So:
- `verify.html` (temp) with `<script type="module" src="/src/verify.tsx">`
- `src/verify.tsx`: register KoliBri, create `<kol-form>` (or use React) with `_errorList` set, then dump.

Then `chrome --headless=new --dump-dom http://localhost:5173/verify.html`.

That's quite feasible. Let's do it after writing the main implementation — it directly de-risks the biggest unknown.

Hmm, but honestly — I could also just verify the whole app by dumping the DOM after simulating... no interaction possible with --dump-dom.

Actually! Chrome headless has `--virtual-time-budget` but no interaction. However, I could make the verification page auto-trigger: call `element.focusErrorList()` etc. Or simply set `_errorList` programmatically and dump.

Let's do it. It's worth it.

Plan:
1. Write `src/App.tsx` + `src/App.css` additions.
2. `tsc -b` and `eslint`.
3. Temp verification page for `_errorList` rendering + `focusErrorList`.
4. Delete temp files.

Let's write App.tsx first.

Actually, for step 3 I realize I can verify even more: mount the actual App, and programmatically trigger validation by... no.

I'll verify `_errorList` rendering standalone. And rely on code review for the rest.

Hmm, actually — better idea for full verification: Chrome headless with `--dump-dom` won't interact, but I could add a temporary auto-submit: in the verify page, render the real `<App/>` and after mount, dispatch a click on the submit button via JS, then dump. That tests the WHOLE flow!

Yes! `--dump-dom` executes scripts. So:

```tsx
// verify.tsx
import { createRoot } from 'react-dom/client'
... register ...
createRoot(el).render(<App />)
setTimeout(() => {
  const btn = document.querySelector('kol-button[_type="submit"]')  ;(btn as any)?.click?.() // or find inner button and click
}, 1000)
```

Then `chrome --headless=new --dump-dom --virtual-time-budget=8000 url` dumps the DOM after.

`kol-button` has a `click()` method (declared `"click": () => Promise<void>`). Clicking it triggers `onClick` → propagateSubmit → `_on.onSubmit`.

Hmm, but `--dump-dom` with `--virtual-time-budget` — the DOM dump happens after virtual time expires. Should work.

But `document.querySelector('kol-button[_type="submit"]')` — is `_type` reflected as an attribute? The React wrapper sets `node['_type'] = 'submit'` (property) AND `setAttribute(camelToDashCase('_type'), 'submit')` = `setAttribute('_type', 'submit')`. So yes, attribute `_type="submit"` exists. ✓

Or simpler: `document.querySelectorAll('kol-button')[0].click()`.

OK, this is a solid verification plan. Let's do it.

Note: `dump-dom` prints the DOM at exit. The error list would be there if it renders.

Let's write everything now.

One concern: `--dump-dom` + `--virtual-time-budget` runs the page and dumps. Virtual time makes timers run fast. Good.

Let's go.

First, App.tsx.

Also I should double check: does `KolForm` have a `_requiredText` default that shows a paragraph? Yes, default true → shows `kol-form-description` translated text. That's the "mandatory fields" hint. Since both fields are required, appropriate. Keep default.

Hmm — but actually the hint says something like "The following fields are mandatory: ..." Let's check the translation to make sure it's sensible. `kol-form-description`. Let's peek at the i18n default (English).

Let's check locales.

Actually, let's keep it — it's KoliBri's default accessible hint about required fields.

Hmm, but if it says "mandatory fields are marked with *" and our required badge shows `*`, consistent. Good.

Let's check quickly the English text so I can describe it accurately.

Let's grep locales.

I'll do that along with writing.

Let's write App.tsx now.

Now I'll write the implementation.

**Tool: write**

**Input:**
```json
{
  "path": "/Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/src/App.tsx",
  "content": "import { useMemo, useRef, useState } from 'react'\nimport type { ErrorListPropType, HTMLKolFormElement, MsgPropType } from '@public-ui/components'\nimport {\n  KolAlert,\n  KolButton,\n  KolCard,\n  KolForm,\n  KolInputPassword,\n  KolInputText,\n} from '@public-ui/react-v19'\n\nimport './App.css'\n\n/** Host element ids. They double as the focus targets for the form error list. */\nconst USERNAME_INPUT_ID = 'login-username'\nconst PASSWORD_INPUT_ID = 'login-password'\n\nconst FIELD_NAMES = ['username', 'password'] as const\n\ntype FieldName = (typeof FIELD_NAMES)[number]\ntype FieldValues = Record<FieldName, string>\ntype FieldTouched = Record<FieldName, boolean>\ntype FieldErrors = Partial<Record<FieldName, string>>\n\ntype Status = {\n  id: number\n  type: 'success'\n  message: string\n}\n\n/**\n * A login form must only check presence, never password policy: the stored\n * account may legitimately be shorter than a \"new password\" rule allows.\n */\nconst VALIDATORS: Record<FieldName, (value: string) => string | undefined> = {\n  username: (value) =>\n    value.trim().length > 0 ? undefined : 'Please enter your username.',\n  password: (value) =>\n    value.length > 0 ? undefined : 'Please enter your password.',\n}\n\nconst toText = (value: unknown): string =>\n  typeof value === 'string' ? value : String(value ?? '')\n\nfunction App() {\n  const formRef = useRef<HTMLKolFormElement>(null)\n\n  const [values, setValues] = useState<FieldValues>({\n    username: '',\n    password: '',\n  })\n  const [touched, setTouched] = useState<FieldTouched>({\n    username: false,\n    password: false,\n  })\n  const [errors, setErrors] = useState<FieldErrors>({})\n  const [status, setStatus] = useState<Status | null>(null)\n\n  const errorList = useMemo<ErrorListPropType[]>(() => {\n    const list: ErrorListPropType[] = []\n    if (errors.username) {\n      list.push({ message: errors.username, selector: `#${USERNAME_INPUT_ID}` })\n    }\n    if (errors.password) {\n      list.push({ message: errors.password, selector: `#${PASSWORD_INPUT_ID}` })\n    }\n    return list\n  }, [errors])\n\n  const handleInput =\n    (name: FieldName) => (_event: Event, value: unknown) => {\n      const nextValue = toText(value)\n      setValues((previous) => ({ ...previous, [name]: nextValue }))\n      // Never show an error while the user is still typing for the first time.\n      if (touched[name]) {\n        setErrors((previous) => ({\n          ...previous,\n          [name]: VALIDATORS[name](nextValue),\n        }))\n      }\n      setStatus(null)\n    }\n\n  const handleBlur = (name: FieldName) => () => {\n    setTouched((previous) =>\n      previous[name] ? previous : { ...previous, [name]: true },\n    )\n    setErrors((previous) => {\n      const nextError = VALIDATORS[name](values[name])\n      return previous[name] === nextError\n        ? previous\n        : { ...previous, [name]: nextError }\n    })\n  }\n\n  const handleSubmit = (event: Event) => {\n    event.preventDefault()\n\n    const nextErrors: FieldErrors = {}\n    for (const name of FIELD_NAMES) {\n      const nextError = VALIDATORS[name](values[name])\n      if (nextError) {\n        nextErrors[name] = nextError\n      }\n    }\n\n    setTouched({ username: true, password: true })\n    setErrors(nextErrors)\n    setStatus(null)\n\n    if (Object.keys(nextErrors).length > 0) {\n      // Moves focus to the first link of the error summary rendered by KolForm.\n      formRef.current?.focusErrorList()\n      return\n    }\n\n    setStatus({\n      id: Date.now(),\n      type: 'success',\n      message: 'Sign-in data is valid. This demo has no backend connection.',\n    })\n  }\n\n  const handleReset = (event: Event) => {\n    event.preventDefault()\n    setValues({ username: '', password: '' })\n    setTouched({ username: false, password: false })\n    setErrors({})\n    setStatus(null)\n  }\n\n  // KoliBri only renders `_msg` once `_touched` is true, so the two always\n  // change together and no error flashes up before the user has typed.\n  const usernameMsg: MsgPropType | undefined = touched.username\n    ? errors.username && { _description: errors.username, _type: 'error' }\n    : undefined\n  const passwordMsg: MsgPropType | undefined = touched.password\n    ? errors.password && { _description: errors.password, _type: 'error' }\n    : undefined\n\n  return (\n    <main>\n      <h1>KoliBri MCP Playground</h1>\n\n      <div className=\"login\">\n        <KolCard _label=\"Sign in\" _level={2}>\n          <KolForm\n            ref={formRef}\n            _errorList={errorList}\n            _on={{ onSubmit: handleSubmit, onReset: handleReset }}\n          >\n            {status && (\n              <KolAlert\n                key={status.id}\n                _alert\n                _type={status.type}\n                _label={status.message}\n              />\n            )}\n\n            <div className=\"login__fields\">\n              <KolInputText\n                id={USERNAME_INPUT_ID}\n                _label=\"Username\"\n                _name=\"username\"\n                _required\n                _autoComplete=\"username\"\n                _value={values.username}\n                _touched={touched.username}\n                _msg={usernameMsg}\n                _on={{\n                  onInput: handleInput('username'),\n                  onBlur: handleBlur('username'),\n                }}\n              />\n\n              <KolInputPassword\n                id={PASSWORD_INPUT_ID}\n                _label=\"Password\"\n                _name=\"password\"\n                _required\n                _autoComplete=\"current-password\"\n                _visibilityToggle\n                _value={values.password}\n                _touched={touched.password}\n                _msg={passwordMsg}\n                _on={{\n                  onInput: handleInput('password'),\n                  onBlur: handleBlur('password'),\n                }}\n              />\n            </div>\n\n            <div className=\"login__actions\">\n              <KolButton _type=\"submit\" _label=\"Sign in\" _variant=\"primary\" />\n              <KolButton _type=\"reset\" _label=\"Reset form\" />\n            </div>\n          </KolForm>\n        </KolCard>\n      </div>\n    </main>\n  )\n}\n\nexport default App\n"
}
```

Wrote file successfully: src/App.tsx

---

## Assistant

_Thinking:_

Wait: `touched.username ? errors.username && {...} : undefined` — the type is `MsgPropType | undefined` but `errors.username && {...}` gives `undefined | MsgPropType` (since `errors.username` is `string | undefined`, `a && b` gives `undefined | MsgPropType`). Actually `errors.username && {...}` — if `errors.username` is `undefined`, result is `undefined`; else `{...}`. Type: `MsgPropType | undefined`. ✓

Hmm but `string && object` type: TypeScript gives `undefined | MsgPropType`. Actually for `A && B` where A = `string | undefined`, result type is `undefined | MsgPropType`? TS computes `falsy parts of A` | `B` = `undefined | MsgPropType`. Yes ✓.

Now App.css additions. Let's read App.css fully first to append properly.

**Tool: read**

**Input:**
```json
{
  "path": "/Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/src/App.css"
}
```

Read file /Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/src/App.css, lines 1-184
1: .counter {
2:   font-size: 16px;
3:   padding: 5px 10px;
4:   border-radius: 5px;
5:   color: var(--accent);
6:   background: var(--accent-bg);
7:   border: 2px solid transparent;
8:   transition: border-color 0.3s;
9:   margin-bottom: 24px;
10: 
11:   &:hover {
12:     border-color: var(--accent-border);
13:   }
14:   &:focus-visible {
15:     outline: 2px solid var(--accent);
16:     outline-offset: 2px;
17:   }
18: }
19: 
20: .hero {
21:   position: relative;
22: 
23:   .base,
24:   .framework,
25:   .vite {
26:     inset-inline: 0;
27:     margin: 0 auto;
28:   }
29: 
30:   .base {
31:     width: 170px;
32:     position: relative;
33:     z-index: 0;
34:   }
35: 
36:   .framework,
37:   .vite {
38:     position: absolute;
39:   }
40: 
41:   .framework {
42:     z-index: 1;
43:     top: 34px;
44:     height: 28px;
45:     transform: perspective(2000px) rotateZ(300deg) rotateX(44deg) rotateY(39deg)
46:       scale(1.4);
47:   }
48: 
49:   .vite {
50:     z-index: 0;
51:     top: 107px;
52:     height: 26px;
53:     width: auto;
54:     transform: perspective(2000px) rotateZ(300deg) rotateX(40deg) rotateY(39deg)
55:       scale(0.8);
56:   }
57: }
58: 
59: #center {
60:   display: flex;
61:   flex-direction: column;
62:   gap: 25px;
63:   place-content: center;
64:   place-items: center;
65:   flex-grow: 1;
66: 
67:   @media (max-width: 1024px) {
68:     padding: 32px 20px 24px;
69:     gap: 18px;
70:   }
71: }
72: 
73: #next-steps {
74:   display: flex;
75:   border-top: 1px solid var(--border);
76:   text-align: left;
77: 
78:   & > div {
79:     flex: 1 1 0;
80:     padding: 32px;
81:     @media (max-width: 1024px) {
82:       padding: 24px 20px;
83:     }
84:   }
85: 
86:   .icon {
87:     margin-bottom: 16px;
88:     width: 22px;
89:     height: 22px;
90:   }
91: 
92:   @media (max-width: 1024px) {
93:     flex-direction: column;
94:     text-align: center;
95:   }
96: }
97: 
98: #docs {
99:   border-right: 1px solid var(--border);
100: 
101:   @media (max-width: 1024px) {
102:     border-right: none;
103:     border-bottom: 1px solid var(--border);
104:   }
105: }
106: 
107: #next-steps ul {
108:   list-style: none;
109:   padding: 0;
110:   display: flex;
111:   gap: 8px;
112:   margin: 32px 0 0;
113: 
114:   .logo {
115:     height: 18px;
116:   }
117: 
118:   a {
119:     color: var(--text-h);
120:     font-size: 16px;
121:     border-radius: 6px;
122:     background: var(--social-bg);
123:     display: flex;
124:     padding: 6px 12px;
125:     align-items: center;
126:     gap: 8px;
127:     text-decoration: none;
128:     transition: box-shadow 0.3s;
129: 
130:     &:hover {
131:       box-shadow: var(--shadow);
132:     }
133:     .button-icon {
134:       height: 18px;
135:       width: 18px;
136:     }
137:   }
138: 
139:   @media (max-width: 1024px) {
140:     margin-top: 20px;
141:     flex-wrap: wrap;
142:     justify-content: center;
143: 
144:     li {
145:       flex: 1 1 calc(50% - 8px);
146:     }
147: 
148:     a {
149:       width: 100%;
150:       justify-content: center;
151:       box-sizing: border-box;
152:     }
153:   }
154: }
155: 
156: #spacer {
157:   height: 88px;
158:   border-top: 1px solid var(--border);
159:   @media (max-width: 1024px) {
160:     height: 48px;
161:   }
162: }
163: 
164: .ticks {
165:   position: relative;
166:   width: 100%;
167: 
168:   &::before,
169:   &::after {
170:     content: '';
171:     position: absolute;
172:     top: -4.5px;
173:     border: 5px solid transparent;
174:   }
175: 
176:   &::before {
177:     left: 0;
178:     border-left-color: var(--border);
179:   }
180:   &::after {
181:     right: 0;
182:     border-right-color: var(--border);
183:   }
184: }

---

## Assistant

_Thinking:_

App.css has a lot of template leftovers (`.counter`, `.hero`, `#center`, `#next-steps`, `#docs`, `#spacer`, `.ticks`) that reference markup that no longer exists. Importing App.css would activate all these — but they're all selector-scoped to elements/ids that don't exist in the current DOM. Safe.

Hmm, but is it appropriate to import App.css just to add my styles, dragging in dead template CSS? It's cleaner to just append my `.login` styles to App.css and import it — the file is clearly intended for App-level styles. Alternatively put the styles in index.css.

I'll append to App.css and import it. The dead rules are harmless (they don't match any element).

Actually — wait. `#center`, `#next-steps`, `#docs`, `#spacer` are ids. The current DOM has `<main>`, `<h1>`, `.login`. No ids match. `.counter`, `.hero`, `.ticks` classes don't match. Safe.

Let's append `.login` styles.

Design:
- `.login`: center the card, cap width, restore left-aligned text (override `#root`'s `text-align: center`), bottom margin.
- `.login__fields`: stack with gap.
- `.login__actions`: row with gap, align to start.

Since KolBri renders in shadow DOM, `text-align` inherits from `.login` into the card → shadow content. So set `text-align: start`.

Note: the app supports dark mode via `color-scheme` + CSS vars; KoliBri theme-default has its own theming. Not our concern.

Also `.login` needs `display: flex` maybe to center the card horizontally: `max-width: 34rem; margin: 0 auto 48px;`.

Let's write:

```css
.login {
  max-width: 34rem;
  margin: 0 auto 48px;
  /* #root centres all text; a login form reads better left aligned. */
  text-align: start;
}

.login__fields {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.login__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1.25rem;
}
```

Hmm — will `gap` work between KoliBri components? They're block-level custom elements (display inline by default unless KoliBri sets `:host { display: block }`). Most KoliBri components set `:host { display: block }` or `inline-block`. If `inline-block`, flex container still works with `flex-direction: column` (they become flex items → blockified). ✓

Using `display: flex; flex-direction: column` on `.login__fields` blockifies children. Good.

For `.login__actions`, `display: flex; flex-direction: row` (default). ✓

Also the KolForm's shadow `<form>` — our `.login__fields` / `.login__actions` are light DOM children of `<kol-form>`, slotted into the form. The form's `display` is default block. Our divs are flex containers. ✓

Also add `margin-top` to status alert? The KolAlert is a direct child of KolForm. Add spacing: I'll wrap or use a rule.

Let's add:
```css
.login__fields { ... margin-top: 1.25rem; }
```
Hmm, the status alert is the first child. Let's give the alert some bottom margin... we can't easily target `kol-alert` — actually we can: `.login kol-alert { margin-bottom: 1rem; }`? The alert is inside kol-form's slot. `.login kol-alert` matches (light DOM). ✓

Actually simpler: put the alert inside a wrapper? No — keep it as a direct child but style via `.login kol-alert`.

Hmm, but when status is null, no alert → no extra margin. Using margin-bottom on the element itself works (no collapse issue since it's the first child... margin-bottom won't create space at top). Fine.

Let's write:

```css
.login > kol-card { ... }
.login kol-alert { margin-bottom: 1.25rem; }
```

Hmm — is `.login` the direct parent of `kol-card`? Yes: `<div className="login"><KolCard>`. ✓

And kol-alert is inside kol-card's slot → `.login kol-alert` descendant selector works (kol-card's light children). ✓

Wait: `<KolForm>` is a child of `<kol-card>`, and `<KolAlert>` is a child of `<kol-form>`. All in the light DOM tree under `.login`. So `.login kol-alert` matches. ✓

But actually the status alert's margin — it's inside the `<form>` (slotted). Its parent in the light tree is `<kol-form>`. `margin-bottom` works. But the first child of a flex/block container... `.login__fields` follows. Adjacent siblings: kol-alert then div.login__fields → margin-bottom on alert creates the gap. ✓

Hmm, but does `.login__fields` have `margin-top`? No. OK.

Let's also consider: is there vertical spacing between the card heading and the form content? KoliBri's card handles padding. ✓

Let's write the CSS.

Also: should I add `gap` between h1 and the card? index.css gives h1 `margin: 32px 0`. So there's 32px below h1. ✓

Let's append.

**Tool: edit**

**Input:**
```json
{
  "path": "/Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/src/App.css",
  "oldString": ".counter {",
  "newString": "/* --- Login demo --------------------------------------------------------- */\n\n.login {\n  max-width: 34rem;\n  margin: 0 auto 48px;\n  /* #root centres every text node; a form reads better left aligned. */\n  text-align: start;\n}\n\n.login kol-alert {\n  margin-bottom: 1.25rem;\n}\n\n.login__fields {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n\n.login__actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 1.5rem;\n}\n\n/* --- Unused Vite template leftovers ------------------------------------- */\n\n.counter {"
}
```

Edited src/App.css (1 replacement)

---

## Assistant

_Thinking:_

Wait — I should reconsider adding a "Unused Vite template leftovers" comment. It's accurate but maybe presumptuous. Actually it's helpful documentation since I'm now importing App.css which activates those rules. But maybe I shouldn't editorialize. Hmm, it's fine and honest — the selectors don't match current markup.

Actually, let me reconsider: it might be seen as noise. But it clarifies why the rules below are inert. I'll keep it but reword slightly... it's fine.

Now run tsc + eslint.

**Tool: shell**

**Input:**
```json
{
  "command": "npx tsc -b 2>&1 | head -40; echo \"tsc exit=$?\"; npx eslint src 2>&1 | head -40; echo \"eslint exit=$?\""
}
```

src/App.tsx(2,34): error TS2305: Module '"@public-ui/components"' has no exported member 'HTMLKolFormElement'.
src/App.tsx(134,9): error TS2322: Type '"" | { _description: string; _type: "error"; } | undefined' is not assignable to type 'MsgPropType | undefined'.
  Type 'string' is not assignable to type 'MsgPropType'.
    Type 'string' is not assignable to type '{ _description: string; }'.
src/App.tsx(137,9): error TS2322: Type '"" | { _description: string; _type: "error"; } | undefined' is not assignable to type 'MsgPropType | undefined'.
  Type 'string' is not assignable to type 'MsgPropType'.
    Type 'string' is not assignable to type '{ _description: string; }'.
tsc exit=0
eslint exit=0


---

## Assistant

_Thinking:_

Two issues:

1. `HTMLKolFormElement` is a global type, not a module export. It's inside `declare global` in components.d.ts. So use it without importing... but does the global augmentation apply? Let's try removing it from the import and using it directly. If TS can't find it, I'll use `React.ElementRef<typeof KolForm>`.

2. `errors.username && {...}` — the `&&` on a `string` type produces `"" | { ... }` because TS includes the falsy string `""`. Fix: use explicit conditional.

Let's fix both.

For (1): use `React.ElementRef<typeof KolForm>`. That's clean and avoids global-type resolution issues. `KolForm` is `ForwardRefExoticComponent<... & RefAttributes<HTMLKolFormElement>>`, so `React.ElementRef<typeof KolForm>` should resolve to `HTMLKolFormElement`.

Hmm, `React.ElementRef` in React 19 types: `type ElementRef<C extends ForwardRefExoticComponent<any> | { new (props: any): Component; prototype: Component } | ((props: any, context?: any) => ReactNode | Promise<ReactNode> | null) | keyof JSX.IntrinsicElements> = ...`. Should work.

Alternatively just use the global `HTMLKolFormElement` directly (remove from import). Let's try that first since it's the most direct. The global is declared in `components.d.ts` under `declare global` — it applies as long as the module is imported somewhere in the program (main.tsx imports `@public-ui/components`). And App.tsx imports types from it too.

Let's try removing from the import.

For (2), rewrite:
```tsx
const usernameMsg: MsgPropType | undefined =
  touched.username && errors.username
    ? { _description: errors.username, _type: 'error' }
    : undefined
```
`touched.username && errors.username` → `boolean && string | undefined` → type is `false | undefined | string`. In the true branch, TS narrows `errors.username` to `string`? Inside the ternary's true branch, `errors.username` is narrowed to `string` because the condition truthiness check narrows it. Actually the condition is `touched.username && errors.username` — TS narrows `errors.username` in the true branch to `string` (excluding `undefined` and `""`)? Hmm, truthiness narrowing on `errors.username` via `&&` — yes, TS narrows the operand of `&&` in the true branch of the whole expression. Let's verify: `a && b` where the whole is truthy → `b` is truthy → `errors.username` narrowed to `string` excluding `""`... TS narrows `string | undefined` to `string`. Does it exclude `""`? Truthiness narrowing for `string` → `string` (TS doesn't have a "non-empty string" type, so it stays `string`). ✓

But narrowing `errors.username` through `touched.username && errors.username` requires `errors.username` to be a reference — it is (a property access on a `const` object). Property narrowing works for readonly-ish... `errors` is a `const` binding from useState, so TS narrows `errors.username`. ✓

Let's write it clearly:

```tsx
const usernameError = touched.username ? errors.username : undefined
const usernameMsg: MsgPropType | undefined =
  usernameError !== undefined
    ? { _description: usernameError, _type: 'error' }
    : undefined
```

That's cleaner and definitely type-safe. Same for password.

Let's edit.

**Tool: edit**

**Input:**
```json
{
  "path": "/Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/src/App.tsx",
  "oldString": "import type { ErrorListPropType, HTMLKolFormElement, MsgPropType } from '@public-ui/components'",
  "newString": "import type { ErrorListPropType, MsgPropType } from '@public-ui/components'"
}
```

Edited src/App.tsx (1 replacement)

---

## Assistant

_Thinking:_

Now `HTMLKolFormElement` is used as `useRef<HTMLKolFormElement>(null)`. It's a global type declared in `declare global` in components.d.ts. Let's see if tsc finds it.

And fix the msg ternaries.

**Tool: edit**

**Input:**
```json
{
  "newString": "  // KoliBri only renders `_msg` once `_touched` is true, so the two always\n  // change together and no error flashes up before the user has typed.\n  const usernameError = touched.username ? errors.username : undefined\n  const passwordError = touched.password ? errors.password : undefined\n  const usernameMsg: MsgPropType | undefined =\n    usernameError !== undefined\n      ? { _description: usernameError, _type: 'error' }\n      : undefined\n  const passwordMsg: MsgPropType | undefined =\n    passwordError !== undefined\n      ? { _description: passwordError, _type: 'error' }\n      : undefined",
  "oldString": "  // KoliBri only renders `_msg` once `_touched` is true, so the two always\n  // change together and no error flashes up before the user has typed.\n  const usernameMsg: MsgPropType | undefined = touched.username\n    ? errors.username && { _description: errors.username, _type: 'error' }\n    : undefined\n  const passwordMsg: MsgPropType | undefined = touched.password\n    ? errors.password && { _description: errors.password, _type: 'error' }\n    : undefined",
  "path": "/Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/src/App.tsx"
}
```

Edited src/App.tsx (1 replacement)

---

## Assistant

_Thinking:_

Wait — `usernameError` and `passwordError` are now declared but only used for the msg. That's fine (no unused).

But I removed the earlier `usernameError`/`passwordError` usage? Let me check — in my original file I didn't have separate usernameError/passwordError vars (I only had usernameMsg/passwordMsg). Let me re-run tsc.

Also note `noUnusedLocals` — `usernameError` IS used (in usernameMsg). ✓

Run tsc + eslint.

**Tool: shell**

**Input:**
```json
{
  "command": "npx tsc -b 2>&1 | head -40; echo \"tsc done\"; npx eslint src 2>&1 | head -40; echo \"eslint done\""
}
```

tsc done
eslint done


---

## Assistant

_Thinking:_

Both pass. `HTMLKolFormElement` resolves as a global.

Now let's verify at runtime. Plan:
1. Start `vite dev` in background.
2. Create a temporary `verify.html` + `src/verify.tsx` that renders App, auto-clicks the submit button, then we dump DOM with headless Chrome.

Actually, `--dump-dom` with `--virtual-time-budget`. Let's think about whether virtual time works with React/Stencil async rendering. Should be OK with a generous budget.

Hmm, an alternative that's more reliable: use Chrome's `--headless=new --dump-dom` with a `setTimeout` that triggers the click at ~500ms, and `--virtual-time-budget=10000`.

Actually, does `--dump-dom` wait for `--virtual-time-budget`? Yes: "--virtual-time-budget=N: ... implies --run-all-compositor-stages-before-draw ... --dump-dom will dump the DOM after N ms of virtual time."

Let's do it.

Steps:
- `verify.html` at project root:
```html
<!doctype html>
<html lang="en">
  <head><meta charset="UTF-8" /><title>verify</title></head>
  <body><div id="root"></div><script type="module" src="/src/verify.tsx"></script></body>
</html>
```

- `src/verify.tsx`:
```tsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { register } from '@public-ui/components'
import { defineCustomElements } from '@public-ui/components/loader'
import { DEFAULT } from '@public-ui/theme-default'
import App from './App.tsx'

register(DEFAULT, defineCustomElements).then(() => {
  createRoot(document.getElementById('root')!).render(
    <StrictMode><App /></StrictMode>,
  )
  setTimeout(() => {
    const buttons = document.querySelectorAll('kol-button')
    ;(buttons[0] as unknown as { click?: () => void; _type?: string })?.click?.()
  }, 1500)
}).catch(console.error)
```

Hmm — `kol-button.click()` is a declared method: `"click": () => Promise<void>`. Does it call the internal button's click? Let's check: `click()` method on kol-button → probably `this.ctaRef.el.click()`. That would trigger `onClick` → propagateSubmit.

Alternatively dispatch a click on the host: `buttons[0].click()` — if `click` is an overridden method, calling it invokes the component's method. Let's check kol-button's `click` implementation.

Actually, simpler and more faithful: dispatch a real click event on the inner `<button>`:
```ts
const inner = document.querySelector('kol-button')?.shadowRoot?.querySelector('button')
inner?.dispatchEvent(new MouseEvent('click', {bubbles: true}))
```
Hmm, but the inner button's `onClick` is a Stencil handler bound to the host's `@Listen('click')`? Let's check: in kol-button-wc render, the inner `<button>` has `onClick: this.onClick`. So dispatching a `click` MouseEvent on the inner button triggers it.

Actually `this.onClick` checks `this.state._type === 'submit'` → propagateSubmitEventToForm. 

But also — the inner `<button type="submit">`: dispatching a synthetic click does NOT trigger native form submission (untrusted events don't activate default behaviors... actually synthetic click on a submit button DOES trigger form submission in browsers? No — `dispatchEvent` with an untrusted event: default actions ARE performed for untrusted events in most browsers? Actually, untrusted events do trigger default actions in browsers (only `isTrusted=false` matters for some things like autofill). Hmm, `<button>.click()` (the HTMLElement.click() method) DOES activate default behavior including form submission.

But we established the button isn't form-associated anyway (shadow DOM + light DOM ancestry). Let's just use `.click()` on the host which calls the component's `click()` method if it exists.

Let's check kol-button's `click` method implementation.

Actually — even simpler: instead of clicking, I can directly test the two things I care about by **importing App and dispatching a native submit**... no.

Hmm, let's simplify: the main uncertainty is `_errorList` rendering. I can verify that in isolation without any React:

```tsx
const form = document.createElement('kol-form')
form.setAttribute('_errorList', ...) // attribute won't work for arrays
form._errorList = [{message: 'x', selector: '#y'}]
document.body.appendChild(form)
```

That directly tests it. But it doesn't test the full flow.

Let's do the full flow — it's more valuable. I'll use `kol-button`'s `click()` method if it exists, else dispatch.

Let's check the `click` method.

Let's grep kol-button entry for `async click`.

Then set up verification.

Also — for the DOM dump, shadow DOM content is NOT included in `--dump-dom` serialization (it only serializes light DOM). Hmm! That's a problem: KoliBri renders everything in shadow roots. `document.querySelector('kol-form').shadowRoot.innerHTML` would be needed.

`--dump-dom` uses the outerHTML of the document → shadow root content is NOT serialized.

Workaround: in the verify script, before dump, copy shadow roots' innerHTML into data attributes or into light-DOM `<pre>` elements.

```ts
function serialize(el) {
  // recursively dump}
setTimeout(() => {
  const dump = document.createElement('pre')
  dump.id = 'VERIFY_DUMP'
  dump.textContent = collect(document.body)
  document.body.appendChild(dump)
}, 4000)
```

Where `collect` walks the tree including shadowRoots.

Then `--dump-dom` will include that `<pre>` text.

Good plan. Let's write a helper that produces a readable text dump.

Let's implement:

```ts
function dump(node: Node, depth = 0): string {
  const pad = '  '.repeat(depth)
  if (node.nodeType === Node.TEXT_NODE) {
    const t = (node.textContent ?? '').trim()
    return t ? `${pad}"${t}"\n` : ''
  }
  if (!(node instanceof Element)) return ''
  const tag = node.tagName.toLowerCase()
  let attrs = ''
  if (node instanceof HTMLElement) {
    for (const name of ['id', 'role', 'aria-invalid', 'aria-describedby', 'aria-live', 'tabindex', 'type', 'class']) {
      const v = node.getAttribute(name)
      if (v !== null) attrs += ` ${name}="${v}"}`
    }
  }
  let out = `${pad}<${tag}${attrs}>\n`
  if (node.shadowRoot) out += dump(node.shadowRoot, depth + 1)
  for (const child of Array.from(node.childNodes)) out += dump(child, depth + 1)
  return out
}
```

Careful: `node instanceof Element` inside a module — fine.

Hmm — but this could be big. That's OK.

Also I want to check `document.activeElement` after submit (focus moved to error list link).

Let's add `ACTIVE: <tag#id>` line.

And add the `dump` at ~5s virtual time.

Let's build this.

Also: `--dump-dom` needs the page to have finished. Let's use `--virtual-time-budget=8000`.

Also need `--no-sandbox`? On macOS not needed. `--headless=new` should work.

Chrome binary: `/Applications/Google Chrome.app/Contents/MacOS/Google Chrome`.

Let's set it up.

First check kol-button's `click` method.

**Tool: shell**

**Input:**
```json
{
  "command": "grep -n -A6 '\"click\"\\|async click' node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js | head -20; echo \"=== button ctaRef/render ===\"; sed -n '80,98p' node_modules/@public-ui/components/dist/esm/kol-button-wc.entry.js"
}
```

75:    async click() { }
76-    render() {
77-        var _a, _b;
78-        const hasExpertSlot = showExpertSlot(this.state._label);
79-        const hasAriaDescription = Boolean((_b = (_a = this.state._ariaDescription) === null || _a === void 0 ? void 0 : _a.trim()) === null || _b === void 0 ? void 0 : _b.length);
80-        const badgeText = this.state._accessKey || this.state._shortKey;
81-        const isDisabled = this.state._disabled === true;
--
299:], KolButtonWc.prototype, "click", null);
300-
301-export { KolButtonWc as kol_button_wc };
302-//# sourceMappingURL=kol-button-wc.entry.js.map
=== button ctaRef/render ===
        const badgeText = this.state._accessKey || this.state._shortKey;
        const isDisabled = this.state._disabled === true;
        const hideLabel = this.state._hideLabel === true;
        return (h(Host, { key: '221d588a96d3380606377705e11c6dea182e24e5' }, h("button", { key: '76e287935dd7f2c54875d5ed46bfeaeae34cff19', ref: this.ctaRef, accessKey: this.state._accessKey, "aria-controls": this.state._ariaControls, "aria-describedby": hasAriaDescription ? this.internalDescriptionById : undefined, "aria-expanded": mapBoolean2String(this.state._ariaExpanded), "aria-haspopup": this._ariaHasPopup, "aria-keyshortcuts": this.state._shortKey, "aria-label": hideLabel && typeof this.state._label === 'string' && this.state._label.length > 0 ? this.state._label : undefined, "aria-selected": mapStringOrBoolean2String(this.state._ariaSelected), class: clsx('kol-button', {
                'kol-button--disabled': isDisabled,
                [classNameFromVariant(this.state._variant, 'button')]: this.state._variant !== undefined,
                'kol-button--inline': this.state._inline === true,
                'kol-button--standalone': this.state._inline === false,
                'kol-button--hide-label': hideLabel,
                [this.state._customClass]: typeof this.state._customClass === 'string' && this.state._customClass.length > 0,
            }), disabled: isDisabled, id: this.state._id, name: this.state._name, onClick: this.onClick, onMouseDown: this.onMouseDown, onFocus: this.onFocus, onBlur: this.onBlur, role: this.state._role, tabIndex: this.state._tabIndex, type: this.state._type }, h(SpanFC, { key: 'a952ebc2063044a81f1bee81338a6b6c27e8ec86', class: "kol-button__text", badgeText: badgeText, icons: this.state._icons, hideLabel: hideLabel, label: hasExpertSlot ? '' : this.state._label }, h("slot", { key: '9495e37f98b7155172ceb6b639fd95d2291a0a86', name: "expert", slot: "expert" }))), hideLabel && typeof this.state._label === 'string' && this.state._label.length > 0 && (h("div", { key: '662387306af9583fab64d6f59c723ed44ce13019', class: "kol-button__tooltip" }, h(TooltipFC, { key: '743b4b515f88437df7e1080e8c3aa49b0befd85c', badgeText: badgeText || '', label: this.state._label, id: this.tooltipBehavior.getRenderProp('id'), refFloating: this.tooltipBehavior.setTooltipElementRef }))), hasAriaDescription && (h("span", { key: '47e8746efa42af91a209a9a9999b1ea42b4fe617', class: "visually-hidden", id: this.internalDescriptionById }, this.state._ariaDescription))));
    }
    constructor(hostRef) {
        registerInstance(this, hostRef);
        var _a;
        this.ctaRef = createCtaRef();
        this.tooltipBehavior = new TooltipBehavior(BaseWebComponent.stateLess);
        this.internalDescriptionById = nonce();
        this.onClick = (event) => {


---

## Assistant

_Thinking:_

`async click() { }` — the `click()` method is a no-op! So I must dispatch a click on the inner `<button>` (or use `.click()` on the inner button element).

Plan: find the first `kol-button` in the light DOM, get its shadowRoot's inner `<button>`, and call `.click()` on it. That triggers `onClick` (React-like Stencil handler) → propagateSubmit → `_on.onSubmit`.

`HTMLElement.click()` dispatches a click event that runs listeners AND default action. Since the inner button is `type="submit"` but has no form owner, no native submit. Fine.

Let's set up the verification.

Files:
- `verify.html` (root)
- `src/verify.tsx`

Then start vite dev, run chrome headless dump, parse output, then delete both files.

Let's write them.

For dumping, I need to include shadow roots. Let's write the dump function.

Note: `--dump-dom` outputs the full serialized DOM; my `<pre>` will contain escaped HTML entities. Fine.

Let's write.

One concern: the app must be reachable at `/verify.html` in vite dev. Vite serves HTML files from root. ✓

Another concern: `src/verify.tsx` imports `./App.tsx` — App imports `./App.css`. Vite handles it. ✓

But `index.css` won't be loaded in verify.html — doesn't matter.

Also `verify.tsx` exports nothing → `react-refresh` lint might complain? We'll only lint `src`... `npx eslint src` would include `verify.tsx`. But it's temporary — I'll delete it. Let's not worry (I'll run lint after deleting).

Let's write the files.

Timing: register() → then render → then click at 1500ms virtual → then dump at 4000ms virtual.

But `focusErrorList` has a 250ms timeout. So dump at ≥ 2500ms after click. Let's click at 2000ms and dump at 5000ms, budget 10000ms.

Hmm, virtual time budget: with `--virtual-time-budget`, timers run in virtual time. Should be fine.

Actually, potential issue: `--virtual-time-budget` + `--dump-dom` dumps at the end of the budget. Let's just make sure the dump `<pre>` is appended inside the timer that runs before budget expiry.

Let's write:

```ts
const CLICK_AT = 2000
const DUMP_AT = 5000
const BUDGET = 12000
```

Let's write verify.tsx.

Also — I want to verify:
1. Error summary renders (KolForm `_errorList`).
2. Per-field `_msg` renders with `role="alert"` and text.
3. `aria-invalid="true"` on inputs.
4. Focus moved to error-list link.
5. Then (second phase) fill fields and submit → success alert.

Doing both phases needs two clicks. Let's do:
- t=2000: click submit (empty) → errors
- t=4000: dump phase 1? We only get one dump at the end.

Alternative: do phase 1 (empty submit), dump state into a variable, then fill inputs programmatically and submit again, and dump both.

That's complex. Let's keep verification focused on the risky bits:
- Phase 1: empty submit → check error list + field messages + aria-invalid + focus.
- Phase 2 (optional): skip.

Actually, filling in values programmatically: set `kol-input-text._value = 'demo'` and dispatch input... Our React handler is `_on.onInput` called by the WC. We'd need to trigger the WC's input handler: dispatch an `input` event on the inner `<input>`. The WC's `onInput` reads `ctaRef.el.value`. Hmm — we'd need to set the inner input's value first.

Doable:
```ts
const host = document.querySelector('kol-input-text')
const inner = host.shadowRoot.querySelector('input')
inner.value = 'demo'
inner.dispatchEvent(new Event('input', {bubbles: true}))
```
The Stencil `onInput` handler is bound to the inner input's `input` event (`@Listen('input')` on the inner? or passed as prop `onInput`). In `InputFc` the native input gets `onInput` handler. Dispatching a bubbling `input` event should trigger it (Stencil uses `addEventListener`). ✓

Then wait, then click submit again → success alert.

That's a nice full-flow verification. Let's do it with two phases and store phase-1 dump before phase2.

Plan:
- t=2000: click submit (empty)
- t=3000: capture dump → `phase1`
- t=3500: fill username + password inner inputs, dispatch input
- t=4500: click submit
- t=6000: capture dump → `phase2`
- t=6500: append `<pre id="VERIFY">PHASE1\n...\nPHASE2\n...</pre>`

Budget 15000.

Hmm, `focusErrorList` moves focus to the error link at ~250ms after phase-1 submit. Then we fill inputs — filling via `.value=` + dispatch doesn't move focus, so focus stays on the link. Then phase-2 submit: `propagateSubmitEventToForm` from the button → but we're clicking the inner button which isn't focused... fine.

OK let's implement. Actually — after phase 1, focus is on the error-list link. In phase 2, clicking the submit button's inner `.click()` — no focus change needed.

Hmm, but our `handleSubmit` on success sets status. Fine.

Let's also verify `document.activeElement` at each dump.

Let's write it.

One more: `dump` must handle `Document`/`ShadowRoot` nodes.

Let's write the code carefully.

Actually — I realize there might be an issue with clicking the inner button of `kol-button`: which one is first? `document.querySelectorAll('kol-button')` in light DOM returns [submit, reset] (the two action buttons). But KolAlert might also render buttons (no closer → no button). And KolForm's error list links are `kol-link` not `kol-button`. And KolInputPassword has a visibility toggle button — but that's inside the shadow root of kol-input-password, not light DOM. So light-DOM `kol-button` → submit first, reset second. ✓

Let's be safe and select by attribute: `kol-button[_type="submit"]`.

Now write.

Now let me verify the runtime behaviour of the less-certain KoliBri APIs with a temporary harness page.

**Tool: write**

**Input:**
```json
{
  "content": "<!doctype html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"UTF-8\" />\n    <title>verify</title>\n  </head>\n  <body>\n    <div id=\"root\"></div>\n    <script type=\"module\" src=\"/src/verify.tsx\"></script>\n  </body>\n</html>\n",
  "path": "/Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/verify.html"
}
```

Created file successfully: verify.html

---

## Assistant

_Thinking:_

Now `src/verify.tsx`.

I need to be careful: it must not be linted as part of the final deliverable (I'll delete it).

Let's write.

**Tool: write**

**Input:**
```json
{
  "content": "/* Temporary runtime verification harness - deleted after use. */\nimport { StrictMode } from 'react'\nimport { createRoot } from 'react-dom/client'\nimport { register } from '@public-ui/components'\nimport { defineCustomElements } from '@public-ui/components/loader'\nimport { DEFAULT } from '@public-ui/theme-default'\n\nimport App from './App.tsx'\n\nconst ATTRS = [\n  'id',\n  'role',\n  'type',\n  'class',\n  'tabindex',\n  'disabled',\n  'aria-invalid',\n  'aria-describedby',\n  'aria-label',\n  'aria-live',\n  'for',\n  'href',\n  '_type',\n  '_label',\n  '_touched',\n  '_error-list',\n]\n\nfunction dump(node: Node, depth = 0): string {\n  const pad = '  '.repeat(depth)\n  if (node.nodeType === Node.TEXT_NODE) {\n    const text = (node.textContent ?? '').replace(/\\s+/g, ' ').trim()\n    return text ? `${pad}\"${text}\"\\n` : ''\n  }\n  if (!(node instanceof Element)) return ''\n  const tag = node.tagName.toLowerCase()\n  if (tag === 'script' || tag === 'style') return ''\n  let attrs = ''\n  for (const name of ATTRS) {\n    const value = node.getAttribute(name)\n    if (value !== null) attrs += ` ${name}=\"${value}\"`\n  }\n  let out = `${pad}<${tag}${attrs}>\\n`\n  if (node.shadowRoot) out += dump(node.shadowRoot, depth + 1)\n  for (const child of Array.from(node.childNodes)) out += dump(child, depth + 1)\n  return out\n}\n\nfunction snapshot(label: string): string {\n  const active = document.activeElement\n  const activeInfo = active\n    ? `${active.tagName.toLowerCase()}${active.id ? `#${active.id}` : ''}`\n    : 'none'\n  return `\\n===== ${label} (activeElement: ${activeInfo}) =====\\n${dump(document.body)}\\n`\n}\n\nfunction clickSubmit() {\n  const button = document.querySelector('kol-button[_type=\"submit\"]')\n  const inner = button?.shadowRoot?.querySelector('button')\n  inner?.click()\n}\n\nfunction fill(input: string, value: string) {\n  const host = document.querySelector(input)\n  const inner = host?.shadowRoot?.querySelector('input')\n  if (inner) {\n    inner.value = value\n    inner.dispatchEvent(new Event('input', { bubbles: true }))\n  }\n}\n\nconst results: string[] = []\n\nregister(DEFAULT, defineCustomElements)\n  .then(() => {\n    createRoot(document.getElementById('root')!).render(\n      <StrictMode>\n        <App />\n      </StrictMode>,\n    )\n\n    // Phase 1: submit the empty form -> validation errors.\n    setTimeout(clickSubmit, 2000)\n    setTimeout(() => results.push(snapshot('PHASE 1: empty submit')), 3500)\n\n    // Phase 2: fill both fields and submit again -> success.\n    setTimeout(() => {\n      fill('#login-username input', 'demo')\n      fill('#login-password input', 'hunter2')\n    }, 4500)\n    setTimeout(clickSubmit, 6000)\n    setTimeout(() => results.push(snapshot('PHASE 2: valid submit')), 8000)\n\n    setTimeout(() => {\n      const pre = document.createElement('pre')\n      pre.id = 'VERIFY_DUMP'\n      pre.textContent = results.join('\\n')\n      document.body.appendChild(pre)\n    }, 9000)\n  })\n  .catch((error: unknown) => {\n    const pre = document.createElement('pre')\n    pre.id = 'VERIFY_DUMP'\n    pre.textContent = `REGISTER FAILED: ${String(error)}`\n    document.body.appendChild(pre)\n  })\n",
  "path": "/Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/src/verify.tsx"
}
```

Created file successfully: src/verify.tsx

---

## Assistant

_Thinking:_

Wait: `fill('#login-username input', 'demo')` — the `id` attribute is on `<kol-input-text>`, and the inner `<input>` is in its shadow root. `document.querySelector('#login-username input')` won't pierce the shadow root. I need:

```ts
const host = document.querySelector('#login-username')
const inner = host?.shadowRoot?.querySelector('input')
```

Let me fix `fill` to take a host selector.

Also — setting `inner.value = value` then dispatching `input`: the Stencil handler `onInput` reads `this.ctaRef.el?.value`. `ctaRef.el` is the inner input ref. ✓

But does dispatching an `input` event on the inner input reach the Stencil listener? Stencil's `@Listen('input')` or a JSX `onInput` prop on the inner element — either way `addEventListener('input', ...)` on that element. Dispatching directly on it works. ✓

Let's fix `fill`.

Also, `pre.textContent` containing HTML — when serialized by `--dump-dom`, it will be escaped. Fine.

Another issue: `register(DEFAULT, defineCustomElements)` — does it need `index.css`? No.

But App imports `./App.css` — Vite handles.

Also: `verify.tsx` uses JSX — tsconfig includes `src`, jsx react-jsx. ✓

Let's fix fill.

**Tool: edit**

**Input:**
```json
{
  "newString": "function fill(hostSelector: string, value: string) {\n  const host = document.querySelector(hostSelector)\n  const inner = host?.shadowRoot?.querySelector('input')\n  if (inner) {\n    inner.value = value\n    inner.dispatchEvent(new Event('input', { bubbles: true }))\n  } else {\n    results.push(`FILL FAILED: ${hostSelector}`)\n  }\n}",
  "oldString": "function fill(input: string, value: string) {\n  const host = document.querySelector(input)\n  const inner = host?.shadowRoot?.querySelector('input')\n  if (inner) {\n    inner.value = value\n    inner.dispatchEvent(new Event('input', { bubbles: true }))\n  }\n}",
  "path": "/Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/src/verify.tsx"
}
```

Edited src/verify.tsx (1 replacement)

---

## Assistant

_Thinking:_

Wait — `results` is declared with `const results: string[] = []` AFTER the `fill` function definition? Let's check order: in my file, `results` is declared after `fill` (before `register`). Actually I wrote:

```
function snapshot(...)
function clickSubmit()
function fill(...)   // now edited
const results: string[] = []
register(...)
```

Wait no — I declared `const results` after `fill`. Let me re-check: original file order was:
1. ATTRS
2. dump
3. snapshot
4. clickSubmit
5. fill
6. `const results: string[] = []`
7. register

Hmm, but `snapshot` uses `dump`, `clickSubmit` uses nothing, `fill` now references `results` — but `fill` is a function declaration (hoisted), and `results` is a `const` declared before `fill` is *called*. So at call time `results` is initialized. ✓ TDZ only matters at call time. `fill` is called inside a setTimeout → after module evaluation. ✓

Actually wait, is `const results` declared before or after `function fill`? Doesn't matter — `fill` is only called later.

OK. Now fix the `fill` calls in the timeouts to use host selectors.

Currently: `fill('#login-username input', 'demo')` → change to `fill('#login-username', 'demo')`.

Let's edit.

**Tool: edit**

**Input:**
```json
{
  "newString": "      fill('#login-username', 'demo')\n      fill('#login-password', 'hunter2')",
  "oldString": "      fill('#login-username input', 'demo')\n      fill('#login-password input', 'hunter2')",
  "path": "/Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/src/verify.tsx"
}
```

Edited src/verify.tsx (1 replacement)

---

## Assistant

_Thinking:_

Also — `clickSubmit` uses `document.querySelector('kol-button[_type="submit"]')`. Is `_type` reflected as an attribute? The React wrapper's attachProps sets `node['_type'] = 'submit'` AND `setAttribute('_type', 'submit')` (since typeof is string, `camelToDashCase('_type')` = `_type`). ✓

But React's `render()` also passes `_type` as an attribute (`acc[camelToDashCase('_type')] = '_type'`) → React sets `_type="submit"`. ✓

Now, also — the `fill` for password: `kol-input-password` inner input. The host is `#login-password`. ✓

Hmm, but KolInputPassword's inner input — does setting `.value` + dispatching `input` update `_value`? `kol-input-password`'s onInput reads `this.ctaRef.el?.value`. Should be the same pattern.

Also, the visibility toggle button exists in the shadow root — but it's a `<button>` or `kol-button` inside shadow, not light DOM. `document.querySelector('kol-button[_type="submit"]')` only searches light DOM → only our two action buttons. ✓

Wait — actually there's a subtlety: is the password field's visibility toggle a `kol-button` inside the shadow root of `kol-input-password`? Yes (from earlier: `h(KolIconButtonFc, ...)`). Light-DOM query won't find it. ✓

Now, one more issue: after phase 1, focus moves to the error-list link. Then in phase 2 we fill inputs without focusing → `onBlur` won't fire again (already touched=true). Then click submit → validate → success. ✓

But: `handleInput` → `if (touched[name]) setErrors(...)`. touched is true after phase 1 → errors recomputed → both become undefined → `errorList` = [] → KolForm removes the error summary. Then submit → no errors → status success. ✓

Hmm — but there's an ordering issue: `fill` dispatches `input` on username, then immediately on password (same synchronous block). Each triggers `onInput` → `setValues`/`setErrors`. React batches (React 18+ auto-batching in non-React events → batched per microtask/sync block). Should be fine.

Actually — the second `fill` reads `values` from the closure of the handler created at the last render. `handleInput('password')` closure has `values` from the render before username's input event was processed. If React hasn't re-rendered yet, `values` = {username: '', password: ''} and `touched` = both true.

`handleInput('password')`: `setValues(previous => ({...previous, password: 'hunter2'}))` — functional updater, so username's update is preserved. ✓
`setErrors(previous => ({...previous, password: undefined}))` — functional. ✓

But `touched[name]` read from closure — touched is both true after phase 1 (committed). ✓

And for username: `setValues(prev => ({...prev, username:'demo'}))` ✓.

Then after both, `setStatus(null)` twice. Fine.

Then `clickSubmit` at t=6000 — by then React has re-rendered with both values. `handleSubmit` closure reads `values` from the latest render. ✓

Good.

Hmm, one thing: `setStatus(null)` in `handleInput` — after phase 2's successful submit, status is set. If we typed again it'd clear. Not relevant.

Now — potential problem: in phase 2, does `handleInput` get called at all? The inner `input` dispatch → Stencil `onInput` → `component._on.onInput(event, value)` → our handler. ✓

But `_on` must be set on the element. React's attachProps sets it. ✓

Another potential problem: after phase 1, `focusErrorList` focused the error link. Then `fill` sets `inner.value` on username — no focus change. OK.

Hmm, but wait: `document.activeElement` for a focused element inside a shadow root — `document.activeElement` returns the *host* element (e.g., `<kol-link>`). Actually for nested shadow roots, `document.activeElement` returns the outermost host. So activeElement would be `<kol-link>` (host of the error link). Hmm, actually the error list link is `KolLinkWcTag` = `kol-link` in the form's shadow DOM. Focusing the `<a>` inside `kol-link`'s shadow root → `document.activeElement` = `<kol-form>` (the shadow host at document level). Because the `<a>` is inside `kol-form`'s shadow root (the error list is rendered in kol-form's shadow). So `document.activeElement` = `kol-form`.

Hmm, so my snapshot's activeElement info will show `kol-form`. Not very informative. Let's also check `document.activeElement.shadowRoot.activeElement` chain. Let's improve `snapshot` to walk shadow roots.

Let's update:

```ts
function activePath(): string {
  let el: Element | null = document.activeElement
  const parts: string[] = []
  while (el) {
    parts.push(el.tagName.toLowerCase() + (el.id ? `#${el.id}` : ''))
    el = el.shadowRoot?.activeElement ?? null
  }
  return parts.join(' > ') || 'none'
}
```

Good.

Let's update snapshot.

Then start vite and run chrome.

Let's edit verify.tsx.

**Tool: edit**

**Input:**
```json
{
  "newString": "function activePath(): string {\n  let element: Element | null = document.activeElement\n  const parts: string[] = []\n  while (element) {\n    parts.push(\n      `${element.tagName.toLowerCase()}${element.id ? `#${element.id}` : ''}`,\n    )\n    element = element.shadowRoot?.activeElement ?? null\n  }\n  return parts.join(' > ') || 'none'\n}\n\nfunction snapshot(label: string): string {\n  return `\\n===== ${label} (activeElement: ${activePath()}) =====\\n${dump(document.body)}\\n`\n}",
  "oldString": "function snapshot(label: string): string {\n  const active = document.activeElement\n  const activeInfo = active\n    ? `${active.tagName.toLowerCase()}${active.id ? `#${active.id}` : ''}`\n    : 'none'\n  return `\\n===== ${label} (activeElement: ${activeInfo}) =====\\n${dump(document.body)}\\n`\n}",
  "path": "/Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/src/verify.tsx"
}
```

Edited src/verify.tsx (1 replacement)

---

## Assistant

_Thinking:_

Wait — `document.body` dump at phase 1 includes `#root` but not the `<pre>` yet (added at t=9000). Phase 1 snapshot at 3500, phase 2 at 8000, pre at 9000. The pre contains the snapshots. ✓

But the dump of `document.body` at phase 2 would include... the pre doesn't exist yet. ✓

Also `dump(document.body)` at phase 2 → includes `#root` content. ✓

Hmm, one issue: the pre contains text that includes `<` and `>` chars → `textContent` → serialized as `&lt;` etc. in `--dump-dom`. We'll unescape.

Now, let's start vite dev server and run chrome.

Vite dev server default port 5173.

Let's run in background.

Then chrome:
```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --no-sandbox \
  --virtual-time-budget=15000 \
  --dump-dom \
  http://localhost:5173/verify.html
```

Hmm — `--virtual-time-budget` with `--dump-dom`: it should work. But `--headless=new` may not support `--virtual-time-budget` well... it does.

Concern: real time vs virtual time. Virtual time makes timers fire as fast as possible. But `register()` is async (loads custom elements) — microtasks/promises resolve in virtual time too.

Let's also add `--run-all-compositor-stages-before-draw`.

Let's try.

Also `--dump-dom` output could be large. I'll pipe to a file and grep.

Let's go.

Actually, a subtlety: `--virtual-time-budget` might not work with `--headless=new` in recent Chrome (they removed/changed it?). Let's try; if the dump is empty of my pre, we'll increase real waiting using a different approach (e.g., `--timeout`).

Actually there's no `--timeout` for dump-dom. Alternative: use `--headless=old`? Removed in modern Chrome.

Let's just try.

Let's start vite.

**Tool: shell**

**Input:**
```json
{
  "command": "cd /Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground && npx vite --port 5199 --strictPort > /tmp/vite-verify.log 2>&1 &\nsleep 4; cat /tmp/vite-verify.log; curl -s -o /dev/null -w \"%{http_code}\\n\" http://localhost:5199/verify.html",
  "timeout": 60000
}
```

000

Exited with code 7

---

## Assistant

_Thinking:_

The background command didn't stay alive (the `&` inside the shell tool + `sleep`). Let's use the tool's `background` parameter instead.

**Tool: shell**

**Input:**
```json
{
  "command": "cd /Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground && npx vite --port 5199 --strictPort",
  "background": true
}
```

Command moved to the background (shell ID: sh_0f7ac8f10001lcjxdPj0P4GkDx).
Output is streaming to: /Users/p.dijon.de.monteton/.local/share/opencode/shell/0652865c1e38e197ad37148c7853f972bd77a86e/sh_0f7ac8f10001lcjxdPj0P4GkDx.out
You will be notified automatically when the command finishes. The notification will include the command's output. Unless the user explicitly asks otherwise, DO NOT poll for completion, even if you need the final result to continue. Repeatedly sleeping and reading or searching the output file is polling, not useful work. You may read the current output if it lets you do useful work now, but do not repeatedly check it while waiting for the command to finish. Keep working on anything that does not depend on the result. If you have nothing else to do, end your response; you will be resumed automatically when the command finishes.

---

## Assistant

_Thinking:_

Hmm, I shouldn't poll. But I need to wait for vite to start. Let me read the output file once after a bit — actually I can just try curl in a foreground command; if it fails, retry.

Let me run a foreground command that waits for the server.

**Tool: shell**

**Input:**
```json
{
  "command": "for i in $(seq 1 30); do code=$(curl -s -o /dev/null -w \"%{http_code}\" http://localhost:5199/verify.html); if [ \"$code\" = \"200\" ]; then echo \"ready: $code\"; break; fi; sleep 1; done; echo \"last=$code\"",
  "timeout": 60000
}
```

ready: 200
last=200


---

## Assistant

_Thinking:_

Now run headless Chrome with dump-dom.

**Tool: shell**

**Input:**
```json
{
  "command": "cd /private/var/folders/bf/t6vjyx615nx9tc_4xwrl1rhm0000gn/T/opencode && \"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome\" --headless=new --disable-gpu --no-sandbox --user-data-dir=/tmp/chrome-verify-profile --virtual-time-budget=20000 --dump-dom http://localhost:5199/verify.html > /tmp/verify-dom.html 2>/tmp/verify-chrome.err; echo \"exit=$?\"; wc -c /tmp/verify-dom.html; grep -c \"VERIFY_DUMP\" /tmp/verify-dom.html; head -20 /tmp/verify-chrome.err",
  "timeout": 180000
}
```

exit=0
    9268 /tmp/verify-dom.html
1
[41574:11364847:1001/153452.199635:ERROR:ui/display/mac/cv_display_link_mac.mm:188] CVDisplayLinkCreateWithCGDisplay failed. CVReturn: -6670
[41574:11364847:1001/153452.201444:ERROR:ui/display/mac/cv_display_link_mac.mm:188] CVDisplayLinkCreateWithCGDisplay failed. CVReturn: -6670
[41574:11364847:1001/153452.201602:ERROR:ui/display/mac/cv_display_link_mac.mm:188] CVDisplayLinkCreateWithCGDisplay failed. CVReturn: -6670
[41574:11364847:1001/153452.201704:ERROR:ui/display/mac/cv_display_link_mac.mm:188] CVDisplayLinkCreateWithCGDisplay failed. CVReturn: -6670
[41574:11364847:1001/153452.201808:ERROR:ui/display/mac/cv_display_link_mac.mm:188] CVDisplayLinkCreateWithCGDisplay failed. CVReturn: -6670
[41574:11364847:1001/153452.201913:ERROR:ui/display/mac/cv_display_link_mac.mm:188] CVDisplayLinkCreateWithCGDisplay failed. CVReturn: -6670
[41574:11364847:1001/153452.201993:ERROR:ui/display/mac/cv_display_link_mac.mm:188] CVDisplayLinkCreateWithCGDisplay failed. CVReturn: -6670
Trying to load the allocator multiple times. This is *not* supported.
[41574:11364847:1001/153453.425832:ERROR:ui/display/mac/cv_display_link_mac.mm:188] CVDisplayLinkCreateWithCGDisplay failed. CVReturn: -6670
[41574:11364847:1001/153453.864633:ERROR:ui/display/mac/cv_display_link_mac.mm:188] CVDisplayLinkCreateWithCGDisplay failed. CVReturn: -6670


---

## Assistant

_Thinking:_

VERIFY_DUMP found. Let's extract and unescape it.

**Tool: shell**

**Input:**
```json
{
  "command": "cd /private/var/folders/bf/t6vjyx615nx9tc_4xwrl1rhm0000gn/T/opencode && python3 - <<'PY'\nimport re, html\nraw = open('/tmp/verify-dom.html', encoding='utf-8').read()\nm = re.search(r'<pre id=\"VERIFY_DUMP\">(.*?)</pre>', raw, re.S)\nif not m:\n    print(\"NO DUMP FOUND\")\n    print(raw[:3000])\nelse:\n    text = html.unescape(m.group(1))\n    open('/tmp/verify-dump.txt','w',encoding='utf-8').write(text)\n    print(\"chars:\", len(text))\n    print(text[:6000])\nPY"
}
```

chars: 1515

===== PHASE 1: empty submit (activeElement: kol-form > a) =====
<body>
  <div id="root">
    <main>
      <h1>
        "KoliBri MCP Playground"
      <div class="login">
        <kol-card class="hydrated" _label="Sign in">
          <kol-form class="hydrated">
            <div class="login__fields">
              <kol-input-text id="login-username" class="hydrated" _label="Username" _touched="">
              <kol-input-password id="login-password" class="hydrated" _label="Password" _touched="">
            <div class="login__actions">
              <kol-button class="hydrated" _type="submit" _label="Sign in">
              <kol-button class="hydrated" _type="reset" _label="Reset form">



===== PHASE 2: valid submit (activeElement: body) =====
<body>
  <div id="root">
    <main>
      <h1>
        "KoliBri MCP Playground"
      <div class="login">
        <kol-card class="hydrated" _label="Sign in">
          <kol-form class="hydrated">
            <kol-alert class="hydrated" _type="success" _label="Sign-in data is valid. This demo has no backend connection.">
            <div class="login__fields">
              <kol-input-text id="login-username" class="hydrated" _label="Username" _touched="">
              <kol-input-password id="login-password" class="hydrated" _label="Password" _touched="">
            <div class="login__actions">
              <kol-button class="hydrated" _type="submit" _label="Sign in">
              <kol-button class="hydrated" _type="reset" _label="Reset form">




---

## Assistant

_Thinking:_

Interesting results:

**Phase 1 (empty submit):**
- `activeElement: kol-form > a` → focus DID move into the shadow DOM: `kol-form` → `a`. So `focusErrorList()` worked and the error list link exists! ✓ Great — that confirms `_errorList` renders AND focus management works.
- BUT: `_touched=""` on inputs — React set the attribute but... `_touched=""` means the attribute value is empty string. Hmm. Did `_touched` become `true`? The error messages should be visible.

Wait — the light DOM dump doesn't show shadow content (except `activeElement` walking). My `dump` function recurses into `shadowRoot` — but the output shows no shadow content for kol-card/kol-form! Look: `<kol-card class="hydrated" _label="Sign in">` has no children indented beneath it.

Hmm — why? Because `node.shadowRoot` should exist for hydrated components...

Oh! I see: `<main>` has `<h1>` then `<div class="login">` — but no closing tags (my dump never prints closing tags, fine). And under `kol-card` there's `kol-form` etc. — those are light children, and they ARE indented at depth 3 (` <kol-form>`). So `dump` IS recursing children.

But `node.shadowRoot` content should appear before children. For `kol-card`, no shadow output appeared. So `shadowRoot` was null?!

Hmm — `class="hydrated"` means hydrated. But Stencil with `shadow: true` should have a shadowRoot.

Wait — maybe `dump` ran on `document.body` and shadow roots ARE there but my ATTRS filtering... no, I print all elements.

Hold on — look at depth: `<kol-card>` at depth 3 (`    ` = 4 spaces = depth 2? let's count: `<body>` depth0, `  <div id="root">` depth 1, `    <main>` depth 2, `      <h1>` depth 3, `      <div class="login">` depth 3??Hmm: `<h1>` is at depth 3 and `<div class="login">` is also at depth 3. But `.login` should be a sibling of `h1` inside `main` → depth 3. ✓ And `<kol-card>` at depth 4 would be `        ` (8 spaces). In the output: `        <kol-card` = 8 spaces → depth 4 ✓. And `<kol-form>` = 12 spaces → depth 6?? Wait: `          <kol-form` — let me count from the raw output:

```
      <div class="login"> -> 6 spaces = depth 3
        <kol-card ...>             -> 8 spaces = depth 4
          <kol-form ...>           -> 10 spaces = depth 5
            <div class="login__fields">  -> 12 spaces = depth 6
```

So `.login` is depth 3, kol-card depth 4. But `<h1>` at `      ` = 6 spaces = depth 3, and `<main>` at `    ` = 4 spaces = depth 2. So main's children are depth 3: h1 and .login. ✓

And kol-card's shadow root content should appear at depth 5 between `<kol-card>` and `<kol-form>`. But `<kol-form>` is at depth 5 — meaning kol-form is a *child* of kol-card at depth 5. So there's NO shadow content inserted. So `kol-card.shadowRoot` is null in the dump?

Hmm, but wait — `<kol-form>` should be at depth 5 as a light child of kol-card (depth 4 + 1 = 5). ✓. And shadow content of kol-card would ALSO be at depth 5 (inserted before children). It's absent.

So shadowRoot was null. Why?

Possibility: Stencil's `hydrated` class is added, but the actual rendering happens in shadow DOM — `element.shadowRoot` should be non-null for `encapsulation: 'shadow'`.

Unless... `dump()` returns early: `if (tag === 'script' || tag === 'style') return ''`. Shadow root is a `DocumentFragment`, not an Element → `node.nodeType` is 11 (DOCUMENT_FRAGMENT_NODE), not TEXT_NODE (3), and `node instanceof Element` is false → returns ''!

BUG! `dump(node.shadowRoot)` → the ShadowRoot itself is a DocumentFragment → my function returns '' and never recurses into its children.

Right. Need to handle DocumentFragment.

But then how did `activeElement` show `kol-form > a`? That's from `activePath()`, which walks `element.shadowRoot.activeElement` — independent of `dump`. So focus DID move to an `<a>` inside kol-form's shadow root. That's the error-list link! ✓✓

So `_errorList` works (link exists and got focus).

Let me fix `dump` to handle document fragments, and re-run to see the shadow content (error messages, role=alert, aria-invalid).

Also `_touched=""` — React set the attribute to empty string. Does Stencil parse `""` as `true` for a boolean prop? Stencil's boolean attribute handling: for `@Prop({type: 'boolean'})`, Stencil generates a `parsePropValue` that treats `''` (empty) as `true`? Actually Stencil: `value === 'false' || value === 'null' || value === 'undefined'` → false; otherwise `value !== null` → hmm.

Stencil's `parsePropertyValue(type, value)`: for boolean, `if (value === '' || value === 'false' ... )`... Let me recall: Stencil's generated code for boolean props is:

```js
if (type === 'boolean') {
  return value !== 'false';   // ??
}
```

Hmm, actually in Stencil the attribute → prop conversion for booleans: the value is `''` for `<x-bool-attr>` presence, which should be `true`.

Stencil's `parsePropertyValue`:
```js
export const parsePropertyValue = (propType, value) => {
  ...
  if (propType === 'boolean') {
    return value === '' || value === 'false' ? false : true;  // ?
  }
}
```

Hmm, I'm not sure. Actually I recall Stencil's `boolean` attribute parsing: `value !== 'false'` (so `''` → true). Let's check `parsePropertyValue` in the dist.

But actually — the important thing is that attachProps ALSO sets `node['_touched'] = true` (property), which is unambiguous. The attribute is secondary.

BUT: which happens last? `attachProps` does `node[name] = newProps[name]` FIRST, then `if (propType === 'string') setAttribute(...)`. For boolean, no setAttribute. So the attribute came from **React** (propsToPass → `acc['_touched'] = true` → React renders `_touched=""` for boolean true on a custom element). React's attribute setting happens on the DOM element... and React sets `_touched=""` as an attribute. That could OVERRIDE the property we set in componentDidUpdate? No — attachProps runs in componentDidUpdate, AFTER React's DOM mutation. So attachProps sets the property last. ✓

Order: React commits DOM (sets attribute `_touched=""`) → componentDidUpdate → `node['_touched'] = true` (property) → Stencil's prop setter fires with `true`.

Does setting the property cause Stencil to also reflect? Not by default. The attribute stays `""` but the property/state is `true`. Since Stencil's `state._touched` comes from the property, we're fine.

Hmm, but on subsequent renders: React sees `_touched` prop changed from `false` to `true` → sets attribute `_touched=""`... Actually React for boolean `true` on a custom element: `setAttribute('_touched', '')`? Or `removeAttribute`? React 19: for non-boolean-known attributes with boolean values on custom elements, it sets `attribute="true"`? The dump shows `_touched=""`, so React set it to empty string.

Then attachProps sets property `true`. ✓

But careful about the reverse: when `_touched` is `false`, React sets... `removeAttribute('_touched')`? Then attachProps sets `node['_touched'] = false`. ✓

In phase 1, `_touched=""` present → React set it → and attachProps set property true. Good.

Hmm — but wait. There's a risk: does Stencil's `@Prop` setter get invoked with `true` from attachProps? Yes: `node['_touched'] = true` → property setter → `validateTouched(true)` → `state._touched = true`. ✓

OK. So phase 1: `focusErrorList` worked → error list rendered with at least one link. That's the key confirmation!

Phase 2: success `kol-alert` with `_type="success"` and `_label` rendered. ✓ And activeElement back to `body` (focus was on the error link; after the error list disappeared... hmm, activeElement = body. The error list was removed (no errors), so focus went to body. Actually clicking the inner submit button doesn't focus it (`.click()` doesn't move focus). So focus → body when the link was removed. Acceptable.

Hmm — but I'd like to verify the per-field error messages and `aria-invalid`. Let's fix `dump` for DocumentFragment and re-run.

Also note: in phase 1, NO `kol-alert` in the light DOM (correct — status is null). The error list is inside kol-form's shadow DOM (not light DOM) — that's why we didn't see it in the light dump. Need shadow recursion.

Let's fix and re-run.

Fix: handle `node.nodeType === Node.DOCUMENT_FRAGMENT_NODE` by iterating children.

```ts
function dump(node: Node, depth = 0): string {
  if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE || node.nodeType === Node.DOCUMENT_NODE) {
    let out = ''
    for (const child of Array.from(node.childNodes)) out += dump(child, depth)
    return out
  }
  ...
}
```

Wait, but then for an Element with a shadowRoot, I call `dump(node.shadowRoot, depth + 1)` — the fragment's children get depth+1. ✓

Let's edit and re-run.

Also I should dump `document.activeElement`'s shadow chain with more detail (tag + class + text) to confirm it's the error-list link.

Let's enhance activePath to include the element's text content snippet.

Let's edit.

**Tool: edit**

**Input:**
```json
{
  "newString": "function dump(node: Node, depth = 0): string {\n  if (\n    node.nodeType === Node.DOCUMENT_FRAGMENT_NODE ||\n    node.nodeType === Node.DOCUMENT_NODE\n  ) {\n    let out = ''\n    for (const child of Array.from(node.childNodes)) out += dump(child, depth)\n    return out\n  }\n  if (node.nodeType === Node.TEXT_NODE) {\n    const text = (node.textContent ?? '').replace(/\\s+/g, ' ').trim()\n    return text ? `${pad(depth)}\"${text}\"\\n` : ''\n  }\n  if (!(node instanceof Element)) return ''\n  const tag = node.tagName.toLowerCase()\n  if (tag === 'script' || tag === 'style') return ''\n  let attrs = ''\n  for (const name of ATTRS) {\n    const value = node.getAttribute(name)\n    if (value !== null) attrs += ` ${name}=\"${value}\"`\n  }\n  let out = `${pad(depth)}<${tag}${attrs}>\\n`\n  if (node.shadowRoot) out += dump(node.shadowRoot, depth + 1)\n  for (const child of Array.from(node.childNodes)) out += dump(child, depth + 1)\n  return out\n}\n\nfunction pad(depth: number): string {\n  return '  '.repeat(depth)\n}",
  "oldString": "function dump(node: Node, depth = 0): string {\n  const pad = '  '.repeat(depth)\n  if (node.nodeType === Node.TEXT_NODE) {\n    const text = (node.textContent ?? '').replace(/\\s+/g, ' ').trim()\n    return text ? `${pad}\"${text}\"\\n` : ''\n  }\n  if (!(node instanceof Element)) return ''\n  const tag = node.tagName.toLowerCase()\n  if (tag === 'script' || tag === 'style') return ''\n  let attrs = ''\n  for (const name of ATTRS) {\n    const value = node.getAttribute(name)\n    if (value !== null) attrs += ` ${name}=\"${value}\"`\n  }\n  let out = `${pad}<${tag}${attrs}>\\n`\n  if (node.shadowRoot) out += dump(node.shadowRoot, depth + 1)\n  for (const child of Array.from(node.childNodes)) out += dump(child, depth + 1)\n  return out\n}",
  "path": "/Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/src/verify.tsx"
}
```

Edited src/verify.tsx (1 replacement)

---

## Assistant

_Thinking:_

Also enhance `activePath` to include text/class.

Let's edit.

**Tool: edit**

**Input:**
```json
{
  "newString": "function activePath(): string {\n  let element: Element | null = document.activeElement\n  const parts: string[] = []\n  while (element) {\n    const text = (element.textContent ?? '').replace(/\\s+/g, ' ').trim()\n    parts.push(\n      `${element.tagName.toLowerCase()}${element.id ? `#${element.id}` : ''}[${text.slice(0, 60)}]`,\n    )\n    element = element.shadowRoot?.activeElement ?? null\n  }\n  return parts.join(' > ') || 'none'\n}",
  "oldString": "function activePath(): string {\n  let element: Element | null = document.activeElement\n  const parts: string[] = []\n  while (element) {\n    parts.push(\n      `${element.tagName.toLowerCase()}${element.id ? `#${element.id}` : ''}`,\n    )\n    element = element.shadowRoot?.activeElement ?? null\n  }\n  return parts.join(' > ') || 'none'\n}",
  "path": "/Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/src/verify.tsx"
}
```

Edited src/verify.tsx (1 replacement)

---

## Assistant

_Thinking:_

Wait — `element.textContent` for a host with a shadow root returns only the LIGHT DOM text (not shadow). For `<kol-form>`, textContent includes light children text (our labels). For `<a>`, textContent = link text = the error message. Good enough.

Hmm, but for the `kol-form` in the chain, textContent would include all light text — sliced to 60 chars. Fine.

Re-run chrome.

Also — I realize there's a potential issue: phase 1 snapshot at t=3500 but the click at t=2000. `focusErrorList` has 250ms delay → focus at ~2250ms. ✓

Let's re-run.

**Tool: shell**

**Input:**
```json
{
  "command": "cd /private/var/folders/bf/t6vjyx615nx9tc_4xwrl1rhm0000gn/T/opencode && \"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome\" --headless=new --disable-gpu --no-sandbox --user-data-dir=/tmp/chrome-verify-profile --virtual-time-budget=20000 --dump-dom http://localhost:5199/verify.html > /tmp/verify-dom.html 2>/dev/null; python3 - <<'PY'\nimport re, html\nraw = open('/tmp/verify-dom.html', encoding='utf-8').read()\nm = re.search(r'<pre id=\"VERIFY_DUMP\">(.*?)</pre>', raw, re.S)\nif not m:\n    print(\"NO DUMP FOUND\"); print(raw[:2000])\nelse:\n    text = html.unescape(m.group(1))\n    open('/tmp/verify-dump.txt','w',encoding='utf-8').write(text)\n    print(\"chars:\", len(text))\n    print(text)\nPY",
  "timeout": 180000
}
```

(no output)

Command exceeded timeout of 180000 ms. Retry with a larger timeout if the command is expected to take longer.
Timed out before completion

---

## Assistant

_Thinking:_

Timed out. Perhaps Chrome hung due to the reused user-data-dir lock from a previous run, or the page is now heavier.

Let's use a fresh user-data-dir and add `--timeout`? Chrome headless doesn't have a general timeout for dump-dom other than virtual-time-budget.

Actually the previous run completed in reasonable time. Maybe a stale Chrome process holds the profile lock. Let's kill chrome processes and use a unique profile dir.

Let's retry with a fresh profile and `timeout` guard using `gtimeout`/`timeout`.

macOS doesn't have `timeout` by default (coreutils gtimeout?). Let's check... Actually macOS has no `timeout` binary. I'll rely on the tool timeout.

Let's kill chrome first.

**Tool: shell**

**Input:**
```json
{
  "command": "pkill -f \"chrome-verify-profile\" 2>/dev/null; sleep 1; ps aux | grep -c \"[G]oogle Chrome\"; rm -rf /tmp/chrome-verify-profile; echo cleaned",
  "timeout": 30000
}
```

91
cleaned


---

## Assistant

_Thinking:_

91 Chrome processes?! That's a lot — probably the user has Chrome running normally. `pkill -f chrome-verify-profile` should only kill the headless ones.

Hmm, "91" is the count of lines with "Google Chrome" — likely the user's own Chrome. Let's not kill those.

Let's retry with a fresh profile dir.

**Tool: shell**

**Input:**
```json
{
  "command": "cd /private/var/folders/bf/t6vjyx615nx9tc_4xwrl1rhm0000gn/T/opencode && rm -rf /tmp/chrome-vfy2 && \"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome\" --headless=new --disable-gpu --no-sandbox --user-data-dir=/tmp/chrome-vfy2 --virtual-time-budget=20000 --dump-dom http://localhost:5199/verify.html > /tmp/verify-dom.html 2>/dev/null; echo \"chrome exit=$?\"; wc -c /tmp/verify-dom.html",
  "timeout": 120000
}
```

(no output)

Command exceeded timeout of 120000 ms. Retry with a larger timeout if the command is expected to take longer.
Timed out before completion

---

## Assistant

_Thinking:_

Chrome hangs now. Something changed. Maybe the dev server got HMR-stuck, or Chrome is waiting because the page has ongoing timers/animation (virtual time budget never expires if there's a continuous rAF loop — e.g., a KoliBri tooltip/animation using requestAnimationFrame repeatedly keeps virtual time advancing forever!).

`--virtual-time-budget` expires when no more pending tasks... Actually virtual time advances until the budget is consumed OR there are no tasks. With continuous rAF (e.g., floating-ui or KoliBri animations), virtual time keeps advancing — but it should stop at the budget (20000ms). Hmm.

The first run worked. What changed? My dump function change... `activePath` uses `element.textContent` — for `kol-form` that's fine. `dump` recursion — could it be an infinite loop? `node.shadowRoot` → children... no cycle.

Hmm — unless a component has a `<slot>` and... no.

Wait: could it loop because `dump(node.shadowRoot, depth+1)` and the shadow root contains `<slot>` whose assigned nodes are the light children — but `childNodes` of a `<slot>` in shadow DOM does NOT include assigned nodes (assignedNodes are accessed via `assignedNodes()`, not childNodes). So no duplication. And `textContent`/childNodes of slot = empty. OK.

Hmm, so why hang?

Maybe the earlier `pkill` didn't fully clean and a zombie holds... we used a new profile dir.

Or maybe Chrome is waiting on `--dump-dom` but the renderer crashed.

Let's first check whether the dev server is still alive (the background shell). And test the page with curl.

Also — maybe the issue: I have TWO chrome runs overlapping? The first timed-out run might still be running in background holding resources. The `pkill -f chrome-verify-profile` killed those using that profile. The second run used `/tmp/chrome-vfy2`.

Let's check for stray chrome processes with our profiles.

Let's investigate: check vite log, check processes.

**Tool: shell**

**Input:**
```json
{
  "command": "ps aux | grep -E \"[c]hrome-vfy|[c]hrome-verify\" | head -5; echo \"---stray count---\"; ps aux | grep -cE \"[c]hrome-vfy|[c]hrome-verify\"; echo \"--- vite alive? ---\"; curl -s -o /dev/null -w \"%{http_code}\\n\" http://localhost:5199/verify.html; echo \"--- vite log tail ---\"; tail -20 /Users/p.dijon.de.monteton/.local/share/opencode/shell/0652865c1e38e197ad37148c7853f972bd77a86e/sh_0f7ac8f10001lcjxdPj0P4GkDx.out",
  "timeout": 30000
}
```

---stray count---
0
--- vite alive? ---
200
--- vite log tail ---
3:34:39 PM [vite] (client) Re-optimizing dependencies because vite config has changed

  VITE v8.3.2  ready in 912 ms

  ➜  Local:   http://localhost:5199/
  ➜  Network: use --host to expose
3:35:39 PM [vite] (client) page reload src/verify.tsx
3:35:46 PM [vite] (client) page reload src/verify.tsx


---

## Assistant

_Thinking:_

Vite is alive, no stray chrome. So Chrome hung.

Note: "Re-optimizing dependencies because vite config has changed" — that was at start.

Why would Chrome hang now? Possibly the first successful run left something... or the `--virtual-time-budget` with my changes causes an infinite loop in `dump`.

Let's reconsider `dump`:- `activePath()` — walks shadowRoot.activeElement. Could it loop? `element.shadowRoot?.activeElement` — if an element's shadowRoot's activeElement is the element itself... no.

Hmm, `dump(document.body)` — recursion through children + shadow roots. Depth-first. No cycles in a tree.

Unless... `Node.DOCUMENT_FRAGMENT_NODE` check: for an Element, nodeType is 1 → not fragment/document → TEXT_NODE? no → `node instanceof Element` → proceed. Fine.

Hmm, what if `node.textContent` on some element is huge? No.

Wait — maybe the hang isn't from my code. Let's consider: Chrome `--headless=new` + `--virtual-time-budget` can hang if the page keeps scheduling timers. KoliBri might start an animation/interval (e.g., the password visibility toggle? no). Or `KolAlert` with `_alert` → `setTimeout(..., 10000)` — that's fine, virtual time handles it.

But phase 2's success alert sets `_alert` → `setTimeout(10000)`. Virtual budget 20000. Fine.

Hmm — could `vibrateOnError` or a `requestAnimationFrame` loop (floating-ui tooltip) keep virtual time busy? Virtual time budget should still cap it.

Actually, there's a known issue: `--virtual-time-budget` + `--dump-dom` in newer Chrome headless can hang when the page uses `requestAnimationFrame` heavily because virtual time only advances when the compositor is idle.

The FIRST run worked though. What's different? The only changes are in `verify.tsx` (dump/pad/activePath) and Vite re-optimized deps.

Hmm, wait: "Re-optimizing dependencies because vite config has changed" — that happened at server start, before run 1. Then "page reload src/verify.tsx" twice.

Maybe the second run hit a Vite dependency re-optimization (full reload) at a bad time? The log only shows page reloads.

Let's try again — maybe transient. Use a shorter budget (8000) since my timers end at 9000... hmm, budget must exceed 9000.

Actually, let's reduce the schedule to fit within 8000ms: click 1500, snap1 2500, fill 3500, click 4500, snap2 6000, dump 7000. Budget 10000.

Also add `--run-all-compositor-stages-before-draw` which is implied.

Alternatively, avoid `--virtual-time-budget` entirely: use `--dump-dom` without a budget — it dumps when the load event fires (too early). Not useful.

Another approach: instead of timers driven by the page, drive it via... no CDP.

Let's just retry with a fresh profile and a modest budget; if it hangs again, I'll switch strategy.

Actually — maybe the issue is that Chrome headless now waits for the "virtual time budget" to elapse in real time when there are no pending tasks? No.

Hmm, one more thought: the first run took ~1-2 seconds? The tool returned quickly. 

Let's retry once.

Actually — could it be that `pkill -f "chrome-verify-profile"` matched my *current* shell? No.

Let's retry with a fresh profile.

**Tool: shell**

**Input:**
```json
{
  "command": "cd /private/var/folders/bf/t6vjyx615nx9tc_4xwrl1rhm0000gn/T/opencode && rm -rf /tmp/chrome-vfy3 && \"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome\" --headless=new --disable-gpu --no-sandbox --disable-dev-shm-usage --user-data-dir=/tmp/chrome-vfy3 --virtual-time-budget=12000 --dump-dom http://localhost:5199/verify.html > /tmp/verify-dom3.html 2>/tmp/chrome3.err; echo \"exit=$?\"; wc -c /tmp/verify-dom3.html; grep -ci VERIFY_DUMP /tmp/verify-dom3.html",
  "timeout": 90000
}
```

exit=0
   22875 /tmp/verify-dom3.html
1


---

## Assistant

_Thinking:_

It worked this time (probably transient contention). Let's extract.

22875 bytes — bigger because shadow content is now included.

**Tool: shell**

**Input:**
```json
{
  "command": "python3 - <<'PY'\nimport re, html\nraw = open('/tmp/verify-dom3.html', encoding='utf-8').read()\nm = re.search(r'<pre id=\"VERIFY_DUMP\">(.*?)</pre>', raw, re.S)\nif not m:\n    print(\"NO DUMP FOUND\"); print(raw[:3000])\nelse:\n    text = html.unescape(m.group(1))\n    open('/tmp/verify-dump.txt','w',encoding='utf-8').write(text)\n    print(\"chars:\", len(text))\n    print(text)\nPY",
  "timeout": 30000
}
```

chars: 14170

===== PHASE 1: empty submit (activeElement: kol-form[] > a[Please enter your username.]) =====
<body>
  <div id="root">
    <main>
      <h1>
        "KoliBri MCP Playground"
      <div class="login">
        <kol-card class="hydrated" _label="Sign in">
          <kol-card-wc class="hydrated">
            <article class="kol-card">
              <h2 id="card-heading-1c5b85" class="kol-headline kol-headline--h2 kol-card__header kol-headline--single">
                "Sign in"
              <div class="kol-card__content">
                <slot>
          <kol-form class="hydrated">
            <div class="kol-form__alert kol-alert kol-alert--type-error kol-alert--variant-card">
              <span class="visually-hidden">
                "Fehler"
              <i role="presentation" class="kol-icon kol-icon__icon kolicon-alert-error kol-alert__icon">
              <strong id="heading" class="kol-headline kol-headline--strong kol-alert__heading kol-alert__heading--h0 kol-headline--single">
                "Bitte korrigieren Sie folgende Fehler:"
              <div class="kol-alert__content" aria-describedby="heading">
                <nav aria-label="Fehlerliste">
                  <ul>
                    <li>
                      <kol-link-wc class="kol-form__link hydrated">
                        <div class="kol-link kol-link--inline">
                          <a class="kol-link__anchor" href="javascript:void(0);">
                            <span class="kol-span kol-link__text">
                              <span class="kol-span__container">
                                <span class="kol-span__label">
                                  "Please enter your username."
                                <span class="kol-span__slot">
                    <li>
                      <kol-link-wc class="kol-form__link hydrated">
                        <div class="kol-link kol-link--inline">
                          <a class="kol-link__anchor" href="javascript:void(0);">
                            <span class="kol-span kol-link__text">
                              <span class="kol-span__container">
                                <span class="kol-span__label">
                                  "Please enter your password."
                                <span class="kol-span__slot">
            <form class="kol-form">
              <p class="kol-form__mandatory-fields-hint">
                "Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben."
              <slot>
            <div class="login__fields">
              <kol-input-text id="login-username" class="hydrated" _label="Username" _touched="">
                <div class="kol-form-field kol-form-field--required kol-input-text text kol-form-field--touched kol-form-field--error kol-form-field--msg-type-error">
                  <label id="input-text-label-ce2b78" class="kol-form-field__label" for="input-text-ce2b78">
                    <span class="kol-span kol-form-field__label-text">
                      <span class="kol-span__container">
                        <span class="kol-span__label">
                          "Username"
                        <span class="kol-span__slot">
                          <slot>
                  <div class="kol-form-field__input">
                    <div class="kol-input-container kol-input-container--error">
                      <div class="kol-input-container__container">
                        <input id="input-text-ce2b78" type="text" class="kol-input kol-input--required kol-input--touched kol-input--error" aria-invalid="true" aria-describedby="input-text-msg-ce2b78 input-text-error-ce2b78">
                  <div id="input-text-msg-ce2b78" role="alert" class="kol-form-field__msg kol-alert kol-alert--type-error kol-alert--variant-msg">
                    <span class="visually-hidden">
                      "Fehler"
                    <i role="presentation" class="kol-icon kol-icon__icon kolicon-alert-error kol-alert__icon">
                    <div class="kol-alert__content">
                      "Please enter your username."
              <kol-input-password id="login-password" class="hydrated" _label="Password" _touched="">
                <div class="kol-form-field kol-form-field--required kol-input-password password kol-form-field--touched kol-form-field--error kol-form-field--msg-type-error">
                  <label id="input-password-label-1ccae4" class="kol-form-field__label" for="input-password-1ccae4">
                    <span class="kol-span kol-form-field__label-text">
                      <span class="kol-span__container">
                        <span class="kol-span__label">
                          "Password"
                        <span class="kol-span__slot">
                          <slot>
                  <div class="kol-form-field__input">
                    <div class="kol-input-container kol-input-container--error">
                      <div class="kol-input-container__adornment kol-input-container__adornment--start">
                      <div class="kol-input-container__container">
                        <input id="input-password-1ccae4" type="password" class="kol-input kol-input--required kol-input--touched kol-input--error" aria-invalid="true" aria-describedby="input-password-msg-1ccae4 input-password-error-1ccae4">
                      <div class="kol-input-container__adornment kol-input-container__adornment--end">
                        <kol-button-wc class="kol-input-password__password-toggle-button kol-input-container__smart-button hydrated">
                          <button type="button" class="kol-button kol-button--normal kol-button--standalone kol-button--hide-label" aria-label="einblenden">
                            <span class="kol-span kol-span--hide-label kol-button__text">
                              <span class="kol-span__container">
                                <i role="presentation" class="kol-icon kol-icon__icon kolicon-eye kol-span__icon kol-span__icon--left">
                                <span class="kol-span__slot">
                          <div class="kol-button__tooltip">
                            <div class="kol-tooltip__floating">
                              <div class="kol-tooltip__arrow">
                              <span id="" class="kol-span kol-tooltip__content">
                                <span class="kol-span__container">
                                  <span class="kol-span__label">
                                    "einblenden"
                                  <span class="kol-span__slot">
                  <div id="input-password-msg-1ccae4" role="alert" class="kol-form-field__msg kol-alert kol-alert--type-error kol-alert--variant-msg">
                    <span class="visually-hidden">
                      "Fehler"
                    <i role="presentation" class="kol-icon kol-icon__icon kolicon-alert-error kol-alert__icon">
                    <div class="kol-alert__content">
                      "Please enter your password."
            <div class="login__actions">
              <kol-button class="hydrated" _type="submit" _label="Sign in">
                <kol-button-wc class="hydrated">
                  <button type="submit" class="kol-button kol-button--primary kol-button--standalone">
                    <span class="kol-span kol-button__text">
                      <span class="kol-span__container">
                        <span class="kol-span__label">
                          "Sign in"
                        <span class="kol-span__slot">
                          <slot>
              <kol-button class="hydrated" _type="reset" _label="Reset form">
                <kol-button-wc class="hydrated">
                  <button type="reset" class="kol-button kol-button--normal kol-button--standalone">
                    <span class="kol-span kol-button__text">
                      <span class="kol-span__container">
                        <span class="kol-span__label">
                          "Reset form"
                        <span class="kol-span__slot">
                          <slot>



===== PHASE 2: valid submit (activeElement: body[KoliBri MCP Playground]) =====
<body>
  <div id="root">
    <main>
      <h1>
        "KoliBri MCP Playground"
      <div class="login">
        <kol-card class="hydrated" _label="Sign in">
          <kol-card-wc class="hydrated">
            <article class="kol-card">
              <h2 id="card-heading-1c5b85" class="kol-headline kol-headline--h2 kol-card__header kol-headline--single">
                "Sign in"
              <div class="kol-card__content">
                <slot>
          <kol-form class="hydrated">
            <form class="kol-form">
              <p class="kol-form__mandatory-fields-hint">
                "Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben."
              <slot>
            <kol-alert class="hydrated" _type="success" _label="Sign-in data is valid. This demo has no backend connection.">
              <kol-alert-wc class="hydrated">
                <div role="alert" class="kol-alert kol-alert--type-success kol-alert--variant-msg">
                  <span class="visually-hidden">
                    "Erfolg"
                  <i role="presentation" class="kol-icon kol-icon__icon kolicon-alert-success kol-alert__icon">
                  <strong id="heading" class="kol-headline kol-headline--strong kol-alert__heading kol-alert__heading--h0 kol-headline--single">
                    "Sign-in data is valid. This demo has no backend connection."
                  <div class="kol-alert__content" aria-describedby="heading">
                    <slot>
            <div class="login__fields">
              <kol-input-text id="login-username" class="hydrated" _label="Username" _touched="">
                <div class="kol-form-field kol-form-field--required kol-input-text text kol-form-field--touched has-value">
                  <label id="input-text-label-ce2b78" class="kol-form-field__label" for="input-text-ce2b78">
                    <span class="kol-span kol-form-field__label-text">
                      <span class="kol-span__container">
                        <span class="kol-span__label">
                          "Username"
                        <span class="kol-span__slot">
                          <slot>
                  <div class="kol-form-field__input">
                    <div class="kol-input-container">
                      <div class="kol-input-container__container">
                        <input id="input-text-ce2b78" type="text" class="kol-input kol-input--required kol-input--touched">
              <kol-input-password id="login-password" class="hydrated" _label="Password" _touched="">
                <div class="kol-form-field kol-form-field--required kol-input-password password kol-form-field--touched">
                  <label id="input-password-label-1ccae4" class="kol-form-field__label" for="input-password-1ccae4">
                    <span class="kol-span kol-form-field__label-text">
                      <span class="kol-span__container">
                        <span class="kol-span__label">
                          "Password"
                        <span class="kol-span__slot">
                          <slot>
                  <div class="kol-form-field__input">
                    <div class="kol-input-container">
                      <div class="kol-input-container__adornment kol-input-container__adornment--start">
                      <div class="kol-input-container__container">
                        <input id="input-password-1ccae4" type="password" class="kol-input kol-input--required kol-input--touched">
                      <div class="kol-input-container__adornment kol-input-container__adornment--end">
                        <kol-button-wc class="kol-input-password__password-toggle-button kol-input-container__smart-button hydrated">
                          <button type="button" class="kol-button kol-button--normal kol-button--standalone kol-button--hide-label" aria-label="einblenden">
                            <span class="kol-span kol-span--hide-label kol-button__text">
                              <span class="kol-span__container">
                                <i role="presentation" class="kol-icon kol-icon__icon kolicon-eye kol-span__icon kol-span__icon--left">
                                <span class="kol-span__slot">
                          <div class="kol-button__tooltip">
                            <div class="kol-tooltip__floating">
                              <div class="kol-tooltip__arrow">
                              <span id="" class="kol-span kol-tooltip__content">
                                <span class="kol-span__container">
                                  <span class="kol-span__label">
                                    "einblenden"
                                  <span class="kol-span__slot">
            <div class="login__actions">
              <kol-button class="hydrated" _type="submit" _label="Sign in">
                <kol-button-wc class="hydrated">
                  <button type="submit" class="kol-button kol-button--primary kol-button--standalone">
                    <span class="kol-span kol-button__text">
                      <span class="kol-span__container">
                        <span class="kol-span__label">
                          "Sign in"
                        <span class="kol-span__slot">
                          <slot>
              <kol-button class="hydrated" _type="reset" _label="Reset form">
                <kol-button-wc class="hydrated">
                  <button type="reset" class="kol-button kol-button--normal kol-button--standalone">
                    <span class="kol-span kol-button__text">
                      <span class="kol-span__container">
                        <span class="kol-span__label">
                          "Reset form"
                        <span class="kol-span__slot">
                          <slot>




---

## Assistant

_Thinking:_

We need to continue: read the full dump to verify shadow content, then clean up temp files, run final checks, and deliver the design write-up + summary.

Let me read the dump file fully.

**Tool: read**

**Input:**
```json
{
  "path": "/tmp/verify-dump.txt"
}
```

Read file /tmp/verify-dump.txt, lines 1-216
1: 
2: ===== PHASE 1: empty submit (activeElement: kol-form[] > a[Please enter your username.]) =====
3: <body>
4:   <div id="root">
5:     <main>
6:       <h1>
7:         "KoliBri MCP Playground"
8:       <div class="login">
9:         <kol-card class="hydrated" _label="Sign in">
10:           <kol-card-wc class="hydrated">
11:             <article class="kol-card">
12:               <h2 id="card-heading-1c5b85" class="kol-headline kol-headline--h2 kol-card__header kol-headline--single">
13:                 "Sign in"
14:               <div class="kol-card__content">
15:                 <slot>
16:           <kol-form class="hydrated">
17:             <div class="kol-form__alert kol-alert kol-alert--type-error kol-alert--variant-card">
18:               <span class="visually-hidden">
19:                 "Fehler"
20:               <i role="presentation" class="kol-icon kol-icon__icon kolicon-alert-error kol-alert__icon">
21:               <strong id="heading" class="kol-headline kol-headline--strong kol-alert__heading kol-alert__heading--h0 kol-headline--single">
22:                 "Bitte korrigieren Sie folgende Fehler:"
23:               <div class="kol-alert__content" aria-describedby="heading">
24:                 <nav aria-label="Fehlerliste">
25:                   <ul>
26:                     <li>
27:                       <kol-link-wc class="kol-form__link hydrated">
28:                         <div class="kol-link kol-link--inline">
29:                           <a class="kol-link__anchor" href="javascript:void(0);">
30:                             <span class="kol-span kol-link__text">
31:                               <span class="kol-span__container">
32:                                 <span class="kol-span__label">
33:                                   "Please enter your username."
34:                                 <span class="kol-span__slot">
35:                     <li>
36:                       <kol-link-wc class="kol-form__link hydrated">
37:                         <div class="kol-link kol-link--inline">
38:                           <a class="kol-link__anchor" href="javascript:void(0);">
39:                             <span class="kol-span kol-link__text">
40:                               <span class="kol-span__container">
41:                                 <span class="kol-span__label">
42:                                   "Please enter your password."
43:                                 <span class="kol-span__slot">
44:             <form class="kol-form">
45:               <p class="kol-form__mandatory-fields-hint">
46:                 "Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben."
47:               <slot>
48:             <div class="login__fields">
49:               <kol-input-text id="login-username" class="hydrated" _label="Username" _touched="">
50:                 <div class="kol-form-field kol-form-field--required kol-input-text text kol-form-field--touched kol-form-field--error kol-form-field--msg-type-error">
51:                   <label id="input-text-label-ce2b78" class="kol-form-field__label" for="input-text-ce2b78">
52:                     <span class="kol-span kol-form-field__label-text">
53:                       <span class="kol-span__container">
54:                         <span class="kol-span__label">
55:                           "Username"
56:                         <span class="kol-span__slot">
57:                           <slot>
58:                   <div class="kol-form-field__input">
59:                     <div class="kol-input-container kol-input-container--error">
60:                       <div class="kol-input-container__container">
61:                         <input id="input-text-ce2b78" type="text" class="kol-input kol-input--required kol-input--touched kol-input--error" aria-invalid="true" aria-describedby="input-text-msg-ce2b78 input-text-error-ce2b78">
62:                   <div id="input-text-msg-ce2b78" role="alert" class="kol-form-field__msg kol-alert kol-alert--type-error kol-alert--variant-msg">
63:                     <span class="visually-hidden">
64:                       "Fehler"
65:                     <i role="presentation" class="kol-icon kol-icon__icon kolicon-alert-error kol-alert__icon">
66:                     <div class="kol-alert__content">
67:                       "Please enter your username."
68:               <kol-input-password id="login-password" class="hydrated" _label="Password" _touched="">
69:                 <div class="kol-form-field kol-form-field--required kol-input-password password kol-form-field--touched kol-form-field--error kol-form-field--msg-type-error">
70:                   <label id="input-password-label-1ccae4" class="kol-form-field__label" for="input-password-1ccae4">
71:                     <span class="kol-span kol-form-field__label-text">
72:                       <span class="kol-span__container">
73:                         <span class="kol-span__label">
74:                           "Password"
75:                         <span class="kol-span__slot">
76:                           <slot>
77:                   <div class="kol-form-field__input">
78:                     <div class="kol-input-container kol-input-container--error">
79:                       <div class="kol-input-container__adornment kol-input-container__adornment--start">
80:                       <div class="kol-input-container__container">
81:                         <input id="input-password-1ccae4" type="password" class="kol-input kol-input--required kol-input--touched kol-input--error" aria-invalid="true" aria-describedby="input-password-msg-1ccae4 input-password-error-1ccae4">
82:                       <div class="kol-input-container__adornment kol-input-container__adornment--end">
83:                         <kol-button-wc class="kol-input-password__password-toggle-button kol-input-container__smart-button hydrated">
84:                           <button type="button" class="kol-button kol-button--normal kol-button--standalone kol-button--hide-label" aria-label="einblenden">
85:                             <span class="kol-span kol-span--hide-label kol-button__text">
86:                               <span class="kol-span__container">
87:                                 <i role="presentation" class="kol-icon kol-icon__icon kolicon-eye kol-span__icon kol-span__icon--left">
88:                                 <span class="kol-span__slot">
89:                           <div class="kol-button__tooltip">
90:                             <div class="kol-tooltip__floating">
91:                               <div class="kol-tooltip__arrow">
92:                               <span id="" class="kol-span kol-tooltip__content">
93:                                 <span class="kol-span__container">
94:                                   <span class="kol-span__label">
95:                                     "einblenden"
96:                                   <span class="kol-span__slot">
97:                   <div id="input-password-msg-1ccae4" role="alert" class="kol-form-field__msg kol-alert kol-alert--type-error kol-alert--variant-msg">
98:                     <span class="visually-hidden">
99:                       "Fehler"
100:                     <i role="presentation" class="kol-icon kol-icon__icon kolicon-alert-error kol-alert__icon">
101:                     <div class="kol-alert__content">
102:                       "Please enter your password."
103:             <div class="login__actions">
104:               <kol-button class="hydrated" _type="submit" _label="Sign in">
105:                 <kol-button-wc class="hydrated">
106:                   <button type="submit" class="kol-button kol-button--primary kol-button--standalone">
107:                     <span class="kol-span kol-button__text">
108:                       <span class="kol-span__container">
109:                         <span class="kol-span__label">
110:                           "Sign in"
111:                         <span class="kol-span__slot">
112:                           <slot>
113:               <kol-button class="hydrated" _type="reset" _label="Reset form">
114:                 <kol-button-wc class="hydrated">
115:                   <button type="reset" class="kol-button kol-button--normal kol-button--standalone">
116:                     <span class="kol-span kol-button__text">
117:                       <span class="kol-span__container">
118:                         <span class="kol-span__label">
119:                           "Reset form"
120:                         <span class="kol-span__slot">
121:                           <slot>
122: 
123: 
124: 
125: ===== PHASE 2: valid submit (activeElement: body[KoliBri MCP Playground]) =====
126: <body>
127:   <div id="root">
128:     <main>
129:       <h1>
130:         "KoliBri MCP Playground"
131:       <div class="login">
132:         <kol-card class="hydrated" _label="Sign in">
133:           <kol-card-wc class="hydrated">
134:             <article class="kol-card">
135:               <h2 id="card-heading-1c5b85" class="kol-headline kol-headline--h2 kol-card__header kol-headline--single">
136:                 "Sign in"
137:               <div class="kol-card__content">
138:                 <slot>
139:           <kol-form class="hydrated">
140:             <form class="kol-form">
141:               <p class="kol-form__mandatory-fields-hint">
142:                 "Formular-Felder, die mit einem Sternchen (*) gekennzeichnet sind, sind Pflichtangaben."
143:               <slot>
144:             <kol-alert class="hydrated" _type="success" _label="Sign-in data is valid. This demo has no backend connection.">
145:               <kol-alert-wc class="hydrated">
146:                 <div role="alert" class="kol-alert kol-alert--type-success kol-alert--variant-msg">
147:                   <span class="visually-hidden">
148:                     "Erfolg"
149:                   <i role="presentation" class="kol-icon kol-icon__icon kolicon-alert-success kol-alert__icon">
150:                   <strong id="heading" class="kol-headline kol-headline--strong kol-alert__heading kol-alert__heading--h0 kol-headline--single">
151:                     "Sign-in data is valid. This demo has no backend connection."
152:                   <div class="kol-alert__content" aria-describedby="heading">
153:                     <slot>
154:             <div class="login__fields">
155:               <kol-input-text id="login-username" class="hydrated" _label="Username" _touched="">
156:                 <div class="kol-form-field kol-form-field--required kol-input-text text kol-form-field--touched has-value">
157:                   <label id="input-text-label-ce2b78" class="kol-form-field__label" for="input-text-ce2b78">
158:                     <span class="kol-span kol-form-field__label-text">
159:                       <span class="kol-span__container">
160:                         <span class="kol-span__label">
161:                           "Username"
162:                         <span class="kol-span__slot">
163:                           <slot>
164:                   <div class="kol-form-field__input">
165:                     <div class="kol-input-container">
166:                       <div class="kol-input-container__container">
167:                         <input id="input-text-ce2b78" type="text" class="kol-input kol-input--required kol-input--touched">
168:               <kol-input-password id="login-password" class="hydrated" _label="Password" _touched="">
169:                 <div class="kol-form-field kol-form-field--required kol-input-password password kol-form-field--touched">
170:                   <label id="input-password-label-1ccae4" class="kol-form-field__label" for="input-password-1ccae4">
171:                     <span class="kol-span kol-form-field__label-text">
172:                       <span class="kol-span__container">
173:                         <span class="kol-span__label">
174:                           "Password"
175:                         <span class="kol-span__slot">
176:                           <slot>
177:                   <div class="kol-form-field__input">
178:                     <div class="kol-input-container">
179:                       <div class="kol-input-container__adornment kol-input-container__adornment--start">
180:                       <div class="kol-input-container__container">
181:                         <input id="input-password-1ccae4" type="password" class="kol-input kol-input--required kol-input--touched">
182:                       <div class="kol-input-container__adornment kol-input-container__adornment--end">
183:                         <kol-button-wc class="kol-input-password__password-toggle-button kol-input-container__smart-button hydrated">
184:                           <button type="button" class="kol-button kol-button--normal kol-button--standalone kol-button--hide-label" aria-label="einblenden">
185:                             <span class="kol-span kol-span--hide-label kol-button__text">
186:                               <span class="kol-span__container">
187:                                 <i role="presentation" class="kol-icon kol-icon__icon kolicon-eye kol-span__icon kol-span__icon--left">
188:                                 <span class="kol-span__slot">
189:                           <div class="kol-button__tooltip">
190:                             <div class="kol-tooltip__floating">
191:                               <div class="kol-tooltip__arrow">
192:                               <span id="" class="kol-span kol-tooltip__content">
193:                                 <span class="kol-span__container">
194:                                   <span class="kol-span__label">
195:                                     "einblenden"
196:                                   <span class="kol-span__slot">
197:             <div class="login__actions">
198:               <kol-button class="hydrated" _type="submit" _label="Sign in">
199:                 <kol-button-wc class="hydrated">
200:                   <button type="submit" class="kol-button kol-button--primary kol-button--standalone">
201:                     <span class="kol-span kol-button__text">
202:                       <span class="kol-span__container">
203:                         <span class="kol-span__label">
204:                           "Sign in"
205:                         <span class="kol-span__slot">
206:                           <slot>
207:               <kol-button class="hydrated" _type="reset" _label="Reset form">
208:                 <kol-button-wc class="hydrated">
209:                   <button type="reset" class="kol-button kol-button--normal kol-button--standalone">
210:                     <span class="kol-span kol-button__text">
211:                       <span class="kol-span__container">
212:                         <span class="kol-span__label">
213:                           "Reset form"
214:                         <span class="kol-span__slot">
215:                           <slot>
216: 

---

## Assistant

_Thinking:_

The verification succeeded fully:

Phase 1 (empty submit):
- Error list rendered inside `kol-form` shadow: `<div class="kol-form__alert ... kol-alert--type-error">` with `nav aria-label="Fehlerliste"` and two links with our messages.
- Focus moved to `kol-form > a[Please enter your username.]` ✓
- Per-field: `aria-invalid="true"`, `aria-describedby="input-text-msg-... input-text-error-..."`, `role="alert"` msg divs with messages ✓
- `<label for>` bound to input id ✓
- Password toggle button with aria-label ✓

Phase 2 (valid submit):
- Error list gone, field errors gone, `aria-invalid` removed, values present (`has-value` class) ✓
- Success `kol-alert` with `role="alert"` ✓

Note: locale is German (form hint, "Fehler", "einblenden") — i18n default. Not a blocker; worth noting.

Now cleanup: delete verify.html and src/verify.tsx, stop the vite server, run tsc + eslint + build.

Let's do that.

Both phases verified. Now let me clean up the temporary harness and run final checks.

**Tool: shell**

**Input:**
```json
{
  "command": "rm -f /Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/verify.html /Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/src/verify.tsx\npkill -f \"chrome-vfy\" 2>/dev/null\nrm -rf /tmp/chrome-vfy2 /tmp/chrome-vfy3 /tmp/chrome-verify-profile\nls /Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/src",
  "timeout": 30000
}
```

App.css
App.tsx
assets
index.css
main.tsx


**Tool: shell**

**Input:**
```json
{
  "command": "cd /Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground && npx tsc -b && echo \"TSC OK\" && npx eslint src && echo \"ESLint OK\" && npx vite build 2>&1 | tail -15",
  "timeout": 180000
}
```

TSC OK
ESLint OK
dist/assets/kol-input-checkbox.entry-WIUddR9Z.js                    28.53 kB │ gzip:     8.01 kB
dist/assets/kol-combobox.entry-DjlFryCb.js                          31.26 kB │ gzip:     8.65 kB
dist/assets/kol-table-stateless.entry-CUZcKbhE.js                   33.02 kB │ gzip:     6.64 kB
dist/assets/kol-single-select.entry-BOMXAYdW.js                     33.36 kB │ gzip:     9.17 kB
dist/assets/kol-table-stateful.entry-Di4ef_Bh.js                    48.30 kB │ gzip:    10.21 kB
dist/assets/index-C_ZKddLG-Ddu7Ni_n.js                              87.13 kB │ gzip:    31.64 kB
dist/assets/component-DepnuZGT-OmQF9r2g.js                         135.78 kB │ gzip:    55.42 kB
dist/assets/index-xo8XtxUo.js                                   13,367.77 kB │ gzip: 1,827.23 kB

✓ built in 1.21s
[plugin builtin:vite-reporter] 
(!) Some chunks are larger than 500 kB after minification. Consider:
- Using dynamic import() to code-split the application
- Use build.rolldownOptions.output.codeSplitting to improve chunking: https://rolldown.rs/reference/OutputOptions.codeSplitting
- Adjust chunk size limit for this warning via build.chunkSizeWarningLimit.


---

## Assistant

_Thinking:_

Everything passes. Now stop the vite background server.

Let's kill it via pkill on the vite command with our port.

**Tool: shell**

**Input:**
```json
{
  "command": "pkill -f \"vite --port 5199\" 2>/dev/null; sleep 1; curl -s -o /dev/null -w \"port 5199: %{http_code}\\n\" --max-time 3 http://localhost:5199/ || echo \"server stopped\"; git -C /Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground status --short",
  "timeout": 30000
}
```

port 5199: 000
server stopped
 M src/App.css
 M src/App.tsx


---

## Assistant

_Thinking:_

The dev server was killed as intended. Now I need to deliver the final response: the pre-implementation design write-up (the 5 required points), plus the implementation summary and verification results.

Let me read the final App.tsx to describe it accurately.

**Tool: read**

**Input:**
```json
{
  "path": "/Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/src/App.tsx"
}
```

Read file /Users/p.dijon.de.monteton/practice-folder/kolibri-mcp-playground/src/App.tsx, lines 1-209
1: import { useMemo, useRef, useState } from 'react'
2: import type { ErrorListPropType, MsgPropType } from '@public-ui/components'
3: import {
4:   KolAlert,
5:   KolButton,
6:   KolCard,
7:   KolForm,
8:   KolInputPassword,
9:   KolInputText,
10: } from '@public-ui/react-v19'
11: 
12: import './App.css'
13: 
14: /** Host element ids. They double as the focus targets for the form error list. */
15: const USERNAME_INPUT_ID = 'login-username'
16: const PASSWORD_INPUT_ID = 'login-password'
17: 
18: const FIELD_NAMES = ['username', 'password'] as const
19: 
20: type FieldName = (typeof FIELD_NAMES)[number]
21: type FieldValues = Record<FieldName, string>
22: type FieldTouched = Record<FieldName, boolean>
23: type FieldErrors = Partial<Record<FieldName, string>>
24: 
25: type Status = {
26:   id: number
27:   type: 'success'
28:   message: string
29: }
30: 
31: /**
32:  * A login form must only check presence, never password policy: the stored
33:  * account may legitimately be shorter than a "new password" rule allows.
34:  */
35: const VALIDATORS: Record<FieldName, (value: string) => string | undefined> = {
36:   username: (value) =>
37:     value.trim().length > 0 ? undefined : 'Please enter your username.',
38:   password: (value) =>
39:     value.length > 0 ? undefined : 'Please enter your password.',
40: }
41: 
42: const toText = (value: unknown): string =>
43:   typeof value === 'string' ? value : String(value ?? '')
44: 
45: function App() {
46:   const formRef = useRef<HTMLKolFormElement>(null)
47: 
48:   const [values, setValues] = useState<FieldValues>({
49:     username: '',
50:     password: '',
51:   })
52:   const [touched, setTouched] = useState<FieldTouched>({
53:     username: false,
54:     password: false,
55:   })
56:   const [errors, setErrors] = useState<FieldErrors>({})
57:   const [status, setStatus] = useState<Status | null>(null)
58: 
59:   const errorList = useMemo<ErrorListPropType[]>(() => {
60:     const list: ErrorListPropType[] = []
61:     if (errors.username) {
62:       list.push({ message: errors.username, selector: `#${USERNAME_INPUT_ID}` })
63:     }
64:     if (errors.password) {
65:       list.push({ message: errors.password, selector: `#${PASSWORD_INPUT_ID}` })
66:     }
67:     return list
68:   }, [errors])
69: 
70:   const handleInput =
71:     (name: FieldName) => (_event: Event, value: unknown) => {
72:       const nextValue = toText(value)
73:       setValues((previous) => ({ ...previous, [name]: nextValue }))
74:       // Never show an error while the user is still typing for the first time.
75:       if (touched[name]) {
76:         setErrors((previous) => ({
77:           ...previous,
78:           [name]: VALIDATORS[name](nextValue),
79:         }))
80:       }
81:       setStatus(null)
82:     }
83: 
84:   const handleBlur = (name: FieldName) => () => {
85:     setTouched((previous) =>
86:       previous[name] ? previous : { ...previous, [name]: true },
87:     )
88:     setErrors((previous) => {
89:       const nextError = VALIDATORS[name](values[name])
90:       return previous[name] === nextError
91:         ? previous
92:         : { ...previous, [name]: nextError }
93:     })
94:   }
95: 
96:   const handleSubmit = (event: Event) => {
97:     event.preventDefault()
98: 
99:     const nextErrors: FieldErrors = {}
100:     for (const name of FIELD_NAMES) {
101:       const nextError = VALIDATORS[name](values[name])
102:       if (nextError) {
103:         nextErrors[name] = nextError
104:       }
105:     }
106: 
107:     setTouched({ username: true, password: true })
108:     setErrors(nextErrors)
109:     setStatus(null)
110: 
111:     if (Object.keys(nextErrors).length > 0) {
112:       // Moves focus to the first link of the error summary rendered by KolForm.
113:       formRef.current?.focusErrorList()
114:       return
115:     }
116: 
117:     setStatus({
118:       id: Date.now(),
119:       type: 'success',
120:       message: 'Sign-in data is valid. This demo has no backend connection.',
121:     })
122:   }
123: 
124:   const handleReset = (event: Event) => {
125:     event.preventDefault()
126:     setValues({ username: '', password: '' })
127:     setTouched({ username: false, password: false })
128:     setErrors({})
129:     setStatus(null)
130:   }
131: 
132:   // KoliBri only renders `_msg` once `_touched` is true, so the two always
133:   // change together and no error flashes up before the user has typed.
134:   const usernameError = touched.username ? errors.username : undefined
135:   const passwordError = touched.password ? errors.password : undefined
136:   const usernameMsg: MsgPropType | undefined =
137:     usernameError !== undefined
138:       ? { _description: usernameError, _type: 'error' }
139:       : undefined
140:   const passwordMsg: MsgPropType | undefined =
141:     passwordError !== undefined
142:       ? { _description: passwordError, _type: 'error' }
143:       : undefined
144: 
145:   return (
146:     <main>
147:       <h1>KoliBri MCP Playground</h1>
148: 
149:       <div className="login">
150:         <KolCard _label="Sign in" _level={2}>
151:           <KolForm
152:             ref={formRef}
153:             _errorList={errorList}
154:             _on={{ onSubmit: handleSubmit, onReset: handleReset }}
155:           >
156:             {status && (
157:               <KolAlert
158:                 key={status.id}
159:                 _alert
160:                 _type={status.type}
161:                 _label={status.message}
162:               />
163:             )}
164: 
165:             <div className="login__fields">
166:               <KolInputText
167:                 id={USERNAME_INPUT_ID}
168:                 _label="Username"
169:                 _name="username"
170:                 _required
171:                 _autoComplete="username"
172:                 _value={values.username}
173:                 _touched={touched.username}
174:                 _msg={usernameMsg}
175:                 _on={{
176:                   onInput: handleInput('username'),
177:                   onBlur: handleBlur('username'),
178:                 }}
179:               />
180: 
181:               <KolInputPassword
182:                 id={PASSWORD_INPUT_ID}
183:                 _label="Password"
184:                 _name="password"
185:                 _required
186:                 _autoComplete="current-password"
187:                 _visibilityToggle
188:                 _value={values.password}
189:                 _touched={touched.password}
190:                 _msg={passwordMsg}
191:                 _on={{
192:                   onInput: handleInput('password'),
193:                   onBlur: handleBlur('password'),
194:                 }}
195:               />
196:             </div>
197: 
198:             <div className="login__actions">
199:               <KolButton _type="submit" _label="Sign in" _variant="primary" />
200:               <KolButton _type="reset" _label="Reset form" />
201:             </div>
202:           </KolForm>
203:         </KolCard>
204:       </div>
205:     </main>
206:   )
207: }
208: 
209: export default App

---

## Assistant

_Thinking:_

Now write the final response: the design write-up (5 points) + implementation + verification results.

Keep it organized and reasonably concise but complete since the user explicitly asked for documentation.

Implementation is complete and verified in a real browser. Here is the design write-up you asked for first, then what shipped.

---

## 1. Available / relevant KoliBri components

| Component | Role in the feature |
|---|---|
| `KolCard` | Grouped container with a heading (`_label`, `_level`) |
| `KolForm` | Real `<form noValidate>`, submit/reset propagation, `_errorList` summary |
| `KolInputText` | Username field (`_label`, `_required`, `_autoComplete`, `_msg`, `_touched`) |
| `KolInputPassword` | Password field + `_visibilityToggle` |
| `KolButton` | `_type="submit"` / `_type="reset"` |
| `KolAlert` | Form-level status with `role="alert"` (`_alert`, `_type`) |

Rejected as unsuitable: `KolInputEmail` (wrong input type), `KolDetails`/`KolAccordion` (no validation role), `KolMessage` (deprecated in favour of `KolAlert`).

## 2. Proposed structure

```
<main>
  <div class="login">
    <KolCard _label="Sign in" _level={2}>
      <KolForm ref _errorList={...} _on={{ onSubmit, onReset }}>
        <KolAlert _alert _type="success" />   ← only after a valid submit
        <KolInputText  id="login-username" … />
        <KolInputPassword id="login-password" … />
        <KolButton _type="submit" /><KolButton _type="reset" />
      </KolForm>
    </KolCard>
  </div>
</main>
```

Validation state (`values`, `touched`, `errors`, `status`) lives in React; KoliBri stays controlled via `_value` / `_touched` / `_msg`. Validation runs on blur, on input (only if already touched) and on submit. A login form checks *presence only* — enforcing a password-length policy on a sign-in form rejects legitimately short stored passwords, so that rule was deliberately left out.

## 3. Accessibility

- `_label` renders a `<label for>` bound to the inner `<input id>` → programmatic accessible name.
- `_required` sets `aria-required`, the required badge and KoliBri's mandatory-fields hint.
- `_msg` with `_type: "error"` → `aria-invalid="true"`, and `aria-describedby` includes the msg + error ids.
- Errors render only when `_touched === true`, so nothing flashes while the user is still typing.
- `showAsAlert()` turns the field message into `role="alert"` once the field is blurred → announced without moving the user.
- `KolForm._errorList` renders a `<nav aria-label="Fehlerliste">` summary; `focusErrorList()` moves focus to the first link → standard "error summary + focus" pattern.
- `_autoComplete="username"` / `"current-password"` for password-manager and autofill support.
- `_visibilityToggle` gives an accessible show/hide control with `aria-label` + tooltip.
- Success is announced through `KolAlert _alert` (`role="alert"`), remounted via `key` so each new status is inserted as a fresh live region.

## 4. API assumptions / uncertainties (all checked against source, then empirically)

- **`_msg` clears only via `undefined`.** `validateMsg` is wrapped in `objectObjectHandler`, which does call the callback for `undefined` — confirmed, errors disappear correctly after a valid submit.
- **`_errorList` runtime vs. types disagree.** The renderer (`render()` → `renderErrorList(this._errorList)`) reads the *raw* prop and expects `{ message, selector }`, but the `@Watch` validator `validateErrorList` only accepts strings/functions. Objects still render; only a dev-mode `console.debug` is logged. **Verified in the browser** — the summary and links render, and `focusErrorList()` focuses the first link.
- **React wrapper prop passing.** `_on`, `_msg`, `_errorList` are objects, so the wrapper skips them in `render()` and applies them as element *properties* in `componentDidUpdate`. They never reach the attributes; confirmed working.
- **`_touched` is mutated internally on blur.** KoliBri sets `host._touched = true` itself. Passing `_touched` from React each render would reset it, so React state owns it and `onBlur` keeps it in sync.
- **Submit path.** Native form association does not cross shadow boundaries, so KoliBri uses `propagateSubmitEventToForm` → `KolForm._on.onSubmit`. Fires once for `_type="submit"` and for Enter in an input. Double-invocation is harmless anyway (handler is idempotent state updates).
- **`focusErrorList()` timing.** It waits ~250 ms internally; calling it synchronously in the submit handler is safe because React commits and the wrapper sets `_errorList` well before then. Confirmed: focus landed on the first error link.
- **`ErrorListPropType` / `MsgPropType` are exported** from the package root (via `components.d`); `HTMLKolFormElement` is a *global* declared in `declare global`, so it must not be imported.
- **AutoComplete** accepts arbitrary non-empty strings, so `"username"` / `"current-password"` are valid.

## 5. Unavailable functionality → fallbacks

| Missing | Fallback used |
|---|---|
| No built-in client-side validation API | Plain React validators; KoliBri only *renders* the result (`_msg`/`_errorList`) |
| No async/submitting state on `KolForm` | Status handled by the React `status` state + `KolAlert` |
| No backend / auth | Success alert states explicitly that the demo has no backend |
| `KolButton.click()` is an empty no-op (`async click() { }`) | Use a native submit button inside `KolForm` (works via propagation) |
| Error summary has no built-in focus-return on success | Focus ends up on `body` after the list unmounts — acceptable here, but worth adding an explicit focus target in a real app |
| `ErrorListPropType` has no `_type` styling hook | Summary uses KoliBri's default error-card variant |

---

## What shipped

**`src/App.tsx`** — controlled login form as described above (209 lines).
**`src/App.css`** — appended `.login`, `.login__fields`, `.login__actions`, `.login kol-alert`; also added a comment marking the pre-existing Vite template rules as inert leftovers (App.css was previously not imported).

## Verification (headless Chrome against the Vite dev server)

I built a temporary harness (`verify.html` + `src/verify.tsx`) that rendered `App`, submitted the empty form, dumped shadow-DOM state, then filled both fields and submitted again — both files deleted afterwards.

**Phase 1 — empty submit:**
- Error summary rendered inside `kol-form` shadow DOM: `nav aria-label="Fehlerliste"` → two links with *"Please enter your username."* / *"Please enter your password."*
- `document.activeElement` chain: `kol-form > a[Please enter your username.]` → **focus management works**
- Both inputs: `aria-invalid="true"`, `aria-describedby="input-text-msg-… input-text-error-…"`
- Both msgs: `role="alert"` with the correct text; `<label for="input-text-ce2b78">` bound to the input
- No status alert present

**Phase 2 — valid submit:**
- Error summary gone, `aria-invalid` removed, `has-value` class present on username, values retained
- `kol-alert` with `role="alert"` → *"Sign-in data is valid. This demo has no backend connection."*

**Checks:** `npx tsc -b` ✅ · `npx eslint src` ✅ · `npx vite build` ✅ (chunk-size warning is pre-existing, from KoliBri's bundle). Only `src/App.tsx` and `src/App.css` are modified.

**One observation, not fixed:** KoliBri's i18n renders in German by default (*"Bitte korrigieren Sie folgende Fehler:"*, the mandatory-fields hint, the password-toggle `aria-label`). If you want English, that needs `setLocale('en')` after `register()` in `src/main.tsx` — say the word and I'll add it.
