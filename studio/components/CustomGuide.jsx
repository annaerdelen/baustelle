/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/react-in-jsx-scope */
import { Container, Box, Text } from '@sanity/ui';
import { FiGrid, FiArrowRight, FiLink } from 'react-icons/fi';

const spacing = { between: 7 };
const imagesStyles = { height: '100%', width: '100%', maxWidth: '100%', marginTop: '0.6rem', border: '0.5px solid black' };
const iconStyles = { paddingRight: '0.4rem' };

export const CustomGuide = () => {
  return (
    <Container>
      <Container paddingTop={6} paddingBottom={spacing.between}>
        <Box paddingBottom={5}>
          <Text size={4}>🛎️ Services</Text>
        </Box>
        <Text size={1}>
          <div>
            <Text size={2}>Sanity</Text>
            <p>
              <a href="https://www.sanity.io" target="_blank" rel="noopener noreferrer">
                Sanity
              </a>{' '}
              is a platform for structured content. It comes with an open source editing environment called{' '}
              <a href="https://www.sanity.io/studio" target="_blank" rel="noopener noreferrer">
                Sanity Studio
              </a>
              . This is the content mangement system (CMS) we use and where you are currently located. The Studio is fully customized to your needs
              and can be extended by a developer at any time. All of the content such as text, files and images are hosted on their servers, which we
              use to create a bespoke digital platform.
            </p>
            <p>
              We use Sanity in the free (pay-as-you-go) version. If you would like to extend the feature set, have a look at the{' '}
              <a href="https://www.sanity.io/pricing" target="_blank" rel="noopener noreferrer">
                Growth Plan
              </a>
              , which enables AI Assist, Multiple user roles, Scheduled publishing or Comments.
            </p>
          </div>
          <div>
            <Text size={2}>Mux</Text>
            <p>
              <a href="https://www.mux.com/" target="_blank" rel="noopener noreferrer">
                Mux
              </a>{' '}
              is a video hosting platform that specializes in the processing and playback of video and audio. The platform therefore enables us to
              integrate videos into the website particularly fast and efficiently. Mux automatically adjusts the video quality to the user's bandwidth
              and only loads videos piece by piece rather than completely, which means that videos can be played and loaded very quickly.
            </p>
            <p>
              It also has excellent integration with Sanity. To upload video files, just select "Video" in the media field and upload the video
              directly to Sanity (it is handled by Mux under the hood). Mux automatically provides a preview image of the first frame of the video,
              which we display on the website while the video is loading.
            </p>
          </div>
          <div>
            <Text size={2}>Netlify</Text>
            <p>
              <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
                Netlify
              </a>{' '}
              is a next-generation web hosting service. It works by being permanently connected to the website's code repository and running a build
              process through this connection when it detects updates to the codebase or when content is published. This process converts the code
              into static HTML, CSS and JS files, which are then served to website visitors via a global network of servers (called Content Delivery
              Network, CDN). This means that users receive a cached version of the websites from the server closest to them, which reduces load times
              enormously.
            </p>
          </div>
        </Text>
      </Container>

      <Container paddingBottom={spacing.between}>
        <Box paddingBottom={3}>
          <Text size={4}>🚀 Publishing Content</Text>
        </Box>
        <Text size={1}>
          <p>
            Don't forget to hit »Publish« on the bottom right after you've added content. <br /> Every time you publish content, the website re-builds
            on Netlify. This means that <strong>changes will be live after 30 - 50 seconds.</strong> Have a look in your{' '}
            <a href="/dashboard">Dashboard</a> to monitor this process.
          </p>
          {/* //TODO remove */}
          <p style={{ color: 'crimson' }}>
            While the website is still under development or the initial content management has not yet been completed, changes are immediately
            visible.
          </p>
        </Text>
      </Container>

      <Container paddingBottom={spacing.between}>
        <Box paddingBottom={3}>
          <Text size={4}>👀 Preview Mode</Text>
        </Box>
        <Text size={1}>
          <p>
            Preview mode allows you to see changes before publishing. Navigate to the page you want to preview and click on the the three dots in the
            bottom right corner. Then click on »Open Preview«. This will open the page in a new tab and a red preview banner at the bottom appears.
          </p>
          <p>
            After you edited content, you don't need to click »Publish«, <strong>just refresh the page</strong> and the draft changes appear
            immediately. Remember, any changes made in preview mode will not be visible to the public until you hit the »Publish« button.
          </p>
          <p>Please be aware of the following:</p>
          <ul>
            <li>You need to be logged in to your Sanity Studio in the same browser as the preview.</li>
            <li>Preview mode does not work for content that can be found in global settings.</li>
            <li>This feature does not work in Firefox currently.</li>
            <li>It may increase API requests, which are limited in the free version.</li>
          </ul>
        </Text>
      </Container>

      <Container paddingBottom={spacing.between}>
        <Box paddingBottom={3}>
          <Text size={4}>📄 Working with PDFs</Text>
        </Box>
        <Text size={1}>
          <p>
            It is also possible to link files such as PDFs within a text. To do this, please highlight the word to be linked in the text editor and
            select "External Link". If you already have a URL to the file, paste it into the field. If not, PDFs can also be hosted with Sanity;
            upload the file to the <a href="/media">media library,</a> click on it, and select "Copy URL" at the bottom left.
          </p>
        </Text>
      </Container>

      <Container paddingBottom={spacing.between}>
        <Box paddingBottom={3}>
          <Text size={4}>🖥️ Building Pages, Choosing Content Blocks/Modules</Text>
        </Box>
        <Text size={1}>
          <p>
            Most pages are built based on the idea of content modules or blocks, these are like lego pieces you can use to build and display content
            in a variety of ways. Feel free to create test pages and experiment with those blocks. New modules can be added at any time in
            consultation with the designer. Here's an overview of the available blocks:
          </p>
        </Text>

        {/* //TODO update icons */}
        <Box paddingTop={4}>
          <Text size={2}>
            <FiGrid style={iconStyles} /> Hero
          </Text>
          <img style={imagesStyles} src="https://cdn.sanity.io/images/hnuo52b9/production/644366fb82104a6762594f3dc746d565e96c5495-1508x886.jpg" />
        </Box>
        <Box paddingTop={4}>
          <Text size={2}>
            <FiArrowRight style={iconStyles} /> Carousel
          </Text>
          <img style={imagesStyles} src="https://cdn.sanity.io/images/hnuo52b9/production/656cadb9644544610cdbb4cfd114913aa3c61bb4-1508x886.jpg" />
        </Box>
        <Box paddingTop={4}>
          <Text size={2}>
            <FiLink style={iconStyles} /> Link List
          </Text>
          <img style={imagesStyles} src="https://cdn.sanity.io/images/hnuo52b9/production/38fda2f08c8880e1c221a5c849c9c3237c80785e-1508x76.jpg" />
        </Box>
      </Container>

      <Container paddingBottom={spacing.between}>
        <Box paddingBottom={3}>
          <Text size={4}>🧑 Inviting Project Members</Text>
        </Box>
        <Text size={1}>
          <p>Click on your avatar at the top right and go to »Invite members«.</p>
        </Text>
      </Container>

      <Container paddingBottom={spacing.between}>
        <Box paddingBottom={3}>
          <Text size={4}>🔎 SEO</Text>
        </Box>
        <Text size={1}>
          <p>
            I have made every effort to technically optimize the website for search engine optimization. If you have any requests for adjustments in
            this regard, please contact me. Nevertheless, content is the most important part of SEO. Simple tips to follow:
          </p>
          <ul>
            <li>
              <strong>Image optimization</strong> <br />
              Use meaningful image descriptions. Not »Image of a dog«, but rahter »A cute golden retriever puppy plays in the sunlight in the garden
              while happily looking at a toy ball«.
            </li>
            <li>
              <strong>Optimize meta tags</strong> <br />
              Consider writing meta descriptions for each page. Your can do this by opening the »SEO« field at the top of every page.
            </li>
            <li>
              <strong>Relevant keywords</strong> <br />
              Identify keywords that fit your business. Integrate them naturally into your website texts, headings and meta descriptions.
            </li>
            <li>
              <strong>Qualitative content</strong> <br />
              Create high-quality, unique content. Google prefers informative and useful texts. Make sure that your content answers the questions of
              your target group.
            </li>
            <li>
              <strong>Relevant links</strong> <br />
              The text you use for an internal link (anchor text) should be relevant to the linked content. Avoid generic phrases like "click here"
              and instead choose descriptive words that reflect the content of the target page.
            </li>
          </ul>
        </Text>
      </Container>

      <Container paddingBottom={spacing.between}>
        <Box paddingBottom={3}>
          <Text size={4}>🖼️ Images</Text>
        </Box>
        <Text size={1}>
          <p>
            Images uploaded to Sanity are automatically compressed and converted to the WebP format. In the frontend, I use the lazy loading method,
            which means that images are only loaded when they are needed or come into the viewport. In addition, different sizes of photos are
            rendered and automatically adapted to the respective end device.
          </p>
          <p>
            Nevertheless, you should make sure that you do not upload images that are too large. Images that do not exceed 1MB are a good guide in
            terms of file size. However, it also depends on the dimensions – max. 4000px on the wide side usually works well.
          </p>
        </Text>
      </Container>

      <Container paddingBottom={spacing.between}>
        <Box paddingBottom={3}>
          <Text size={4}>🛒 Shopify</Text>
        </Box>
        <Text size={1}>
          <p>
            For the e-commerce part of the website, we use Shopify to manage the products and Sanity for their content. <br />
          </p>
          <p>
            If you want to create a new product, navigate to your Shopify dashboard and proceed from there. Make sure to give the product a title,
            upload one photo and add all important product-related information (such as price, inventory, shipping, etc.). The photo that is uploaded
            there is only displayed in the shopping cart and in the checkout process. <br />
            As soon as a product has been created or updated in Shopify, it is synced with Sanity. Sanity is now responsible for the entire content
            part, which is used for the product detail pages, among other things. To customize or create the content for the products, simply go to
            the corresponding product in Sanity.
          </p>
        </Text>
      </Container>
    </Container>
  );
};
