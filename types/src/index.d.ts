/// <reference types="node" />
export declare const isRoot: () => boolean | undefined;
export declare const defaultUid: (platform?: NodeJS.Platform) => any;
export declare const isDocker: () => any;
export declare const downgradeRoot: () => void;
export declare const sudoBlock: (message: any) => void;
export default function rootCheck(message?: string): void;
