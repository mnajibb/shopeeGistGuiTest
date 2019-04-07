const { client } = require('nightwatch-cucumber');
const { Given, When, Then } = require('cucumber');

const browser = client.page.gist.gist_home_page();

Given(/^user is at gist home page$/, () => {
  return browser.navigateToGistHomePage();
});

When(/^User click New gist$/, () => {
  return browser.clickButtonNewGits();
});

When(/^User insert Gist description$/, () => {
  return browser.insertGistDescription();
});

When(/^User insert file name include extension$/, () => {
  return browser.insertGistFileName();
});

When(/^User insert body file$/, () => {
  return browser.insertGistBody();
});

When(/^User click Create public gist$/, () => {
  return browser.clickButtonCreatePublicGist();
});

Then(/^User will see new created gist listed$/, () => {
  return browser.assertNewGit();
});

Then(/^User can not be create new gist and the button is still not visible$/, () => {
  return browser.assertNewGitFailed();
});

When(/^User click see all of your gists$/, () => {
  return browser.clickButtonList();
});

Then(/^All of user gist should be shown$/, () => {
  return browser.assertListedGit();
});

When(/^User click one of selected created gist$/, () => {
  return browser.clickButtonSelectedGitList();
});

When(/^User click edit$/, () => {
  return browser.clickButtonEdit();
});

When(/^User edited selected body$/, () => {
  return browser.insertEditedGistBody();
});

When(/^User click Update public gist$/, () => {
  return browser.clickButtonUpdatedGist();
});

Then(/^User will see updated gist shown$/, () => {
  return browser.assertUpdatedBodyCode();
});

When(/^User click delete$/, () => {
  return browser.clickButtonDelete();
});

Then(/^User current git should be deleted$/, () => {
    return browser.();
  });
  