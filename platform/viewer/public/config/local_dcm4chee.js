window.config = {
  whiteLabeling: {
    createLogoComponentFn: function(React) {
      return React.createElement(
        'a',
        {
          target: '_blank',
          rel: 'noopener noreferrer',
          className: 'text-white underline',
          href: 'www.actonindia.com',
        },
        React.createElement('img', {
          src: '/assets/actonlogo.jpeg',
          width: '160',
          heigth: '80',
          alt: 'Acton Healthcare',
        })
        //React.createElement('h5', {}, 'Acton Healthcare')
      );
    },
  },
  routerBasename: '/',
  showStudyList: true,
  extensions: [],
  modes: [],
  // below flag is for performance reasons, but it might not work for all servers
  omitQuotationForMultipartRequest: false,
  showLoadingIndicator: true,
  dataSources: [
    {
      friendlyName: 'DCM4CHEE Server',
      namespace: '@ohif/extension-default.dataSourcesModule.dicomweb',
      sourceName: 'dicomweb',
      configuration: {
        name: 'DCM4CHEE',
        wadoUriRoot: 'https://localhost:8443/dcm4chee-arc/aets/DCM4CHEE/wado',
        qidoRoot: 'https://localhost:8443/dcm4chee-arc/aets/DCM4CHEE/rs',
        wadoRoot: 'https://localhost:8443/dcm4chee-arc/aets/DCM4CHEE/rs',
        qidoSupportsIncludeField: true,
        imageRendering: 'wadors',
        enableStudyLazyLoad: true,
        thumbnailRendering: 'wadors',
        //requestOptions: {
        //  auth: 'admin:admin',
        //},
      },
    },
  ],
  studyListFunctionsEnabled: true,
  defaultDataSourceName: 'dicomweb',
};
