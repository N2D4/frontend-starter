import { ExampleCard } from "@/components/example-card";
import { Paragraph } from "@/components/paragraph";
import { deindent } from "@/utils/strings";
import { Box } from "@mui/joy";

export function BlockTextExample() {
  return (
    <ExampleCard code={blockTextCode} language="tsx">
      <Paragraph className="n2-ignore-on-this-page" h1 id="lorem-ipsum-dolor">
        Lorem Ipsum Dolor
      </Paragraph>
      <Paragraph className="n2-ignore-on-this-page" body>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet sit amet cursus sit amet dictum sit amet. Nisl vel pretium lectus quam id leo in vitae turpis.
      </Paragraph>
      <Paragraph className="n2-ignore-on-this-page" body>
        Senectus et netus et malesuada fames ac turpis egestas. Faucibus in ornare quam viverra orci sagittis eu volutpat odio. Et tortor at risus viverra adipiscing at in tellus integer.
      </Paragraph>
      <Paragraph className="n2-ignore-on-this-page" h2 id="consectetur-dolor">
        Consectetur dolor
      </Paragraph>
      <Paragraph className="n2-ignore-on-this-page" body>
        Auctor urna nunc id cursus. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur. Leo vel fringilla est ullamcorper eget. Netus et malesuada fames ac.
      </Paragraph>
      <Paragraph className="n2-ignore-on-this-page" h2 id="ullamcorper-dolor">
        Ullamcorper scelerisque
      </Paragraph>
      <Paragraph className="n2-ignore-on-this-page" body>
        Orci a scelerisque purus semper eget duis at tellus at. Ullamcorper morbi tincidunt ornare massa eget egestas purus viverra. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu. Elementum nibh tellus molestie nunc non blandit massa.
      </Paragraph>
      <Paragraph className="n2-ignore-on-this-page" sidenote>
        Laoreet suspendisse interdum consectetur libero id faucibus nisl. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat.
      </Paragraph>
    </ExampleCard>
  );
}

const blockTextCode = deindent`
  <Paragraph h1 id="lorem-ipsum-dolor">
    Lorem Ipsum Dolor
  </Paragraph>
  <Paragraph body>
    {...}
  </Paragraph>
  <Paragraph body>
    {...}
  </Paragraph>
  <Paragraph h2 id="consectetur-dolor">
    Consectetur dolor
  </Paragraph>
  <Paragraph body>
    {...}
  </Paragraph>
  <Paragraph h2 id="ullamcorper-dolor">
    Ullamcorper scelerisque
  </Paragraph>
  <Paragraph body>
    {...}
  </Paragraph>
  <Paragraph sidenote>
    {...}
  </Paragraph>
`;
