# Groups all files in a directory by their base name
# Usage example: .\group-files.ps1 -folder "src/leetcode"

# Directory where your files are currently located
param (
    [Parameter(Mandatory = $true)]
    [string]$folder
)

# Get all .ts files in the directory
$files = Get-ChildItem -Path $folder -Filter *.ts

# Iterate over all .ts files
foreach ($file in $files) {
    # Remove the file extension and any trailing '.test' to get the base name
    $baseName = [System.IO.Path]::GetFileNameWithoutExtension($file.Name)
    if ($baseName.EndsWith(".test")) {
        $baseName = $baseName.Substring(0, $baseName.Length - 5)
    }

    # Create a new directory for this base name
    $newDirectoryPath = Join-Path -Path $folder -ChildPath $baseName
    if (!(Test-Path -Path $newDirectoryPath)) {
        New-Item -ItemType Directory -Path $newDirectoryPath | Out-Null
    }

    # Move the file to the new directory
    Move-Item -Path $file.FullName -Destination $newDirectoryPath
}