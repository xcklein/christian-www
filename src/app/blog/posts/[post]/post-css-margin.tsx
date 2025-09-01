import { CopyBlock, vs2015 } from '@/components/code-blocks';
import { Text } from '@/components/material';

export function PostCssMargin() {
  const html1 = [
    `<div class="parent">`,
    `  <div class="child">child</div>`,
    `</div>`,
  ].join('\n');
  const css1 = [
    `.parent {`,
    `  ...`,
    `}`,
    `.child {`,
    `  ...`,
    `  margin: 16px;`,
    `}`,
  ].join('\n');
  const css2 = [
    `.parent {`,
    `  ...`,
    `  padding: 16px;`,
    `}`,
    `.child {`,
    `  ...`,
    `}`,
  ].join('\n');
  const css3 = [
    `.parent {`,
    `  ...`,
    `  padding: 16px;`,
    `  display: flex;`,
    `  flex-direction: column;`,
    `  gap: 16px;`,
    `}`,
    `.child {`,
    `  ...`,
    `}`,
  ].join('\n');
  const html2 = [
    `<div class="parent">`,
    `  <div class="child">title</div>`,
    `  <div class="child-container">`,
    `    <div class="child">label a</div>`,
    `    <div class="child">textbox a</div>`,
    `  </div>`,
    `  <div class="child-container">...</div>`,
    `  <div class="child-container">...</div>`,
    `</div>`,
  ].join('\n');

  return (
    <div className="flex flex-col gap-4">
      <Text>
        That&apos;s right, the CSS property that riddles your older code is now
        obsolete in most scenarios.
      </Text>
      <Text>
        The CSS <code>margin</code> property is a means of positioning an
        element by creating space around the applied element. This space can be
        applied uniformly around the element or on a per-side basis (top,
        bottom, left, and right).
      </Text>
      <Text>
        Who should be responsible for an element&apos;s positioning, though? The
        element to be positioned or its parent?
      </Text>
      <Text>Lets assume we are trying to build the following:</Text>
      <div className="border-[2px] border-palette-black dark:border-palette-white p-4">
        <div className="border-[2px] p-4 border-palette-red">
          <div className="border-[2px] border-palette-blue">child</div>
        </div>
      </div>
      <Text>We start with this markup:</Text>
      <CopyBlock
        language="tsx"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={html1}
      />
      <Text>Of course, we could apply a margin to the child.</Text>
      <CopyBlock
        language="css"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={css1}
      />
      <Text>
        This gives us the result we want, but it places the burden of
        positioning on the child. In a world where all software is final, there
        is no problem with this, but if, for example, you tried to move the
        child into another parent, it would likely not be positioned correctly.
        Instead, we can apply a padding to the parent.
      </Text>
      <CopyBlock
        language="css"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={css2}
      />
      <Text>
        Which gives us the result we are looking for without styling the child.
      </Text>
      <iframe
        width="100%"
        height="300"
        src={`//jsfiddle.net/xcklein/sgyw5uhp/11/embedded/result,html,css/dark`}
      />
      <Text>Now what about when we have multiple children?</Text>
      <div className="border-[2px] border-palette-black dark:border-palette-white p-4">
        <div className="border-[2px] p-4 flex flex-col gap-4 border-palette-red">
          <div className="border-[2px] border-palette-blue">child a</div>
          <div className="border-[2px] border-palette-blue">child b</div>
          <div className="border-[2px] border-palette-blue">child c</div>
        </div>
      </div>
      <Text>
        The parent&apos;s padding from the previous example handles the outer
        spacing, but what do we do about the spacing between children? We have
        to use top and bottom margins, right? No! This would once again be
        placing the responsibility of positioning onto the positioned element.
        Instead, we can make the parent element a grid or flex layout with
        gutters. This looks like the following:
      </Text>
      <CopyBlock
        language="css"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={css3}
      />
      <Text>
        Where <code>display: flex</code> enables flex layout,{' '}
        <code>flex-direction: column</code> specifies we want children ordered
        vertically, and <code>gap: 16px</code> declares the amount of space
        between each child. And viola! We have our arrangement. This comes with
        the additional benefit of any new children added here automatically
        inheriting the proper positioning.
      </Text>
      <iframe
        width="100%"
        height="300"
        src={`//jsfiddle.net/xcklein/576kcdz4/2/embedded/result,html,css/dark`}
      />
      <Text>
        But what if the spacing between elements is not consistent throughout
        the page? Suppose we have a form with pairs of labels and text boxes
        like so:
      </Text>
      <div className="border-[2px] border-palette-black dark:border-palette-white p-4">
        <div className="border-[2px] p-4 flex flex-col gap-6 border-palette-red">
          <div className="border-[2px] border-palette-blue">title</div>
          <div className="flex flex-col gap-1">
            <div className="border-[2px] border-palette-blue">label a</div>
            <div className="border-[2px] border-palette-blue">textbox a</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="border-[2px] border-palette-blue">label b</div>
            <div className="border-[2px] border-palette-blue">textbox b</div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="border-[2px] border-palette-blue">label c</div>
            <div className="border-[2px] border-palette-blue">textbox c</div>
          </div>
        </div>
      </div>
      <Text>
        We can deal with this through flex or grid, as well. We just have to use
        more than one. We do this by wrapping the pairs of labels and textboxes
        in container elements and treating each pair as one unit.
      </Text>
      <CopyBlock
        language="tsx"
        theme={vs2015}
        codeBlock
        showLineNumbers
        text={html2}
      />
      <div className="border-[2px] border-palette-black dark:border-palette-white p-4">
        <div className="border-[2px] p-4 flex flex-col gap-6 border-palette-red">
          <div className="border-[2px] border-palette-blue">title</div>
          <div className="flex flex-col gap-1 border-[2px] border-palette-green">
            <div>label a</div>
            <div>textbox a</div>
          </div>
          <div className="flex flex-col gap-1 border-[2px] border-palette-green">
            <div>label b</div>
            <div>textbox b</div>
          </div>
          <div className="flex flex-col gap-1 border-[2px] border-palette-green">
            <div>label c</div>
            <div>textbox c</div>
          </div>
        </div>
      </div>
      <Text>
        This allows us to solve the outer spacing problem on its own. The
        spacing between labels and textboxes then becomes a separate positioning
        problem which should hopefully look familiar, albeit a bit tighter.
        Simply give the new container elements their own flex styling to
        position their label and textbox children just like our earlier example.
      </Text>
      <div className="border-[2px] border-palette-black dark:border-palette-white p-4">
        <div className="border-[2px] flex flex-col gap-1 border-palette-green">
          <div className="border-[2px] border-palette-blue">label</div>
          <div className="border-[2px] border-palette-blue">textbox</div>
        </div>
      </div>
      <Text>The full solution looks like this:</Text>
      <iframe
        width="100%"
        height="300"
        src={`//jsfiddle.net/xcklein/58bsaj6g/8/embedded/result,html,css/dark`}
      />
      <Text>
        Now what about horizontally centering? That&apos;s traditionally handled
        with <code>margin: auto</code> on the element to be centered.
      </Text>
      <div className="border-[2px] border-palette-black dark:border-palette-white p-4">
        <div className="border-[2px] p-4 flex flex-col gap-4 items-center border-palette-red">
          <div className="border-[2px] border-palette-blue">child a</div>
          <div className="border-[2px] border-palette-blue">child b</div>
          <div className="border-[2px] border-palette-blue">child c</div>
        </div>
      </div>
      <Text>
        Flex has a solution for this, too! Rather than setting{' '}
        <code>margin: auto</code> on each child, you can use properties like{' '}
        <code>align-items</code> or <code>justify-content</code> on the parent.
      </Text>
      <iframe
        width="100%"
        height="300"
        src={`//jsfiddle.net/xcklein/sxnv7ewb/2/embedded/result,html,css/dark`}
      />
      <Text>So is this the end of margin?</Text>
      <Text>
        No. As with any software guidance there will be exceptions. We should
        not immediately discount margin, but usages should be intentional.
      </Text>
      <Text>
        Next time you reach for that margin property, just remember to stop and
        think for a moment: is this positioning responsibility that could be
        offloaded to the parent?
      </Text>
      <Text>Ta-ta!</Text>
    </div>
  );
}
