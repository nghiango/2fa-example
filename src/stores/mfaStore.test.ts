import { MfaEntry, MfaStore } from "@stores/mfaStore";
import { Builder } from "builder-pattern";

describe('mfaStore', () => {
  describe('renewCode function', () => {
    const mfaStore = new MfaStore();
    test('when calling renew with correct id, the code will be renew', () => {
      mfaStore.add('testing')
      const found = {id: '',...mfaStore.mfas.find((mfa) => mfa.name === 'testing')};
      if (!found) {
        return;
      }
      mfaStore.renewCode(found.id);
      const afterChangeCode = mfaStore.mfas.find((mfa) => mfa.name === 'testing');
      if (!afterChangeCode) {
        return;
      }
      expect(found.code).not.toEqual(afterChangeCode.code)
    })
    test('When calling renew with incorrect id, the code will be kept', () => {
      mfaStore.add('testing-1')
      const found = {id: '',...mfaStore.mfas.find((mfa) => mfa.name === 'testing-1')};
      if (!found) {
        return;
      }
      mfaStore.renewCode('differentIdTesting');
      const afterCallingRenewCode = mfaStore.mfas.find((mfa) => mfa.name === 'testing-1');
      if (!afterCallingRenewCode) {
        return;
      }
      expect(found.code).toEqual(afterCallingRenewCode.code)
    })
  })

  describe('add function and interval for countdown', () => {
    const mfaStore = new MfaStore();
    test('Add new mfa entry with default image when pass only name as parameter', () => {
      mfaStore.add('testing');
      const found = mfaStore.mfas.find((mfa) => mfa.name === 'testing');
      expect(found).toBeTruthy();
      if (!found) {
        return;
      }
      expect(found.icon).toEqual('default-user.png');
    })

    test('Add new mfa entry with image when pass name and image name as parameter', () => {
      mfaStore.add('testing-1', 'testing-img.png');
      const found = mfaStore.mfas.find((mfa) => mfa.name === 'testing-1');
      expect(found).toBeTruthy();
      if (!found) {
        return;
      }
      expect(found.icon).toEqual('testing-img.png');
    })
    test('New Mfa will be run interval of existing time', () => {
      mfaStore.add('testing-1', 'testing-img.png');
      const found = mfaStore.mfas.find((mfa) => mfa.name === 'testing-1');
      expect(found).toBeTruthy();
      if (!found) {
        return;
      }
      const currentExistingTime = found.existingTime;
      setTimeout(() => {
        expect(found.existingTime).toEqual(currentExistingTime - 1);
      }, 1000);
    })
  })

  describe('reduceExistingTime function', () => {
    const mfaStore = new MfaStore();
    test('existing time will be decreased one', () => {
      const newMfa = Builder<MfaEntry>().id('testing').name('testing').timeout(60).existingTime(60).code('testing').icon('test.png').build();
      mfaStore.mfas.push(newMfa);
      const existingTimeBeforeReduce = newMfa.existingTime;
      mfaStore.reduceExistingTime(newMfa);
      expect(newMfa.existingTime).toEqual(existingTimeBeforeReduce - 1);
    })
    test('existing time will be reset with timeout value when existing time equal 0', () => {
      const newMfa = Builder<MfaEntry>().id('testing').name('testing').timeout(5).existingTime(5).code('testing').icon('test.png').build();
      mfaStore.mfas.push(newMfa);
      const existingTimeBeforeReduce = newMfa.existingTime;
      mfaStore.reduceExistingTime(newMfa);
      expect(newMfa.existingTime).toEqual(existingTimeBeforeReduce - 1);
      mfaStore.reduceExistingTime(newMfa);
      mfaStore.reduceExistingTime(newMfa);
      mfaStore.reduceExistingTime(newMfa);
      mfaStore.reduceExistingTime(newMfa);
      expect(newMfa.existingTime).toEqual(newMfa.timeout)
    })
  })
})