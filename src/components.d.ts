/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Prompter, } from "./components/prompt/prompt";
import { Server, } from "stellar-sdk";
export namespace Components {
    interface CollapsibleContainer {
    }
    interface StellarLoader {
        "interval": any;
    }
    interface StellarPrompt {
        "prompter": Prompter;
    }
    interface StellarWallet {
        "homeDomain": String;
        "server": Server;
        "toml": Object;
    }
}
declare global {
    interface HTMLCollapsibleContainerElement extends Components.CollapsibleContainer, HTMLStencilElement {
    }
    var HTMLCollapsibleContainerElement: {
        prototype: HTMLCollapsibleContainerElement;
        new (): HTMLCollapsibleContainerElement;
    };
    interface HTMLStellarLoaderElement extends Components.StellarLoader, HTMLStencilElement {
    }
    var HTMLStellarLoaderElement: {
        prototype: HTMLStellarLoaderElement;
        new (): HTMLStellarLoaderElement;
    };
    interface HTMLStellarPromptElement extends Components.StellarPrompt, HTMLStencilElement {
    }
    var HTMLStellarPromptElement: {
        prototype: HTMLStellarPromptElement;
        new (): HTMLStellarPromptElement;
    };
    interface HTMLStellarWalletElement extends Components.StellarWallet, HTMLStencilElement {
    }
    var HTMLStellarWalletElement: {
        prototype: HTMLStellarWalletElement;
        new (): HTMLStellarWalletElement;
    };
    interface HTMLElementTagNameMap {
        "collapsible-container": HTMLCollapsibleContainerElement;
        "stellar-loader": HTMLStellarLoaderElement;
        "stellar-prompt": HTMLStellarPromptElement;
        "stellar-wallet": HTMLStellarWalletElement;
    }
}
declare namespace LocalJSX {
    interface CollapsibleContainer {
    }
    interface StellarLoader {
        "interval"?: any;
    }
    interface StellarPrompt {
        "prompter"?: Prompter;
    }
    interface StellarWallet {
        "homeDomain"?: String;
        "server"?: Server;
        "toml"?: Object;
    }
    interface IntrinsicElements {
        "collapsible-container": CollapsibleContainer;
        "stellar-loader": StellarLoader;
        "stellar-prompt": StellarPrompt;
        "stellar-wallet": StellarWallet;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "collapsible-container": LocalJSX.CollapsibleContainer & JSXBase.HTMLAttributes<HTMLCollapsibleContainerElement>;
            "stellar-loader": LocalJSX.StellarLoader & JSXBase.HTMLAttributes<HTMLStellarLoaderElement>;
            "stellar-prompt": LocalJSX.StellarPrompt & JSXBase.HTMLAttributes<HTMLStellarPromptElement>;
            "stellar-wallet": LocalJSX.StellarWallet & JSXBase.HTMLAttributes<HTMLStellarWalletElement>;
        }
    }
}
