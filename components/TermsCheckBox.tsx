import Container from "./Container";
import { Checkbox } from "./ui/checkbox";

function TermsCheckBox() {
  return (
    <Container>
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Accept terms and conditions
        </label>
      </div>
    </Container>
  );
}

export default TermsCheckBox
