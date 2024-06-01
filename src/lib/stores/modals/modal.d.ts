import { JsxElement } from 'typescript';

export interface ModalStore {
	isOpen: boolean;
	component: JsxElement;
}
