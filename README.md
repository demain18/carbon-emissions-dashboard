This project has been developed for the Hanaloop Frontend Developer Exercise.

# Getting Started

Need to install all dependency modules and run'yarn dev'.

```bash
npm install
```

```bash
yarn dev
```

# Core Development Points

## Atomic-Pattern Project Structure

This project has been developed by following Atomic-Pattern Design. Every Section has its own purpose and rules.

app/page.tsx is not used for logic stuff, just for Organizing and Layout Components.

![alt text](https://github.com/demain18/carbon-emissions-dashboard/blob/main/public/images/atomic.jpg?raw=true)

- **Model Section:** Injection data model from mockupData.ts containing Object of dataset.

- **Organisms:** Dealing with models and all the logic part. Most of the Zustand states are handled by this section.

- **Molecuels:** Combination of atom components, Have a lot of flexible and can be combined even their sibling componets (\*Not recommend)

- **Atoms:** The smallest unit of components like Text, Button, Form. It has to be can not decompose on this level. What's unique part of this is that all the components have the most scalability possible.

The best of this Design Pattern is that it can be recycled for every component. For that flexibility and Scalability, Atom components have a lot of Props To respond to various situations, and avoid situations like creating another component to implement similar UI, just like what was there before.

```typescript
// Atoms/RText.tsx
export interface Props {
  children?: React.ReactNode | null;
  bold?: boolean;
  h1?: boolean;
  h2?: boolean;
  sm?: boolean;
  xsm?: boolean;
  color?: string;
  inter?: boolean;
  stick?: boolean;
  alignLeft?: boolean;
  alignRight?: boolean;
  alignCenter?: boolean;
  nonSelectDisabled?: boolean;
  block?: boolean;
}
```

It looks a bit overcomplicated, but every Atom Component is encapsulated. It's easy to recognize their use and can be used just like the HeaderlessUI Library.

## Emotion Styled and CSS Selector Separations

I planned to separate the use of styled and CSS selectors of emotions to distinguish between parents and parent's additional styles.

- Styled is for the mother of the component who has a name for their styles. It means that styled components are for Layout things.

- CSS is for applying different styles bind of many situations, like Text Component needs to have attributes like `Bold`, `AlignLeft`, and `DisplayBlock`.

This way of styling pattern covers all kinds of components we need.

```typescript
function Text(bold) {
  return <TextContainer css={bold && TextBoldStyled} />;
}

const TextContainer = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.3;
  font-weight: 400;
  color: white;
`;

const TextBoldStyled = css`
  font-weight: 500;
`;
```

## Data-Driven DTO

Each dummy data has its own interface named DTO. It makes it Possible to use various type of JavaScript methods like `.toSting()`, `.map()`, `.round()`, `.reduce()` etc.

```typescript

export interface GhgEmission {
  yearMonth: string;
  source: string;
  emissions: number;
}

export interface CompaniesDto {
  id: string;
  name: string;
  countryCode: CountryCode;
  emissions: GhgEmission[];
}

export const PostData: PostDataDto[] = [...]
```

Also, have a side-effect to identify types on useState for binding Complicated Datatypes. It makes it easy to bind data from the api.ts fetch functions.

```typescript
import { PostDataPreload, PostDataDto } from "@/lib/mockupData";

const [data, setData] = useState<PostDataDto[]>(PostDataPreload);
const posts = await fetchPosts();

setData(posts);
```

## Readable/Editable Modal

Modal Component has flexibility that can change forms Readable to Editable in just one click.

![alt text](https://github.com/demain18/carbon-emissions-dashboard/blob/main/public/images/2_1.jpeg?raw=true)

![alt text](https://github.com/demain18/carbon-emissions-dashboard/blob/main/public/images/2_3.jpeg?raw=true)

## Skeleton Loading UI

I developed Skeleton Loading for the RText Component with Pure CSS. It works without any other library.

If the `children` attribute has a null value, RText Components transform to Skeleton Loading.

```typescript
function RText(isChlidrenNull) {
  return <TextContainer css={[isChildrenNull && SkeletonStyle]} />;
}

const TextContainer = styled.p`
  margin: 0;
  font-size: 16px;
  line-height: 1.3;
  font-weight: 400;
  color: ${colors.white}; // located with global.module.ts
`;

const shimmer = keyframes`
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
`;

const SkeletonStyle = css`
  color: ${colors.borderGray} !important;
  min-height: 1.3em;
  width: 100%;
  display: block;
  background: linear-gradient(
    90deg,
    ${colors.borderGray} 0%,
    ${colors.lightGray} 50%,
    ${colors.borderGray} 100%
  );
  background-size: 200% 100%;
  animation: ${shimmer} 1.5s infinite linear;
`;
```

## Zustand State Subscribe

I have a technical issue where the Board data fetching method is not triggered by the Modal's submit event. So I create modalOpend and popupOpend state on Zustand, and located it on the Board's useEffect hook. Now data fetch functions are triggered by Modal's events.

```typescript
useEffect(() => {
  const loadData = async () => {
    try {
      const posts = await fetchPosts();
      setData(posts);
    } catch (e) {
      console.error("Data Loaded Failure", e);
    } finally {
      setIsLoading(false);
    }
  };
  loadData();
}, [modalOpened, popupOpened]);
```

## Popup Transition

When implementing popups, simply determining display via React state makes applying transitions difficult. Therefore, we adopted a method where the component is always rendered but hidden off-screen, then exposed based on the boolean state value.

```typescript
// Organisms/Popup.tsx
export default function Popup({}: Props) {
  const { popupOpened, popupIsSuccessfulStyled } = useModalStore();

  return (
    <PopupContainer
      css={[
        popupOpened && PopupContainerDisplayed,
        popupIsSuccessfulStyled === false && PopupFailedStyled,
      ]}
    >
      {popupIsSuccessfulStyled ? (
        <RText stick bold>
          Submit Success.
        </RText>
      ) : (
        <RText stick bold>
          Submit has been Failed.
        </RText>
      )}
    </PopupContainer>
  );
}

const PopupContainer = styled.div`
  ${Transition}
  transition-duration: 0.35s;

  position: absolute;
  top: -10%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 15px;
  border-radius: 8px;

  background-color: ${colors.success};
  border: 3px solid ${colors.success};
  box-shadow: 0 0 50px ${colors.success}80, 0 0 5px rgba(255, 255, 255, 0.7);

  z-index: 10;
`;

const PopupContainerDisplayed = css`
  top: 6%;
`;

const PopupFailedStyled = css`
  background-color: ${colors.failed};
  border: 3px solid ${colors.failed};
  box-shadow: 0 0 50px ${colors.failed}80, 0 0 5px rgba(255, 255, 255, 0.7);
`;

// lib/basicStore.ts
interface ModalState {
  popupOpened: boolean;
  popupIsSuccessfulStyled: boolean;
  togglePopup: (isSuccess: boolean) => void;
}
const useModalStore = create<ModalState>((set) => ({
  popupOpened: false,
  popupIsSuccessfulStyled: true,
  togglePopup: (isSuccess: boolean) => {
    set({ popupOpened: true, popupIsSuccessfulStyled: isSuccess });
    setTimeout(() => {
      set({ popupOpened: false, popupIsSuccessfulStyled: isSuccess });
    }, 1500);
  },
}));
```

# Additional Thinkings

- Since there were no predefined mockups for the project, I actively utilized Figma's Free Template. Most UI Design tasks were surprisingly smooth thanks to the tool's capabilities.

- AI-generated content accounted for less than 10% of the project, using the Gemini model. I reviewed all the code rather than just pasting it, so I can provide accurate explanations for every unit. (Except for the parts involving mathematical calculations)

- Unit testing was excluded from implementation since I haven't experienced it in a real-world work environment.

- Total time spent on Exercise was **20 hours**.

### Demonstration video

[Demonstration video link](https://drive.google.com/file/d/1ksHzqbUWv7XXeRPYYbY9m86SNgmQRHyQ/view?usp=sharing)
