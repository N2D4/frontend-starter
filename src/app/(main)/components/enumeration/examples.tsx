import { Enumeration, EnumerationItem } from "@/components/enumeration";
import { ExampleCard } from "@/components/example-card";
import { deindent } from "@/utils/strings";

export function NumberedExample() {
  return (
    <ExampleCard code={numberedCode} language="tsx">
      <Enumeration type="numbered">
        <EnumerationItem>
          First
        </EnumerationItem>
        <EnumerationItem>
          Second
        </EnumerationItem>
        <EnumerationItem>
          Third
        </EnumerationItem>
      </Enumeration>
    </ExampleCard>
  );
}

const numberedCode = deindent`
  <Enumeration type="numbered">
    <EnumerationItem>
      First
    </EnumerationItem>
    <EnumerationItem>
      Second
    </EnumerationItem>
    <EnumerationItem>
      Third
    </EnumerationItem>
  </Enumeration>
`;


export function MixedExample() {
  return (
    <ExampleCard code={mixedCode} language="tsx">
      <Enumeration type="numbered">
        <EnumerationItem>
          First
        </EnumerationItem>
        <EnumerationItem type="bulleted">
          Second
        </EnumerationItem>
        <EnumerationItem type="checklist" checked>
          Third
        </EnumerationItem>
      </Enumeration>
    </ExampleCard>
  );
};

const mixedCode = deindent`
  <Enumeration type="numbered">
    <EnumerationItem>
      First
    </EnumerationItem>
    <EnumerationItem type="bulleted">
      Second
    </EnumerationItem>
    <EnumerationItem type="checklist" checked>
      Third
    </EnumerationItem>
  </Enumeration>
`;


export function NestedExample() {
  return (
    <ExampleCard code={nestedCode} language="tsx">
      <Enumeration type="numbered">
        <EnumerationItem>
          First
          <Enumeration type="bulleted">
            <EnumerationItem>
              Second
            </EnumerationItem>
            <EnumerationItem>
              Third
            </EnumerationItem>
          </Enumeration>
        </EnumerationItem>
        <EnumerationItem>
          Fourth
          <Enumeration type="checklist">
            <EnumerationItem>
              Fifth
            </EnumerationItem>
            <EnumerationItem checked>
              Sixth
            </EnumerationItem>
          </Enumeration>
        </EnumerationItem>
      </Enumeration>
    </ExampleCard>
  );
}

const nestedCode = deindent`
  <Enumeration type="numbered">
    <EnumerationItem>
      First
      <Enumeration type="bulleted">
        <EnumerationItem>
          Second
        </EnumerationItem>
        <EnumerationItem>
          Third
        </EnumerationItem>
      </Enumeration>
    </EnumerationItem>
    <EnumerationItem>
      Fourth
      <Enumeration type="checklist">
        <EnumerationItem>
          Fifth
        </EnumerationItem>
        <EnumerationItem checked>
          Sixth
        </EnumerationItem>
      </Enumeration>
    </EnumerationItem>
  </Enumeration>
`;
