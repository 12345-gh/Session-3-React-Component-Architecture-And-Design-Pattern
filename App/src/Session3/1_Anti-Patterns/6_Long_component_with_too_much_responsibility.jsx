/*
  React encourages the creation of modular, reusable components. However, as features get added, a
component can quickly grow in size and responsibility, turning into an unwieldy behemoth. A long
component that manages various tasks becomes difficult to maintain, understand, and test.
*/

type OrderContainerProps = {
  testID: string;
  orderData: Object;
  basketError: Error;
  addCoupon: () => void;
  voucherSelected: string;
  validationErrors: string[];
  clearErrors: () => void;
  removeLine: () => void;
  editLine: () => void;
  hideOrderButton: boolean;
  hideEditButton: boolean;
  loading: boolean;
};

const OrderContainer = ({
  testID,
  orderData,
  basketError,
  addCoupon,
  voucherSelected,
  validationErrors,
  clearErrors,
  removeLine,
  editLine,
  hideOrderButton,
  hideEditButton,
  loading,
}: OrderContainerProps) => {
  //..
};

export default OrderContainer;

/*
  Such a component violates the single-responsibility principle (SRP), which advocates that a component
should fulfill only one function. By taking on multiple roles, it becomes more complex and less
maintainable. We need to analyze the core responsibility of the OrderContainer component and
separate the supporting logic into other smaller, focused components or utilize Hooks for logic separation.
*/