import idObj from 'identity-obj-proxy';
import type {
  Component,
  CreateElement,
  FunctionalComponentOptions,
  RenderContext,
  VNode
} from 'vue';

interface IRenderContext extends RenderContext {
  $style: Record<string, string>;
}

interface IFunctionalComponent extends FunctionalComponentOptions {
  render?: (h: CreateElement, context: IRenderContext) => VNode | VNode[];
}

// Mocking css modules for functional components
export function mockFunctionalComponentStyle(payload: Component): void {
  const component = <IFunctionalComponent>payload;

  if (!component.functional || !component.render) {
    throw new Error('Component must be functional and have render function');
  }

  // mockImplementation on component render fn causes endless cycle
  // so we will use mockImplementationOnce and then recall it after render fn call
  jest.spyOn(component, 'render').mockImplementationOnce((h, context) => {
    // Mock style
    context.$style = idObj;

    // Call render fn and save result
    const result = component.render(h, context);

    // Enable mock again
    mockFunctionalComponentStyle(component);

    // Return render fn result
    return result;
  });
}
