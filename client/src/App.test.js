import { TextWithLimit } from "./Components/widget/Notification.js";

describe('TextWithLimit', () => {
  test('displays full text when length is within limit', () => {
    const text = 'Hello, World!';
    const limit = 15;

    const result = TextWithLimit({ text, limit });

    expect(result).toEqual( <div>
                              <span>
                                Hello, World!
                              </span>
                            </div>);
  });

  test('displays truncated text with ellipsis when length exceeds limit', () => {
    const text = 'This is a longer text that exceeds the limit';
    const limit = 20;
    const expectedText = 'This is a longer tex…';

    const result = TextWithLimit({ text, limit });

    expect(result.props.children.props.children.join('')).toEqual(expectedText);
  });
});
