# Task Sensor Mobile

## Prerequisites

Make sure you have a installed **Node.js** above version 18 and **Yarn** on your Windows or macOS system. If you don’t have installed tools, follow these steps:

1. Download the latest version of **Node.js LTS** from the [official Node.js website](https://nodejs.org).

2. Installing Yarn.

   - For Windows:
     Open a command prompt or PowerShell window and run the following command:

     ```powershell
     npm install --global yarn
     ```

   - For macOS:
     Open a terminal and run the following command:

     ```powershell
     sudo npm install --global yarn
     ```

## Installing

To install application and start the project, follow these steps:

1. Open a terminal and navigate to the main directory of project.

2. Install the project dependencies:

   ```powershell
   yarn install
   ```

3. Once the dependencies are installed, start the project:

   ```powershell
   yarn start
   ```

4. After starting, you will find all the necessary information for development in the terminal or command prompt where the app is running. The terminal output will provide details and instructions related to project.

<!-- TODO: Run app on devices via USB and WiFi -->

## Running Application

1. Install the **Expo Go** app on your iOS or Android device and connect to the same wireless network as your computer.

2. On **Android**, use the Expo Go app to scan the QR code from your terminal to open your project.

3. On **iOS**, use the built-in QR code scanner of the default iOS Camera app.

## Running Application on Android Emulator in Windows

To run application on an Android emulator in Windows, follow these steps:

### Check Virtualization

To use the Android emulator in Android Studio, virtualization needs to be enabled on your computer. Here's how to check if virtualization is enabled:

1. Restart your computer and enter the **BIOS or UEFI settings**. The key to access the BIOS/UEFI settings may vary depending on your computer manufacturer (common keys include F2, Del, Esc, F10 or F12). Check your computer's documentation or manufacturer's website for the specific key.

2. Once you are in the BIOS/UEFI settings, navigate to the **Advanced** or **CPU** section. Look for an option related to virtualization technology, such as "Intel Virtualization Technology" or "AMD-V".

3. Enable the virtualization option if it is disabled. The exact option name and location may vary depending on your computer's BIOS/UEFI interface.

4. Save the changes and exit the BIOS/UEFI settings.

   **Note:** Enabling virtualization may require administrator privileges on your computer.

### Android Emulator Instalation

1. **Download Android Studio:**

   - Go to the [Android Studio website](https://developer.android.com/studio) and click on the "Download" button.
   - Once the download is complete, run the installer.
   - Make sure to check the checkbox next to _'Android Virtual Device'_ in the _'Choose Components'_ section of the installation wizard (in the second window).
   - Follow the on-screen instructions.

2. **Configure Android SDK:**

   - Launch Android Studio and wait for it to initialize.
   - On the "Welcome to Android Studio" screen, select _"More Actions"_ and then click on _"SDK Manager"_.
   - Select the _"SDK Platforms"_ tab from within the SDK Manager, then check the box next to _"Show Package Details"_ in the bottom right corner. _Uncheck all boxes_. Look for and expand the _Android 13 (Tiramisu)_ entry, then make sure the following items are checked:
     - Android SDK Platform 33
     - Sources for Android 33
     - Intel x86_64 Atom System Image
     - Google APIs Intel x86_64 Atom System Image
     - Google Play Intel x86_64 Atom System Image
   - Next, select the _"SDK Tools"_ tab and check the box next to _"Show Package Details"_ here as well. _Uncheck all boxes_. Look for and expand the _Android SDK Build-Tools_ entry, then make sure the following items are checked:
     - expand the Android SDK Build-Tools entry, then make sure that 34.0.0 and 33.0.0 are selected.
     - Android Emulator
     - Android SDK Platform-Tools
   - Finally, click _"Apply"_ to download and install the Android SDK and related build tools.

3. **Configure environment variables:**

   - Open PowerShell and enter the following command:

     ```powershell
     [Environment]::SetEnvironmentVariable('ANDROID_HOME',"C:\Users\$env:USERNAME\Android\Sdk", 'User')
     [Environment]::SetEnvironmentVariable('Path', "$env:Path;C:\Users\$env:USERNAME\Android\Sdk\platform-tools", 'User')
     ```

4. **Set up a virtual device (emulator):**

   - Open Android Studio and click on the _"More Actions"_ button.
   - Select _"Virtual Device Manager"_ from the drop-down menu.
   - Remove the virtual device if it is present.
   - Click on the _"Create Virtual Device"_ button and follow the steps to create a virtual device.
   - Select a system that includes the _"Google Play"_ icon and click next.
   - On the _"Recommended"_ tab, choose an _Tiramisu API Level 33 image_, click on the _download_ icon, install it, and then go to the next section.
   - Finish the installation. Once the virtual device is created, you can launch it from the AVD Manager.

5. **Verify the installation:**

   - Open a new PowerShell window and run the following command to ensure Android Studio and the Android SDK are properly installed:

     ```powershell
     sdkmanager --version
     avdmanager --version
     ```

     If both commands display the version numbers, it means the installation was successful.

6. **Run application on an Android emulator**

   - Start the project.
   - After starting, you will find details and instructions related to your Expo project in the terminal or command prompt where the app is running, and press **a** to run android emulator.
   - Wait for the app to load and start running in the emulator. You can interact with the app just like you would on a physical Android device.

7. **You're now ready for React Native Expo development.**
