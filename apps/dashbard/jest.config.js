module.exports = {
  name: 'dashbard',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/dashbard',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
