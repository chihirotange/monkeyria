// --- Interfaces ---

export interface LdtkProject {
  __header__: LdtkHeader;
  iid: string;
  jsonVersion: string;
  appBuildId: number;
  nextUid: number;
  identifierStyle: string;
  toc: any[];
  worldLayout: string;
  worldGridWidth: number;
  worldGridHeight: number;
  defaultLevelWidth: number;
  defaultLevelHeight: number;
  defaultPivotX: number;
  defaultPivotY: number;
  defaultGridSize: number;
  defaultEntityWidth: number;
  defaultEntityHeight: number;
  bgColor: string;
  defaultLevelBgColor: string;
  minifyJson: boolean;
  externalLevels: boolean;
  exportTiled: boolean;
  simplifiedExport: boolean;
  imageExportMode: string;
  exportLevelBg: boolean;
  pngFilePattern: string | null;
  backupOnSave: boolean;
  backupLimit: number;
  backupRelPath: string | null;
  levelNamePattern: string;
  tutorialDesc: string | null;
  customCommands: LdtkCustomCommand[];
  flags: any[];
  defs: LdtkDefs;
  levels: LdtkLevel[];
  tilesets: LdtkTileset[];
  enums: LdtkEnum[];
  externalEnums: any[];
  levelFields: any[];
  worlds: any[];
  dummyWorldIid: string;
}

export interface LdtkHeader {
  fileType: string;
  app: string;
  doc: string;
  schema: string;
  appAuthor: string;
  appVersion: string;
  url: string;
}

export interface LdtkCustomCommand {
  command: string;
  when: string;
}

export interface LdtkDefs {
  layers: LdtkLayerDef[];
  entities: LdtkEntityDef[];
  tilesets: LdtkTileset[];
  enums: LdtkEnum[];
}

export type LdtkLayerDef = LdtkTilesLayerDef | LdtkEntitiesLayerDef | LdtkIntGridLayerDef;

export interface LdtkTilesLayerDef {
  __type: "Tiles";
  identifier: string;
  type: "Tiles";
  uid: number;
  gridSize: number;
  tilesetDefUid: number;
  // ...other properties omitted for brevity
}

export interface LdtkEntitiesLayerDef {
  __type: "Entities";
  identifier: string;
  type: "Entities";
  uid: number;
  gridSize: number;
  // ...other properties omitted for brevity
}

export interface LdtkIntGridLayerDef {
  __type: "IntGrid";
  identifier: string;
  type: "IntGrid";
  uid: number;
  gridSize: number;
  intGridValues: LdtkIntGridValue[];
  // ...other properties omitted for brevity
}

export interface LdtkIntGridValue {
  value: number;
  identifier: string;
  color: string;
  tile: LdtkTileRef | null;
  groupUid: number;
}

export interface LdtkTileRef {
  tilesetUid: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface LdtkEntityDef {
  identifier: string;
  uid: number;
  width: number;
  height: number;
  fieldDefs: LdtkFieldDef[];
  // ...other properties omitted for brevity
}

export interface LdtkFieldDef {
  identifier: string;
  __type: string;
  uid: number;
  type: string;
  isArray: boolean;
  canBeNull: boolean;
  // ...other properties omitted for brevity
}

export interface LdtkTileset {
  identifier: string;
  uid: number;
  relPath: string;
  pxWid: number;
  pxHei: number;
  tileGridSize: number;
  // ...other properties omitted for brevity
}

export interface LdtkEnum {
  identifier: string;
  uid: number;
  values: LdtkEnumValue[];
  // ...other properties omitted for brevity
}

export interface LdtkEnumValue {
  id: string;
  tileRect: LdtkTileRef | null;
  color: number;
}

export interface LdtkLevel {
  identifier: string;
  iid: string;
  uid: number;
  worldX: number;
  worldY: number;
  worldDepth: number;
  pxWid: number;
  pxHei: number;
  __bgColor: string;
  layerInstances: LdtkLayerInstance[];
  // ...other properties omitted for brevity
}

export type LdtkLayerInstance = LdtkTilesLayerInstance | LdtkEntitiesLayerInstance | LdtkIntGridLayerInstance;

export interface LdtkTilesLayerInstance {
  __identifier: string;
  __type: "Tiles";
  __cWid: number;
  __cHei: number;
  __gridSize: number;
  __opacity: number;
  __tilesetDefUid: number;
  gridTiles: any[];
  // ...other properties omitted for brevity
}

export interface LdtkEntitiesLayerInstance {
  __identifier: string;
  __type: "Entities";
  __cWid: number;
  __cHei: number;
  __gridSize: number;
  __opacity: number;
  entityInstances: LdtkEntityInstance[];
  // ...other properties omitted for brevity
}

export interface LdtkIntGridLayerInstance {
  __identifier: string;
  __type: "IntGrid";
  __cWid: number;
  __cHei: number;
  __gridSize: number;
  __opacity: number;
  intGridCsv: number[];
  // ...other properties omitted for brevity
}

export interface LdtkEntityInstance {
  __identifier: string;
  __grid: [number, number];
  __pivot: [number, number];
  iid: string;
  width: number;
  height: number;
  defUid: number;
  px: [number, number];
  fieldInstances: LdtkFieldInstance[];
  __worldX: number;
  __worldY: number;
  // ...other properties omitted for brevity
}

export interface LdtkFieldInstance {
  __identifier: string;
  __type: string;
  __value: any;
  defUid: number;
  // ...other properties omitted for brevity
}

// --- Parser ---

export function parseLdtkProject(json: string): LdtkProject {
  const obj = JSON.parse(json);
  // Optionally: add runtime validation here
  return obj as LdtkProject;
}