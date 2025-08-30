// To parse this data:
//
//   import { Convert, Ldtk } from "./file";
//
//   const ldtk = Convert.toLdtk(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Ldtk {
    description:  string;
    title:        string;
    $schema:      string;
    $ref:         string;
    version:      string;
    LdtkJsonRoot: LdtkJSONRoot;
    otherTypes:   OtherTypes;
}

export interface LdtkJSONRoot {
    description: string;
    title:       string;
    required:    string[];
    properties:  LdtkJSONRootProperties;
    type:        FORCEDREFSType[];
}

export interface LdtkJSONRootProperties {
    backupLimit:         AppBuildID;
    defaultEntityWidth:  AppBuildID;
    backupOnSave:        AppBuildID;
    worldGridWidth:      AppBuildID;
    iid:                 AppBuildID;
    defaultLevelBgColor: AppBuildID;
    bgColor:             AppBuildID;
    worlds:              CustomCommands;
    toc:                 CustomCommands;
    nextUid:             AppBuildID;
    imageExportMode:     IdentifierStyle;
    identifierStyle:     IdentifierStyle;
    defaultPivotY:       AppBuildID;
    dummyWorldIid:       AppBuildID;
    customCommands:      CustomCommands;
    worldGridHeight:     AppBuildID;
    appBuildId:          AppBuildID;
    defaultGridSize:     AppBuildID;
    worldLayout:         WorldLayout;
    flags:               Flags;
    levelNamePattern:    AppBuildID;
    exportPng:           AppBuildID;
    defaultLevelWidth:   AppBuildID;
    pngFilePattern:      AppBuildID;
    __FORCED_REFS:       ForcedRefs;
    exportTiled:         AppBuildID;
    defs:                Defs;
    levels:              CustomCommands;
    jsonVersion:         AppBuildID;
    defaultEntityHeight: AppBuildID;
    defaultPivotX:       AppBuildID;
    defaultLevelHeight:  AppBuildID;
    simplifiedExport:    AppBuildID;
    externalLevels:      AppBuildID;
    tutorialDesc:        AppBuildID;
    minifyJson:          AppBuildID;
    exportLevelBg:       AppBuildID;
    backupRelPath:       AppBuildID;
}

export interface ForcedRefs {
    description: string;
    properties:  { [key: string]: ItemsValue };
    type:        FORCEDREFSType[];
}

export interface ItemsValue {
    $ref: string;
}

export enum FORCEDREFSType {
    Boolean = "boolean",
    Integer = "integer",
    Null = "null",
    Number = "number",
    Object = "object",
    String = "string",
}

export interface AppBuildID {
    description: string;
    type:        FORCEDREFSType[];
}

export interface CustomCommands {
    description: string;
    items:       ItemsValue;
    type:        CustomCommandsType[];
}

export enum CustomCommandsType {
    Array = "array",
    Null = "null",
}

export interface Defs {
    description: string;
    $ref:        string;
}

export interface Flags {
    description: string;
    items:       FlagsItems;
    type:        CustomCommandsType[];
}

export interface FlagsItems {
    enum: string[];
}

export interface IdentifierStyle {
    description: string;
    enum:        string[];
}

export interface WorldLayout {
    description: string;
    enum:        Array<null | string>;
}

export interface OtherTypes {
    TilesetRect:          TilesetRect;
    FieldInstance:        FieldInstance;
    EntityInstance:       EntityInstance;
    Definitions:          Definitions;
    EnumTagValue:         EnumTagValue;
    AutoRuleDef:          AutoRuleDef;
    FieldDef:             FieldDef;
    CustomCommand:        CustomCommand;
    EntityDef:            EntityDef;
    AutoLayerRuleGroup:   AutoLayerRuleGroup;
    IntGridValueGroupDef: IntGridValueGroupDef;
    IntGridValueInstance: IntGridValueInstance;
    TocInstanceData:      TocInstanceData;
    NeighbourLevel:       NeighbourLevel;
    LayerInstance:        LayerInstance;
    World:                World;
    EntityReferenceInfos: EntityReferenceInfos;
    TileCustomMetadata:   TileCustomMetadata;
    TilesetDef:           TilesetDef;
    EnumDefValues:        EnumDefValues;
    Tile:                 Tile;
    LayerDef:             LayerDef;
    LevelBgPosInfos:      LevelBgPosInfos;
    Level:                Level;
    TableOfContentEntry:  TableOfContentEntry;
    EnumDef:              EnumDef;
    GridPoint:            GridPoint;
    IntGridValueDef:      IntGridValueDef;
}

export interface AutoLayerRuleGroup {
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           AutoLayerRuleGroupProperties;
    type:                 FORCEDREFSType[];
}

export interface AutoLayerRuleGroupProperties {
    name:                 AppBuildID;
    collapsed:            AppBuildID;
    biomeRequirementMode: AppBuildID;
    color:                AppBuildID;
    isOptional:           AppBuildID;
    icon:                 Icon;
    usesWizard:           AppBuildID;
    uid:                  AppBuildID;
    requiredBiomeValues:  RequiredBiomeValues;
    active:               AppBuildID;
    rules:                CustomCommands;
}

export interface Icon {
    description: string;
    oneOf:       OneOf[];
}

export interface OneOf {
    type?: FORCEDREFSType[];
    $ref?: string;
}

export interface RequiredBiomeValues {
    description: string;
    items:       RequiredBiomeValuesItems;
    type:        CustomCommandsType[];
}

export interface RequiredBiomeValuesItems {
    type: FORCEDREFSType[];
}

export interface AutoRuleDef {
    description:          string;
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           AutoRuleDefProperties;
    type:                 FORCEDREFSType[];
}

export interface AutoRuleDefProperties {
    flipX:            AppBuildID;
    pivotX:           AppBuildID;
    perlinActive:     AppBuildID;
    tileRectsIds:     TileRectsIDS;
    perlinScale:      AppBuildID;
    outOfBoundsValue: AppBuildID;
    pattern:          RequiredBiomeValues;
    tileRandomXMin:   AppBuildID;
    checker:          IdentifierStyle;
    perlinOctaves:    AppBuildID;
    tileIds:          RequiredBiomeValues;
    alpha:            AppBuildID;
    tileXOffset:      AppBuildID;
    invalidated:      AppBuildID;
    xModulo:          AppBuildID;
    size:             AppBuildID;
    chance:           AppBuildID;
    breakOnMatch:     AppBuildID;
    tileYOffset:      AppBuildID;
    uid:              AppBuildID;
    perlinSeed:       AppBuildID;
    yOffset:          AppBuildID;
    tileRandomYMax:   AppBuildID;
    tileRandomYMin:   AppBuildID;
    tileMode:         IdentifierStyle;
    flipY:            AppBuildID;
    tileRandomXMax:   AppBuildID;
    pivotY:           AppBuildID;
    yModulo:          AppBuildID;
    active:           AppBuildID;
    xOffset:          AppBuildID;
}

export interface TileRectsIDS {
    description: string;
    items:       TileRectsIDSItems;
    type:        CustomCommandsType[];
}

export interface TileRectsIDSItems {
    items: RequiredBiomeValuesItems;
    type:  CustomCommandsType[];
}

export interface CustomCommand {
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           CustomCommandProperties;
    type:                 FORCEDREFSType[];
}

export interface CustomCommandProperties {
    when:    IdentifierStyle;
    command: AppBuildID;
}

export interface Definitions {
    description:          string;
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           DefinitionsProperties;
    type:                 FORCEDREFSType[];
}

export interface DefinitionsProperties {
    tilesets:      CustomCommands;
    layers:        CustomCommands;
    levelFields:   CustomCommands;
    enums:         CustomCommands;
    entities:      CustomCommands;
    externalEnums: CustomCommands;
}

export interface EntityDef {
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           EntityDefProperties;
    type:                 FORCEDREFSType[];
}

export interface EntityDefProperties {
    tileId:           AppBuildID;
    showName:         AppBuildID;
    tilesetId:        AppBuildID;
    maxHeight:        AppBuildID;
    limitScope:       IdentifierStyle;
    pivotX:           AppBuildID;
    maxCount:         AppBuildID;
    allowOutOfBounds: AppBuildID;
    hollow:           AppBuildID;
    minHeight:        AppBuildID;
    keepAspectRatio:  AppBuildID;
    color:            AppBuildID;
    minWidth:         AppBuildID;
    tileRect:         Icon;
    doc:              AppBuildID;
    fieldDefs:        CustomCommands;
    tileRenderMode:   IdentifierStyle;
    limitBehavior:    IdentifierStyle;
    tileOpacity:      AppBuildID;
    nineSliceBorders: RequiredBiomeValues;
    resizableX:       AppBuildID;
    uiTileRect:       Icon;
    uid:              AppBuildID;
    lineOpacity:      AppBuildID;
    maxWidth:         AppBuildID;
    resizableY:       AppBuildID;
    exportToToc:      AppBuildID;
    fillOpacity:      AppBuildID;
    height:           AppBuildID;
    identifier:       AppBuildID;
    pivotY:           AppBuildID;
    renderMode:       IdentifierStyle;
    tags:             RequiredBiomeValues;
    width:            AppBuildID;
}

export interface EntityInstance {
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           EntityInstanceProperties;
    type:                 FORCEDREFSType[];
}

export interface EntityInstanceProperties {
    iid:            AppBuildID;
    defUid:         AppBuildID;
    __identifier:   AppBuildID;
    __tile:         Icon;
    px:             RequiredBiomeValues;
    __worldX:       AppBuildID;
    __worldY:       AppBuildID;
    __smartColor:   AppBuildID;
    __grid:         RequiredBiomeValues;
    __pivot:        RequiredBiomeValues;
    fieldInstances: CustomCommands;
    height:         AppBuildID;
    __tags:         RequiredBiomeValues;
    width:          AppBuildID;
}

export interface EntityReferenceInfos {
    description:          string;
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           EntityReferenceInfosProperties;
    type:                 FORCEDREFSType[];
}

export interface EntityReferenceInfosProperties {
    worldIid:  AppBuildID;
    entityIid: AppBuildID;
    layerIid:  AppBuildID;
    levelIid:  AppBuildID;
}

export interface EnumDef {
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           EnumDefProperties;
    type:                 FORCEDREFSType[];
}

export interface EnumDefProperties {
    externalFileChecksum: AppBuildID;
    externalRelPath:      AppBuildID;
    uid:                  AppBuildID;
    values:               CustomCommands;
    iconTilesetUid:       AppBuildID;
    identifier:           AppBuildID;
    tags:                 RequiredBiomeValues;
}

export interface EnumDefValues {
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           EnumDefValuesProperties;
    type:                 FORCEDREFSType[];
}

export interface EnumDefValuesProperties {
    tileId:        AppBuildID;
    color:         AppBuildID;
    tileRect:      Icon;
    id:            AppBuildID;
    __tileSrcRect: RequiredBiomeValues;
}

export interface EnumTagValue {
    description:          string;
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           EnumTagValueProperties;
    type:                 FORCEDREFSType[];
}

export interface EnumTagValueProperties {
    tileIds:     RequiredBiomeValues;
    enumValueId: AppBuildID;
}

export interface FieldDef {
    description:          string;
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           FieldDefProperties;
    type:                 FORCEDREFSType[];
}

export interface FieldDefProperties {
    acceptFileTypes:      RequiredBiomeValues;
    editorDisplayScale:   AppBuildID;
    searchable:           AppBuildID;
    useForSmartColor:     AppBuildID;
    editorShowInWorld:    AppBuildID;
    allowedRefs:          IdentifierStyle;
    editorAlwaysShow:     AppBuildID;
    arrayMinLength:       AppBuildID;
    editorTextSuffix:     AppBuildID;
    min:                  AppBuildID;
    __type:               AppBuildID;
    editorDisplayMode:    IdentifierStyle;
    editorDisplayColor:   AppBuildID;
    canBeNull:            AppBuildID;
    autoChainRef:         AppBuildID;
    doc:                  AppBuildID;
    allowedRefsEntityUid: AppBuildID;
    tilesetUid:           AppBuildID;
    allowedRefTags:       RequiredBiomeValues;
    symmetricalRef:       AppBuildID;
    uid:                  AppBuildID;
    editorTextPrefix:     AppBuildID;
    isArray:              AppBuildID;
    exportToToc:          AppBuildID;
    editorDisplayPos:     IdentifierStyle;
    textLanguageMode:     WorldLayout;
    max:                  AppBuildID;
    allowOutOfLevelRef:   AppBuildID;
    editorCutLongValues:  AppBuildID;
    defaultOverride:      DefaultOverride;
    editorLinkStyle:      IdentifierStyle;
    regex:                AppBuildID;
    type:                 AppBuildID;
    identifier:           AppBuildID;
    arrayMaxLength:       AppBuildID;
}

export interface DefaultOverride {
    description: string;
}

export interface FieldInstance {
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           FieldInstanceProperties;
    type:                 FORCEDREFSType[];
}

export interface FieldInstanceProperties {
    __type:           AppBuildID;
    defUid:           AppBuildID;
    __identifier:     AppBuildID;
    __tile:           Icon;
    realEditorValues: RealEditorValues;
    __value:          DefaultOverride;
}

export interface RealEditorValues {
    description: string;
    items:       RealEditorValuesItems;
    type:        CustomCommandsType[];
}

export interface RealEditorValuesItems {
}

export interface GridPoint {
    description:          string;
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           GridPointProperties;
    type:                 FORCEDREFSType[];
}

export interface GridPointProperties {
    cy: AppBuildID;
    cx: AppBuildID;
}

export interface IntGridValueDef {
    description:          string;
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           IntGridValueDefProperties;
    type:                 FORCEDREFSType[];
}

export interface IntGridValueDefProperties {
    tile:       Icon;
    color:      AppBuildID;
    identifier: AppBuildID;
    value:      AppBuildID;
    groupUid:   AppBuildID;
}

export interface IntGridValueGroupDef {
    description:          string;
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           IntGridValueGroupDefProperties;
    type:                 FORCEDREFSType[];
}

export interface IntGridValueGroupDefProperties {
    color:      AppBuildID;
    uid:        AppBuildID;
    identifier: AppBuildID;
}

export interface IntGridValueInstance {
    description:          string;
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           IntGridValueInstanceProperties;
    type:                 FORCEDREFSType[];
}

export interface IntGridValueInstanceProperties {
    v:       AppBuildID;
    coordId: AppBuildID;
}

export interface LayerDef {
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           LayerDefProperties;
    type:                 FORCEDREFSType[];
}

export interface LayerDefProperties {
    pxOffsetX:                      AppBuildID;
    tilePivotX:                     AppBuildID;
    uiFilterTags:                   RequiredBiomeValues;
    displayOpacity:                 AppBuildID;
    parallaxFactorY:                AppBuildID;
    hideInList:                     AppBuildID;
    __type:                         AppBuildID;
    guideGridHei:                   AppBuildID;
    uiColor:                        AppBuildID;
    doc:                            AppBuildID;
    tilesetDefUid:                  AppBuildID;
    canSelectWhenInactive:          AppBuildID;
    useAsyncRender:                 AppBuildID;
    autoSourceLayerDefUid:          AppBuildID;
    autoTilesetDefUid:              AppBuildID;
    parallaxScaling:                AppBuildID;
    renderInWorldView:              AppBuildID;
    intGridValuesGroups:            CustomCommands;
    inactiveOpacity:                AppBuildID;
    uid:                            AppBuildID;
    excludedTags:                   RequiredBiomeValues;
    hideFieldsWhenInactive:         AppBuildID;
    intGridValues:                  CustomCommands;
    autoRuleGroups:                 CustomCommands;
    type:                           IdentifierStyle;
    identifier:                     AppBuildID;
    guideGridWid:                   AppBuildID;
    requiredTags:                   RequiredBiomeValues;
    pxOffsetY:                      AppBuildID;
    tilePivotY:                     AppBuildID;
    biomeFieldUid:                  AppBuildID;
    gridSize:                       AppBuildID;
    parallaxFactorX:                AppBuildID;
    autoTilesKilledByOtherLayerUid: AppBuildID;
}

export interface LayerInstance {
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           LayerInstanceProperties;
    type:                 FORCEDREFSType[];
}

export interface LayerInstanceProperties {
    __cHei:             AppBuildID;
    pxOffsetX:          AppBuildID;
    __tilesetRelPath:   AppBuildID;
    iid:                AppBuildID;
    levelId:            AppBuildID;
    __type:             AppBuildID;
    autoLayerTiles:     CustomCommands;
    optionalRules:      RequiredBiomeValues;
    __identifier:       AppBuildID;
    __gridSize:         AppBuildID;
    __pxTotalOffsetY:   AppBuildID;
    intGridCsv:         RequiredBiomeValues;
    overrideTilesetUid: AppBuildID;
    visible:            AppBuildID;
    entityInstances:    CustomCommands;
    __opacity:          AppBuildID;
    seed:               AppBuildID;
    layerDefUid:        AppBuildID;
    __pxTotalOffsetX:   AppBuildID;
    __cWid:             AppBuildID;
    pxOffsetY:          AppBuildID;
    __tilesetDefUid:    AppBuildID;
    gridTiles:          CustomCommands;
    intGrid:            CustomCommands;
}

export interface Level {
    description:          string;
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           LevelProperties;
    type:                 FORCEDREFSType[];
}

export interface LevelProperties {
    __neighbours:      CustomCommands;
    __bgColor:         AppBuildID;
    worldX:            AppBuildID;
    externalRelPath:   AppBuildID;
    useAutoIdentifier: AppBuildID;
    iid:               AppBuildID;
    bgColor:           AppBuildID;
    bgPos:             WorldLayout;
    pxHei:             AppBuildID;
    worldY:            AppBuildID;
    __bgPos:           Icon;
    uid:               AppBuildID;
    __smartColor:      AppBuildID;
    fieldInstances:    CustomCommands;
    pxWid:             AppBuildID;
    identifier:        AppBuildID;
    bgPivotY:          AppBuildID;
    bgPivotX:          AppBuildID;
    layerInstances:    CustomCommands;
    bgRelPath:         AppBuildID;
    worldDepth:        AppBuildID;
}

export interface LevelBgPosInfos {
    description:          string;
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           LevelBgPosInfosProperties;
    type:                 FORCEDREFSType[];
}

export interface LevelBgPosInfosProperties {
    cropRect:  RequiredBiomeValues;
    scale:     RequiredBiomeValues;
    topLeftPx: RequiredBiomeValues;
}

export interface NeighbourLevel {
    description:          string;
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           NeighbourLevelProperties;
    type:                 FORCEDREFSType[];
}

export interface NeighbourLevelProperties {
    levelIid: AppBuildID;
    levelUid: AppBuildID;
    dir:      AppBuildID;
}

export interface TableOfContentEntry {
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           TableOfContentEntryProperties;
    type:                 FORCEDREFSType[];
}

export interface TableOfContentEntryProperties {
    identifier:    AppBuildID;
    instancesData: CustomCommands;
    instances:     CustomCommands;
}

export interface Tile {
    description:          string;
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           TileProperties;
    type:                 FORCEDREFSType[];
}

export interface TileProperties {
    t:   AppBuildID;
    d:   RequiredBiomeValues;
    px:  RequiredBiomeValues;
    a:   AppBuildID;
    f:   AppBuildID;
    src: RequiredBiomeValues;
}

export interface TileCustomMetadata {
    description:          string;
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           TileCustomMetadataProperties;
    type:                 FORCEDREFSType[];
}

export interface TileCustomMetadataProperties {
    tileId: AppBuildID;
    data:   AppBuildID;
}

export interface TilesetDef {
    description:          string;
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           TilesetDefProperties;
    type:                 FORCEDREFSType[];
}

export interface TilesetDefProperties {
    cachedPixelData:   AppBuildID;
    __cHei:            AppBuildID;
    pxHei:             AppBuildID;
    customData:        CustomCommands;
    tagsSourceEnumUid: AppBuildID;
    uid:               AppBuildID;
    padding:           AppBuildID;
    enumTags:          CustomCommands;
    pxWid:             AppBuildID;
    __cWid:            AppBuildID;
    spacing:           AppBuildID;
    identifier:        AppBuildID;
    savedSelections:   RequiredBiomeValues;
    tags:              RequiredBiomeValues;
    embedAtlas:        WorldLayout;
    relPath:           AppBuildID;
    tileGridSize:      AppBuildID;
}

export interface TilesetRect {
    description:          string;
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           TilesetRectProperties;
    type:                 FORCEDREFSType[];
}

export interface TilesetRectProperties {
    tilesetUid: AppBuildID;
    h:          AppBuildID;
    x:          AppBuildID;
    y:          AppBuildID;
    w:          AppBuildID;
}

export interface TocInstanceData {
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           TocInstanceDataProperties;
    type:                 FORCEDREFSType[];
}

export interface TocInstanceDataProperties {
    worldX: AppBuildID;
    widPx:  AppBuildID;
    worldY: AppBuildID;
    heiPx:  AppBuildID;
    fields: DefaultOverride;
    iids:   Defs;
}

export interface World {
    description:          string;
    title:                string;
    required:             string[];
    additionalProperties: boolean;
    properties:           WorldProperties;
    type:                 FORCEDREFSType[];
}

export interface WorldProperties {
    worldGridWidth:     AppBuildID;
    iid:                AppBuildID;
    worldGridHeight:    AppBuildID;
    worldLayout:        WorldLayout;
    defaultLevelWidth:  AppBuildID;
    levels:             CustomCommands;
    defaultLevelHeight: AppBuildID;
    identifier:         AppBuildID;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
    public static toLdtk(json: string): Ldtk {
        return cast(JSON.parse(json), r("Ldtk"));
    }

    public static ldtkToJson(value: Ldtk): string {
        return JSON.stringify(uncast(value, r("Ldtk")), null, 2);
    }
}

function invalidValue(typ: any, val: any, key: any, parent: any = ''): never {
    const prettyTyp = prettyTypeName(typ);
    const parentText = parent ? ` on ${parent}` : '';
    const keyText = key ? ` for key "${key}"` : '';
    throw Error(`Invalid value${keyText}${parentText}. Expected ${prettyTyp} but got ${JSON.stringify(val)}`);
}

function prettyTypeName(typ: any): string {
    if (Array.isArray(typ)) {
        if (typ.length === 2 && typ[0] === undefined) {
            return `an optional ${prettyTypeName(typ[1])}`;
        } else {
            return `one of [${typ.map(a => { return prettyTypeName(a); }).join(", ")}]`;
        }
    } else if (typeof typ === "object" && typ.literal !== undefined) {
        return typ.literal;
    } else {
        return typeof typ;
    }
}

function jsonToJSProps(typ: any): any {
    if (typ.jsonToJS === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.json] = { key: p.js, typ: p.typ });
        typ.jsonToJS = map;
    }
    return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
    if (typ.jsToJSON === undefined) {
        const map: any = {};
        typ.props.forEach((p: any) => map[p.js] = { key: p.json, typ: p.typ });
        typ.jsToJSON = map;
    }
    return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = '', parent: any = ''): any {
    function transformPrimitive(typ: string, val: any): any {
        if (typeof typ === typeof val) return val;
        return invalidValue(typ, val, key, parent);
    }

    function transformUnion(typs: any[], val: any): any {
        // val must validate against one typ in typs
        const l = typs.length;
        for (let i = 0; i < l; i++) {
            const typ = typs[i];
            try {
                return transform(val, typ, getProps);
            } catch (_) {}
        }
        return invalidValue(typs, val, key, parent);
    }

    function transformEnum(cases: string[], val: any): any {
        if (cases.indexOf(val) !== -1) return val;
        return invalidValue(cases.map(a => { return l(a); }), val, key, parent);
    }

    function transformArray(typ: any, val: any): any {
        // val must be an array with no invalid elements
        if (!Array.isArray(val)) return invalidValue(l("array"), val, key, parent);
        return val.map(el => transform(el, typ, getProps));
    }

    function transformDate(val: any): any {
        if (val === null) {
            return null;
        }
        const d = new Date(val);
        if (isNaN(d.valueOf())) {
            return invalidValue(l("Date"), val, key, parent);
        }
        return d;
    }

    function transformObject(props: { [k: string]: any }, additional: any, val: any): any {
        if (val === null || typeof val !== "object" || Array.isArray(val)) {
            return invalidValue(l(ref || "object"), val, key, parent);
        }
        const result: any = {};
        Object.getOwnPropertyNames(props).forEach(key => {
            const prop = props[key];
            const v = Object.prototype.hasOwnProperty.call(val, key) ? val[key] : undefined;
            result[prop.key] = transform(v, prop.typ, getProps, key, ref);
        });
        Object.getOwnPropertyNames(val).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(props, key)) {
                result[key] = transform(val[key], additional, getProps, key, ref);
            }
        });
        return result;
    }

    if (typ === "any") return val;
    if (typ === null) {
        if (val === null) return val;
        return invalidValue(typ, val, key, parent);
    }
    if (typ === false) return invalidValue(typ, val, key, parent);
    let ref: any = undefined;
    while (typeof typ === "object" && typ.ref !== undefined) {
        ref = typ.ref;
        typ = typeMap[typ.ref];
    }
    if (Array.isArray(typ)) return transformEnum(typ, val);
    if (typeof typ === "object") {
        return typ.hasOwnProperty("unionMembers") ? transformUnion(typ.unionMembers, val)
            : typ.hasOwnProperty("arrayItems")    ? transformArray(typ.arrayItems, val)
            : typ.hasOwnProperty("props")         ? transformObject(getProps(typ), typ.additional, val)
            : invalidValue(typ, val, key, parent);
    }
    // Numbers can be parsed by Date but shouldn't be.
    if (typ === Date && typeof val !== "number") return transformDate(val);
    return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
    return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
    return transform(val, typ, jsToJSONProps);
}

function l(typ: any) {
    return { literal: typ };
}

function a(typ: any) {
    return { arrayItems: typ };
}

function u(...typs: any[]) {
    return { unionMembers: typs };
}

function o(props: any[], additional: any) {
    return { props, additional };
}

function m(additional: any) {
    return { props: [], additional };
}

function r(name: string) {
    return { ref: name };
}

const typeMap: any = {
    "Ldtk": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "$schema", js: "$schema", typ: "" },
        { json: "$ref", js: "$ref", typ: "" },
        { json: "version", js: "version", typ: "" },
        { json: "LdtkJsonRoot", js: "LdtkJsonRoot", typ: r("LdtkJSONRoot") },
        { json: "otherTypes", js: "otherTypes", typ: r("OtherTypes") },
    ], false),
    "LdtkJSONRoot": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "properties", js: "properties", typ: r("LdtkJSONRootProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "LdtkJSONRootProperties": o([
        { json: "backupLimit", js: "backupLimit", typ: r("AppBuildID") },
        { json: "defaultEntityWidth", js: "defaultEntityWidth", typ: r("AppBuildID") },
        { json: "backupOnSave", js: "backupOnSave", typ: r("AppBuildID") },
        { json: "worldGridWidth", js: "worldGridWidth", typ: r("AppBuildID") },
        { json: "iid", js: "iid", typ: r("AppBuildID") },
        { json: "defaultLevelBgColor", js: "defaultLevelBgColor", typ: r("AppBuildID") },
        { json: "bgColor", js: "bgColor", typ: r("AppBuildID") },
        { json: "worlds", js: "worlds", typ: r("CustomCommands") },
        { json: "toc", js: "toc", typ: r("CustomCommands") },
        { json: "nextUid", js: "nextUid", typ: r("AppBuildID") },
        { json: "imageExportMode", js: "imageExportMode", typ: r("IdentifierStyle") },
        { json: "identifierStyle", js: "identifierStyle", typ: r("IdentifierStyle") },
        { json: "defaultPivotY", js: "defaultPivotY", typ: r("AppBuildID") },
        { json: "dummyWorldIid", js: "dummyWorldIid", typ: r("AppBuildID") },
        { json: "customCommands", js: "customCommands", typ: r("CustomCommands") },
        { json: "worldGridHeight", js: "worldGridHeight", typ: r("AppBuildID") },
        { json: "appBuildId", js: "appBuildId", typ: r("AppBuildID") },
        { json: "defaultGridSize", js: "defaultGridSize", typ: r("AppBuildID") },
        { json: "worldLayout", js: "worldLayout", typ: r("WorldLayout") },
        { json: "flags", js: "flags", typ: r("Flags") },
        { json: "levelNamePattern", js: "levelNamePattern", typ: r("AppBuildID") },
        { json: "exportPng", js: "exportPng", typ: r("AppBuildID") },
        { json: "defaultLevelWidth", js: "defaultLevelWidth", typ: r("AppBuildID") },
        { json: "pngFilePattern", js: "pngFilePattern", typ: r("AppBuildID") },
        { json: "__FORCED_REFS", js: "__FORCED_REFS", typ: r("ForcedRefs") },
        { json: "exportTiled", js: "exportTiled", typ: r("AppBuildID") },
        { json: "defs", js: "defs", typ: r("Defs") },
        { json: "levels", js: "levels", typ: r("CustomCommands") },
        { json: "jsonVersion", js: "jsonVersion", typ: r("AppBuildID") },
        { json: "defaultEntityHeight", js: "defaultEntityHeight", typ: r("AppBuildID") },
        { json: "defaultPivotX", js: "defaultPivotX", typ: r("AppBuildID") },
        { json: "defaultLevelHeight", js: "defaultLevelHeight", typ: r("AppBuildID") },
        { json: "simplifiedExport", js: "simplifiedExport", typ: r("AppBuildID") },
        { json: "externalLevels", js: "externalLevels", typ: r("AppBuildID") },
        { json: "tutorialDesc", js: "tutorialDesc", typ: r("AppBuildID") },
        { json: "minifyJson", js: "minifyJson", typ: r("AppBuildID") },
        { json: "exportLevelBg", js: "exportLevelBg", typ: r("AppBuildID") },
        { json: "backupRelPath", js: "backupRelPath", typ: r("AppBuildID") },
    ], false),
    "ForcedRefs": o([
        { json: "description", js: "description", typ: "" },
        { json: "properties", js: "properties", typ: m(r("ItemsValue")) },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "ItemsValue": o([
        { json: "$ref", js: "$ref", typ: "" },
    ], false),
    "AppBuildID": o([
        { json: "description", js: "description", typ: "" },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "CustomCommands": o([
        { json: "description", js: "description", typ: "" },
        { json: "items", js: "items", typ: r("ItemsValue") },
        { json: "type", js: "type", typ: a(r("CustomCommandsType")) },
    ], false),
    "Defs": o([
        { json: "description", js: "description", typ: "" },
        { json: "$ref", js: "$ref", typ: "" },
    ], false),
    "Flags": o([
        { json: "description", js: "description", typ: "" },
        { json: "items", js: "items", typ: r("FlagsItems") },
        { json: "type", js: "type", typ: a(r("CustomCommandsType")) },
    ], false),
    "FlagsItems": o([
        { json: "enum", js: "enum", typ: a("") },
    ], false),
    "IdentifierStyle": o([
        { json: "description", js: "description", typ: "" },
        { json: "enum", js: "enum", typ: a("") },
    ], false),
    "WorldLayout": o([
        { json: "description", js: "description", typ: "" },
        { json: "enum", js: "enum", typ: a(u(null, "")) },
    ], false),
    "OtherTypes": o([
        { json: "TilesetRect", js: "TilesetRect", typ: r("TilesetRect") },
        { json: "FieldInstance", js: "FieldInstance", typ: r("FieldInstance") },
        { json: "EntityInstance", js: "EntityInstance", typ: r("EntityInstance") },
        { json: "Definitions", js: "Definitions", typ: r("Definitions") },
        { json: "EnumTagValue", js: "EnumTagValue", typ: r("EnumTagValue") },
        { json: "AutoRuleDef", js: "AutoRuleDef", typ: r("AutoRuleDef") },
        { json: "FieldDef", js: "FieldDef", typ: r("FieldDef") },
        { json: "CustomCommand", js: "CustomCommand", typ: r("CustomCommand") },
        { json: "EntityDef", js: "EntityDef", typ: r("EntityDef") },
        { json: "AutoLayerRuleGroup", js: "AutoLayerRuleGroup", typ: r("AutoLayerRuleGroup") },
        { json: "IntGridValueGroupDef", js: "IntGridValueGroupDef", typ: r("IntGridValueGroupDef") },
        { json: "IntGridValueInstance", js: "IntGridValueInstance", typ: r("IntGridValueInstance") },
        { json: "TocInstanceData", js: "TocInstanceData", typ: r("TocInstanceData") },
        { json: "NeighbourLevel", js: "NeighbourLevel", typ: r("NeighbourLevel") },
        { json: "LayerInstance", js: "LayerInstance", typ: r("LayerInstance") },
        { json: "World", js: "World", typ: r("World") },
        { json: "EntityReferenceInfos", js: "EntityReferenceInfos", typ: r("EntityReferenceInfos") },
        { json: "TileCustomMetadata", js: "TileCustomMetadata", typ: r("TileCustomMetadata") },
        { json: "TilesetDef", js: "TilesetDef", typ: r("TilesetDef") },
        { json: "EnumDefValues", js: "EnumDefValues", typ: r("EnumDefValues") },
        { json: "Tile", js: "Tile", typ: r("Tile") },
        { json: "LayerDef", js: "LayerDef", typ: r("LayerDef") },
        { json: "LevelBgPosInfos", js: "LevelBgPosInfos", typ: r("LevelBgPosInfos") },
        { json: "Level", js: "Level", typ: r("Level") },
        { json: "TableOfContentEntry", js: "TableOfContentEntry", typ: r("TableOfContentEntry") },
        { json: "EnumDef", js: "EnumDef", typ: r("EnumDef") },
        { json: "GridPoint", js: "GridPoint", typ: r("GridPoint") },
        { json: "IntGridValueDef", js: "IntGridValueDef", typ: r("IntGridValueDef") },
    ], false),
    "AutoLayerRuleGroup": o([
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("AutoLayerRuleGroupProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "AutoLayerRuleGroupProperties": o([
        { json: "name", js: "name", typ: r("AppBuildID") },
        { json: "collapsed", js: "collapsed", typ: r("AppBuildID") },
        { json: "biomeRequirementMode", js: "biomeRequirementMode", typ: r("AppBuildID") },
        { json: "color", js: "color", typ: r("AppBuildID") },
        { json: "isOptional", js: "isOptional", typ: r("AppBuildID") },
        { json: "icon", js: "icon", typ: r("Icon") },
        { json: "usesWizard", js: "usesWizard", typ: r("AppBuildID") },
        { json: "uid", js: "uid", typ: r("AppBuildID") },
        { json: "requiredBiomeValues", js: "requiredBiomeValues", typ: r("RequiredBiomeValues") },
        { json: "active", js: "active", typ: r("AppBuildID") },
        { json: "rules", js: "rules", typ: r("CustomCommands") },
    ], false),
    "Icon": o([
        { json: "description", js: "description", typ: "" },
        { json: "oneOf", js: "oneOf", typ: a(r("OneOf")) },
    ], false),
    "OneOf": o([
        { json: "type", js: "type", typ: u(undefined, a(r("FORCEDREFSType"))) },
        { json: "$ref", js: "$ref", typ: u(undefined, "") },
    ], false),
    "RequiredBiomeValues": o([
        { json: "description", js: "description", typ: "" },
        { json: "items", js: "items", typ: r("RequiredBiomeValuesItems") },
        { json: "type", js: "type", typ: a(r("CustomCommandsType")) },
    ], false),
    "RequiredBiomeValuesItems": o([
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "AutoRuleDef": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("AutoRuleDefProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "AutoRuleDefProperties": o([
        { json: "flipX", js: "flipX", typ: r("AppBuildID") },
        { json: "pivotX", js: "pivotX", typ: r("AppBuildID") },
        { json: "perlinActive", js: "perlinActive", typ: r("AppBuildID") },
        { json: "tileRectsIds", js: "tileRectsIds", typ: r("TileRectsIDS") },
        { json: "perlinScale", js: "perlinScale", typ: r("AppBuildID") },
        { json: "outOfBoundsValue", js: "outOfBoundsValue", typ: r("AppBuildID") },
        { json: "pattern", js: "pattern", typ: r("RequiredBiomeValues") },
        { json: "tileRandomXMin", js: "tileRandomXMin", typ: r("AppBuildID") },
        { json: "checker", js: "checker", typ: r("IdentifierStyle") },
        { json: "perlinOctaves", js: "perlinOctaves", typ: r("AppBuildID") },
        { json: "tileIds", js: "tileIds", typ: r("RequiredBiomeValues") },
        { json: "alpha", js: "alpha", typ: r("AppBuildID") },
        { json: "tileXOffset", js: "tileXOffset", typ: r("AppBuildID") },
        { json: "invalidated", js: "invalidated", typ: r("AppBuildID") },
        { json: "xModulo", js: "xModulo", typ: r("AppBuildID") },
        { json: "size", js: "size", typ: r("AppBuildID") },
        { json: "chance", js: "chance", typ: r("AppBuildID") },
        { json: "breakOnMatch", js: "breakOnMatch", typ: r("AppBuildID") },
        { json: "tileYOffset", js: "tileYOffset", typ: r("AppBuildID") },
        { json: "uid", js: "uid", typ: r("AppBuildID") },
        { json: "perlinSeed", js: "perlinSeed", typ: r("AppBuildID") },
        { json: "yOffset", js: "yOffset", typ: r("AppBuildID") },
        { json: "tileRandomYMax", js: "tileRandomYMax", typ: r("AppBuildID") },
        { json: "tileRandomYMin", js: "tileRandomYMin", typ: r("AppBuildID") },
        { json: "tileMode", js: "tileMode", typ: r("IdentifierStyle") },
        { json: "flipY", js: "flipY", typ: r("AppBuildID") },
        { json: "tileRandomXMax", js: "tileRandomXMax", typ: r("AppBuildID") },
        { json: "pivotY", js: "pivotY", typ: r("AppBuildID") },
        { json: "yModulo", js: "yModulo", typ: r("AppBuildID") },
        { json: "active", js: "active", typ: r("AppBuildID") },
        { json: "xOffset", js: "xOffset", typ: r("AppBuildID") },
    ], false),
    "TileRectsIDS": o([
        { json: "description", js: "description", typ: "" },
        { json: "items", js: "items", typ: r("TileRectsIDSItems") },
        { json: "type", js: "type", typ: a(r("CustomCommandsType")) },
    ], false),
    "TileRectsIDSItems": o([
        { json: "items", js: "items", typ: r("RequiredBiomeValuesItems") },
        { json: "type", js: "type", typ: a(r("CustomCommandsType")) },
    ], false),
    "CustomCommand": o([
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("CustomCommandProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "CustomCommandProperties": o([
        { json: "when", js: "when", typ: r("IdentifierStyle") },
        { json: "command", js: "command", typ: r("AppBuildID") },
    ], false),
    "Definitions": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("DefinitionsProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "DefinitionsProperties": o([
        { json: "tilesets", js: "tilesets", typ: r("CustomCommands") },
        { json: "layers", js: "layers", typ: r("CustomCommands") },
        { json: "levelFields", js: "levelFields", typ: r("CustomCommands") },
        { json: "enums", js: "enums", typ: r("CustomCommands") },
        { json: "entities", js: "entities", typ: r("CustomCommands") },
        { json: "externalEnums", js: "externalEnums", typ: r("CustomCommands") },
    ], false),
    "EntityDef": o([
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("EntityDefProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "EntityDefProperties": o([
        { json: "tileId", js: "tileId", typ: r("AppBuildID") },
        { json: "showName", js: "showName", typ: r("AppBuildID") },
        { json: "tilesetId", js: "tilesetId", typ: r("AppBuildID") },
        { json: "maxHeight", js: "maxHeight", typ: r("AppBuildID") },
        { json: "limitScope", js: "limitScope", typ: r("IdentifierStyle") },
        { json: "pivotX", js: "pivotX", typ: r("AppBuildID") },
        { json: "maxCount", js: "maxCount", typ: r("AppBuildID") },
        { json: "allowOutOfBounds", js: "allowOutOfBounds", typ: r("AppBuildID") },
        { json: "hollow", js: "hollow", typ: r("AppBuildID") },
        { json: "minHeight", js: "minHeight", typ: r("AppBuildID") },
        { json: "keepAspectRatio", js: "keepAspectRatio", typ: r("AppBuildID") },
        { json: "color", js: "color", typ: r("AppBuildID") },
        { json: "minWidth", js: "minWidth", typ: r("AppBuildID") },
        { json: "tileRect", js: "tileRect", typ: r("Icon") },
        { json: "doc", js: "doc", typ: r("AppBuildID") },
        { json: "fieldDefs", js: "fieldDefs", typ: r("CustomCommands") },
        { json: "tileRenderMode", js: "tileRenderMode", typ: r("IdentifierStyle") },
        { json: "limitBehavior", js: "limitBehavior", typ: r("IdentifierStyle") },
        { json: "tileOpacity", js: "tileOpacity", typ: r("AppBuildID") },
        { json: "nineSliceBorders", js: "nineSliceBorders", typ: r("RequiredBiomeValues") },
        { json: "resizableX", js: "resizableX", typ: r("AppBuildID") },
        { json: "uiTileRect", js: "uiTileRect", typ: r("Icon") },
        { json: "uid", js: "uid", typ: r("AppBuildID") },
        { json: "lineOpacity", js: "lineOpacity", typ: r("AppBuildID") },
        { json: "maxWidth", js: "maxWidth", typ: r("AppBuildID") },
        { json: "resizableY", js: "resizableY", typ: r("AppBuildID") },
        { json: "exportToToc", js: "exportToToc", typ: r("AppBuildID") },
        { json: "fillOpacity", js: "fillOpacity", typ: r("AppBuildID") },
        { json: "height", js: "height", typ: r("AppBuildID") },
        { json: "identifier", js: "identifier", typ: r("AppBuildID") },
        { json: "pivotY", js: "pivotY", typ: r("AppBuildID") },
        { json: "renderMode", js: "renderMode", typ: r("IdentifierStyle") },
        { json: "tags", js: "tags", typ: r("RequiredBiomeValues") },
        { json: "width", js: "width", typ: r("AppBuildID") },
    ], false),
    "EntityInstance": o([
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("EntityInstanceProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "EntityInstanceProperties": o([
        { json: "iid", js: "iid", typ: r("AppBuildID") },
        { json: "defUid", js: "defUid", typ: r("AppBuildID") },
        { json: "__identifier", js: "__identifier", typ: r("AppBuildID") },
        { json: "__tile", js: "__tile", typ: r("Icon") },
        { json: "px", js: "px", typ: r("RequiredBiomeValues") },
        { json: "__worldX", js: "__worldX", typ: r("AppBuildID") },
        { json: "__worldY", js: "__worldY", typ: r("AppBuildID") },
        { json: "__smartColor", js: "__smartColor", typ: r("AppBuildID") },
        { json: "__grid", js: "__grid", typ: r("RequiredBiomeValues") },
        { json: "__pivot", js: "__pivot", typ: r("RequiredBiomeValues") },
        { json: "fieldInstances", js: "fieldInstances", typ: r("CustomCommands") },
        { json: "height", js: "height", typ: r("AppBuildID") },
        { json: "__tags", js: "__tags", typ: r("RequiredBiomeValues") },
        { json: "width", js: "width", typ: r("AppBuildID") },
    ], false),
    "EntityReferenceInfos": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("EntityReferenceInfosProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "EntityReferenceInfosProperties": o([
        { json: "worldIid", js: "worldIid", typ: r("AppBuildID") },
        { json: "entityIid", js: "entityIid", typ: r("AppBuildID") },
        { json: "layerIid", js: "layerIid", typ: r("AppBuildID") },
        { json: "levelIid", js: "levelIid", typ: r("AppBuildID") },
    ], false),
    "EnumDef": o([
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("EnumDefProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "EnumDefProperties": o([
        { json: "externalFileChecksum", js: "externalFileChecksum", typ: r("AppBuildID") },
        { json: "externalRelPath", js: "externalRelPath", typ: r("AppBuildID") },
        { json: "uid", js: "uid", typ: r("AppBuildID") },
        { json: "values", js: "values", typ: r("CustomCommands") },
        { json: "iconTilesetUid", js: "iconTilesetUid", typ: r("AppBuildID") },
        { json: "identifier", js: "identifier", typ: r("AppBuildID") },
        { json: "tags", js: "tags", typ: r("RequiredBiomeValues") },
    ], false),
    "EnumDefValues": o([
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("EnumDefValuesProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "EnumDefValuesProperties": o([
        { json: "tileId", js: "tileId", typ: r("AppBuildID") },
        { json: "color", js: "color", typ: r("AppBuildID") },
        { json: "tileRect", js: "tileRect", typ: r("Icon") },
        { json: "id", js: "id", typ: r("AppBuildID") },
        { json: "__tileSrcRect", js: "__tileSrcRect", typ: r("RequiredBiomeValues") },
    ], false),
    "EnumTagValue": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("EnumTagValueProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "EnumTagValueProperties": o([
        { json: "tileIds", js: "tileIds", typ: r("RequiredBiomeValues") },
        { json: "enumValueId", js: "enumValueId", typ: r("AppBuildID") },
    ], false),
    "FieldDef": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("FieldDefProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "FieldDefProperties": o([
        { json: "acceptFileTypes", js: "acceptFileTypes", typ: r("RequiredBiomeValues") },
        { json: "editorDisplayScale", js: "editorDisplayScale", typ: r("AppBuildID") },
        { json: "searchable", js: "searchable", typ: r("AppBuildID") },
        { json: "useForSmartColor", js: "useForSmartColor", typ: r("AppBuildID") },
        { json: "editorShowInWorld", js: "editorShowInWorld", typ: r("AppBuildID") },
        { json: "allowedRefs", js: "allowedRefs", typ: r("IdentifierStyle") },
        { json: "editorAlwaysShow", js: "editorAlwaysShow", typ: r("AppBuildID") },
        { json: "arrayMinLength", js: "arrayMinLength", typ: r("AppBuildID") },
        { json: "editorTextSuffix", js: "editorTextSuffix", typ: r("AppBuildID") },
        { json: "min", js: "min", typ: r("AppBuildID") },
        { json: "__type", js: "__type", typ: r("AppBuildID") },
        { json: "editorDisplayMode", js: "editorDisplayMode", typ: r("IdentifierStyle") },
        { json: "editorDisplayColor", js: "editorDisplayColor", typ: r("AppBuildID") },
        { json: "canBeNull", js: "canBeNull", typ: r("AppBuildID") },
        { json: "autoChainRef", js: "autoChainRef", typ: r("AppBuildID") },
        { json: "doc", js: "doc", typ: r("AppBuildID") },
        { json: "allowedRefsEntityUid", js: "allowedRefsEntityUid", typ: r("AppBuildID") },
        { json: "tilesetUid", js: "tilesetUid", typ: r("AppBuildID") },
        { json: "allowedRefTags", js: "allowedRefTags", typ: r("RequiredBiomeValues") },
        { json: "symmetricalRef", js: "symmetricalRef", typ: r("AppBuildID") },
        { json: "uid", js: "uid", typ: r("AppBuildID") },
        { json: "editorTextPrefix", js: "editorTextPrefix", typ: r("AppBuildID") },
        { json: "isArray", js: "isArray", typ: r("AppBuildID") },
        { json: "exportToToc", js: "exportToToc", typ: r("AppBuildID") },
        { json: "editorDisplayPos", js: "editorDisplayPos", typ: r("IdentifierStyle") },
        { json: "textLanguageMode", js: "textLanguageMode", typ: r("WorldLayout") },
        { json: "max", js: "max", typ: r("AppBuildID") },
        { json: "allowOutOfLevelRef", js: "allowOutOfLevelRef", typ: r("AppBuildID") },
        { json: "editorCutLongValues", js: "editorCutLongValues", typ: r("AppBuildID") },
        { json: "defaultOverride", js: "defaultOverride", typ: r("DefaultOverride") },
        { json: "editorLinkStyle", js: "editorLinkStyle", typ: r("IdentifierStyle") },
        { json: "regex", js: "regex", typ: r("AppBuildID") },
        { json: "type", js: "type", typ: r("AppBuildID") },
        { json: "identifier", js: "identifier", typ: r("AppBuildID") },
        { json: "arrayMaxLength", js: "arrayMaxLength", typ: r("AppBuildID") },
    ], false),
    "DefaultOverride": o([
        { json: "description", js: "description", typ: "" },
    ], false),
    "FieldInstance": o([
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("FieldInstanceProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "FieldInstanceProperties": o([
        { json: "__type", js: "__type", typ: r("AppBuildID") },
        { json: "defUid", js: "defUid", typ: r("AppBuildID") },
        { json: "__identifier", js: "__identifier", typ: r("AppBuildID") },
        { json: "__tile", js: "__tile", typ: r("Icon") },
        { json: "realEditorValues", js: "realEditorValues", typ: r("RealEditorValues") },
        { json: "__value", js: "__value", typ: r("DefaultOverride") },
    ], false),
    "RealEditorValues": o([
        { json: "description", js: "description", typ: "" },
        { json: "items", js: "items", typ: r("RealEditorValuesItems") },
        { json: "type", js: "type", typ: a(r("CustomCommandsType")) },
    ], false),
    "RealEditorValuesItems": o([
    ], false),
    "GridPoint": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("GridPointProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "GridPointProperties": o([
        { json: "cy", js: "cy", typ: r("AppBuildID") },
        { json: "cx", js: "cx", typ: r("AppBuildID") },
    ], false),
    "IntGridValueDef": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("IntGridValueDefProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "IntGridValueDefProperties": o([
        { json: "tile", js: "tile", typ: r("Icon") },
        { json: "color", js: "color", typ: r("AppBuildID") },
        { json: "identifier", js: "identifier", typ: r("AppBuildID") },
        { json: "value", js: "value", typ: r("AppBuildID") },
        { json: "groupUid", js: "groupUid", typ: r("AppBuildID") },
    ], false),
    "IntGridValueGroupDef": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("IntGridValueGroupDefProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "IntGridValueGroupDefProperties": o([
        { json: "color", js: "color", typ: r("AppBuildID") },
        { json: "uid", js: "uid", typ: r("AppBuildID") },
        { json: "identifier", js: "identifier", typ: r("AppBuildID") },
    ], false),
    "IntGridValueInstance": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("IntGridValueInstanceProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "IntGridValueInstanceProperties": o([
        { json: "v", js: "v", typ: r("AppBuildID") },
        { json: "coordId", js: "coordId", typ: r("AppBuildID") },
    ], false),
    "LayerDef": o([
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("LayerDefProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "LayerDefProperties": o([
        { json: "pxOffsetX", js: "pxOffsetX", typ: r("AppBuildID") },
        { json: "tilePivotX", js: "tilePivotX", typ: r("AppBuildID") },
        { json: "uiFilterTags", js: "uiFilterTags", typ: r("RequiredBiomeValues") },
        { json: "displayOpacity", js: "displayOpacity", typ: r("AppBuildID") },
        { json: "parallaxFactorY", js: "parallaxFactorY", typ: r("AppBuildID") },
        { json: "hideInList", js: "hideInList", typ: r("AppBuildID") },
        { json: "__type", js: "__type", typ: r("AppBuildID") },
        { json: "guideGridHei", js: "guideGridHei", typ: r("AppBuildID") },
        { json: "uiColor", js: "uiColor", typ: r("AppBuildID") },
        { json: "doc", js: "doc", typ: r("AppBuildID") },
        { json: "tilesetDefUid", js: "tilesetDefUid", typ: r("AppBuildID") },
        { json: "canSelectWhenInactive", js: "canSelectWhenInactive", typ: r("AppBuildID") },
        { json: "useAsyncRender", js: "useAsyncRender", typ: r("AppBuildID") },
        { json: "autoSourceLayerDefUid", js: "autoSourceLayerDefUid", typ: r("AppBuildID") },
        { json: "autoTilesetDefUid", js: "autoTilesetDefUid", typ: r("AppBuildID") },
        { json: "parallaxScaling", js: "parallaxScaling", typ: r("AppBuildID") },
        { json: "renderInWorldView", js: "renderInWorldView", typ: r("AppBuildID") },
        { json: "intGridValuesGroups", js: "intGridValuesGroups", typ: r("CustomCommands") },
        { json: "inactiveOpacity", js: "inactiveOpacity", typ: r("AppBuildID") },
        { json: "uid", js: "uid", typ: r("AppBuildID") },
        { json: "excludedTags", js: "excludedTags", typ: r("RequiredBiomeValues") },
        { json: "hideFieldsWhenInactive", js: "hideFieldsWhenInactive", typ: r("AppBuildID") },
        { json: "intGridValues", js: "intGridValues", typ: r("CustomCommands") },
        { json: "autoRuleGroups", js: "autoRuleGroups", typ: r("CustomCommands") },
        { json: "type", js: "type", typ: r("IdentifierStyle") },
        { json: "identifier", js: "identifier", typ: r("AppBuildID") },
        { json: "guideGridWid", js: "guideGridWid", typ: r("AppBuildID") },
        { json: "requiredTags", js: "requiredTags", typ: r("RequiredBiomeValues") },
        { json: "pxOffsetY", js: "pxOffsetY", typ: r("AppBuildID") },
        { json: "tilePivotY", js: "tilePivotY", typ: r("AppBuildID") },
        { json: "biomeFieldUid", js: "biomeFieldUid", typ: r("AppBuildID") },
        { json: "gridSize", js: "gridSize", typ: r("AppBuildID") },
        { json: "parallaxFactorX", js: "parallaxFactorX", typ: r("AppBuildID") },
        { json: "autoTilesKilledByOtherLayerUid", js: "autoTilesKilledByOtherLayerUid", typ: r("AppBuildID") },
    ], false),
    "LayerInstance": o([
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("LayerInstanceProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "LayerInstanceProperties": o([
        { json: "__cHei", js: "__cHei", typ: r("AppBuildID") },
        { json: "pxOffsetX", js: "pxOffsetX", typ: r("AppBuildID") },
        { json: "__tilesetRelPath", js: "__tilesetRelPath", typ: r("AppBuildID") },
        { json: "iid", js: "iid", typ: r("AppBuildID") },
        { json: "levelId", js: "levelId", typ: r("AppBuildID") },
        { json: "__type", js: "__type", typ: r("AppBuildID") },
        { json: "autoLayerTiles", js: "autoLayerTiles", typ: r("CustomCommands") },
        { json: "optionalRules", js: "optionalRules", typ: r("RequiredBiomeValues") },
        { json: "__identifier", js: "__identifier", typ: r("AppBuildID") },
        { json: "__gridSize", js: "__gridSize", typ: r("AppBuildID") },
        { json: "__pxTotalOffsetY", js: "__pxTotalOffsetY", typ: r("AppBuildID") },
        { json: "intGridCsv", js: "intGridCsv", typ: r("RequiredBiomeValues") },
        { json: "overrideTilesetUid", js: "overrideTilesetUid", typ: r("AppBuildID") },
        { json: "visible", js: "visible", typ: r("AppBuildID") },
        { json: "entityInstances", js: "entityInstances", typ: r("CustomCommands") },
        { json: "__opacity", js: "__opacity", typ: r("AppBuildID") },
        { json: "seed", js: "seed", typ: r("AppBuildID") },
        { json: "layerDefUid", js: "layerDefUid", typ: r("AppBuildID") },
        { json: "__pxTotalOffsetX", js: "__pxTotalOffsetX", typ: r("AppBuildID") },
        { json: "__cWid", js: "__cWid", typ: r("AppBuildID") },
        { json: "pxOffsetY", js: "pxOffsetY", typ: r("AppBuildID") },
        { json: "__tilesetDefUid", js: "__tilesetDefUid", typ: r("AppBuildID") },
        { json: "gridTiles", js: "gridTiles", typ: r("CustomCommands") },
        { json: "intGrid", js: "intGrid", typ: r("CustomCommands") },
    ], false),
    "Level": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("LevelProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "LevelProperties": o([
        { json: "__neighbours", js: "__neighbours", typ: r("CustomCommands") },
        { json: "__bgColor", js: "__bgColor", typ: r("AppBuildID") },
        { json: "worldX", js: "worldX", typ: r("AppBuildID") },
        { json: "externalRelPath", js: "externalRelPath", typ: r("AppBuildID") },
        { json: "useAutoIdentifier", js: "useAutoIdentifier", typ: r("AppBuildID") },
        { json: "iid", js: "iid", typ: r("AppBuildID") },
        { json: "bgColor", js: "bgColor", typ: r("AppBuildID") },
        { json: "bgPos", js: "bgPos", typ: r("WorldLayout") },
        { json: "pxHei", js: "pxHei", typ: r("AppBuildID") },
        { json: "worldY", js: "worldY", typ: r("AppBuildID") },
        { json: "__bgPos", js: "__bgPos", typ: r("Icon") },
        { json: "uid", js: "uid", typ: r("AppBuildID") },
        { json: "__smartColor", js: "__smartColor", typ: r("AppBuildID") },
        { json: "fieldInstances", js: "fieldInstances", typ: r("CustomCommands") },
        { json: "pxWid", js: "pxWid", typ: r("AppBuildID") },
        { json: "identifier", js: "identifier", typ: r("AppBuildID") },
        { json: "bgPivotY", js: "bgPivotY", typ: r("AppBuildID") },
        { json: "bgPivotX", js: "bgPivotX", typ: r("AppBuildID") },
        { json: "layerInstances", js: "layerInstances", typ: r("CustomCommands") },
        { json: "bgRelPath", js: "bgRelPath", typ: r("AppBuildID") },
        { json: "worldDepth", js: "worldDepth", typ: r("AppBuildID") },
    ], false),
    "LevelBgPosInfos": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("LevelBgPosInfosProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "LevelBgPosInfosProperties": o([
        { json: "cropRect", js: "cropRect", typ: r("RequiredBiomeValues") },
        { json: "scale", js: "scale", typ: r("RequiredBiomeValues") },
        { json: "topLeftPx", js: "topLeftPx", typ: r("RequiredBiomeValues") },
    ], false),
    "NeighbourLevel": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("NeighbourLevelProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "NeighbourLevelProperties": o([
        { json: "levelIid", js: "levelIid", typ: r("AppBuildID") },
        { json: "levelUid", js: "levelUid", typ: r("AppBuildID") },
        { json: "dir", js: "dir", typ: r("AppBuildID") },
    ], false),
    "TableOfContentEntry": o([
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("TableOfContentEntryProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "TableOfContentEntryProperties": o([
        { json: "identifier", js: "identifier", typ: r("AppBuildID") },
        { json: "instancesData", js: "instancesData", typ: r("CustomCommands") },
        { json: "instances", js: "instances", typ: r("CustomCommands") },
    ], false),
    "Tile": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("TileProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "TileProperties": o([
        { json: "t", js: "t", typ: r("AppBuildID") },
        { json: "d", js: "d", typ: r("RequiredBiomeValues") },
        { json: "px", js: "px", typ: r("RequiredBiomeValues") },
        { json: "a", js: "a", typ: r("AppBuildID") },
        { json: "f", js: "f", typ: r("AppBuildID") },
        { json: "src", js: "src", typ: r("RequiredBiomeValues") },
    ], false),
    "TileCustomMetadata": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("TileCustomMetadataProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "TileCustomMetadataProperties": o([
        { json: "tileId", js: "tileId", typ: r("AppBuildID") },
        { json: "data", js: "data", typ: r("AppBuildID") },
    ], false),
    "TilesetDef": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("TilesetDefProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "TilesetDefProperties": o([
        { json: "cachedPixelData", js: "cachedPixelData", typ: r("AppBuildID") },
        { json: "__cHei", js: "__cHei", typ: r("AppBuildID") },
        { json: "pxHei", js: "pxHei", typ: r("AppBuildID") },
        { json: "customData", js: "customData", typ: r("CustomCommands") },
        { json: "tagsSourceEnumUid", js: "tagsSourceEnumUid", typ: r("AppBuildID") },
        { json: "uid", js: "uid", typ: r("AppBuildID") },
        { json: "padding", js: "padding", typ: r("AppBuildID") },
        { json: "enumTags", js: "enumTags", typ: r("CustomCommands") },
        { json: "pxWid", js: "pxWid", typ: r("AppBuildID") },
        { json: "__cWid", js: "__cWid", typ: r("AppBuildID") },
        { json: "spacing", js: "spacing", typ: r("AppBuildID") },
        { json: "identifier", js: "identifier", typ: r("AppBuildID") },
        { json: "savedSelections", js: "savedSelections", typ: r("RequiredBiomeValues") },
        { json: "tags", js: "tags", typ: r("RequiredBiomeValues") },
        { json: "embedAtlas", js: "embedAtlas", typ: r("WorldLayout") },
        { json: "relPath", js: "relPath", typ: r("AppBuildID") },
        { json: "tileGridSize", js: "tileGridSize", typ: r("AppBuildID") },
    ], false),
    "TilesetRect": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("TilesetRectProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "TilesetRectProperties": o([
        { json: "tilesetUid", js: "tilesetUid", typ: r("AppBuildID") },
        { json: "h", js: "h", typ: r("AppBuildID") },
        { json: "x", js: "x", typ: r("AppBuildID") },
        { json: "y", js: "y", typ: r("AppBuildID") },
        { json: "w", js: "w", typ: r("AppBuildID") },
    ], false),
    "TocInstanceData": o([
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("TocInstanceDataProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "TocInstanceDataProperties": o([
        { json: "worldX", js: "worldX", typ: r("AppBuildID") },
        { json: "widPx", js: "widPx", typ: r("AppBuildID") },
        { json: "worldY", js: "worldY", typ: r("AppBuildID") },
        { json: "heiPx", js: "heiPx", typ: r("AppBuildID") },
        { json: "fields", js: "fields", typ: r("DefaultOverride") },
        { json: "iids", js: "iids", typ: r("Defs") },
    ], false),
    "World": o([
        { json: "description", js: "description", typ: "" },
        { json: "title", js: "title", typ: "" },
        { json: "required", js: "required", typ: a("") },
        { json: "additionalProperties", js: "additionalProperties", typ: true },
        { json: "properties", js: "properties", typ: r("WorldProperties") },
        { json: "type", js: "type", typ: a(r("FORCEDREFSType")) },
    ], false),
    "WorldProperties": o([
        { json: "worldGridWidth", js: "worldGridWidth", typ: r("AppBuildID") },
        { json: "iid", js: "iid", typ: r("AppBuildID") },
        { json: "worldGridHeight", js: "worldGridHeight", typ: r("AppBuildID") },
        { json: "worldLayout", js: "worldLayout", typ: r("WorldLayout") },
        { json: "defaultLevelWidth", js: "defaultLevelWidth", typ: r("AppBuildID") },
        { json: "levels", js: "levels", typ: r("CustomCommands") },
        { json: "defaultLevelHeight", js: "defaultLevelHeight", typ: r("AppBuildID") },
        { json: "identifier", js: "identifier", typ: r("AppBuildID") },
    ], false),
    "FORCEDREFSType": [
        "boolean",
        "integer",
        "null",
        "number",
        "object",
        "string",
    ],
    "CustomCommandsType": [
        "array",
        "null",
    ],
};
