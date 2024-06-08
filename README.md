Slutprojekt för gränssnittsutveckling

## För att starta projektet

    npx json-server --watch db.json
    npm run start-pc

---

## Projektanalys

För mitt projekt valde jag att använda React då jag tidigare arbetat med det och kände mig mer bekväm med det. Jag valde även att endast använda Json-server och inte använda JWT för simpelhetens skull då jag ville lägga mer fokus på att försöka designa.

Jag började med att skapa grundläggande Figma design mobile-first där jag huvudsakligen fokuserade på user-flow och generell UX. Designen utvecklades jämsides med funktionaliteten av hemsidan då jag är mer bekväm med att testa saker i medan jag skriver CSS, i stället för i figma. Jag fortsatte arbeta mobile-first fram tills det att all funktionalitet och alla sidor var färdiga för den mobilanpassade sidan innan det att jag anpassade det befintliga för att se bra ut på desktop. Jag har försökt att tänka på storleken på knappar etcetera under hela arbetets gång.

Mobile-first som jag lärt mig sen tidigare har underlättat extremt mycket, då jag kan tänka mig att anpassningarna jag tillämpat hade varit väldigt mycket jobbigare att lägga till efter det att jag redan byggt desktophemsidan. Dock nu i efterhand hade jag nog följt samma arbetsflöde men per sida i stället för hela hemsidan. Detta hade underlättat anpassningen lite mer då jag hade kunnat upptäcka förändringar som hade gjort hemsidan lättare att koda samt mer i fas med min vision på både plattformar samtidigt. Eller om jag upptäckt i tid att vissa saker inte fungerade riktigt som jag ville på desktopversionen så hade jag kunnat göra separata komponenter för mobil / desktop.

Jag valde direkt då jag skapade appen att använda useContext för att hantera varukorgen för att undvika så mycket propdrilling som möjligt. Från tidigare erfarenhet kan det bli mycket stökigt. Eftersom jag redan använde useContext för min varukorg så skapade jag även ett context för användaren. Nu i efterhand hade jag nog även skrivit en useEffect för att hämta cart och user från localstorage när man först öppnar hemsidan. För tillfället implementerar jag inte localstorage någonstans och jag tror att persistance hade förbättrat användarupplevelsen.

Nu i efterhand hade jag nog förbättrat min useFetch hook för att kunna använda den för saker utöver GET requests, alternativt skapat en separat hook för PATCH / PUT / POST. Mina helper funktioner kanske jag också hade gjort till hooks i stället.

En annan förbättring jag hade gjort var att ha mer uniform kod. I början av projektet fastnade jag mellan om jag ville använda arrowfunktioner eller bara vanliga funktioner då jag brukade göra arrowfunktioner när jag arbetade med react tidigare men nu under denna kurs har jag använt vanliga funktioner.

---

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
