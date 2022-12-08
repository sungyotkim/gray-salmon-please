# gray-salmon-please
A simple website that talks about how farmed salmon is gray. This was a project to learn and practice TypeScript using React.

## Technologies/APIs used
- React/Redux
- TypeScript
- HTML/CSS
- Chart.js
- Vite

## Features
- Interactive chart created with Chart.js
- Interactive slider created with HTML and CSS
- Fully responsive web design 

## Development
Starting with simple templates, I learned how to declare and initialize variables in React using TypeScript.

For example, this would be how React Props would be coded
```javascript
interface Props {
  text: string;
  bool: boolean;
  i: number;
  fn: () => void; //number, string, etc. or void if expecting no return
  fn2: (num: number) => string;
  obj: {
    f1: string;
  };
  person: Person;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
```

I also learned to include type definitions for using React Hooks using templates as shown:
```javascript
  const [count, setCount] = useState<number | null | undefined>(5); // This state can be a number or null. Note: undefined is different than null so you have to specify.
  const inputRef = useRef<HTMLInputElement>(null);
```

Code snippet involving use of props along with one of the state variables used in the slider component:
```javascript
interface SliderComponentProps {
  sliderColor: string;
  setSliderColor: React.Dispatch<React.SetStateAction<string>>;
  sliderCost: number;
  setSliderCost: React.Dispatch<React.SetStateAction<number>>;
}

const [sliderDistance, setSliderDistance] = useState<string>(
    "calc(100% - 23.5px)"
  );
```

To create a responsive nav bar that changes to a hamburger menu for smaller screens, window size context was made to track the current window's size.
useState variables were needed to check both the window's width and whether mobile view should be engaged or not along with setter variables to change them as needed.
```
interface ContextState {
  windowWidth: number | (() => number);
  setWindowWidth: React.Dispatch<React.SetStateAction<number | (() => number)>>;
  mobileView: boolean;
  setMobileView: React.Dispatch<React.SetStateAction<boolean>>;
}

export const WindowSizeContext = createContext({} as ContextState);

export const WindowSizeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [windowWidth, setWindowWidth] = useState<number | (() => number)>(
    getWindowWidth()
  );
  const [mobileView, setMobileView] = useState<boolean>(false);

  return (
    <>
      <WindowSizeContext.Provider
        value={{
          windowWidth,
          setWindowWidth,
          mobileView,
          setMobileView,
        }}
      >
        {children}
      </WindowSizeContext.Provider>
    </>
  );
};
```

## Resources
Multiple studies/sites were used to obtain the information for this project.
[Research article by Dissing, et al.](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0019032)
[Research article by Aflnes, et al.](http://www.umb.no/statisk/ior/ferdig.pdf)
[Research article by Steine, et al.](https://www.researchgate.net/publication/23945037_The_Effect_of_Color_on_Consumer_WTP_for_Farmed_Salmon)
[DSM](https://www.dsm.com/anh/products-and-services/tools/salmofan.html)
