module.exports = {
  name: 'customers',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/customers',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
