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
