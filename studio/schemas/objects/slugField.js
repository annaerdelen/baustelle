import { CustomSlugInput } from '../../components/CustomSlugInput';
import { slugify, slugValidation } from '../../utils/sanityHelper';

export default {
  name: 'slugField',
  type: 'slug',
  description: 'Is a part of the URL that serves as an unique identifier of the page.',
  options: { source: 'title', slugify },
  validation: slugValidation,
  components: {
    input: CustomSlugInput,
  },
};
