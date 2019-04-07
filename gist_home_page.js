/* eslint no-unused-vars: off */

const env = require('dotenv').config();
const { client } = require('nightwatch-cucumber');
const base = require('bizzy-nightwatch-base-page');

const gistHome = {
  url: function () {
    const url = base.setURL(process.env.BASE_URL_GIST);
    return url;
  },
  testData: {
    txtDescription1: 'Test Create Gist',
    txtFileName1: 'test',
    txtCodeBody: 'Code Body Here',
    txtEditCodeBody: 'Update Code',
    txtFileName2: 'test_2.js',
    txtFileName3: 'test_3.js',
  },
  elements: {
    btnNewGist: '.a.HeaderNavlink.text-bold.pr-3',
    inputDesc: '.input.form-control.input-block.input-contrast',
    inputFileName: '.input.form-control.filename.js-gist-filename.js-blob-filename',
    inputBody: '.div.CodeMirror-scroll',
    btnCreatePublicGist: '.btn.js-gist-create',
    itemCreatedNewGist: '.user-select-contain.gist-blob-name.css-truncate-target',
    btnitemAllGist: '.flex-auto.py-3.text-bold.text-right.f6.lh-condensed',
    itemGistList: '.css-truncate-target',
    btnEdit: '.pagehead-actions.float-none>li>a>.btn.btn-sm',
    btnUpdateGit: '.btn.btn-primary',
    bodyUpdatedCode: '.blob-code.blob-code-inner.js-file-line',
    btnDelete: '.btn.btn-sm.btn-danger',
  },
  commands: [{
    navigateToGistHomePage: function () {
      return this.navigate();
    },
    clickButtonNewGits: function () {
      base.clickLinkText(this, gistHome.elements.btnNewGist);
    },
    clickButtonCreatePublicGist: function () {
      base.clickButton(this, gistHome.elements.btnCreatePublicGist);
    },
    clickButtonList: function () {
      base.clickButton(this, gistHome.elements.btnitemAllGist);
    },
    clickButtonSelectedGitList: function () {
      base.clickButton(this, gistHome.elements.itemGistList);
    },
    clickButtonEdit: function () {
      base.clickButton(this, gistHome.elements.btnEdit);
    },
    clickButtonUpdatedGist: function () {
      base.clickButton(this, gistHome.elements.btnUpdateGit);
    },
    clickButtonDelete: function () {
      base.clickButton(this, gistHome.elements.btnDelete);
    },
    insertGistDescription: function () {
      base.setValueTextField(this, gistHome.elements.inputDesc, gistHome.testData.txtDescription1);
    },
    insertGistFileName: function () {
      base.setValueTextField(this, gistHome.elements.inputFileName, gistHome.testData.txtFileName1);
    },
    insertGistBody: function () {
      base.setValueTextField(this, gistHome.elements.inputBody, gist.testData.txtCodeBody);
    },
    insertEditedGistBody: function () {
      base.setValueTextField(this, gistHome.elements.inputBody, gist.testData.txtEditCodeBody);
    },
    assertNewGit: function () {
      base.assertContainsText(this, gistHome.elements.itemCreatedNewGist, gist.testData.txtFileName1);
    },
    assertNewGitFailed: function () {
      base.assertNotContainsText(this, gistHome.elements.itemCreatedNewGist, gist.testData.txtFileName1);
    },
    assertDeletedTest: function () {
      base.assertNotContainsText(this, gistHome.elements.itemGistList, gist.testData.txtFileName3);
    },
    assertListedGit: function () {
      base.assertContainsText(this, gistHome.elements.itemGistList, gist.testData.txtFileName2);
      base.assertContainsText(this, gistHome.elements.itemGistList, gist.testData.txtFileName3);
    },
    assertUpdatedBodyCode: function () {
      base.assertContainsText(this, gistHome.elements.bodyUpdatedCode, gist.testData.txtEditCodeBody);
    },
  }],
};

module.exports = gistHome;
