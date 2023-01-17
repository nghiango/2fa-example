import { render, screen } from "@testing-library/react";
import { Builder } from "builder-pattern";
import { Mfa } from "@pages/MfaList/components/Mfa";
import { MfaEntry } from "@stores/mfaStore";

describe('Mfa component', () => {
  test('render correctly', () => {
    const mfa = Builder<MfaEntry>().id('testing').name('testing').timeout(60).existingTime(60).icon('default-user.png').code('123456').build();
    render(<Mfa mfa={mfa}/>)
    expect(screen.getByTestId('name').textContent).toEqual(mfa.name);
    expect(screen.getByTestId('code').textContent?.replace(' ', '')).toEqual(mfa.code);
    expect(screen.getByTestId('icon').getAttribute('src')).toEqual(mfa.icon);
    expect(screen.getByTestId('countdownTimer')).toBeTruthy();
  })
})